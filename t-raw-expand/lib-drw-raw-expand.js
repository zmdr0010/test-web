// origin : drwRawInfo
// sn : ex. 2 : 1x1 to 4x4, 3 : 1x1 to 9x9
function expandRawSimple(origin, sn=2) {
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

    for (let j=0; j<length; j++) {
      const jr = j % sn
      const jc = Math.floor(j/sn)
      const ji = (snRow + jr) + (snColumn + jc) * cRow
      cRaw[ji] = r
      originIndices[ji] = i
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

// origin : drwRawInfo
// sn : ex. 2 : 1x1 to 4x4, 3 : 1x1 to 9x9
// mInfo : { target: 0, m : [] }
// target : i (origin index)
// m : matrix : ex. 2 to 2x2 matrix, 3 to 3x3 matrix
// ex. 2x2 [0,1,1,0], 3x3 [0,1,1,1,1,1,0,1,0]
function expandRawEditM(origin, sn=2, mInfoList=[]) {
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

    for (let j=0; j<length; j++) {
      const jr = j % sn
      const jc = Math.floor(j/sn)
      const ji = (snRow + jr) + (snColumn + jc) * cRow
      cRaw[ji] = r
      originIndices[ji] = i

      for (const mInfo of mInfoList) {
        if (mInfo.target === i) {
          const mv = mInfo.m[j]
          if (mv === 0) cRaw[ji] = 0
        }
      }
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

// expand-v
// expand-h
// expand-target-v-h
// expand-target-v
// expand-target-h
