const testW = 100
const testM = 2
const testW1 = testW - testM

function getRender0() {
  return {
    start:[0, 0],
    color: 'rgba(50, 50, 100, 1)',
    type: 'fill',
    child: [
      {
        points: [0,0, testW,0, testW,testW, 0,testW, 0,0], // first is moveTo
      },
      {
        color: 'rgba(110, 110, 255, 1)',
        points: [testM,testM, testW1,testM, testW1,testW1, testM,testW1, testM,testM]
      }
    ]
  }
}

const testTileInfo03 = {
  id: "testTileInfo03",
  name: "testTileInfo03",
  memo: "testTileInfo03",
  child: [
    {
      memo: `${testW}x${testW}`,
      render: [getRender0()]
    }
  ]
}

const render = testTileInfo03.child[0].render

const row = 17
const column = 10

for (let i=0; i<row; i++) {
  const x = i * testW

  for (let j=0; j<column; j++) {
    if (i === 0 && j === 0) continue
    const r = getRender0()
    const y = j * testW
    r.start = [x, y]
    render.push(r)
  }
}