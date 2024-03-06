const testDisplayInfo01 = {
  id: "testDisplayInfo01",
  name: "testDisplayInfo01",
  memo: "testDisplayInfo01",
  child: [
    {
      memo: "1280x720",
      render: [
        {
          start:[0, 0],
          color: 'rgba(255, 255, 255, 1)',
          type: 'fill',
          child: [
            {
              points: [0,0, 1280,0, 1280,720, 0,720, 0,0], // first is moveTo
            }
          ]
        }
      ]
    }
  ]
}