const sampleUnitSetInfo00 = {
  f: { index: 0, mtxNum: 12, bSetNum: -1, colorSetUCode: 'sample-color-set-info-01'},
  l: { index: 10, mtxNum: 5, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02'},
  // jrcType : cw (cannon wing)
  // 5, 6, 7, 8, 9, 10, 15, 24
  // l: { index: 5, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02', jrcType: 'cw'},
  bk: { index: 11, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-04'},
  bd: { index: 19, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-03'}
}
const sampleUnitSetInfo01 = {
  f: { index: 5, mtxNum: 17, bSetNum: -1, colorSetUCode: 'sample-color-set-info-03'},
  l: { index: 4, mtxNum: 15, bSetNum: -1, colorSetUCode: 'sample-color-set-info-01'},
  // jrcType : cw (cannon wing)
  // 5, 6, 7, 8, 9, 10, 15, 24
  // l: { index: 5, mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02', jrcType: 'cw'},
  bk: { index: 17, mtxNum: 4, bSetNum: -1, colorSetUCode: 'sample-color-set-info-02'},
  bd: { index: 23, mtxNum: 7, bSetNum: -1, colorSetUCode: 'sample-color-set-info-04'}
}

function getUnit00() {
  const uCode = 'simple-unit-00'
  return {
    uCode: uCode,
    partInfo: getMainPart00(uCode, sampleUnitSetInfo00)
  }
}

function getUnit01() {
  const uCode = 'simple-unit-01'
  return {
    uCode: uCode,
    partInfo: getMainPart00(uCode, sampleUnitSetInfo01)
  }
}

function getEnemy00() {
  const uCode = 'simple-enemy-00'
  return {
    uCode: uCode,
    partInfo: getMainPart00(uCode, sampleUnitSetInfo00, true)
  }
}

function getMainPart00(uCode, info, isReverseV=false) {
  const partList = getSimpleUnitPresetInfoP01FromInfo(info)
  const presetInfo = getSimpleUnitPresetInfoP01(uCode, partList)
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