const rbxLabSampleDrwRawInfo00 = {
  uCode: 'rbx-lab-sample-drw-raw-info-00',
  row: 9,
  column: 9,
  rawNum: 4,
  raw: [0,0,1,0,0,0,1,0,0,0,0,1,3,4,3,1,0,0,0,1,1,4,4,4,1,1,0,1,1,1,3,4,3,1,1,1,2,2,2,3,4,3,2,2,2,0,2,2,1,1,1,2,2,0,0,0,2,2,1,2,2,0,0,0,0,1,2,2,2,1,0,0,0,0,0,1,1,1,0,0,0]
}
const rbxLabSampleDrwRawInfo01 = {
  uCode: 'rbx-lab-sample-drw-raw-info-01',
  row: 5,
  column: 8,
  rawNum: 7,
  raw: [3,0,0,0,3,3,3,2,3,3,0,3,7,3,0,1,2,7,2,1,2,4,2,4,2,0,4,5,4,0,0,5,6,5,0,0,2,6,2,0]
}
const rbxLabSampleDrwRawInfo02 = {
  uCode: 'rbx-lab-sample-drw-raw-info-02',
  row: 5,
  column: 7,
  rawNum: 4,
  raw: [0,1,0,1,0,1,1,3,1,1,0,1,4,1,0,0,1,4,1,0,0,3,3,3,0,0,2,3,2,0,0,0,2,0,0]
}
const rbxLabSampleDrwRawInfo03 = {
  uCode: 'rbx-lab-sample-drw-raw-info-03',
  row: 7,
  column: 11,
  rawNum: 6,
  raw: [0,1,0,0,0,1,0,0,1,6,0,6,1,0,0,1,6,1,6,1,0,0,1,6,1,6,1,0,0,1,6,6,6,1,0,1,2,5,6,5,3,1,2,2,5,1,5,3,3,0,2,5,1,5,3,0,0,0,4,4,4,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,0]
}

const rbxLabSamplePalettesInfo00 = {
  uCode: 'rbx-lab-sample-palettes-info-00',
  list: [
    'rgb(249,65,68)',
    'rgb(243,114,44)',
    'rgb(248,150,30)',
    'rgb(249,132,74)',
    'rgb(249,199,79)',
    'rgb(144,190,109)',
    'rgb(67,170,139)',
    'rgb(77,144,142)',
    'rgb(87,117,144)',
    'rgb(39,125,161)',
    'rgb(116,0,184)',
    'rgb(105,48,195)',
    'rgb(94,96,206)',
    'rgb(83,144,217)',
    'rgb(78,168,222)',
    'rgb(86,207,225)',
    'rgb(100,223,223)',
    'rgb(114,239,221)',
    'rgb(128,255,219)',
    'rgb(247,220,111)', // 19
    'rgb(244,208,63)',
    'rgb(241,196,15)',
    'rgb(212,172,13)',
    'rgb(183,149,11)',
    'rgb(154,125,10)',
    'rgb(125,102,8)',
    'rgb(248,196,113)',
    'rgb(245,176,65)',
    'rgb(243,156,18)',
    'rgb(214,137,16)',
    'rgb(185,119,14)',
    'rgb(156,100,12)',
    'rgb(126,81,9)',
    'rgb(230,126,34)',
    'rgb(202,111,30)',
    'rgb(175,96,26)',
    'rgb(147,81,22)',
    'rgb(120,66,18)', // 37
  ]
}

const rbxLabSampleColorSetInfo00 = {
  uCode: 'rbx-lab-sample-color-set-info-00',
  palettes: 'rbx-lab-sample-palettes-info-00',
  list: [4, 5, 6, 7, 8, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
}

const rbxLabSampleDrwObjLinkInfo00 = {
  uCode: 'rbx-lab-sample-drw-obj-link-info-00',
  drwRawInfo: 'rbx-lab-sample-drw-raw-info-00', // drwRawInfo uCode
  colorSetInfo: 'rbx-lab-sample-color-set-info-00', // colorSetInfo uCode
  rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : rsz (row size), csz (column size) calculating (include child) on init
  child: []
}

const rbxLabSampleHitLinkInfo00 = {
  uCode: 'rbx-lab-sample-hit-link-info-00',
  type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
  objAreaInfo: { // type = part-area
    r: 0,
    c: 0,
    addRsz: 0, // ex. -2 : part rsz - 2
    addCsz: 0,
  }
}

const rbxLabSamplePartPresetInfo00 = {
  uCode: 'rbx-lab-sample-part-preset-info-00',
  partInfo: {
    uCode: 'rbx-lab-sample-part-info-00',
    tCode: 'f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
    drwObjLink: 'rbx-lab-sample-drw-obj-link-info-00', // drwObjLinkInfo uCode
    moveSetLink: '',
    hitLink: 'rbx-lab-sample-hit-link-info-00',
    effectLink: '',
    armsLink: '',
    child: []
  }
}