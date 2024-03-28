function movePerFrameByMoveSet(rcInfo, moveSetInfo, fps, isSmooth=false) {
  const moveInfo = moveSetInfo.moveInfo
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
      moveSetInfo.moveInfo = null
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
    currentMove: 0,
    moveCount: 0,
    list: list
  }
}

function initMoveSetInfoToPartInfo(partInfo, moveSetInfo) {
  partInfo.moveSetInfo = moveSetInfo
  partInfo.moveSetInfo.moveInfo = copyMoveInfo(partInfo.moveSetInfo.list[0])
  partInfo.moveSetInfo.currentMove = 0
}

function setMoveInfoToPartInfo(partInfo, moveInfo) {
  partInfo.moveSetInfo.moveInfo = copyMoveInfo(moveInfo)
}

function updatePartMove(partInfo, fps, isSmooth=false) {
  if (partInfo.moveSetInfo) {
    if (partInfo.moveSetInfo.moveInfo) {
      movePerFrameByMoveSet(partInfo.rcInfo, partInfo.moveSetInfo, fps, isSmooth)
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
        if (isEnd) {
          if (partInfo.moveSetInfo.type === 'end') {
            partInfo.state = 'end'
          } else {
            partInfo.state = 'out'
          }
        } else {
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
        let asr = sr
          + partInfo.rcInfo.r
          + actPartSet.dRcInfo.dr
          + Math.floor(partInfo.rcInfo.rsz * 0.5)
          - Math.floor(actPartSet.part.rcInfo.rsz * 0.5)
        let asc = sc
          + partInfo.rcInfo.c
          + actPartSet.dRcInfo.dc
          - actPartSet.part.rcInfo.csz
        if (actInfo.reverseInfo) {
          if (actInfo.reverseInfo.type === 'v') {
            asc = sc + partInfo.rcInfo.c + partInfo.rcInfo.csz - actPartSet.dRcInfo.dc
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

function updatePartEffect(partInfo, fps, isSmooth=false) {
  if (partInfo.effectInfo) {
    let isOut = true
    for (const ep of partInfo.effectInfo.list) {
      updatePartMove(ep, fps, isSmooth)
      if (ep.state !== 'out') isOut = false
    }
    if (partInfo.effectInfo.type === 'change-out' && isOut === true) {
      partInfo.state = 'out'
      partInfo.effectInfo = null
    }
  }
  for (const child of partInfo.child) {
    updatePartEffect(child, fps, isSmooth)
  }
}

function checkColorEffectEnd(unit) {
  const partInfo = unit.partInfo
  if (!partInfo.effectInfo) return
  let isEnd = false
  for (const child of partInfo.child) {
    if (child.effectInfo) {
      const ePart = child.effectInfo.list[0]
      if (ePart.state === 'end') {
        isEnd = true
        child.effectInfo = null
        child.hitInfo.hitState = 0
      }
    }
  }
  if (isEnd) {
    partInfo.effectInfo = null
    unit.hitInfo.hitState = 0
  }
}