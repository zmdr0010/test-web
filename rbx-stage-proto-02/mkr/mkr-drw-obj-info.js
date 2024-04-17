let getMtxIndicesFunc = (mtxInfo) => {
  if (mtxInfo.iCode === 'getMtxIndicesLastSet') return getMtxIndicesLastSet()
  return getMtxIndices0002(mtxInfo.num)
}

function createDrwObjInfo(drwObjInfo, resInfo) {
  const uCode = `${drwObjInfo.uCode}`
  let rawInfo = resInfo.rawInfoList.find(i => i.uCode === drwObjInfo.uCode)
  const colorSetInfo = resInfo.colorSetInfoList.find(i => i.uCode === drwObjInfo.colorSetInfo.uCode)
  let colorList = []
  if (colorSetInfo) {
    colorList = createColorList(colorSetInfo, rawInfo.rawNum)
  }

  if (drwObjInfo.rawType === 'layers') rawInfo = parsingLayerRawInfoToRawInfo(rawInfo)
  if (drwObjInfo.rawDirType === 'h-reverse') reverseRawInfo(rawInfo, 'h')
  if (drwObjInfo.rawDirType === 'v-reverse') reverseRawInfo(rawInfo, 'v')

  if (drwObjInfo.mtxInfo && drwObjInfo.mtxInfo.num >= 0) {
    let bSet = []
    if (drwObjInfo.mtxInfo.bSetNum >= 0) bSet = getMtxPresetX3BSet(drwObjInfo.mtxInfo.bSetNum)
    const mtxPresetList = getMtxPresetX3List()
    const indices = getMtxIndicesFunc(drwObjInfo.mtxInfo)
    const mtxSet = getMtxSet(mtxPresetList, indices)

    if (drwObjInfo.rawType === 'layers') {
      const layerList = divideRawLayerToRawInfoList(rawInfo)
      const layerListX3 = []
      for (const layer of layerList) {
        const layerX3 = expandCheckRawCornerByMtxSetX3(layer, mtxSet, bSet)
        layerListX3.push(layerX3)
      }
      rawInfo = compRawInfoLayers(layerListX3)
    } else {
      rawInfo = expandCheckRawCornerByMtxSetX3(rawInfo, mtxSet, bSet)
    }
  }

  let rcInfo = copyRcInfo(drwObjInfo.rcInfo)
  let isRCszCalculating = false
  let r = rcInfo.r
  let c = rcInfo.c
  let lastR = 0
  let lastC = 0
  if (rcInfo.rsz === -1 && rcInfo.csz === -1) {
    // calculating (include child)
    isRCszCalculating = true
  }

  const child = []

  for (const childDrwInfo of drwObjInfo.child) {
    const childInfo = createDrwObjInfo(childDrwInfo, resInfo)
    child.push(childInfo)

    if (isRCszCalculating) {
      const lr = childInfo.rcInfo.r + childInfo.rcInfo.rsz + r
      const lc = childInfo.rcInfo.c + childInfo.rcInfo.csz + c
      lastR = Math.max(lastR, lr)
      lastC = Math.max(lastC, lc)
    }
  }

  if (isRCszCalculating) {
    const lr = r + rawInfo.row
    const lc = c + rawInfo.column
    lastR = Math.max(lastR, lr)
    lastC = Math.max(lastC, lc)
    rcInfo.rsz = lastR - r
    rcInfo.csz = lastC - c
  }

  return {
    uCode: uCode,
    rcInfo: rcInfo,
    rawInfo: rawInfo,
    colorSetInfo: { uCode: drwObjInfo.colorSetInfo.uCode },
    colorList: colorList,
    chgColorList: [],
    child: child
  }
}