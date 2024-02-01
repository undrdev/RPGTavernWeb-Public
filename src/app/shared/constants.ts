export const acTable: {cr:string, ac:number[]}[] = [
  {cr:"1/8", ac:[12, 13]},
  {cr:"1/4", ac:[12, 13, 14, 15]},
  {cr:"1/2", ac:[11, 12, 13, 14, 15]},
  {cr:"1", ac:[9, 13, 14, 15]},
  {cr:"2", ac:[12, 13, 14, 15, 16, 17]},
  {cr:"3", ac:[11, 13, 14, 15, 16, 17, 18]},
  {cr:"4", ac:[12, 13, 14, 15, 16, 17]},
  {cr:"5", ac:[11, 12, 14, 15, 16, 17, 18]},
  {cr:"6", ac:[13, 14, 15, 16, 17, 18]},
  {cr:"7", ac:[14, 15, 16, 17, 18]},
  {cr:"8", ac:[12, 13, 14, 15, 16, 17, 18, 19]},
  {cr:"9", ac:[7, 12, 14, 15, 16, 17, 18]},
  {cr:"10", ac:[15, 16, 17, 18]},
  {cr:"11", ac:[15, 16, 17, 18, 20]},
  {cr:"12", ac:[14, 15, 16, 17, 18, 20]},
  {cr:"13", ac:[15, 16, 18, 19]},
  {cr:"14", ac:[17, 18, 19]},
  {cr:"15", ac:[17, 18, 19]},
  {cr:"16", ac:[17, 18, 19]},
  {cr:"17", ac:[16, 17, 18, 19, 20]},
  {cr:"18", ac:[18, 20]},
  {cr:"19", ac:[18, 19]},
  {cr:"20", ac:[20]},
  {cr:"21", ac:[15, 17, 20]},
  {cr:"22", ac:[19, 20, 22]},
  {cr:"23", ac:[21]},
  {cr:"24", ac:[19, 22]},
  {cr:"25", ac:[20]},
  {cr:"26", ac:[25]},
  {cr:"27", ac:[19]}
]

export const xpTable :number[][] = [
  [25,50,75,100],
  [50,100,150,200],
  [75,150,225,400],
  [125,250,375,500],
  [250,500,750,1100],
  [300,600,900,1400],
  [350,750,1100,1700],
  [450,900,1400,2100],
  [550,1100,1600,2400],
  [600,1200,1900,2800],
  [800,1600,2400,3600],
  [1000,2000,3000,4500],
  [1100,2200,3400,5100],
  [1250,2500,3800,5700],
  [1400,2800,4300,6400],
  [1600,3200,4800,7200],
  [2000,3900,5900,8800],
  [2100,4200,6300,9500],
  [2400,4900,7300,10900],
  [2800,5700,8500,12700]
];

export const crTable :{xp :number, cr :string, crNum: number}[] = [
  {xp :25, cr:"1/8", crNum: 0.125},
  {xp :50, cr:"1/4", crNum: 0.25},
  {xp :100, cr:"1/2", crNum: 0.5},
  {xp :200, cr:"1", crNum: 1},
  {xp :450, cr:"2", crNum: 2},
  {xp :700, cr:"3", crNum: 3},
  {xp :1100, cr:"4", crNum: 4},
  {xp :1800, cr:"5", crNum: 5},
  {xp :2300, cr:"6", crNum: 6},
  {xp :2900, cr:"7", crNum: 7},
  {xp :3900, cr:"8", crNum: 8},
  {xp :5000, cr:"9", crNum: 9},
  {xp :5900, cr:"10", crNum: 10},
  {xp :7200, cr:"11", crNum: 11},
  {xp :8400, cr:"12", crNum: 12},
  {xp :10000, cr:"13", crNum: 13},
  {xp :11500, cr:"14", crNum: 14},
  {xp :13000, cr:"15", crNum: 15},
  {xp :15000, cr:"16", crNum: 16},
  {xp :18000, cr:"17", crNum: 17},
  {xp :20000, cr:"18", crNum: 18},
  {xp :22000, cr:"19", crNum: 19},
  {xp :25000, cr:"20", crNum: 20},
  {xp :22000, cr:"21", crNum: 21},
  {xp :41000, cr:"22", crNum: 22},
  {xp :50000, cr:"23", crNum: 23},
  {xp :62000, cr:"24", crNum: 24},
  {xp :155000, cr:"30", crNum: 30},
]

export const justTypes :string[] = [
  "Aberration",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead"
]

export const crTypes :{cr: string, types: {name: string, ac: number[]}[]}[] = [
  {
    "cr": "12",
    "types": [
      {
        "name": "Beast",
        "ac": [14]
      },
      {
        "name": "Celestial",
        "ac": [15, 20]
      },
      {
        "name": "Construct",
        "ac": [18]
      },
      {
        "name": "Dragon",
        "ac": [18]
      },
      {
        "name": "Fey",
        "ac": [18]
      },
      {
        "name": "Fiend",
        "ac": [15, 18]
      },
      {
        "name": "Giant",
        "ac": [17]
      },
      {
        "name": "Monstrosity",
        "ac": [17]
      },
      {
        "name": "Undead",
        "ac": [16, 17, 18]
      }
    ]
  },
  {
    "cr": "1",
    "types": [
      {
        "name": "Beast",
        "ac": [14, 15]
      },
      {
        "name": "Construct",
        "ac": [13, 14, 15]
      },
      {
        "name": "Dragon",
        "ac": [14]
      },
      {
        "name": "Elemental",
        "ac": [13]
      },
      {
        "name": "Fey",
        "ac": [13, 14, 15]
      },
      {
        "name": "Humanoid",
        "ac": [13, 14, 15]
      },
      {
        "name": "Monstrosity",
        "ac": [14]
      },
      {
        "name": "Plant",
        "ac": [13]
      },
      {
        "name": "Undead",
        "ac": [9, 13]
      }
    ]
  },
  {
    "cr": "11",
    "types": [
      {
        "name": "Aberration",
        "ac": [16]
      },
      {
        "name": "Beast",
        "ac": [17]
      },
      {
        "name": "Celestial",
        "ac": [16, 17]
      },
      {
        "name": "Construct",
        "ac": [20]
      },
      {
        "name": "Dragon",
        "ac": [17]
      },
      {
        "name": "Fey",
        "ac": [16, 17, 18, 20]
      },
      {
        "name": "Fiend",
        "ac": [15, 18]
      },
      {
        "name": "Plant",
        "ac": [15]
      },
      {
        "name": "Undead",
        "ac": [16, 18]
      }
    ]
  },
  {
    "cr": "4",
    "types": [
      {
        "name": "Aberration",
        "ac": [14, 15, 16]
      },
      {
        "name": "Beast",
        "ac": [15]
      },
      {
        "name": "Celestial",
        "ac": [14, 16]
      },
      {
        "name": "Dragon",
        "ac": [16]
      },
      {
        "name": "Fey",
        "ac": [13, 15]
      },
      {
        "name": "Giant",
        "ac": [14, 15, 17]
      },
      {
        "name": "Humanoid",
        "ac": [13, 14, 15, 16, 17]
      },
      {
        "name": "Monstrosity",
        "ac": [14]
      },
      {
        "name": "Ooze",
        "ac": [13, 14]
      },
      {
        "name": "Plant",
        "ac": [15, 16]
      },
      {
        "name": "Swarm of tiny aberrations",
        "ac": [15]
      },
      {
        "name": "Swarm of tiny beasts",
        "ac": [14, 15]
      },
      {
        "name": "Undead",
        "ac": [12, 14, 15, 16]
      }
    ]
  },
  {
    "cr": "8",
    "types": [
      {
        "name": "Aberration",
        "ac": [16, 19]
      },
      {
        "name": "Beast",
        "ac": [17]
      },
      {
        "name": "Celestial",
        "ac": [16]
      },
      {
        "name": "Construct",
        "ac": [16, 17]
      },
      {
        "name": "Dragon",
        "ac": [17]
      },
      {
        "name": "Elemental",
        "ac": [17]
      },
      {
        "name": "Fey",
        "ac": [17]
      },
      {
        "name": "Fiend",
        "ac": [16, 18]
      },
      {
        "name": "Giant",
        "ac": [12]
      },
      {
        "name": "Humanoid",
        "ac": [14, 15]
      },
      {
        "name": "Monstrosity",
        "ac": [13, 15]
      },
      {
        "name": "Plant",
        "ac": [16]
      },
      {
        "name": "Undead",
        "ac": [14, 17]
      }
    ]
  },
  {
    "cr": "10",
    "types": [
      {
        "name": "Celestial",
        "ac": [18]
      },
      {
        "name": "Construct",
        "ac": [17, 18]
      },
      {
        "name": "Elemental",
        "ac": [16, 17]
      },
      {
        "name": "Fey",
        "ac": [17]
      },
      {
        "name": "Fiend",
        "ac": [15, 17]
      },
      {
        "name": "Swarm of tiny undead",
        "ac": [17]
      }
    ]
  },
  {
    "cr": "1/2",
    "types": [
      {
        "name": "Beast",
        "ac": [11, 13]
      },
      {
        "name": "Construct",
        "ac": [13, 14]
      },
      {
        "name": "Dragon",
        "ac": [13]
      },
      {
        "name": "Fey",
        "ac": [13, 14, 15]
      },
      {
        "name": "Humanoid",
        "ac": [13, 14, 15]
      },
      {
        "name": "Monstrosity",
        "ac": [13, 14]
      },
      {
        "name": "Plant",
        "ac": [13]
      },
      {
        "name": "Undead",
        "ac": [12, 13]
      }
    ]
  },
  {
    "cr": "3",
    "types": [
      {
        "name": "Aberration",
        "ac": [14, 15]
      },
      {
        "name": "Beast",
        "ac": [14, 15, 18]
      },
      {
        "name": "Construct",
        "ac": [14]
      },
      {
        "name": "Dragon",
        "ac": [17, 18]
      },
      {
        "name": "Fey",
        "ac": [13, 14, 15, 16, 17]
      },
      {
        "name": "Giant",
        "ac": [13]
      },
      {
        "name": "Humanoid",
        "ac": [14, 15, 16]
      },
      {
        "name": "Monstrosity",
        "ac": [14, 15]
      },
      {
        "name": "Plant",
        "ac": [14, 15]
      },
      {
        "name": "Swarm of tiny beasts",
        "ac": [13]
      },
      {
        "name": "Swarm of tiny constructs",
        "ac": [14]
      },
      {
        "name": "Swarm of tiny fey",
        "ac": [13]
      },
      {
        "name": "Undead",
        "ac": [11, 16]
      }
    ]
  },
  {
    "cr": "15",
    "types": [
      {
        "name": "Aberration",
        "ac": [18]
      },
      {
        "name": "Celestial",
        "ac": [18]
      },
      {
        "name": "Dragon",
        "ac": [19]
      },
      {
        "name": "Elemental",
        "ac": [19]
      },
      {
        "name": "Fiend",
        "ac": [17]
      },
      {
        "name": "Swarm of tiny elementals",
        "ac": [17]
      }
    ]
  },
  {
    "cr": "6",
    "types": [
      {
        "name": "Aberration",
        "ac": [16]
      },
      {
        "name": "Beast",
        "ac": [15]
      },
      {
        "name": "Construct",
        "ac": [16]
      },
      {
        "name": "Dragon",
        "ac": [15, 16, 17]
      },
      {
        "name": "Elemental",
        "ac": [15]
      },
      {
        "name": "Fey",
        "ac": [15, 16, 17]
      },
      {
        "name": "Fiend",
        "ac": [13, 15, 16]
      },
      {
        "name": "Giant",
        "ac": [17]
      },
      {
        "name": "Humanoid",
        "ac": [17, 18]
      },
      {
        "name": "Monstrosity",
        "ac": [13, 14, 15]
      },
      {
        "name": "Plant",
        "ac": [17]
      },
      {
        "name": "Swarm of medium undead",
        "ac": [16]
      },
      {
        "name": "Swarm of tiny beasts",
        "ac": [15]
      },
      {
        "name": "Undead",
        "ac": [14, 15, 17]
      }
    ]
  },
  {
    "cr": "5",
    "types": [
      {
        "name": "Aberration",
        "ac": [14, 15]
      },
      {
        "name": "Beast",
        "ac": [14, 15, 16]
      },
      {
        "name": "Celestial",
        "ac": [14, 15, 16]
      },
      {
        "name": "Construct",
        "ac": [15, 16]
      },
      {
        "name": "Dragon",
        "ac": [15, 16]
      },
      {
        "name": "Fey",
        "ac": [15, 18]
      },
      {
        "name": "Fiend",
        "ac": [15, 17]
      },
      {
        "name": "Humanoid",
        "ac": [14, 15, 16, 17, 18]
      },
      {
        "name": "Monstrosity",
        "ac": [14, 15, 16, 17]
      },
      {
        "name": "Ooze",
        "ac": [12]
      },
      {
        "name": "Plant",
        "ac": [15, 17]
      },
      {
        "name": "Undead",
        "ac": [11, 12, 15, 16]
      }
    ]
  },
  {
    "cr": "2",
    "types": [
      {
        "name": "Beast",
        "ac": [14]
      },
      {
        "name": "Celestial",
        "ac": [14]
      },
      {
        "name": "Construct",
        "ac": [12, 13]
      },
      {
        "name": "Dragon",
        "ac": [13, 16, 17]
      },
      {
        "name": "Elemental",
        "ac": [13, 14]
      },
      {
        "name": "Fey",
        "ac": [14, 15]
      },
      {
        "name": "Fiend",
        "ac": [14]
      },
      {
        "name": "Humanoid",
        "ac": [13, 14, 15]
      },
      {
        "name": "Monstrosity",
        "ac": [13, 14, 15]
      },
      {
        "name": "Plant",
        "ac": [13]
      },
      {
        "name": "Swarm of tiny monstrosities",
        "ac": [15]
      },
      {
        "name": "Undead",
        "ac": [13]
      }
    ]
  },
  {
    "cr": "1/4",
    "types": [
      {
        "name": "Aberration",
        "ac": [14]
      },
      {
        "name": "Beast",
        "ac": [13, 14]
      },
      {
        "name": "Construct",
        "ac": [13, 14, 15]
      },
      {
        "name": "Fey",
        "ac": [14]
      },
      {
        "name": "Fiend",
        "ac": [14]
      },
      {
        "name": "Humanoid",
        "ac": [12, 13, 14, 15]
      },
      {
        "name": "Ooze",
        "ac": [13, 15]
      }
    ]
  },
  {
    "cr": "17",
    "types": [
      {
        "name": "Aberration",
        "ac": [19]
      },
      {
        "name": "Dragon",
        "ac": [19]
      },
      {
        "name": "Elemental",
        "ac": [16, 20]
      },
      {
        "name": "Fey",
        "ac": [17, 18]
      },
      {
        "name": "Fiend",
        "ac": [18]
      }
    ]
  },
  {
    "cr": "9",
    "types": [
      {
        "name": "Aberration",
        "ac": [17]
      },
      {
        "name": "Construct",
        "ac": [18]
      },
      {
        "name": "Dragon",
        "ac": [17, 18]
      },
      {
        "name": "Elemental",
        "ac": [17]
      },
      {
        "name": "Fiend",
        "ac": [14]
      },
      {
        "name": "Giant",
        "ac": [17]
      },
      {
        "name": "Humanoid",
        "ac": [12]
      },
      {
        "name": "Monstrosity",
        "ac": [15, 16, 17]
      },
      {
        "name": "Ooze",
        "ac": [7]
      },
      {
        "name": "Plant",
        "ac": [16]
      }
    ]
  },
  {
    "cr": "14",
    "types": [
      {
        "name": "Construct",
        "ac": [17]
      },
      {
        "name": "Dragon",
        "ac": [18, 19]
      },
      {
        "name": "Fiend",
        "ac": [19]
      },
      {
        "name": "Monstrosity",
        "ac": [17, 18]
      }
    ]
  },
  {
    "cr": "7",
    "types": [
      {
        "name": "Aberration",
        "ac": [15, 16]
      },
      {
        "name": "Beast",
        "ac": [15]
      },
      {
        "name": "Construct",
        "ac": [14]
      },
      {
        "name": "Dragon",
        "ac": [16]
      },
      {
        "name": "Elemental",
        "ac": [16]
      },
      {
        "name": "Fey",
        "ac": [14, 15]
      },
      {
        "name": "Fiend",
        "ac": [14, 15, 16, 17]
      },
      {
        "name": "Giant",
        "ac": [15]
      },
      {
        "name": "Humanoid",
        "ac": [16, 18]
      },
      {
        "name": "Plant",
        "ac": [16]
      },
      {
        "name": "Swarm of tiny elementals",
        "ac": [15]
      },
      {
        "name": "Undead",
        "ac": [15]
      }
    ]
  },
  {
    "cr": "1/8",
    "types": [
      {
        "name": "Beast",
        "ac": [13]
      },
      {
        "name": "Fey",
        "ac": [12]
      },
      {
        "name": "Monstrosity",
        "ac": [13]
      },
      {
        "name": "Undead",
        "ac": [13]
      }
    ]
  },
  {
    "cr": "21",
    "types": [
      {
        "name": "Fey",
        "ac": [15]
      },
      {
        "name": "Fiend",
        "ac": [17, 20]
      }
    ]
  },
  {
    "cr": "22",
    "types": [
      {
        "name": "Dragon",
        "ac": [20, 22]
      },
      {
        "name": "Fiend",
        "ac": [19]
      },
      {
        "name": "Giant",
        "ac": [20]
      }
    ]
  },
  {
    "cr": "27",
    "types": [
      {
        "name": "Fiend",
        "ac": [19]
      }
    ]
  },
  {
    "cr": "23",
    "types": [
      {
        "name": "Fiend",
        "ac": [21]
      }
    ]
  },
  {
    "cr": "25",
    "types": [
      {
        "name": "Fiend",
        "ac": [20]
      }
    ]
  },
  {
    "cr": "24",
    "types": [
      {
        "name": "Dragon",
        "ac": [22]
      },
      {
        "name": "Fiend",
        "ac": [19]
      }
    ]
  },
  {
    "cr": "13",
    "types": [
      {
        "name": "Beast",
        "ac": [15]
      },
      {
        "name": "Construct",
        "ac": [18]
      },
      {
        "name": "Fiend",
        "ac": [18]
      },
      {
        "name": "Undead",
        "ac": [16, 18, 19]
      }
    ]
  },
  {
    "cr": "16",
    "types": [
      {
        "name": "Dragon",
        "ac": [18, 19]
      },
      {
        "name": "Fey",
        "ac": [17, 18]
      }
    ]
  },
  {
    "cr": "18",
    "types": [
      {
        "name": "Dragon",
        "ac": [20]
      },
      {
        "name": "Fey",
        "ac": [18]
      }
    ]
  },
  {
    "cr": "20",
    "types": [
      {
        "name": "Undead",
        "ac": [20]
      }
    ]
  },
  {
    "cr": "19",
    "types": [
      {
        "name": "Aberration",
        "ac": [18]
      },
      {
        "name": "Giant",
        "ac": [19]
      }
    ]
  },
  {
    "cr": "26",
    "types": [
      {
        "name": "Monstrosity",
        "ac": [25]
      }
    ]
  }
]


export const sizes :string[] = [
  "Tiny",
  "Small",
  "Medium",
  "Large",
  "Huge",
  "Gargantuan"
]

export const difficulties = [
  "Easy",
  "Moderate",
  "Hard",
  "Deadly"
];
