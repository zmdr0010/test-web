const testTileInfo01 = {
  id: "testTileInfo01",
  name: "testTileInfo01",
  memo: "testTileInfo01",
  child: [
    {
      memo: "72x72",
      render: [
        {
          start:[0, 0],
          color: 'rgba(50, 50, 100, 1)',
          type: 'fill',
          child: [
            {
              points: [0,0, 72,0, 72,72, 0,72, 0,0], // first is moveTo
            },
            {
              color: 'rgba(110, 110, 255, 1)',
              points: [2,2, 70,2, 70,70, 2,70, 2,2]
            }
          ]
        }
      ]
    }
  ]
}

function getRender0() {
  return {
    start:[0, 0],
    color: 'rgba(50, 50, 100, 1)',
    type: 'fill',
    child: [
      {
        points: [0,0, 72,0, 72,72, 0,72, 0,0], // first is moveTo
      },
      {
        color: 'rgba(110, 110, 255, 1)',
        points: [2,2, 70,2, 70,70, 2,70, 2,2]
      }
    ]
  }
}

const render = testTileInfo01.child[0].render

for (let i=0; i<17; i++) {
  const x = i * 72

  for (let j=0; j<10; j++) {
    if (i === 0 && j === 0) continue
    const r = getRender0()
    const y = j * 72
    r.start = [x, y]
    render.push(r)
  }
}