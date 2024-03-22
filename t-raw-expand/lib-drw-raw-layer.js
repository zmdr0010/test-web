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

function parsingRawInfoToLayerRawInfo(rawInfo) {
  const layerList = divideRawLayer(rawInfo.raw, rawInfo.rawNum, rawInfo.row, rawInfo.column)
  const layers = []
  for (const layer of layerList) {
    let digitList = []
    for (const rw of layer) {
      if (rw > 0) {
        digitList.push(1)
      } else {
        digitList.push(0)
      }
    }
    const jStr = digitList.join('')
    // const num = parseInt(jStr, 2)
    const num = BigInt(`0b` + jStr)
    layers.push(num)
  }
  return {
    uCode: `layer-raw-info-${rawInfo.uCode}`,
    row: rawInfo.row,
    column: rawInfo.column,
    rawNum: rawInfo.rawNum,
    layers: layers
  }
}

function parsingLayerRawInfoToRawInfo(layerRawInfo) {
  const length = layerRawInfo.row * layerRawInfo.column
  const compRaw = []
  for (let i=0; i<layerRawInfo.layers.length; i++) {
    // let layerNum = 0
    let layerNum = layerRawInfo.layers[i]
    // console.log(Number(layerNum))
    // const str = layerNum.toString(2)
    // const big = BigInt(`${layerNum}`)
    const big = BigInt(layerNum)
    const str = big.toString(2)
    const d = length - str.length
    let jStr = str
    if (d > 0) {
      let add = ''
      for (let i=0; i<d; i++) {
        add += '0'
      }
      jStr = add.concat(str)
      // console.log(`jStr : ${jStr.length}, length : ${length}, d : ${d}, add : ${add}`)
    }
    let rawStrList = jStr.split('')
    // console.log(`rawStrList : ${rawStrList.length}`)
    // let raw = []
    for (let j=0; j<rawStrList.length; j++) {
      const strRw = Number(rawStrList[j]) * i
      // console.log(`i : ${i}, j : ${j}, strRw : ${strRw}`)
      // raw.push(strRw)
      if (compRaw.length-1 < j) {
        compRaw.push(strRw)
      } else {
        compRaw[j] = Math.max(compRaw[j], strRw)
      }
    }
  }
  return {
    uCode: `comp-${layerRawInfo.uCode}`,
    row: layerRawInfo.row,
    column: layerRawInfo.column,
    rawNum: layerRawInfo.rawNum,
    raw: compRaw
  }
}