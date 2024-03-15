const mtxPresetX3SampleList = []

function getMtxPresetX3SampleList() {
  if (mtxPresetX3SampleList.length > 0) return mtxPresetX3SampleList
  for (let i=0; i<2; i++) {
    for (let j=0; j<2; j++) {
      for (let k=0; k<2; k++) {
        for (let l=0; l<2; l++) {
          for (let m=0; m<2; m++) {
            for (let n=0; n<2; n++) {
              for (let o=0; o<2; o++) {
                for (let p=0; p<2; p++) {
                  for (let q=0; q<2; q++) {
                    mtxPresetX3SampleList.push({
                      r: 3,
                      c: 3,
                      list:[i,j,k,l,m,n,o,p,q]
                    })
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return mtxPresetX3SampleList
}

const mtxPresetX3SampleRawInfo00 = {
  uCode: 'mtx-preset-x3-sample-raw-info-00',
  row: 3,
  column: 4,
  rawNum: 1,
  raw: [
    0,1,0,
    1,1,1,
    1,1,1,
    0,1,0
  ]
}
const mtxPresetX3SampleRawInfo01 = {
  uCode: 'mtx-preset-x3-sample-raw-info-01',
  row: 5,
  column: 8,
  rawNum: 1,
  raw: [
    0,0,1,0,0,
    0,0,1,0,0,
    0,1,1,1,0,
    0,1,1,1,0,
    1,1,1,1,1,
    0,1,1,1,0,
    0,0,1,0,0,
    0,0,1,0,0,
  ]
}

const mtxPresetX3SampleRawInfo02 = {
  uCode: 'mtx-preset-x3-sample-raw-info-02',
  row: 9,
  column: 8,
  rawNum: 1,
  raw: [
    0,0,0,0,1,0,0,0,0,
    0,0,0,0,1,0,0,0,0,
    0,0,1,1,1,1,1,0,0,
    0,0,1,1,1,1,1,0,0,
    1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,0,0,
    0,0,0,0,1,0,0,0,0,
    0,0,0,0,1,0,0,0,0
  ]
}

let mtxPresetX3SampleBSet01 = [
  1,0,1,
  0,1,0,
  1,0,1
]
let mtxPresetX3SampleBSet02 = [
  1,1,1,
  1,0,1,
  1,1,1
]