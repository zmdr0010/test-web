const jsList = [
  'fnc/fnc-color-set.js',
  'fnc/fnc-copy-info.js',
  'fnc/fnc-draw-guide.js',
  'fnc/fnc-draw-raw-info.js',
  'fnc/fnc-hit.js',
  'fnc/fnc-hit-part.js',
  'fnc/fnc-list.js',
  'fnc/fnc-part-join.js',
  'fnc/fnc-raw-layer.js',
  'fnc/fnc-raw-mtx.js',
  'fnc/fnc-raw-reverse.js',
  'fnc/fnc-raw-str.js',
  'mkr/mkr-arms-info.js',
  'mkr/mkr-arms-preset-info.js',
  'mkr/mkr-drw-obj-info.js',
  'mkr/mkr-frm-bhv-set-info.js',
  'mkr/mkr-hit-info.js',
  'mkr/mkr-hit-set-info.js',
  'mkr/mkr-part-info.js',
  'mkr/mkr-part-preset-info.js',
  'mkr/mkr-raw-info.js',
  'mkr/mkr-unit-info.js',
  'mkr/frm-bhv/add-event-arms-part-act-simple-shoot.js',
  'mkr/frm-bhv/add-event-chg-color.js',
  'mkr/frm-bhv/add-event-d-rate-move.js',
  'mkr/frm-bhv/add-event-simple-move.js',
  'mkr/frm-bhv/simple-frm-bhv-set.js',
  'mkr/frm-bhv/act-hit-effect/rbx-explosion-effect.js',
  'mkr/frm-bhv/arms-part-act/simple-arms-part-act.js',
  'mkr/frm-bhv/chg-color/chg-color-effect.js',
  'mkr/frm-bhv/d-rate-move/simple-shoot.js',
  'mngr/mngr-frm-bhv-set.js',
  'mngr/mngr-hit-00.js',
  'mngr/mngr-mtx-preset-x3.js',
  'info/arms-preset-info-00.js',
  'info/calc-jrc-info-00.js',
  'info/color-set-info-list-00.js',
  'info/hit-set-info-list-00.js',
  'info/layer-raw-info-list-00.js',
  'info/mtx-preset-x3-b-set-00.js',
  'info/mtx-preset-x3-skin-part-indices-00.js',
  'info/raw-info-00.js',
  'info/simple-frm-bhv-set-info-00.js',
  'info/skin-info-00.js',
  'info/unit-preset-info-00.js',
  // 'sample/sample-arms-info.js',
  // 'sample/sample-arms-preset-info.js',
  // 'sample/sample-calc-jrc-info.js',
  // 'sample/sample-color-set-info.js',
  // 'sample/sample-frm-bhv-set-info.js',
  // 'sample/sample-part-info.js',
  // 'sample/sample-part-preset-info.js',
  // 'sample/sample-raw-info.js',
  // 'sample/sample-unit-info.js',
  // 'sample/sample-unit-preset-info.js',
  'stage-play.js'
]

function loadScript(url, checkInfo, onLoad) {
  const script = document.createElement('script')
  script.onload = () => {
    if (checkInfo.count === checkInfo.max) {
      if (onLoad) onLoad()
    }
    checkInfo.count++
  }
  // script.type = 'application/javascript'
  script.src = url
  document.head.appendChild(script)
}

function startLoad(prev, onLoad) {
  const checkInfo = {
    max: jsList.length - 1,
    count: 0
  }
  for (const url of jsList) {
    console.log(prev + url)
    loadScript(prev + url, checkInfo, onLoad)
  }
}