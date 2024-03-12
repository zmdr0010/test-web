const drwRawColorSetInfoList = [
  {
    uCode: 'sample-color-set-info-00',
    palettes: 'sample-palettes-00', // palettes info uCode
    // sample raw - max rawNum 19
    // palettes info list index  // length < rawNum - cycle ? / first ? / last ? / other ?
    // target only one fix ?????
    list: [40, 41, 42, 43, 10, 11, 12, 13, 14, 15, 16, 30, 31, 32, 33, 2, 23, 24, 25]
  },
  // one fix test
  {
    // target: 'raw-front-sample-00',
    uCode: 'sample-color-set-info-raw-front-sample-00',
    palettes: 'sample-palettes-00',
    list: [40, 41, 42, 43, 44]
  },
  {
    // target: 'raw-front-sample-01',
    uCode: 'sample-color-set-info-raw-front-sample-01',
    palettes: 'sample-palettes-00',
    list: [10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    // target: 'raw-front-sample-02',
    uCode: 'sample-color-set-info-raw-front-sample-02',
    palettes: 'sample-palettes-00',
    list: [30, 31, 32, 33, 34]
  },
  {
    // target: 'raw-front-sample-03',
    uCode: 'sample-color-set-info-raw-front-sample-03',
    palettes: 'sample-palettes-00',
    list: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    // target: 'raw-body-sample-00',
    uCode: 'sample-color-set-info-raw-body-sample-00',
    palettes: 'sample-palettes-00',
    list: [22, 23, 24, 25, 26]
  },
  {
    // target: 'raw-body-sample-01',
    uCode: 'sample-color-set-info-raw-body-sample-01',
    palettes: 'sample-palettes-00',
    list: [31, 32, 33, 34, 35, 36]
  },
  {
    // target: 'raw-body-sample-02',
    uCode: 'sample-color-set-info-raw-body-sample-02',
    palettes: 'sample-palettes-00',
    list: [42, 43, 44, 45, 46, 41]
  },
  {
    // target: 'raw-body-sample-03',
    uCode: 'sample-color-set-info-raw-body-sample-03',
    palettes: 'sample-palettes-00',
    list: [1, 2, 3, 4, 5, 6]
  },
  {
    // target: 'raw-left-sample-00',
    uCode: 'sample-color-set-info-raw-left-sample-00',
    palettes: 'sample-palettes-00',
    list: [9, 10, 11, 12, 16]
  },
  {
    // target: 'raw-right-sample-00',
    uCode: 'sample-color-set-info-raw-right-sample-00',
    palettes: 'sample-palettes-00',
    list: [5, 6, 10, 14, 16]
  },
  {
    // target: 'raw-back-sample-00',
    uCode: 'sample-color-set-info-raw-back-sample-00',
    palettes: 'sample-palettes-00',
    list: [30, 20, 10, 40, 50]
  },
  {
    // target: 'raw-front-sample-04',
    uCode: 'sample-color-set-info-raw-front-sample-04',
    palettes: 'sample-palettes-00',
    list: [7, 4, 6, 10, 12, 11, 22, 23]
  },
  {
    // target: 'raw-front-sample-05',
    uCode: 'sample-color-set-info-raw-front-sample-05',
    palettes: 'sample-palettes-00',
    list: [3, 4, 9, 21, 22, 12, 13]
  },
  {
    // target: 'raw-front-sample-06',
    uCode: 'sample-color-set-info-raw-front-sample-06',
    palettes: 'sample-palettes-00',
    list: [37, 28, 36, 42, 33, 12, 11, 13]
  },
  {
    // target: 'raw-front-sample-07',
    uCode: 'sample-color-set-info-raw-front-sample-07',
    palettes: 'sample-palettes-00',
    list: [17, 18, 16, 12, 13, 22, 21, 15]
  },
  {
    // target: 'raw-body-sample-04',
    uCode: 'sample-color-set-info-raw-body-sample-04',
    palettes: 'sample-palettes-00',
    list: [7, 8, 9, 1, 2, 3]
  },
  {
    // target: 'raw-body-sample-05',
    uCode: 'sample-color-set-info-raw-body-sample-05',
    palettes: 'sample-palettes-00',
    list: [24, 26, 28, 32, 34, 36, 29]
  },
  {
    // target: 'raw-body-sample-06',
    uCode: 'sample-color-set-info-raw-body-sample-06',
    palettes: 'sample-palettes-00',
    list: [40, 41, 39, 38, 37, 42]
  },
  {
    // target: 'raw-body-sample-07',
    uCode: 'sample-color-set-info-raw-body-sample-07',
    palettes: 'sample-palettes-00',
    list: [30, 31, 29, 28, 27, 32]
  },
  {
    // target: 'raw-left-sample-01',
    uCode: 'sample-color-set-info-raw-left-sample-01',
    palettes: 'sample-palettes-00',
    list: [6, 7, 4, 3, 5]
  },
  {
    // target: 'raw-right-sample-01',
    uCode: 'sample-color-set-info-raw-right-sample-01',
    palettes: 'sample-palettes-00',
    list: [11, 15, 17, 19, 21]
  },
  {
    // target: 'raw-left-sample-02',
    uCode: 'sample-color-set-info-raw-left-sample-02',
    palettes: 'sample-palettes-00',
    list: [4, 8, 16, 24, 32, 36]
  },
  {
    // target: 'raw-right-sample-02',
    uCode: 'sample-color-set-info-raw-right-sample-02',
    palettes: 'sample-palettes-00',
    list: [3, 6, 9, 12, 15, 17]
  },
  {
    // target: 'raw-left-sample-03',
    uCode: 'sample-color-set-info-raw-left-sample-03',
    palettes: 'sample-palettes-00',
    list: [4, 7, 10, 14, 18]
  },
  {
    // target: 'raw-right-sample-03',
    uCode: 'sample-color-set-info-raw-right-sample-03',
    palettes: 'sample-palettes-00',
    list: [16, 19, 21, 24, 18]
  },
  {
    // target: 'raw-left-sample-04',
    uCode: 'sample-color-set-info-raw-left-sample-04',
    palettes: 'sample-palettes-00',
    list: [3, 8, 11, 40, 24, 37, 31, 35]
  },
  {
    // target: 'raw-right-sample-04',
    uCode: 'sample-color-set-info-raw-right-sample-04',
    palettes: 'sample-palettes-00',
    list: [23, 28, 31, 20, 34, 17, 11, 43]
  },
  {
    // target: 'raw-back-sample-01',
    uCode: 'sample-color-set-info-raw-back-sample-01',
    palettes: 'sample-palettes-00',
    list: [35, 36, 32, 31, 30, 37]
  },
  {
    // target: 'raw-back-sample-02',
    uCode: 'sample-color-set-info-raw-back-sample-02',
    palettes: 'sample-palettes-00',
    list: [23, 26, 28, 32, 22]
  },
  {
    // target: 'raw-back-sample-03',
    uCode: 'sample-color-set-info-raw-back-sample-03',
    palettes: 'sample-palettes-00',
    list: [13, 16, 18, 19, 20, 12]
  },
  {
    // target: 'raw-body-sample-08',
    uCode: 'sample-color-set-info-raw-body-sample-08',
    palettes: 'sample-palettes-00',
    list: [22, 23, 24, 25, 26, 27, 21]
  },
  {
    // target: 'raw-body-sample-09',
    uCode: 'sample-color-set-info-raw-body-sample-09',
    palettes: 'sample-palettes-00',
    list: [14, 15, 16, 17, 18, 19, 13, 12]
  },
  {
    // target: 'raw-body-sample-10',
    uCode: 'sample-color-set-info-raw-body-sample-10',
    palettes: 'sample-palettes-00',
    list: [35, 36, 37, 38, 39, 40, 41, 42, 43, 34]
  },
  {
    // target: 'raw-body-sample-11',
    uCode: 'sample-color-set-info-raw-body-sample-11',
    palettes: 'sample-palettes-00',
    list: [25, 23, 27, 29, 32, 31, 33]
  },
  {
    // target: 'raw-right-sample-05',
    uCode: 'sample-color-set-info-raw-right-sample-05',
    palettes: 'sample-palettes-00',
    list: [11, 22, 33, 44, 55, 66, 1, 54]
  },
  {
    // target: 'raw-left-sample-05',
    uCode: 'sample-color-set-info-raw-left-sample-05',
    palettes: 'sample-palettes-00',
    list: [13, 14, 11, 10, 9, 8, 7, 15]
  },
  {
    // target: 'raw-right-sample-06',
    uCode: 'sample-color-set-info-raw-right-sample-06',
    palettes: 'sample-palettes-00',
    list: [51, 52, 53, 54, 55, 56, 57]
  },
  {
    // target: 'raw-left-sample-06',
    uCode: 'sample-color-set-info-raw-left-sample-06',
    palettes: 'sample-palettes-00',
    list: [41, 42, 43, 44, 45, 46, 48]
  },
  {
    // target: 'raw-right-sample-07',
    uCode: 'sample-color-set-info-raw-right-sample-07',
    palettes: 'sample-palettes-00',
    list: [47, 48, 49, 50, 51, 52, 53, 41]
  },
  {
    // target: 'raw-left-sample-07',
    uCode: 'sample-color-set-info-raw-left-sample-07',
    palettes: 'sample-palettes-00',
    list: [54, 55, 56, 57, 58, 59, 60, 51]
  },
  {
    // target: 'raw-right-sample-08',
    uCode: 'sample-color-set-info-raw-right-sample-08',
    palettes: 'sample-palettes-00',
    list: [61, 62, 63, 64, 65, 60, 59, 58, 56]
  },
  {
    // target: 'raw-left-sample-08',
    uCode: 'sample-color-set-info-raw-left-sample-08',
    palettes: 'sample-palettes-00',
    list: [41, 42, 43, 44, 45, 50, 49, 48, 37]
  },
  {
    // target: 'raw-right-sample-09',
    uCode: 'sample-color-set-info-raw-right-sample-09',
    palettes: 'sample-palettes-00',
    list: [11, 12, 13, 14, 15, 20, 29, 28, 3]
  },
  {
    // target: 'raw-left-sample-09',
    uCode: 'sample-color-set-info-raw-left-sample-09',
    palettes: 'sample-palettes-00',
    list: [1, 12, 23, 34, 25, 30, 39, 18, 3]
  },
  {
    // target: 'raw-right-sample-10',
    uCode: 'sample-color-set-info-raw-right-sample-10',
    palettes: 'sample-palettes-00',
    list: [8, 19, 20, 15, 24, 33, 42, 56]
  },
  {
    // target: 'raw-left-sample-10',
    uCode: 'sample-color-set-info-raw-left-sample-10',
    palettes: 'sample-palettes-00',
    list: [8, 19, 20, 15, 24, 33, 42, 50]
  },
  {
    // target: 'raw-back-sample-04',
    uCode: 'sample-color-set-info-raw-back-sample-04',
    palettes: 'sample-palettes-00',
    list: [18, 9, 2, 10, 25, 34, 4, 13, 12, 30]
  },
  {
    // target: 'raw-back-sample-05',
    uCode: 'sample-color-set-info-raw-back-sample-05',
    palettes: 'sample-palettes-00',
    list: [25, 34, 12, 28, 18, 23, 29]
  },
  {
    // target: 'raw-back-sample-06',
    uCode: 'sample-color-set-info-raw-back-sample-06',
    palettes: 'sample-palettes-00',
    list: [10, 18, 34, 2, 9, 13, 25, 31]
  },
  {
    // target: 'raw-body-sample-12',
    uCode: 'sample-color-set-info-raw-body-sample-12',
    palettes: 'sample-palettes-00',
    list: [52, 43, 21, 18, 28, 32, 31, 34, 40]
  },
  {
    // target: 'raw-body-sample-13',
    uCode: 'sample-color-set-info-raw-body-sample-13',
    palettes: 'sample-palettes-00',
    list: [6, 16, 26, 36, 46, 56, 51]
  },
  {
    // target: 'raw-body-sample-14',
    uCode: 'sample-color-set-info-raw-body-sample-14',
    palettes: 'sample-palettes-00',
    list: [8, 18, 28, 38, 48, 58, 9, 19, 25]
  },
  {
    // target: 'raw-body-sample-15',
    uCode: 'sample-color-set-info-raw-body-sample-15',
    palettes: 'sample-palettes-00',
    list: [7, 17, 27, 37, 47, 57, 8, 18, 55]
  },
  {
    // target: 'raw-right-sample-11',
    uCode: 'sample-color-set-info-raw-right-sample-11',
    palettes: 'sample-palettes-00',
    list: [57, 17, 37, 27, 47, 7, 6, 43]
  },
  {
    // target: 'raw-left-sample-11',
    uCode: 'sample-color-set-info-raw-left-sample-11',
    palettes: 'sample-palettes-00',
    list: [56, 16, 36, 26, 46, 8, 5, 20]
  },
  {
    // target: 'raw-right-sample-12',
    uCode: 'sample-color-set-info-raw-right-sample-12',
    palettes: 'sample-palettes-00',
    list: [54, 14, 34, 24, 44, 4, 1, 7]
  },
  {
    // target: 'raw-left-sample-12',
    uCode: 'sample-color-set-info-raw-left-sample-12',
    palettes: 'sample-palettes-00',
    list: [4, 6, 8, 14, 16, 18, 19, 9]
  },
  {
    // target: 'raw-right-sample-13',
    uCode: 'sample-color-set-info-raw-right-sample-13',
    palettes: 'sample-palettes-00',
    list: [5, 7, 9, 15, 17, 19, 11]
  },
  {
    // target: 'raw-left-sample-13',
    uCode: 'sample-color-set-info-raw-left-sample-13',
    palettes: 'sample-palettes-00',
    list: [6, 8, 10, 12, 14, 16, 9]
  },
  {
    // target: 'raw-right-sample-14',
    uCode: 'sample-color-set-info-raw-right-sample-14',
    palettes: 'sample-palettes-00',
    list: [7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 51]
  },
  {
    // target: 'raw-left-sample-14',
    uCode: 'sample-color-set-info-raw-left-sample-14',
    palettes: 'sample-palettes-00',
    list: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 19]
  },
  {
    // target: 'raw-back-sample-07',
    uCode: 'sample-color-set-info-raw-back-sample-07',
    palettes: 'sample-palettes-00',
    list: [8, 18, 28, 38, 48, 58, 9, 19, 55]
  },
  {
    // target: 'raw-back-sample-08',
    uCode: 'sample-color-set-info-raw-back-sample-08',
    palettes: 'sample-palettes-00',
    list: [9, 19, 29, 39, 49, 59, 10, 54]
  },
  {
    // target: 'raw-back-sample-09',
    uCode: 'sample-color-set-info-raw-back-sample-09',
    palettes: 'sample-palettes-00',
    list: [10, 20, 30, 40, 50, 60, 11, 33]
  },
  {
    // target: 'raw-back-sample-10',
    uCode: 'sample-color-set-info-raw-back-sample-10',
    palettes: 'sample-palettes-00',
    list: [47, 46, 45, 44, 43, 42, 41, 40, 48]
  },
  {
    // target: 'raw-front-sample-08',
    uCode: 'sample-color-set-info-raw-front-sample-08',
    palettes: 'sample-palettes-00',
    list: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 43]
  },
  {
    // target: 'raw-body-sample-16',
    uCode: 'sample-color-set-info-raw-body-sample-16',
    palettes: 'sample-palettes-00',
    list: [28, 27, 26, 25, 24, 23, 22, 21, 11]
  },
  {
    // target: 'raw-back-sample-11',
    uCode: 'sample-color-set-info-raw-back-sample-11',
    palettes: 'sample-palettes-00',
    list: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 29]
  },
  {
    // target: 'raw-right-sample-15',
    uCode: 'sample-color-set-info-raw-right-sample-15',
    palettes: 'sample-palettes-00',
    list: [23, 25, 27, 18, 16, 15, 19]
  },
  {
    // target: 'raw-left-sample-15',
    uCode: 'sample-color-set-info-raw-left-sample-15',
    palettes: 'sample-palettes-00',
    list: [32, 52, 21, 17, 61, 51, 53]
  },
  {
    // target: 'raw-left-sample-16',
    uCode: 'sample-color-set-info-raw-left-sample-16',
    palettes: 'sample-palettes-00',
    list: [29, 27, 28, 24, 25, 22, 21, 23, 30]
  },
  {
    // target: 'raw-right-sample-16',
    uCode: 'sample-color-set-info-raw-right-sample-16',
    palettes: 'sample-palettes-00',
    list: [19, 17, 18, 14, 15, 12, 11, 13, 20]
  },
  {
    // target: 'raw-right-sample-17',
    uCode: 'sample-color-set-info-raw-right-sample-17',
    palettes: 'sample-palettes-00',
    list: [39, 37, 38, 34, 35, 32, 31, 30]
  },
  {
    // target: 'raw-left-sample-17',
    uCode: 'sample-color-set-info-raw-left-sample-17',
    palettes: 'sample-palettes-00',
    list: [13, 23, 53, 43, 38, 37, 39, 40]
  },
  {
    // target: 'raw-back-sample-12',
    uCode: 'sample-color-set-info-raw-back-sample-12',
    palettes: 'sample-palettes-00',
    list: [3, 14, 5, 15, 6, 16, 7, 17, 8, 18, 9, 19, 20]
  },
  {
    // target: 'raw-big-front-sample-00',
    uCode: 'sample-color-set-info-raw-big-front-sample-00',
    palettes: 'sample-palettes-00',
    list: [19, 29, 9, 18, 28, 8, 15, 14]
  },
  {
    // target: 'raw-big-front-sample-01',
    uCode: 'sample-color-set-info-raw-big-front-sample-01',
    palettes: 'sample-palettes-00',
    list: [19, 29, 9, 18, 28, 8, 7]
  },
  {
    // target: 'raw-big-front-sample-02',
    uCode: 'sample-color-set-info-raw-big-front-sample-02',
    palettes: 'sample-palettes-00',
    list: [16, 26, 6, 17, 27, 7, 18, 37]
  },
  {
    // target: 'raw-big-front-sample-03',
    uCode: 'sample-color-set-info-raw-big-front-sample-03',
    palettes: 'sample-palettes-00',
    list: [48, 47, 37, 17, 46, 36, 26, 41]
  },
  {
    // target: 'raw-big-left-sample-00',
    uCode: 'sample-color-set-info-raw-big-left-sample-00',
    palettes: 'sample-palettes-00',
    list: [28, 27, 17, 37, 26, 36, 34]
  },
  {
    // target: 'raw-big-left-sample-01',
    uCode: 'sample-color-set-info-raw-big-left-sample-01',
    palettes: 'sample-palettes-00',
    list: [18, 17, 7, 27, 16, 26, 28]
  },
  {
    // target: 'raw-big-left-sample-02',
    uCode: 'sample-color-set-info-raw-big-left-sample-02',
    palettes: 'sample-palettes-00',
    list: [11, 1, 21, 31, 41, 51, 49]
  },
  {
    // target: 'raw-big-left-sample-03',
    uCode: 'sample-color-set-info-raw-big-left-sample-03',
    palettes: 'sample-palettes-00',
    list: [12, 2, 22, 23, 32, 42, 52, 44]
  },
  {
    // target: 'raw-big-left-sample-04',
    uCode: 'sample-color-set-info-raw-big-left-sample-04',
    palettes: 'sample-palettes-00',
    list: [13, 3, 23, 24, 33, 43, 53, 54, 50]
  },
  {
    // target: 'raw-big-bd-bk-sample-00',
    uCode: 'sample-color-set-info-raw-big-bd-bk-sample-00',
    palettes: 'sample-palettes-00',
    list: [11, 31, 13, 44, 43, 23, 33, 34, 55, 54]
  },
  {
    // target: 'raw-big-bd-bk-sample-01',
    uCode: 'sample-color-set-info-raw-big-bd-bk-sample-01',
    palettes: 'sample-palettes-00',
    list: [12, 32, 14, 45, 42, 24, 34, 35, 56, 57]
  },
  {
    // target: 'raw-big-bd-bk-sample-02',
    uCode: 'sample-color-set-info-raw-big-bd-bk-sample-02',
    palettes: 'sample-palettes-00',
    list: [12, 11, 32, 13, 14, 45, 42, 15, 24, 34, 16, 35, 56, 17, 18]
  },
  {
    // target: 'raw-big-f-bd-bk-sample-00',
    uCode: 'sample-color-set-info-raw-big-f-bd-bk-sample-00',
    palettes: 'sample-palettes-00',
    list: [22, 21, 12, 23, 24, 15, 32, 25, 34, 44, 36, 35, 16, 27, 18, 29, 30, 20, 10, 9]
  },
  {
    // target: 'raw-big-left-sample-05',
    uCode: 'sample-color-set-info-raw-big-left-sample-05',
    palettes: 'sample-palettes-00',
    list: [23, 24, 32, 25, 44, 36, 35, 27, 29]
  },
  {
    // target: 'raw-big-left-sample-06',
    uCode: 'sample-color-set-info-raw-big-left-sample-06',
    palettes: 'sample-palettes-00',
    list: [15, 25, 44, 35, 16, 27, 28]
  },
  {
    // target: 'raw-big-right-sample-07',
    uCode: 'sample-color-set-info-raw-big-right-sample-07',
    palettes: 'sample-palettes-00',
    list: [51, 15, 25, 32, 24, 23, 44, 36, 37]
  },
  {
    // target: 'raw-big-left-sample-08',
    uCode: 'sample-color-set-info-raw-big-left-sample-08',
    palettes: 'sample-palettes-00',
    list: [41, 35, 15, 12, 14, 13, 24, 25]
  },
  {
    // target: 'raw-big-body-sample-00',
    uCode: 'sample-color-set-info-raw-big-body-sample-00',
    palettes: 'sample-palettes-00',
    list: [25, 32, 24, 51, 15, 23, 44, 36, 41, 40]
  },
  {
    // target: 'raw-big-back-sample-00',
    uCode: 'sample-color-set-info-raw-big-back-sample-00',
    palettes: 'sample-palettes-00',
    list: [36, 41, 24, 51, 15, 25, 32, 30]
  },
  {
    // target: 'raw-big-back-sample-01',
    uCode: 'sample-color-set-info-raw-big-back-sample-01',
    palettes: 'sample-palettes-00',
    list: [30, 20, 10, 27, 18, 29, 34, 44, 36, 21, 12, 13]
  },
  {
    // target: '20240119153113_f',
    uCode: 'sample-color-set-info-20240119153113_f',
    palettes: 'sample-palettes-00',
    list: [29, 18, 10, 27, 20, 12, 22]
  },
  {
    // target: '20240119152833_f',
    uCode: 'sample-color-set-info-20240119152833_f',
    palettes: 'sample-palettes-00',
    list: [36, 44, 34, 18, 10, 20, 23]
  },
  {
    // target: '0240119152518_f',
    uCode: 'sample-color-set-info-0240119152518_f',
    palettes: 'sample-palettes-00',
    list: [29, 34, 27, 10, 21, 12, 31]
  },
  {
    // target: '20240119152131_f',
    uCode: 'sample-color-set-info-20240119152131_f',
    palettes: 'sample-palettes-00',
    list: [12, 21, 10, 27, 34, 29, 11]
  },
  {
    // target: '20240119151651_f',
    uCode: 'sample-color-set-info-20240119151651_f',
    palettes: 'sample-palettes-00',
    list: [4, 2, 6, 8, 5]
  },
  {
    // target: '20240119155318_l',
    uCode: 'sample-color-set-info-20240119155318_l',
    palettes: 'sample-palettes-00',
    list: [5, 1, 3, 9, 11, 7, 2]
  },
  {
    // target: '20240119155121_l',
    uCode: 'sample-color-set-info-20240119155121_l',
    palettes: 'sample-palettes-00',
    list: [14, 11, 15, 19, 21, 17, 20]
  },
  {
    // target: '20240119154558_l',
    uCode: 'sample-color-set-info-20240119154558_l',
    palettes: 'sample-palettes-00',
    list: [13, 12, 14, 18, 20, 16, 11]
  },
  {
    // target: '20240119154214_l',
    uCode: 'sample-color-set-info-20240119154214_l',
    palettes: 'sample-palettes-00',
    list: [15, 14, 11, 17, 21, 26, 23]
  },
  {
    // target: '2024011915498_l',
    uCode: 'sample-color-set-info-2024011915498_l',
    palettes: 'sample-palettes-00',
    list: [26, 21, 15, 11, 14, 31, 23]
  },
  {
    // target: '20240119155318_l_h_reverse',
    uCode: 'sample-color-set-info-20240119155318_l_h_reverse',
    palettes: 'sample-palettes-00',
    list: [36, 31, 35, 21, 34, 41, 45]
  },
  {
    // target: '20240119155121_l_h_reverse',
    uCode: 'sample-color-set-info-20240119155121_l_h_reverse',
    palettes: 'sample-palettes-00',
    list: [5, 7, 1, 4, 11, 16, 13]
  },
  {
    // target: '20240119154558_l_h_reverse',
    uCode: 'sample-color-set-info-20240119154558_l_h_reverse',
    palettes: 'sample-palettes-00',
    list: [26, 23, 15, 11, 14, 40, 39]
  },
  {
    // target: '20240119154214_l_h_reverse',
    uCode: 'sample-color-set-info-20240119154214_l_h_reverse',
    palettes: 'sample-palettes-00',
    list: [46, 43, 45, 41, 12, 20, 30]
  },
  {
    // target: '2024011915498_l_h_reverse',
    uCode: 'sample-color-set-info-2024011915498_l_h_reverse',
    palettes: 'sample-palettes-00',
    list: [36, 33, 35, 31, 32, 10, 29]
  },
  {
    // target: '20240119162153_bk',
    uCode: 'sample-color-set-info-20240119162153_bk',
    palettes: 'sample-palettes-00',
    list: [20, 22, 21, 25, 23, 26, 28]
  },
  {
    // target: '20240119162015_bk',
    uCode: 'sample-color-set-info-20240119162015_bk',
    palettes: 'sample-palettes-00',
    list: [10, 12, 11, 15, 13, 16, 19]
  },
  {
    // target: '20240119161616_bk',
    uCode: 'sample-color-set-info-20240119161616_bk',
    palettes: 'sample-palettes-00',
    list: [9, 11, 13, 14, 12, 17, 8]
  },
  {
    // target: '20240119161425_bk',
    uCode: 'sample-color-set-info-20240119161425_bk',
    palettes: 'sample-palettes-00',
    list: [19, 31, 23, 24, 22, 37, 18]
  },
  {
    // target: '2024011916187_bk',
    uCode: 'sample-color-set-info-2024011916187_bk',
    palettes: 'sample-palettes-00',
    list: [14, 19, 11, 22, 13, 31, 15]
  },
  {
    // target: '20240119161037_bd',
    uCode: 'sample-color-set-info-20240119161037_bd',
    palettes: 'sample-palettes-00',
    list: [44, 49, 41, 42, 43, 47, 50]
  },
  {
    // target: '20240119155525_bd',
    uCode: 'sample-color-set-info-20240119155525_bd',
    palettes: 'sample-palettes-00',
    list: [33, 38, 30, 31, 32, 36, 30]
  },
  {
    // target: '2024011916611_bd',
    uCode: 'sample-color-set-info-2024011916611_bd',
    palettes: 'sample-palettes-00',
    list: [22, 27, 20, 29, 12, 16, 19]
  },
  {
    // target: '2024011916320_bd',
    uCode: 'sample-color-set-info-2024011916320_bd',
    palettes: 'sample-palettes-00',
    list: [23, 28, 21, 30, 13, 17, 16, 18, 19]
  },
  {
    // target: '2024011915595_bd',
    uCode: 'sample-color-set-info-2024011915595_bd',
    palettes: 'sample-palettes-00',
    list: [31, 22, 29, 24, 18, 14, 15]
  },
  {
    // target: '20240122143329-mis-00-00',
    uCode: 'sample-color-set-info-20240122143329-mis-00-00',
    palettes: 'sample-palettes-00',
    list: [23, 21, 28, 30]
  },
  {
    // target: '20240122143329-mis-00-01',
    uCode: 'sample-color-set-info-20240122143329-mis-00-01',
    palettes: 'sample-palettes-00',
    list: [22, 31, 29, 33]
  },
  {
    // target: '20240122143329-mis-00-02',
    uCode: 'sample-color-set-info-20240122143329-mis-00-02',
    palettes: 'sample-palettes-00',
    list: [24, 34, 28, 38]
  },
  {
    // target: '20240122143329-mis-00-03',
    uCode: 'sample-color-set-info-20240122143329-mis-00-03',
    palettes: 'sample-palettes-00',
    list: [25, 35, 29, 39]
  },
  {
    // target: '20240122143329-mis-00-04',
    uCode: 'sample-color-set-info-20240122143329-mis-00-04',
    palettes: 'sample-palettes-00',
    list: [26, 36, 30, 40]
  }
]