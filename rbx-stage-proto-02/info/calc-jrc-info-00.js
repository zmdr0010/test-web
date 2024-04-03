const calcJrcInfo00 = {
  uCode: 'calc-jrc-info-00',
  tCode: 'fighter-00',
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

const calcJrcInfo01 = {
  uCode: 'calc-jrc-info-01',
  tCode: 'fighter-00',
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

const calcJrcInfo02 = {
  uCode: 'calc-jrc-info-02',
  tCode: 'fighter-00',
  list: [
    {
      target: 'f', // tCode
      key: 'jp-f-bd',
      type: 'scale', // scale / fix
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5, // row scale (type = scale)
      cs: 0.7,  // column scale (type = scale)
      r: 3, // row (type = fix)
      c: 5  // column (type = fix)
    },
    {
      target: 'bd',
      key: 'jp-f-bd',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.05,
      r: 3,
      c: 2
    },
    {
      target: 'bd',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.05,
      cs: 0.45,
      r: 2,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.95,
      cs: 0.45,
      r: 6,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.95,
      r: 3,
      c: 7
    },
    {
      target: 'l',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 1.2,
      cs: 0.8,
      r: 7,
      c: 3
    },
    {
      target: 'r',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: -0.2,
      cs: 0.8,
      r: 1,
      c: 3
    },
    {
      target: 'bk',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.4,
      r: 4,
      c: 1
    }
  ]
}

const calcJrcInfo03 = {
  uCode: 'calc-jrc-info-03',
  tCode: 'fighter-00',
  list: [
    {
      target: 'f', // tCode
      key: 'jp-f-bd',
      type: 'scale', // scale / fix
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5, // row scale (type = scale)
      cs: 0.7,  // column scale (type = scale)
      r: 3, // row (type = fix)
      c: 5  // column (type = fix)
    },
    {
      target: 'bd',
      key: 'jp-f-bd',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.05,
      r: 3,
      c: 2
    },
    {
      target: 'bd',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      // rs: 0.05,
      rs: 0.2,
      cs: 0.45,
      r: 2,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      // rs: 0.95,
      rs: 0.8,
      cs: 0.45,
      r: 6,
      c: 5
    },
    {
      target: 'bd',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'g', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.95,
      r: 3,
      c: 7
    },
    {
      target: 'l',
      key: 'jp-bd-l',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 1.0,
      cs: 0.6,
      r: 7,
      c: 3
    },
    {
      target: 'r',
      key: 'jp-bd-r',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.0,
      cs: 0.6,
      r: 1,
      c: 3
    },
    {
      target: 'bk',
      key: 'jp-bd-bk',
      type: 'scale',
      jrcType: 'm', // m (move) / g (goal)
      rs: 0.5,
      cs: 0.4,
      r: 4,
      c: 1
    }
  ]
}