const samplePartPresetInfo = {
  uCode: 'part-preset-info-raw-front-sample-00',
  partInfo: {
    uCode: 'part-info-raw-front-sample-00',
    tCode: 'f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
    drwObjInfo: {
      uCode: 'layer-raw-info-raw-front-sample-00', // drwRawInfo uCode
      mtxInfo: { // null : origin (no mtx : direct drawing)
        num: 0, // -1 : origin (no mtx : direct drawing), 0 ~ n : mtx preset index
        bSetNum: -1 // -1 : none, 0 ~ n : bSet preset index
      },
      rawType: 'layers', // raw / layers
      rawDirType: 'normal', // normal / h-reverse / v-reverse
      colorSetInfo: {
        uCode: 'sample-color-set-info-raw-front-sample-00'
      },
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
      child: []
    },
    hitSetInfo: {
      uCode: 'hit-set-info-obj-area'
    },
    child: []
  }
}