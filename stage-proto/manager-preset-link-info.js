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
  let rcInfo = prePartInfo.rcInfo
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
  if (prePartInfo.drwObjLink && prePartInfo.drwObjLink.length > 0) {
    // set drwObj
    drwObj = getDrwObjInfoFromLink(prePartInfo.drwObjLink, resInfo)
  }
  if (prePartInfo.moveSetLink && prePartInfo.moveSetLink.length > 0) {
    // set moveSetInfo
    const mPresetLinkInfo = resInfo.mvsPresetLinkList.find(info => info.uCode === prePartInfo.moveSetLink)
    const mPresetInfo = resInfo.mvsPresetList.find(info => info.uCode === mPresetLinkInfo.moveSetPresetLink)
    moveSetInfo = createMoveSetInfoFromPresetInfo(mPresetInfo)
  }
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
    rcInfo: rcInfo,
    drwObj: drwObj,
    moveSetInfo: moveSetInfo,
    hitInfo: hitInfo,
    effectInfo: effectInfo,
    armsInfo: armsInfo,
    child: child
  }
}

function getDrwObjInfoFromLink(drwObjLink, resInfo) {
  const linkInfo = resInfo.drwObjLinkInfoList.find(i => i.uCode === drwObjLink)
  if (!linkInfo) return null

  return getDrwObjInfoFromLinkInfo(linkInfo, resInfo)
}

function getDrwObjInfoFromLinkInfo(linkInfo, resInfo) {
  const uCode = `${linkInfo.drwRawInfo}`
  const rawInfo = resInfo.rawInfoList.find(i => i.uCode === linkInfo.drwRawInfo)
  const colorSetInfo = resInfo.colorSetInfoList.find(i => i.uCode === linkInfo.colorSetInfo)
  let colorList = []
  if (colorSetInfo) {
    const palettesInfo = resInfo.colorPalettesInfoList.find(i => i.uCode === colorSetInfo.palettes)
    if (palettesInfo) {
      for (const i of colorSetInfo.list) {
        colorList.push(palettesInfo.list[i])
      }
    }
  }

  let rcInfo = linkInfo.rcInfo
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

  for (const childLinkInfo of linkInfo.child) {
    const childInfo = getDrwObjInfoFromLinkInfo(childLinkInfo, resInfo)
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

function createArmsInfoByPreset(presetInfo, resInfo, partPresetInfoList) {
  const aUCode = presetInfo.uCode
  const aTCode = presetInfo.tCode
  const actInfo = {
    type: presetInfo.actInfo.type,
    frame: presetInfo.actInfo.frame,
    frameMax: presetInfo.actInfo.frameMax,
    count: presetInfo.actInfo.count,
    countMax: presetInfo.actInfo.countMax
  }
  const actPartSetList = []
  for (const actPreset of presetInfo.actPartSetList) {
    const partPreset = partPresetInfoList.find(info => info.uCode === actPreset.partPresetLink)
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

function setPartArmsByPreset(partInfo, armsPresetLink, resInfo, partPresetInfoList) {
  if (armsPresetLink.targetType === 'uCode') {
    if (partInfo.uCode === armsPresetLink.target) {
      if (!partInfo.armsInfo) partInfo.armsInfo = { list: [] }
      partInfo.armsInfo.list.push(createArmsInfoByPreset(armsPresetLink, resInfo, partPresetInfoList))
    }
  }
  if (armsPresetLink.targetType === 'tCode') {
    if (partInfo.tCode === armsPresetLink.target) {
      if (!partInfo.armsInfo) partInfo.armsInfo = { list: [] }
      partInfo.armsInfo.list.push(createArmsInfoByPreset(armsPresetLink, resInfo, partPresetInfoList))
    }
  }

  for (const childInfo of partInfo.child) {
    setPartArmsByPreset(childInfo, armsPresetLink, resInfo, partPresetInfoList)
  }
}

function setPartArmsByPresetList(partInfo, armsPresetLinkList, resInfo, partPresetInfoList) {
  for (const armsPresetLink of armsPresetLinkList) {
    setPartArmsByPreset(partInfo, armsPresetLink, resInfo, partPresetInfoList)
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
    rcInfo: {
      r: partInfo.rcInfo.r,
      c: partInfo.rcInfo.c,
      rsz: partInfo.rcInfo.rsz,
      csz: partInfo.rcInfo.csz
    },
    drwObj: partInfo.drwObj,
    moveSetInfo: moveSetInfo,
    hitInfo: partInfo.hitInfo,
    effectInfo: partInfo.effectInfo,
    armsInfo: armsInfo,
    child: child
  }
}