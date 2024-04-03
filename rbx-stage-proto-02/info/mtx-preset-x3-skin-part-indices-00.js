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
const mtxPresetX3IndicesDot = [511, 189]
// 1 : top edge
const mtxPresetX3IndicesTopEdge = [7, 63, 146, 151, 175, 191, 365, 383, 469, 493, 495, 506]
// 2 : left edge
const mtxPresetX3IndicesLeftEdge = [46, 89, 121, 191, 249, 251, 255, 413, 463, 487, 501]
// 3 : bottom edge
const mtxPresetX3IndicesBottomEdge = [186, 189, 367, 448, 466, 490, 495, 504, 509]
// 4 : right edge (reverse left edge)
const mtxPresetX3IndicesRightEdge = []
// 5 : left top
const mtxPresetX3IndicesLeftTop = [22, 63, 95, 111, 127, 255, 427, 443, 494, 495]
// 6 : left bottom
const mtxPresetX3IndicesLeftBottom = [234, 345, 473, 489, 491, 503, 504, 507]
// 7 : right bottom (reverse left bottom)
const mtxPresetX3IndicesRightBottom = []
// 8 : right top (reverse left top)
const mtxPresetX3IndicesRightTop = []
// 9 : horizontal center line
const mtxPresetX3IndicesHorizontalCenterLine = [56, 63, 381, 383, 469, 493, 495]
// 10 : vertical center line
const mtxPresetX3IndicesVerticalCenterLine = [135, 146, 365, 381, 466, 490, 495, 511]
// 11 : top line
const mtxPresetX3IndicesTopLine = [7, 23, 47, 63, 383, 453, 455]
// 12 : left line
const mtxPresetX3IndicesLeftLine = [73, 89, 219, 251, 383, 409, 475, 479, 495, 507]
// 13 : bottom line
const mtxPresetX3IndicesBottomLine = [343, 448, 469, 504, 506, 511]
// 14 : right line (reverse left line)
const mtxPresetX3IndicesRightLine = []

// select
const mtxPresetX3IndicesSelect = [
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
  for (const index of mtxPresetX3IndicesSelect) {
    list.push([index, index, index, index, 0, index, index, 0, 0, index, index, index, index, index, 0])
  }
  return list
}
// 12 : topEdge length
function getMtxIndicesList0002(length=12) {
  const list = []
  for (let i=0; i<length; i++) {
    const indices = getMtxIndices0002(i)
    // const same = list.find((iList) => { // check duplicate
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
  const dot = mtxPresetX3IndicesDot[i % mtxPresetX3IndicesDot.length]
  const topEdge = mtxPresetX3IndicesTopEdge[i % mtxPresetX3IndicesTopEdge.length]
  const leftEdge = mtxPresetX3IndicesLeftEdge[i % mtxPresetX3IndicesLeftEdge.length]
  const bottomEdge = mtxPresetX3IndicesBottomEdge[i % mtxPresetX3IndicesBottomEdge.length]
  // 4 : right edge
  const leftTop = mtxPresetX3IndicesLeftTop[i % mtxPresetX3IndicesLeftTop.length]
  const leftBottom = mtxPresetX3IndicesLeftBottom[i % mtxPresetX3IndicesLeftBottom.length]
  // 7 : right bottom
  // 8 : right top
  const hLine = mtxPresetX3IndicesHorizontalCenterLine[i % mtxPresetX3IndicesHorizontalCenterLine.length]
  const vLine = mtxPresetX3IndicesVerticalCenterLine[i % mtxPresetX3IndicesVerticalCenterLine.length]
  const topLine = mtxPresetX3IndicesTopLine[i % mtxPresetX3IndicesTopLine.length]
  const leftLine = mtxPresetX3IndicesLeftLine[i % mtxPresetX3IndicesLeftLine.length]
  const bottomLine = mtxPresetX3IndicesBottomLine[i % mtxPresetX3IndicesBottomLine.length]
  // 14 : right line

  return [dot, topEdge, leftEdge, bottomEdge, 0, leftTop, leftBottom, 0, 0, hLine, vLine, topLine, leftLine, bottomLine, 0]
}