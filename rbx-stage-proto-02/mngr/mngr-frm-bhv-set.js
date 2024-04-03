// frmBhvSetInfo : frame behavior set info
function updateFrameOfFrmBhvSetInfo(frmBhvSetInfo, fps, progressFunc=null, firstFunc=null, lastFunc=null, changeInfoFunc=null) {
  let frmBhvInfo = frmBhvSetInfo.frmBhvInfo
  if (!frmBhvInfo) return
  let fpsScale = fps / frmBhvInfo.fps
  let d = frmBhvInfo.d * fpsScale
  let frame = frmBhvInfo.frame
  let currentFrmBhv = frmBhvInfo.currentFrmBhv
  const lastFrmBhv = frmBhvInfo.lastFrmBhv
  if (frame === 0 && currentFrmBhv === 0) {
    // first event
    if (firstFunc) firstFunc()
  }
  frame++
  if (frame > d) {
    frame = 1
    currentFrmBhv++
    if (currentFrmBhv > lastFrmBhv) {
      frmBhvSetInfo.frmBhvInfo.frame = 0
      frmBhvSetInfo.frmBhvInfo.currentFrmBhv = 0
      frmBhvSetInfo.frmBhvInfo = null
      frmBhvSetInfo.currentFrmBhv++
      if (frmBhvSetInfo.currentFrmBhv >= frmBhvSetInfo.list.length - 1) {
        if (frmBhvSetInfo.type === 'cycle') {
          frmBhvSetInfo.currentFrmBhv = 0
          frmBhvSetInfo.frmBhvInfo = frmBhvSetInfo.list[0]
          frmBhvSetInfo.frmBhvInfo.frame = 0
          frmBhvSetInfo.frmBhvInfo.currentFrmBhv = 0
        }
        // last event
        if (lastFunc) lastFunc()
        return
      }
      frmBhvSetInfo.frmBhvInfo = frmBhvSetInfo.list[frmBhvSetInfo.currentFrmBhv]
      frmBhvSetInfo.frmBhvInfo.frame = 1
      frmBhvSetInfo.frmBhvInfo.currentFrmBhv = 0
      frmBhvInfo = frmBhvSetInfo.frmBhvInfo
      frame = 1
      currentFrmBhv = 0
      fpsScale = fps / frmBhvInfo.fps
      d = frmBhvInfo.d * fpsScale
    }
    // change chgInfo event
    if (changeInfoFunc) changeInfoFunc()
  }
  const rate = frame / d
  frmBhvInfo.frame = frame
  frmBhvInfo.currentFrmBhv = currentFrmBhv
  if (progressFunc) progressFunc(rate)
}

function updatePartFrmBhv(partInfo, fps) {
  const outList = []
  for (const frmBhvSetInfo of partInfo.frmBhvSetInfoList) {
    const event = frmBhvSetInfo.event
    updateFrameOfFrmBhvSetInfo(frmBhvSetInfo, fps,
      event.onProgress, event.onFirst, event.onLast, event.onChangeInfo)
    if (frmBhvSetInfo.type === 'out' || frmBhvSetInfo.type === 'end') {
      if (frmBhvSetInfo.state === 'end') outList.push(frmBhvSetInfo)
    }
  }
  for (const outFrmBhvSet of outList) {
    partInfo.frmBhvSetInfoList.splice(partInfo.frmBhvSetInfoList.indexOf(outFrmBhvSet), 1)
  }

  for (const child of partInfo.child) {
    updatePartFrmBhv(child, fps)
  }
}