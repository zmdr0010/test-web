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