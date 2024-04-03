// default : f-l-bd-r-bk type (unit, jrc tCode : fighter-00) (fighter aircraft, fighter plane)
function moveAutoJoin(partInfo, calcJrcInfo, topTCode='f', leftTCode='l') {
  // 0. auto calculate jrc (joint row column)
  const jrcInfoList = calculateToJrcInfo(partInfo.child, calcJrcInfo)

  // 1. f (top part) to top (base : f.c = 0)
  const tPart = partInfo.child.find(info => info.tCode === topTCode)
  tPart.rcInfo.c = 0

  // 2. bd to f jrc (joint row column)
  // 3. l, r, bk to bd jrc
  moveByJrcInfo(partInfo.child, jrcInfoList)

  // 4. l (left part) to left => f, bd, r, bk to left
  const lPart = partInfo.child.find(info => info.tCode === leftTCode)
  const mr = 0 - lPart.rcInfo.r
  for (const pI of partInfo.child) {
    pI.rcInfo.r += mr
  }

  // 5. re calculate rsz, csz
  partInfo.rcInfo.rsz = 0
  partInfo.rcInfo.csz = 0
  calculateRCsz(partInfo)
}

// partInfoList : same child depth
function calculateToJrcInfo(partInfoList, calcJrcInfo) {
  const list = []
  for (const cjI of calcJrcInfo.list) {
    const partInfo = partInfoList.find(info => info.tCode === cjI.target)
    let r = 0
    let c = 0
    let rsz = partInfo.rcInfo.rsz
    let csz = partInfo.rcInfo.csz
    if (cjI.type === 'scale') {
      r = Math.round(rsz * cjI.rs)
      c = Math.round(csz * cjI.cs)
    }
    if (cjI.type === 'fix') {
      r = cjI.r
      c = cjI.c
    }
    list.push({
      target: cjI.target,
      key: cjI.key,
      type: cjI.jrcType,
      r: r,
      c: c
    })
  }
  return list
}

function moveByJrcInfo(partInfoList, jrcInfoList) {
  for (const jrcInfo of jrcInfoList) {
    if (jrcInfo.type === 'm') {
      const gJrcInfo = jrcInfoList.find(info => info.key === jrcInfo.key && info.type === 'g')
      const gPartInfo = partInfoList.find(info => info.tCode === gJrcInfo.target)
      const mPartInfo = partInfoList.find(info => info.tCode === jrcInfo.target)
      mPartInfo.rcInfo.r = gPartInfo.rcInfo.r + gJrcInfo.r - jrcInfo.r
      mPartInfo.rcInfo.c = gPartInfo.rcInfo.c + gJrcInfo.c - jrcInfo.c
    }
  }
}

function calculateRCsz(partInfo) {
  let rcInfo = partInfo.rcInfo
  let r = rcInfo.r
  let c = rcInfo.c
  let calcRC = calculateLastRC(partInfo, 0, 0, 0, 0)
  let lastR = calcRC[0]
  let lastC = calcRC[1]
  rcInfo.rsz = lastR - r
  rcInfo.csz = lastC - c
}

function calculateLastRC(partInfo, lastR, lastC, r, c) {
  const lr = partInfo.rcInfo.r + partInfo.rcInfo.rsz + r
  const lc = partInfo.rcInfo.c + partInfo.rcInfo.csz + c
  let lstR = Math.max(lastR, lr)
  let lstC = Math.max(lastC, lc)
  for (const childInfo of partInfo.child) {
    let cLst = calculateLastRC(childInfo, lstR, lstC,
      r + partInfo.rcInfo.r,
      c + partInfo.rcInfo.c
    )
    lstR = Math.max(lstR, cLst[0])
    lstC = Math.max(lstC, cLst[1])
  }
  return [lstR, lstC]
}