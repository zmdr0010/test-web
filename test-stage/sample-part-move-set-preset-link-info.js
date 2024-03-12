const partMoveSetPresetLinkInfoSampleList = [
  {
    uCode: 'sample-part-move-set-preset-info-sample-idle-t-b-l',
    targetType: 'tCode', // tCode / uCode / direct-set
    target: 'l',
    moveSetPresetLink: 'sample-idle-t-b' // moveSetPresetInfo uCode
  },
  {
    uCode: 'sample-part-move-set-preset-info-sample-idle-t-b-r',
    targetType: 'tCode', // tCode / uCode / direct-set
    target: 'r',
    moveSetPresetLink: 'sample-idle-t-b' // moveSetPresetInfo uCode
  },
  {
    uCode: 'sample-part-move-set-preset-info-sample-unit-move-pattern-00',
    targetType: 'tCode', // tCode / uCode / direct-set
    target: 'main',
    moveSetPresetLink: 'sample-unit-move-pattern-00' // moveSetPresetInfo uCode
  }
]

const partMoveSetPresetLinkInfoSampleShootF = {
  uCode: 'sample-part-move-set-preset-info-sample-shoot-f',
  targetType: 'direct-set',
  target: 'shoot',
  moveSetPresetLink: 'sample-f-shoot'
}

const partMoveSetPresetLinkInfoSampleShootLR = {
  uCode: 'sample-part-move-set-preset-info-sample-shoot-l-r',
  targetType: 'direct-set',
  target: 'shoot',
  moveSetPresetLink: 'sample-l-r-shoot'
}

const partMoveSetPresetLinkInfoSampleMovePattern00 = {
  uCode: 'sample-part-move-set-preset-info-sample-move-pattern-00',
  targetType: 'direct-set',
  target: 'shoot',
  moveSetPresetLink: 'sample-unit-move-pattern-00'
}

const partMoveSetPresetLinkInfoSampleList01 = [
  partMoveSetPresetLinkInfoSampleShootF, partMoveSetPresetLinkInfoSampleShootLR,
  partMoveSetPresetLinkInfoSampleMovePattern00
]