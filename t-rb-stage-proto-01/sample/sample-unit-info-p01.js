const sampleUnitSetInfo00 = {
  f: { index: 0, mtxNum: 2, bSetNum: -1, colorSetUCode: 'sample-color-set-info-10'},
  l: { index: 10, mtxNum: 2, bSetNum: -1, colorSetUCode: 'sample-color-set-info-10'},
  // jrcType : cw (cannon wing)
  // 5, 6, 7, 8, 9, 10, 15, 24
  // l: { index: 5, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02', jrcType: 'cw'},
  bk: { index: 11, mtxNum: 2, bSetNum: -1, colorSetUCode: 'sample-color-set-info-10'},
  bd: { index: 19, mtxNum: 2, bSetNum: -1, colorSetUCode: 'sample-color-set-info-10'}
}
const sampleUnitSetInfo01 = {
  f: { index: 5, mtxNum: 4, bSetNum: -1, colorSetUCode: 'sample-color-set-info-06'},
  l: { index: 4, mtxNum: 4, bSetNum: -1, colorSetUCode: 'sample-color-set-info-06'},
  // jrcType : cw (cannon wing)
  // 5, 6, 7, 8, 9, 10, 15, 24
  // l: { index: 5, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02', jrcType: 'cw'},
  bk: { index: 17, mtxNum: 4, bSetNum: -1, colorSetUCode: 'sample-color-set-info-06'},
  bd: { index: 23, mtxNum: 4, bSetNum: -1, colorSetUCode: 'sample-color-set-info-06'}
}
const sampleUnitSetInfo02 = {
  f: { index: 7, mtxNum: 20, bSetNum: -1, colorSetUCode: 'sample-color-set-info-17'},
  l: { index: 10, mtxNum: 20, bSetNum: -1, colorSetUCode: 'sample-color-set-info-17'},
  // jrcType : cw (cannon wing)
  // 5, 6, 7, 8, 9, 10, 15, 24
  // l: { index: 5, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02', jrcType: 'cw'},
  bk: { index: 20, mtxNum: 20, bSetNum: -1, colorSetUCode: 'sample-color-set-info-17'},
  bd: { index: 26, mtxNum: 20, bSetNum: -1, colorSetUCode: 'sample-color-set-info-17'}
}

function createUnit00(hasArms=true) {
  const uCode = 'simple-unit-00'
  const partInfo = createMainPart00(uCode, sampleUnitSetInfo00)

  if (hasArms) {
    const armsPresetList = [
      createSimpleArmsPresetInfoByPreset(sampleArmsPresetInfoShootF, 'f', 'act', 'enemy'),
      createSimpleArmsPresetInfoByPreset(sampleArmsPresetInfoShootL, 'l', 'act', 'enemy'),
      createSimpleArmsPresetInfoByPreset(sampleArmsPresetInfoShootR, 'r', 'act', 'enemy')
    ]

    setPartArmsByPresetList(partInfo, armsPresetList, resInfo)
  }

  return {
    uCode: uCode,
    partInfo: partInfo,
    hitInfo: {
      hitFrame: 0,
      hitState: 0,
      type: 'friendly',
      target: 'enemy'
    },
    statusInfo: {
      hp: 5,
    }
  }
}

function createUnit01() {
  const uCode = 'simple-unit-01'
  return {
    uCode: uCode,
    partInfo: createMainPart00(uCode, sampleUnitSetInfo01),
    hitInfo: {
      hitFrame: 0,
      hitState: 0,
      type: 'friendly',
      target: 'enemy'
    },
    statusInfo: {
      hp: 5,
    }
  }
}

function createEnemy00(hasArms=true) {
  const uCode = 'simple-enemy-00'
  const partInfo = createMainPart00(uCode, sampleUnitSetInfo02, true)
  const reverseInfo = {
    type: 'v'
  }

  if (hasArms) {
    const armsPresetList = [
      createSimpleArmsPresetInfoByPreset(sampleArmsPresetInfoShootF, 'f-e',
        'e-act', 'friendly', reverseInfo),
      createSimpleArmsPresetInfoByPreset(sampleArmsPresetInfoShootL, 'l-e',
        'e-act', 'friendly', reverseInfo),
      createSimpleArmsPresetInfoByPreset(sampleArmsPresetInfoShootR, 'r-e',
        'e-act', 'friendly', reverseInfo)
    ]

    setPartArmsByPresetList(partInfo, armsPresetList, resInfo)
  }

  return {
    uCode: uCode,
    partInfo: partInfo,
    hitInfo: {
      hitFrame: 0,
      hitState: 0,
      type: 'enemy',
      target: 'friendly'
    },
    statusInfo: {
      hp: 5,
    }
  }
}

function createMainPart00(uCode, info, isReverseV=false) {
  const partList = createSimpleUnitPresetInfoP01FromInfo(info)
  const presetInfo = createSimpleUnitPresetInfoP01(uCode, partList)
  const partInfo = createPartInfoFromPresetInfo(presetInfo, resInfo)

  const lPart = partInfo.child.find(c => c.tCode === 'l')
  const rPart = partInfo.child.find(c => c.tCode === 'r')
  let calcJrcInfo = calcJrcInfoSample03
  if (partInfo.jrcType && partInfo.jrcType === 'cw') {
    calcJrcInfo = calcJrcInfoSample02
    initMoveSetInfoToPartInfo(lPart, createMoveSetInfoFromPresetInfo(sampleMoveSetCWIdleL))
    initMoveSetInfoToPartInfo(rPart, createMoveSetInfoFromPresetInfo(sampleMoveSetCWIdleR))
  } else {
    initMoveSetInfoToPartInfo(lPart, createMoveSetInfoFromPresetInfo(sampleMoveSetIdleL))
    initMoveSetInfoToPartInfo(rPart, createMoveSetInfoFromPresetInfo(sampleMoveSetIdleR))
  }
  const bkPart = partInfo.child.find(c => c.tCode === 'bk')
  initMoveSetInfoToPartInfo(bkPart, createMoveSetInfoFromPresetInfo(sampleMoveSetIdleBK))
  const fPart = partInfo.child.find(c => c.tCode === 'f')
  initMoveSetInfoToPartInfo(fPart, createMoveSetInfoFromPresetInfo(sampleMoveSetIdleF))

  moveAutoJoin(partInfo, calcJrcInfo)

  if (isReverseV) reversePartInfoVertical(partInfo, partInfo.rcInfo.csz)

  return partInfo
}