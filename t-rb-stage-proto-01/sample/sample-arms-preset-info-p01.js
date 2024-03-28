const sampleArmsPresetInfoShootF = {
  uCode: 'sample-temp-player-arms-f-shoot',
  tCode: 'shoot',
  targetType: 'tCode', // tCode / uCode / direct-set
  target: 'f',
  actInfo: {
    type: 'cycle', // cycle / ui / count / etc...
    frame: 20, // frame--
    frameMax: 20,
    count: 0,
    countMax: 0
  },
  actPartSetList: [
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: 0, dc: 0 }
    },
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: -4, dc: 0 }
    },
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: 4, dc: 0 }
    }
  ]
}

const sampleArmsPresetInfoShootL = {
  uCode: 'sample-temp-player-arms-l-shoot',
  tCode: 'shoot',
  targetType: 'tCode', // tCode / uCode / direct-set
  target: 'l',
  actInfo: {
    type: 'cycle', // cycle / ui / count / etc...
    frame: 20, // frame--
    frameMax: 20,
    count: 0,
    countMax: 0
  },
  actPartSetList: [
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: -8, dc: 1 }
    },
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: -12, dc: 1 }
    },
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: -4, dc: 1 }
    }
  ]
}

const sampleArmsPresetInfoShootR = {
  uCode: 'sample-temp-player-arms-r-shoot',
  tCode: 'shoot',
  targetType: 'tCode', // tCode / uCode / direct-set
  target: 'r',
  actInfo: {
    type: 'cycle', // cycle / ui / count / etc...
    frame: 20, // frame--
    frameMax: 20,
    count: 0,
    countMax: 0
  },
  actPartSetList: [
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: 7, dc: 1 }
    },
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: 11, dc: 1 }
    },
    {
      partPresetInfo: { drwObjInfo: { uCode: '20240122143329-mis-00-00' } },
      dRcInfo: { dr: 3, dc: 1 }
    }
  ]
}

function createSimpleArmsPresetInfoByPreset(preset, tCode, hitType, hitTarget, reverseInfo=null) {
  const actPartSetList = []

  for (const act of preset.actPartSetList) {
    const partPresetInfo = createSimplePartPresetInfoP01(act.partPresetInfo.drwObjInfo.uCode,
      'act', 0, -1, 'sample-color-set-info-12',
      'normal', 'raw')
    partPresetInfo.hitLink = 'hit-link-info-obj-area'

    if (tCode === 'f') {
      partPresetInfo.movePresetInfo = createMoveSetInfoFromPresetInfo(
        createSimpleMoveSetSampleShoot([0,-1], 30, 50))
    }
    if (tCode === 'l') {
      partPresetInfo.movePresetInfo = createMoveSetInfoFromPresetInfo(
        createSimpleMoveSetSampleShoot([0,-1], 30, 40))
    }
    if (tCode === 'r') {
      partPresetInfo.movePresetInfo = createMoveSetInfoFromPresetInfo(
        createSimpleMoveSetSampleShoot([0,-1], 30, 40))
    }
    if (tCode === 'f-e') {
      partPresetInfo.movePresetInfo = createMoveSetInfoFromPresetInfo(
        createSimpleMoveSetSampleShoot([0,1], 30, 50))
    }
    if (tCode === 'l-e') {
      partPresetInfo.movePresetInfo = createMoveSetInfoFromPresetInfo(
        createSimpleMoveSetSampleShoot([0,1], 30, 40))
    }
    if (tCode === 'r-e') {
      partPresetInfo.movePresetInfo = createMoveSetInfoFromPresetInfo(
        createSimpleMoveSetSampleShoot([0,1], 30, 40))
    }

    let dr = act.dRcInfo.dr
    let dc = act.dRcInfo.dc

    actPartSetList.push({
      partPresetInfo: { partInfo: partPresetInfo },
      dRcInfo: { dr: dr, dc: dc }
    })
  }

  return {
    uCode: `arms-preset-info-${generateSimpleUCode()}`,
    tCode: preset.tCode,
    targetType: preset.targetType,
    target: preset.target,
    actInfo: {
      type: preset.actInfo.type,
      frame: preset.actInfo.frame,
      frameMax: preset.actInfo.frameMax,
      count: preset.actInfo.count,
      countMax: preset.actInfo.countMax,
      reverseInfo: reverseInfo,
      hitType: hitType,
      hitTarget: hitTarget
    },
    actPartSetList: actPartSetList
  }
}

const tempPlayerArmsPresetInfoSampleList = [
    {
      uCode: 'sample-temp-player-arms-f-shoot',
      tCode: 'shoot',
      targetType: 'tCode', // tCode / uCode / direct-set
      target: 'f',
      actInfo: {
        type: 'cycle', // cycle / ui / count / etc...
        frame: 20, // frame--
        frameMax: 20,
        count: 0,
        countMax: 0
      },
      actPartSetList: [
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-f', // partPresetInfo uCode
          dRcInfo: {
            dr: 0,
            dc: 0
          }
        },
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-f', // partPresetInfo uCode
          dRcInfo: {
            // dr: -4,
            dr: -4,
            dc: 0
          }
        },
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-f', // partPresetInfo uCode
          dRcInfo: {
            // dr: 4,
            dr: 4,
            dc: 0
          }
        }
      ]
    },
    {
      uCode: 'sample-temp-player-arms-l-shoot',
      tCode: 'shoot',
      targetType: 'tCode', // tCode / uCode / direct-set
      target: 'l',
      actInfo: {
        type: 'cycle', // cycle / ui / count / etc...
        frame: 20, // frame--
        frameMax: 20,
        count: 0,
        countMax: 0
      },
      actPartSetList: [
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r', // partPresetInfo uCode
          dRcInfo: {
            // dr: -12,
            // dc: 4
            dr: -8,
            dc: 1
          }
        },
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r', // partPresetInfo uCode
          dRcInfo: {
            // dr: -16,
            // dc: 4
            dr: -12,
            dc: 1
          }
        },
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r', // partPresetInfo uCode
          dRcInfo: {
            // dr: -8,
            // dc: 4
            dr: -4,
            dc: 1
          }
        }
      ]
    },
    {
      uCode: 'sample-temp-player-arms-r-shoot',
      tCode: 'shoot',
      targetType: 'tCode', // tCode / uCode / direct-set
      target: 'r',
      actInfo: {
        type: 'cycle', // cycle / ui / count / etc...
        frame: 20, // frame--
        frameMax: 20,
        count: 0,
        countMax: 0
      },
      actPartSetList: [
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r', // partPresetInfo uCode
          dRcInfo: {
            // dr: 12,
            // dc: 4
            dr: 7,
            dc: 1
          }
        },
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r', // partPresetInfo uCode
          dRcInfo: {
            // dr: 16,
            // dc: 4
            dr: 11,
            dc: 1
          }
        },
        {
          partPresetLink: 'part-preset-info-20240122143329-mis-00-02-shoot-l-r', // partPresetInfo uCode
          dRcInfo: {
            // dr: 8,
            // dc: 4
            dr: 3,
            dc: 1
          }
        }
      ]
    }
    ]