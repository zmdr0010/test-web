const rateRowList00 = [-3, -2 ,-1 ,0, 1, 2, 3]
const rateColumnList00 = [-10, -8, -6, -4]
const rateRowList01 = [-5, -4, -3, -2 ,-1 ,0, 1, 2, 3, 4, 5]
const rateColumnList01 = [-11, -10, -9, -8, -7, -6, -5, -4, -3, -2]

function createEffectMoveSetSample00(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSList,
    etcInfo: {rateRowList: rateRowList00, rateColumnList: rateColumnList00}})
}

function createEffectMoveSetSample01(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSList,
    etcInfo: {rateRowList: rateRowList01, rateColumnList: rateColumnList01}})
}

function createEffectMoveSetSample02(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSList,
    etcInfo: {rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createEffectMoveSetSample03(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSListType00,
    etcInfo: {type: 'normal', rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createEffectMoveSetSample04(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSListType00,
    etcInfo: {type: 'reverse', rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createEffectMoveSetSample05(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSListType01,
    etcInfo: {type: 'normal', rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createEffectMoveSetSample06(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSListType01,
    etcInfo: {type: 'reverse', rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createEffectMoveSetSample07(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSListType02,
    etcInfo: { dirType: 'toRT',type: 'normal', rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createEffectMoveSetSample08(rawInfo) {
  return createEffectMoveSet(rawInfo, {func: createMSListType02,
    etcInfo: { dirType: 'toRT', type: 'reverse', rateRowList: [0,0,0,0,0], rateColumnList: [0,0,0,0,0]}})
}

function createMSListType00(i, info) {
  const cr = Math.floor(info.row * 0.5)
  const cc = Math.floor(info.column * 0.5)
  const cLength = Math.sqrt(cr * cr + cc * cc)
  const r = i % info.row
  const c = Math.floor(i / info.row)
  const dr = r - cr
  const dc = c - cc
  const dist = Math.sqrt(dr * dr + dc * dc)
  const dd = dist / cLength
  let msList = []
  let d = dd * 60
  if (info.etcInfo.type === 'reverse') d = (1 - dd) * 60
  msList.push({
    currentMove: 0,
    moveCount: 0,
    fps: 60,
    d: d,
    list: [
      {
        dr: 0,
        dc: 0
      }
    ]
  })
  return msList
}

function createMSListType01(i, info) {
  const cr = Math.floor(info.row * 0.5)
  const cc = Math.floor(info.column * 0.5)
  const cLength = Math.sqrt(cr * cr + cc * cc)
  const r = i % info.row
  const c = Math.floor(i / info.row)
  const dr = r - cr
  const dc = c - cc
  const dist = Math.sqrt(dr * dr + dc * dc)
  const dd = dist / cLength
  let msList = []
  let d = dd * 60
  if (info.etcInfo.type === 'reverse') d = (1 - dd) * 60
  if (d === 0) d = 0.1 * 60
  msList.push({
    currentMove: 0,
    moveCount: 0,
    fps: 60,
    d: 1,
    list: [
      {
        dr: -1000,
        dc: -1000
      }
    ]
  })
  msList.push({
    currentMove: 0,
    moveCount: 0,
    fps: 60,
    d: d,
    list: [
      {
        dr: 0,
        dc: 0
      }
    ]
  })
  msList.push({
    currentMove: 0,
    moveCount: 0,
    fps: 60,
    d: 1,
    list: [
      {
        dr: 1000,
        dc: 1000
      }
    ]
  })
  msList.push({
    currentMove: 0,
    moveCount: 0,
    fps: 60,
    d: d * 30,
    list: [
      {
        dr: 0,
        dc: 0
      }
    ]
  })
  return msList
}

function createMSListType02(i, info) {
  let right = 0
  let bottom = info.column
  if (info.etcInfo.dirType === 'toLB') {
    right = info.row
    bottom = 0
  }
  const cLength = Math.sqrt(right * right + bottom * bottom)
  const r = i % info.row
  const c = Math.floor(i / info.row)
  const dr = r - right
  const dc = c - bottom
  const dist = Math.sqrt(dr * dr + dc * dc)
  const dd = dist / cLength
  let msList = []
  let d = dd * 60
  if (info.etcInfo.type === 'reverse') d = (1 - dd) * 60
  msList.push({
    currentMove: 0,
    moveCount: 0,
    fps: 60,
    d: d,
    list: [
      {
        dr: 0,
        dc: 0
      }
    ]
  })
  return msList
}

function createMSList(i, info) {
  const r = i % info.row
  const c = Math.floor(i / info.row)
  const rRate = (r + 1) / info.row
  const cRate = (c + 1) / info.column
  const rRateIndex = Math.round((info.etcInfo.rateRowList.length - 1) * rRate)
  const cRateIndex = Math.round((info.etcInfo.rateColumnList.length - 1) * cRate)
  const rR = info.etcInfo.rateRowList[rRateIndex]
  const rC = info.etcInfo.rateColumnList[cRateIndex]

  let msList = []
  for (let j=0; j<3; j++) {
    const rdm = Math.floor(Math.random() * 5)
    const d = rdm + 5
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

function createEffectMoveSet(rawInfo, info) {
  const row = rawInfo.row
  const column = rawInfo.column
  const list = []
  for (let i=0; i<rawInfo.raw.length; i++) {
    const emInfo = {
      targetInfo: {
        type: 'target',
        vType: 'index',
        target: i,
      },
      dInfo: {
        r: 0,
        c: 0
      } ,
      moveSetInfo: {
        type: 'out',
        currentMove: 0,
        list: info.func(i, {row:row, column:column, etcInfo: info.etcInfo})
      }
    }
    list.push(emInfo)
  }
  return {
    targetInfo: {
      type: 'target',
      vType: 'index'
    },
    list: list
  }
}