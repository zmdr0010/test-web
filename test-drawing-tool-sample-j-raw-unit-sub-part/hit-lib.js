// ex) const isHit = checkHitList(bullet.hitBox, [bullet.x, bullet.y], unitInfo.hitBox, [unitInfo.x, unitInfo.y])
//     hitBox: [
//        [0, unit.row-1, 0, unit.column-1] // by size
//      ],
function checkHitList(list0, p0, list1, p1) {
  let result = false
  for (let i=0; i<list0.length; i++) {
    const h0 = list0[i]
    for (let j=0; j<list1.length; j++) {
      const h1 = list1[j]
      const isHit = checkHit(h0, p0, h1, p1)
      if (isHit) return isHit
    }
  }
  return result
}

function checkHit(list0, p0, list1, p1) {
  const l0 = list0[0]
  const r0 = list0[1]
  const t0 = list0[2]
  const b0 = list0[3]
  const x0 = p0[0]
  const y0 = p0[1]
  const l1 = list1[0]
  const r1 = list1[1]
  const t1 = list1[2]
  const b1 = list1[3]
  const x1 = p1[0]
  const y1 = p1[1]
  const tw = Math.abs(r0 - l0) + Math.abs(r1 - l1)
  const th = Math.abs(b0 - t0) + Math.abs(b1 - t1)
  const w = Math.max((l0 + x0), (l1 + x1), (r0 + x0), (r1 + x1)) - Math.min((l0 + x0), (l1 + x1), (r0 + x0), (r1 + x1))
  const h = Math.max((b0 + y0), (b1 + y1), (t0 + y0), (t1 + y1)) - Math.min((b0 + y0), (b1 + y1), (t0 + y0), (t1 + y1))
  return (w <= tw && h <= th)
}