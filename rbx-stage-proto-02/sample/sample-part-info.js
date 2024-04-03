const samplePartInfo = {
  uCode: '',
  tCode: '',
  rcInfo: { r:0, c:0, rsz: -1, csz: -1 }, // -1 : calculating (include drwObj and child) on init
  drwObj: {
    uCode: '',
    rcInfo: { r:0, c:0, rsz: -1, csz: -1 },
    rawInfo: {
      uCode: '',
      row: 3,
      column: 3,
      rawNum: 3,
      raw: [ // rw list
        0,1,0,
        1,3,1,
        2,3,2
      ]
    },
    colorSetInfo: {
      uCode: '' // colorSetInfo uCode (calculate colorSet to colorList)
    },
    colorList: [[0,0,0], [100,100,100], [255,255,255]], // length = rawNum (color = colorList[rw - 1])
    chgColorList: [], // effect change color
    child: []
  },
  hitInfo: {
    hitBox: [[0,2,0,2]], // [ left, right, top, bottom ]
    hitFrame: 0,
    hitState: 0,
    type: ''
  },
  armsInfoList: [],
  child: [],
  frmBhvSetInfoList: [], // move / effect
  state: '' // normal / out / etc ... (remove at out, draw at normal)
}