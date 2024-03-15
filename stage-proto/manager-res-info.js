let resInfo = {
  rawInfoList: [],
  colorSetInfoList: [],
  colorPalettesInfoList: [],
  drwObjLinkInfoList: [],
  hitLinkInfoList: [],
  mvsPresetLinkList: [], // mvs : move set
  mvsPresetList: []
}

function initResInfo(rawInfoList, colorSetInfoList, colorPalettesInfoList, drwObjLinkInfoList,
                     hitLinkInfoList, mvsPresetLinkList, mvsPresetList) {
  resInfo.rawInfoList = rawInfoList
  resInfo.colorSetInfoList = colorSetInfoList
  resInfo.colorPalettesInfoList = colorPalettesInfoList
  resInfo.drwObjLinkInfoList = drwObjLinkInfoList
  resInfo.hitLinkInfoList = hitLinkInfoList
  resInfo.mvsPresetLinkList = mvsPresetLinkList
  resInfo.mvsPresetList = mvsPresetList
}