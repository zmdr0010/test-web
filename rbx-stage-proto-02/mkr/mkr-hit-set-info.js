function createSimpleHitSetInfo(m, size) {
  return {
    uCode: `simple-hit-set-info-obj-area-${m}-${size}`,
    type: 'part-area', // part-area (calculate part r x c) / hit-box (hitBox info set)
    objAreaInfo: { // type = part-area
      r: m * size,
      c: m * size,
      addRsz: -(m * 2) * size, // ex. -2 : part rsz - 2
      addCsz: -(m * 2) * size,
    }
  }
}