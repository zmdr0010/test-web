const partInfoS100 = { // part info sample 1 00
  list: [
    {
      ucode: "200101000100", // yymmddhhmmss
      name: "front-00",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000000", // rbsRawInfo ucode,
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200101000101", // yymmddhhmmss
      name: "front-01",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000001", // rbsRawInfo ucode
      theme: [ // theme (color)
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
      ucode: "200101000102", // yymmddhhmmss
      name: "front-02",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000002", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200101000103", // yymmddhhmmss
      name: "front-03",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000003", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200101000104", // yymmddhhmmss
      name: "body-00",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000004", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200101000105", // yymmddhhmmss
      name: "body-01",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000005", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200101000106", // yymmddhhmmss
      name: "body-02",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000006", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200101000107", // yymmddhhmmss
      name: "body-03",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000007", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200101000108", // yymmddhhmmss
      name: "left-00",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000008", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200101000109", // yymmddhhmmss
      name: "right-00",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000009", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200101000110", // yymmddhhmmss
      name: "back-00",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200101000010", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    // new
    {
      ucode: "200103000000", // yymmddhhmmss
      name: "front-04",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000000", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(40, 40, 40)" }
      ]
    },
    {
      ucode: "200103000001", // yymmddhhmmss
      name: "front-05",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000001", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000002", // yymmddhhmmss
      name: "front-06",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000002", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200103000003", // yymmddhhmmss
      name: "front-07",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000003", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200103000004", // yymmddhhmmss
      name: "body-04",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000004", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200103000005", // yymmddhhmmss
      name: "body-05",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000005", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000006", // yymmddhhmmss
      name: "body-06",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000006", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200103000007", // yymmddhhmmss
      name: "body-07",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000007", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" }
      ]
    },
    {
      ucode: "200103000008", // yymmddhhmmss
      name: "left-01",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000008", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" }
      ]
    },
    {
      ucode: "200103000009", // yymmddhhmmss
      name: "right-01",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000009", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" }
      ]
    },
    {
      ucode: "200103000010", // yymmddhhmmss
      name: "left-02",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000010", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000011", // yymmddhhmmss
      name: "right-02",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000011", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000012", // yymmddhhmmss
      name: "left-03",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000012", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" }
      ]
    },
    {
      ucode: "200103000013", // yymmddhhmmss
      name: "right-03",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000013", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" }
      ]
    },
    {
      ucode: "200103000014", // yymmddhhmmss
      name: "left-04",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000014", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(40, 40, 40)" }
      ]
    },
    {
      ucode: "200103000015", // yymmddhhmmss
      name: "right-04",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000015", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(40, 40, 40)" }
      ]
    },
    {
      ucode: "200103000016", // yymmddhhmmss
      name: "back-01",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000016", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000017", // yymmddhhmmss
      name: "back-02",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000017", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" }
      ]
    },
    {
      ucode: "200103000018", // yymmddhhmmss
      name: "back-03",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000018", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000019", // yymmddhhmmss
      name: "body-08",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000019", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200103000020", // yymmddhhmmss
      name: "body-09",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000020", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200103000021", // yymmddhhmmss
      name: "body-10",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000021", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200103000022", // yymmddhhmmss
      name: "body-11",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000022", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000023", // yymmddhhmmss
      name: "right-05",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000023", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000024", // yymmddhhmmss
      name: "left-05",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000024", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000025", // yymmddhhmmss
      name: "right-06",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000025", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000026", // yymmddhhmmss
      name: "left-06",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000026", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000027", // yymmddhhmmss
      name: "right-07",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000027", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000028", // yymmddhhmmss
      name: "left-07",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000028", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000029", // yymmddhhmmss
      name: "right-08",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000029", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000030", // yymmddhhmmss
      name: "left-08",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000030", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000031", // yymmddhhmmss
      name: "right-09",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000031", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000032", // yymmddhhmmss
      name: "left-09",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000032", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000033", // yymmddhhmmss
      name: "right-10",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000033", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000034", // yymmddhhmmss
      name: "left-10",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000034", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000035", // yymmddhhmmss
      name: "back-04",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000035", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" }
      ]
    },
    {
      ucode: "200103000036", // yymmddhhmmss
      name: "back-05",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000036", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000037", // yymmddhhmmss
      name: "back-06",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000037", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000038", // yymmddhhmmss
      name: "body-12",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000038", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000039", // yymmddhhmmss
      name: "body-13",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000039", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000040", // yymmddhhmmss
      name: "body-14",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000040", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000041", // yymmddhhmmss
      name: "body-15",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000041", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000042", // yymmddhhmmss
      name: "right-11",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000042", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000043", // yymmddhhmmss
      name: "left-11",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000043", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000044", // yymmddhhmmss
      name: "right-12",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000044", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000045", // yymmddhhmmss
      name: "left-12",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000045", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000046", // yymmddhhmmss
      name: "right-13",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000046", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000047", // yymmddhhmmss
      name: "left-13",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000047", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000048", // yymmddhhmmss
      name: "right-14",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000048", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" },
        { color: "rgb(40, 40, 40)" }
      ]
    },
    {
      ucode: "200103000049", // yymmddhhmmss
      name: "left-14",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000049", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" },
        { color: "rgb(40, 40, 40)" }
      ]
    },
    {
      ucode: "200103000050", // yymmddhhmmss
      name: "back-07",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000050", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000051", // yymmddhhmmss
      name: "back-08",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000051", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000052", // yymmddhhmmss
      name: "back-09",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000052", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000053", // yymmddhhmmss
      name: "back-10",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000053", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000054", // yymmddhhmmss
      name: "front-08",
      tcode: "f", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000054", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" },
        { color: "rgb(40, 40, 40)" },
        { color: "rgb(30, 30, 30)" }
      ]
    },
    {
      ucode: "200103000055", // yymmddhhmmss
      name: "body-16",
      tcode: "bd", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000055", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000056", // yymmddhhmmss
      name: "back-11",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000056", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" },
        { color: "rgb(40, 40, 40)" },
        { color: "rgb(30, 30, 30)" }
      ]
    },
    {
      ucode: "200103000057", // yymmddhhmmss
      name: "right-15",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000057", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000058", // yymmddhhmmss
      name: "left-15",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000058", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" }
      ]
    },
    {
      ucode: "200103000059", // yymmddhhmmss
      name: "left-16",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000059", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000060", // yymmddhhmmss
      name: "right-16",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000060", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" }
      ]
    },
    {
      ucode: "200103000061", // yymmddhhmmss
      name: "right-17",
      tcode: "r", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000061", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000062", // yymmddhhmmss
      name: "left-17",
      tcode: "l", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000062", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(150, 150, 150)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" }
      ]
    },
    {
      ucode: "200103000063", // yymmddhhmmss
      name: "back-12",
      tcode: "bk", // f(front), bd(body), l(left), r(right), bk(back)
      target: "200102000063", // rbsRawInfo ucode
      theme: [ // theme (color)
        { color: "rgb(180, 180, 180)" },
        { color: "rgb(160, 160, 160)" },
        { color: "rgb(140, 140, 140)" },
        { color: "rgb(120, 120, 120)" },
        { color: "rgb(100, 100, 100)" },
        { color: "rgb(90, 90, 90)" },
        { color: "rgb(80, 80, 80)" },
        { color: "rgb(70, 70, 70)" },
        { color: "rgb(60, 60, 60)" },
        { color: "rgb(50, 50, 50)" },
        { color: "rgb(40, 40, 40)" },
        { color: "rgb(30, 30, 30)" }
      ]
    }
  ]
}