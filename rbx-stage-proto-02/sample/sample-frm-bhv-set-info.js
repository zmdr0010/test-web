const sampleFrmBhvInfo = {
  type: 'move',
  currentFrmBhv: 0,
  lastFrmBhv: 4,
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
}

const sampleFrmBhvSetInfo = {
  uCode: '',
  type: 'cycle', // cycle / out
  currentFrmBhv: 0,
  frmBhvInfo: null,
  list: [sampleFrmBhvInfo],
  event: {
    onProgress: (rate) => {}, // per frame
    onFirst: () => {},
    onLast: () => {},
    onChangeInfo: () => {} // change frmBhvInfo
  },
  state: 'start' // start / end (remove at end)
}

const sampleFrmBhvInfoCount = {
  type: 'act', // move / act / change-color / etc ...
  currentFrmBhv: 0,
  lastFrmBhv: 4,
  frame: 0,
  fps: 60,
  d: 30,
  list: [ // just to act when changing info
    0,1,2,3
  ],
  etcInfo: null
}