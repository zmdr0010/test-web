function createSimplePartPresetInfoList(skinInfoList) {
  const list = []
  for (const skinInfo of skinInfoList) {
    const info = {
      uCode: `part-preset-info-${skinInfo.rawUCode}`,
      partInfo: createSimplePartPresetInfo(skinInfo)
    }
    list.push(info)
  }
  return list
}

function createSimplePartPresetInfo(skinInfo) {
  const rawUCode = skinInfo.rawUCode
  const tCode = skinInfo.tCode
  const mtxNum = skinInfo.mtxNum
  const bSetNum = skinInfo.bSetNum
  const colorSetUCode = skinInfo.colorSetUCode
  const rawDirType = skinInfo.rawDirType
  const rawType = skinInfo.rawType
  const hitSetInfoUCode = skinInfo.hitSetInfoUCode

  const info = {
    uCode: `part-info-${rawUCode}`,
    tCode: tCode,
    rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},// -1 : calculating (include drwObj and child) on init
    drwObjInfo: { // null : no drw obj
      uCode: rawUCode, // drw RawInfo uCode
      mtxInfo: { // null : origin (no mtx : direct drawing)
        num: mtxNum, // -1 : origin (no mtx : direct drawing), 0 ~ n : mtx preset index
        bSetNum: bSetNum // -1 : none, 0 ~ n : bSet preset index
      },
      rawType: rawType, // raw / layers
      rawDirType: rawDirType, // normal / h-reverse / v-reverse
      colorSetInfo: {
        uCode: colorSetUCode
      },
      rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},
      child: []
    },
    hitSetInfo: {
      uCode: hitSetInfoUCode
    },
    child: []
  }
  return info
}

function createMainPartPresetInfo(uCode, skinList) {
  const partChild = []

  for (const skin of skinList) {
    partChild.push(createSimplePartPresetInfo(skin))
  }

  const info = {
    uCode: uCode,
    partInfo: {
      uCode: `part-info-${uCode}-main`,
      tCode: 'main',
      rcInfo: {r: 0, c: 0, rsz: -1, csz: -1},// -1 : calculating (include drwObj and child) on init
      drwObjInfo: null,
      hitSetInfo: null,
      child: partChild
    }
  }
  return info
}