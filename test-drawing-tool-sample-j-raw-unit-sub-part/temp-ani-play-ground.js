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

function initCanvas(canvasId, canvasW, canvasH) {
  canvas = document.getElementById(canvasId)
  ctx = canvas.getContext('2d')
  canvas.width = canvasW
  canvas.height = canvasH
}

function startAni() {
  isPlaying = true
  requestAnimationFrame(aniFrame)
}

function stopAni() {
  isPlaying = false
}

function aniFrame(timestamp) {
  frame++
  totalFrame++
  if (startTimestamp===0) {
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

function drawHitBox(ctx, hitBox, sr, sc, size) {
  for (let i=0; i<hitBox.length; i++) {
    const hb = hitBox[i]
    const l = (hb[0] + sr) * size
    const r = (hb[1] + 1 + sr) * size
    const t = (hb[2] + sc) * size
    const b = (hb[3] + 1 + sc) * size
    const w = r - l
    const h = b - t
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.rect(l, t, w, h)
    ctx.stroke()
  }
}