const rateRowList00 = [-0.7, -0.5, -0.3 ,0, 0.3, 0.5, 0.7]
const rateColumnList00 = [-9, -8, -7, -6, -5, -4]

function createRbxExplosionEffectPartUnitList(partInfo, rateRowList, rateColumnList,
                                              addEvent,
                                              dir, pSr=0, pSc=0) {
  const rawInfo = partInfo.drwObj.rawInfo
  const row = rawInfo.row
  const column = rawInfo.column
  const sr = partInfo.rcInfo.r + pSr
  const sc = partInfo.rcInfo.c + pSc
  // const list = []
  for (let i=0; i<rawInfo.raw.length; i++) {
    const rw = rawInfo.raw[i]
    const r = i % row
    const c = Math.floor(i / row)
    const partI = {
      uCode: `effect-rbx-explosion-${partInfo.uCode}-${i}`,
      tCode: 'effect-rbx-explosion',
      jrcType: '',
      rcInfo: { r: sr + r, c: sc + c, rsz: 1, csz: 1},
      drwObj: {
        uCode: 'effect-rbx-explosion',
        rcInfo: { r: 0, c:0, rsz: 1, csz: 1 },
        rawInfo: createSimpleRawInfoEffect(rw),
        colorSetInfo: { uCode: partInfo.drwObj.colorSetInfo.uCode },
        colorList: copyColorList(partInfo.drwObj.colorList),
        chgColorList: copyColorList(partInfo.drwObj.chgColorList),
        child: []
      },
      frmBhvSetInfoList: [],
      hitInfo: null,
      armsInfoList: [],
      state: 'normal',
      child: []
    }
    const frmBhvSet = createRbxExplosionEffect(i, { row: row, column: column,
      rateRowList: rateRowList, rateColumnList: rateColumnList, dir: dir,
      uCode:`effect-rbx-explosion-${i}`, type: 'out', partInfo: partI, addEvent: addEvent})
    partI.frmBhvSetInfoList.push(frmBhvSet)

    const unitInfo = {
      uCode: `unit-${partI.uCode}`,
      partInfo: partI,
      hitInfo: {
        hitFrame: 0,
        hitState: 0,
        type: '',
        target: ''
      }
    }
    addUnit(unitInfo)
  }
}

function createRbxExplosionEffect(i, setInfo, num=3, dA=5) {
  const partInfo = setInfo.partInfo
  const row = setInfo.row
  const column = setInfo.column
  const rateRowList = setInfo.rateRowList
  const rateColumnList = setInfo.rateColumnList
  const dir = setInfo.dir

  const r = i % row
  const c = Math.floor(i / row)
  const rRate = (r + 1) / row
  const cRate = (c + 1) / column
  const rRateIndex = Math.round((rateRowList.length - 1) * rRate)
  const cRateIndex = Math.round((rateColumnList.length - 1) * cRate)
  const rR = rateRowList[rRateIndex]
  let rC = rateColumnList[cRateIndex]
  if (dir === -1) {
    rC = rateColumnList[rateColumnList.length - 1 - cRateIndex] * -1
  }
  let frmBhvInfoList = []
  for (let j=0; j<num; j++) {
    const rdm = Math.floor(Math.random() * dA)
    const d = rdm + dA
    frmBhvInfoList.push({
      type: 'move',
      currentFrmBhv: 0,
      lastFrmBhv: 0,
      frame: 0,
      fps: 60,
      d: d,
      list: [
        {
          dr: rR,
          dc: rC
        }
      ],
      etcInfo: {
        sr: 0, sc: 0
      }
    })
  }
  return createFrmBhvSetInfo({
    partInfo: partInfo, list: frmBhvInfoList, uCode: 'effect-rbx-explosion', type: 'out',
    addEvent: setInfo.addEvent, frmBhvSetInfo: null, frmBhvInfo: frmBhvInfoList[0]
  })
}