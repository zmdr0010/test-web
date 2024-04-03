function createChgColorEffect(partInfo, resInfo, d, num, colorSetUCodeList) {
  const list = []
  for (let i=0; i<num; i++) list.push(i)

  const frmBhvInfo = {
    type: 'change-color',
    currentFrmBhv: 0,
    lastFrmBhv: num-1,
    frame: 0,
    fps: 60,
    d: d,
    list: list,
    etcInfo: null
  }

  return createFrmBhvSetInfo({
    partInfo: partInfo, list: [frmBhvInfo], uCode: 'effect-chg-color', type: 'end',
    addEvent: addEventChgColor, frmBhvSetInfo: null, frmBhvInfo: frmBhvInfo,
    resInfo: resInfo, colorSetUCodeList: colorSetUCodeList
  })
}