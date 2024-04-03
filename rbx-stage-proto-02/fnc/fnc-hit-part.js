function checkHitPartInfo(partInfo0, partInfo1, sr1=0, sc1=0) {
  const r1 = partInfo1.rcInfo.r + sr1
  const c1 = partInfo1.rcInfo.c + sc1
  if (partInfo0.hitInfo && partInfo1.hitInfo) {
    const isHit = checkHitList(
      partInfo0.hitInfo.hitBox, [partInfo0.rcInfo.r, partInfo0.rcInfo.c],
      partInfo1.hitInfo.hitBox, [r1, c1]
    )
    if (isHit) return { target: partInfo1, isHit: true }
  }
  for (const child of partInfo1.child) {
    const checkHitInfo = checkHitPartInfo(partInfo0, child, r1, c1)
    if (checkHitInfo.isHit) return checkHitInfo
  }
  return { target: null, isHit: false }
}