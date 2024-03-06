const testInfo = {
  id: "testInfo",
  name: "testInfo",
  memo: "testInfo",
  child: [
    {
      memo: "info01-child00",
      render: [
        {
          start:[50, 50],
          color: 'rgba(0, 0, 0, 0.2)',
          child: [
            {
              points: [0,0, 300,0], // first is moveTo
            },
            {
              points: [0,0, 0,300]
            },
            {
              points: [150,0, 150,300]
            },
            {
              points: [0,150, 300,150]
            }
          ]
        },
        {
          start:[50, 50],
          color: 'rgba(0, 0, 0, 1)',
          child: [
            {
              points: [120,80, 140,70]
            }
          ]
        }
      ]
    }
  ]
}