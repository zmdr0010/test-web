const sampleRawInfoListShoot = []
sampleRawInfoListShoot.push({
  uCode: '20240122143329-mis-00-00',
  row: 1,
  column: 5,
  rawNum: 4,
  raw: [4,3,2,1,1]
})

const sampleRawInfoEffect00 = {
  uCode: 'sample-raw-info-effect-00',
  row: 1,
  column: 1,
  rawNum: 1,
  raw: [1]
}

function createSampleRawInfoEffect00(rw) {
  return {
    uCode: `sample-raw-info-effect-00-${rw}`,
    row: 1,
    column: 1,
    rawNum: rw,
    raw: [rw]
  }
}