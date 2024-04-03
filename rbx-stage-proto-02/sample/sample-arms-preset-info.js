const sampleArmsPresetInfo = {
  uCode: 'sample-temp-player-arms-f-shoot',
  tCode: 'shoot',
  targetType: 'tCode', // tCode / uCode / direct-set
  target: 'f',
  actInfo: {
    type: 'cycle', // cycle / ui / count / etc...
    actCode: 'createArmsArtAct00',
    // frame: 20, // frame--
    // frameMax: 20,
    // count: 0,
    // countMax: 0
  },
  actPartSetList: [
    {
      skinInfo: {
        rawUCode: '20240122143329-mis-00-00',
        tCode: 'act', mtxNum: 0, bSetNum: -1, colorSetUCode: 'color-set-info-00-00',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02'
      },
      dRcInfo: { dr: 0, dc: 0 }
    },
    {
      skinInfo: {
        rawUCode: '20240122143329-mis-00-00',
        tCode: 'act', mtxNum: 0, bSetNum: -1, colorSetUCode: 'color-set-info-00-00',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02'
      },
      dRcInfo: { dr: -4, dc: 0 }
    },
    {
      skinInfo: {
        rawUCode: '20240122143329-mis-00-00',
        tCode: 'act', mtxNum: 0, bSetNum: -1, colorSetUCode: 'color-set-info-00-00',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02'
      },
      dRcInfo: { dr: 4, dc: 0 }
    }
  ]
}