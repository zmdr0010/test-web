const partPresetInfoSampleList = [
  {
    uCode: 'part-preset-info-sample',
    partInfo: {
      uCode: 'part-info-sample',
      tCode: 'main',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-sample', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area', // hitLinkInfo uCode
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-sample-01',
    partInfo: {
      uCode: 'part-info-raw-body-sample-00',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: [
        {
          uCode: 'part-info-raw-body-sample-01',
          tCode: 'bd',
          rcInfo: { r: 10, c: 10, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
          drwObjLink: 'drw-obj-link-info-raw-body-sample-01', // drwObjLinkInfo uCode
          moveSetLink: '',
          hitLink: 'hit-link-info-obj-area',
          effectLink: '',
          armsLink: '',
          child: []
        }
      ]
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-00',
    partInfo: {
      uCode: 'part-info-raw-front-sample-00',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-01',
    partInfo: {
      uCode: 'part-info-raw-front-sample-01',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-02',
    partInfo: {
      uCode: 'part-info-raw-front-sample-02',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-03',
    partInfo: {
      uCode: 'part-info-raw-front-sample-03',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-00',
    partInfo: {
      uCode: 'part-info-raw-body-sample-00',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-01',
    partInfo: {
      uCode: 'part-info-raw-body-sample-01',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-02',
    partInfo: {
      uCode: 'part-info-raw-body-sample-02',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-03',
    partInfo: {
      uCode: 'part-info-raw-body-sample-03',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-00',
    partInfo: {
      uCode: 'part-info-raw-left-sample-00',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-00',
    partInfo: {
      uCode: 'part-info-raw-right-sample-00',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-00',
    partInfo: {
      uCode: 'part-info-raw-back-sample-00',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-04',
    partInfo: {
      uCode: 'part-info-raw-front-sample-04',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-05',
    partInfo: {
      uCode: 'part-info-raw-front-sample-05',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-05', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-06',
    partInfo: {
      uCode: 'part-info-raw-front-sample-06',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-06', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-07',
    partInfo: {
      uCode: 'part-info-raw-front-sample-07',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-07', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-04',
    partInfo: {
      uCode: 'part-info-raw-body-sample-04',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-05',
    partInfo: {
      uCode: 'part-info-raw-body-sample-05',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-05', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-06',
    partInfo: {
      uCode: 'part-info-raw-body-sample-06',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-06', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-07',
    partInfo: {
      uCode: 'part-info-raw-body-sample-07',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-07', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-01',
    partInfo: {
      uCode: 'part-info-raw-left-sample-01',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-01',
    partInfo: {
      uCode: 'part-info-raw-right-sample-01',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-02',
    partInfo: {
      uCode: 'part-info-raw-left-sample-02',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-02',
    partInfo: {
      uCode: 'part-info-raw-right-sample-02',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-03',
    partInfo: {
      uCode: 'part-info-raw-left-sample-03',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-03',
    partInfo: {
      uCode: 'part-info-raw-right-sample-03',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-04',
    partInfo: {
      uCode: 'part-info-raw-left-sample-04',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-04',
    partInfo: {
      uCode: 'part-info-raw-right-sample-04',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-01',
    partInfo: {
      uCode: 'part-info-raw-back-sample-01',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-02',
    partInfo: {
      uCode: 'part-info-raw-back-sample-02',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-03',
    partInfo: {
      uCode: 'part-info-raw-back-sample-03',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-08',
    partInfo: {
      uCode: 'part-info-raw-body-sample-08',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-08', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-09',
    partInfo: {
      uCode: 'part-info-raw-body-sample-09',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-09', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-10',
    partInfo: {
      uCode: 'part-info-raw-body-sample-10',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-10', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-11',
    partInfo: {
      uCode: 'part-info-raw-body-sample-11',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-11', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-05',
    partInfo: {
      uCode: 'part-info-raw-right-sample-05',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-05', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-05',
    partInfo: {
      uCode: 'part-info-raw-left-sample-05',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-05', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-06',
    partInfo: {
      uCode: 'part-info-raw-right-sample-06',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-06', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-06',
    partInfo: {
      uCode: 'part-info-raw-left-sample-06',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-06', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-07',
    partInfo: {
      uCode: 'part-info-raw-right-sample-07',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-07', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-07',
    partInfo: {
      uCode: 'part-info-raw-left-sample-07',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-07', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-08',
    partInfo: {
      uCode: 'part-info-raw-right-sample-08',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-08', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-08',
    partInfo: {
      uCode: 'part-info-raw-left-sample-08',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-08', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-09',
    partInfo: {
      uCode: 'part-info-raw-right-sample-09',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-09', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-09',
    partInfo: {
      uCode: 'part-info-raw-left-sample-09',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-09', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-10',
    partInfo: {
      uCode: 'part-info-raw-right-sample-10',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-10', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-10',
    partInfo: {
      uCode: 'part-info-raw-left-sample-10',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-10', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-04',
    partInfo: {
      uCode: 'part-info-raw-back-sample-04',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-05',
    partInfo: {
      uCode: 'part-info-raw-back-sample-05',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-05', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-06',
    partInfo: {
      uCode: 'part-info-raw-back-sample-06',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-06', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-12',
    partInfo: {
      uCode: 'part-info-raw-body-sample-12',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-12', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-13',
    partInfo: {
      uCode: 'part-info-raw-body-sample-13',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-13', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-14',
    partInfo: {
      uCode: 'part-info-raw-body-sample-14',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-14', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-15',
    partInfo: {
      uCode: 'part-info-raw-body-sample-15',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-15', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-11',
    partInfo: {
      uCode: 'part-info-raw-right-sample-11',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-11', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-11',
    partInfo: {
      uCode: 'part-info-raw-left-sample-11',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-11', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-12',
    partInfo: {
      uCode: 'part-info-raw-right-sample-12',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-12', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-12',
    partInfo: {
      uCode: 'part-info-raw-left-sample-12',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-12', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-13',
    partInfo: {
      uCode: 'part-info-raw-right-sample-13',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-13', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-13',
    partInfo: {
      uCode: 'part-info-raw-left-sample-13',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-13', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-14',
    partInfo: {
      uCode: 'part-info-raw-right-sample-14',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-14', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-14',
    partInfo: {
      uCode: 'part-info-raw-left-sample-14',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-14', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-07',
    partInfo: {
      uCode: 'part-info-raw-back-sample-07',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-07', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-08',
    partInfo: {
      uCode: 'part-info-raw-back-sample-08',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-08', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-09',
    partInfo: {
      uCode: 'part-info-raw-back-sample-09',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-09', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-10',
    partInfo: {
      uCode: 'part-info-raw-back-sample-10',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-10', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-front-sample-08',
    partInfo: {
      uCode: 'part-info-raw-front-sample-08',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-front-sample-08', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-body-sample-16',
    partInfo: {
      uCode: 'part-info-raw-body-sample-16',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-body-sample-16', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-11',
    partInfo: {
      uCode: 'part-info-raw-back-sample-11',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-11', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-15',
    partInfo: {
      uCode: 'part-info-raw-right-sample-15',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-15', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-15',
    partInfo: {
      uCode: 'part-info-raw-left-sample-15',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-15', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-16',
    partInfo: {
      uCode: 'part-info-raw-left-sample-16',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-16', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-16',
    partInfo: {
      uCode: 'part-info-raw-right-sample-16',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-16', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-right-sample-17',
    partInfo: {
      uCode: 'part-info-raw-right-sample-17',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-right-sample-17', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-left-sample-17',
    partInfo: {
      uCode: 'part-info-raw-left-sample-17',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-left-sample-17', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-back-sample-12',
    partInfo: {
      uCode: 'part-info-raw-back-sample-12',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-back-sample-12', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-front-sample-00',
    partInfo: {
      uCode: 'part-info-raw-big-front-sample-00',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-front-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-front-sample-01',
    partInfo: {
      uCode: 'part-info-raw-big-front-sample-01',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-front-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-front-sample-02',
    partInfo: {
      uCode: 'part-info-raw-big-front-sample-02',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-front-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-front-sample-03',
    partInfo: {
      uCode: 'part-info-raw-big-front-sample-03',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-front-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-00',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-00',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-01',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-01',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-02',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-02',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-03',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-03',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-04',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-04',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-bd-bk-sample-00',
    partInfo: {
      uCode: 'part-info-raw-big-bd-bk-sample-00',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-bd-bk-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-bd-bk-sample-01',
    partInfo: {
      uCode: 'part-info-raw-big-bd-bk-sample-01',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-bd-bk-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-bd-bk-sample-02',
    partInfo: {
      uCode: 'part-info-raw-big-bd-bk-sample-02',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-bd-bk-sample-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-f-bd-bk-sample-00',
    partInfo: {
      uCode: 'part-info-raw-big-f-bd-bk-sample-00',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-f-bd-bk-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-05',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-05',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-05', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-06',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-06',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-06', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-right-sample-07',
    partInfo: {
      uCode: 'part-info-raw-big-right-sample-07',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-right-sample-07', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-left-sample-08',
    partInfo: {
      uCode: 'part-info-raw-big-left-sample-08',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-left-sample-08', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-body-sample-00',
    partInfo: {
      uCode: 'part-info-raw-big-body-sample-00',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-body-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-back-sample-00',
    partInfo: {
      uCode: 'part-info-raw-big-back-sample-00',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-back-sample-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-raw-big-back-sample-01',
    partInfo: {
      uCode: 'part-info-raw-big-back-sample-01',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-raw-big-back-sample-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119153113_f',
    partInfo: {
      uCode: 'part-info-20240119153113_f',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119153113_f', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119152833_f',
    partInfo: {
      uCode: 'part-info-20240119152833_f',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119152833_f', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-0240119152518_f',
    partInfo: {
      uCode: 'part-info-0240119152518_f',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-0240119152518_f', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119152131_f',
    partInfo: {
      uCode: 'part-info-20240119152131_f',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119152131_f', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119151651_f',
    partInfo: {
      uCode: 'part-info-20240119151651_f',
      tCode: 'f',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119151651_f', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119155318_l',
    partInfo: {
      uCode: 'part-info-20240119155318_l',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119155318_l', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119155121_l',
    partInfo: {
      uCode: 'part-info-20240119155121_l',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119155121_l', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119154558_l',
    partInfo: {
      uCode: 'part-info-20240119154558_l',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119154558_l', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119154214_l',
    partInfo: {
      uCode: 'part-info-20240119154214_l',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119154214_l', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-2024011915498_l',
    partInfo: {
      uCode: 'part-info-2024011915498_l',
      tCode: 'l',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-2024011915498_l', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119155318_l_h_reverse',
    partInfo: {
      uCode: 'part-info-20240119155318_l_h_reverse',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119155318_l_h_reverse', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119155121_l_h_reverse',
    partInfo: {
      uCode: 'part-info-20240119155121_l_h_reverse',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119155121_l_h_reverse', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119154558_l_h_reverse',
    partInfo: {
      uCode: 'part-info-20240119154558_l_h_reverse',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119154558_l_h_reverse', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119154214_l_h_reverse',
    partInfo: {
      uCode: 'part-info-20240119154214_l_h_reverse',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119154214_l_h_reverse', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-2024011915498_l_h_reverse',
    partInfo: {
      uCode: 'part-info-2024011915498_l_h_reverse',
      tCode: 'r',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-2024011915498_l_h_reverse', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119162153_bk',
    partInfo: {
      uCode: 'part-info-20240119162153_bk',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119162153_bk', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119162015_bk',
    partInfo: {
      uCode: 'part-info-20240119162015_bk',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119162015_bk', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119161616_bk',
    partInfo: {
      uCode: 'part-info-20240119161616_bk',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119161616_bk', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119161425_bk',
    partInfo: {
      uCode: 'part-info-20240119161425_bk',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119161425_bk', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-2024011916187_bk',
    partInfo: {
      uCode: 'part-info-2024011916187_bk',
      tCode: 'bk',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-2024011916187_bk', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119161037_bd',
    partInfo: {
      uCode: 'part-info-20240119161037_bd',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119161037_bd', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240119155525_bd',
    partInfo: {
      uCode: 'part-info-20240119155525_bd',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240119155525_bd', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-2024011916611_bd',
    partInfo: {
      uCode: 'part-info-2024011916611_bd',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-2024011916611_bd', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-2024011916320_bd',
    partInfo: {
      uCode: 'part-info-2024011916320_bd',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-2024011916320_bd', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-2024011915595_bd',
    partInfo: {
      uCode: 'part-info-2024011915595_bd',
      tCode: 'bd',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-2024011915595_bd', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240122143329-mis-00-00',
    partInfo: {
      uCode: 'part-info-20240122143329-mis-00-00',
      tCode: 'mis',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-00', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240122143329-mis-00-01',
    partInfo: {
      uCode: 'part-info-20240122143329-mis-00-01',
      tCode: 'mis',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-01', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240122143329-mis-00-02',
    partInfo: {
      uCode: 'part-info-20240122143329-mis-00-02',
      tCode: 'mis',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-02', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240122143329-mis-00-03',
    partInfo: {
      uCode: 'part-info-20240122143329-mis-00-03',
      tCode: 'mis',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-03', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  },
  {
    uCode: 'part-preset-info-20240122143329-mis-00-04',
    partInfo: {
      uCode: 'part-info-20240122143329-mis-00-04',
      tCode: 'mis',
      rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },// -1 : calculating (include drwObj and child) on init
      drwObjLink: 'drw-obj-link-info-20240122143329-mis-00-04', // drwObjLinkInfo uCode
      moveSetLink: '',
      hitLink: 'hit-link-info-obj-area',
      effectLink: '',
      armsLink: '',
      child: []
    }
  }
]