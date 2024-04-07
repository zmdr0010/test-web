const rawSelectFList = [2,6,7,1,9,8,0,4,5,14,10,11,12,13,15,16,17,18]

const rawSelectLList = [
  0,2,1,3,4,17,18,25,26,27, // normal wing type
  23,19,20,21,22, // rare wing type
  11,12,13,14,16,31, // stylish wing type
  5,6,7,8,9,10,15,24, // cw type
  28,29,30 // power wing type
]

const rawSelectBkList = [
  0,3,11,1,10,
  2,4,5,17,18,19,
  6,7,8,14,15,22,21,
  12,13,16,20,9
]

const rawSelectBdList = [
  2,5,21,0,4,6,10,12,14,22,1,3,
  7,8,9,11,13,15,16,17,18,19,20
]

function setRawSelectList(preResInfo, fList, lList, bkList, bdList) {
  for (const i of rawSelectFList) {
    preResInfo.fList.push(fList[i])
  }

  for (const i of rawSelectLList) {
    preResInfo.lList.push(lList[i])
  }

  for (const i of rawSelectBkList) {
    preResInfo.bkList.push(bkList[i])
  }

  for (const i of rawSelectBdList) {
    preResInfo.bdList.push(bdList[i])
  }
}