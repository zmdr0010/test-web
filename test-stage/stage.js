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
let unitList = []
let isUnitGuideOn = false
let isSmooth = false

function initStage(canvasId, canvasW, canvasH) {
  canvas = document.getElementById(canvasId)
  ctx = canvas.getContext('2d')
  canvas.width = canvasW
  canvas.height = canvasH
}

function checkParams(window) {
  const url = new URL(window.location)
  const searchParams = new URLSearchParams(url.search)
  let pSize = searchParams.get('size')
  if (pSize) size = pSize
  let pIsUnitGuideOn = searchParams.get('isUnitGuideOn')
  if (pIsUnitGuideOn) isUnitGuideOn = pIsUnitGuideOn
  let pIsSmooth = searchParams.get('isSmooth')
  if (pIsSmooth) isSmooth = pIsSmooth
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
  fps = Math.round(frame * 1000 / current)
  if (current > 1000) {
    prevTimeStamp = timestamp
    frame = 0
  }
  update()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  draw()
  if (isPlaying) requestAnimationFrame(aniFrame)
}

function update() {
  for (const unit of unitList) {
    updatePartMove(unit.partInfo, fps, isSmooth)
    updatePartAct(unit.partInfo)
  }
}

function draw() {
  for (const unit of unitList) {
    // drawPartInfo(ctx, unit.partInfo, unit.partInfo.rcInfo.r, unit.partInfo.rcInfo.c, size)
    drawPartInfo(ctx, unit.partInfo, 0, 0, size)

    if (!isUnitGuideOn) continue
    // drawRCArea(ctx, unit.partInfo, unit.partInfo.rcInfo.r, unit.partInfo.rcInfo.c, size)
    // drawHitBox(ctx, unit.partInfo, unit.partInfo.rcInfo.r, unit.partInfo.rcInfo.c, size)
    drawRCArea(ctx, unit.partInfo, 0, 0, size)
    drawHitBox(ctx, unit.partInfo, 0, 0, size)
  }
}