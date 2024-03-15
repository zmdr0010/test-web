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