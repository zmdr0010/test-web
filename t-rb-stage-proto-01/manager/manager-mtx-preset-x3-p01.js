const mtxPresetX3SampleList = []

function getMtxPresetX3SampleList() {
  if (mtxPresetX3SampleList.length > 0) return mtxPresetX3SampleList
  for (let i=0; i<2; i++) {
    for (let j=0; j<2; j++) {
      for (let k=0; k<2; k++) {
        for (let l=0; l<2; l++) {
          for (let m=0; m<2; m++) {
            for (let n=0; n<2; n++) {
              for (let o=0; o<2; o++) {
                for (let p=0; p<2; p++) {
                  for (let q=0; q<2; q++) {
                    mtxPresetX3SampleList.push({
                      r: 3,
                      c: 3,
                      list:[i,j,k,l,m,n,o,p,q]
                    })
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return mtxPresetX3SampleList
}

function getMtxX3ListByIndicesListIndex(index, indicesList) {
  const presetList = getMtxPresetX3SampleList()
  const indices = indicesList[index]
  const result = []
  for (const i of indices) {
    result.push(presetList[i].list)
  }
  return result
}

function getMtxX3ListByPresetIndex(index) {
  const presetList = getMtxPresetX3SampleList()
  return presetList[index].list
}

function findPresetByRaw(raw) {
  const presetList = getMtxPresetX3SampleList()
  return presetList.find((info) => {
    for (let i=0; i<raw.length; i++) {
      const rw = raw[i]
      const irw = info.list[i]
      if (rw !== irw) return null
    }
    return info
  })
}

function findPresetIndexByRaw(raw) {
  const info = findPresetByRaw(raw)
  if (!info) return -1
  const presetList = getMtxPresetX3SampleList()
  return presetList.indexOf(info)
}

// ex. [1, 1, 1, 1, 1, 1, 1, 1, 1]
// [0] : 2x2x2x2x2x2x2x2, [1] : 2x2x2x2x2x2x2, [2] : 2x2x2x2x2x2,
// [3] : 2x2x2x2x2, [4] : 2x2x2x2, [5] : 2x2x2,
// [6] : 2x2, [7] : 2, [8] : 0
// + 1 ([8]) -> 511
// -> 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
function calcIndexByRaw(raw) {
  let index = 0
  for (let i=0; i<raw.length; i++) {
    const v = raw[i]
    const d = raw.length - 1 - i
    if (v === 0) continue
    if (i === raw.length-1) {
      index += v
    } else {
      let ds = 2
      for (let j=2; j<=d; j++) {
        ds *= 2
      }
      index += ds
    }
  }
  return index
}

function getMtxSet(presetList, indices) {
  // 0 : dot (511)
  // 1 : top edge
  // 2 : left edge
  // 3 : bottom edge (reverse top edge)
  // 4 : right edge (reverse left edge)
  // 5 : left top
  // 6 : left bottom
  // 7 : right bottom (reverse left bottom)
  // 8 : right top (reverse left top)
  // 9 : horizontal center line
  // 10 : vertical center line
  // 11 : top line
  // 12 : left line
  // 13 : bottom line (reverse top line)
  // 14 : right line (reverse left line)
  const r = 3
  const c = 3
  const dot = presetList[indices[0]].list
  const topEdge = presetList[indices[1]].list
  const leftEdge = presetList[indices[2]].list
  const bottomEdge = presetList[indices[3]].list
  const rightEdge = reverseHorizontal(leftEdge, r)
  const leftTop = presetList[indices[5]].list
  const leftBottom = presetList[indices[6]].list
  const rightBottom = reverseHorizontal(leftBottom, r)
  const rightTop = reverseHorizontal(leftTop, r)
  const hCLine = presetList[indices[9]].list
  const vCLine = presetList[indices[10]].list
  const topLine = presetList[indices[11]].list
  const leftLine = presetList[indices[12]].list
  const bottomLine = presetList[indices[13]].list
  const rightLine = reverseHorizontal(leftLine, r)
  return [dot, topEdge, leftEdge, bottomEdge, rightEdge, leftTop, leftBottom, rightBottom,
    rightTop, hCLine, vCLine, topLine, leftLine, bottomLine, rightLine]
}