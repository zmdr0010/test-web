function createFrmBhvSetInfo(setInfo) {
  const frmBhvSetInfo = {
    uCode: setInfo.uCode,
    type: setInfo.type,
    currentFrmBhv: 0,
    frmBhvInfo: null,
    list: setInfo.list,
    event: {
      onProgress: (rate) => {},
      onFirst: () => {},
      onLast: () => {},
      onChangeInfo: () => {}
    },
    state: 'start'
  }
  // frmBhvSetInfo.event.onFirst = setInfo.onFirst
  // frmBhvSetInfo.event.onLast = setInfo.onLast
  // frmBhvSetInfo.event.onChangeInfo = setInfo.onChangeInfo
  // frmBhvSetInfo.event.onProgress = setInfo.onProgress
  setInfo.frmBhvSetInfo = frmBhvSetInfo
  setInfo.addEvent(setInfo)
  frmBhvSetInfo.frmBhvInfo = setInfo.frmBhvInfo

  return frmBhvSetInfo
}
