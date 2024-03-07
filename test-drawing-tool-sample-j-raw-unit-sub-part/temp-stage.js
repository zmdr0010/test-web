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

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (drawFunc) drawFunc()

  if (isPlaying) requestAnimationFrame(aniFrame)
}
