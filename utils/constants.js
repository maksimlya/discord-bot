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
        'SOA',
        'PF',
        'HOA',
        'NW',
        'SD',
        'TOP',
        'DOS',
        'MISTS',
        'STRT',
        'GMBT'
    ],

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
        'TOP3': 1332000
    },

    profileNames: {
        botName: 'Slackers Quoter',
        Omee: 'Pine',
        'Whitemist (Erik)': 'Erik',
        Ollievol: 'Olyvoil',
        'Vronar': 'Bronar'
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
        "score": 3675,
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
        "score": 3610,
        "rgbHex": "#fe7e14",
        "rgbDecimal": 16678420,
        "rgbFloat": [
          1,
          0.49,
          0.08
        ],
        "rgbInteger": [
          254,
          126,
          20
        ]
      },
      {
        "score": 3585,
        "rgbHex": "#fd7c20",
        "rgbDecimal": 16612384,
        "rgbFloat": [
          0.99,
          0.49,
          0.13
        ],
        "rgbInteger": [
          253,
          124,
          32
        ]
      },
      {
        "score": 3560,
        "rgbHex": "#fc7a29",
        "rgbDecimal": 16546345,
        "rgbFloat": [
          0.99,
          0.48,
          0.16
        ],
        "rgbInteger": [
          252,
          122,
          41
        ]
      },
      {
        "score": 3535,
        "rgbHex": "#fb7831",
        "rgbDecimal": 16480305,
        "rgbFloat": [
          0.98,
          0.47,
          0.19
        ],
        "rgbInteger": [
          251,
          120,
          49
        ]
      },
      {
        "score": 3515,
        "rgbHex": "#fa7738",
        "rgbDecimal": 16414520,
        "rgbFloat": [
          0.98,
          0.47,
          0.22
        ],
        "rgbInteger": [
          250,
          119,
          56
        ]
      },
      {
        "score": 3490,
        "rgbHex": "#f9753e",
        "rgbDecimal": 16348478,
        "rgbFloat": [
          0.98,
          0.46,
          0.24
        ],
        "rgbInteger": [
          249,
          117,
          62
        ]
      },
      {
        "score": 3465,
        "rgbHex": "#f77345",
        "rgbDecimal": 16216901,
        "rgbFloat": [
          0.97,
          0.45,
          0.27
        ],
        "rgbInteger": [
          247,
          115,
          69
        ]
      },
      {
        "score": 3440,
        "rgbHex": "#f6714a",
        "rgbDecimal": 16150858,
        "rgbFloat": [
          0.96,
          0.44,
          0.29
        ],
        "rgbInteger": [
          246,
          113,
          74
        ]
      },
      {
        "score": 3415,
        "rgbHex": "#f56f50",
        "rgbDecimal": 16084816,
        "rgbFloat": [
          0.96,
          0.44,
          0.31
        ],
        "rgbInteger": [
          245,
          111,
          80
        ]
      },
      {
        "score": 3395,
        "rgbHex": "#f46d56",
        "rgbDecimal": 16018774,
        "rgbFloat": [
          0.96,
          0.43,
          0.34
        ],
        "rgbInteger": [
          244,
          109,
          86
        ]
      },
      {
        "score": 3370,
        "rgbHex": "#f26b5b",
        "rgbDecimal": 15887195,
        "rgbFloat": [
          0.95,
          0.42,
          0.36
        ],
        "rgbInteger": [
          242,
          107,
          91
        ]
      },
      {
        "score": 3345,
        "rgbHex": "#f16960",
        "rgbDecimal": 15821152,
        "rgbFloat": [
          0.95,
          0.41,
          0.38
        ],
        "rgbInteger": [
          241,
          105,
          96
        ]
      },
      {
        "score": 3320,
        "rgbHex": "#ef6765",
        "rgbDecimal": 15689573,
        "rgbFloat": [
          0.94,
          0.4,
          0.4
        ],
        "rgbInteger": [
          239,
          103,
          101
        ]
      },
      {
        "score": 3295,
        "rgbHex": "#ee656a",
        "rgbDecimal": 15623530,
        "rgbFloat": [
          0.93,
          0.4,
          0.42
        ],
        "rgbInteger": [
          238,
          101,
          106
        ]
      },
      {
        "score": 3275,
        "rgbHex": "#ec6370",
        "rgbDecimal": 15491952,
        "rgbFloat": [
          0.93,
          0.39,
          0.44
        ],
        "rgbInteger": [
          236,
          99,
          112
        ]
      },
      {
        "score": 3250,
        "rgbHex": "#eb6275",
        "rgbDecimal": 15426165,
        "rgbFloat": [
          0.92,
          0.38,
          0.46
        ],
        "rgbInteger": [
          235,
          98,
          117
        ]
      },
      {
        "score": 3225,
        "rgbHex": "#e96079",
        "rgbDecimal": 15294585,
        "rgbFloat": [
          0.91,
          0.38,
          0.47
        ],
        "rgbInteger": [
          233,
          96,
          121
        ]
      },
      {
        "score": 3200,
        "rgbHex": "#e75e7e",
        "rgbDecimal": 15163006,
        "rgbFloat": [
          0.91,
          0.37,
          0.49
        ],
        "rgbInteger": [
          231,
          94,
          126
        ]
      },
      {
        "score": 3175,
        "rgbHex": "#e55c83",
        "rgbDecimal": 15031427,
        "rgbFloat": [
          0.9,
          0.36,
          0.51
        ],
        "rgbInteger": [
          229,
          92,
          131
        ]
      },
      {
        "score": 3155,
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
        "score": 3130,
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
        "score": 3105,
        "rgbHex": "#e05692",
        "rgbDecimal": 14702226,
        "rgbFloat": [
          0.88,
          0.34,
          0.57
        ],
        "rgbInteger": [
          224,
          86,
          146
        ]
      },
      {
        "score": 3080,
        "rgbHex": "#de5497",
        "rgbDecimal": 14570647,
        "rgbFloat": [
          0.87,
          0.33,
          0.59
        ],
        "rgbInteger": [
          222,
          84,
          151
        ]
      },
      {
        "score": 3055,
        "rgbHex": "#db529b",
        "rgbDecimal": 14373531,
        "rgbFloat": [
          0.86,
          0.32,
          0.61
        ],
        "rgbInteger": [
          219,
          82,
          155
        ]
      },
      {
        "score": 3035,
        "rgbHex": "#d951a0",
        "rgbDecimal": 14242208,
        "rgbFloat": [
          0.85,
          0.32,
          0.63
        ],
        "rgbInteger": [
          217,
          81,
          160
        ]
      },
      {
        "score": 3010,
        "rgbHex": "#d74fa5",
        "rgbDecimal": 14110629,
        "rgbFloat": [
          0.84,
          0.31,
          0.65
        ],
        "rgbInteger": [
          215,
          79,
          165
        ]
      },
      {
        "score": 2985,
        "rgbHex": "#d44daa",
        "rgbDecimal": 13913514,
        "rgbFloat": [
          0.83,
          0.3,
          0.67
        ],
        "rgbInteger": [
          212,
          77,
          170
        ]
      },
      {
        "score": 2960,
        "rgbHex": "#d24baf",
        "rgbDecimal": 13781935,
        "rgbFloat": [
          0.82,
          0.29,
          0.69
        ],
        "rgbInteger": [
          210,
          75,
          175
        ]
      },
      {
        "score": 2935,
        "rgbHex": "#cf49b4",
        "rgbDecimal": 13584820,
        "rgbFloat": [
          0.81,
          0.29,
          0.71
        ],
        "rgbInteger": [
          207,
          73,
          180
        ]
      },
      {
        "score": 2915,
        "rgbHex": "#cc47b8",
        "rgbDecimal": 13387704,
        "rgbFloat": [
          0.8,
          0.28,
          0.72
        ],
        "rgbInteger": [
          204,
          71,
          184
        ]
      },
      {
        "score": 2890,
        "rgbHex": "#c946bd",
        "rgbDecimal": 13190845,
        "rgbFloat": [
          0.79,
          0.27,
          0.74
        ],
        "rgbInteger": [
          201,
          70,
          189
        ]
      },
      {
        "score": 2865,
        "rgbHex": "#c644c2",
        "rgbDecimal": 12993730,
        "rgbFloat": [
          0.78,
          0.27,
          0.76
        ],
        "rgbInteger": [
          198,
          68,
          194
        ]
      },
      {
        "score": 2840,
        "rgbHex": "#c342c7",
        "rgbDecimal": 12796615,
        "rgbFloat": [
          0.76,
          0.26,
          0.78
        ],
        "rgbInteger": [
          195,
          66,
          199
        ]
      },
      {
        "score": 2815,
        "rgbHex": "#c040cc",
        "rgbDecimal": 12599500,
        "rgbFloat": [
          0.75,
          0.25,
          0.8
        ],
        "rgbInteger": [
          192,
          64,
          204
        ]
      },
      {
        "score": 2795,
        "rgbHex": "#bc3fd1",
        "rgbDecimal": 12337105,
        "rgbFloat": [
          0.74,
          0.25,
          0.82
        ],
        "rgbInteger": [
          188,
          63,
          209
        ]
      },
      {
        "score": 2770,
        "rgbHex": "#b93dd6",
        "rgbDecimal": 12139990,
        "rgbFloat": [
          0.73,
          0.24,
          0.84
        ],
        "rgbInteger": [
          185,
          61,
          214
        ]
      },
      {
        "score": 2745,
        "rgbHex": "#b53bda",
        "rgbDecimal": 11877338,
        "rgbFloat": [
          0.71,
          0.23,
          0.85
        ],
        "rgbInteger": [
          181,
          59,
          218
        ]
      },
      {
        "score": 2720,
        "rgbHex": "#b13adf",
        "rgbDecimal": 11614943,
        "rgbFloat": [
          0.69,
          0.23,
          0.87
        ],
        "rgbInteger": [
          177,
          58,
          223
        ]
      },
      {
        "score": 2695,
        "rgbHex": "#ac38e4",
        "rgbDecimal": 11286756,
        "rgbFloat": [
          0.67,
          0.22,
          0.89
        ],
        "rgbInteger": [
          172,
          56,
          228
        ]
      },
      {
        "score": 2675,
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
        "score": 2650,
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
        "score": 2605,
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
        "score": 2580,
        "rgbHex": "#9b3eec",
        "rgbDecimal": 10174188,
        "rgbFloat": [
          0.61,
          0.24,
          0.93
        ],
        "rgbInteger": [
          155,
          62,
          236
        ]
      },
      {
        "score": 2555,
        "rgbHex": "#9743ec",
        "rgbDecimal": 9913324,
        "rgbFloat": [
          0.59,
          0.26,
          0.93
        ],
        "rgbInteger": [
          151,
          67,
          236
        ]
      },
      {
        "score": 2530,
        "rgbHex": "#9246eb",
        "rgbDecimal": 9586411,
        "rgbFloat": [
          0.57,
          0.27,
          0.92
        ],
        "rgbInteger": [
          146,
          70,
          235
        ]
      },
      {
        "score": 2505,
        "rgbHex": "#8e4aea",
        "rgbDecimal": 9325290,
        "rgbFloat": [
          0.56,
          0.29,
          0.92
        ],
        "rgbInteger": [
          142,
          74,
          234
        ]
      },
      {
        "score": 2485,
        "rgbHex": "#8a4de9",
        "rgbDecimal": 9063913,
        "rgbFloat": [
          0.54,
          0.3,
          0.91
        ],
        "rgbInteger": [
          138,
          77,
          233
        ]
      },
      {
        "score": 2460,
        "rgbHex": "#8550e9",
        "rgbDecimal": 8737001,
        "rgbFloat": [
          0.52,
          0.31,
          0.91
        ],
        "rgbInteger": [
          133,
          80,
          233
        ]
      },
      {
        "score": 2435,
        "rgbHex": "#8053e8",
        "rgbDecimal": 8410088,
        "rgbFloat": [
          0.5,
          0.33,
          0.91
        ],
        "rgbInteger": [
          128,
          83,
          232
        ]
      },
      {
        "score": 2410,
        "rgbHex": "#7b56e7",
        "rgbDecimal": 8083175,
        "rgbFloat": [
          0.48,
          0.34,
          0.91
        ],
        "rgbInteger": [
          123,
          86,
          231
        ]
      },
      {
        "score": 2385,
        "rgbHex": "#7658e6",
        "rgbDecimal": 7756006,
        "rgbFloat": [
          0.46,
          0.35,
          0.9
        ],
        "rgbInteger": [
          118,
          88,
          230
        ]
      },
      {
        "score": 2365,
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
        "score": 2340,
        "rgbHex": "#6c5de5",
        "rgbDecimal": 7101925,
        "rgbFloat": [
          0.42,
          0.36,
          0.9
        ],
        "rgbInteger": [
          108,
          93,
          229
        ]
      },
      {
        "score": 2315,
        "rgbHex": "#665fe4",
        "rgbDecimal": 6709220,
        "rgbFloat": [
          0.4,
          0.37,
          0.89
        ],
        "rgbInteger": [
          102,
          95,
          228
        ]
      },
      {
        "score": 2290,
        "rgbHex": "#6062e3",
        "rgbDecimal": 6316771,
        "rgbFloat": [
          0.38,
          0.38,
          0.89
        ],
        "rgbInteger": [
          96,
          98,
          227
        ]
      },
      {
        "score": 2265,
        "rgbHex": "#5a64e2",
        "rgbDecimal": 5924066,
        "rgbFloat": [
          0.35,
          0.39,
          0.89
        ],
        "rgbInteger": [
          90,
          100,
          226
        ]
      },
      {
        "score": 2245,
        "rgbHex": "#5366e2",
        "rgbDecimal": 5465826,
        "rgbFloat": [
          0.33,
          0.4,
          0.89
        ],
        "rgbInteger": [
          83,
          102,
          226
        ]
      },
      {
        "score": 2220,
        "rgbHex": "#4b67e1",
        "rgbDecimal": 4941793,
        "rgbFloat": [
          0.29,
          0.4,
          0.88
        ],
        "rgbInteger": [
          75,
          103,
          225
        ]
      },
      {
        "score": 2195,
        "rgbHex": "#4369e0",
        "rgbDecimal": 4418016,
        "rgbFloat": [
          0.26,
          0.41,
          0.88
        ],
        "rgbInteger": [
          67,
          105,
          224
        ]
      },
      {
        "score": 2170,
        "rgbHex": "#3a6bdf",
        "rgbDecimal": 3828703,
        "rgbFloat": [
          0.23,
          0.42,
          0.87
        ],
        "rgbInteger": [
          58,
          107,
          223
        ]
      },
      {
        "score": 2145,
        "rgbHex": "#2e6ddf",
        "rgbDecimal": 3042783,
        "rgbFloat": [
          0.18,
          0.43,
          0.87
        ],
        "rgbInteger": [
          46,
          109,
          223
        ]
      },
      {
        "score": 2125,
        "rgbHex": "#1f6ede",
        "rgbDecimal": 2059998,
        "rgbFloat": [
          0.12,
          0.43,
          0.87
        ],
        "rgbInteger": [
          31,
          110,
          222
        ]
      },
      {
        "score": 2100,
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
        "score": 2015,
        "rgbHex": "#1472db",
        "rgbDecimal": 1340123,
        "rgbFloat": [
          0.08,
          0.45,
          0.86
        ],
        "rgbInteger": [
          20,
          114,
          219
        ]
      },
      {
        "score": 1990,
        "rgbHex": "#1f74d8",
        "rgbDecimal": 2061528,
        "rgbFloat": [
          0.12,
          0.45,
          0.85
        ],
        "rgbInteger": [
          31,
          116,
          216
        ]
      },
      {
        "score": 1965,
        "rgbHex": "#2777d6",
        "rgbDecimal": 2586582,
        "rgbFloat": [
          0.15,
          0.47,
          0.84
        ],
        "rgbInteger": [
          39,
          119,
          214
        ]
      },
      {
        "score": 1940,
        "rgbHex": "#2e79d4",
        "rgbDecimal": 3045844,
        "rgbFloat": [
          0.18,
          0.47,
          0.83
        ],
        "rgbInteger": [
          46,
          121,
          212
        ]
      },
      {
        "score": 1920,
        "rgbHex": "#337bd1",
        "rgbDecimal": 3374033,
        "rgbFloat": [
          0.2,
          0.48,
          0.82
        ],
        "rgbInteger": [
          51,
          123,
          209
        ]
      },
      {
        "score": 1895,
        "rgbHex": "#387dcf",
        "rgbDecimal": 3702223,
        "rgbFloat": [
          0.22,
          0.49,
          0.81
        ],
        "rgbInteger": [
          56,
          125,
          207
        ]
      },
      {
        "score": 1870,
        "rgbHex": "#3c80cc",
        "rgbDecimal": 3965132,
        "rgbFloat": [
          0.24,
          0.5,
          0.8
        ],
        "rgbInteger": [
          60,
          128,
          204
        ]
      },
      {
        "score": 1845,
        "rgbHex": "#3f82ca",
        "rgbDecimal": 4162250,
        "rgbFloat": [
          0.25,
          0.51,
          0.79
        ],
        "rgbInteger": [
          63,
          130,
          202
        ]
      },
      {
        "score": 1820,
        "rgbHex": "#4384c8",
        "rgbDecimal": 4424904,
        "rgbFloat": [
          0.26,
          0.52,
          0.78
        ],
        "rgbInteger": [
          67,
          132,
          200
        ]
      },
      {
        "score": 1800,
        "rgbHex": "#4686c5",
        "rgbDecimal": 4622021,
        "rgbFloat": [
          0.27,
          0.53,
          0.77
        ],
        "rgbInteger": [
          70,
          134,
          197
        ]
      },
      {
        "score": 1775,
        "rgbHex": "#4889c3",
        "rgbDecimal": 4753859,
        "rgbFloat": [
          0.28,
          0.54,
          0.76
        ],
        "rgbInteger": [
          72,
          137,
          195
        ]
      },
      {
        "score": 1750,
        "rgbHex": "#4b8bc1",
        "rgbDecimal": 4950977,
        "rgbFloat": [
          0.29,
          0.55,
          0.76
        ],
        "rgbInteger": [
          75,
          139,
          193
        ]
      },
      {
        "score": 1725,
        "rgbHex": "#4d8dbe",
        "rgbDecimal": 5082558,
        "rgbFloat": [
          0.3,
          0.55,
          0.75
        ],
        "rgbInteger": [
          77,
          141,
          190
        ]
      },
      {
        "score": 1700,
        "rgbHex": "#4f90bc",
        "rgbDecimal": 5214396,
        "rgbFloat": [
          0.31,
          0.56,
          0.74
        ],
        "rgbInteger": [
          79,
          144,
          188
        ]
      },
      {
        "score": 1680,
        "rgbHex": "#5192b9",
        "rgbDecimal": 5345977,
        "rgbFloat": [
          0.32,
          0.57,
          0.73
        ],
        "rgbInteger": [
          81,
          146,
          185
        ]
      },
      {
        "score": 1655,
        "rgbHex": "#5394b7",
        "rgbDecimal": 5477559,
        "rgbFloat": [
          0.33,
          0.58,
          0.72
        ],
        "rgbInteger": [
          83,
          148,
          183
        ]
      },
      {
        "score": 1630,
        "rgbHex": "#5596b4",
        "rgbDecimal": 5609140,
        "rgbFloat": [
          0.33,
          0.59,
          0.71
        ],
        "rgbInteger": [
          85,
          150,
          180
        ]
      },
      {
        "score": 1605,
        "rgbHex": "#5699b2",
        "rgbDecimal": 5675442,
        "rgbFloat": [
          0.34,
          0.6,
          0.7
        ],
        "rgbInteger": [
          86,
          153,
          178
        ]
      },
      {
        "score": 1580,
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
        "score": 1560,
        "rgbHex": "#599dad",
        "rgbDecimal": 5873069,
        "rgbFloat": [
          0.35,
          0.62,
          0.68
        ],
        "rgbInteger": [
          89,
          157,
          173
        ]
      },
      {
        "score": 1535,
        "rgbHex": "#5aa0aa",
        "rgbDecimal": 5939370,
        "rgbFloat": [
          0.35,
          0.63,
          0.67
        ],
        "rgbInteger": [
          90,
          160,
          170
        ]
      },
      {
        "score": 1510,
        "rgbHex": "#5ba2a8",
        "rgbDecimal": 6005416,
        "rgbFloat": [
          0.36,
          0.64,
          0.66
        ],
        "rgbInteger": [
          91,
          162,
          168
        ]
      },
      {
        "score": 1485,
        "rgbHex": "#5ca4a5",
        "rgbDecimal": 6071461,
        "rgbFloat": [
          0.36,
          0.64,
          0.65
        ],
        "rgbInteger": [
          92,
          164,
          165
        ]
      },
      {
        "score": 1460,
        "rgbHex": "#5da7a3",
        "rgbDecimal": 6137763,
        "rgbFloat": [
          0.36,
          0.65,
          0.64
        ],
        "rgbInteger": [
          93,
          167,
          163
        ]
      },
      {
        "score": 1440,
        "rgbHex": "#5da9a0",
        "rgbDecimal": 6138272,
        "rgbFloat": [
          0.36,
          0.66,
          0.63
        ],
        "rgbInteger": [
          93,
          169,
          160
        ]
      },
      {
        "score": 1415,
        "rgbHex": "#5eab9e",
        "rgbDecimal": 6204318,
        "rgbFloat": [
          0.37,
          0.67,
          0.62
        ],
        "rgbInteger": [
          94,
          171,
          158
        ]
      },
      {
        "score": 1390,
        "rgbHex": "#5eae9b",
        "rgbDecimal": 6205083,
        "rgbFloat": [
          0.37,
          0.68,
          0.61
        ],
        "rgbInteger": [
          94,
          174,
          155
        ]
      },
      {
        "score": 1365,
        "rgbHex": "#5fb099",
        "rgbDecimal": 6271129,
        "rgbFloat": [
          0.37,
          0.69,
          0.6
        ],
        "rgbInteger": [
          95,
          176,
          153
        ]
      },
      {
        "score": 1340,
        "rgbHex": "#5fb296",
        "rgbDecimal": 6271638,
        "rgbFloat": [
          0.37,
          0.7,
          0.59
        ],
        "rgbInteger": [
          95,
          178,
          150
        ]
      },
      {
        "score": 1320,
        "rgbHex": "#5fb593",
        "rgbDecimal": 6272403,
        "rgbFloat": [
          0.37,
          0.71,
          0.58
        ],
        "rgbInteger": [
          95,
          181,
          147
        ]
      },
      {
        "score": 1295,
        "rgbHex": "#5fb791",
        "rgbDecimal": 6272913,
        "rgbFloat": [
          0.37,
          0.72,
          0.57
        ],
        "rgbInteger": [
          95,
          183,
          145
        ]
      },
      {
        "score": 1270,
        "rgbHex": "#5fb98e",
        "rgbDecimal": 6273422,
        "rgbFloat": [
          0.37,
          0.73,
          0.56
        ],
        "rgbInteger": [
          95,
          185,
          142
        ]
      },
      {
        "score": 1245,
        "rgbHex": "#5fbc8b",
        "rgbDecimal": 6274187,
        "rgbFloat": [
          0.37,
          0.74,
          0.55
        ],
        "rgbInteger": [
          95,
          188,
          139
        ]
      },
      {
        "score": 1220,
        "rgbHex": "#5fbe88",
        "rgbDecimal": 6274696,
        "rgbFloat": [
          0.37,
          0.75,
          0.53
        ],
        "rgbInteger": [
          95,
          190,
          136
        ]
      },
      {
        "score": 1200,
        "rgbHex": "#5fc086",
        "rgbDecimal": 6275206,
        "rgbFloat": [
          0.37,
          0.75,
          0.53
        ],
        "rgbInteger": [
          95,
          192,
          134
        ]
      },
      {
        "score": 1175,
        "rgbHex": "#5fc383",
        "rgbDecimal": 6275971,
        "rgbFloat": [
          0.37,
          0.76,
          0.51
        ],
        "rgbInteger": [
          95,
          195,
          131
        ]
      },
      {
        "score": 1150,
        "rgbHex": "#5ec580",
        "rgbDecimal": 6210944,
        "rgbFloat": [
          0.37,
          0.77,
          0.5
        ],
        "rgbInteger": [
          94,
          197,
          128
        ]
      },
      {
        "score": 1125,
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
        "score": 1100,
        "rgbHex": "#5dca7a",
        "rgbDecimal": 6146682,
        "rgbFloat": [
          0.36,
          0.79,
          0.48
        ],
        "rgbInteger": [
          93,
          202,
          122
        ]
      },
      {
        "score": 1080,
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
        "score": 1055,
        "rgbHex": "#5bcf74",
        "rgbDecimal": 6016884,
        "rgbFloat": [
          0.36,
          0.81,
          0.45
        ],
        "rgbInteger": [
          91,
          207,
          116
        ]
      },
      {
        "score": 1030,
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
        "score": 1005,
        "rgbHex": "#59d36e",
        "rgbDecimal": 5886830,
        "rgbFloat": [
          0.35,
          0.83,
          0.43
        ],
        "rgbInteger": [
          89,
          211,
          110
        ]
      },
      {
        "score": 980,
        "rgbHex": "#58d66a",
        "rgbDecimal": 5822058,
        "rgbFloat": [
          0.35,
          0.84,
          0.42
        ],
        "rgbInteger": [
          88,
          214,
          106
        ]
      },
      {
        "score": 960,
        "rgbHex": "#57d867",
        "rgbDecimal": 5757031,
        "rgbFloat": [
          0.34,
          0.85,
          0.4
        ],
        "rgbInteger": [
          87,
          216,
          103
        ]
      },
      {
        "score": 935,
        "rgbHex": "#55db64",
        "rgbDecimal": 5626724,
        "rgbFloat": [
          0.33,
          0.86,
          0.39
        ],
        "rgbInteger": [
          85,
          219,
          100
        ]
      },
      {
        "score": 910,
        "rgbHex": "#54dd60",
        "rgbDecimal": 5561696,
        "rgbFloat": [
          0.33,
          0.87,
          0.38
        ],
        "rgbInteger": [
          84,
          221,
          96
        ]
      },
      {
        "score": 885,
        "rgbHex": "#52df5c",
        "rgbDecimal": 5431132,
        "rgbFloat": [
          0.32,
          0.87,
          0.36
        ],
        "rgbInteger": [
          82,
          223,
          92
        ]
      },
      {
        "score": 860,
        "rgbHex": "#50e259",
        "rgbDecimal": 5300825,
        "rgbFloat": [
          0.31,
          0.89,
          0.35
        ],
        "rgbInteger": [
          80,
          226,
          89
        ]
      },
      {
        "score": 840,
        "rgbHex": "#4ee455",
        "rgbDecimal": 5170261,
        "rgbFloat": [
          0.31,
          0.89,
          0.33
        ],
        "rgbInteger": [
          78,
          228,
          85
        ]
      },
      {
        "score": 815,
        "rgbHex": "#4ce750",
        "rgbDecimal": 5039952,
        "rgbFloat": [
          0.3,
          0.91,
          0.31
        ],
        "rgbInteger": [
          76,
          231,
          80
        ]
      },
      {
        "score": 790,
        "rgbHex": "#49e94c",
        "rgbDecimal": 4843852,
        "rgbFloat": [
          0.29,
          0.91,
          0.3
        ],
        "rgbInteger": [
          73,
          233,
          76
        ]
      },
      {
        "score": 765,
        "rgbHex": "#46ec48",
        "rgbDecimal": 4648008,
        "rgbFloat": [
          0.27,
          0.93,
          0.28
        ],
        "rgbInteger": [
          70,
          236,
          72
        ]
      },
      {
        "score": 740,
        "rgbHex": "#43ee43",
        "rgbDecimal": 4451907,
        "rgbFloat": [
          0.26,
          0.93,
          0.26
        ],
        "rgbInteger": [
          67,
          238,
          67
        ]
      },
      {
        "score": 720,
        "rgbHex": "#40f03d",
        "rgbDecimal": 4255805,
        "rgbFloat": [
          0.25,
          0.94,
          0.24
        ],
        "rgbInteger": [
          64,
          240,
          61
        ]
      },
      {
        "score": 695,
        "rgbHex": "#3cf338",
        "rgbDecimal": 3994424,
        "rgbFloat": [
          0.24,
          0.95,
          0.22
        ],
        "rgbInteger": [
          60,
          243,
          56
        ]
      },
      {
        "score": 670,
        "rgbHex": "#38f531",
        "rgbDecimal": 3732785,
        "rgbFloat": [
          0.22,
          0.96,
          0.19
        ],
        "rgbInteger": [
          56,
          245,
          49
        ]
      },
      {
        "score": 645,
        "rgbHex": "#33f82a",
        "rgbDecimal": 3405866,
        "rgbFloat": [
          0.2,
          0.97,
          0.16
        ],
        "rgbInteger": [
          51,
          248,
          42
        ]
      },
      {
        "score": 620,
        "rgbHex": "#2dfa21",
        "rgbDecimal": 3013153,
        "rgbFloat": [
          0.18,
          0.98,
          0.13
        ],
        "rgbInteger": [
          45,
          250,
          33
        ]
      },
      {
        "score": 600,
        "rgbHex": "#27fd15",
        "rgbDecimal": 2620693,
        "rgbFloat": [
          0.15,
          0.99,
          0.08
        ],
        "rgbInteger": [
          39,
          253,
          21
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