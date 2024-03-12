const sampleTempPartPresetInfoMain = {
  uCode: "temp-part-preset-info-main",
  partInfo: {
    uCode: "temp-part-info-main",
    tCode: "main",
    rcInfo: {
      r: 40,
      c: 31,
      rsz: 19,
      csz: 23
    },
    drwObjLink: "",
    moveSetLink: "",
    hitLink: "",
    effectLink: "",
    armsLink: "",
    child: [
      {
        uCode: "temp-part-info-f",
        tCode: "f",
        rcInfo: {
          r: 7,
          c: 0,
          rsz: 5,
          csz: 8
        },
        drwObjLink: "drw-obj-link-info-raw-front-sample-01",
        moveSetLink: "",
        hitLink: "hit-link-info-obj-area",
        effectLink: "",
        armsLink: "",
        child: []
      },
      {
        uCode: "temp-part-info-l",
        tCode: "l",
        rcInfo: {
          r: 0,
          c: 10,
          rsz: 6,
          csz: 5
        },
        drwObjLink: "drw-obj-link-info-raw-left-sample-00",
        moveSetLink: "",
        hitLink: "hit-link-info-obj-area",
        effectLink: "",
        armsLink: "",
        child: []
      },
      {
        uCode: "temp-part-info-r",
        tCode: "r",
        rcInfo: {
          r: 13,
          c: 10,
          rsz: 6,
          csz: 5
        },
        drwObjLink: "drw-obj-link-info-raw-right-sample-00",
        moveSetLink: "",
        hitLink: "hit-link-info-obj-area",
        effectLink: "",
        armsLink: "",
        child: []
      },
      {
        uCode: "temp-part-info-bk",
        tCode: "bk",
        rcInfo: {
          r: 6,
          c: 16,
          rsz: 7,
          csz: 7
        },
        drwObjLink: "drw-obj-link-info-raw-back-sample-00",
        moveSetLink: "",
        hitLink: "hit-link-info-obj-area",
        effectLink: "",
        armsLink: "",
        child: []
      },
      {
        uCode: "temp-part-info-body",
        tCode: "bd",
        rcInfo: {
          "r": 6,
          "c": 8,
          "rsz": 7,
          "csz": 8
        },
        drwObjLink: "drw-obj-link-info-raw-body-sample-00",
        moveSetLink: "",
        hitLink: "hit-link-info-obj-area",
        effectLink: "",
        armsLink: "",
        child: []
      }
    ]
  }
}

const sampleTempPartPresetInfoMissileShootF = {
  uCode: 'part-preset-info-20240122143329-mis-00-02-shoot-f',
  partInfo: {
    uCode: 'part-info-20240122143329-mis-00-02-shoot-f',
    tCode: 'mis',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
    drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-02', // drwObjLinkInfo uCode
    moveSetLink: 'sample-part-move-set-preset-info-sample-shoot-f',
    hitLink: 'hit-link-info-obj-area',
    effectLink: '',
    armsLink: '',
    child: []
  }
}

const sampleTempPartPresetInfoMissileShootLR = {
  uCode: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r',
  partInfo: {
    uCode: 'part-info-20240122143329-mis-00-02-shoot-l-r',
    tCode: 'mis',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
    drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-02', // drwObjLinkInfo uCode
    moveSetLink: 'sample-part-move-set-preset-info-sample-shoot-l-r',
    hitLink: 'hit-link-info-obj-area',
    effectLink: '',
    armsLink: '',
    child: []
  }
}