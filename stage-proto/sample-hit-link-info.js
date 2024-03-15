const hitLinkInfoSampleList = [
  {
    uCode: 'hit-link-info-obj-area',
    type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
    objAreaInfo: { // type = part-area
      r: 0,
      c: 0,
      addRsz: 0, // ex. -2 : part rsz - 2
      addCsz: 0,
    }
  },
  {
    uCode: 'hit-link-info-obj-area-01',
    type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
    objAreaInfo: { // type = part-area
      r: 1,
      c: 1,
      addRsz: -2, // ex. -2 : part rsz - 2
      addCsz: -2,
    }
  },
  {
    uCode: 'hit-link-info-sample-unit',
    type: 'hit-box',
    hitBox: [ // type = hit-box
      [11, 15, 2, 10], // f : left, right, top, bottom
      [2, 7, 14, 21], // l
      [19, 24, 14, 21], // r
      [11, 15, 22, 27], // bk
      [8, 18, 11, 21] // bd
    ]
  },
  {
    uCode: 'hit-link-info-sample-unit-f',
    type: 'hit-box',
    hitBox: [
      [2, 6, 2, 10] // 11 - 9, 15 - 9, 2, 10
    ]
  },
  {
    uCode: 'hit-link-info-sample-unit-l',
    type: 'hit-box',
    hitBox: [
      [2, 7, 2, 9], // 2, 7, 14 - 12, 21 - 12
    ]
  },
  {
    uCode: 'hit-link-info-sample-unit-r',
    type: 'hit-box',
    hitBox: [
      [1, 6, 2, 9], // 19 - 18, 24 - 18, 14 - 12, 21 - 12
    ]
  },
  {
    uCode: 'hit-link-info-sample-unit-bk',
    type: 'hit-box',
    hitBox: [
      [2, 6, 1, 6], // 11 - 9, 15 - 9, 22 - 21, 27 - 21
    ]
  },
  {
    uCode: 'hit-link-info-sample-unit-bd',
    type: 'hit-box',
    hitBox: [
      [2, 12, 2, 12] // 8 - 6, 18 - 6, 11 - 9, 21 - 9
    ]
  }
]