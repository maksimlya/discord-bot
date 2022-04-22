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
            `${name} just depleted it's ${key} +${level} key by ${Math.floor((time - this.mythicTimers[keyCode])/1000/60)} minutes and ${Math.floor(((time - this.mythicTimers[keyCode])/1000/60 % 1) * 100)} seconds and got no score for it. What a slacker.`,
            `Useless piece of ${name} fell asleep and depleted it's ${key} +${level} key by ${Math.floor((time - this.mythicTimers[keyCode])/1000/60)} minutes and ${Math.floor(((time - this.mythicTimers[keyCode])/1000/60 % 1) * 100)} seconds and got no score for it.`,
            `${name} got distracted by Method Josh and depleted it's ${key} +${level} key by ${Math.floor((time - this.mythicTimers[keyCode])/1000/60)} minutes and ${Math.floor(((time - this.mythicTimers[keyCode])/1000/60 % 1) * 100)} seconds and got no score for it, perhaps it is happy now`,
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
          "score": 2625,
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
          "score": 2575,
          "rgbHex": "#fd7d1e",
          "rgbDecimal": 16612638,
          "rgbFloat": [
            0.99,
            0.49,
            0.12
          ],
          "rgbInteger": [
            253,
            125,
            30
          ]
        },
        {
          "score": 2555,
          "rgbHex": "#fb792e",
          "rgbDecimal": 16480558,
          "rgbFloat": [
            0.98,
            0.47,
            0.18
          ],
          "rgbInteger": [
            251,
            121,
            46
          ]
        },
        {
          "score": 2530,
          "rgbHex": "#f9763a",
          "rgbDecimal": 16348730,
          "rgbFloat": [
            0.98,
            0.46,
            0.23
          ],
          "rgbInteger": [
            249,
            118,
            58
          ]
        },
        {
          "score": 2505,
          "rgbHex": "#f77245",
          "rgbDecimal": 16216645,
          "rgbFloat": [
            0.97,
            0.45,
            0.27
          ],
          "rgbInteger": [
            247,
            114,
            69
          ]
        },
        {
          "score": 2480,
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
          "score": 2455,
          "rgbHex": "#f36c59",
          "rgbDecimal": 15952985,
          "rgbFloat": [
            0.95,
            0.42,
            0.35
          ],
          "rgbInteger": [
            243,
            108,
            89
          ]
        },
        {
          "score": 2435,
          "rgbHex": "#f06863",
          "rgbDecimal": 15755363,
          "rgbFloat": [
            0.94,
            0.41,
            0.39
          ],
          "rgbInteger": [
            240,
            104,
            99
          ]
        },
        {
          "score": 2410,
          "rgbHex": "#ee656c",
          "rgbDecimal": 15623532,
          "rgbFloat": [
            0.93,
            0.4,
            0.42
          ],
          "rgbInteger": [
            238,
            101,
            108
          ]
        },
        {
          "score": 2385,
          "rgbHex": "#eb6175",
          "rgbDecimal": 15425909,
          "rgbFloat": [
            0.92,
            0.38,
            0.46
          ],
          "rgbInteger": [
            235,
            97,
            117
          ]
        },
        {
          "score": 2360,
          "rgbHex": "#e85e7e",
          "rgbDecimal": 15228542,
          "rgbFloat": [
            0.91,
            0.37,
            0.49
          ],
          "rgbInteger": [
            232,
            94,
            126
          ]
        },
        {
          "score": 2335,
          "rgbHex": "#e45b86",
          "rgbDecimal": 14965638,
          "rgbFloat": [
            0.89,
            0.36,
            0.53
          ],
          "rgbInteger": [
            228,
            91,
            134
          ]
        },
        {
          "score": 2315,
          "rgbHex": "#e1578f",
          "rgbDecimal": 14768015,
          "rgbFloat": [
            0.88,
            0.34,
            0.56
          ],
          "rgbInteger": [
            225,
            87,
            143
          ]
        },
        {
          "score": 2290,
          "rgbHex": "#dd5498",
          "rgbDecimal": 14505112,
          "rgbFloat": [
            0.87,
            0.33,
            0.6
          ],
          "rgbInteger": [
            221,
            84,
            152
          ]
        },
        {
          "score": 2265,
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
          "score": 2240,
          "rgbHex": "#d54da9",
          "rgbDecimal": 13979049,
          "rgbFloat": [
            0.84,
            0.3,
            0.66
          ],
          "rgbInteger": [
            213,
            77,
            169
          ]
        },
        {
          "score": 2215,
          "rgbHex": "#d04ab1",
          "rgbDecimal": 13650609,
          "rgbFloat": [
            0.82,
            0.29,
            0.69
          ],
          "rgbInteger": [
            208,
            74,
            177
          ]
        },
        {
          "score": 2195,
          "rgbHex": "#cb47ba",
          "rgbDecimal": 13322170,
          "rgbFloat": [
            0.8,
            0.28,
            0.73
          ],
          "rgbInteger": [
            203,
            71,
            186
          ]
        },
        {
          "score": 2170,
          "rgbHex": "#c644c3",
          "rgbDecimal": 12993731,
          "rgbFloat": [
            0.78,
            0.27,
            0.76
          ],
          "rgbInteger": [
            198,
            68,
            195
          ]
        },
        {
          "score": 2145,
          "rgbHex": "#c041cb",
          "rgbDecimal": 12599755,
          "rgbFloat": [
            0.75,
            0.25,
            0.8
          ],
          "rgbInteger": [
            192,
            65,
            203
          ]
        },
        {
          "score": 2120,
          "rgbHex": "#ba3dd4",
          "rgbDecimal": 12205524,
          "rgbFloat": [
            0.73,
            0.24,
            0.83
          ],
          "rgbInteger": [
            186,
            61,
            212
          ]
        },
        {
          "score": 2095,
          "rgbHex": "#b33bdd",
          "rgbDecimal": 11746269,
          "rgbFloat": [
            0.7,
            0.23,
            0.87
          ],
          "rgbInteger": [
            179,
            59,
            221
          ]
        },
        {
          "score": 2075,
          "rgbHex": "#ab38e5",
          "rgbDecimal": 11221221,
          "rgbFloat": [
            0.67,
            0.22,
            0.9
          ],
          "rgbInteger": [
            171,
            56,
            229
          ]
        },
        {
          "score": 2050,
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
          "score": 2015,
          "rgbHex": "#9c3eed",
          "rgbDecimal": 10239725,
          "rgbFloat": [
            0.61,
            0.24,
            0.93
          ],
          "rgbInteger": [
            156,
            62,
            237
          ]
        },
        {
          "score": 1990,
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
          "score": 1965,
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
          "score": 1940,
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
          "score": 1915,
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
          "score": 1895,
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
          "score": 1870,
          "rgbHex": "#675fe4",
          "rgbDecimal": 6774756,
          "rgbFloat": [
            0.4,
            0.37,
            0.89
          ],
          "rgbInteger": [
            103,
            95,
            228
          ]
        },
        {
          "score": 1845,
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
          "score": 1820,
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
          "score": 1795,
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
          "score": 1775,
          "rgbHex": "#2c6dde",
          "rgbDecimal": 2911710,
          "rgbFloat": [
            0.17,
            0.43,
            0.87
          ],
          "rgbInteger": [
            44,
            109,
            222
          ]
        },
        {
          "score": 1750,
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
          "score": 1685,
          "rgbHex": "#1b74d9",
          "rgbDecimal": 1799385,
          "rgbFloat": [
            0.11,
            0.45,
            0.85
          ],
          "rgbInteger": [
            27,
            116,
            217
          ]
        },
        {
          "score": 1665,
          "rgbHex": "#2977d5",
          "rgbDecimal": 2717653,
          "rgbFloat": [
            0.16,
            0.47,
            0.84
          ],
          "rgbInteger": [
            41,
            119,
            213
          ]
        },
        {
          "score": 1640,
          "rgbHex": "#327bd2",
          "rgbDecimal": 3308498,
          "rgbFloat": [
            0.2,
            0.48,
            0.82
          ],
          "rgbInteger": [
            50,
            123,
            210
          ]
        },
        {
          "score": 1615,
          "rgbHex": "#397ece",
          "rgbDecimal": 3768014,
          "rgbFloat": [
            0.22,
            0.49,
            0.81
          ],
          "rgbInteger": [
            57,
            126,
            206
          ]
        },
        {
          "score": 1590,
          "rgbHex": "#4082ca",
          "rgbDecimal": 4227786,
          "rgbFloat": [
            0.25,
            0.51,
            0.79
          ],
          "rgbInteger": [
            64,
            130,
            202
          ]
        },
        {
          "score": 1565,
          "rgbHex": "#4586c6",
          "rgbDecimal": 4556486,
          "rgbFloat": [
            0.27,
            0.53,
            0.78
          ],
          "rgbInteger": [
            69,
            134,
            198
          ]
        },
        {
          "score": 1545,
          "rgbHex": "#4989c2",
          "rgbDecimal": 4819394,
          "rgbFloat": [
            0.29,
            0.54,
            0.76
          ],
          "rgbInteger": [
            73,
            137,
            194
          ]
        },
        {
          "score": 1520,
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
          "score": 1495,
          "rgbHex": "#5091bb",
          "rgbDecimal": 5280187,
          "rgbFloat": [
            0.31,
            0.57,
            0.73
          ],
          "rgbInteger": [
            80,
            145,
            187
          ]
        },
        {
          "score": 1470,
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
          "score": 1445,
          "rgbHex": "#5698b3",
          "rgbDecimal": 5675187,
          "rgbFloat": [
            0.34,
            0.6,
            0.7
          ],
          "rgbInteger": [
            86,
            152,
            179
          ]
        },
        {
          "score": 1425,
          "rgbHex": "#589caf",
          "rgbDecimal": 5807279,
          "rgbFloat": [
            0.35,
            0.61,
            0.69
          ],
          "rgbInteger": [
            88,
            156,
            175
          ]
        },
        {
          "score": 1400,
          "rgbHex": "#5a9fab",
          "rgbDecimal": 5939115,
          "rgbFloat": [
            0.35,
            0.62,
            0.67
          ],
          "rgbInteger": [
            90,
            159,
            171
          ]
        },
        {
          "score": 1375,
          "rgbHex": "#5ba3a7",
          "rgbDecimal": 6005671,
          "rgbFloat": [
            0.36,
            0.64,
            0.65
          ],
          "rgbInteger": [
            91,
            163,
            167
          ]
        },
        {
          "score": 1350,
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
          "score": 1325,
          "rgbHex": "#5eab9f",
          "rgbDecimal": 6204319,
          "rgbFloat": [
            0.37,
            0.67,
            0.62
          ],
          "rgbInteger": [
            94,
            171,
            159
          ]
        },
        {
          "score": 1305,
          "rgbHex": "#5eae9a",
          "rgbDecimal": 6205082,
          "rgbFloat": [
            0.37,
            0.68,
            0.6
          ],
          "rgbInteger": [
            94,
            174,
            154
          ]
        },
        {
          "score": 1280,
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
          "score": 1255,
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
          "score": 1230,
          "rgbHex": "#5fba8e",
          "rgbDecimal": 6273678,
          "rgbFloat": [
            0.37,
            0.73,
            0.56
          ],
          "rgbInteger": [
            95,
            186,
            142
          ]
        },
        {
          "score": 1205,
          "rgbHex": "#5fbd89",
          "rgbDecimal": 6274441,
          "rgbFloat": [
            0.37,
            0.74,
            0.54
          ],
          "rgbInteger": [
            95,
            189,
            137
          ]
        },
        {
          "score": 1185,
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
          "score": 1160,
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
          "score": 1135,
          "rgbHex": "#5dc97b",
          "rgbDecimal": 6146427,
          "rgbFloat": [
            0.36,
            0.79,
            0.48
          ],
          "rgbInteger": [
            93,
            201,
            123
          ]
        },
        {
          "score": 1110,
          "rgbHex": "#5ccd77",
          "rgbDecimal": 6081911,
          "rgbFloat": [
            0.36,
            0.8,
            0.47
          ],
          "rgbInteger": [
            92,
            205,
            119
          ]
        },
        {
          "score": 1085,
          "rgbHex": "#5bd072",
          "rgbDecimal": 6017138,
          "rgbFloat": [
            0.36,
            0.82,
            0.45
          ],
          "rgbInteger": [
            91,
            208,
            114
          ]
        },
        {
          "score": 1065,
          "rgbHex": "#59d46c",
          "rgbDecimal": 5887084,
          "rgbFloat": [
            0.35,
            0.83,
            0.42
          ],
          "rgbInteger": [
            89,
            212,
            108
          ]
        },
        {
          "score": 1040,
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
          "score": 1015,
          "rgbHex": "#54dc62",
          "rgbDecimal": 5561442,
          "rgbFloat": [
            0.33,
            0.86,
            0.38
          ],
          "rgbInteger": [
            84,
            220,
            98
          ]
        },
        {
          "score": 990,
          "rgbHex": "#52e05c",
          "rgbDecimal": 5431388,
          "rgbFloat": [
            0.32,
            0.88,
            0.36
          ],
          "rgbInteger": [
            82,
            224,
            92
          ]
        },
        {
          "score": 965,
          "rgbHex": "#4ee456",
          "rgbDecimal": 5170262,
          "rgbFloat": [
            0.31,
            0.89,
            0.34
          ],
          "rgbInteger": [
            78,
            228,
            86
          ]
        },
        {
          "score": 945,
          "rgbHex": "#4be84f",
          "rgbDecimal": 4974671,
          "rgbFloat": [
            0.29,
            0.91,
            0.31
          ],
          "rgbInteger": [
            75,
            232,
            79
          ]
        },
        {
          "score": 920,
          "rgbHex": "#46eb48",
          "rgbDecimal": 4647752,
          "rgbFloat": [
            0.27,
            0.92,
            0.28
          ],
          "rgbInteger": [
            70,
            235,
            72
          ]
        },
        {
          "score": 895,
          "rgbHex": "#41ef40",
          "rgbDecimal": 4321088,
          "rgbFloat": [
            0.25,
            0.94,
            0.25
          ],
          "rgbInteger": [
            65,
            239,
            64
          ]
        },
        {
          "score": 870,
          "rgbHex": "#3bf337",
          "rgbDecimal": 3928887,
          "rgbFloat": [
            0.23,
            0.95,
            0.22
          ],
          "rgbInteger": [
            59,
            243,
            55
          ]
        },
        {
          "score": 845,
          "rgbHex": "#34f72c",
          "rgbDecimal": 3471148,
          "rgbFloat": [
            0.2,
            0.97,
            0.17
          ],
          "rgbInteger": [
            52,
            247,
            44
          ]
        },
        {
          "score": 825,
          "rgbHex": "#2bfb1d",
          "rgbDecimal": 2882333,
          "rgbFloat": [
            0.17,
            0.98,
            0.11
          ],
          "rgbInteger": [
            43,
            251,
            29
          ]
        },
        {
          "score": 800,
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
          "score": 775,
          "rgbHex": "#3cff23",
          "rgbDecimal": 3997475,
          "rgbFloat": [
            0.24,
            1,
            0.14
          ],
          "rgbInteger": [
            60,
            255,
            35
          ]
        },
        {
          "score": 750,
          "rgbHex": "#4fff35",
          "rgbDecimal": 5242677,
          "rgbFloat": [
            0.31,
            1,
            0.21
          ],
          "rgbInteger": [
            79,
            255,
            53
          ]
        },
        {
          "score": 725,
          "rgbHex": "#5eff43",
          "rgbDecimal": 6225731,
          "rgbFloat": [
            0.37,
            1,
            0.26
          ],
          "rgbInteger": [
            94,
            255,
            67
          ]
        },
        {
          "score": 700,
          "rgbHex": "#6aff4f",
          "rgbDecimal": 7012175,
          "rgbFloat": [
            0.42,
            1,
            0.31
          ],
          "rgbInteger": [
            106,
            255,
            79
          ]
        },
        {
          "score": 675,
          "rgbHex": "#76ff5a",
          "rgbDecimal": 7798618,
          "rgbFloat": [
            0.46,
            1,
            0.35
          ],
          "rgbInteger": [
            118,
            255,
            90
          ]
        },
        {
          "score": 650,
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
          "score": 625,
          "rgbHex": "#8aff6e",
          "rgbDecimal": 9109358,
          "rgbFloat": [
            0.54,
            1,
            0.43
          ],
          "rgbInteger": [
            138,
            255,
            110
          ]
        },
        {
          "score": 600,
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
          "score": 575,
          "rgbHex": "#9bff80",
          "rgbDecimal": 10223488,
          "rgbFloat": [
            0.61,
            1,
            0.5
          ],
          "rgbInteger": [
            155,
            255,
            128
          ]
        },
        {
          "score": 550,
          "rgbHex": "#a4ff89",
          "rgbDecimal": 10813321,
          "rgbFloat": [
            0.64,
            1,
            0.54
          ],
          "rgbInteger": [
            164,
            255,
            137
          ]
        },
        {
          "score": 525,
          "rgbHex": "#abff92",
          "rgbDecimal": 11272082,
          "rgbFloat": [
            0.67,
            1,
            0.57
          ],
          "rgbInteger": [
            171,
            255,
            146
          ]
        },
        {
          "score": 500,
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
          "score": 475,
          "rgbHex": "#baffa3",
          "rgbDecimal": 12255139,
          "rgbFloat": [
            0.73,
            1,
            0.64
          ],
          "rgbInteger": [
            186,
            255,
            163
          ]
        },
        {
          "score": 450,
          "rgbHex": "#c1ffac",
          "rgbDecimal": 12713900,
          "rgbFloat": [
            0.76,
            1,
            0.67
          ],
          "rgbInteger": [
            193,
            255,
            172
          ]
        },
        {
          "score": 425,
          "rgbHex": "#c8ffb4",
          "rgbDecimal": 13172660,
          "rgbFloat": [
            0.78,
            1,
            0.71
          ],
          "rgbInteger": [
            200,
            255,
            180
          ]
        },
        {
          "score": 400,
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
          "score": 375,
          "rgbHex": "#d5ffc5",
          "rgbDecimal": 14024645,
          "rgbFloat": [
            0.84,
            1,
            0.77
          ],
          "rgbInteger": [
            213,
            255,
            197
          ]
        },
        {
          "score": 350,
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
          "score": 325,
          "rgbHex": "#e2ffd5",
          "rgbDecimal": 14876629,
          "rgbFloat": [
            0.89,
            1,
            0.84
          ],
          "rgbInteger": [
            226,
            255,
            213
          ]
        },
        {
          "score": 300,
          "rgbHex": "#e8ffde",
          "rgbDecimal": 15269854,
          "rgbFloat": [
            0.91,
            1,
            0.87
          ],
          "rgbInteger": [
            232,
            255,
            222
          ]
        },
        {
          "score": 275,
          "rgbHex": "#eeffe6",
          "rgbDecimal": 15663078,
          "rgbFloat": [
            0.93,
            1,
            0.9
          ],
          "rgbInteger": [
            238,
            255,
            230
          ]
        },
        {
          "score": 250,
          "rgbHex": "#f4ffee",
          "rgbDecimal": 16056302,
          "rgbFloat": [
            0.96,
            1,
            0.93
          ],
          "rgbInteger": [
            244,
            255,
            238
          ]
        },
        {
          "score": 225,
          "rgbHex": "#f9fff7",
          "rgbDecimal": 16383991,
          "rgbFloat": [
            0.98,
            1,
            0.97
          ],
          "rgbInteger": [
            249,
            255,
            247
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
        const entity = this.rioScoreColors.find(a => a.score < score);
        return entity.rgbHex;
    }
}