function createArmsPresetInfo(preset, hitType, hitTarget, reverseInfo=null) {
  const actPartSetList = []
  for (const act of preset.actPartSetList) {
    const partPresetInfo = createSimplePartPresetInfo(act.skinInfo)

    let dr = act.dRcInfo.dr
    let dc = act.dRcInfo.dc

    actPartSetList.push({
      partPresetInfo: { partInfo: partPresetInfo },
      dRcInfo: { dr: dr, dc: dc }
    })
  }
  return {
    uCode: `${preset.uCode}-${preset.target}-${hitType}`,
    tCode: preset.tCode,
    targetType: preset.targetType,
    target: preset.target,
    actInfo: {
      type: preset.actInfo.type,
      actCode: preset.actInfo.actCode,
      // frame: preset.actInfo.frame,
      // frameMax: preset.actInfo.frameMax,
      // count: preset.actInfo.count,
      // countMax: preset.actInfo.countMax,
      reverseInfo: reverseInfo,
      hitType: hitType,
      hitTarget: hitTarget
    },
    actPartSetList: actPartSetList
  }
}