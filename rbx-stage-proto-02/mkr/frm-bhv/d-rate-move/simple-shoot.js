// dir : [0, 0], [-1, -1], [1, 1], [0, 1], [0, -1] ...
function createSimpleShoot(partInfo, addEvent, dir, d, dm, num=6) {
  const list = []
  const dr = dir[0] * dm // 0
  const dc = dir[1] * dm
  for (let i=0; i<num; i++) {
    list.push({ dr: dr, dc: dc })
  }
  const frmBhvInfo = {
    type: 'move',
    currentFrmBhv: 0,
    lastFrmBhv: list.length-1,
    frame: 0,
    fps: 60,
    d: d,
    list: list,
    etcInfo: {
      sr: 0, sc: 0
    }
  }
  return createFrmBhvSetInfo({
    partInfo: partInfo, list: [frmBhvInfo], uCode: 'simple-shoot-00', type: 'out',
    addEvent: addEvent, frmBhvSetInfo: null, frmBhvInfo: frmBhvInfo
  })
}

function simpleShootFunc(unitInfo, armInfo) {
  const actInfo = armInfo.actInfo
  if (actInfo.hitTarget === 'enemy') {
    unitInfo.partInfo.frmBhvSetInfoList.push(
      createSimpleShoot(unitInfo.partInfo, addEventDRateMove, [0,-1], 30, 50))
  } else {
    unitInfo.partInfo.frmBhvSetInfoList.push(
      createSimpleShoot(unitInfo.partInfo, addEventDRateMove, [0,1], 30, 50))
  }
}