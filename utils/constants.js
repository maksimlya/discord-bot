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
        'STRT',
        'GMBT',
        'GD',
        'ID',
        'YARD',
        'WORK',
        'LOWR',
        'UPPR'
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
        'UPPR3': 1260000
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
          "score": 2000,
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
          "score": 1950,
          "rgbHex": "#fd7d1d",
          "rgbDecimal": 16612637,
          "rgbFloat": [
              0.99,
              0.49,
              0.11
          ],
          "rgbInteger": [
              253,
              125,
              29
          ]
      },
      {
          "score": 1925,
          "rgbHex": "#fc7a2c",
          "rgbDecimal": 16546348,
          "rgbFloat": [
              0.99,
              0.48,
              0.17
          ],
          "rgbInteger": [
              252,
              122,
              44
          ]
      },
      {
          "score": 1905,
          "rgbHex": "#fa7639",
          "rgbDecimal": 16414265,
          "rgbFloat": [
              0.98,
              0.46,
              0.22
          ],
          "rgbInteger": [
              250,
              118,
              57
          ]
      },
      {
          "score": 1880,
          "rgbHex": "#f87344",
          "rgbDecimal": 16282436,
          "rgbFloat": [
              0.97,
              0.45,
              0.27
          ],
          "rgbInteger": [
              248,
              115,
              68
          ]
      },
      {
          "score": 1855,
          "rgbHex": "#f6704e",
          "rgbDecimal": 16150606,
          "rgbFloat": [
              0.96,
              0.44,
              0.31
          ],
          "rgbInteger": [
              246,
              112,
              78
          ]
      },
      {
          "score": 1830,
          "rgbHex": "#f36d57",
          "rgbDecimal": 15953239,
          "rgbFloat": [
              0.95,
              0.43,
              0.34
          ],
          "rgbInteger": [
              243,
              109,
              87
          ]
      },
      {
          "score": 1805,
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
          "score": 1785,
          "rgbHex": "#ee6669",
          "rgbDecimal": 15623785,
          "rgbFloat": [
              0.93,
              0.4,
              0.41
          ],
          "rgbInteger": [
              238,
              102,
              105
          ]
      },
      {
          "score": 1760,
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
          "score": 1735,
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
          "score": 1710,
          "rgbHex": "#e65c82",
          "rgbDecimal": 15096962,
          "rgbFloat": [
              0.9,
              0.36,
              0.51
          ],
          "rgbInteger": [
              230,
              92,
              130
          ]
      },
      {
          "score": 1685,
          "rgbHex": "#e3598b",
          "rgbDecimal": 14899595,
          "rgbFloat": [
              0.89,
              0.35,
              0.55
          ],
          "rgbInteger": [
              227,
              89,
              139
          ]
      },
      {
          "score": 1665,
          "rgbHex": "#df5693",
          "rgbDecimal": 14636691,
          "rgbFloat": [
              0.87,
              0.34,
              0.58
          ],
          "rgbInteger": [
              223,
              86,
              147
          ]
      },
      {
          "score": 1640,
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
          "score": 1615,
          "rgbHex": "#d84fa3",
          "rgbDecimal": 14176163,
          "rgbFloat": [
              0.85,
              0.31,
              0.64
          ],
          "rgbInteger": [
              216,
              79,
              163
          ]
      },
      {
          "score": 1590,
          "rgbHex": "#d34cac",
          "rgbDecimal": 13847724,
          "rgbFloat": [
              0.83,
              0.3,
              0.67
          ],
          "rgbInteger": [
              211,
              76,
              172
          ]
      },
      {
          "score": 1565,
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
          "score": 1545,
          "rgbHex": "#ca46bc",
          "rgbDecimal": 13256380,
          "rgbFloat": [
              0.79,
              0.27,
              0.74
          ],
          "rgbInteger": [
              202,
              70,
              188
          ]
      },
      {
          "score": 1520,
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
          "score": 1495,
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
          "score": 1470,
          "rgbHex": "#b93dd5",
          "rgbDecimal": 12139989,
          "rgbFloat": [
              0.73,
              0.24,
              0.84
          ],
          "rgbInteger": [
              185,
              61,
              213
          ]
      },
      {
          "score": 1445,
          "rgbHex": "#b23add",
          "rgbDecimal": 11680477,
          "rgbFloat": [
              0.7,
              0.23,
              0.87
          ],
          "rgbInteger": [
              178,
              58,
              221
          ]
      },
      {
          "score": 1425,
          "rgbHex": "#ab38e6",
          "rgbDecimal": 11221222,
          "rgbFloat": [
              0.67,
              0.22,
              0.9
          ],
          "rgbInteger": [
              171,
              56,
              230
          ]
      },
      {
          "score": 1400,
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
          "score": 1355,
          "rgbHex": "#9e3bed",
          "rgbDecimal": 10370029,
          "rgbFloat": [
              0.62,
              0.23,
              0.93
          ],
          "rgbInteger": [
              158,
              59,
              237
          ]
      },
      {
          "score": 1335,
          "rgbHex": "#9940ec",
          "rgbDecimal": 10043628,
          "rgbFloat": [
              0.6,
              0.25,
              0.93
          ],
          "rgbInteger": [
              153,
              64,
              236
          ]
      },
      {
          "score": 1310,
          "rgbHex": "#9445eb",
          "rgbDecimal": 9717227,
          "rgbFloat": [
              0.58,
              0.27,
              0.92
          ],
          "rgbInteger": [
              148,
              69,
              235
          ]
      },
      {
          "score": 1285,
          "rgbHex": "#8e49ea",
          "rgbDecimal": 9325034,
          "rgbFloat": [
              0.56,
              0.29,
              0.92
          ],
          "rgbInteger": [
              142,
              73,
              234
          ]
      },
      {
          "score": 1260,
          "rgbHex": "#894de9",
          "rgbDecimal": 8998377,
          "rgbFloat": [
              0.54,
              0.3,
              0.91
          ],
          "rgbInteger": [
              137,
              77,
              233
          ]
      },
      {
          "score": 1235,
          "rgbHex": "#8351e8",
          "rgbDecimal": 8606184,
          "rgbFloat": [
              0.51,
              0.32,
              0.91
          ],
          "rgbInteger": [
              131,
              81,
              232
          ]
      },
      {
          "score": 1215,
          "rgbHex": "#7e55e7",
          "rgbDecimal": 8279527,
          "rgbFloat": [
              0.49,
              0.33,
              0.91
          ],
          "rgbInteger": [
              126,
              85,
              231
          ]
      },
      {
          "score": 1190,
          "rgbHex": "#7858e6",
          "rgbDecimal": 7887078,
          "rgbFloat": [
              0.47,
              0.35,
              0.9
          ],
          "rgbInteger": [
              120,
              88,
              230
          ]
      },
      {
          "score": 1165,
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
          "score": 1140,
          "rgbHex": "#6a5ee5",
          "rgbDecimal": 6971109,
          "rgbFloat": [
              0.42,
              0.37,
              0.9
          ],
          "rgbInteger": [
              106,
              94,
              229
          ]
      },
      {
          "score": 1115,
          "rgbHex": "#6360e4",
          "rgbDecimal": 6512868,
          "rgbFloat": [
              0.39,
              0.38,
              0.89
          ],
          "rgbInteger": [
              99,
              96,
              228
          ]
      },
      {
          "score": 1095,
          "rgbHex": "#5c63e3",
          "rgbDecimal": 6054883,
          "rgbFloat": [
              0.36,
              0.39,
              0.89
          ],
          "rgbInteger": [
              92,
              99,
              227
          ]
      },
      {
          "score": 1070,
          "rgbHex": "#5465e2",
          "rgbDecimal": 5531106,
          "rgbFloat": [
              0.33,
              0.4,
              0.89
          ],
          "rgbInteger": [
              84,
              101,
              226
          ]
      },
      {
          "score": 1045,
          "rgbHex": "#4b68e1",
          "rgbDecimal": 4942049,
          "rgbFloat": [
              0.29,
              0.41,
              0.88
          ],
          "rgbInteger": [
              75,
              104,
              225
          ]
      },
      {
          "score": 1020,
          "rgbHex": "#406ae0",
          "rgbDecimal": 4221664,
          "rgbFloat": [
              0.25,
              0.42,
              0.88
          ],
          "rgbInteger": [
              64,
              106,
              224
          ]
      },
      {
          "score": 995,
          "rgbHex": "#346cdf",
          "rgbDecimal": 3435743,
          "rgbFloat": [
              0.2,
              0.42,
              0.87
          ],
          "rgbInteger": [
              52,
              108,
              223
          ]
      },
      {
          "score": 975,
          "rgbHex": "#236ede",
          "rgbDecimal": 2322142,
          "rgbFloat": [
              0.14,
              0.43,
              0.87
          ],
          "rgbInteger": [
              35,
              110,
              222
          ]
      },
      {
          "score": 950,
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
          "score": 900,
          "rgbHex": "#2275d7",
          "rgbDecimal": 2258391,
          "rgbFloat": [
              0.13,
              0.46,
              0.84
          ],
          "rgbInteger": [
              34,
              117,
              215
          ]
      },
      {
          "score": 875,
          "rgbHex": "#317ad2",
          "rgbDecimal": 3242706,
          "rgbFloat": [
              0.19,
              0.48,
              0.82
          ],
          "rgbInteger": [
              49,
              122,
              210
          ]
      },
      {
          "score": 850,
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
          "score": 825,
          "rgbHex": "#4485c7",
          "rgbDecimal": 4490695,
          "rgbFloat": [
              0.27,
              0.52,
              0.78
          ],
          "rgbInteger": [
              68,
              133,
              199
          ]
      },
      {
          "score": 805,
          "rgbHex": "#4a8ac1",
          "rgbDecimal": 4885185,
          "rgbFloat": [
              0.29,
              0.54,
              0.76
          ],
          "rgbInteger": [
              74,
              138,
              193
          ]
      },
      {
          "score": 780,
          "rgbHex": "#5090bb",
          "rgbDecimal": 5279931,
          "rgbFloat": [
              0.31,
              0.56,
              0.73
          ],
          "rgbInteger": [
              80,
              144,
              187
          ]
      },
      {
          "score": 755,
          "rgbHex": "#5495b6",
          "rgbDecimal": 5543350,
          "rgbFloat": [
              0.33,
              0.58,
              0.71
          ],
          "rgbInteger": [
              84,
              149,
              182
          ]
      },
      {
          "score": 730,
          "rgbHex": "#579ab0",
          "rgbDecimal": 5741232,
          "rgbFloat": [
              0.34,
              0.6,
              0.69
          ],
          "rgbInteger": [
              87,
              154,
              176
          ]
      },
      {
          "score": 705,
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
          "score": 685,
          "rgbHex": "#5ca5a4",
          "rgbDecimal": 6071716,
          "rgbFloat": [
              0.36,
              0.65,
              0.64
          ],
          "rgbInteger": [
              92,
              165,
              164
          ]
      },
      {
          "score": 660,
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
          "score": 635,
          "rgbHex": "#5fb098",
          "rgbDecimal": 6271128,
          "rgbFloat": [
              0.37,
              0.69,
              0.6
          ],
          "rgbInteger": [
              95,
              176,
              152
          ]
      },
      {
          "score": 610,
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
          "score": 585,
          "rgbHex": "#5fbb8c",
          "rgbDecimal": 6273932,
          "rgbFloat": [
              0.37,
              0.73,
              0.55
          ],
          "rgbInteger": [
              95,
              187,
              140
          ]
      },
      {
          "score": 565,
          "rgbHex": "#5fc185",
          "rgbDecimal": 6275461,
          "rgbFloat": [
              0.37,
              0.76,
              0.52
          ],
          "rgbInteger": [
              95,
              193,
              133
          ]
      },
      {
          "score": 540,
          "rgbHex": "#5ec67e",
          "rgbDecimal": 6211198,
          "rgbFloat": [
              0.37,
              0.78,
              0.49
          ],
          "rgbInteger": [
              94,
              198,
              126
          ]
      },
      {
          "score": 515,
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
          "score": 490,
          "rgbHex": "#5ad270",
          "rgbDecimal": 5952112,
          "rgbFloat": [
              0.35,
              0.82,
              0.44
          ],
          "rgbInteger": [
              90,
              210,
              112
          ]
      },
      {
          "score": 465,
          "rgbHex": "#57d768",
          "rgbDecimal": 5756776,
          "rgbFloat": [
              0.34,
              0.84,
              0.41
          ],
          "rgbInteger": [
              87,
              215,
              104
          ]
      },
      {
          "score": 445,
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
          "score": 420,
          "rgbHex": "#4fe357",
          "rgbDecimal": 5235543,
          "rgbFloat": [
              0.31,
              0.89,
              0.34
          ],
          "rgbInteger": [
              79,
              227,
              87
          ]
      },
      {
          "score": 395,
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
          "score": 370,
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
          "score": 345,
          "rgbHex": "#3bf436",
          "rgbDecimal": 3929142,
          "rgbFloat": [
              0.23,
              0.96,
              0.21
          ],
          "rgbInteger": [
              59,
              244,
              54
          ]
      },
      {
          "score": 325,
          "rgbHex": "#2ff925",
          "rgbDecimal": 3143973,
          "rgbFloat": [
              0.18,
              0.98,
              0.15
          ],
          "rgbInteger": [
              47,
              249,
              37
          ]
      },
      {
          "score": 300,
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
          "score": 275,
          "rgbHex": "#80ff64",
          "rgbDecimal": 8453988,
          "rgbFloat": [
              0.5,
              1,
              0.39
          ],
          "rgbInteger": [
              128,
              255,
              100
          ]
      },
      {
          "score": 250,
          "rgbHex": "#b3ff9b",
          "rgbDecimal": 11796379,
          "rgbFloat": [
              0.7,
              1,
              0.61
          ],
          "rgbInteger": [
              179,
              255,
              155
          ]
      },
      {
          "score": 225,
          "rgbHex": "#dbffcd",
          "rgbDecimal": 14417869,
          "rgbFloat": [
              0.86,
              1,
              0.8
          ],
          "rgbInteger": [
              219,
              255,
              205
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