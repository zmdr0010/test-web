let canvas
let ctx
let startTimestamp = 0
let prevTimeStamp = 0
let frame = 0
let totalFrame = 0
let isPlaying = true
let fps
let updateFunc
let drawFunc
let size = 4
let pathInfoList = []
let moveInfoList = []
let drwObjList = []
let unitList = []

function initStage(canvasId, canvasW, canvasH) {
  canvas = document.getElementById(canvasId)
  ctx = canvas.getContext('2d')
  canvas.width = canvasW
  canvas.height = canvasH
}

function start() {
  isPlaying = true
  requestAnimationFrame(aniFrame)
}

function stop() {
  isPlaying = false
}

function aniFrame(timestamp) {
  frame++
  totalFrame++

  if (startTimestamp === 0) {
    startTimestamp = timestamp
    prevTimeStamp = timestamp
  }
  const current = timestamp - prevTimeStamp
  fps = Math.round(frame*1000/current)

  if (current > 1000) {
    prevTimeStamp = timestamp
    frame = 0
  }

  if (updateFunc) updateFunc()
  update()

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (drawFunc) drawFunc()
  draw()

  if (isPlaying) requestAnimationFrame(aniFrame)
}

function addUnit(unit) {
  unitList.push(unit)
  if (unitList.length < 2) return

  unitList.sort((a, b) => {
    if (a.order > b.order) return -1
    if (a.order < b.order) return 1
    return 0
  })
  // console.log('addUnit')
  // console.log(unitList)
}

function update() {
  // console.log('update')
  // updateBulletList()

  const outList = []

  updateMove(outList)
  updateAct()
  updateHit(outList)

  for (const outUnit of outList) {
    const index = unitList.indexOf(outUnit)
    if (index >= 0) unitList.splice(index, 1)
  }
}

function updateHit(outList) {
  const enemyList = unitList.filter((info) => info.hitInfo.type === 'enemy' || info.hitInfo.type === 'enemy-bullet')
  const playerList = unitList.filter((info) => info.hitInfo.type === 'player' || info.hitInfo.type === 'bullet')

  for (const player of playerList) {
    for (const enemy of enemyList) {
      const isHit = checkHitList(
        player.hitInfo.hitBox, [player.posInfo.r, player.posInfo.c],
        enemy.hitInfo.hitBox, [enemy.posInfo.r, enemy.posInfo.c]
      )
      if (!isHit) continue
      if (enemy.hitInfo.hitState === 0) {
        enemy.hitInfo.hitState = 1
        enemy.hitInfo.hitFrame = 20
      }
      if (player.hitInfo.hitState === 0) {
        player.hitInfo.hitState = 1
        player.hitInfo.hitFrame = 20
      }
      // if (enemy.hitInfo.hitState === 0 && enemy.hitInfo.type === 'enemy') {
      //   enemy.hitInfo.hitState = 1
      //   enemy.hitInfo.hitFrame = 20
      // }
      // if (player.hitInfo.hitState === 0 && player.hitInfo.type === 'player') {
      //   player.hitInfo.hitState = 1
      //   player.hitInfo.hitFrame = 20
      // }
    }
  }
}

function updateMove(outList) {
  for (const unit of unitList) {
    if (unit.moveSetInfo.moveInfo) {
      moveByFrameMoveSet(unit, fps)
    } else {
      let isEnd = true

      if (unit.moveSetInfo.list.length > 0) {
        isEnd = false
        unit.moveSetInfo.currentMove++
        if (unit.moveSetInfo.currentMove >= unit.moveSetInfo.list.length) {
          if (unit.moveSetInfo.type === 'cycle') {
            unit.moveSetInfo.currentMove = 0
          } else {
            isEnd = true
          }
        } else {
          setUnitMoveInfoMoveSet(unit, unit.moveSetInfo.list[unit.moveSetInfo.currentMove])
        }
      }

      if (!isEnd) continue
      if (unit.moveSetInfo.type === 'out') {
        // const index = unitList.indexOf(unit)
        // if(index >= 0) unitList.splice(index, 1)
        const index = outList.indexOf(unit)
        if (index < 0) outList.push(unit)
      }
    }
  }
}

function updateAct() {
  for (const unit of unitList) {
    if (!unit.weaponInfo) continue
    for (const weaponInfo of unit.weaponInfo.list) {

      const actInfo = weaponInfo.actInfo
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

      for (const actObjSet of weaponInfo.actObjSetList) {
        const moveInfo = actObjSet.moveInfo
        const sr = unit.posInfo.r + actObjSet.startPosInfo.dr
          + Math.floor(unit.drwObj.rs * 0.5) - Math.floor(actObjSet.drwObjInfo.rs * 0.5)
        const sc = unit.posInfo.c + actObjSet.startPosInfo.dc
        const actObjUnit = createActObjUnit(actObjSet.drwObjInfo, sr, sc, actObjSet.hitType)
        setUnitMoveInfoMoveSet(actObjUnit, moveInfo)
        unitList.push(actObjUnit)
      }
    }
  }
}

function draw() {
  // console.log('draw')
  // drawUnit(ctx, unitInfo, size)
  // drawBulletList()

  for (const unit of unitList) {
    if (unit.hitInfo.hitState === 0) {
      drawUnit(ctx, unit, size)
    } else {
      if (unit.hitInfo.hitFrame <= 0) {
        unit.hitInfo.hitState = 0
        drawUnit(ctx, unit, size)
      } else {
        let effectInfo = unit.effectInfoList.find((info) => info.target === 'bullet-hit')
        if (effectInfo) {
          drawUnit(ctx, unit, size, effectInfo.colorList)
        } else {
          drawUnit(ctx, unit, size)
        }

        unit.hitInfo.hitFrame--
      }
    }
  }
}