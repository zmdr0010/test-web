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