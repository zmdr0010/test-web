function createSimpleRawInfoEffect(rw) {
  return {
    uCode: `simple-raw-info-effect-${rw}`,
    row: 1,
    column: 1,
    rawNum: rw,
    raw: [rw]
  }
}