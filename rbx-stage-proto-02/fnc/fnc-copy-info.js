function copyRcInfo(rcInfo) {
  return {
    r: rcInfo.r,
    c: rcInfo.c,
    rsz: rcInfo.rsz,
    csz: rcInfo.csz
  }
}

function copyHitInfo(hitInfo) {
  return {
    hitState: hitInfo.hitState,
    hitFrame: hitInfo.hitFrame,
    type: hitInfo.type,
    hitBox: copyHitBox(hitInfo.hitBox)
  }
}

function copyRawInfo(rawInfo) {
  const raw = []
  for (const rw of rawInfo.raw) raw.push(rw)
  return {
    uCode: rawInfo.uCode,
    row: rawInfo.row,
    column: rawInfo.column,
    rawNum: rawInfo.rawNum,
    raw: raw
  }
}

function copyColorList(colorList) {
  const list = []
  for (const rgb of colorList) list.push([rgb[0], rgb[1], rgb[2]])
  return list
}

function copyHitBox(hitBox) {
  const hBx = []
  for (const lRTB of hitBox) hBx.push([lRTB[0],lRTB[1],lRTB[2],lRTB[3]])
  return hBx
}

function copyReverseInfo(reverseInfo) {
  if (!reverseInfo) return null
  return {
    type: reverseInfo.type
  }
}

function copyDrwObj(drwObj) {
  const child = []
  for (const c of drwObj.child) child.push(copyDrwObj(c))

  return {
    uCode: drwObj.uCode,
    rcInfo: copyRcInfo(drwObj.rcInfo),
    rawInfo: copyRawInfo(drwObj.rawInfo),
    colorSetInfo: {
      uCode: drwObj.colorSetInfo.uCode
    },
    colorList: copyColorList(drwObj.colorList),
    chgColorList: copyColorList(drwObj.chgColorList),
    child: child
  }
}

function copyPartInfo(partInfo) {
  let child = []

  for (const childInfo of partInfo.child) {
    child.push(copyPartInfo(childInfo))
  }

  let armsInfoList = []

  for (const oArmInfo of partInfo.armsInfoList) {
    const actInfo = {
      type: oArmInfo.actInfo.type,
      actCode: oArmInfo.actInfo.actCode,
      // frame: oArmInfo.actInfo.frame,
      // frameMax: oArmInfo.actInfo.frameMax,
      // count: oArmInfo.actInfo.count,
      // countMax: oArmInfo.actInfo.countMax
      reverseInfo: copyReverseInfo(oArmInfo.actInfo.reverseInfo),
      hitType: oArmInfo.actInfo.hitType,
      hitTarget: oArmInfo.actInfo.hitTarget
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
    armsInfoList.push(armInfo)

  }

  return {
    uCode: partInfo.uCode,
    tCode: partInfo.tCode,
    rcInfo: copyRcInfo(partInfo.rcInfo),
    drwObj: copyDrwObj(partInfo.drwObj),
    hitInfo: copyHitInfo(partInfo.hitInfo),
    armsInfoList: armsInfoList,
    child: child,
    frmBhvSetInfoList: [],
    state: partInfo.state
  }
}