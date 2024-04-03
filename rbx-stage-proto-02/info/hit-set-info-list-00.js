const hitSetInfoList00 = [
  {
    uCode: 'hit-set-info-obj-area',
    type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
    objAreaInfo: { // type = part-area
      r: 0,
      c: 0,
      addRsz: 0, // ex. -2 : part rsz - 2
      addCsz: 0,
    }
  },
  {
    uCode: 'hit-set-info-obj-area-01',
    type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
    objAreaInfo: { // type = part-area
      r: 1,
      c: 1,
      addRsz: -2, // ex. -2 : part rsz - 2
      addCsz: -2,
    }
  },
  {
    uCode: 'hit-set-info-obj-area-02',
    type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
    objAreaInfo: { // type = part-area
      r: 1 * 3,
      c: 1 * 3,
      addRsz: -2 * 3, // ex. -2 : part rsz - 2
      addCsz: -2 * 3,
    }
  }
]