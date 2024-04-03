function updateHit00(unitList) {
  const actList = unitList.filter((info) => info.hitInfo.type === 'act')
  const eActList = unitList.filter((info) => info.hitInfo.type === 'e-act')
  const enemyList = unitList.filter((info) => info.hitInfo.type === 'enemy')
  const friendlyList = unitList.filter((info) => info.hitInfo.type === 'friendly')
  checkHitAct00(actList, enemyList)
  checkHitAct00(eActList, friendlyList, -1)
}

function checkHitAct00(actList, targetList, dir=1) {
  for (const act of actList) {
    for (const target of targetList) {
      const checkHitInfo = checkHitPartInfo(act.partInfo, target.partInfo)
      if (checkHitInfo.isHit === false) continue
      if (act.partInfo.hitInfo.hitState === 0) {
        act.partInfo.hitInfo.hitState = 1
        act.partInfo.state = 'effect-out'
        createRbxExplosionEffectPartUnitList(act.partInfo, rateRowList00, rateColumnList00, addEventDRateMove, dir)
      }
      if (target.partInfo.hitInfo.hitState === 0) {
        target.partInfo.hitInfo.hitState = 1

        target.statusInfo.hp--
        if (target.statusInfo.hp === 0) {
          for (const part of target.partInfo.child) {
            createRbxExplosionEffectPartUnitList(part, rateRowList00, rateColumnList00, addEventDRateMove,
              dir, target.partInfo.rcInfo.r, target.partInfo.rcInfo.c)
          }
          // target.partInfo.state = 'effect-out'
          target.partInfo.state = 'out'
        } else {
          target.partInfo.frmBhvSetInfoList.push(createChgColorEffect(target.partInfo, resInfo,
            15, 4,
            ['color-set-info-00-01', 'color-set-info-00-02', 'color-set-info-00-03', 'color-set-info-00-04']))
        }
      }
    }
  }
}
