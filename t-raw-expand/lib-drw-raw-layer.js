function divideRawLayer(raw, rawNum, row, column) {
  const length = row * column
  const result = []
  for (let i=0; i<=rawNum; i++) {
    const list = []
    for (let j=0; j<length; j++) {
      list.push(0)
    }
    result.push(list)
  }

  for (let i=0; i<raw.length; i++) {
    const r = raw[i]
    for (let j=0; j<=r; j++) {
      result[j][i] = j
    }
  }

  return result
}

function divideRawLayerToRawInfoList(origin) {
  const result = []
  const layerList = divideRawLayer(origin.raw, origin.rawNum, origin.row, origin.column)
  let count = 0
  for (const layer of layerList) {
    const rwInfo = {
      uCode: `layer-raw-info-${origin.uCode}-layer-raw-info-${count++}`,
      row: origin.row,
      column: origin.column,
      rawNum: origin.rawNum,
      raw: layer
    }
    result.push(rwInfo)
  }
  return result
}

function compRawInfoLayers(list) {
  const first = list[0]
  const result = {
    uCode: `comp-layer-${first.uCode}`,
    row: first.row,
    column: first.column,
    rawNum: first.rawNum,
    raw: first.raw
  }
  for (let i=1; i<list.length; i++) {
    const info = list[i]
    for (let j=0; j<info.raw.length; j++) {
      const rw = info.raw[j]
      if (rw > 0) result.raw[j] = Math.max(rw, result.raw[j])
    }
  }
  return result
}