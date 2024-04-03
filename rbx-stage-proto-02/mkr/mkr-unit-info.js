function createUnit(preInfo, resInfo) {
  const isReverseV = (preInfo.reverseType === 'v')
  let reverseInfo = null
  if (isReverseV) reverseInfo = { type: 'v' }
  const partInfo = createMainPart(preInfo, resInfo, isReverseV)

  const armsPresetList = []
  for (const preArm of preInfo.armsPresetList) {
    const armPreset = resInfo.armsPresetList.find(i => i.uCode === preArm.uCode)
    armsPresetList.push(createArmsPresetInfo(armPreset, preArm.hitType, preArm.hitTarget, reverseInfo))
  }

  createPartArmsByList(partInfo, armsPresetList, resInfo)

  return {
    uCode: preInfo.uCode,
    partInfo: partInfo,
    hitInfo: {
      hitFrame: 0,
      hitState: 0,
      type: preInfo.hitType,
      target: preInfo.hitTarget
    },
    statusInfo: {
      hp: 10
    }
  }
}

function createMainPart(preInfo, resInfo, isReverseV=false) {
  const presetInfo = createMainPartPresetInfo(preInfo.uCode, preInfo.skinInfoList)
  const partInfo = createPartInfo(presetInfo.partInfo, resInfo)
  const calcJrcInfo = resInfo.jrcInfoList.find(i => i.uCode === preInfo.calcJrcInfo.uCode)

  moveAutoJoin(partInfo, calcJrcInfo)

  if (isReverseV) reversePartInfoVertical(partInfo, partInfo.rcInfo.csz)

  // const fPart = partInfo.child.find(c => c.tCode === 'f')
  // const lPart = partInfo.child.find(c => c.tCode === 'l')
  // const rPart = partInfo.child.find(c => c.tCode === 'r')
  // const bkPart = partInfo.child.find(c => c.tCode === 'bk')
  //
  // if (preInfo.idleType === 'idle-cw') {
  //   lPart.frmBhvSetInfoList.push(createIdleCwL(lPart))
  //   rPart.frmBhvSetInfoList.push(createIdleCwR(rPart))
  // } else {
  //   lPart.frmBhvSetInfoList.push(createIdleL(lPart))
  //   rPart.frmBhvSetInfoList.push(createIdleR(rPart))
  // }
  // fPart.frmBhvSetInfoList.push(createIdleF(fPart))
  // bkPart.frmBhvSetInfoList.push(createIdleBK(bkPart))

  return partInfo
}