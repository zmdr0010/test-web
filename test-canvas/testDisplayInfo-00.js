const testDisplayInfo00 = {
  id: "testDisplayInfo00",
  name: "testDisplayInfo00",
  memo: "testDisplayInfo00",
  child: [
    {
      memo: "1280x720",
      render: [
        {
          start:[0, 0],
          color: 'rgba(155, 155, 255, 1)',
          type: 'fill',
          child: [
            {
              points: [0,0, 1280,0, 1280,720, 0,720, 0,0], // first is moveTo
            }
          ]
        }
      ]
    },
    {
      memo: "640x480",
      render: [
        {
          start:[0, 0],
          color: 'rgba(255, 255, 255, 1)',
          type: 'fill',
          child: [
            {
              points: [0,0, 640,0, 640,480, 0,480, 0,0], // first is moveTo
            }
          ]
        }
      ]
    }
  ]
}