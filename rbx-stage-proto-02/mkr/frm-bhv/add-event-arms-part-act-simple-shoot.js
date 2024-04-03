function addEventArmsPartActSimpleShoot(setInfo) {
  const partInfo = setInfo.partInfo
  const frmBhvSetInfo = setInfo.frmBhvSetInfo
  const sRcInfo = setInfo.sRcInfo

  const onFirst = () => {
    // console.log('first')
  }
  const onLast = () => {
    // console.log('last')
  }
  const onChangeInfo = () => {
    // console.log('changeInfo')
    for (const armInfo of partInfo.armsInfoList) {
      const actInfo = armInfo.actInfo
      for (const actPartSet of armInfo.actPartSetList) {
        let asr = sRcInfo.r
          + partInfo.rcInfo.r
          + actPartSet.dRcInfo.dr
          + Math.floor(partInfo.rcInfo.rsz * 0.5)
          - Math.floor(actPartSet.part.rcInfo.rsz * 0.5)
        let asc = sRcInfo.c
          + partInfo.rcInfo.c
          + actPartSet.dRcInfo.dc
          - actPartSet.part.rcInfo.csz
        if (actInfo.reverseInfo) {
          if (actInfo.reverseInfo.type === 'v') {
            asc = sRcInfo.c + partInfo.rcInfo.c + partInfo.rcInfo.csz - actPartSet.dRcInfo.dc
          }
        }

        const unitInfo = {
          uCode: '',
          partInfo: copyPartInfo(actPartSet.part),
          hitInfo: {
            hitFrame: 0,
            hitState: 0,
            type: actInfo.hitType,
            target: actInfo.hitTarget
          }
        }

        // if (actInfo.hitTarget === 'enemy') {
        //   unitInfo.partInfo.frmBhvSetInfoList.push(
        //     createSimpleShoot(unitInfo.partInfo, [0,-1], 30, 50))
        // } else {
        //   unitInfo.partInfo.frmBhvSetInfoList.push(
        //     createSimpleShoot(unitInfo.partInfo, [0,1], 30, 50))
        // }
        setInfo.simpleShootFunc(unitInfo, armInfo)

        moveUnit(unitInfo, asr, asc)
        addUnit(unitInfo)
      }
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