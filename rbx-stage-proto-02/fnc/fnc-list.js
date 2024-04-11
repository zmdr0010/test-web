function initList(list) {
  while (list.length > 0) {
    list.splice(list.length-1, 1)
  }
}

function addList(list, aList) {
  for (const v of aList) list.push(v)
}

function replaceList(list, cList) {
  initList(list)
  addList(list, cList)
}