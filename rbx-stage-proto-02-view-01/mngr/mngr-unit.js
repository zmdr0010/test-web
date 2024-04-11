let preResInfo = {
  fList: [],
  lList: [],
  bkList: [],
  bdList: [],
  colorSetInfoList: []
}

let preSetInfo = {
  f: {
    rawIndex: 0, colorIndex: 0, mtxNum: 0, bSetNum: -1
  },
  l: {
    rawIndex: 0, colorIndex: 0, mtxNum: 0, bSetNum: -1
  },
  bk: {
    rawIndex: 0, colorIndex: 0, mtxNum: 0, bSetNum: -1
  },
  bd: {
    rawIndex: 0, colorIndex: 0, mtxNum: 0, bSetNum: -1
  }
}

function createEnemyPresetInfoList(length) {
  const list = []
  for (let i=0; i<length; i++) {
    // const setInfo = {
    //   hitType: 'enemy',
    //   hitTarget: 'friendly',
    //   reverseType: 'v',
    //   f: i, l: i, bk: i, bd: i,
    //   fColor: preColorSetIndex.fColor,
    //   lColor: preColorSetIndex.lColor,
    //   bkColor: preColorSetIndex.bkColor,
    //   bdColor: preColorSetIndex.bdColor,
    //   mtxNum: preMtx.mtxNum,
    //   bSetNum: preMtx.bSetNum
    // }
    // list.push(createUnitPresetInfo(setInfo))
    preSetInfo.f.rawIndex = i
    preSetInfo.l.rawIndex = i
    preSetInfo.bk.rawIndex = i
    preSetInfo.bd.rawIndex = i
    list.push(createEnemyPresetInfo(preSetInfo, preResInfo))
  }

  return list
}

function createEnemyPresetInfo(preSetInfo, preResInfo) {
  const setInfo = {
    hitType: 'enemy',
    hitTarget: 'friendly',
    reverseType: 'v',
    f: preSetInfo.f.rawIndex,
    l: preSetInfo.l.rawIndex,
    bk: preSetInfo.bk.rawIndex,
    bd: preSetInfo.bd.rawIndex,
    fColor: preSetInfo.f.colorIndex,
    lColor: preSetInfo.l.colorIndex,
    bkColor: preSetInfo.bk.colorIndex,
    bdColor: preSetInfo.bd.colorIndex,
    fMtxNum: preSetInfo.f.mtxNum,
    fBSetNum: preSetInfo.f.bSetNum,
    lMtxNum: preSetInfo.l.mtxNum,
    lBSetNum: preSetInfo.l.bSetNum,
    bkMtxNum: preSetInfo.bk.mtxNum,
    bkBSetNum: preSetInfo.bk.bSetNum,
    bdMtxNum: preSetInfo.bd.mtxNum,
    bdBSetNum: preSetInfo.bd.bSetNum
  }
  return createUnitPresetInfo(setInfo, preResInfo)
}

// jrcType : cw (cannon wing)
// 5, 6, 7, 8, 9, 10, 15, 24
function createUnitPresetInfo(setInfo, preResInfo) {
  const uCode = `u-01-${unitList.length}`
  const tCode = 'fighter-00'
  const hitType = setInfo.hitType
  const hitTarget = setInfo.hitTarget
  let wType = 'w'
  let idleType = 'idle-00'
  const reverseType = setInfo.reverseType
  let calcJrcInfoUCode = 'calc-jrc-info-03'

  const fList = preResInfo.fList
  const lList = preResInfo.lList
  const bkList = preResInfo.bkList
  const bdList = preResInfo.bdList
  const colorSetInfoList = preResInfo.colorSetInfoList
  const fIndex = setInfo.f % fList.length
  const lIndex = setInfo.l % lList.length
  const bkIndex = setInfo.bk % bkList.length
  const bdIndex = setInfo.bd % bdList.length
  const rawF = fList[fIndex]
  const rawL = lList[lIndex]
  const rawBk = bkList[bkIndex]
  const rawBd = bdList[bdIndex]

  for (const u of ['layer-raw-info-raw-left-sample-05',
    'layer-raw-info-raw-left-sample-06','layer-raw-info-raw-left-sample-07',
    'layer-raw-info-raw-left-sample-08','layer-raw-info-raw-left-sample-09',
    'layer-raw-info-raw-left-sample-10','layer-raw-info-raw-left-sample-15',
    'layer-raw-info-raw-left-sample-17-max-10']) {
    if (u === rawL.uCode) {
      wType = 'cw'
      idleType = 'idle-cw'
      calcJrcInfoUCode = 'calc-jrc-info-02'
    }
  }

  const colorSetF = colorSetInfoList[setInfo.fColor % colorSetInfoList.length]
  const colorSetL = colorSetInfoList[setInfo.lColor % colorSetInfoList.length]
  const colorSetBk = colorSetInfoList[setInfo.bkColor % colorSetInfoList.length]
  const colorSetBd = colorSetInfoList[setInfo.bdColor % colorSetInfoList.length]
  // const mtxNum = setInfo.mtxNum
  // const bSetNum = setInfo.bSetNum

  return {
    uCode: uCode,
    tCode: tCode,
    hitType: hitType,
    hitTarget: hitTarget,
    wType: wType, // wing type : cw (cannon wing) / w (wing)
    idleType: idleType, // idle-cw / idle-00
    reverseType: reverseType, // none / v (vertical)
    calcJrcInfo: { uCode: calcJrcInfoUCode },
    skinInfoList: [
      { rawUCode: rawF.uCode, // mtxNum = -1 : set origin
        tCode: 'f', mtxNum: setInfo.fMtxNum, bSetNum: setInfo.fBSetNum, colorSetUCode: colorSetF.uCode,
        iCode: 'getMtxIndices0002',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
      { rawUCode: rawL.uCode,
        tCode: 'l', mtxNum: setInfo.lMtxNum, bSetNum: setInfo.lBSetNum, colorSetUCode: colorSetL.uCode,
        iCode: 'getMtxIndices0002',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
      { rawUCode: rawL.uCode,
        tCode: 'r', mtxNum: setInfo.lMtxNum, bSetNum: setInfo.lBSetNum, colorSetUCode: colorSetL.uCode,
        iCode: 'getMtxIndices0002',
        rawDirType: 'h-reverse', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
      { rawUCode: rawBk.uCode,
        tCode: 'bk', mtxNum: setInfo.bkMtxNum, bSetNum: setInfo.bkBSetNum, colorSetUCode: colorSetBk.uCode,
        iCode: 'getMtxIndices0002',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' },
      { rawUCode: rawBd.uCode,
        tCode: 'bd', mtxNum: setInfo.bdMtxNum, bSetNum: setInfo.bdBSetNum, colorSetUCode: colorSetBd.uCode,
        iCode: 'getMtxIndices0002',
        rawDirType: 'normal', rawType: 'layers', hitSetInfoUCode: 'hit-set-info-obj-area-02' }
    ],
    armsPresetList: []
  }
}