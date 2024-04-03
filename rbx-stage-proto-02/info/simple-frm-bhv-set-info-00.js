function createSimpleIdleF() {
  const simpleIdleF = {
    frmBhvInfo: {
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 3,
      frame: 0,
      fps: 60,
      d: 20,
      list: [
        { dr: 0, dc: -2 },
        { dr: 0, dc: 2 },
        { dr: 0, dc: -2 },
        { dr: 0, dc: 2 }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    },
    uCode: 'simple-idle-f',
    type: 'cycle',
    addEvent: addEventDRateMove
  }
  return simpleIdleF
}

function createSimpleIdleBk() {
  const simpleIdleBk = {
    frmBhvInfo: {
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 5,
      frame: 0,
      fps: 60,
      d: 20,
      list: [
        { dr: 0, dc: -1 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    },
    uCode: 'simple-idle-bk',
    type: 'cycle',
    addEvent: addEventDRateMove
  }
  return simpleIdleBk
}

function createSimpleIdleCwL() {
  const simpleIdleCwL = {
    frmBhvInfo: {
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 3,
      frame: 0,
      fps: 60,
      d: 10,
      list: [
        { dr: -1, dc: -1 },
        { dr: 1, dc: -1 },
        { dr: 1, dc: 1 },
        { dr: -1, dc: 1 }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    },
    uCode: 'simple-idle-cw-l',
    type: 'cycle',
    addEvent: addEventDRateMove
  }
  return simpleIdleCwL
}

function createSimpleIdleCwR() {
  const simpleIdleCwR = {
    frmBhvInfo: {
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 3,
      frame: 0,
      fps: 60,
      d: 10,
      list: [
        { dr: 1, dc: -1 },
        { dr: -1, dc: -1 },
        { dr: -1, dc: 1 },
        { dr: 1, dc: 1 }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    },
    uCode: 'idle-cw-r',
    type: 'cycle',
    addEvent: addEventDRateMove
  }
  return simpleIdleCwR
}

function createSimpleIdleL() {
  const simpleIdleL = {
    frmBhvInfo: {
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 1,
      frame: 0,
      fps: 60,
      d: 15,
      list: [
        { dr: -1, dc: 1 },
        { dr: 1, dc: -1 }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    },
    uCode: 'simple-idle-l',
    type: 'cycle',
    addEvent: addEventDRateMove
  }
  return simpleIdleL
}

function createSimpleIdleR() {
  const simpleIdleR = {
    frmBhvInfo: {
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 1,
      frame: 0,
      fps: 60,
      d: 15,
      list: [
        { dr: 1, dc: 1 },
        { dr: -1, dc: -1 }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    },
    uCode: 'simple-idle-r',
    type: 'cycle',
    addEvent: addEventDRateMove
  }
  return simpleIdleR
}
