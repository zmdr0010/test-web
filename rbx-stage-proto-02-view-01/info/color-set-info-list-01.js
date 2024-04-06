const colorSetInfoList01 = [
  {
    uCode: 'color-set-info-01-00',
    list: [ // [r, g, b] ([255, 255, 255])
      [88, 47, 14], [127, 79, 36], [147, 102, 57],
    ]
  }
]

function createColorSetInfoList(preUCode, sampleList) {
  const list = []
  for(let i=0; i<sampleList.length; i++) {
    const uCode = `${preUCode}-${i}`
    const colorList = []
    const sample = sampleList[i]
    for (const rgbStr of sample) {
      // 'rgb(249, 245, 246)'
      let str = rgbStr.replace('rgb(', '')
      str = str.replace(')', '')
      const strList = str.split(',')
      const color = []
      for (const s of strList) {
        color.push(Number(s))
      }
      colorList.push(color)
    }
    list.push({
      uCode: uCode,
      list: colorList
    })
  }
  return list
}