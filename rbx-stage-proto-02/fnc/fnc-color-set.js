function createColorList(colorSetInfo, rawNum) {
  const colorList = []
  for (let i=0; i<rawNum; i++) {
    const rRate = i / rawNum
    const cRate = (colorSetInfo.list.length - 1) * rRate
    const cIndex = Math.floor(cRate)
    const c = colorSetInfo.list[cIndex]
    const c1 = colorSetInfo.list[cIndex + 1]
    let r = c[0] + Math.round((c1[0] - c[0]) * (cRate - cIndex))
    let g = c[1] + Math.round((c1[1] - c[1]) * (cRate - cIndex))
    let b = c[2] + Math.round((c1[2] - c[2]) * (cRate - cIndex))
    if (r > 255) r = 255
    if (g > 255) g = 255
    if (b > 255) b = 255
    colorList.push([r, g, b])
  }
  return colorList
}