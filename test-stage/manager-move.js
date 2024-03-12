function movePerFrameByMoveSet(partInfo, fps, isSmooth=false) {
  const rcInfo = partInfo.rcInfo
  const moveInfo = partInfo.moveSetInfo.moveInfo
  const fpsScale = fps / moveInfo.fps
  // const d = Math.round(moveInfo.d * fpsScale)
  const d = moveInfo.d * fpsScale
  const list = moveInfo.list
  let moveCount = moveInfo.moveCount
  let currentMove = moveInfo.currentMove
  let currentM = list[currentMove]
  if (moveCount === 0 && currentMove === 0) {
    moveInfo.sr = rcInfo.r
    moveInfo.sc = rcInfo.c
    // currentMove++
    // currentM = list[currentMove]
  }
  moveCount++
  if (moveCount > d) {
    moveCount = 0
    currentMove++
    if (currentMove >= list.length) {
      rcInfo.r = currentM.dr + moveInfo.sr
      rcInfo.c = currentM.dc + moveInfo.sc
      partInfo.moveSetInfo.moveInfo = null
      return
    }
    moveInfo.sr += currentM.dr
    moveInfo.sc += currentM.dc
    currentM = list[currentMove]
  }
  const dr = currentM.dr
  const dc = currentM.dc
  const rate = moveCount / d
  if (isSmooth) {
    rcInfo.r = dr * rate + moveInfo.sr
    rcInfo.c = dc * rate + moveInfo.sc
  } else {
    rcInfo.r = Math.round(dr * rate + moveInfo.sr)
    rcInfo.c = Math.round(dc * rate + moveInfo.sc)
    // rcInfo.r = Math.floor(dr * rate + moveInfo.sr)
    // rcInfo.c = Math.floor(dc * rate + moveInfo.sc)
  }
  moveInfo.moveCount = moveCount
  moveInfo.currentMove = currentMove
}

function copyMoveInfo(moveInfo) {
  const list = []
  for (const info of moveInfo.list) {
    list.push({ dr: info.dr, dc: info.dc })
  }
  return {
    sr: (moveInfo.sr) ? moveInfo.sr : 0,
    sc: (moveInfo.sc) ? moveInfo.sc : 0,
    fps: moveInfo.fps,
    d: moveInfo.d,
    currentMove: moveInfo.currentMove,
    moveCount: moveInfo.moveCount,
    list: list
  }
}

function setMoveInfoToPartInfo(partInfo, moveInfo) {
  partInfo.moveSetInfo.moveInfo = copyMoveInfo(moveInfo)
}

function updatePartMove(partInfo, fps, isSmooth=false) {
  if (partInfo.moveSetInfo) {
    if (partInfo.moveSetInfo.moveInfo) {
      movePerFrameByMoveSet(partInfo, fps, isSmooth)
    } else {
      let isEnd = true
      if (partInfo.moveSetInfo.list.length > 0) {
        isEnd = false
        partInfo.moveSetInfo.currentMove++
        if (partInfo.moveSetInfo.currentMove >= partInfo.moveSetInfo.list.length) {
          if (partInfo.moveSetInfo.type === 'cycle') {
            partInfo.moveSetInfo.currentMove = 0
          } else {
            isEnd = true
          }
        }
        if (!isEnd) {
          setMoveInfoToPartInfo(partInfo, partInfo.moveSetInfo.list[partInfo.moveSetInfo.currentMove])
        }
      }
    }
  }

  for (const childInfo of partInfo.child) {
    updatePartMove(childInfo, fps, isSmooth)
  }
}

function moveUnit(unit, r, c) {
  unit.partInfo.rcInfo.r = r
  unit.partInfo.rcInfo.c = c
}

function updatePartAct(partInfo, sr=0, sc=0) {
  if (partInfo.armsInfo) {
    for (const armInfo of partInfo.armsInfo.list) {
      const actInfo = armInfo.actInfo
      if (actInfo.frame > 0) {
        actInfo.frame--
        continue
      }
      if (actInfo.type === 'ui' || actInfo.type === 'count') {
        if (actInfo.count <= 0) continue
        actInfo.count--
      }
      if (actInfo.type === 'cycle') {
        if (actInfo.frame <= 0) actInfo.frame = actInfo.frameMax
      }

      for (const actPartSet of armInfo.actPartSetList) {
        const asr = sr
          + partInfo.rcInfo.r
          + actPartSet.dRcInfo.dr
          + Math.floor(partInfo.rcInfo.rsz * 0.5)
          - Math.floor(actPartSet.part.rcInfo.rsz * 0.5)
        const asc = sc
          + partInfo.rcInfo.c
          + actPartSet.dRcInfo.dc
          - actPartSet.part.rcInfo.csz
        const unitInfo = {
          uCode: '',
          partInfo: copyPartInfo(actPartSet.part)
        }
        console.log(unitInfo.partInfo)
        moveUnit(unitInfo, asr, asc)
        addUnit(unitInfo)
      }
    }
  }

  for (const childInfo of partInfo.child) {
    updatePartAct(childInfo, partInfo.rcInfo.r, partInfo.rcInfo.c)
  }
}

function addUnit(unit) {
  unitList.push(unit)
}