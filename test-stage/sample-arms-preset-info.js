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