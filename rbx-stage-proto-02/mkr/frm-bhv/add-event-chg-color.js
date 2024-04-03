function addEventChgColor(setInfo) {
  const partInfo = setInfo.partInfo
  const frmBhvSetInfo = setInfo.frmBhvSetInfo
  const resInfo = setInfo.resInfo
  const colorSetUCodeList= setInfo.colorSetUCodeList

  const onFirst = () => {
    // console.log('first')
    for (const cPart of partInfo.child) {
      const drwObj = cPart.drwObj
      const rawInfo = drwObj.rawInfo
      // effect : sample-color-set-info-01, 02, 04, 09, 11, 12, 13, 14, 15, 16, 18, 19
      const colorSetInfo = resInfo.colorSetInfoList.find(i => i.uCode === colorSetUCodeList[0])
      drwObj.chgColorList = createColorList(colorSetInfo, rawInfo.rawNum)
    }
  }
  const onLast = () => {
    // console.log('last')
    for (const cPart of partInfo.child) {
      const drwObj = cPart.drwObj
      drwObj.chgColorList = []
    }
    partInfo.hitInfo.hitState = 0
    frmBhvSetInfo.state = 'end'
  }
  const onChangeInfo = () => {
    // console.log('changeInfo')
    const frmBhvInfo = frmBhvSetInfo.list[frmBhvSetInfo.currentFrmBhv]
    for (const cPart of partInfo.child) {
      const drwObj = cPart.drwObj
      const rawInfo = drwObj.rawInfo
      // effect : sample-color-set-info-01, 02, 04, 09, 11, 12, 13, 14, 15, 16, 18, 19
      let colorSetInfo = resInfo.colorSetInfoList.find(i => i.uCode === colorSetUCodeList[frmBhvInfo.currentFrmBhv % colorSetUCodeList.length])
      drwObj.chgColorList = createColorList(colorSetInfo, rawInfo.rawNum)
    }
  }
  const onProgress = (rate) => {
    // console.log(`progress ::: rate : ${rate}`)
  }
  frmBhvSetInfo.event.onFirst = onFirst
  frmBhvSetInfo.event.onLast = onLast
  frmBhvSetInfo.event.onChangeInfo = onChangeInfo
  frmBhvSetInfo.event.onProgress = onProgress
}