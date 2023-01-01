module.exports = {

    botVoices: {
        1:  { name: 'david', value: 'Microsoft David Desktop' },
        2:  { name: 'james', value: 'Microsoft James' },
        3:  { name: 'linda', value: 'Microsoft Linda' },
        4:  { name: 'richard', value: 'Microsoft Richard' },
        5:  { name: 'george', value: 'Microsoft George' },
        6:  { name: 'susan', value: 'Microsoft Susan' },
        7:  { name: 'sean', value: 'Microsoft Sean' },
        8:  { name: 'heera', value: 'Microsoft Heera' },
        9:  { name: 'ravi', value: 'Microsoft Ravi' },
        10: { name: 'mark', value: 'Microsoft Mark' },
        11: { name: 'hazel', value: 'Microsoft Hazel Desktop' },
        12: { name: 'catherine', value: 'Microsoft Catherine' },
        13: { name: 'zira', value: 'Microsoft Zira Desktop' }
    },

    classColors: {
        'Paladin': '#F48CBA',
        'Death Knight': '#C41E3A',
        'Demon Hunter': '#A330C9',
        'Druid': '#FF7C0A',
        'Hunter': '#AAD372',
        'Mage': '#3FC7EB',
        'Monk': '#00FF98',
        'Priest': '#FFFFFF',
        'Rogue': '#FFF468',
        'Shaman': '#0070DD',
        'Warlock': '#8788EE',
        'Warrior': '#C69B6D'
    },

    mythisShortNames: [
        // 'SOA',
        // 'PF',
        // 'HOA',
        // 'NW',
        // 'SD',
        // 'TOP',
        // 'DOS',
        // 'MISTS',
        // 'STRT',
        // 'GMBT',
        // 'GD',
        // 'ID',
        // 'YARD',
        // 'WORK',
        // 'LOWR',
        // 'UPPR'
        'AA',
        'COS',
        'HOV',
        'RLP',
        'SBG',
        'TJS',
        'AV',
        'NO'
    ],

    mythicNames: {
      'AA': 'Academy',
      'COS': 'COS',
      'HOV': 'Halls',
      'RLP': 'Life Pools',
      'SBG': 'Shadowmoon',
      'TJS': 'Jade Temple',
      'AV': 'Azure Vault',
      'NO': 'Nokhud'
    },

    mythicTimers: {
        'DOS': 2580000,
        'DOS2': 2065000,
        'DOS3': 1549000,
        'HOA': 1860000,
        'HOA2': 1488000,
        'HOA3': 1116000,
        'MISTS': 1800000,
        'MISTS2': 1440000,
        'MISTS3': 1080000,
        'GMBT': 1800000,
        'GMBT2': 1440000,
        'GMBT3': 1080000,
        'NW': 2160000,
        'NW2': 1728000,
        'NW3': 1296000,
        'PF': 2280000,
        'PF2': 1824000,
        'PF3': 1368000,
        'STRT': 2280000,
        'STRT2': 1824000,
        'STRT3': 1368000,
        'SD': 2460000,
        'SD2': 1968000,
        'SD3': 1476000,
        'SOA': 2340000,
        'SOA2': 1872000,
        'SOA3': 1404000,
        'TOP': 2220000,
        'TOP2': 1776000,
        'TOP3': 1332000,
        'GD': 1800000,
        'GD2': 1440000,
        'GD3': 1080000,
        'ID': 1920000,
        'ID2': 1524000,
        'ID3': 1152000,
        'YARD': 2280000,
        'YARD2': 1824000,
        'YARD3': 1368000,
        'WORK': 1920000,
        'WORK2': 1524000,
        'WORK3': 1152000,
        'LOWR': 2340000,
        'LOWR2': 1872000,
        'LOWR3': 1404000,
        'UPPR': 2100000,
        'UPPR2': 1680000,
        'UPPR3': 1260000,
        'RLP': 1800000,
        'RLP2': 1440000,
        'RLP3': 1080000,
        'COS': 1800000,
        'COS2': 1440000,
        'COS3': 1080000,
        'TJS': 1800000,
        'TJS2': 1440000,
        'TJS3': 1080000,
        'AA': 1920000,
        'AA2': 1524000,
        'AA3': 1152000,
        'SBG': 1980000,
        'SBG2': 1584000,
        'SBG3': 1404000,
        'AV': 2040000,
        'AV2': 1632000,
        'AV3': 1224000,
        'HOV': 2280000,
        'HOV2': 1824000,
        'HOV3': 1368000,
        'NO': 2400000,
        'NO2': 1440000,
        'NO3': 1080000
    },

    profileNames: {
        botName: 'Slackers Quoter',
        Omee: 'Pine',
        'Whitemist (Erik)': 'Erik',
        Ollievol: 'Dictator Olyvoil',
        'Vronar': 'Bronar The Ancient',
        'HappyPills': 'Pines Willis',
        'shonto': 'Kim Jong Shonto',
        'Aralan': 'Aralan',
        'llandrel': 'Manchester Liam'
    },

    nameFilter: {
        'Mëow': 'Meow',
        'Nemethys': 'Nemesis',
        'Crøsswarriør': 'Crosswarrior',
        'Tokoyo': 'Tokyo'
    },
    
    channelNames: {
        casualSlackersDungeonGroup: 'Casual Slackers Dungeon Group',
        pinePrivateRoom:            `Pine's Private room`,
        general:                    'general',
        test:                       'test',
        scores:                     'mythic-scores'
    },

    keyFailureQuotes: function({name, key, keyCode, level, time}) {
        const index = Math.floor(Math.random() * 3);

        const quotes = [
            `${name} just depleted it's ${key} +${level} key by ${Math.floor((time - this.mythicTimers[keyCode])/1000/60)} minutes and ${Math.floor(((time - this.mythicTimers[keyCode])/1000/60 % 1) * 60)} seconds and got no score for it. What a slacker.`,
            `Useless piece of ${name} fell asleep and depleted it's ${key} +${level} key by ${Math.floor((time - this.mythicTimers[keyCode])/1000/60)} minutes and ${Math.floor(((time - this.mythicTimers[keyCode])/1000/60 % 1) * 60)} seconds and got no score for it.`,
            `${name} got distracted by Method Josh and depleted it's ${key} +${level} key by ${Math.floor((time - this.mythicTimers[keyCode])/1000/60)} minutes and ${Math.floor(((time - this.mythicTimers[keyCode])/1000/60 % 1) * 60)} seconds and got no score for it, perhaps it is happy now`,
        ]

        return quotes[index];
    },

    commonQuotes: [
        'This game is pure shit',
        'You do caare!',
        `Shit, shit, shit, Ok I'm fine!`,
        'I need mana',
        'MAAANAAAAAAAAAAA',
        `I'm not taking care of the explosives`,
        'PI me!',
        'Mana again? >.>',
        'Come on, drink your mana already ....',
        'Mana addict!',
        'I dont know why I died...',
        `Healers's fault!`,
        'Just look at the failure damage meter...!',
        'Stop being grumpy!',
        `Nono, it's fine, it's fine, oh shit i can't, crap, ouch, ouch, ok I'm good..`,
        `By the way I don't have cooldowns for this pack`,
        'Come on, my autos do more dps than you!',
        'I know my class very well!',
        `Oh fuck my life, It's shades again...`,
        'You take, no YOU take, nono you can have it, noooo, its all yours!',
        'Hey lovebirds, are you done yet?',
        'I need another coffeee',
        '3 days off work? MAW HERE I COME!!!!! ;D',
        'Kitten: I can tank this!',
        'MethodJosh would like to know you better!',
        'Spirits again?',
        `I'm usually not bringing monk healer... they lack AOE healing`,
        'Awwww okay, No more mists.... :(',
        'I has mass roots',
        'Hey that was fun, leeeets do it again!',
        `I'm lagging again!!!!`,
        `You said I'm eating whole day?`,
        `You make me sound like I'm a fucking cow eating whole day - Meow`,
        `Innervate Rhia!`,
        'Clicky Click!',
        'Aw, no more mists',
        'Aw, no more food',
        'Baby key again?',
        'Oh that is a baby key',
        'if not, I swear to God',
        'No no, not like that!',
        'I never say that',
        'Well well well, something is not quite right there',
        'I cant find shit in my bags',
        'Shonto stop',
        ` you had ONE job!`,
        `I can't do twentys`,
        'I give up',
        'Oh shit i need to purchase a flask',
        'Oh shit i have no mana',
        'I put it in but nothing happened',
        'I need letter man',
        'shonto likes cucumbers'
    ],

    rioScoreColors: [
        {
          "score": 2950,
          "rgbHex": "#ff8000",
          "rgbDecimal": 16744448,
          "rgbFloat": [
            1,
            0.5,
            0
          ],
          "rgbInteger": [
            255,
            128,
            0
          ]
        },
        {
          "score": 2880,
          "rgbHex": "#fe7e13",
          "rgbDecimal": 16678419,
          "rgbFloat": [
            1,
            0.49,
            0.07
          ],
          "rgbInteger": [
            254,
            126,
            19
          ]
        },
        {
          "score": 2860,
          "rgbHex": "#fd7c1f",
          "rgbDecimal": 16612383,
          "rgbFloat": [
            0.99,
            0.49,
            0.12
          ],
          "rgbInteger": [
            253,
            124,
            31
          ]
        },
        {
          "score": 2835,
          "rgbHex": "#fc7b28",
          "rgbDecimal": 16546600,
          "rgbFloat": [
            0.99,
            0.48,
            0.16
          ],
          "rgbInteger": [
            252,
            123,
            40
          ]
        },
        {
          "score": 2810,
          "rgbHex": "#fb792f",
          "rgbDecimal": 16480559,
          "rgbFloat": [
            0.98,
            0.47,
            0.18
          ],
          "rgbInteger": [
            251,
            121,
            47
          ]
        },
        {
          "score": 2785,
          "rgbHex": "#fa7736",
          "rgbDecimal": 16414518,
          "rgbFloat": [
            0.98,
            0.47,
            0.21
          ],
          "rgbInteger": [
            250,
            119,
            54
          ]
        },
        {
          "score": 2760,
          "rgbHex": "#f9753d",
          "rgbDecimal": 16348477,
          "rgbFloat": [
            0.98,
            0.46,
            0.24
          ],
          "rgbInteger": [
            249,
            117,
            61
          ]
        },
        {
          "score": 2740,
          "rgbHex": "#f87343",
          "rgbDecimal": 16282435,
          "rgbFloat": [
            0.97,
            0.45,
            0.26
          ],
          "rgbInteger": [
            248,
            115,
            67
          ]
        },
        {
          "score": 2715,
          "rgbHex": "#f77248",
          "rgbDecimal": 16216648,
          "rgbFloat": [
            0.97,
            0.45,
            0.28
          ],
          "rgbInteger": [
            247,
            114,
            72
          ]
        },
        {
          "score": 2690,
          "rgbHex": "#f5704e",
          "rgbDecimal": 16085070,
          "rgbFloat": [
            0.96,
            0.44,
            0.31
          ],
          "rgbInteger": [
            245,
            112,
            78
          ]
        },
        {
          "score": 2665,
          "rgbHex": "#f46e53",
          "rgbDecimal": 16019027,
          "rgbFloat": [
            0.96,
            0.43,
            0.33
          ],
          "rgbInteger": [
            244,
            110,
            83
          ]
        },
        {
          "score": 2640,
          "rgbHex": "#f36c58",
          "rgbDecimal": 15952984,
          "rgbFloat": [
            0.95,
            0.42,
            0.35
          ],
          "rgbInteger": [
            243,
            108,
            88
          ]
        },
        {
          "score": 2620,
          "rgbHex": "#f26a5d",
          "rgbDecimal": 15886941,
          "rgbFloat": [
            0.95,
            0.42,
            0.36
          ],
          "rgbInteger": [
            242,
            106,
            93
          ]
        },
        {
          "score": 2595,
          "rgbHex": "#f06862",
          "rgbDecimal": 15755362,
          "rgbFloat": [
            0.94,
            0.41,
            0.38
          ],
          "rgbInteger": [
            240,
            104,
            98
          ]
        },
        {
          "score": 2570,
          "rgbHex": "#ef6767",
          "rgbDecimal": 15689575,
          "rgbFloat": [
            0.94,
            0.4,
            0.4
          ],
          "rgbInteger": [
            239,
            103,
            103
          ]
        },
        {
          "score": 2545,
          "rgbHex": "#ed656c",
          "rgbDecimal": 15557996,
          "rgbFloat": [
            0.93,
            0.4,
            0.42
          ],
          "rgbInteger": [
            237,
            101,
            108
          ]
        },
        {
          "score": 2520,
          "rgbHex": "#ec6371",
          "rgbDecimal": 15491953,
          "rgbFloat": [
            0.93,
            0.39,
            0.44
          ],
          "rgbInteger": [
            236,
            99,
            113
          ]
        },
        {
          "score": 2500,
          "rgbHex": "#ea6176",
          "rgbDecimal": 15360374,
          "rgbFloat": [
            0.92,
            0.38,
            0.46
          ],
          "rgbInteger": [
            234,
            97,
            118
          ]
        },
        {
          "score": 2475,
          "rgbHex": "#e95f7a",
          "rgbDecimal": 15294330,
          "rgbFloat": [
            0.91,
            0.37,
            0.48
          ],
          "rgbInteger": [
            233,
            95,
            122
          ]
        },
        {
          "score": 2450,
          "rgbHex": "#e75e7f",
          "rgbDecimal": 15163007,
          "rgbFloat": [
            0.91,
            0.37,
            0.5
          ],
          "rgbInteger": [
            231,
            94,
            127
          ]
        },
        {
          "score": 2425,
          "rgbHex": "#e55c84",
          "rgbDecimal": 15031428,
          "rgbFloat": [
            0.9,
            0.36,
            0.52
          ],
          "rgbInteger": [
            229,
            92,
            132
          ]
        },
        {
          "score": 2400,
          "rgbHex": "#e45a88",
          "rgbDecimal": 14965384,
          "rgbFloat": [
            0.89,
            0.35,
            0.53
          ],
          "rgbInteger": [
            228,
            90,
            136
          ]
        },
        {
          "score": 2380,
          "rgbHex": "#e2588d",
          "rgbDecimal": 14833805,
          "rgbFloat": [
            0.89,
            0.35,
            0.55
          ],
          "rgbInteger": [
            226,
            88,
            141
          ]
        },
        {
          "score": 2355,
          "rgbHex": "#e05691",
          "rgbDecimal": 14702225,
          "rgbFloat": [
            0.88,
            0.34,
            0.57
          ],
          "rgbInteger": [
            224,
            86,
            145
          ]
        },
        {
          "score": 2330,
          "rgbHex": "#de5596",
          "rgbDecimal": 14570902,
          "rgbFloat": [
            0.87,
            0.33,
            0.59
          ],
          "rgbInteger": [
            222,
            85,
            150
          ]
        },
        {
          "score": 2305,
          "rgbHex": "#dc539b",
          "rgbDecimal": 14439323,
          "rgbFloat": [
            0.86,
            0.33,
            0.61
          ],
          "rgbInteger": [
            220,
            83,
            155
          ]
        },
        {
          "score": 2280,
          "rgbHex": "#da519f",
          "rgbDecimal": 14307743,
          "rgbFloat": [
            0.85,
            0.32,
            0.62
          ],
          "rgbInteger": [
            218,
            81,
            159
          ]
        },
        {
          "score": 2260,
          "rgbHex": "#d74fa4",
          "rgbDecimal": 14110628,
          "rgbFloat": [
            0.84,
            0.31,
            0.64
          ],
          "rgbInteger": [
            215,
            79,
            164
          ]
        },
        {
          "score": 2235,
          "rgbHex": "#d54da8",
          "rgbDecimal": 13979048,
          "rgbFloat": [
            0.84,
            0.3,
            0.66
          ],
          "rgbInteger": [
            213,
            77,
            168
          ]
        },
        {
          "score": 2210,
          "rgbHex": "#d34cad",
          "rgbDecimal": 13847725,
          "rgbFloat": [
            0.83,
            0.3,
            0.68
          ],
          "rgbInteger": [
            211,
            76,
            173
          ]
        },
        {
          "score": 2185,
          "rgbHex": "#d04ab2",
          "rgbDecimal": 13650610,
          "rgbFloat": [
            0.82,
            0.29,
            0.7
          ],
          "rgbInteger": [
            208,
            74,
            178
          ]
        },
        {
          "score": 2160,
          "rgbHex": "#cd48b6",
          "rgbDecimal": 13453494,
          "rgbFloat": [
            0.8,
            0.28,
            0.71
          ],
          "rgbInteger": [
            205,
            72,
            182
          ]
        },
        {
          "score": 2140,
          "rgbHex": "#cb46bb",
          "rgbDecimal": 13321915,
          "rgbFloat": [
            0.8,
            0.27,
            0.73
          ],
          "rgbInteger": [
            203,
            70,
            187
          ]
        },
        {
          "score": 2115,
          "rgbHex": "#c845c0",
          "rgbDecimal": 13125056,
          "rgbFloat": [
            0.78,
            0.27,
            0.75
          ],
          "rgbInteger": [
            200,
            69,
            192
          ]
        },
        {
          "score": 2090,
          "rgbHex": "#c543c4",
          "rgbDecimal": 12927940,
          "rgbFloat": [
            0.77,
            0.26,
            0.77
          ],
          "rgbInteger": [
            197,
            67,
            196
          ]
        },
        {
          "score": 2065,
          "rgbHex": "#c241c9",
          "rgbDecimal": 12730825,
          "rgbFloat": [
            0.76,
            0.25,
            0.79
          ],
          "rgbInteger": [
            194,
            65,
            201
          ]
        },
        {
          "score": 2040,
          "rgbHex": "#bf40cd",
          "rgbDecimal": 12533965,
          "rgbFloat": [
            0.75,
            0.25,
            0.8
          ],
          "rgbInteger": [
            191,
            64,
            205
          ]
        },
        {
          "score": 2020,
          "rgbHex": "#bb3ed2",
          "rgbDecimal": 12271314,
          "rgbFloat": [
            0.73,
            0.24,
            0.82
          ],
          "rgbInteger": [
            187,
            62,
            210
          ]
        },
        {
          "score": 1995,
          "rgbHex": "#b83dd7",
          "rgbDecimal": 12074455,
          "rgbFloat": [
            0.72,
            0.24,
            0.84
          ],
          "rgbInteger": [
            184,
            61,
            215
          ]
        },
        {
          "score": 1970,
          "rgbHex": "#b43bdb",
          "rgbDecimal": 11811803,
          "rgbFloat": [
            0.71,
            0.23,
            0.86
          ],
          "rgbInteger": [
            180,
            59,
            219
          ]
        },
        {
          "score": 1945,
          "rgbHex": "#b039e0",
          "rgbDecimal": 11549152,
          "rgbFloat": [
            0.69,
            0.22,
            0.88
          ],
          "rgbInteger": [
            176,
            57,
            224
          ]
        },
        {
          "score": 1920,
          "rgbHex": "#ac38e5",
          "rgbDecimal": 11286757,
          "rgbFloat": [
            0.67,
            0.22,
            0.9
          ],
          "rgbInteger": [
            172,
            56,
            229
          ]
        },
        {
          "score": 1900,
          "rgbHex": "#a836e9",
          "rgbDecimal": 11024105,
          "rgbFloat": [
            0.66,
            0.21,
            0.91
          ],
          "rgbInteger": [
            168,
            54,
            233
          ]
        },
        {
          "score": 1875,
          "rgbHex": "#a335ee",
          "rgbDecimal": 10696174,
          "rgbFloat": [
            0.64,
            0.21,
            0.93
          ],
          "rgbInteger": [
            163,
            53,
            238
          ]
        },
        {
          "score": 1830,
          "rgbHex": "#9f3aed",
          "rgbDecimal": 10435309,
          "rgbFloat": [
            0.62,
            0.23,
            0.93
          ],
          "rgbInteger": [
            159,
            58,
            237
          ]
        },
        {
          "score": 1805,
          "rgbHex": "#9a3fec",
          "rgbDecimal": 10108908,
          "rgbFloat": [
            0.6,
            0.25,
            0.93
          ],
          "rgbInteger": [
            154,
            63,
            236
          ]
        },
        {
          "score": 1780,
          "rgbHex": "#9544eb",
          "rgbDecimal": 9782507,
          "rgbFloat": [
            0.58,
            0.27,
            0.92
          ],
          "rgbInteger": [
            149,
            68,
            235
          ]
        },
        {
          "score": 1760,
          "rgbHex": "#9148eb",
          "rgbDecimal": 9521387,
          "rgbFloat": [
            0.57,
            0.28,
            0.92
          ],
          "rgbInteger": [
            145,
            72,
            235
          ]
        },
        {
          "score": 1735,
          "rgbHex": "#8c4bea",
          "rgbDecimal": 9194474,
          "rgbFloat": [
            0.55,
            0.29,
            0.92
          ],
          "rgbInteger": [
            140,
            75,
            234
          ]
        },
        {
          "score": 1710,
          "rgbHex": "#874fe9",
          "rgbDecimal": 8867817,
          "rgbFloat": [
            0.53,
            0.31,
            0.91
          ],
          "rgbInteger": [
            135,
            79,
            233
          ]
        },
        {
          "score": 1685,
          "rgbHex": "#8252e8",
          "rgbDecimal": 8540904,
          "rgbFloat": [
            0.51,
            0.32,
            0.91
          ],
          "rgbInteger": [
            130,
            82,
            232
          ]
        },
        {
          "score": 1660,
          "rgbHex": "#7c55e7",
          "rgbDecimal": 8148455,
          "rgbFloat": [
            0.49,
            0.33,
            0.91
          ],
          "rgbInteger": [
            124,
            85,
            231
          ]
        },
        {
          "score": 1640,
          "rgbHex": "#7758e6",
          "rgbDecimal": 7821542,
          "rgbFloat": [
            0.47,
            0.35,
            0.9
          ],
          "rgbInteger": [
            119,
            88,
            230
          ]
        },
        {
          "score": 1615,
          "rgbHex": "#715be5",
          "rgbDecimal": 7429093,
          "rgbFloat": [
            0.44,
            0.36,
            0.9
          ],
          "rgbInteger": [
            113,
            91,
            229
          ]
        },
        {
          "score": 1590,
          "rgbHex": "#6b5de5",
          "rgbDecimal": 7036389,
          "rgbFloat": [
            0.42,
            0.36,
            0.9
          ],
          "rgbInteger": [
            107,
            93,
            229
          ]
        },
        {
          "score": 1565,
          "rgbHex": "#6560e4",
          "rgbDecimal": 6643940,
          "rgbFloat": [
            0.4,
            0.38,
            0.89
          ],
          "rgbInteger": [
            101,
            96,
            228
          ]
        },
        {
          "score": 1540,
          "rgbHex": "#5e62e3",
          "rgbDecimal": 6185699,
          "rgbFloat": [
            0.37,
            0.38,
            0.89
          ],
          "rgbInteger": [
            94,
            98,
            227
          ]
        },
        {
          "score": 1520,
          "rgbHex": "#5764e2",
          "rgbDecimal": 5727458,
          "rgbFloat": [
            0.34,
            0.39,
            0.89
          ],
          "rgbInteger": [
            87,
            100,
            226
          ]
        },
        {
          "score": 1495,
          "rgbHex": "#4f67e1",
          "rgbDecimal": 5203937,
          "rgbFloat": [
            0.31,
            0.4,
            0.88
          ],
          "rgbInteger": [
            79,
            103,
            225
          ]
        },
        {
          "score": 1470,
          "rgbHex": "#4769e0",
          "rgbDecimal": 4680160,
          "rgbFloat": [
            0.28,
            0.41,
            0.88
          ],
          "rgbInteger": [
            71,
            105,
            224
          ]
        },
        {
          "score": 1445,
          "rgbHex": "#3d6be0",
          "rgbDecimal": 4025312,
          "rgbFloat": [
            0.24,
            0.42,
            0.88
          ],
          "rgbInteger": [
            61,
            107,
            224
          ]
        },
        {
          "score": 1420,
          "rgbHex": "#316cdf",
          "rgbDecimal": 3239135,
          "rgbFloat": [
            0.19,
            0.42,
            0.87
          ],
          "rgbInteger": [
            49,
            108,
            223
          ]
        },
        {
          "score": 1400,
          "rgbHex": "#216ede",
          "rgbDecimal": 2191070,
          "rgbFloat": [
            0.13,
            0.43,
            0.87
          ],
          "rgbInteger": [
            33,
            110,
            222
          ]
        },
        {
          "score": 1375,
          "rgbHex": "#0070dd",
          "rgbDecimal": 28893,
          "rgbFloat": [
            0,
            0.44,
            0.87
          ],
          "rgbInteger": [
            0,
            112,
            221
          ]
        },
        {
          "score": 1320,
          "rgbHex": "#1e74d9",
          "rgbDecimal": 1995993,
          "rgbFloat": [
            0.12,
            0.45,
            0.85
          ],
          "rgbInteger": [
            30,
            116,
            217
          ]
        },
        {
          "score": 1295,
          "rgbHex": "#2d78d4",
          "rgbDecimal": 2980052,
          "rgbFloat": [
            0.18,
            0.47,
            0.83
          ],
          "rgbInteger": [
            45,
            120,
            212
          ]
        },
        {
          "score": 1270,
          "rgbHex": "#367dd0",
          "rgbDecimal": 3571152,
          "rgbFloat": [
            0.21,
            0.49,
            0.82
          ],
          "rgbInteger": [
            54,
            125,
            208
          ]
        },
        {
          "score": 1245,
          "rgbHex": "#3e81cb",
          "rgbDecimal": 4096459,
          "rgbFloat": [
            0.24,
            0.51,
            0.8
          ],
          "rgbInteger": [
            62,
            129,
            203
          ]
        },
        {
          "score": 1220,
          "rgbHex": "#4485c6",
          "rgbDecimal": 4490694,
          "rgbFloat": [
            0.27,
            0.52,
            0.78
          ],
          "rgbInteger": [
            68,
            133,
            198
          ]
        },
        {
          "score": 1200,
          "rgbHex": "#4a8ac2",
          "rgbDecimal": 4885186,
          "rgbFloat": [
            0.29,
            0.54,
            0.76
          ],
          "rgbInteger": [
            74,
            138,
            194
          ]
        },
        {
          "score": 1175,
          "rgbHex": "#4e8ebd",
          "rgbDecimal": 5148349,
          "rgbFloat": [
            0.31,
            0.56,
            0.74
          ],
          "rgbInteger": [
            78,
            142,
            189
          ]
        },
        {
          "score": 1150,
          "rgbHex": "#5292b9",
          "rgbDecimal": 5411513,
          "rgbFloat": [
            0.32,
            0.57,
            0.73
          ],
          "rgbInteger": [
            82,
            146,
            185
          ]
        },
        {
          "score": 1125,
          "rgbHex": "#5597b4",
          "rgbDecimal": 5609396,
          "rgbFloat": [
            0.33,
            0.59,
            0.71
          ],
          "rgbInteger": [
            85,
            151,
            180
          ]
        },
        {
          "score": 1100,
          "rgbHex": "#589baf",
          "rgbDecimal": 5807023,
          "rgbFloat": [
            0.35,
            0.61,
            0.69
          ],
          "rgbInteger": [
            88,
            155,
            175
          ]
        },
        {
          "score": 1080,
          "rgbHex": "#5aa0ab",
          "rgbDecimal": 5939371,
          "rgbFloat": [
            0.35,
            0.63,
            0.67
          ],
          "rgbInteger": [
            90,
            160,
            171
          ]
        },
        {
          "score": 1055,
          "rgbHex": "#5ca4a6",
          "rgbDecimal": 6071462,
          "rgbFloat": [
            0.36,
            0.64,
            0.65
          ],
          "rgbInteger": [
            92,
            164,
            166
          ]
        },
        {
          "score": 1030,
          "rgbHex": "#5da8a1",
          "rgbDecimal": 6138017,
          "rgbFloat": [
            0.36,
            0.66,
            0.63
          ],
          "rgbInteger": [
            93,
            168,
            161
          ]
        },
        {
          "score": 1005,
          "rgbHex": "#5ead9c",
          "rgbDecimal": 6204828,
          "rgbFloat": [
            0.37,
            0.68,
            0.61
          ],
          "rgbInteger": [
            94,
            173,
            156
          ]
        },
        {
          "score": 980,
          "rgbHex": "#5fb197",
          "rgbDecimal": 6271383,
          "rgbFloat": [
            0.37,
            0.69,
            0.59
          ],
          "rgbInteger": [
            95,
            177,
            151
          ]
        },
        {
          "score": 960,
          "rgbHex": "#5fb692",
          "rgbDecimal": 6272658,
          "rgbFloat": [
            0.37,
            0.71,
            0.57
          ],
          "rgbInteger": [
            95,
            182,
            146
          ]
        },
        {
          "score": 935,
          "rgbHex": "#5fba8d",
          "rgbDecimal": 6273677,
          "rgbFloat": [
            0.37,
            0.73,
            0.55
          ],
          "rgbInteger": [
            95,
            186,
            141
          ]
        },
        {
          "score": 910,
          "rgbHex": "#5fbf88",
          "rgbDecimal": 6274952,
          "rgbFloat": [
            0.37,
            0.75,
            0.53
          ],
          "rgbInteger": [
            95,
            191,
            136
          ]
        },
        {
          "score": 885,
          "rgbHex": "#5fc382",
          "rgbDecimal": 6275970,
          "rgbFloat": [
            0.37,
            0.76,
            0.51
          ],
          "rgbInteger": [
            95,
            195,
            130
          ]
        },
        {
          "score": 860,
          "rgbHex": "#5ec87d",
          "rgbDecimal": 6211709,
          "rgbFloat": [
            0.37,
            0.78,
            0.49
          ],
          "rgbInteger": [
            94,
            200,
            125
          ]
        },
        {
          "score": 840,
          "rgbHex": "#5ccc77",
          "rgbDecimal": 6081655,
          "rgbFloat": [
            0.36,
            0.8,
            0.47
          ],
          "rgbInteger": [
            92,
            204,
            119
          ]
        },
        {
          "score": 815,
          "rgbHex": "#5ad171",
          "rgbDecimal": 5951857,
          "rgbFloat": [
            0.35,
            0.82,
            0.44
          ],
          "rgbInteger": [
            90,
            209,
            113
          ]
        },
        {
          "score": 790,
          "rgbHex": "#58d56b",
          "rgbDecimal": 5821803,
          "rgbFloat": [
            0.35,
            0.84,
            0.42
          ],
          "rgbInteger": [
            88,
            213,
            107
          ]
        },
        {
          "score": 765,
          "rgbHex": "#56da64",
          "rgbDecimal": 5692004,
          "rgbFloat": [
            0.34,
            0.85,
            0.39
          ],
          "rgbInteger": [
            86,
            218,
            100
          ]
        },
        {
          "score": 740,
          "rgbHex": "#53df5e",
          "rgbDecimal": 5496670,
          "rgbFloat": [
            0.33,
            0.87,
            0.37
          ],
          "rgbInteger": [
            83,
            223,
            94
          ]
        },
        {
          "score": 720,
          "rgbHex": "#4fe356",
          "rgbDecimal": 5235542,
          "rgbFloat": [
            0.31,
            0.89,
            0.34
          ],
          "rgbInteger": [
            79,
            227,
            86
          ]
        },
        {
          "score": 695,
          "rgbHex": "#4ae84e",
          "rgbDecimal": 4909134,
          "rgbFloat": [
            0.29,
            0.91,
            0.31
          ],
          "rgbInteger": [
            74,
            232,
            78
          ]
        },
        {
          "score": 670,
          "rgbHex": "#45ec46",
          "rgbDecimal": 4582470,
          "rgbFloat": [
            0.27,
            0.93,
            0.27
          ],
          "rgbInteger": [
            69,
            236,
            70
          ]
        },
        {
          "score": 645,
          "rgbHex": "#3ff13c",
          "rgbDecimal": 4190524,
          "rgbFloat": [
            0.25,
            0.95,
            0.24
          ],
          "rgbInteger": [
            63,
            241,
            60
          ]
        },
        {
          "score": 620,
          "rgbHex": "#37f630",
          "rgbDecimal": 3667504,
          "rgbFloat": [
            0.22,
            0.96,
            0.19
          ],
          "rgbInteger": [
            55,
            246,
            48
          ]
        },
        {
          "score": 600,
          "rgbHex": "#2dfa20",
          "rgbDecimal": 3013152,
          "rgbFloat": [
            0.18,
            0.98,
            0.13
          ],
          "rgbInteger": [
            45,
            250,
            32
          ]
        },
        {
          "score": 575,
          "rgbHex": "#1eff00",
          "rgbDecimal": 2031360,
          "rgbFloat": [
            0.12,
            1,
            0
          ],
          "rgbInteger": [
            30,
            255,
            0
          ]
        },
        {
          "score": 550,
          "rgbHex": "#48ff2e",
          "rgbDecimal": 4783918,
          "rgbFloat": [
            0.28,
            1,
            0.18
          ],
          "rgbInteger": [
            72,
            255,
            46
          ]
        },
        {
          "score": 525,
          "rgbHex": "#60ff45",
          "rgbDecimal": 6356805,
          "rgbFloat": [
            0.38,
            1,
            0.27
          ],
          "rgbInteger": [
            96,
            255,
            69
          ]
        },
        {
          "score": 500,
          "rgbHex": "#74ff57",
          "rgbDecimal": 7667543,
          "rgbFloat": [
            0.45,
            1,
            0.34
          ],
          "rgbInteger": [
            116,
            255,
            87
          ]
        },
        {
          "score": 475,
          "rgbHex": "#84ff68",
          "rgbDecimal": 8716136,
          "rgbFloat": [
            0.52,
            1,
            0.41
          ],
          "rgbInteger": [
            132,
            255,
            104
          ]
        },
        {
          "score": 450,
          "rgbHex": "#93ff77",
          "rgbDecimal": 9699191,
          "rgbFloat": [
            0.58,
            1,
            0.47
          ],
          "rgbInteger": [
            147,
            255,
            119
          ]
        },
        {
          "score": 425,
          "rgbHex": "#a0ff85",
          "rgbDecimal": 10551173,
          "rgbFloat": [
            0.63,
            1,
            0.52
          ],
          "rgbInteger": [
            160,
            255,
            133
          ]
        },
        {
          "score": 400,
          "rgbHex": "#adff94",
          "rgbDecimal": 11403156,
          "rgbFloat": [
            0.68,
            1,
            0.58
          ],
          "rgbInteger": [
            173,
            255,
            148
          ]
        },
        {
          "score": 375,
          "rgbHex": "#b9ffa1",
          "rgbDecimal": 12189601,
          "rgbFloat": [
            0.73,
            1,
            0.63
          ],
          "rgbInteger": [
            185,
            255,
            161
          ]
        },
        {
          "score": 350,
          "rgbHex": "#c4ffaf",
          "rgbDecimal": 12910511,
          "rgbFloat": [
            0.77,
            1,
            0.69
          ],
          "rgbInteger": [
            196,
            255,
            175
          ]
        },
        {
          "score": 325,
          "rgbHex": "#cfffbc",
          "rgbDecimal": 13631420,
          "rgbFloat": [
            0.81,
            1,
            0.74
          ],
          "rgbInteger": [
            207,
            255,
            188
          ]
        },
        {
          "score": 300,
          "rgbHex": "#d9ffca",
          "rgbDecimal": 14286794,
          "rgbFloat": [
            0.85,
            1,
            0.79
          ],
          "rgbInteger": [
            217,
            255,
            202
          ]
        },
        {
          "score": 275,
          "rgbHex": "#e3ffd7",
          "rgbDecimal": 14942167,
          "rgbFloat": [
            0.89,
            1,
            0.84
          ],
          "rgbInteger": [
            227,
            255,
            215
          ]
        },
        {
          "score": 250,
          "rgbHex": "#edffe4",
          "rgbDecimal": 15597540,
          "rgbFloat": [
            0.93,
            1,
            0.89
          ],
          "rgbInteger": [
            237,
            255,
            228
          ]
        },
        {
          "score": 225,
          "rgbHex": "#f6fff2",
          "rgbDecimal": 16187378,
          "rgbFloat": [
            0.96,
            1,
            0.95
          ],
          "rgbInteger": [
            246,
            255,
            242
          ]
        },
        {
          "score": 200,
          "rgbHex": "#ffffff",
          "rgbDecimal": 16777215,
          "rgbFloat": [
            1,
            1,
            1
          ],
          "rgbInteger": [
            255,
            255,
            255
          ]
        }
      ],

    getScoreColorTier: function(score) {
        const entity = this.rioScoreColors.find(a => a.score < score) || this.rioScoreColors[this.rioScoreColors.length - 1];
        return entity.rgbHex;
    }
}