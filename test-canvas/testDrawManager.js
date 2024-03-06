function startDraw(info, ctx) {
  if (info.hasOwnProperty('render')) drawRender(ctx, info.render)

  if (info.hasOwnProperty('child')) {
    for (const key in info.child) {
      const c = info.child[key]
      drawRender(ctx, c.render)
    }
  }
}

function drawRender(ctx, render) {
  for (const key in render) {
    drawByInfo(ctx, render[key])
  }
}

function drawByInfo(ctx, info, t='stroke', c='black', sx=0, sy=0) {
  let startX = 0 + sx
  let startY = 0 + sy
  let type = t
  ctx.fillStyle = c
  ctx.strokeStyle = c
  if (info.hasOwnProperty('start')) {
    startX = info.start[0] + sx
    startY = info.start[1] + sy
  }
  if (info.hasOwnProperty('type')) type = info.type
  console.log('startX : ' + startX + ', startY : ' + startY)
  if (info.hasOwnProperty('points')) {
    const size = info.points.length / 2
    if (type === 'fill') {
      if (info.hasOwnProperty('color')) ctx.fillStyle = info.color
    } else {
      if (info.hasOwnProperty('color')) ctx.strokeStyle = info.color
      if (info.hasOwnProperty('line_width')) ctx.lineWidth = info.line_width
    }
    ctx.beginPath()

    for (let i=0; i<size; i++) {
      const index = i * 2
      const x = info.points[index] + startX
      const y = info.points[index+1] + startY
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    if (type === 'fill') {
      console.log('---------- type === fill')
      // ctx.closePath()
      ctx.fill()
    } else {
      // ctx.closePath()
      ctx.stroke()
    }
  }
  if (info.hasOwnProperty('child')) {
    for (const c in info.child) {
      console.log(info.child[c])
      // drawByInfo(ctx, info.child[c], startX, startY)
      let color = 'black'
      if (info.hasOwnProperty('color')) color = info.color

      drawByInfo(ctx, info.child[c], type, color, startX, startY)
    }
  }
}