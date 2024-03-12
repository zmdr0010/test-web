const drwObjLinkInfoSampleList = [
  {
    uCode: 'drw-obj-link-info-sample',
    drwRawInfo: 'raw-front-sample-00', // drwRawInfo uCode, none or empty not drawing
    colorSetInfo: 'sample-color-set-info-00', // colorSetInfo uCode
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 }, // -1 : rsz (row size), csz (column size) calculating (include child) on init
    child: [
      {
        drwRawInfo: 'raw-front-sample-01', // drwRawInfo uCode
        colorSetInfo: 'sample-color-set-info-00', // colorSetInfo uCode
        rcInfo: { r: 10, c: 2, rsz: -1, csz: -1 },
        child: []
      },
      {
        drwRawInfo: 'raw-front-sample-02', // drwRawInfo uCode
        colorSetInfo: 'sample-color-set-info-00', // colorSetInfo uCode
        rcInfo: { r: 10, c: 12, rsz: -1, csz: -1 },
        child: []
      }
    ]
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-00',
    drwRawInfo: 'raw-front-sample-00', // drwRawInfo uCode
    colorSetInfo: 'sample-color-set-info-raw-front-sample-00', // colorSetInfo uCode
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-01',
    drwRawInfo: 'raw-front-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-02',
    drwRawInfo: 'raw-front-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-03',
    drwRawInfo: 'raw-front-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-00',
    drwRawInfo: 'raw-body-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-01',
    drwRawInfo: 'raw-body-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-02',
    drwRawInfo: 'raw-body-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-03',
    drwRawInfo: 'raw-body-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-00',
    drwRawInfo: 'raw-left-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-00',
    drwRawInfo: 'raw-right-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-00',
    drwRawInfo: 'raw-back-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-04',
    drwRawInfo: 'raw-front-sample-04',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-05',
    drwRawInfo: 'raw-front-sample-05',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-05',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-06',
    drwRawInfo: 'raw-front-sample-06',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-06',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-07',
    drwRawInfo: 'raw-front-sample-07',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-07',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-04',
    drwRawInfo: 'raw-body-sample-04',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-05',
    drwRawInfo: 'raw-body-sample-05',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-05',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-06',
    drwRawInfo: 'raw-body-sample-06',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-06',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-07',
    drwRawInfo: 'raw-body-sample-07',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-07',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-01',
    drwRawInfo: 'raw-left-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-01',
    drwRawInfo: 'raw-right-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-02',
    drwRawInfo: 'raw-left-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-02',
    drwRawInfo: 'raw-right-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-03',
    drwRawInfo: 'raw-left-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-03',
    drwRawInfo: 'raw-right-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-04',
    drwRawInfo: 'raw-left-sample-04',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },{
    uCode: 'drw-obj-link-info-raw-right-sample-04',
    drwRawInfo: 'raw-right-sample-04',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-01',
    drwRawInfo: 'raw-back-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-02',
    drwRawInfo: 'raw-back-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-03',
    drwRawInfo: 'raw-back-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-08',
    drwRawInfo: 'raw-body-sample-08',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-08',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-09',
    drwRawInfo: 'raw-body-sample-09',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-09',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-10',
    drwRawInfo: 'raw-body-sample-10',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-10',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-11',
    drwRawInfo: 'raw-body-sample-11',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-11',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-05',
    drwRawInfo: 'raw-right-sample-05',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-05',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-05',
    drwRawInfo: 'raw-left-sample-05',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-05',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-06',
    drwRawInfo: 'raw-right-sample-06',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-06',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-06',
    drwRawInfo: 'raw-left-sample-06',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-06',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-07',
    drwRawInfo: 'raw-right-sample-07',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-07',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-07',
    drwRawInfo: 'raw-left-sample-07',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-07',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-08',
    drwRawInfo: 'raw-right-sample-08',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-08',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-08',
    drwRawInfo: 'raw-left-sample-08',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-08',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-09',
    drwRawInfo: 'raw-right-sample-09',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-09',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-09',
    drwRawInfo: 'raw-left-sample-09',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-09',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-10',
    drwRawInfo: 'raw-right-sample-10',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-10',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-10',
    drwRawInfo: 'raw-left-sample-10',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-10',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-04',
    drwRawInfo: 'raw-back-sample-04',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-05',
    drwRawInfo: 'raw-back-sample-05',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-05',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-06',
    drwRawInfo: 'raw-back-sample-06',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-06',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-12',
    drwRawInfo: 'raw-body-sample-12',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-12',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-13',
    drwRawInfo: 'raw-body-sample-13',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-13',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-14',
    drwRawInfo: 'raw-body-sample-14',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-14',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-15',
    drwRawInfo: 'raw-body-sample-15',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-15',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-11',
    drwRawInfo: 'raw-right-sample-11',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-11',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-11',
    drwRawInfo: 'raw-left-sample-11',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-11',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-12',
    drwRawInfo: 'raw-right-sample-12',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-12',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-12',
    drwRawInfo: 'raw-left-sample-12',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-12',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-13',
    drwRawInfo: 'raw-right-sample-13',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-13',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-13',
    drwRawInfo: 'raw-left-sample-13',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-13',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-14',
    drwRawInfo: 'raw-right-sample-14',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-14',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-14',
    drwRawInfo: 'raw-left-sample-14',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-14',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-07',
    drwRawInfo: 'raw-back-sample-07',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-07',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-08',
    drwRawInfo: 'raw-back-sample-08',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-08',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-09',
    drwRawInfo: 'raw-back-sample-09',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-09',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-10',
    drwRawInfo: 'raw-back-sample-10',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-10',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-front-sample-08',
    drwRawInfo: 'raw-front-sample-08',
    colorSetInfo: 'sample-color-set-info-raw-front-sample-08',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-body-sample-16',
    drwRawInfo: 'raw-body-sample-16',
    colorSetInfo: 'sample-color-set-info-raw-body-sample-16',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-11',
    drwRawInfo: 'raw-back-sample-11',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-11',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-15',
    drwRawInfo: 'raw-right-sample-15',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-15',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-15',
    drwRawInfo: 'raw-left-sample-15',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-15',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-16',
    drwRawInfo: 'raw-left-sample-16',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-16',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-16',
    drwRawInfo: 'raw-right-sample-16',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-16',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-right-sample-17',
    drwRawInfo: 'raw-right-sample-17',
    colorSetInfo: 'sample-color-set-info-raw-right-sample-17',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-left-sample-17',
    drwRawInfo: 'raw-left-sample-17',
    colorSetInfo: 'sample-color-set-info-raw-left-sample-17',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-back-sample-12',
    drwRawInfo: 'raw-back-sample-12',
    colorSetInfo: 'sample-color-set-info-raw-back-sample-12',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-front-sample-00',
    drwRawInfo: 'raw-big-front-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-big-front-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-front-sample-01',
    drwRawInfo: 'raw-big-front-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-big-front-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-front-sample-02',
    drwRawInfo: 'raw-big-front-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-big-front-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-front-sample-03',
    drwRawInfo: 'raw-big-front-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-big-front-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-00',
    drwRawInfo: 'raw-big-left-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-01',
    drwRawInfo: 'raw-big-left-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-02',
    drwRawInfo: 'raw-big-left-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-03',
    drwRawInfo: 'raw-big-left-sample-03',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-04',
    drwRawInfo: 'raw-big-left-sample-04',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-bd-bk-sample-00',
    drwRawInfo: 'raw-big-bd-bk-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-big-bd-bk-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-bd-bk-sample-01',
    drwRawInfo: 'raw-big-bd-bk-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-big-bd-bk-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-bd-bk-sample-02',
    drwRawInfo: 'raw-big-bd-bk-sample-02',
    colorSetInfo: 'sample-color-set-info-raw-big-bd-bk-sample-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-f-bd-bk-sample-00',
    drwRawInfo: 'raw-big-f-bd-bk-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-big-f-bd-bk-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-05',
    drwRawInfo: 'raw-big-left-sample-05',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-05',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-06',
    drwRawInfo: 'raw-big-left-sample-06',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-06',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-right-sample-07',
    drwRawInfo: 'raw-big-right-sample-07',
    colorSetInfo: 'sample-color-set-info-raw-big-right-sample-07',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-left-sample-08',
    drwRawInfo: 'raw-big-left-sample-08',
    colorSetInfo: 'sample-color-set-info-raw-big-left-sample-08',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-body-sample-00',
    drwRawInfo: 'raw-big-body-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-big-body-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-back-sample-00',
    drwRawInfo: 'raw-big-back-sample-00',
    colorSetInfo: 'sample-color-set-info-raw-big-back-sample-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-raw-big-back-sample-01',
    drwRawInfo: 'raw-big-back-sample-01',
    colorSetInfo: 'sample-color-set-info-raw-big-back-sample-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119153113_f',
    drwRawInfo: '20240119153113_f',
    colorSetInfo: 'sample-color-set-info-20240119153113_f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119152833_f',
    drwRawInfo: '20240119152833_f',
    colorSetInfo: 'sample-color-set-info-20240119152833_f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-0240119152518_f',
    drwRawInfo: '0240119152518_f',
    colorSetInfo: 'sample-color-set-info-0240119152518_f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119152131_f',
    drwRawInfo: '20240119152131_f',
    colorSetInfo: 'sample-color-set-info-20240119152131_f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119151651_f',
    drwRawInfo: '20240119151651_f',
    colorSetInfo: 'sample-color-set-info-20240119151651_f',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119155318_l',
    drwRawInfo: '20240119155318_l',
    colorSetInfo: 'sample-color-set-info-20240119155318_l',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119155121_l',
    drwRawInfo: '20240119155121_l',
    colorSetInfo: 'sample-color-set-info-20240119155121_l',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119154558_l',
    drwRawInfo: '20240119154558_l',
    colorSetInfo: 'sample-color-set-info-20240119154558_l',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119154214_l',
    drwRawInfo: '20240119154214_l',
    colorSetInfo: 'sample-color-set-info-20240119154214_l',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-2024011915498_l',
    drwRawInfo: '2024011915498_l',
    colorSetInfo: 'sample-color-set-info-2024011915498_l',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119155318_l_h_reverse',
    drwRawInfo: '20240119155318_l_h_reverse',
    colorSetInfo: 'sample-color-set-info-20240119155318_l_h_reverse',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119155121_l_h_reverse',
    drwRawInfo: '20240119155121_l_h_reverse',
    colorSetInfo: 'sample-color-set-info-20240119155121_l_h_reverse',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119154558_l_h_reverse',
    drwRawInfo: '20240119154558_l_h_reverse',
    colorSetInfo: 'sample-color-set-info-20240119154558_l_h_reverse',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119154214_l_h_reverse',
    drwRawInfo: '20240119154214_l_h_reverse',
    colorSetInfo: 'sample-color-set-info-20240119154214_l_h_reverse',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-2024011915498_l_h_reverse',
    drwRawInfo: '2024011915498_l_h_reverse',
    colorSetInfo: 'sample-color-set-info-2024011915498_l_h_reverse',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119162153_bk',
    drwRawInfo: '20240119162153_bk',
    colorSetInfo: 'sample-color-set-info-20240119162153_bk',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119162015_bk',
    drwRawInfo: '20240119162015_bk',
    colorSetInfo: 'sample-color-set-info-20240119162015_bk',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119161616_bk',
    drwRawInfo: '20240119161616_bk',
    colorSetInfo: 'sample-color-set-info-20240119161616_bk',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119161425_bk',
    drwRawInfo: '20240119161425_bk',
    colorSetInfo: 'sample-color-set-info-20240119161425_bk',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-2024011916187_bk',
    drwRawInfo: '2024011916187_bk',
    colorSetInfo: 'sample-color-set-info-2024011916187_bk',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119161037_bd',
    drwRawInfo: '20240119161037_bd',
    colorSetInfo: 'sample-color-set-info-20240119161037_bd',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240119155525_bd',
    drwRawInfo: '20240119155525_bd',
    colorSetInfo: 'sample-color-set-info-20240119155525_bd',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-2024011916611_bd',
    drwRawInfo: '2024011916611_bd',
    colorSetInfo: 'sample-color-set-info-2024011916611_bd',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-2024011916320_bd',
    drwRawInfo: '2024011916320_bd',
    colorSetInfo: 'sample-color-set-info-2024011916320_bd',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-2024011915595_bd',
    drwRawInfo: '2024011915595_bd',
    colorSetInfo: 'sample-color-set-info-2024011915595_bd',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240122143329-mis-00-00',
    drwRawInfo: '20240122143329-mis-00-00',
    colorSetInfo: 'sample-color-set-info-20240122143329-mis-00-00',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240122143329-mis-00-01',
    drwRawInfo: '20240122143329-mis-00-01',
    colorSetInfo: 'sample-color-set-info-20240122143329-mis-00-01',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240122143329-mis-00-02',
    drwRawInfo: '20240122143329-mis-00-02',
    colorSetInfo: 'sample-color-set-info-20240122143329-mis-00-02',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240122143329-mis-00-03',
    drwRawInfo: '20240122143329-mis-00-03',
    colorSetInfo: 'sample-color-set-info-20240122143329-mis-00-03',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  },
  {
    uCode: 'drw-obj-link-info-20240122143329-mis-00-04',
    drwRawInfo: '20240122143329-mis-00-04',
    colorSetInfo: 'sample-color-set-info-20240122143329-mis-00-04',
    rcInfo: { r: 0, c: 0, rsz: -1, csz: -1 },
    child: []
  }
]