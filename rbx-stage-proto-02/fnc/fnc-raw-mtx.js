// cList (change list) : length 15
function checkRawCornerToChange(raw, rawNum, row, column, cList) {
  const rawList = []
  for (let i=0; i<raw.length; i++) {
    const check = checkRawCorner(i, raw[i], raw, rawNum, row, column)
    if (check < 0) {
      rawList.push(raw[i])
    } else {
      rawList.push(cList[check])
    }
  }

  for (let i=0; i<rawList.length; i++) {
    raw[i] = rawList[i]
  }
}

function checkRawCorner(i, rw, raw, rawNum, row, column) {
  if (rw === 0) return -1
  const r = i % row
  const c = Math.floor(i / row)
  let isEL = false
  let isER = false
  let isET = false
  let isEB = false
  let index = -1
  let rww = -1
  // check left
  const lr = r - 1
  if (lr >= 0) {
    index = lr + c * row
    if (index < raw.length) {
      rww = raw[index]
      if (rww === 0) isEL = true
    }
  } else {
    isEL = true
  }
  // check right
  const rr = r + 1
  if (rr < row) {
    index = rr + c * row
    if (index < raw.length) {
      rww = raw[index]
      if (rww === 0) isER = true
    }
  } else {
    isER = true
  }
  // check top
  const tc = c - 1
  if (tc >= 0) {
    index = r + tc * row
    if (index < raw.length) {
      rww = raw[index]
      if (rww === 0) isET = true
    }
  } else {
    isET = true
  }
  // check bottom
  const bc = c + 1
  if (bc < column) {
    index = r + bc * row
    if (index < raw.length) {
      rww = raw[index]
      if (rww === 0) isEB = true
    }
  } else {
    isEB = true
  }
  if (!isEL && !isER && !isET && !isEB) return -1
  if (isEL && isER && isET && isEB) return 0
  if (isEL && isER && isET && !isEB) return 1
  if (isEL && !isER && isET && isEB) return 2
  if (isEL && isER && !isET && isEB) return 3
  if (!isEL && isER && isET && isEB) return 4
  if (isEL && !isER && isET && !isEB) return 5
  if (isEL && !isER && !isET && isEB) return 6
  if (!isEL && isER && !isET && isEB) return 7
  if (!isEL && isER && isET && !isEB) return 8
  if (!isEL && !isER && isET && isEB) return 9
  if (isEL && isER && !isET && !isEB) return 10
  if (!isEL && !isER && isET && !isEB) return 11
  if (isEL && !isER && !isET && !isEB) return 12
  if (!isEL && !isER && !isET && isEB) return 13
  if (!isEL && isER && !isET && !isEB) return 14
  return -2
}

// check corner and change to mtx (matrix) shape
function expandCheckRawCornerByMtxSetX3(origin, mtxSetList=[], bSet=[]) {
  const sn = 3
  const cUCode = `${origin.uCode}-sn_x${sn}`
  const cRow = origin.row * sn
  const cColumn = origin.column * sn
  const cRawNum = origin.rawNum
  const cRaw = []
  const cLength = cRow * cColumn
  const originIndices = []

  for (let i=0; i<cLength; i++) {
    cRaw.push(0)
    originIndices.push(0)
  }

  for (let i=0; i<origin.raw.length; i++) {
    const r = origin.raw[i]
    const row = i % origin.row
    const column = Math.floor(i/origin.row)
    const snRow = row * sn
    const snColumn = column * sn

    const length = sn * sn

    const check = checkRawCorner(i, r, origin.raw, origin.rawNum, origin.row, origin.column)

    for (let j=0; j<length; j++) {
      const jr = j % sn
      const jc = Math.floor(j/sn)
      const ji = (snRow + jr) + (snColumn + jc) * cRow
      cRaw[ji] = r
      originIndices[ji] = i
      if (check < -1) continue
      if (check === -1) {
        if (bSet.length > 0) {
          const b = bSet[j]
          if (b === 0) cRaw[ji] = 0
        }
        continue
      }

      const mtx = mtxSetList[check]
      const mv = mtx[j]
      if (mv === 0) cRaw[ji] = 0
    }
  }

  const sInfo = {
    uCode: cUCode,
    row: cRow,
    column: cColumn,
    rawNum: cRawNum,
    raw: cRaw,
    originIndices: originIndices
  }

  return sInfo
}

function expandCheckRawCornerToInfoByMtxSetX3(id, row, column, rawNum, raw, mtxList=[], bSet=[]) {
  const rwInfo = {
    uCode: `layer-raw-info-x3-mtx-set-${id}`,
    row: row,
    column: column,
    rawNum: rawNum,
    raw: raw
  }
  const rwInfoX3 = expandCheckRawCornerByMtxSetX3(rwInfo, mtxList, bSet)
  return rwInfoX3
}
