const unitPresetInfo00Frd00 = {
  uCode: 'u-00-frd-00',
  tCode: 'fighter-00',
  hitType: 'friendly',
  hitTarget: 'enemy',
  wType: 'w', // wing type : cw (cannon wing) / w (wing)
  idleType: 'idle-00', // idle-cw / idle-00
  reverseType: 'none', // none / v (vertical)
  calcJrcInfo: { uCode: 'calc-jrc-info-03' },
  skinInfoList: [
    { rawUCode: 'layer-raw-info-raw-front-sample-00',
      tCode: 'f', mtxNum: 20, bSetNum: -1, colorSetUCode: 'color-set-info-00-03',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-left-sample-00',
      tCode: 'l', mtxNum: 20, bSetNum: -1, colorSetUCode: 'color-set-info-00-03',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-left-sample-00',
      tCode: 'r', mtxNum: 20, bSetNum: -1, colorSetUCode: 'color-set-info-00-03',
      rawDirType: 'h-reverse', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-back-sample-00',
      tCode: 'bk', mtxNum: 20, bSetNum: -1, colorSetUCode: 'color-set-info-00-03',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-body-sample-00',
      tCode: 'bd', mtxNum: 20, bSetNum: -1, colorSetUCode: 'color-set-info-00-03',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' }
  ],
  armsPresetList: [
    { uCode: 'arms-preset-00-f-shoot', hitType: 'act', hitTarget: 'enemy' },
    { uCode: 'arms-preset-00-l-shoot', hitType: 'act', hitTarget: 'enemy' },
    { uCode: 'arms-preset-00-r-shoot', hitType: 'act', hitTarget: 'enemy' }
  ]
}

const unitPresetInfo00Enemy00 = {
  uCode: 'u-00-e-00',
  tCode: 'fighter-00',
  hitType: 'enemy',
  hitTarget: 'friendly',
  wType: 'w', // wing type : cw (cannon wing) / w (wing)
  idleType: 'idle-00', // idle-cw / idle-00
  reverseType: 'v', // none / v (vertical)
  calcJrcInfo: { uCode: 'calc-jrc-info-03' },
  skinInfoList: [
    { rawUCode: 'layer-raw-info-raw-front-sample-01',
      tCode: 'f', mtxNum: 1, bSetNum: -1, colorSetUCode: 'color-set-info-00-07',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-left-sample-01',
      tCode: 'l', mtxNum: 1, bSetNum: -1, colorSetUCode: 'color-set-info-00-07',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-left-sample-01',
      tCode: 'r', mtxNum: 1, bSetNum: -1, colorSetUCode: 'color-set-info-00-07',
      rawDirType: 'h-reverse', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-back-sample-01',
      tCode: 'bk', mtxNum: 1, bSetNum: -1, colorSetUCode: 'color-set-info-00-07',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
    { rawUCode: 'layer-raw-info-raw-body-sample-01',
      tCode: 'bd', mtxNum: 1, bSetNum: -1, colorSetUCode: 'color-set-info-00-07',
      rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' }
  ],
  armsPresetList: []
}