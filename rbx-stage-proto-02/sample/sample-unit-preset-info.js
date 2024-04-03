const sampleSkinInfoList = [ // rawType = layers (default)
  { layerUCode: 'layer-f',
    tCode: 'f', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' },
  { layerUCode: 'layer-l',
    tCode: 'l', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' },
  { layerUCode: 'layer-l',
    tCode: 'r', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'h-reverse' },
  { layerUCode: 'layer-bk',
    tCode: 'bk', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' },
  { layerUCode: 'layer-bd',
    tCode: 'bd', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00', rawDirType: 'normal' }
]

// f.index = layerRawInfoList00F[] index
// l.index = layerRawInfoList00L[] index
// bk.index = layerRawInfoList00BK[] index
// bd.index = layerRawInfoList00BD[] index
const samplePreSkinInfo = {
  f: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'},
  l: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'},
  bk: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'},
  bd: { index: 0, mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00'}
}

const sampleUnitPresetInfo = {
  uCode: '',
  tCode: 'fighter-00',
  hitType: 'friendly',
  hitTarget: 'enemy',
  wType: 'cw', // wing type : cw (cannon wing) / w (wing)
  idleType: 'idle-cw', // idle-cw / idle-00
  reverseType: 'none', // none / v (vertical)
  calcJrcInfo: { uCode: 'calc-jrc-info-03' },
  skinInfoList: [
    { rawUCode: 'layer-f',
      tCode: 'f', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-l',
      tCode: 'l', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-l',
      tCode: 'r', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00',
      rawDirType: 'h-reverse', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-bk',
      tCode: 'bk', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-bd',
      tCode: 'bd', mtxNum: 0, bSetNum: -1, colorSetUCode: 'sample-color-set-info-00',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' }
  ],
  armsPresetList: [
    { uCode: 'arms-preset-00-f-shoot', hitType: '', hitTarget: '' },
    { uCode: 'arms-preset-00-l-shoot', hitType: '', hitTarget: '' },
    { uCode: 'arms-preset-00-r-shoot', hitType: '', hitTarget: '' }
  ]
}