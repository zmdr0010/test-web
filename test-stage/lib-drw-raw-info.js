// sr, sc - by size
// r - row, c - column
function drawRaw(ctx, r, c, sr, sc, color, size) {
  const x = Math.floor(size * (r + sr))
  const y = Math.floor(size * (c + sc))
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.rect(x, y, size, size)
  ctx.fill()
}
// sr, sc - by size
function drawRawInfo(ctx, rawInfo, sr, sc, size, colorList) {
  const list = rawInfo.raw
  const row = rawInfo.row
  for (let i=0; i<list.length; i++) {
    const rw = list[i]
    if (rw - 1 < 0) continue
    const r = i % row
    const c = Math.floor(i / row)
    drawRaw(ctx, r, c, sr, sc, colorList[rw], size)
  }
}

// rw = 0 drawing
function drawRawInfoAll(ctx, rawInfo, sr, sc, size, colorList, zeroColor) {
  const list = rawInfo.raw
  const row = rawInfo.row
  for (let i=0; i<list.length; i++) {
    const rw = list[i]
    const color = (rw - 1 < 0) ? zeroColor : colorList[rw]
    const r = i % row
    const c = Math.floor(i / row)
    drawRaw(ctx, r, c, sr, sc, color, size)
  }
}

function drawDrwObj(ctx, drwObj, sr, sc, size) {
  const r = sr + drwObj.rcInfo.r
  const c = sc + drwObj.rcInfo.c
  drawRawInfo(ctx, drwObj.rawInfo, r, c, size, drwObj.colorList)
  for (const co of drwObj.child) {
    drawRawInfo(ctx, co.rawInfo, r + co.rcInfo.r, c + co.rcInfo.c, size, co.colorList)
  }
}

function drawPartInfo(ctx, partInfo, sr, sc, size) {
  const r = sr + partInfo.rcInfo.r
  const c = sc + partInfo.rcInfo.c
  if (partInfo.drwObj) drawDrwObj(ctx, partInfo.drwObj, r, c, size)
  for (const cp of partInfo.child) {
    drawPartInfo(ctx, cp, r, c, size)
  }
}