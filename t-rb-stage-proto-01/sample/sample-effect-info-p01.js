const sampleEffectInfoP01 = { // in partInfo
  // change-out (change and out at end)
  // change-color
  type: 'add', // add (effect + origin) / change (only effect, don't drawing origin) / origin (no effect)
  list: [] // effect partInfo list // type = add : empty is origin (type = change : don't drawing)
}

const rateRowList00 = [-3, -2 ,-1 ,0, 1, 2, 3]
const rateColumnList00 = [-10, -8, -6, -4]
const rateRowList01 = [-5, -4, -3, -2 ,-1 ,0, 1, 2, 3, 4, 5]
const rateColumnList01 = [-11, -10, -9, -8, -7, -6, -5, -4, -3, -2]
const rateRowList02 = [-0.7, -0.5, -0.3 ,0, 0.3, 0.5, 0.7]
const rateColumnList02 = [-9, -8, -7, -6, -5, -4]

function createActHitEffectInfo00(partInfo, dir, pSr=0, pSc=0) {
  const rawInfo = partInfo.drwObj.rawInfo
  const row = rawInfo.row
  const column = rawInfo.column
  const sr = partInfo.rcInfo.r + pSr
  const sc = partInfo.rcInfo.c + pSc
  const list = []
  for (let i=0; i<rawInfo.raw.length; i++) {
    const rw = rawInfo.raw[i]
    const r = i % row
    const c = Math.floor(i / row)
    const moveList = createActHitEffectMoveList00(i, { row: row, column: column,
      etcInfo: { rateRowList: rateRowList02, rateColumnList: rateColumnList02, dir: dir }})
    const partI = {
      uCode: `effect-act-hit-${generateSimpleUCode()}-${i}`,
      tCode: 'effect-act-hit',
      jrcType: '',
      rcInfo: { r: sr + r, c: sc + c, rsz: 1, csz: 1},
      drwObj: {
        uCode: 'effect-act-hit',
        rcInfo: { r: 0, c:0, rsz: 1, csz: 1 },
        rawInfo: createSampleRawInfoEffect00(rw),
        colorList: partInfo.drwObj.colorList,
        child: []
      },
      moveSetInfo: {
        uCode: `effect-act-hit-move-set-${generateSimpleUCode()}-${i}`,
        type: 'out',
        currentMove: 0,
        moveInfo: moveList[0],
        list: moveList
      },
      hitInfo: null,
      effectInfo: null,
      armsInfo: null,
      state: 'normal',
      child: []
    }
    list.push(partI)
  }

  return {
    type: 'change-out',
    list: list
  }
}

function createActHitEffectMoveList00(i, info, num=3, dA=5) {
  const r = i % info.row
  const c = Math.floor(i / info.row)
  const rRate = (r + 1) / info.row
  const cRate = (c + 1) / info.column
  const rRateIndex = Math.round((info.etcInfo.rateRowList.length - 1) * rRate)
  const cRateIndex = Math.round((info.etcInfo.rateColumnList.length - 1) * cRate)
  const rR = info.etcInfo.rateRowList[rRateIndex]
  let rC = info.etcInfo.rateColumnList[cRateIndex]
  if (info.etcInfo.dir === -1) {
    rC = info.etcInfo.rateColumnList[info.etcInfo.rateColumnList.length - 1 - cRateIndex] * -1
  }

  let msList = []
  for (let j=0; j<num; j++) {
    const rdm = Math.floor(Math.random() * dA)
    const d = rdm + dA
    msList.push({
      currentMove: 0,
      moveCount: 0,
      fps: 60,
      d: d,
      list: [
        {
          dr: rR,
          dc: rC
        }
      ]
    })
  }
  return msList
}

// partInfo : main
function createPartHitEffectInfo00(partInfo, resInfo, targetList=[]) { // change color
  const effectPartInfoList = []

  if (partInfo.drwObj) {
    const drwObj = partInfo.drwObj
    const rawInfo = drwObj.rawInfo
    const colorList = drwObj.colorList
    // effect : sample-color-set-info-01, 02, 04, 09, 11, 12, 13, 14, 15, 16, 18, 19
    const colorSetInfo0 = resInfo.colorSetInfoList.find(i => i.uCode === 'sample-color-set-info-09')
    const colorSetInfo1 = resInfo.colorSetInfoList.find(i => i.uCode === 'sample-color-set-info-11')
    const colorSetInfo2 = resInfo.colorSetInfoList.find(i => i.uCode === 'sample-color-set-info-04')
    const colorList0 = createColorList(colorSetInfo0, rawInfo.rawNum)
    const colorList1 = createColorList(colorSetInfo1, rawInfo.rawNum)
    const colorList2 = createColorList(colorSetInfo2, rawInfo.rawNum)

    const moveList = createPartHitEffectMoveList00([colorList0, colorList1, colorList2])
    const moveInfo = moveList[0]
    const effectPartInfo = {
      uCode: `effect-part-hit-${generateSimpleUCode()}`,
      tCode: 'effect-part-hit',
      jrcType: '',
      rcInfo: { r: partInfo.rcInfo.r, c: partInfo.rcInfo.c, rsz: partInfo.rcInfo.rsz, csz: partInfo.rcInfo.csz},
      drwObj: {
        uCode: 'effect-part-hit',
        rcInfo: { r: drwObj.rcInfo.r, c:drwObj.rcInfo.c, rsz: drwObj.rcInfo.rsz, csz: drwObj.rcInfo.csz },
        rawInfo: rawInfo,
        colorList: colorList,
        child: drwObj.child
      },
      moveSetInfo: {
        uCode: `effect-part-hit-move-set-${generateSimpleUCode()}`,
        type: 'end',
        currentMove: 0,
        moveInfo: moveInfo,
        list: moveList
      },
      hitInfo: null,
      effectInfo: null,
      armsInfo: null,
      state: 'normal',
      child: []
    }
    effectPartInfoList.push(effectPartInfo)
  }

  partInfo.effectInfo = {
    type: 'change-color',
    list: effectPartInfoList
  }

  if (targetList.length > 0) {
    for (const target of targetList) {
      createPartHitEffectInfo00(target, resInfo)
    }
  } else {
    for (const child of partInfo.child) {
      createPartHitEffectInfo00(child, resInfo)
    }
  }
}

function createPartHitEffectMoveList00(colorList, d=10) {
  let msList = []
  for (const colors of colorList) {
    msList.push({
      currentMove: 0,
      moveCount: 0,
      fps: 60,
      d: d,
      type: 'color',
      list: [
        {
          dr: 0,
          dc: 0,
          colorList: colors
        }
      ]
    })
  }
  return msList
}