const fList = [
  {
    type: "f",// f(front), bd(body), l(left), r(right), bk(back)
    name: "front-sample-00",
    w:9,
    h:9,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          2,0, 6,0, 2,1, 6,1, 1,2, 2,2, 6,2, 7,2, 0,3, 1,3, 2,3, 3,3, 4,3, 5,3, 6,3, 7,3,
          8,3, 1,4, 2,4, 3,4, 4,4, 5,4, 6,4, 7,4, 2,5, 3,5, 4,5, 5,5, 6,5, 2,6, 3,6, 4,6,
          5,6, 6,6, 2,7, 3,7, 4,7, 5,7, 6,7, 3,8, 4,8, 5,8
        ]
      },
      {
        color: "rgb(130, 130, 130)",
        list: [
          0,4, 1,4, 2,4, 6,4, 7,4, 8,4, 1,5, 2,5, 6,5, 7,5, 2,6, 3,6, 5,6, 6,6, 3,7, 4,7, 5,7
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          3,1, 4,1, 5,1, 3,2, 4,2, 5,2, 3,3, 4,3, 5,3, 3,4, 4,4, 5,4
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          4,1, 3,2, 4,2, 5,2, 4,3, 4,4
        ]
      }
    ]
  },
  {
    type: "f",// f(front), bd(body), l(left), r(right), bk(back)
    name: "front-sample-01",
    w: 5,
    h: 8,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          2,1, 1,2, 2,2, 3,2, 0,3, 1,3, 2,3, 3,3, 4,3
        ]
      },
      {
        color: "rgb(130, 130, 130)",
        list: [
          2,1, 1,2, 2,2, 3,2, 1,3, 2,3, 3,3, 0,4, 1,4, 2,4, 3,4, 4,4, 1,5, 2,5, 3,5, 1,6, 2,6, 3,6,
          1,7, 2,7, 3,7
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          0,0, 4,0, 0,1, 1,1, 3,1, 4,1, 1,2, 2,2, 3,2
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          1,4, 3,4, 1,5, 2,5, 3,5
        ]
      },
      {
        color: "rgb(60, 60, 60)",
        list: [
          2,5, 1,6, 2,6, 3,6
        ]
      },
      {
        color: "rgb(50, 50, 50)",
        list: [
          2,6, 2,7
        ]
      },
      {
        color: "rgb(40, 40, 40)",
        list: [
          2,2, 2,3
        ]
      }
    ]
  },
  {
    type: "f",// f(front), bd(body), l(left), r(right), bk(back)
    name: "front-sample-02",
    w: 5,
    h: 7,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          1,0, 3,0, 0,1, 1,1, 2,1, 3,1, 4,1, 1,2, 2,2, 3,2, 1,3, 2,3, 3,3
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          1,5, 2,5, 3,5, 2,6
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          2,1, 2,2, 2,3, 1,4, 2,4, 3,4, 2,5
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          2,2, 2,3
        ]
      }
    ]
  },
  {
    type: "f",// f(front), bd(body), l(left), r(right), bk(back)
    name: "front-sample-03",
    w: 7,
    h: 11,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          1,0, 5,0, 1,1, 5,1, 1,2, 2,2, 3,2, 4,2, 5,2, 1,3, 2,3, 3,3, 4,3, 5,3, 1,4, 2,4, 3,4,
          4,4, 5,4, 0,5, 1,5, 2,5, 3,5, 4,5, 5,5, 6,5, 1,6, 2,6, 3,6, 4,6, 5,6, 2,7, 3,7, 4,7,
          2,8, 3,8, 4,8, 2,9, 3,9, 4,9, 3,10
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          1,5, 0,6, 1,6, 1,7
        ]
      },
      {
        color: "rgb(90, 90, 90)",
        list: [
          5,5, 5,6, 6,6, 5,7
        ]
      },
      {
        color: "rgb(70, 70, 70)",
        list: [
          2,8, 3,8, 4,8, 3,9
        ]
      },
      {
        color: "rgb(50, 50, 50)",
        list: [
          2,5, 3,5, 4,5, 2,6, 4,6, 2,7, 4,7
        ]
      },
      {
        color: "rgb(30, 30, 30)",
        list: [
          2,1, 4,1, 2,2, 4,2, 2,3, 4,3, 2,4, 3,4, 4,4, 3,5
        ]
      }
    ]
  }
]

const bdList = [
  {
    type: "bd",// f(front), bd(body), l(left), r(right), bk(back)
    name: "body-sample-00",
    w:7,
    h:8,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          0,1, 6,1, 0,2, 1,2, 5,2, 6,2, 0,3, 1,3, 2,3, 3,3, 4,3, 5,3, 6,3, 0,4, 1,4,
          2,4, 3,4, 4,4, 5,4, 6,4, 2,5, 3,5, 4,5, 2,6, 3,6, 4,6
        ]
      },
      {
        color: "rgb(130, 130, 130)",
        list: [
          1,0, 5,0, 1,1, 2,1, 4,1, 5,1, 1,2, 2,2, 3,2, 4,2, 5,2, 1,3, 5,3, 1,4, 5,4
        ]
      },
      {
        color: "rgb(110, 110, 110)",
        list: [
          2,6, 3,6, 4,6, 3,7
        ]
      },
      {
        color: "rgb(90, 90, 90)",
        list: [
          2,1, 4,1, 2,2, 3,2, 4,2, 3,3, 3,4
        ]
      }
    ]
  },
  {
    type: "bd",// f(front), bd(body), l(left), r(right), bk(back)
    name: "body-sample-01",
    w:9,
    h:9,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          3,0, 4,0, 5,0, 2,1, 3,1, 4,1, 5,1, 6,1, 0,2, 1,2, 2,2, 3,2, 4,2, 5,2, 6,2,
          7,2, 8,2, 0,3, 1,3, 2,3, 3,3, 4,3, 5,3, 6,3, 7,3, 8,3, 0,4, 1,4, 2,4, 3,4,
          4,4, 5,4, 6,4, 7,4, 8,4, 0,5, 1,5, 2,5, 3,5, 4,5, 5,5, 6,5, 7,5, 8,5, 2,6,
          3,6, 4,6, 5,6, 6,6, 3,7, 4,7, 5,7, 3,8, 4,8, 5,8
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          2,0, 6,0, 1,1, 2,1, 6,1, 7,1, 1,2, 2,2, 3,2, 4,2, 5,2, 6,2, 7,2, 1,3, 2,3,
          3,3, 4,3, 5,3, 6,3, 7,3, 1,4, 2,4, 6,4, 7,4, 1,5, 2,5, 6,5, 7,5
        ]
      },
      {
        color: "rgb(90, 90, 90)",
        list: [
          1,6, 2,6, 3,6, 4,6, 5,6, 6,6, 7,6, 2,7, 3,7, 4,7, 5,7, 6,7, 3,8, 4,8, 5,8
        ]
      },
      {
        color: "rgb(70, 70, 70)",
        list: [
          2,7, 3,7, 4,7, 5,7, 6,7
        ]
      },
      {
        color: "rgb(50, 50, 50)",
        list: [
          4,0, 4,1, 3,2, 4,2, 5,2, 3,3, 4,3, 5,3, 4,4, 4,5
        ]
      }
    ]
  },
  {
    type: "bd",// f(front), bd(body), l(left), r(right), bk(back)
    name: "body-sample-02",
    w:5,
    h:7,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          2,0, 1,2, 2,1, 3,1, 1,2, 2,2, 3,2, 1,3, 2,3, 3,3, 1,4, 2,4, 3,4, 2,5, 2,6
        ]
      },
      {
        color: "rgb(130, 130, 130)",
        list: [
          0,3, 1,3, 2,3, 3,3, 4,3, 1,4, 3,4, 1,5, 3,5, 1,6, 3,6
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          0,0, 1,0, 3,0, 4,0, 0,1, 1,1, 2,1, 3,1, 4,1, 0,2, 4,2
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          1,6, 2,6, 3,6
        ]
      },
      {
        color: "rgb(60, 60, 60)",
        list: [
          2,1, 1,2, 2,2, 3,2, 2,3
        ]
      }
    ]
  },
  {
    type: "bd",// f(front), bd(body), l(left), r(right), bk(back)
    name: "body-sample-03",
    w:5,
    h:11,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          2,0, 2,1, 1,2, 2,2, 3,2, 1,3, 2,3, 3,3, 1,4, 2,4, 3,4, 1,5, 2,5, 3,5, 1,6,
          2,6, 3,6, 1,7, 2,7, 3,7, 1,8, 2,8, 3,8, 2,9, 2,10
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          0,7, 1,7, 2,7, 3,7, 4,7, 1,8, 2,8, 3,8, 2,9, 2,10
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          1,9, 2,9, 3,9
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          0,0, 1,0, 3,0, 4,0, 0,1, 1,1, 3,1, 4,1, 1,2, 2,2, 3,2, 1,3, 2,3, 3,3, 2,4
        ]
      },
      {
        color: "rgb(50, 50, 50)",
        list: [
          2,1, 2,2, 2,3, 2,4, 2,5
        ]
      }
    ]
  }
]

const lList = [
  {
    type: "l",// f(front), bd(body), l(left), r(right), bk(back)
    name: "left-sample-00",
    w:6,
    h:5,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          3,0, 4,0, 5,0, 2,1, 3,1, 4,1, 5,1, 1,2, 2,2, 3,2, 4,2, 5,2, 0,3, 1,3, 2,3,
          3,3, 4,3, 5,3, 0,4, 1,4
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          2,0, 3,0, 4,0, 5,0, 0,1, 1,1, 2,1, 3,1, 4,1, 5,1, 0,2, 1,2, 2,2, 3,2, 4,2,
          5,2, 0,3, 1,3, 2,3, 3,3, 4,3, 5,3
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          1,4, 2,4, 3,4, 4,4
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          4,0, 4,1, 4,2, 4,3, 4,4
        ]
      }
    ]
  }
]

const rList = [
  {
    type: "r",// f(front), bd(body), l(left), r(right), bk(back)
    name: "right-sample-00",
    w:6,
    h:5,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          0,0, 1,0, 2,0, 0,1, 1,1, 2,1, 3,1, 0,2, 1,2, 2,2, 3,2, 0,3, 1,3,
          2,3, 3,3, 4,3, 5,3, 4,4, 5,4
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          0,0, 1,0, 2,0, 3,0, 0,1, 1,1, 2,1, 3,1, 4,1, 5,1, 0,2, 1,2, 2,2,
          3,2, 4,2, 5,2, 0,3, 1,3, 2,3, 3,3, 4,3, 5,3
        ]
      },
      {
        color: "rgb(100, 100, 100)",
        list: [
          1,4, 2,4, 3,4, 4,4
        ]
      },
      {
        color: "rgb(80, 80, 80)",
        list: [
          1,0, 1,1, 1,2, 1,3, 1,4
        ]
      }
    ]
  }
]

const bkList = [
  {
    type: "bk",// f(front), bd(body), l(left), r(right), bk(back)
    name: "back-sample-00",
    w:7,
    h:7,
    list: [
      {
        color: "rgb(150, 150, 150)",
        list: [
          2,0, 3,0, 4,0, 2,1, 3,1, 4,1, 1,2, 2,2, 3,2, 4,2, 5,2, 0,3, 1,3, 2,3, 3,3,
          4,3, 5,3, 6,3, 0,4, 1,4, 2,4, 3,4, 4,4, 5,4, 6,4, 1,5, 2,5, 3,5, 4,5, 5,5,
          1,6, 2,6, 3,6, 4,6, 5,6
        ]
      },
      {
        color: "rgb(120, 120, 120)",
        list: [
          3,0, 2,1, 3,1, 4,1, 2,2, 3,2, 4,2, 3,3
        ]
      },
      {
        color: "rgb(90, 90, 90)",
        list: [
          3,1, 3,2, 1,3, 2,3, 3,3, 4,3, 5,3, 0,4, 1,4, 2,4, 3,4, 4,4, 5,4, 6,4, 0,5,
          1,5, 2,5, 3,5, 4,5, 5,5, 6,5, 3,6
        ]
      },
      {
        color: "rgb(70, 70, 70)",
        list: [
          3,3, 3,4, 3,5
        ]
      }
    ]
  }
]