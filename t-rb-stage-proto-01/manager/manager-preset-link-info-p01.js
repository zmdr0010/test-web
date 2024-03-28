let presetInfoManager = {
  list: [], // part presetInfo list
  armsPresetList: []
}

function initPartPresetInfoList(list) {
  presetInfoManager.list = list
}

function initArmsPresetInfoList(list) {
  presetInfoManager.armsPresetList = list
}

function createPartInfoFromPresetInfoUCode(uCode, presetInfoManager, resInfo) {
  const presetInfo = presetInfoManager.list.find(i => i.uCode === uCode)
  if (!presetInfo) return null
  return createPartInfoFromPresetInfo(presetInfo, resInfo)
}

function createPartInfoFromPresetInfo(presetInfo, resInfo) {
  return createPartInfoFromPresetPartInfo(presetInfo.partInfo, resInfo)
}

function createPartInfoFromPresetPartInfo(prePartInfo, resInfo) {
  let uCode = prePartInfo.uCode
  let tCode = prePartInfo.tCode
  let jrcType = prePartInfo.jrcType
  let rcInfo = copyRcInfo(prePartInfo.rcInfo)
  let drwObj = null
  let moveSetInfo = null
  let hitInfo = null
  let effectInfo = null
  let armsInfo = null
  let child = []
  let isRCszCalculating = false

  if (rcInfo.rsz === -1 && rcInfo.csz === -1) {
    // calculating (include drwObj and child) rsz, csz
    isRCszCalculating = true
  }
  if (prePartInfo.drwObjInfo && prePartInfo.drwObjInfo.uCode) {
    // set drwObj
    drwObj = getDrwObjInfoFromInfo(prePartInfo.drwObjInfo, resInfo)
  }
  if (prePartInfo.moveSetLink && prePartInfo.moveSetLink.length > 0) {
    // set moveSetInfo
    const mPresetInfo = resInfo.mvsPresetList.find(info => info.uCode === prePartInfo.moveSetLink)
    moveSetInfo = createMoveSetInfoFromPresetInfo(mPresetInfo)
  }
  if (prePartInfo.movePresetInfo) moveSetInfo = createMoveSetInfoFromPresetInfo(prePartInfo.movePresetInfo)
  if (prePartInfo.effectLink && prePartInfo.effectLink.length > 0) {
    // set effectInfo
  }
  if (prePartInfo.armsLink && prePartInfo.armsLink.length > 0) {
    // set armsInfo
  }

  let r = rcInfo.r
  let c = rcInfo.c
  let lastR = 0
  let lastC = 0
  if (isRCszCalculating) {
    if (drwObj) {
      const lr = drwObj.rcInfo.r + drwObj.rcInfo.rsz + r
      const lc = drwObj.rcInfo.c + drwObj.rcInfo.csz + c
      lastR = Math.max(lastR, lr)
      lastC = Math.max(lastC, lc)
    }
  }

  for (const childPreInfo of prePartInfo.child) {
    const childPartInfo = createPartInfoFromPresetPartInfo(childPreInfo, resInfo)
    child.push(childPartInfo)

    if (isRCszCalculating) {
      const lr = childPartInfo.rcInfo.r + childPartInfo.rcInfo.rsz + r
      const lc = childPartInfo.rcInfo.c + childPartInfo.rcInfo.csz + c
      lastR = Math.max(lastR, lr)
      lastC = Math.max(lastC, lc)
    }
  }

  if (isRCszCalculating) {
    // set calculating rcInfo
    const lr = r + rcInfo.rsz
    const lc = c + rcInfo.csz
    lastR = Math.max(lastR, lr)
    lastC = Math.max(lastC, lc)
    rcInfo.rsz = lastR - r
    rcInfo.csz = lastC - c
  }

  if (prePartInfo.hitLink && prePartInfo.hitLink.length > 0) {
    // set hitInfo
    hitInfo = getHitInfoFromLink(prePartInfo.hitLink, rcInfo, resInfo)
  }

  return {
    uCode: uCode,
    tCode: tCode,
    jrcType: jrcType,
    rcInfo: rcInfo,
    drwObj: drwObj,
    moveSetInfo: moveSetInfo,
    hitInfo: hitInfo,
    effectInfo: effectInfo,
    armsInfo: armsInfo,
    state: 'normal',
    child: child
  }
}

function getDrwObjInfoFromInfo(drwObjInfo, resInfo) {
  const uCode = `${drwObjInfo.drwRawInfo}`
  let rawInfo = resInfo.rawInfoList.find(i => i.uCode === drwObjInfo.uCode)
  const colorSetInfo = resInfo.colorSetInfoList.find(i => i.uCode === drwObjInfo.colorSetInfo.uCode)
  let colorList = []
  if (colorSetInfo) {
    // for (let i=0; i<rawInfo.rawNum; i++) {
    //   const rRate = i / rawInfo.rawNum
    //   const cRate = (colorSetInfo.list.length - 1) * rRate
    //   const cIndex = Math.floor(cRate)
    //   const c = colorSetInfo.list[cIndex]
    //   const c1 = colorSetInfo.list[cIndex + 1]
    //   let r = c[0] + Math.round((c1[0] - c[0]) * (cRate - cIndex))
    //   let g = c[1] + Math.round((c1[1] - c[1]) * (cRate - cIndex))
    //   let b = c[2] + Math.round((c1[2] - c[2]) * (cRate - cIndex))
    //   if (r > 255) r = 255
    //   if (g > 255) g = 255
    //   if (b > 255) b = 255
    //   colorList.push([r, g, b])
    // }
    colorList = createColorList(colorSetInfo, rawInfo.rawNum)
    // for (const color of colorSetInfo.list) {
    //   colorList.push(color)
    // }
  }

  if (drwObjInfo.rawType === 'layers') rawInfo = parsingLayerRawInfoToRawInfo(rawInfo)
  if (drwObjInfo.rawDirType === 'h-reverse') reverseRawInfo(rawInfo, 'h')
  if (drwObjInfo.rawDirType === 'v-reverse') reverseRawInfo(rawInfo, 'v')

  if (drwObjInfo.mtxInfo && drwObjInfo.mtxInfo.num >= 0) {
    let bSet = []
    if (drwObjInfo.mtxInfo.bSetNum >= 0) bSet = getMtxPresetX3BSet(drwObjInfo.mtxInfo.bSetNum)
    const mtxPresetList = getMtxPresetX3SampleList()
    const indices = getMtxIndices0002(drwObjInfo.mtxInfo.num)
    const mtxSet = getMtxSet(mtxPresetList, indices)

    if (drwObjInfo.rawType === 'layers') {
      const layerList = divideRawLayerToRawInfoList(rawInfo)
      const layerListX3 = []
      for (const layer of layerList) {
        const layerX3 = expandCheckRawCornerByMtxSetX3(layer, mtxSet, bSet)
        layerListX3.push(layerX3)
      }
      rawInfo = compRawInfoLayers(layerListX3)
    } else {
      rawInfo = expandCheckRawCornerByMtxSetX3(rawInfo, mtxSet, bSet)
    }
  }

  let rcInfo = copyRcInfo(drwObjInfo.rcInfo)
  let isRCszCalculating = false
  let r = rcInfo.r
  let c = rcInfo.c
  let lastR = 0
  let lastC = 0
  if (rcInfo.rsz === -1 && rcInfo.csz === -1) {
    // calculating (include child)
    isRCszCalculating = true
  }

  const child = []

  for (const childDrwInfo of drwObjInfo.child) {
    const childInfo = getDrwObjInfoFromInfo(childDrwInfo, resInfo)
    child.push(childInfo)

    if (isRCszCalculating) {
      const lr = childInfo.rcInfo.r + childInfo.rcInfo.rsz + r
      const lc = childInfo.rcInfo.c + childInfo.rcInfo.csz + c
      lastR = Math.max(lastR, lr)
      lastC = Math.max(lastC, lc)
    }
  }

  if (isRCszCalculating) {
    const lr = r + rawInfo.row
    const lc = c + rawInfo.column
    lastR = Math.max(lastR, lr)
    lastC = Math.max(lastC, lc)
    rcInfo.rsz = lastR - r
    rcInfo.csz = lastC - c
  }

  return {
    uCode: uCode,
    rcInfo: rcInfo,
    rawInfo: rawInfo,
    colorList: colorList,
    child: child
  }
}

function getHitInfoFromLink(hitLink, rcInfo, resInfo) {
  const hitInfo = resInfo.hitLinkInfoList.find(i => i.uCode === hitLink)
  if (!hitInfo) return null

  let hitBox = []

  if (hitInfo.type === 'part-area') {
    const rsz = rcInfo.rsz + hitInfo.objAreaInfo.addRsz
    const csz = rcInfo.csz + hitInfo.objAreaInfo.addCsz
    // left, right, top, bottom
    const l = hitInfo.objAreaInfo.r
    const r = hitInfo.objAreaInfo.r + rsz
    const t = hitInfo.objAreaInfo.c
    const b = hitInfo.objAreaInfo.c + csz
    hitBox.push([l, r, t, b])
  }
  if (hitInfo.type === 'hit-box') {
    hitBox = hitInfo.hitBox
  }

  return {
    hitBox: hitBox,
    // hitFrame: 0,
    // hitState: 0,
    // type: ''
  }
}

function createMoveSetInfoListFromPresetInfoList(presetList) {
  const list = []
  for (const preset of presetList) {
    list.push(createMoveSetInfoFromPresetInfo(preset))
  }
  return list
}

function createMoveSetInfoFromPresetInfo(presetInfo) {
  const moveSetInfo = {
    uCode: presetInfo.uCode,
    type: presetInfo.type, // stay / cycle / out / etc...
    moveInfo: null,
    currentMove: -1,
    list: [] // moveInfo list
  }

  for (const pMvInfo of presetInfo.list) {
    const mvInfo = {
      fps: pMvInfo.fps,
      d: pMvInfo.d,
      sr: 0,
      sc: 0,
      currentMove: 0,
      moveCount: 0,
      list: []
    }
    for (const md of pMvInfo.list) {
      mvInfo.list.push({
        dr: md.dr, // dir row
        dc: md.dc // dir column
      })
    }
    moveSetInfo.list.push(mvInfo)
  }
  return moveSetInfo
}
// mvs : move set
function setPartMoveSetByPreset(partInfo, mvsPresetLink, mvsPresetList) {
  if (mvsPresetLink.targetType === 'uCode') {
    if (partInfo.uCode === mvsPresetLink.target) {
      const preset = mvsPresetList.find(info => info.uCode === mvsPresetLink.moveSetPresetLink)
      partInfo.moveSetInfo = createMoveSetInfoFromPresetInfo(preset)
    }
  }
  if (mvsPresetLink.targetType === 'tCode') {
    if (partInfo.tCode === mvsPresetLink.target) {
      const preset = mvsPresetList.find(info => info.uCode === mvsPresetLink.moveSetPresetLink)
      partInfo.moveSetInfo = createMoveSetInfoFromPresetInfo(preset)
    }
  }

  for (const childInfo of partInfo.child) {
    setPartMoveSetByPreset(childInfo, mvsPresetLink, mvsPresetList)
  }
}
// mvs : move set
function setPartMoveSetByPresetList(partInfo, mvsPresetLinkList, mvsPresetList) {
  for (const presetLink of mvsPresetLinkList) {
    setPartMoveSetByPreset(partInfo, presetLink, mvsPresetList)
  }
}

function createArmsInfoByPreset(presetInfo, resInfo) {
  const aUCode = presetInfo.uCode
  const aTCode = presetInfo.tCode
  const actInfo = {
    type: presetInfo.actInfo.type,
    frame: presetInfo.actInfo.frame,
    frameMax: presetInfo.actInfo.frameMax,
    count: presetInfo.actInfo.count,
    countMax: presetInfo.actInfo.countMax,
    reverseInfo: presetInfo.actInfo.reverseInfo,
    hitType: presetInfo.actInfo.hitType,
    hitTarget: presetInfo.actInfo.hitTarget
  }
  const actPartSetList = []
  for (const actPreset of presetInfo.actPartSetList) {
    const partPreset = actPreset.partPresetInfo
    const partInfo = createPartInfoFromPresetInfo(partPreset, resInfo)
    const dRcInfo = {
      dr: actPreset.dRcInfo.dr,
      dc: actPreset.dRcInfo.dc
    }
    actPartSetList.push({
      part: partInfo,
      dRcInfo: dRcInfo
    })
  }
  return {
    uCode: aUCode,
    tCode: aTCode,
    actInfo: actInfo,
    actPartSetList: actPartSetList
  }
}

function setPartArmsByPreset(partInfo, armsPresetLink, resInfo) {
  if (armsPresetLink.targetType === 'uCode') {
    if (partInfo.uCode === armsPresetLink.target) {
      if (!partInfo.armsInfo) partInfo.armsInfo = { list: [] }
      partInfo.armsInfo.list.push(createArmsInfoByPreset(armsPresetLink, resInfo))
    }
  }
  if (armsPresetLink.targetType === 'tCode') {
    if (partInfo.tCode === armsPresetLink.target) {
      if (!partInfo.armsInfo) partInfo.armsInfo = { list: [] }
      partInfo.armsInfo.list.push(createArmsInfoByPreset(armsPresetLink, resInfo))
    }
  }

  for (const childInfo of partInfo.child) {
    setPartArmsByPreset(childInfo, armsPresetLink, resInfo)
  }
}

function setPartArmsByPresetList(partInfo, armsPresetLinkList, resInfo) {
  for (const armsPresetLink of armsPresetLinkList) {
    setPartArmsByPreset(partInfo, armsPresetLink, resInfo)
  }
}

function copyPartInfo(partInfo) {
  let child = []

  for (const childInfo of partInfo.child) {
    child.push(copyPartInfo(childInfo))
  }

  let moveSetInfo = null
  if (partInfo.moveSetInfo) {
    moveSetInfo = {
      uCode: partInfo.moveSetInfo.uCode,
      type: partInfo.moveSetInfo.type,
      moveInfo: partInfo.moveSetInfo.moveInfo,
      currentMove: partInfo.moveSetInfo.currentMove,
      list: [] // moveInfo list
    }
    for (const oMvInfo of partInfo.moveSetInfo.list) {
      const mvInfo = {
        fps: oMvInfo.fps,
        d: oMvInfo.d,
        sr: oMvInfo.sr,
        sc: oMvInfo.sc,
        currentMove: oMvInfo.currentMove,
        moveCount: oMvInfo.moveCount,
        list:[]
      }
      for (const md of oMvInfo.list) {
        mvInfo.list.push({
          dr: md.dr,
          dc: md.dc
        })
      }
      moveSetInfo.list.push(mvInfo)
    }
  }

  let armsInfo = null
  if (partInfo.armsInfo) {
    armsInfo = { list: [] }
    for (const oArmInfo of partInfo.armsInfo.list) {
      const actInfo = {
        type: oArmInfo.actInfo.type,
        frame: oArmInfo.actInfo.frame,
        frameMax: oArmInfo.actInfo.frameMax,
        count: oArmInfo.actInfo.count,
        countMax: oArmInfo.actInfo.countMax
      }
      const actPartSetList = []
      for (const actPst of oArmInfo.actPartSetList) {
        const dRcInfo = {
          dr: actPst.dRcInfo.dr,
          dc: actPst.dRcInfo.dc
        }
        actPartSetList.push({
          part: copyPartInfo(actPst),
          dRcInfo: dRcInfo
        })
      }
      const armInfo = {
        uCode: oArmInfo.uCode,
        tCode: oArmInfo.tCode,
        actInfo: actInfo,
        actPartSetList: actPartSetList
      }
      armsInfo.list.push(armInfo)
    }
  }

  return {
    uCode: partInfo.uCode,
    tCode: partInfo.tCode,
    rcInfo: copyRcInfo(partInfo.rcInfo),
    drwObj: partInfo.drwObj,
    moveSetInfo: moveSetInfo,
    hitInfo: partInfo.hitInfo,
    effectInfo: partInfo.effectInfo,
    armsInfo: armsInfo,
    child: child
  }
}

function copyRcInfo(rcInfo) {
  return {
    r: rcInfo.r,
    c: rcInfo.c,
    rsz: rcInfo.rsz,
    csz: rcInfo.csz
  }
}