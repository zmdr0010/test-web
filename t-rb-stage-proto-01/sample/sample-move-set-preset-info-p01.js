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
const sampleMoveSetShootF = {
  uCode: 'sample-shoot-f',
  type: 'out',
  list: [
    {
      fps: 60, d: 30,
      list: [
        { dr: 0, dc: -50 },
        { dr: 0, dc: -50 },
        { dr: 0, dc: -50 }
      ]
    }
  ]
}
const sampleMoveSetShootLR = {
  uCode: 'sample-shoot-l-r',
  type: 'out',
  list: [
    {
      fps: 60, d: 30,
      list: [
        { dr: 0, dc: -40 },
        { dr: 0, dc: -40 },
        { dr: 0, dc: -40 }
      ]
    }
  ]
}
const sampleMoveSetEnemyShootF = {
  uCode: 'sample-enemy-shoot-f',
  type: 'out',
  list: [
    {
      fps: 60, d: 30,
      list: [
        { dr: 0, dc: 50 },
        { dr: 0, dc: 50 },
        { dr: 0, dc: 50 }
      ]
    }
  ]
}
const sampleMoveSetEnemyShootLR = {
  uCode: 'sample-enemy-shoot-l-r',
  type: 'out',
  list: [
    {
      fps: 60, d: 30,
      list: [
        { dr: 0, dc: 40 },
        { dr: 0, dc: 40 },
        { dr: 0, dc: 40 }
      ]
    }
  ]
}
const sampleMoveSetEffectAni = { // effect ani (moveSet naming change ??)
  uCode: 'sample-effect-ani',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 30,
      type: 'ani', // move / ani / color // default is move
      list: [
        { dr: 0, dc: 0, drwObj: { uCode: 'uCode', rcInfo: {}, rawInfo: {}, colorList: [], child: []} },
        { dr: 0, dc: 0, drwObj: { uCode: 'uCode', rcInfo: {}, rawInfo: {}, colorList: [], child: []} },
        { dr: 0, dc: 0, drwObj: { uCode: 'uCode', rcInfo: {}, rawInfo: {}, colorList: [], child: []} }
      ]
    }
  ]
}
const sampleMoveSetEffectColor = { // effect color change
  uCode: 'sample-effect-color',
  type: 'cycle',
  list: [
    {
      fps: 60, d: 30,
      type: 'color', // move / ani / color // default is move
      list: [
        { dr: 0, dc: 0, colorList: [] },
        { dr: 0, dc: 0, colorList: [] },
        { dr: 0, dc: 0, colorList: [] }
      ]
    }
  ]
}

// dir : [0, 0], [-1, -1], [1, 1], [0, 1], [0, -1] ...
function createSimpleMoveSetSampleShoot(dir, d, dm, num=6) {
  const list = []
  const dr = dir[0] * dm // 0
  const dc = dir[1] * dm
  for (let i=0; i<num; i++) {
    list.push({ dr: dr, dc: dc })
  }
  return {
    uCode: `sample-move-set-shoot-${generateSimpleUCode()}`,
    type: 'out',
    list: [{
      fps: 60, d: d, list: list
    }]
  }
}

const moveSetPresetInfoSampleList = [
  { // moveSetInfo
    uCode: 'sample-idle-t-b',
    type: 'cycle', // stay / cycle / out / end / etc...
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