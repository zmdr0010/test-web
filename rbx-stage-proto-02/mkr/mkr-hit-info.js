function createHitInfo(hitSet, rcInfo, resInfo) {
  const hitInfo = resInfo.hitSetInfoList.find(i => i.uCode === hitSet)
  if (!hitInfo) return null

  let hitBox = []

  if (hitInfo.type === 'part-area') {
    const rsz = rcInfo.rsz + hitInfo.objAreaInfo.addRsz
    const csz = rcInfo.csz + hitInfo.objAreaInfo.addCsz
    // left, right, top, bottom
    const l = hitInfo.objAreaInfo.r
    const r = hitInfo.objAreaInfo.r + rsz
    const t = hitInfo.objAreaInfo.c
    const b = hitInfo.objAreaInfo.c + csz
    hitBox.push([l, r, t, b])
  }
  if (hitInfo.type === 'hit-box') {
    hitBox = hitInfo.hitBox
  }

  return {
    hitBox: hitBox,
    hitFrame: 0,
    hitState: 0,
    type: ''
  }
}