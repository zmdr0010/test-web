let resInfo = {
  rawInfoList: [],
  jrcInfoList: [],
  colorSetInfoList: [],
  hitLinkInfoList: [],
  mvsPresetLinkList: [], // mvs : move set
  mvsPresetList: []
}

function initResInfo(rawInfoList, jrcInfoList, colorSetInfoList, hitLinkInfoList, mvsPresetLinkList, mvsPresetList) {
  resInfo.rawInfoList = rawInfoList
  resInfo.jrcInfoList = jrcInfoList
  resInfo.colorSetInfoList = colorSetInfoList
  resInfo.hitLinkInfoList = hitLinkInfoList
  resInfo.mvsPresetLinkList = mvsPresetLinkList
  resInfo.mvsPresetList = mvsPresetList
}