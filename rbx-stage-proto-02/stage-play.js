let canvas
let ctx
let startTimestamp = 0
let prevTimeStamp = 0
let frame = 0
let totalFrame = 0
let isPlaying = true
let fps
let size = 4
let unitList = []
let isUnitGuideOn = false
let resInfo = {
  rawInfoList: [],
  jrcInfoList: [],
  colorSetInfoList: [],
  hitSetInfoList: [],
  armsPresetList: []
}
let updateHitFunc = (unitList) => {}

function initCanvas(canvasId, canvasW, canvasH) {
  canvas = document.getElementById(canvasId)
  ctx = canvas.getContext('2d')
  canvas.width = canvasW
  canvas.height = canvasH
}

function checkParams(window, paramInfo=null) {
  const url = new URL(window.location)
  const searchParams = new URLSearchParams(url.search)
  let pSize = searchParams.get('size')
  if (pSize) size = pSize
  let pIsUnitGuideOn = searchParams.get('isUnitGuideOn')
  if (pIsUnitGuideOn) isUnitGuideOn = pIsUnitGuideOn

  if (paramInfo) {
    for (const [key, value] of Object.entries(paramInfo)) {
      const pV = searchParams.get(key)
      if (pV) paramInfo[key] = pV
    }
  }
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
  // if (totalFrame === 60 * 3) isPlaying = false
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
  const outList = []
  for (const unit of unitList) {
    updatePartFrmBhv(unit.partInfo, fps)
    if (unit.partInfo.state === 'out') outList.push(unit)
  }
  updateHitFunc(unitList)
  for (const outUnit of outList) {
    unitList.splice(unitList.indexOf(outUnit), 1)
  }
}

function draw() {
  for (const unit of unitList) {
    drawPartInfo(ctx, unit.partInfo, 0, 0, size)

    if (!isUnitGuideOn) continue
    drawRCArea(ctx, unit.partInfo, 0, 0, size)
    drawHitBox(ctx, unit.partInfo, 0, 0, size)
  }
}

function addUnit(unit) {
  unitList.push(unit)
}

function moveUnit(unit, r, c) {
  unit.partInfo.rcInfo.r = r
  unit.partInfo.rcInfo.c = c
}