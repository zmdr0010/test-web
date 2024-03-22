const sampleUnitPreset00 = {
  uCode: 'sample-unit-00',
  partInfo: {
    uCode: 'part-info-sample-unit-00-main',
    tCode: 'main',
    rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},// -1 : calculating (include drwObj and child) on init
    drwObjInfo: null,
    moveSetLink: '',
    hitLink: 'hit-link-info-obj-area',
    effectLink: '',
    armsLink: '',
    child: []
  }
}

const sampleUnitPresetListP01 = [
  {
    partList: [
      { layerUCode: 'layer-raw-info-raw-front-sample-00',
        tCode: 'f', mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' },
      { layerUCode: 'layer-raw-info-raw-left-sample-00',
        tCode: 'l', mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' },
      { layerUCode: 'layer-raw-info-raw-left-sample-00',
        tCode: 'r', mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'h-reverse' },
      { layerUCode: 'layer-raw-info-raw-back-sample-00',
        tCode: 'bk', mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' },
      { layerUCode: 'layer-raw-info-raw-body-sample-00',
        tCode: 'bd', mtxNum: 1, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' }
    ]
  }
]

const sampleFLBKBDInfo = {
  f: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'},
  l: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'},
  bk: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'},
  bd: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'}
}

// jrcType : cw (cannon wing) - l index : [5, 6, 7, 8, 9, 10, 15, 24]
function getSimpleUnitPresetInfoP01FromInfo(info) {
  const layerUCodeF = sampleLayerRawInfoListP01F[info.f.index % sampleLayerRawInfoListP01F.length].uCode
  const mtxNumF = info.f.mtxNum
  const bSetNumF = info.f.bSetNum
  const colorSetUCodeF = info.f.colorSetUCode
  const indexL = info.l.index % sampleLayerRawInfoListP01L.length
  const layerUCodeL = sampleLayerRawInfoListP01L[indexL].uCode
  const mtxNumL = info.l.mtxNum
  const bSetNumL = info.l.bSetNum
  let jrcTypeL = ''
  // if (info.l.jrcType) jrcTypeL = info.l.jrcType
  for (const i of [5, 6, 7, 8, 9, 10, 15, 24]) {
    if (i === indexL) jrcTypeL = 'cw'
  }
  const colorSetUCodeL = info.l.colorSetUCode
  const layerUCodeBK = sampleLayerRawInfoListP01BK[info.bk.index % sampleLayerRawInfoListP01BK.length].uCode
  const mtxNumBK = info.bk.mtxNum
  const bSetNumBK = info.bk.bSetNum
  const colorSetUCodeBK = info.bk.colorSetUCode
  const layerUCodeBD = sampleLayerRawInfoListP01BD[info.bd.index % sampleLayerRawInfoListP01BD.length].uCode
  const mtxNumBD = info.bd.mtxNum
  const bSetNumBD = info.bd.bSetNum
  const colorSetUCodeBD = info.bd.colorSetUCode
  return [
    { layerUCode: layerUCodeF,
      tCode: 'f', mtxNum: mtxNumF, bSetNum: bSetNumF, colorSetUCode: colorSetUCodeF, rawDirType: 'normal' },
    { layerUCode: layerUCodeL,
      tCode: 'l', mtxNum: mtxNumL, bSetNum: bSetNumL, colorSetUCode: colorSetUCodeL, rawDirType: 'normal',
      jrcType: jrcTypeL },
    { layerUCode: layerUCodeL,
      tCode: 'r', mtxNum: mtxNumL, bSetNum: bSetNumL, colorSetUCode: colorSetUCodeL, rawDirType: 'h-reverse' },
    { layerUCode: layerUCodeBK,
      tCode: 'bk', mtxNum: mtxNumBK, bSetNum: bSetNumBK, colorSetUCode: colorSetUCodeBK, rawDirType: 'normal' },
    { layerUCode: layerUCodeBD,
      tCode: 'bd', mtxNum: mtxNumBD, bSetNum: bSetNumBD, colorSetUCode: colorSetUCodeBD, rawDirType: 'normal' }
  ]
}

function getSimpleUnitPresetInfoP01(uCode, partList) {
  const partChild = []

  let jrcType = ''
  for (const part of partList) {
    if (part.jrcType && part.jrcType.length > 0) jrcType = part.jrcType
    partChild.push(getSimplePartPresetInfoP01(part.layerUCode,
      part.tCode, part.mtxNum, part.bSetNum, part.colorSetUCode, part.rawDirType))
  }

  const info = {
    uCode: uCode,
    partInfo: {
      uCode: `part-info-${uCode}-main`,
      tCode: 'main',
      jrcType: jrcType,
      rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},// -1 : calculating (include drwObj and child) on init
      drwObjInfo: null,
      moveSetLink: '',
      hitLink: '',
      effectLink: '',
      armsLink: '',
      child: partChild
    }
  }
  return info
}