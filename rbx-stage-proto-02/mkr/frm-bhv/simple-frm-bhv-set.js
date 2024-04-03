function createSimpleFrmBhvSetInfo(partInfo, setInfo) {
  return createFrmBhvSetInfo({
    partInfo: partInfo, list: [setInfo.frmBhvInfo], uCode: setInfo.uCode, type: setInfo.type,
    addEvent: setInfo.addEvent, frmBhvInfo: setInfo.frmBhvInfo, frmBhvSetInfo: null
  })
}

// function createIdleF(partInfo) {
//   const frmBhvInfo = {
//     type: 'move',
//     currentFrmBhv: 0,
//     lastFrmBhv: 3,
//     frame: 0,
//     fps: 60,
//     d: 20,
//     list: [
//       { dr: 0, dc: -2 },
//       { dr: 0, dc: 2 },
//       { dr: 0, dc: -2 },
//       { dr: 0, dc: 2 }
//     ],
//     etcInfo: {
//       sr: 0, sc: 0
//     }
//   }
//   return createFrmBhvSetInfo({
//     partInfo: partInfo, list: [frmBhvInfo], uCode: 'idle-00-f', type: 'cycle',
//     addEvent: addEventDRateMove, frmBhvInfo: frmBhvInfo, frmBhvSetInfo: null
//   })
// }
//
// function createIdleBK(partInfo) {
//   const frmBhvInfo = {
//     type: 'move',
//     currentFrmBhv: 0,
//     lastFrmBhv: 5,
//     frame: 0,
//     fps: 60,
//     d: 20,
//     list: [
//       { dr: 0, dc: -1 },
//       { dr: 0, dc: -1 },
//       { dr: 0, dc: 1 },
//       { dr: 0, dc: 1 },
//       { dr: 0, dc: -1 },
//       { dr: 0, dc: 1 }
//     ],
//     etcInfo: {
//       sr: 0, sc: 0
//     }
//   }
//   return createFrmBhvSetInfo({
//     partInfo: partInfo, list: [frmBhvInfo], uCode: 'idle-00-bk', type: 'cycle',
//     addEvent: addEventDRateMove, frmBhvInfo: frmBhvInfo, frmBhvSetInfo: null
//   })
// }
//
// function createIdleCwL(partInfo) {
//   const frmBhvInfo = {
//     type: 'move',
//     currentFrmBhv: 0,
//     lastFrmBhv: 3,
//     frame: 0,
//     fps: 60,
//     d: 10,
//     list: [
//       { dr: -1, dc: -1 },
//       { dr: 1, dc: -1 },
//       { dr: 1, dc: 1 },
//       { dr: -1, dc: 1 }
//     ],
//     etcInfo: {
//       sr: 0, sc: 0
//     }
//   }
//   return createFrmBhvSetInfo({
//     partInfo: partInfo, list: [frmBhvInfo], uCode: 'idle-00-cw-l', type: 'cycle',
//     addEvent: addEventDRateMove, frmBhvInfo: frmBhvInfo, frmBhvSetInfo: null
//   })
// }
//
// function createIdleCwR(partInfo) {
//   const frmBhvInfo = {
//     type: 'move',
//     currentFrmBhv: 0,
//     lastFrmBhv: 3,
//     frame: 0,
//     fps: 60,
//     d: 10,
//     list: [
//       { dr: 1, dc: -1 },
//       { dr: -1, dc: -1 },
//       { dr: -1, dc: 1 },
//       { dr: 1, dc: 1 }
//     ],
//     etcInfo: {
//       sr: 0, sc: 0
//     }
//   }
//   return createFrmBhvSetInfo({
//     partInfo: partInfo, list: [frmBhvInfo], uCode: 'idle-00-cw-r', type: 'cycle',
//     addEvent: addEventDRateMove, frmBhvInfo: frmBhvInfo, frmBhvSetInfo: null
//   })
// }
//
// function createIdleL(partInfo) {
//   const frmBhvInfo = {
//     type: 'move',
//     currentFrmBhv: 0,
//     lastFrmBhv: 1,
//     frame: 0,
//     fps: 60,
//     d: 15,
//     list: [
//       { dr: -1, dc: 1 },
//       { dr: 1, dc: -1 }
//     ],
//     etcInfo: {
//       sr: 0, sc: 0
//     }
//   }
//   return createFrmBhvSetInfo({
//     partInfo: partInfo, list: [frmBhvInfo], uCode: 'idle-00-l', type: 'cycle',
//     addEvent: addEventDRateMove, frmBhvInfo: frmBhvInfo, frmBhvSetInfo: null
//   })
// }
//
// function createIdleR(partInfo) {
//   const frmBhvInfo = {
//     type: 'move',
//     currentFrmBhv: 0,
//     lastFrmBhv: 1,
//     frame: 0,
//     fps: 60,
//     d: 15,
//     list: [
//       { dr: 1, dc: 1 },
//       { dr: -1, dc: -1 }
//     ],
//     etcInfo: {
//       sr: 0, sc: 0
//     }
//   }
//   return createFrmBhvSetInfo({
//     partInfo: partInfo, list: [frmBhvInfo], uCode: 'idle-00-r', type: 'cycle',
//     addEvent: addEventDRateMove, frmBhvInfo: frmBhvInfo, frmBhvSetInfo: null
//   })
// }