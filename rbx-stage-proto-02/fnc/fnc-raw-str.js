function parsingRawStrToRawInfo(str) {
  const list = str.split('/')
  const uCode = list[0]
  const row = Number(list[1])
  const column = Number(list[2])
  const rawNum = Number(list[3])
  const rawStrList = list[4].split(',')
  const raw = []

  for (const key in rawStrList) {
    const r = Number(rawStrList[key])
    raw.push(r)
  }

  const rawInfo = {
    uCode: uCode,
    row: row,
    column: column,
    rawNum: rawNum,
    raw: raw
  }

  return rawInfo
}

function parsingRawInfoToRawStr(info) {
  return `${info.uCode}/${info.row}/${info.column}/${info.rawNum}/${info.raw.join()}`
}

function saveString(str, name, extension='txt') {
  const link = document.createElement("a")
  const file = new Blob([str], {type:'text/plain'})
  link.href = URL.createObjectURL(file)
  link.download = `${name}.${extension}`
  link.click()
  URL.revokeObjectURL(link.href)
}

function saveRawInfo(info) {
  saveString(parsingRawInfoToRawStr(info), info.uCode)
}

function generateSimpleUCode() {
  const current = new Date()
  const y = current.getFullYear()
  const m = current.getMonth() + 1
  const d = current.getDate()
  const h = current.getHours()
  const mm = current.getMinutes()
  const s = current.getSeconds()
  const mStr = (m < 10)? `0${m}`:`${m}`

  return `${y}${mStr}${d}${h}${mm}${s}`
}

function saveObjToJsonStr(obj, name) {
  saveString(JSON.stringify(obj), name, 'json')
}

// object to js file
function startParsingObjToJs(name, obj) {
  let result = `const ${name} = `
  result += parsingObjToJs(obj)
  return result
}

function parsingObjToJs(obj, prev='') {
  let result = '{\n'
  let hasKey = false
  for (const [key, value] of Object.entries(obj)) {
    hasKey = true
    result += prev + ' ' + key + ': '
    if (Object.prototype.isPrototypeOf(value)) {
      if (Array.isArray(value)) {
        result += '['
        if (value.length > 0) {
          if (Object.prototype.isPrototypeOf(value[0])) {
            if (Array.isArray(value[0])) {
              for (const v of value) {
                result += '[' + v + ']'
              }
              result = result.slice(0, result.length-1)
            } else {
              for (const v of value) {
                result += parsingObjToJs(v, prev + ' ') + ','
              }
              result = result.slice(0, result.length-1)
            }
          } else {
            console.log(value)
            if (typeof value[0] === 'bigint') {
              // let vList = []
              let vStr = ''
              for (const v of value) {
                // vList.push(`${v}`)
                vStr += `\"${v}\",`
              }
              vStr = vStr.slice(0, vStr.length-1)
              // console.log(vList)
              // result += vList
              result += vStr
            } else {
              result += value
            }
          }
        }
        result += '],\n'
      } else {
        result += parsingObjToJs(value, prev + ' ') + ',\n'
      }
    } else if (typeof  value === 'string') {
      result += '\"' + value + '\",\n'
    } else {
      result += value + ',\n'
    }
  }
  if (hasKey) result = result.slice(0, result.length-2) + '\n'
  result += prev + '}'
  return result
}