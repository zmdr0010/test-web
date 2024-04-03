function reversePartInfoVertical(partInfo, csz=0) {
  const drwObj = partInfo.drwObj
  const column = csz
  if (drwObj) {
    reverseRawInfo(drwObj.rawInfo, 'v')
    partInfo.rcInfo.c = column - partInfo.rcInfo.c - partInfo.rcInfo.csz
  }

  for (const child of partInfo.child) {
    reversePartInfoVertical(child, partInfo.rcInfo.csz)
  }
}

function reverseRawInfo(rawInfo, dir) {
  const row = rawInfo.row
  const column = rawInfo.column
  let raw = rawInfo.raw
  if (dir === 'h') { // h : horizontal / v : vertical
    raw = reverseHorizontal(raw, row)
  } else {
    raw = reverseVertical(raw, row, column)
  }
  rawInfo.raw = raw
}

function reverseHorizontal(raw, row) {
  const result = []
  const length = raw.length
  for (let i=0; i<length; i++) {
    const r = i % row
    const c = Math.floor(i / row)
    const index = ((row-1) - r) + (c * row)
    const rw = raw[index]
    result.push(rw)
  }
  return result
}

function reverseVertical(raw, row, column) {
  const result = []
  const length = raw.length
  for (let i=0; i<length; i++) {
    const r = i % row
    const c = Math.floor(i / row)
    const index = r + ((column-1) - c) * row
    const rw = raw[index]
    result.push(rw)
  }
  return result
}
