const partLinkInfo00 = {
  list: [
    {
      ucode: "230101000200", // yymmddhhmmss
      name: "front-00-link",
      tcode: "normal", // unit tcode (type code)
      target: "230101000100", // partInfo ucode,
      link: [{ // draw order f -> bd -> l -> r -> bk (unit tcode normal)
        type: "bd", // body link
        x: 4,
        y: 8
      }]
    },
    {
      ucode: "230101000201", // yymmddhhmmss
      name: "front-01-link",
      tcode: "normal", // unit tcode (type code)
      target: "230101000101", // partInfo ucode
      link: [{
        type: "bd", // body link
        x: 2,
        y: 6
      }]
    },
    {
      ucode: "230101000202", // yymmddhhmmss
      name: "front-02-link",
      tcode: "normal", // unit tcode (type code)
      target: "230101000102", // partInfo ucode
      link: [{
        type: "bd", // body link
        x: 2,
        y: 5
      }]
    },
    {
      ucode: "230101000103", // yymmddhhmmss
      name: "front-03-link",
      tcode: "normal", // unit tcode (type code)
      target: "230101000103", // partInfo ucode
      link: [{
        type: "bd", // body link
        x: 3,
        y: 9
      }]
    },
    {
      ucode: "230101000204", // yymmddhhmmss
      name: "body-00",
      tcode: "normal", // unit tcode (type code)
      target: "230101000104", // partInfo ucode
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
      ]
    },
    {
      ucode: "230101000205", // yymmddhhmmss
      name: "body-01",
      tcode: "normal", // unit tcode (type code)
      target: "230101000105", // partInfo ucode
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
      ]
    },
    {
      ucode: "230101000206", // yymmddhhmmss
      name: "body-02",
      tcode: "normal", // unit tcode (type code)
      target: "230101000106", // partInfo ucode
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
      ]
    },
    {
      ucode: "230101000207", // yymmddhhmmss
      name: "body-03",
      tcode: "normal", // unit tcode (type code)
      target: "230101000107", // partInfo ucode
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
      ]
    },
    {
      ucode: "230101000208", // yymmddhhmmss
      name: "left-00",
      tcode: "normal", // unit tcode (type code)
      target: "230101000108", // partInfo ucode
      link: [
        {
          type: "bd", // body link
          x: 5,
          y: 0
        }
      ]
    },
    {
      ucode: "230101000209", // yymmddhhmmss
      name: "right-00",
      tcode: "normal", // unit tcode (type code)
      target: "230101000109", // partInfo ucode
      link: [
        {
          type: "bd", // body link
          x: 0,
          y: 0
        }
      ]
    },
    {
      ucode: "230101000210", // yymmddhhmmss
      name: "back-00",
      tcode: "normal", // unit tcode (type code)
      target: "230101000110", // partInfo ucode
      link: [
        {
          type: "bd", // body link
          x: 3,
          y: 0
        }
      ]
    }
  ]
}