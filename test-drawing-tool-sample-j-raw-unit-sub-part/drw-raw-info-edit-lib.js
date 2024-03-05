// row, column - add / subtract
function addRow(rawInfo, first, add=1, cRw=-1) {
  const r = rawInfo.row
  const c = rawInfo.column
  const oRaw = rawInfo.raw
  const cr = r + add
  const cRaw = []

  const length = cr * c
  let cAdd = 0
  for (let i=0; i<length; i++) {
    const rr = i % cr
    if (rr > first && rr <= first + add) cAdd++
    const oi = i - cAdd
    let check = false
    if (cRw >= 0) {
      for (let j=0; j<add; j++) {
        if (rr === (first+j)) check = true
      }
    }
    if (check) {
      cRaw.push(cRw)
    } else {
      cRaw.push(oRaw[oi])
    }
  }

  return {
    memo: `${rawInfo.memo}_add_row_${add}`,
    row: cr,
    column: c,
    rawNum: rawInfo.rawNum,
    raw: cRaw
  }
}

function addColumn(rawInfo, first, add=1, cRw=-1) {
  const r = rawInfo.row
  const c = rawInfo.column
  const oRaw = rawInfo.raw
  const cc = c + add
  const cRaw = []

  const length = r * cc
  let cAdd = 0
  let prevC = 0
  for (let i=0; i<length; i++) {
    const rr = i % r
    const ccc = Math.floor(i / r)
    if (ccc > first && ccc <= first + add && prevC !== ccc) {
      cAdd++
      prevC = ccc
    }
    const oi = (ccc - cAdd) * r + rr
    let check = false
    if (cRw >= 0) {
      for (let j=0; j<add; j++) {
        if (ccc === j + first) check = true
      }
    }
    if (check) {
      cRaw.push(cRw)
    } else {
      cRaw.push(oRaw[oi])
    }
  }

  return {
    memo: `${rawInfo.memo}_add_column_${add}`,
    row: r,
    column: cc,
    rawNum: rawInfo.rawNum,
    raw: cRaw
  }
}

function subtractRow(rawInfo, first, add=-1, cRw=-1) {
  const r = rawInfo.row
  const c = rawInfo.column
  const oRaw = rawInfo.raw
  const cRaw = []
  let cr = r + add
  // if (cr < 0) cr = 1

  const dc = r - cr
  const length = cr * c
  let cAdd = 0
  let prevC = 0
  for (let i=0; i<length; i++) {
    const rr = i % cr
    const cc = Math.floor(i / cr)
    if (cr <= first) {
      if (prevC !== cc) {
        cAdd += dc
        prevC = cc
      }
    } else {
      if (first === rr) cAdd += dc
    }
    const oi = i + cAdd
    cRaw.push(oRaw[oi])
  }

  return {
    memo: `${rawInfo.memo}_subtract_row_${add}`,
    row: cr,
    column: c,
    rawNum: rawInfo.rawNum,
    raw: cRaw
  }
}

function subtractColumn(rawInfo, first, add=-1, cRw=-1) {
  const r = rawInfo.row
  const c = rawInfo.column
  const oRaw = rawInfo.raw
  const cRaw = []
  const cc = c + add
  const dc = c - cc
  const length = r * cc
  for (let i=0; i<length; i++) {
    const rrr = i % r
    const ccc = Math.floor(i / r)
    if (ccc <= first) {
      cRaw.push(oRaw[i])
    } else {
      const oi = (ccc + dc) * r + rrr
      cRaw.push(oRaw[oi])
    }
  }

  return {
    memo: `${rawInfo.memo}_subtract_column_${add}`,
    row: r,
    column: cc,
    rawNum: rawInfo.rawNum,
    raw: cRaw
  }
}

function addRowByIndexList(oInfo, list, add, crw=-1) {
  let info = oInfo
  let a = 0
  for (const i of list) {
    const index = i + a
    info = addRow(info, index, add, crw)
    a += add
  }
  return info
}

function addColumnByIndexList(oInfo, list, add, crw=-1) {
  let info = oInfo
  let a = 0
  for (const i of list) {
    const index = i + a
    info = addColumn(info, index, add, crw)
    a += add
  }
  return info
}

function addRowColumnByIndexList(oInfo, list, add, crw=-1) {
  let info = oInfo
  let a = 0
  for (const i of list) {
    const index = i + a
    info = addRow(info, index, add, crw)
    info = addColumn(info, index, add, crw)
    a += add
  }
  return info
}

function addRowColumnByIndexListEach(oInfo, list, addR, addC, crw=-1) {
  let info = oInfo
  let aR = 0
  let aC = 0
  for (const i of list) {
    const rI = i + aR
    const cI = i + aC
    info = addRow(info, rI, addR, crw)
    info = addColumn(info, cI, addC, crw)
    aR += addR
    aC += addC
  }
  return info
}