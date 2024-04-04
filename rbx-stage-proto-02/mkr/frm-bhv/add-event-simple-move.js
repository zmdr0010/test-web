function addEventSimpleMove(setInfo) {
  const partInfo = setInfo.partInfo
  const frmBhvSetInfo = setInfo.frmBhvSetInfo

  const onFirst = () => {
    // console.log('first')
    const frmBhvInfo = frmBhvSetInfo.list[0]
    frmBhvInfo.etcInfo.sr = partInfo.rcInfo.r
    frmBhvInfo.etcInfo.sc = partInfo.rcInfo.c
  }
  const onLast = () => {
    // console.log('last')
    const frmBhvInfo = frmBhvSetInfo.list[frmBhvSetInfo.list.length-1]
    const last = frmBhvInfo.list[frmBhvInfo.list.length-1]
    partInfo.rcInfo.r = last.dr + frmBhvInfo.etcInfo.sr
    partInfo.rcInfo.c = last.dc + frmBhvInfo.etcInfo.sc
    if (frmBhvSetInfo.type === 'out') {
      // console.log('out')
      partInfo.state = 'out'
      frmBhvSetInfo.state = 'end'
    }
  }
  const onChangeInfo = () => {
    // console.log('changeInfo')
    const frmBhvInfo = frmBhvSetInfo.list[frmBhvSetInfo.currentFrmBhv]
    const prev = frmBhvInfo.list[frmBhvInfo.currentFrmBhv]
    frmBhvInfo.etcInfo.sr += prev.dr
    frmBhvInfo.etcInfo.sc += prev.dc
  }
  const onProgress = (rate) => {
    // console.log(`progress ::: rate : ${rate}`)
    const frmBhvInfo = frmBhvSetInfo.list[frmBhvSetInfo.currentFrmBhv]
    const current = frmBhvInfo.list[frmBhvInfo.currentFrmBhv]
    const dr = current.dr
    const dc = current.dc
    partInfo.rcInfo.r = Math.round(dr + partInfo.rcInfo.r)
    partInfo.rcInfo.c = Math.round(dc + partInfo.rcInfo.c)
  }
  frmBhvSetInfo.event.onFirst = onFirst
  frmBhvSetInfo.event.onLast = onLast
  frmBhvSetInfo.event.onChangeInfo = onChangeInfo
  frmBhvSetInfo.event.onProgress = onProgress
}
