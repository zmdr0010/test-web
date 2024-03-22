// 0 : dot
// 1 : top edge
// 2 : left edge
// 3 : bottom edge
// 4 : right edge
// 5 : left top
// 6 : left bottom
// 7 : right bottom
// 8 : right top
// 9 : horizontal center line
// 10 : vertical center line
// 11 : top line
// 12 : left line
// 13 : bottom line
// 14 : right line

// 0 : dot
const mtxPresetX3IndicesDot02 = [511, 189]
// 1 : top edge
const mtxPresetX3IndicesTopEdge02 = [7, 63, 146, 151, 175, 191, 365, 383, 469, 493, 495, 506]
// 2 : left edge
const mtxPresetX3IndicesLeftEdge02 = [46, 89, 121, 191, 249, 251, 255, 413, 463, 487, 501]
// 3 : bottom edge
const mtxPresetX3IndicesBottomEdge02 = [186, 189, 367, 448, 466, 490, 495, 504, 509]
// 4 : right edge (reverse left edge)
const mtxPresetX3IndicesRightEdge02 = []
// 5 : left top
const mtxPresetX3IndicesLeftTop02 = [22, 63, 95, 111, 127, 255, 427, 443, 494, 495]
// 6 : left bottom
const mtxPresetX3IndicesLeftBottom02 = [234, 345, 473, 489, 491, 503, 504, 507]
// 7 : right bottom (reverse left bottom)
const mtxPresetX3IndicesRightBottom02 = []
// 8 : right top (reverse left top)
const mtxPresetX3IndicesRightTop02 = []
// 9 : horizontal center line
const mtxPresetX3IndicesHorizontalCenterLine02 = [56, 63, 381, 383, 469, 493, 495]
// 10 : vertical center line
const mtxPresetX3IndicesVerticalCenterLine02 = [135, 146, 365, 381, 466, 490, 495, 511]
// 11 : top line
const mtxPresetX3IndicesTopLine02 = [7, 23, 47, 63, 383, 453, 455]
// 12 : left line
const mtxPresetX3IndicesLeftLine02 = [73, 89, 219, 251, 383, 409, 475, 479, 495, 507]
// 13 : bottom line
const mtxPresetX3IndicesBottomLine02 = [343, 448, 469, 504, 506, 511]
// 14 : right line (reverse left line)
const mtxPresetX3IndicesRightLine02 = []

// select
const mtxPresetX3IndicesSelect02 = [
  95, 311, 473, 500,
  63, 219, 504, 438,
  7, 56, 448, 73, 146, 292,
  511, 495, 186, 170, 341,
  255, 507, 510, 447,
  383, 479, 509, 503,
  127, 319, 505, 508, 475, 502, 223, 439,
  457, 484, 79, 295,
  151, 466, 121, 316,
  23, 464, 89, 308,
  201, 420, 480, 456, 294, 75, 15, 39,
  191, 251, 446, 506,
  471, 381
]

function getMtxIndicesList0001() {
  const list = []
  for (const index of mtxPresetX3IndicesSelect02) {
    list.push([index, index, index, index, 0, index, index, 0, 0, index, index, index, index, index, 0])
  }
  return list
}
// 12 : topEdge length
function getMtxIndicesList0002(length=12) {
  const list = []
  for (let i=0; i<length; i++) {
    // const dot = mtxPresetX3IndicesDot02[i % mtxPresetX3IndicesDot02.length]
    // const topEdge = mtxPresetX3IndicesTopEdge02[i % mtxPresetX3IndicesTopEdge02.length]
    // const leftEdge = mtxPresetX3IndicesLeftEdge02[i % mtxPresetX3IndicesLeftEdge02.length]
    // const bottomEdge = mtxPresetX3IndicesBottomEdge02[i % mtxPresetX3IndicesBottomEdge02.length]
    // // 4 : right edge
    // const leftTop = mtxPresetX3IndicesLeftTop02[i % mtxPresetX3IndicesLeftTop02.length]
    // const leftBottom = mtxPresetX3IndicesLeftBottom02[i % mtxPresetX3IndicesLeftBottom02.length]
    // // 7 : right bottom
    // // 8 : right top
    // const hLine = mtxPresetX3IndicesHorizontalCenterLine02[i % mtxPresetX3IndicesHorizontalCenterLine02.length]
    // const vLine = mtxPresetX3IndicesVerticalCenterLine02[i % mtxPresetX3IndicesVerticalCenterLine02.length]
    // const topLine = mtxPresetX3IndicesTopLine02[i % mtxPresetX3IndicesTopLine02.length]
    // const leftLine = mtxPresetX3IndicesLeftLine02[i % mtxPresetX3IndicesLeftLine02.length]
    // const bottomLine = mtxPresetX3IndicesBottomLine02[i % mtxPresetX3IndicesBottomLine02.length]
    // // 14 : right line

    const indices = getMtxIndices0002(i)
    // const same = list.find((iList) => {
    //   let isSame = true
    //   for (let i=0; i<iList.length; i++) {
    //     if (iList[i] !== indices[i]) {
    //       isSame = false
    //       break
    //     }
    //   }
    //   if (isSame) return iList
    // })
    // console.log(`same : ${same}`) // same : undefined (length : 2400)
    list.push(indices)
  }
  return list
}

function getMtxIndices0002(i) {
  const dot = mtxPresetX3IndicesDot02[i % mtxPresetX3IndicesDot02.length]
  const topEdge = mtxPresetX3IndicesTopEdge02[i % mtxPresetX3IndicesTopEdge02.length]
  const leftEdge = mtxPresetX3IndicesLeftEdge02[i % mtxPresetX3IndicesLeftEdge02.length]
  const bottomEdge = mtxPresetX3IndicesBottomEdge02[i % mtxPresetX3IndicesBottomEdge02.length]
  // 4 : right edge
  const leftTop = mtxPresetX3IndicesLeftTop02[i % mtxPresetX3IndicesLeftTop02.length]
  const leftBottom = mtxPresetX3IndicesLeftBottom02[i % mtxPresetX3IndicesLeftBottom02.length]
  // 7 : right bottom
  // 8 : right top
  const hLine = mtxPresetX3IndicesHorizontalCenterLine02[i % mtxPresetX3IndicesHorizontalCenterLine02.length]
  const vLine = mtxPresetX3IndicesVerticalCenterLine02[i % mtxPresetX3IndicesVerticalCenterLine02.length]
  const topLine = mtxPresetX3IndicesTopLine02[i % mtxPresetX3IndicesTopLine02.length]
  const leftLine = mtxPresetX3IndicesLeftLine02[i % mtxPresetX3IndicesLeftLine02.length]
  const bottomLine = mtxPresetX3IndicesBottomLine02[i % mtxPresetX3IndicesBottomLine02.length]
  // 14 : right line

  return [dot, topEdge, leftEdge, bottomEdge, 0, leftTop, leftBottom, 0, 0, hLine, vLine, topLine, leftLine, bottomLine, 0]
}