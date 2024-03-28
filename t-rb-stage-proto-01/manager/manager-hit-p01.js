function updateHit(unitList) {
  const actList = unitList.filter((info) => info.hitInfo.type === 'act')
  const eActList = unitList.filter((info) => info.hitInfo.type === 'e-act')
  const enemyList = unitList.filter((info) => info.hitInfo.type === 'enemy')
  const friendlyList = unitList.filter((info) => info.hitInfo.type === 'friendly')
  checkHitAct(actList, enemyList)
  checkHitAct(eActList, friendlyList, -1)
}

function checkHitAct(actList, targetList, dir=1) {
  for (const act of actList) {
    for (const target of targetList) {
      const checkHitInfo = checkHitPartInfo(act.partInfo, target.partInfo)
      if (checkHitInfo.isHit === false) continue
      if (act.hitInfo.hitState === 0) {
        act.hitInfo.hitState = 1
        act.partInfo.effectInfo = createActHitEffectInfo00(act.partInfo, dir)
      }
      if (target.hitInfo.hitState === 0) {
        target.hitInfo.hitState = 1

        target.statusInfo.hp--
        if (target.statusInfo.hp <= 0) {
          let effectList = []
          for (const part of target.partInfo.child) {
            const effectInfo = createActHitEffectInfo00(part, dir, target.partInfo.rcInfo.r, target.partInfo.rcInfo.c)
            effectList = effectList.concat(effectInfo.list)
          }
          target.partInfo.effectInfo = {
            type: 'change-out',
            list: effectList
          }
        } else {
          createPartHitEffectInfo00(target.partInfo, resInfo)
        }
      }
    }
  }
}

function checkHitPartInfo(partInfo0, partInfo1, sr1=0, sc1=0) {
  const r1 = partInfo1.rcInfo.r + sr1
  const c1 = partInfo1.rcInfo.c + sc1
  if (partInfo0.hitInfo && partInfo1.hitInfo) {
    const isHit = checkHitList(
      partInfo0.hitInfo.hitBox, [partInfo0.rcInfo.r, partInfo0.rcInfo.c],
      partInfo1.hitInfo.hitBox, [r1, c1]
    )
    if (isHit) return { target: partInfo1, isHit: true }
  }
  for (const child of partInfo1.child) {
    const checkHitInfo = checkHitPartInfo(partInfo0, child, r1, c1)
    if (checkHitInfo.isHit) return checkHitInfo
  }
  return { target: null, isHit: false }
}