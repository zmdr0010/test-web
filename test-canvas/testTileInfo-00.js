const testTileInfo00 = {
  id: "testTileInfo00",
  name: "testTileInfo00",
  memo: "testTileInfo00",
  child: [
    {
      memo: "36x36",
      render: [
        {
          start:[0, 0],
          color: 'rgba(50, 50, 100, 1)',
          type: 'fill',
          child: [
            {
              points: [0,0, 36,0, 36,36, 0,36, 0,0], // first is moveTo
            },
            {
              color: 'rgba(110, 110, 255, 1)',
              points: [2,2, 34,2, 34,34, 2,34, 2,2]
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
        points: [0,0, 36,0, 36,36, 0,36, 0,0], // first is moveTo
      },
      {
        color: 'rgba(110, 110, 255, 1)',
        points: [2,2, 34,2, 34,34, 2,34, 2,2]
      }
    ]
  }
}

const render = testTileInfo00.child[0].render

for (let i=0; i<17; i++) {
  const x = i * 36

  for (let j=0; j<10; j++) {
    if (i === 0 && j === 0) continue
    const r = getRender0()
    const y = j * 36
    r.start = [x, y]
    render.push(r)
  }
}