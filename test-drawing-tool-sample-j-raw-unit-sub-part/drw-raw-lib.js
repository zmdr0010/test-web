function parsingRawStringToRawInfo(str) {
  const list = str.split('/')
  const memo = list[0]
  const row = Number(list[1])
  const column = Number(list[2])
  const rawNum = Number(list[3])
  const rawStrList = list[4].split(',')
  const raw = []

  for (const key in rawStrList) {
    const r = Number(rawStrList[key])
    raw.push(r)
  }

  const rawInfo = {
    memo: memo,
    row: row,
    column: column,
    rawNum: rawNum,
    raw: raw
  }

  return rawInfo
}

//////////
// sx, sy - by 1px
// r - row, c - column
function drawRaw(ctx, r, c, sx, sy, color, size) {
  const x = size * r + sx
  const y = size * c + sy
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.rect(x, y, size, size)
  ctx.fill()
}
// sx, sy - by 1px
function drawRawInfo(ctx, rawInfo, sx, sy, size, colorList) {
  const list = rawInfo.raw
  const row = rawInfo.row
  for (let i=0; i<list.length; i++) {
    const rw = list[i] - 1
    if (rw < 0) continue
    const r = i % row
    const c = Math.floor(i / row)
    drawRaw(ctx, r, c, sx, sy, colorList[rw], size)
  }
}
////////////
// sr, sc - by size
// r - row, c - column
function drawRawByRC(ctx, r, c, sr, sc, color, size) {
  const x = Math.floor(size * (r + sr))
  const y = Math.floor(size * (c + sc))
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.rect(x, y, size, size)
  ctx.fill()
}
// sr, sc - by size
function drawRawInfoByRC(ctx, rawInfo, sr, sc, size, colorList) {
  const list = rawInfo.raw
  const row = rawInfo.row
  for (let i=0; i<list.length; i++) {
    const rw = list[i] - 1
    if (rw < 0) continue
    const r = i % row
    const c = Math.floor(i / row)
    drawRawByRC(ctx, r, c, sr, sc, colorList[rw], size)
  }
}

function saveString(str, name) {
  const link = document.createElement("a")
  const file = new Blob([str], {type:'text/plain'})
  link.href = URL.createObjectURL(file)
  link.download = `${name}.txt`
  link.click()
  URL.revokeObjectURL(link.href)
}

function generateSimpleUCode() {
  // memo/row/column/raw
  const current = new Date()
  const y = current.getFullYear()
  const m = current.getMonth() + 1
  const d = current.getDate()
  const h = current.getHours()
  const mm = current.getMinutes()
  const s = current.getSeconds()
  const mStr = (m < 10)? `0${m}`:`${m}`

  return `${y}${mStr}${d}${h}${mm}${s}`
}

// movement
// rs : row size, cs : column size
function parsingMovementRawString(str, fps=30, d=20, rs=10, cs=10) {
  const list = str.split('/')
  console.log(list)
  const memo = list[0]
  const row = Number(list[1])
  const column = Number(list[2])
  const rawNum = Number(list[3])
  const rawStrList = list[4].split(',')

  const mList = []
  for (let i=0; i<rawNum; i++) {
    mList.push({ md: [0, 0] })
  }

  const firstIndex = rawStrList.indexOf('1')
  const fr = firstIndex % row
  const fc = Math.floor(firstIndex/row)

  for (let i=0; i<rawStrList.length; i++) {
    const rw = Number(rawStrList[i]) - 1
    if (rw < 0) continue

    const r = i % row
    const c = Math.floor(i/row)
    const mr = r - fr
    const mc = c - fc
    const mInfo = mList[rw]
    mInfo.md[0] = mr * rs
    mInfo.md[1] = mc * cs
  }

  return {
    fps: fps,
    d: d,
    currentMove: 0,
    moveCount: 0,
    list: mList
  }
}

function moveByFrame(unit, fps) {
  const posInfo = unit.posInfo
  const moveInfo = unit.moveInfo
  const fpsScale = fps / moveInfo.fps
  const d = Math.floor(moveInfo.d * fpsScale)
  const list = moveInfo.list
  let moveCount = moveInfo.moveCount
  let currentMove = moveInfo.currentMove
  let currentM = list[currentMove]
  if (moveCount === 0 && currentMove === 0) {
    moveInfo.sr = posInfo.r
    moveInfo.sc = posInfo.c
    currentMove++
    currentM = list[currentMove]
  }
  moveCount++
  if (moveCount > d) {
    moveCount = 0
    currentMove++
    if (currentMove >= list.length) {
      unit.moveInfo = null
      return
    }
    moveInfo.sr += currentM.md[0]
    moveInfo.sc += currentM.md[1]
    currentM = list[currentMove]
  }

  const dr = currentM.md[0]
  const dc = currentM.md[1]
  const rate = moveCount / d
  // posInfo.r = Math.floor(dr * rate + moveInfo.sr)
  // posInfo.c = Math.floor(dc * rate + moveInfo.sc)
  posInfo.r = dr * rate + moveInfo.sr
  posInfo.c = dc * rate + moveInfo.sc

  moveInfo.moveCount = moveCount
  moveInfo.currentMove = currentMove
}

function copyMoveInfo(moveInfo) {
  const list = []
  for (const info of moveInfo.list) {
    list.push({ md: [info.md[0], info.md[1]]})
  }
  return {
    sr: (moveInfo.sr) ? moveInfo.sr : 0,
    sc: (moveInfo.sc) ? moveInfo.sc : 0,
    fps: moveInfo.fps,
    d: moveInfo.d,
    currentMove: moveInfo.currentMove,
    moveCount: moveInfo.moveCount,
    list: list
  }
}

function setUnitMoveInfo(unit, moveInfo) {
  unit.moveInfo = copyMoveInfo(moveInfo)
  console.log(unit.moveInfo)
}

function moveUnit(unit, mr, mc) {
  unit.posInfo.r = mr
  unit.posInfo.c = mc
}

function drawUnit(ctx, unit, size, drtColorList=[]) {
  drawDrwObjInfo(ctx, unit.drwObj, unit.posInfo.r, unit.posInfo.c, size, drtColorList)
}

function drawDrwObjInfo(ctx, objInfo, sr, sc, size, drtColorList=[]) {
  if (objInfo.rawInfo) {
    const oSr = objInfo.r + sr
    const oSc = objInfo.c + sc
    let colorList = objInfo.colorList
    if (drtColorList.length > 0) colorList = drtColorList
    drawRawInfoByRC(ctx, objInfo.rawInfo, oSr, oSc, size, colorList)
  }
  if (objInfo.child) {
    for (const child of objInfo.child) {
      drawDrwObjInfo(ctx, child, sr, sc, size, drtColorList)
    }
  }
}

function getDrwResObj(resInfo, target) {
  return resInfo.list[target]
}

function parsingDrwObjInfoByLinkInfo(linkInfo, resInfo) {
  const memo = linkInfo.memo
  const r = linkInfo.r
  const c = linkInfo.c
  const rs = linkInfo.rs
  const cs = linkInfo.cs
  let rawInfo = null
  const colorList = []
  const child = []
  if (linkInfo.rawLink.target && linkInfo.rawLink.target.length > 0) {
    const list = getDrwResObj(resInfo, linkInfo.rawLink.target)
    rawInfo = parsingRawStringToRawInfo(list[linkInfo.rawLink.index])
  }
  if (rawInfo && linkInfo.colorLink.list.length > 0) {
    const target = linkInfo.colorLink.target
    const list = getDrwResObj(resInfo, target)
    for (const index of linkInfo.colorLink.list) {
      colorList.push(list[index])
    }
  }

  for (const chd of linkInfo.child) {
    child.push(parsingDrwObjInfoByLinkInfo(chd, resInfo))
  }

  return {
    memo: memo,
    r: r,
    c: c,
    rs: rs,
    cs: cs,
    rawInfo: rawInfo,
    colorList: colorList,
    child: child
  }
}