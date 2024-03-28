const partPresetInfoSampleListP01 = [ // sample
  {
    uCode: 'part-preset-info-raw-front-sample-00',
    partInfo: {
      uCode: 'part-info-raw-front-sample-00',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjInfo: {
        uCode: 'layer-raw-info-raw-front-sample-00', // drwRawInfo uCode
        mtxNum: 0, // -1 : origin (no mtx : direct drawing), 0 ~ n : mtx preset index
        rawType: 'layers', // raw / layers
        rawDirType: 'normal', // normal / h-reverse / v-reverse
        colorSetInfo: 'sample-color-set-info-raw-front-sample-00', // colorSetInfo uCode
        rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
        child: []
      },
      moveSetLink: '',
      movePresetInfo: null,
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  }
]

function createSimplePartPresetInfoListP01(layerRawList, tCode, mtxNum, bSetNum, colorSetUCode, rawDirType='normal') {
  const list = []
  for (const layer of layerRawList) {

    const info = {
      uCode: `part-preset-info-${generateSimpleUCode()}-${layer.uCode}`,
      partInfo: createSimplePartPresetInfoP01(layer.uCode, tCode, mtxNum, bSetNum, colorSetUCode, rawDirType)
      // partInfo: {
      //   uCode: `part-info-${layer.uCode}`,
      //   tCode: tCode,
      //   rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      //   drwObjInfo: { // null : no drw obj
      //     uCode: layer.uCode, // drwRawInfo uCode
      //     mtxInfo: { // null : origin (no mtx : direct drawing)
      //       num: mtxNum, // -1 : origin (no mtx : direct drawing), 0 ~ n : mtx preset index
      //       bSetNum: -1 // -1 : none, 0 ~ n : bSet preset index
      //     },
      //     rawType: 'layers', // raw / layers
      //     rawDirType: rawDirType, // normal / h-reverse / v-reverse
      //     colorSetInfo: {
      //       uCode: colorSetUCode
      //     },
      //     rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
      //     child: []
      //   },
      //   moveSetLink: '',
      //   hitLink: 'hit-link-info-obj-area-02',
      //   effectLink: '',
      //   armsLink: '',
      //   child: []
      // }
    }
    list.push(info)
  }
  return list
}

function createSimplePartPresetInfoP01(rawUCode, tCode, mtxNum, bSetNum, colorSetUCode, rawDirType='normal', rawType='layers') {
  const info = {
      uCode: `part-info-${generateSimpleUCode()}-${rawUCode}`,
      tCode: tCode,
      rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},// -1 : calculating (include drwObj and child) on init
      drwObjInfo: { // null : no drw obj
        uCode: rawUCode, // drwRawInfo uCode
        mtxInfo: { // null : origin (no mtx : direct drawing)
          num: mtxNum, // -1 : origin (no mtx : direct drawing), 0 ~ n : mtx preset index
          bSetNum: -1 // -1 : none, 0 ~ n : bSet preset index
        },
        rawType: rawType, // raw / layers
        rawDirType: rawDirType, // normal / h-reverse / v-reverse
        colorSetInfo: {
          uCode: colorSetUCode
        },
        rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},
        child: []
      },
      moveSetLink: '',
      movePresetInfo: null,
      hitLink: 'hit-link-info-obj-area-02',
      effectLink: '',
      armsLink: '',
      child: []
    }
  return info
}