function createArmsInfo(presetInfo, resInfo) {
  const aUCode = presetInfo.uCode
  const aTCode = presetInfo.tCode
  const actInfo = {
    type: presetInfo.actInfo.type,
    actCode: presetInfo.actInfo.actCode,
    // frame: presetInfo.actInfo.frame,
    // frameMax: presetInfo.actInfo.frameMax,
    // count: presetInfo.actInfo.count,
    // countMax: presetInfo.actInfo.countMax,
    reverseInfo: copyReverseInfo(presetInfo.actInfo.reverseInfo),
    hitType: presetInfo.actInfo.hitType,
    hitTarget: presetInfo.actInfo.hitTarget
  }
  const actPartSetList = []
  for (const actPreset of presetInfo.actPartSetList) {
    const partPreset = actPreset.partPresetInfo
    const partInfo = createPartInfo(partPreset.partInfo, resInfo)
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

function createPartArms(partInfo, armsPresetInfo, resInfo) {
  if (armsPresetInfo.targetType === 'uCode') {
    if (partInfo.uCode === armsPresetInfo.target) {
      partInfo.armsInfoList.push(createArmsInfo(armsPresetInfo, resInfo))
    }
  }
  if (armsPresetInfo.targetType === 'tCode') {
    if (partInfo.tCode === armsPresetInfo.target) {
      if (!partInfo.armsInfo) partInfo.armsInfo = { list: [] }
      partInfo.armsInfoList.push(createArmsInfo(armsPresetInfo, resInfo))
    }
  }

  for (const childInfo of partInfo.child) {
    createPartArms(childInfo, armsPresetInfo, resInfo)
  }
}

function createPartArmsByList(partInfo, armsPresetList, resInfo) {
  for (const armsPreset of armsPresetList) {
    createPartArms(partInfo, armsPreset, resInfo)
  }
}