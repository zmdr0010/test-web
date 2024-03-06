const info00 = {
  id: "info00",
  name: "info00",
  memo: "info00",
  render: [
    {
      memo: "info00 render00", // optional
      // start: [10, 30], // optional - null is 0, 0
      color: 'green',
      type: 'fill',
      // type: 'stroke', // default
      child: [
        {
          // start: [50, 0],
          type: "stroke", // fill
          // color: "black", // rgba(0, 0, 200, 0.5) // rgb(200, 0, 0)
          // line_width: 5,
          points: [80,80, 80,0, 0,80], // first is moveTo
        },
        {
          // start: [0, 50],
          // type: "fill",
          color: "blue",
          points: [0,25, 25,50, 25,0]
        }
      ]
    }
  ],
  child: [
    {
      id: "info00-child00",
      name: "info00-child00",
      memo: "info00-child00",
      render: [
        {
          start:[200, 100],
          color: 'gray',
          child: [
            {
              points: [80,80, 80,0, 0,80], // first is moveTo
            },
            {
              points: [0,25, 25,50, 25,0]
            }
          ]
        }
      ]
    }
  ]
}

const info01 = {
  id: "info01",
  name: "info01",
  memo: "info01",
  child: [
    {
      id: "info01-child00",
      name: "info01-child00",
      memo: "info01-child00",
      render: [
        {
          start:[200, 100],
          color: 'gray',
          child: [
            {
              points: [80,80, 80,0, 0,80], // first is moveTo
            },
            {
              points: [0,25, 25,50, 25,0]
            }
          ]
        }
      ]
    }
  ]
}