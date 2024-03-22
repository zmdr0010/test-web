const sampleMoveSetCWIdleL = {
  uCode: 'sample-idle-cw-l',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 10,
      list: [
        { dr: -1, dc: -1 },
        { dr: 1, dc: -1 },
        { dr: 1, dc: 1 },
        { dr: -1, dc: 1 }
      ]
    }
  ]
}
const sampleMoveSetCWIdleR = {
  uCode: 'sample-idle-cw-r',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 10,
      list: [
        { dr: 1, dc: -1 },
        { dr: -1, dc: -1 },
        { dr: -1, dc: 1 },
        { dr: 1, dc: 1 }
      ]
    }
  ]
}
const sampleMoveSetIdleBK = {
  uCode: 'sample-idle-bk',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 20,
      list: [
        { dr: 0, dc: -1 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 }
      ]
    }
  ]
}
const sampleMoveSetIdleF = {
  uCode: 'sample-idle-f',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 50,
      list: [
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: -1 },
        { dr: 0, dc: 1 }
      ]
    }
  ]
}
const sampleMoveSetIdleL = {
  uCode: 'sample-idle-l',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 60,
      list: [
        { dr: -1, dc: 0 },
        { dr: 1, dc: 0 }
      ]
    }
  ]
}
const sampleMoveSetIdleR = {
  uCode: 'sample-idle-r',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 60,
      list: [
        { dr: 1, dc: 0 },
        { dr: -1, dc: 0 }
      ]
    }
  ]
}

const moveSetPresetInfoSampleList = [
  { // moveSetInfo
    uCode: 'sample-idle-t-b',
    type: 'cycle', // stay / cycle / out / etc...
    // moveInfo: null,
    // currentMove: -1,
    list: [ // moveInfo list
      {
        fps: 60,
        d: 10,
        // currentMove: 0,
        // moveCount: 0,
        list: [
          {
            dr: 0, // dir row
            dc: 1 // dir column
          },
          {
            dr: 0, // dir row
            dc: -1 // dir column
          },
          {
            dr: 0, // dir row
            dc: -1 // dir column
          },
          {
            dr: 0, // dir row
            dc: 1 // dir column
          },
        ]
      },
      {
        fps: 60,
        d: 10,
        // currentMove: 0,
        // moveCount: 0,
        list: [
          {
            dr: 0, // dir row
            dc: 1 // dir column
          },
          {
            dr: 0, // dir row
            dc: -1 // dir column
          }
        ]
      }
    ]
  },
  {
    uCode: 'sample-unit-move-pattern-00',
    type: 'cycle',
    list: [
      {
        fps: 60,
        d: 120,
        list: [
          {
            dr: -2 * 10,
            dc: -2 * 10
          },
          {
            dr: 1 * 10,
            dc: -2 * 10
          },
          {
            dr: 2 * 10,
            dc: 0
          },
          {
            dr: 0,
            dc: 2 * 10
          },
          {
            dr: -1 * 10,
            dc: 2 * 10
          }
        ]
      }
    ]
  },
  {
    uCode: 'sample-l-r-shoot',
    type: 'out',
    list: [
      {
        fps: 60,
        d: 30,
        list: [
          {
            dr: 0,
            dc: -40
          },
          {
            dr: 0,
            dc: -40
          },
          {
            dr: 0,
            dc: -40
          }
        ]
      }
    ]
  },
  {
    uCode: 'sample-f-shoot',
    type: 'out',
    list: [
      {
        fps: 60,
        d: 30,
        list: [
          {
            dr: 0,
            dc: -50
          },
          {
            dr: 0,
            dc: -50
          },
          {
            dr: 0,
            dc: -50
          }
        ]
      }
    ]
  },
  {
    uCode: 'sample-enemy-l-r-shoot',
    type: 'out',
    list: [
      {
        fps: 60,
        d: 30,
        list: [
          {
            dr: 0,
            dc: 40
          },
          {
            dr: 0,
            dc: 40
          },
          {
            dr: 0,
            dc: 40
          }
        ]
      }
    ]
  },
  {
    uCode: 'sample-enemy-f-shoot',
    type: 'out',
    list: [
      {
        fps: 60,
        d: 30,
        list: [
          {
            dr: 0,
            dc: 50
          },
          {
            dr: 0,
            dc: 50
          },
          {
            dr: 0,
            dc: 50
          }
        ]
      }
    ]
  }
]