// raw edit

// left add / subtract - num - target column
// right add / subtract - num - target column
// top add / subtract - num - target row
// bottom add / subtract - num - target row

// rv - reverse targetC (except targetC)
function rawEditLeftAdd(raw, row, column, add=1, targetC=[], rv=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rv) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }

    let first = -1
    for (let j=0; j<row; j++) {
      const index = i * row + j
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cr = j
        for (let ii=0; ii<add; ii++) {
          cr -= 1
          if (cr < 0) continue
          const cIndex = i * row + cr
          raw[cIndex] = rw
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
function rawEditLeftAddTarget(raw, row, column, targetR, add=1, targetC=[], rvr=false, rvc=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }
    for (let j=0; j<row; j++) {
      const tri = targetR.indexOf(j)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
      const index = i * row + j
      const rw = raw[index]
      let cr = j
      for (let ii=0; ii<add; ii++) {
        cr -= 1
        if (cr < 0 || rw === 0) continue
        const cIndex = i * row + cr
        raw[cIndex] = rw
      }
    }
  }
}

// rv - reverse targetC (except targetC)
// left to right add value subtract
function rawEditLeftSubtract(raw, row, column, add=1, targetC=[], rv=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rv) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }

    let first = -1
    for (let j=0; j<row; j++) {
      const index = i * row + j
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cr = j
        for (let ii=0; ii<add; ii++) {
          const cIndex = i * row + cr
          raw[cIndex] = 0
          cr += 1
          if (cr >= row) continue
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
// left to left add value subtract
function rawEditLeftSubtractTarget(raw, row, column, targetR, add=1, targetC=[], rvr=false, rvc=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }
    for (let j=0; j<row; j++) {
      const tri = targetR.indexOf(j)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
      // const index = i * row + j
      // const rw = raw[index]
      let cr = j
      for (let ii=0; ii<add; ii++) {
        const cIndex = i * row + cr
        raw[cIndex] = 0
        cr -= 1
        if (cr < 0) continue
      }
    }
  }
}

// rv - reverse targetC (except targetC)
function rawEditRightAdd(raw, row, column, add=1, targetC=[], rv=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rv) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }

    let first = -1
    for (let j=row-1; j>=0; j--) {
      const index = i * row + j
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cr = j
        for (let ii=0; ii<add; ii++) {
          cr += 1
          if (cr >= row) continue
          const cIndex = i * row + cr
          raw[cIndex] = rw
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
function rawEditRightAddTarget(raw, row, column, targetR, add=1, targetC=[], rvr=false, rvc=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }
    for (let j=row-1; j>=0; j--) {
      const tri = targetR.indexOf(j)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
      const index = i * row + j
      const rw = raw[index]
      let cr = j
      for (let ii=0; ii<add; ii++) {
        cr += 1
        if (cr >= row || rw === 0) continue
        const cIndex = i * row + cr
        raw[cIndex] = rw
      }
    }
  }
}

// rv - reverse targetC (except targetC)
// right to left add value subtract
function rawEditRightSubtract(raw, row, column, add=1, targetC=[], rv=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rv) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }

    let first = -1
    for (let j=row-1; j>=0; j--) {
      const index = i * row + j
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cr = j
        for (let ii=0; ii<add; ii++) {
          const cIndex = i * row + cr
          raw[cIndex] = 0
          cr -= 1
          if (cr < 0) continue
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
// right to right add value subtract
function rawEditRightSubtractTarget(raw, row, column, targetR, add=1, targetC=[], rvr=false, rvc=false) {
  for (let i=0; i<column; i++) {
    if (targetC.length > 0) {
      const tci = targetC.indexOf(i)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
    }
    for (let j=row-1; j>=0; j--) {
      const tri = targetR.indexOf(j)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
      // const index = i * row + j
      // const rw = raw[index]
      let cr = j
      for (let ii=0; ii<add; ii++) {
        const cIndex = i * row + cr
        raw[cIndex] = 0
        cr += 1
        if (cr >= row) continue
      }
    }
  }
}

// rv - reverse targetR (except targetR)
function rawEditTopAdd(raw, row, column, add=1, targetR=[], rv=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rv) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }

    let first = -1
    for (let j=0; j<column; j++) {
      const index = j * row + i
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cc = j
        for (let ii=0; ii<add; ii++) {
          cc -= 1
          if (cc < 0) continue
          const cIndex = cc * row + i
          raw[cIndex] = rw
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
function rawEditTopAddTarget(raw, row, column, targetC, add=1, targetR=[], rvc=false, rvr=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }
    for (let j=0; j<column; j++) {
      const tci = targetC.indexOf(j)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
      const index = j * row + i
      const rw = raw[index]
      let cc = j
      for (let ii=0; ii<add; ii++) {
        cc -= 1
        if (cc < 0 || rw === 0) continue
        const cIndex = cc * row + i
        raw[cIndex] = rw
      }
    }
  }
}

// rv - reverse targetR (except targetR)
// top to bottom add value subtract
function rawEditTopSubtract(raw, row, column, add=1, targetR=[], rv=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rv) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }

    let first = -1
    for (let j=0; j<column; j++) {
      const index = j * row + i
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cc = j
        for (let ii=0; ii<add; ii++) {
          const cIndex = cc * row + i
          raw[cIndex] = 0
          cc += 1
          if (cc >= column) continue
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
// top to top add value subtract
function rawEditTopSubtractTarget(raw, row, column, targetC, add=1, targetR=[], rvc=false, rvr=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }
    for (let j=0; j<column; j++) {
      const tci = targetC.indexOf(j)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
      // const index = j * row + i
      // const rw = raw[index]
      let cc = j
      for (let ii=0; ii<add; ii++) {
        const cIndex = cc * row + i
        raw[cIndex] = 0
        cc -= 1
        if (cc < 0) continue
      }
    }
  }
}

// rv - reverse targetR (except targetR)
function rawEditBottomAdd(raw, row, column, add=1, targetR=[], rv=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rv) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }

    let first = -1
    for (let j=column-1; j>=0; j--) {
      const index = j * row + i
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cc = j
        for (let ii=0; ii<add; ii++) {
          cc += 1
          if (cc >= column) continue
          const cIndex = cc * row + i
          raw[cIndex] = rw
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
function rawEditBottomAddTarget(raw, row, column, targetC, add=1, targetR=[], rvc=false, rvr=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }
    for (let j=column-1; j>=0; j--) {
      const tci = targetC.indexOf(j)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
      const index = j * row + i
      const rw = raw[index]
      let cc = j
      for (let ii=0; ii<add; ii++) {
        cc += 1
        if (cc >= column || rw === 0) continue
        const cIndex = cc * row + i
        raw[cIndex] = rw
      }
    }
  }
}

// rv - reverse targetR (except targetR)
// bottom to top add value subtract
function rawEditBottomSubtract(raw, row, column, add=1, targetR=[], rv=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rv) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }

    let first = -1
    for (let j=column-1; j>0; j--) {
      const index = j * row + i
      const rw = raw[index]
      if (first < 0 && rw > 0) {
        first = index
        let cc = j
        for (let ii=0; ii<add; ii++) {
          const cIndex = cc * row + i
          raw[cIndex] = 0
          cc -= 1
          if (cc < 0) continue
        }
      }
    }
  }
}

// rvr - reverse targetR (except targetR), rvc - reverse targetC (except targetC)
// bottom to bottom add value subtract
function rawEditBottomSubtractTarget(raw, row, column, targetC, add=1, targetR=[], rvc=false, rvr=false) {
  for (let i=0; i<row; i++) {
    if (targetR.length > 0) {
      const tri = targetR.indexOf(i)
      if (rvr) {
        if (tri >= 0) continue
      } else {
        if (tri < 0) continue
      }
    }
    for (let j=column-1; j>=0; j--) {
      const tci = targetC.indexOf(j)
      if (rvc) {
        if (tci >= 0) continue
      } else {
        if (tci < 0) continue
      }
      // const index = j * row + i
      // const rw = raw[index]
      let cc = j
      for (let ii=0; ii<add; ii++) {
        const cIndex = cc * row + i
        raw[cIndex] = 0
        cc += 1
        if (cc >= column) continue
      }
    }
  }
}