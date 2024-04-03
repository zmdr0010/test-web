function createPartInfo(prePartInfo, resInfo) {
  let uCode = prePartInfo.uCode
  let tCode = prePartInfo.tCode
  let rcInfo = copyRcInfo(prePartInfo.rcInfo)
  let drwObj = null
  let hitInfo = {
    hitBox: [],
    hitFrame: 0,
    hitState: 0,
    hitType: ''
  }
  let child = []
  let isRCszCalculating = false

  if (rcInfo.rsz === -1 && rcInfo.csz === -1) {
    // calculating (include drwObj and child) rsz, csz
    isRCszCalculating = true
  }
  if (prePartInfo.drwObjInfo && prePartInfo.drwObjInfo.uCode) {
    // set drwObj
    drwObj = createDrwObjInfo(prePartInfo.drwObjInfo, resInfo)
  }

  let r = rcInfo.r
  let c = rcInfo.c
  let lastR = 0
  let lastC = 0
  if (isRCszCalculating) {
    if (drwObj) {
      const lr = drwObj.rcInfo.r + drwObj.rcInfo.rsz + r
      const lc = drwObj.rcInfo.c + drwObj.rcInfo.csz + c
      lastR = Math.max(lastR, lr)
      lastC = Math.max(lastC, lc)
    }
  }

  for (const childPreInfo of prePartInfo.child) {
    const childPartInfo = createPartInfo(childPreInfo, resInfo)
    child.push(childPartInfo)

    if (isRCszCalculating) {
      const lr = childPartInfo.rcInfo.r + childPartInfo.rcInfo.rsz + r
      const lc = childPartInfo.rcInfo.c + childPartInfo.rcInfo.csz + c
      lastR = Math.max(lastR, lr)
      lastC = Math.max(lastC, lc)
    }
  }

  if (isRCszCalculating) {
    // set calculating rcInfo
    const lr = r + rcInfo.rsz
    const lc = c + rcInfo.csz
    lastR = Math.max(lastR, lr)
    lastC = Math.max(lastC, lc)
    rcInfo.rsz = lastR - r
    rcInfo.csz = lastC - c
  }

  if (prePartInfo.hitSetInfo) {
    // set hitInfo
    hitInfo = createHitInfo(prePartInfo.hitSetInfo.uCode, rcInfo, resInfo)
  }

  return {
    uCode: uCode,
    tCode: tCode,
    rcInfo: rcInfo,
    drwObj: drwObj,
    hitInfo: hitInfo,
    armsInfoList: [],
    state: 'normal',
    child: child,
    frmBhvSetInfoList: []
  }
}