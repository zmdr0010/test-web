function createSimpleArmsPartAct(partInfo, sRcInfo, d, num) {
  const list = []
  for (let i=0; i<num; i++) list.push(i)

  const frmBhvInfo = {
    type: 'act',
    currentFrmBhv: 0,
    lastFrmBhv: num-1,
    frame: 0,
    fps: 60,
    d: d,
    list: list,
    etcInfo: null
  }
  return createFrmBhvSetInfo({
    partInfo: partInfo, list: [frmBhvInfo], uCode: 'simple-part-arms-act', type: 'cycle',
    addEvent: addEventArmsPartActSimpleShoot, frmBhvSetInfo: null, frmBhvInfo: frmBhvInfo,
    sRcInfo: sRcInfo, simpleShootFunc: simpleShootFunc
  })
}