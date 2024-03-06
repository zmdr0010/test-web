const sample00 = {
  id: "test-part-00",
  name: "",
  memo: "",
  size: {
    w: 180,
    h: 160
  },
  render: [
    {
      color: 'black',
      // type: 'fill',
      // type: 'stroke', // default
      child: [
        // {
        //   // type: "stroke", // fill
        //   // color: "black", // rgba(0, 0, 200, 0.5) // rgb(200, 0, 0)
        //   // line_width: 5,
        //   // color: "white",
        //   points: [0,25, 25,50, 25,0], // first is moveTo
        // },
        {
          // type: "fill",
          // type: "stroke",
          // color: "blue",
          // color: "black",
          // line_width: 2,
          points: [0,75, 50,0, 120,0, 55,85, 0,75]
        },
        {
          // points: [0,0+80, 55,10+80, 70,80+80, 20,64+80, 0,0+80]
          points: [0,80, 55,90, 70,160, 20,144, 0,80]
        },
        {
          // color: "green",
          points: [70,160, 55,90, 55,85, 120,0, 180,0, 180,30, 155,34, 100,150, 70,160]
        }
      ]
    }
  ]
}
const sample01 = {
  id: "test-part-01",
  name: "",
  memo: "",
  size: {
    w: 120,
    h: 110
  },
  render: [
    {
      color: 'green',
      type: 'fill',
      // type: 'stroke', // default
      child: [
        // {
        //   // type: "stroke", // fill
        //   // color: "black", // rgba(0, 0, 200, 0.5) // rgb(200, 0, 0)
        //   // line_width: 5,
        //   // color: "white",
        //   points: [0,25, 25,50, 25,0], // first is moveTo
        // },
        {
          // type: "fill",
          type: "stroke",
          // color: "blue",
          color: "black",
          // line_width: 2,
          points: [0,80, 44,0, 120,0, 110,50, 70,50, 45,110, 14,110, 0,100, 0,80]
        }
      ]
    }
  ]
}