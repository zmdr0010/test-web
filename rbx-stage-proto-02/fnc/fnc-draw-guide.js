function drawRCArea(ctx, partInfo, sr, sc, size, color='green') {
  if (partInfo.state === 'out') return
  const r = sr + partInfo.rcInfo.r
  const c = sc + partInfo.rcInfo.c
  const x = r * size
  const y = c * size
  const w = partInfo.rcInfo.rsz * size
  const h = partInfo.rcInfo.csz * size
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.stroke()
}

function drawHitBox(ctx, partInfo, sr, sc, size, color='red') {
  if (partInfo.state === 'out') return
  if (partInfo.hitInfo) {
    for (const hit of partInfo.hitInfo.hitBox) {
      const l = hit[0]
      const r = hit[1]
      const t = hit[2]
      const b = hit[3]
      const x = (sr + partInfo.rcInfo.r + l) * size
      const y = (sc + partInfo.rcInfo.c + t) * size
      const w = (r - l) * size
      const h = (b - t) * size
      ctx.strokeStyle = color
      ctx.beginPath()
      ctx.rect(x, y, w, h)
      ctx.stroke()
    }
  }

  for (const childPart of partInfo.child) {
    drawHitBox(ctx, childPart, sr + partInfo.rcInfo.r, sc + partInfo.rcInfo.c, size)
  }
}