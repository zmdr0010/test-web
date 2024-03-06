const partInfo01 = {
  list: [
    {
      ucode: "230101000100", // yymmddhhmmss
      name: "front-00",
      type: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000000", // rbsRawInfo ucode,
      link: [{ // draw order f -> bd -> l -> r -> bk
        type: "bd", // body link
        x: 4,
        y: 8
      }],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "230101000101", // yymmddhhmmss
      name: "front-01",
      type: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000001", // rbsRawInfo ucode
      link: [{
        type: "bd", // body link
        x: 2,
        y: 6
      }],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(50, 50, 50)" },
        { color: "rgb(30, 30, 30)" }
      ]
    },
    {
      ucode: "230101000102", // yymmddhhmmss
      name: "front-02",
      type: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000002", // rbsRawInfo ucode
      link: [{
        type: "bd", // body link
        x: 2,
        y: 5
      }],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "230101000103", // yymmddhhmmss
      name: "front-03",
      type: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000003", // rbsRawInfo ucode
      link: [{
        type: "bd", // body link
        x: 3,
        y: 9
      }],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "230101000104", // yymmddhhmmss
      name: "body-00",
      type: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000004", // rbsRawInfo ucode
      link: [
        {
          type: "f", // front link
          x: 3,
          y: 1
        },
        {
          type: "l", // left link
          x: 0,
          y: 2
        },
        {
          type: "r", // right link
          x: 6,
          y: 2
        },
        {
          type: "bk", // back link
          x: 3,
          y: 6
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "230101000105", // yymmddhhmmss
      name: "body-01",
      type: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000005", // rbsRawInfo ucode
      link: [
        {
          type: "f", // front link
          x: 4,
          y: 0
        },
        {
          type: "l", // left link
          x: 0,
          y: 3
        },
        {
          type: "r", // right link
          x: 8,
          y: 3
        },
        {
          type: "bk", // back link
          x: 4,
          y: 8
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "230101000106", // yymmddhhmmss
      name: "body-02",
      type: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000006", // rbsRawInfo ucode
      link: [
        {
          type: "f", // front link
          x: 2,
          y: 0
        },
        {
          type: "l", // left link
          x: 0,
          y: 1
        },
        {
          type: "r", // right link
          x: 4,
          y: 1
        },
        {
          type: "bk", // back link
          x: 2,
          y: 6
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "230101000107", // yymmddhhmmss
      name: "body-03",
      type: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000007", // rbsRawInfo ucode
      link: [
        {
          type: "f", // front link
          x: 2,
          y: 0
        },
        {
          type: "l", // left link
          x: 0,
          y: 2
        },
        {
          type: "r", // right link
          x: 4,
          y: 2
        },
        {
          type: "bk", // back link
          x: 2,
          y: 9
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "230101000108", // yymmddhhmmss
      name: "left-00",
      type: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000008", // rbsRawInfo ucode
      link: [
        {
          type: "bd", // body link
          x: 5,
          y: 0
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "230101000109", // yymmddhhmmss
      name: "right-00",
      type: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000009", // rbsRawInfo ucode
      link: [
        {
          type: "bd", // body link
          x: 0,
          y: 0
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "230101000110", // yymmddhhmmss
      name: "back-00",
      type: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "230101000010", // rbsRawInfo ucode
      link: [
        {
          type: "bd", // body link
          x: 3,
          y: 0
        }
      ],
      child: [ // child theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    }
  ]
}