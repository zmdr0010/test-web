const calcJrcInfoSample = {
  uCode: '20240310-sample-calc-jrc-info',
  list: [
    {
      target: 'f', // tCode
      key: 'jp-f-bd',
      type: 'scale', // scale / fix
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5, // row scale (type = scale)
      cs: 0.9,  // column scale (type = scale)
      r: 3, // row (type = fix)
      c: 5  // column (type = fix)
    },
    {
      target: 'bd',
      key: 'jp-f-bd',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.1,
      r: 3,
      c: 2
    },
    {
      target: 'bd',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.1,
      cs: 0.4,
      r: 2,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.9,
      cs: 0.4,
      r: 6,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.9,
      r: 3,
      c: 7
    },
    {
      target: 'l',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.9,
      cs: 0.5,
      r: 7,
      c: 3
    },
    {
      target: 'r',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.1,
      cs: 0.5,
      r: 1,
      c: 3
    },
    {
      target: 'bk',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.1,
      r: 4,
      c: 1
    }
  ]
}

const calcJrcInfoSample01 = {
  uCode: '20240310-sample-calc-jrc-info-01',
  list: [
    {
      target: 'f', // tCode
      key: 'jp-f-bd',
      type: 'scale', // scale / fix
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5, // row scale (type = scale)
      // cs: 0.9,  // column scale (type = scale)
      cs: 1.0,
      r: 3, // row (type = fix)
      c: 5  // column (type = fix)
    },
    {
      target: 'bd',
      key: 'jp-f-bd',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      // cs: 0.1,
      cs: 0.0,
      r: 3,
      c: 2
    },
    {
      target: 'bd',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      // rs: 0.1,
      rs: 0.0,
      cs: 0.5,
      r: 2,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      // rs: 0.9,
      rs: 1.0,
      cs: 0.5,
      r: 6,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5,
      // cs: 0.9,
      cs: 1.0,
      r: 3,
      c: 7
    },
    {
      target: 'l',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      // rs: 0.9,
      rs: 1.0,
      cs: 0.5,
      r: 7,
      c: 3
    },
    {
      target: 'r',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      // rs: 0.1,
      rs: 0.0,
      cs: 0.5,
      r: 1,
      c: 3
    },
    {
      target: 'bk',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      // cs: 0.1,
      cs: 0.0,
      r: 4,
      c: 1
    }
  ]
}

//////////////////////
const jrcInfoSample = {
  list: [
    {
      target: 'f',
      key: 'jp-f-bd',
      type: 'g', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'bd',
      key: 'jp-f-bd',
      type: 'm', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'bd',
      key: 'jp-bd-l',
      type: 'g', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'bd',
      key: 'jp-bd-r',
      type: 'g', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'bd',
      key: 'jp-bd-bk',
      type: 'g', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'l',
      key: 'jp-bd-l',
      type: 'm', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'r',
      key: 'jp-bd-r',
      type: 'm', // m (move) / g (goal)
      r: 0,
      c: 0
    },
    {
      target: 'bk',
      key: 'jp-bd-bk',
      type: 'm', // m (move) / g (goal)
      r: 0,
      c: 0
    },
  ]
}
////////////////