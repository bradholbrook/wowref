// 3.3.5a WotLK reference data. Sourced from the compass artifacts.

export const slug = (s) =>
  s.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ── Classes ─────────────────────────────────────────────────────
export const CLASSES = [
  { id: 'warrior',     name: 'Warrior',      color: '#C79C6E', enabled: true  },
  { id: 'paladin',     name: 'Paladin',      color: '#F58CBA', enabled: false },
  { id: 'hunter',      name: 'Hunter',       color: '#ABD473', enabled: false },
  { id: 'rogue',       name: 'Rogue',        color: '#FFF569', enabled: false },
  { id: 'priest',      name: 'Priest',       color: '#FFFFFF', enabled: false },
  { id: 'deathknight', name: 'Death Knight', color: '#C41F3B', enabled: false },
  { id: 'shaman',      name: 'Shaman',       color: '#0070DE', enabled: false },
  { id: 'mage',        name: 'Mage',         color: '#69CCF0', enabled: false },
  { id: 'warlock',     name: 'Warlock',      color: '#9482C9', enabled: false },
  { id: 'druid',       name: 'Druid',        color: '#FF7D0A', enabled: false },
];

export const WARRIOR = {
  color: '#C79C6E',
  specs: [
    {
      id: 'arms', name: 'Arms', role: 'DPS',
      priority: ['Hit', 'Expertise', 'ArP', 'Strength', 'Crit', 'Haste'],
      caps: [
        { label: 'Hit',       value: '8% / 263',   note: '7% Draenei' },
        { label: 'Expertise', value: '26 / 214',   note: 'soft cap' },
        { label: 'ArP',       value: '1260',       note: 'Battle Stance +10%' },
        { label: 'Strength',  value: 'stack',      note: '+4% from Strength of Arms' },
      ],
      signatures: [
        { lvl: 30, name: 'Sweeping Strikes' },
        { lvl: 40, name: 'Mortal Strike' },
        { lvl: 60, name: 'Bladestorm' },
      ],
    },
    {
      id: 'fury', name: 'Fury', role: 'DPS',
      priority: ['Hit', 'Expertise', 'ArP', 'Strength', 'Crit', 'Haste'],
      caps: [
        { label: 'Hit',       value: '8% / 263',   note: 'Precision +3%' },
        { label: 'Expertise', value: '26 / 214',   note: 'no talent — all gear' },
        { label: 'ArP',       value: '1400',       note: 'hard cap' },
        { label: 'Strength',  value: 'stack',      note: 'crit > ArP pre-Phase 3' },
      ],
      signatures: [
        { lvl: 30, name: 'Death Wish' },
        { lvl: 40, name: 'Bloodthirst' },
        { lvl: 50, name: 'Rampage' },
        { lvl: 60, name: "Titan's Grip" },
      ],
    },
    {
      id: 'prot', name: 'Protection', role: 'Tank',
      priority: ['Defense', 'Stamina', 'Hit', 'Expertise', 'Avoidance'],
      caps: [
        { label: 'Defense',   value: '540 / 689',  note: 'uncrittable vs bosses' },
        { label: 'Hit',       value: '8% / 263',   note: 'Glyph of Taunt covers spell hit' },
        { label: 'Expertise', value: '26',         note: 'Vitality +6' },
        { label: 'Stamina',   value: 'stack',      note: 'EH > avoidance' },
      ],
      signatures: [
        { lvl: 20, name: 'Last Stand' },
        { lvl: 30, name: 'Concussion Blow' },
        { lvl: 50, name: 'Devastate' },
        { lvl: 60, name: 'Shockwave' },
      ],
    },
  ],
};

// ── Professions ─────────────────────────────────────────────────
export const PROFESSIONS = [
  { id: 'mining',        name: 'Mining',        kind: 'gathering', enabled: true  },
  { id: 'herbalism',     name: 'Herbalism',     kind: 'gathering', enabled: true  },
  { id: 'skinning',      name: 'Skinning',      kind: 'gathering', enabled: true  },
  { id: 'blacksmithing', name: 'Blacksmithing', kind: 'crafting',  enabled: false },
  { id: 'engineering',   name: 'Engineering',   kind: 'crafting',  enabled: false },
  { id: 'jewelcrafting', name: 'Jewelcrafting', kind: 'crafting',  enabled: false },
  { id: 'enchanting',    name: 'Enchanting',    kind: 'crafting',  enabled: false },
  { id: 'leatherworking',name: 'Leatherworking',kind: 'crafting',  enabled: false },
  { id: 'tailoring',     name: 'Tailoring',     kind: 'crafting',  enabled: false },
  { id: 'alchemy',       name: 'Alchemy',       kind: 'crafting',  enabled: false },
  { id: 'inscription',   name: 'Inscription',   kind: 'crafting',  enabled: false },
];

// `skill` = required (orange). Yellow/Green/Gray derive as +25/+50/+75.
export const MINING = [
  { id: 'copper',     name: 'Copper',             skill: 1,   zones: ['Durotar', 'Mulgore', 'Tirisfal Glades', 'Dun Morogh', 'Elwynn Forest', 'The Barrens'] },
  { id: 'tin',        name: 'Tin',                skill: 65,  zones: ['The Barrens', 'Hillsbrad Foothills', 'Ashenvale', 'Thousand Needles'] },
  { id: 'silver',     name: 'Silver',             skill: 75,  zones: ['Arathi Highlands', 'The Barrens', 'Thousand Needles', 'Hillsbrad Foothills'] },
  { id: 'iron',       name: 'Iron',               skill: 125, zones: ['Arathi Highlands', 'Desolace', 'Thousand Needles', 'Alterac Mountains'] },
  { id: 'gold',       name: 'Gold',               skill: 155, zones: ['Arathi Highlands', 'Badlands', 'Tanaris', 'The Hinterlands'] },
  { id: 'mithril',    name: 'Mithril',            skill: 175, zones: ['The Hinterlands', 'Tanaris', 'Burning Steppes', 'Azshara'] },
  { id: 'truesilver', name: 'Truesilver',         skill: 205, zones: ['Winterspring', 'The Hinterlands', 'Burning Steppes', "Un'Goro Crater"] },
  { id: 'thorium',    name: 'Small Thorium Vein', skill: 245, zones: ["Un'Goro Crater", 'Eastern Plaguelands', 'Winterspring', 'Burning Steppes', 'Silithus'] },
  { id: 'richthorium',name: 'Rich Thorium Vein',  skill: 275, zones: ["Un'Goro Crater", 'Winterspring', 'Burning Steppes', 'Azshara'] },
  { id: 'feliron',    name: 'Fel Iron',           skill: 300, zones: ['Hellfire Peninsula', 'Zangarmarsh'] },
  { id: 'adamantite', name: 'Adamantite',         skill: 325, zones: ['Nagrand', "Blade's Edge Mountains", 'Netherstorm', 'Shadowmoon Valley', 'Terokkar Forest'] },
  { id: 'richadam',   name: 'Rich Adamantite',    skill: 350, zones: ['Netherstorm', 'Shadowmoon Valley', 'Nagrand'] },
  { id: 'cobalt',     name: 'Cobalt',             skill: 350, zones: ['Borean Tundra', 'Howling Fjord', "Zul'Drak", 'Dragonblight', 'Grizzly Hills'] },
  { id: 'richcobalt', name: 'Rich Cobalt',        skill: 375, zones: ['Howling Fjord', 'Borean Tundra', "Zul'Drak"] },
  { id: 'saronite',   name: 'Saronite',           skill: 400, zones: ['Icecrown', 'Sholazar Basin', 'The Storm Peaks', 'Wintergrasp'] },
  { id: 'richsar',    name: 'Rich Saronite',      skill: 425, zones: ['Icecrown', 'Wintergrasp', 'Sholazar Basin'] },
  { id: 'titanium',   name: 'Titanium',           skill: 450, zones: ['Icecrown', 'Sholazar Basin', 'The Storm Peaks', 'Wintergrasp'] },
];

export const HERBS = [
  { id: 'peacebloom',     name: 'Peacebloom',          skill: 1,   zones: ['Durotar', 'Mulgore', 'Tirisfal Glades', 'Elwynn Forest', 'Dun Morogh'] },
  { id: 'silverleaf',     name: 'Silverleaf',          skill: 1,   zones: ['Durotar', 'Mulgore', 'Tirisfal Glades', 'Elwynn Forest', 'Dun Morogh'] },
  { id: 'earthroot',      name: 'Earthroot',           skill: 15,  zones: ['Durotar', 'Mulgore', 'Tirisfal Glades', 'Elwynn Forest', 'Dun Morogh'] },
  { id: 'mageroyal',      name: 'Mageroyal',           skill: 50,  zones: ['The Barrens', 'Silverpine Forest', 'Loch Modan', 'Darkshore'] },
  { id: 'briarthorn',     name: 'Briarthorn',          skill: 70,  zones: ['The Barrens', 'Silverpine Forest', 'Loch Modan', 'Darkshore'] },
  { id: 'stranglekelp',   name: 'Stranglekelp',        skill: 85,  zones: ['Stranglethorn Vale', 'Hillsbrad Foothills', 'Wetlands', 'Desolace'] },
  { id: 'bruiseweed',     name: 'Bruiseweed',          skill: 100, zones: ['Hillsbrad Foothills', 'Wetlands', 'Stonetalon Mountains'] },
  { id: 'wildsteelbloom', name: 'Wild Steelbloom',     skill: 115, zones: ['Arathi Highlands', 'Stranglethorn Vale', 'Badlands'] },
  { id: 'kingsblood',     name: 'Kingsblood',          skill: 125, zones: ['Hillsbrad Foothills', 'Arathi Highlands', 'Stranglethorn Vale', 'Stonetalon Mountains'] },
  { id: 'liferoot',       name: 'Liferoot',            skill: 150, zones: ['Hillsbrad Foothills', 'Arathi Highlands', 'Wetlands', 'The Hinterlands'] },
  { id: 'fadeleaf',       name: 'Fadeleaf',            skill: 160, zones: ['Stranglethorn Vale', 'Arathi Highlands'] },
  { id: 'goldthorn',      name: 'Goldthorn',           skill: 170, zones: ['Arathi Highlands', 'Stranglethorn Vale', 'Hillsbrad Foothills'] },
  { id: 'khadgarswhisker',name: "Khadgar's Whisker",   skill: 185, zones: ['Stranglethorn Vale', 'Arathi Highlands', 'The Hinterlands', 'Alterac Mountains'] },
  { id: 'wintersbite',    name: 'Wintersbite',         skill: 195, zones: ['Alterac Mountains', 'Winterspring'] },
  { id: 'firebloom',      name: 'Firebloom',           skill: 205, zones: ['Searing Gorge', 'Tanaris', 'Blasted Lands', 'Badlands'] },
  { id: 'purplelotus',    name: 'Purple Lotus',        skill: 210, zones: ['Tanaris', 'Feralas', 'The Hinterlands', 'Dustwallow Marsh'] },
  { id: 'arthastears',    name: "Arthas' Tears",       skill: 220, zones: ['Eastern Plaguelands', 'Western Plaguelands', 'Felwood'] },
  { id: 'sungrass',       name: 'Sungrass',            skill: 230, zones: ['The Hinterlands', 'Felwood', 'Feralas', 'Dustwallow Marsh'] },
  { id: 'blindweed',      name: 'Blindweed',           skill: 235, zones: ['Swamp of Sorrows', 'Tanaris'] },
  { id: 'ghostmushroom',  name: 'Ghost Mushroom',      skill: 245, zones: ['The Hinterlands', 'Desolace', "Un'Goro Crater", 'Western Plaguelands'] },
  { id: 'gromsblood',     name: 'Gromsblood',          skill: 250, zones: ['Felwood', 'Desolace', 'Blasted Lands'] },
  { id: 'goldensansam',   name: 'Golden Sansam',       skill: 260, zones: ['The Hinterlands', 'Felwood', 'Eastern Plaguelands', "Un'Goro Crater", 'Burning Steppes', 'Winterspring'] },
  { id: 'dreamfoil',      name: 'Dreamfoil',           skill: 270, zones: ['Felwood', 'Silithus', "Un'Goro Crater", 'Azshara', 'Eastern Plaguelands'] },
  { id: 'mountainsilversage',name:'Mountain Silversage',skill: 280, zones: ['Felwood', 'Silithus', 'Winterspring', 'Burning Steppes'] },
  { id: 'plaguebloom',    name: 'Plaguebloom',         skill: 285, zones: ['Felwood', 'Eastern Plaguelands'] },
  { id: 'icecap',         name: 'Icecap',              skill: 290, zones: ['Winterspring'] },
  { id: 'blacklotus',     name: 'Black Lotus',         skill: 300, zones: ['Silithus', 'Eastern Plaguelands', 'Burning Steppes', 'Winterspring'] },
  { id: 'felweed',        name: 'Felweed',             skill: 300, zones: ['Hellfire Peninsula', 'Zangarmarsh', 'Terokkar Forest', 'Nagrand', "Blade's Edge Mountains", 'Netherstorm', 'Shadowmoon Valley'] },
  { id: 'dreamingglory',  name: 'Dreaming Glory',      skill: 315, zones: ['Hellfire Peninsula', 'Nagrand', "Blade's Edge Mountains"] },
  { id: 'ragveil',        name: 'Ragveil',             skill: 325, zones: ['Zangarmarsh'] },
  { id: 'flamecap',       name: 'Flame Cap',           skill: 335, zones: ['Zangarmarsh'] },
  { id: 'terocone',       name: 'Terocone',            skill: 340, zones: ['Terokkar Forest'] },
  { id: 'ancientlichen',  name: 'Ancient Lichen',      skill: 340, zones: ['Terokkar Forest'] },
  { id: 'netherbloom',    name: 'Netherbloom',         skill: 350, zones: ['Netherstorm'] },
  { id: 'nightmarevine',  name: 'Nightmare Vine',      skill: 365, zones: ['Shadowmoon Valley', 'Hellfire Peninsula'] },
  { id: 'manathistle',    name: 'Mana Thistle',        skill: 375, zones: ['Netherstorm', "Blade's Edge Mountains", "Isle of Quel'Danas"] },
  { id: 'goldclover',     name: 'Goldclover',          skill: 350, zones: ['Howling Fjord', 'Borean Tundra', 'Sholazar Basin', 'Grizzly Hills', 'Dragonblight'] },
  { id: 'firethorn',      name: 'Firethorn',           skill: 360, zones: ['Borean Tundra'] },
  { id: 'tigerlily',      name: 'Tiger Lily',          skill: 375, zones: ['Sholazar Basin', 'Grizzly Hills', 'Howling Fjord', 'Borean Tundra'] },
  { id: 'talandrasrose',  name: "Talandra's Rose",     skill: 385, zones: ["Zul'Drak"] },
  { id: 'adderstongue',   name: "Adder's Tongue",      skill: 400, zones: ['Sholazar Basin'] },
  { id: 'frozenherb',     name: 'Frozen Herb',         skill: 385, zones: ['Dragonblight', "Zul'Drak", 'Wintergrasp'] },
  { id: 'lichbloom',      name: 'Lichbloom',           skill: 425, zones: ['Icecrown', 'The Storm Peaks', 'Wintergrasp'] },
  { id: 'icethorn',       name: 'Icethorn',            skill: 435, zones: ['The Storm Peaks', 'Icecrown'] },
  { id: 'frostlotus',     name: 'Frost Lotus',         skill: 450, zones: ['Wintergrasp'] },
];

// Skinning is tier-based: each "leather" tier has a soft skill window and best farms.
export const SKINNING = [
  { id: 'lightleather',  name: 'Light Leather',  skill: 1,   zones: ['Durotar', 'Mulgore', 'Tirisfal Glades', 'Elwynn Forest', 'Dun Morogh'] },
  { id: 'mediumleather', name: 'Medium Leather', skill: 100, zones: ['Ashenvale', 'Hillsbrad Foothills', 'Stonetalon Mountains', 'The Barrens'] },
  { id: 'heavyleather',  name: 'Heavy Leather',  skill: 150, zones: ['Arathi Highlands', 'The Hinterlands', 'Feralas', 'Thousand Needles', 'Desolace'] },
  { id: 'thickleather',  name: 'Thick Leather',  skill: 200, zones: ['Badlands', "Un'Goro Crater", 'Tanaris'] },
  { id: 'ruggedleather', name: 'Rugged Leather', skill: 250, zones: ['Winterspring', 'Western Plaguelands', 'Burning Steppes', 'Silithus', 'Tanaris'] },
  { id: 'knothideleather',name:'Knothide Leather',skill: 300, zones: ['Hellfire Peninsula', 'Nagrand'] },
  { id: 'boreanleather', name: 'Borean Leather', skill: 350, zones: ['Sholazar Basin', 'Borean Tundra', 'Grizzly Hills'] },
  { id: 'arcticfur',     name: 'Arctic Fur',     skill: 350, zones: ['Sholazar Basin', 'Crystalsong Forest', 'The Storm Peaks'] },
  { id: 'jormungarscale',name: 'Jormungar Scale',skill: 385, zones: ['The Storm Peaks'] },
  { id: 'nerubianchitin',name: 'Nerubian Chitin',skill: 385, zones: ['Icecrown', "Zul'Drak", 'Borean Tundra'] },
  { id: 'icydragonscale', name: 'Icy Dragonscale',skill: 400, zones: ['Crystalsong Forest', 'Coldarra'] },
];

// ── Zones ───────────────────────────────────────────────────────
// Continents: ek (Eastern Kingdoms), kal (Kalimdor), out (Outland), nor (Northrend)
export const ZONES = [
  // Eastern Kingdoms
  { name: 'Dun Morogh',           continent: 'Eastern Kingdoms', min: 1,  max: 10, faction: 'Alliance' },
  { name: 'Elwynn Forest',        continent: 'Eastern Kingdoms', min: 1,  max: 10, faction: 'Alliance' },
  { name: 'Tirisfal Glades',      continent: 'Eastern Kingdoms', min: 1,  max: 10, faction: 'Horde' },
  { name: 'Eversong Woods',       continent: 'Eastern Kingdoms', min: 1,  max: 10, faction: 'Horde' },
  { name: 'Ghostlands',           continent: 'Eastern Kingdoms', min: 10, max: 20, faction: 'Horde' },
  { name: 'Loch Modan',           continent: 'Eastern Kingdoms', min: 10, max: 20, faction: 'Alliance' },
  { name: 'Silverpine Forest',    continent: 'Eastern Kingdoms', min: 10, max: 20, faction: 'Horde' },
  { name: 'Westfall',             continent: 'Eastern Kingdoms', min: 10, max: 20, faction: 'Alliance' },
  { name: 'Redridge Mountains',   continent: 'Eastern Kingdoms', min: 15, max: 25, faction: 'Alliance' },
  { name: 'Duskwood',             continent: 'Eastern Kingdoms', min: 20, max: 30, faction: 'Alliance' },
  { name: 'Hillsbrad Foothills',  continent: 'Eastern Kingdoms', min: 20, max: 30, faction: 'Contested' },
  { name: 'Wetlands',             continent: 'Eastern Kingdoms', min: 20, max: 30, faction: 'Alliance' },
  { name: 'Alterac Mountains',    continent: 'Eastern Kingdoms', min: 30, max: 40, faction: 'Contested' },
  { name: 'Arathi Highlands',     continent: 'Eastern Kingdoms', min: 30, max: 40, faction: 'Contested' },
  { name: 'Stranglethorn Vale',   continent: 'Eastern Kingdoms', min: 30, max: 45, faction: 'Contested' },
  { name: 'Badlands',             continent: 'Eastern Kingdoms', min: 35, max: 45, faction: 'Contested' },
  { name: 'Swamp of Sorrows',     continent: 'Eastern Kingdoms', min: 35, max: 45, faction: 'Contested' },
  { name: 'The Hinterlands',      continent: 'Eastern Kingdoms', min: 40, max: 50, faction: 'Contested' },
  { name: 'Searing Gorge',        continent: 'Eastern Kingdoms', min: 45, max: 50, faction: 'Contested' },
  { name: 'Blasted Lands',        continent: 'Eastern Kingdoms', min: 45, max: 55, faction: 'Contested' },
  { name: 'Burning Steppes',      continent: 'Eastern Kingdoms', min: 50, max: 58, faction: 'Contested' },
  { name: 'Western Plaguelands',  continent: 'Eastern Kingdoms', min: 51, max: 58, faction: 'Contested' },
  { name: 'Eastern Plaguelands',  continent: 'Eastern Kingdoms', min: 53, max: 60, faction: 'Contested' },
  { name: "Isle of Quel'Danas",   continent: 'Eastern Kingdoms', min: 70, max: 70, faction: 'Contested' },

  // Kalimdor
  { name: 'Durotar',              continent: 'Kalimdor', min: 1,  max: 10, faction: 'Horde' },
  { name: 'Mulgore',              continent: 'Kalimdor', min: 1,  max: 10, faction: 'Horde' },
  { name: 'Teldrassil',           continent: 'Kalimdor', min: 1,  max: 10, faction: 'Alliance' },
  { name: 'Azuremyst Isle',       continent: 'Kalimdor', min: 1,  max: 10, faction: 'Alliance' },
  { name: 'Darkshore',            continent: 'Kalimdor', min: 10, max: 20, faction: 'Alliance' },
  { name: 'The Barrens',          continent: 'Kalimdor', min: 10, max: 25, faction: 'Horde' },
  { name: 'Stonetalon Mountains', continent: 'Kalimdor', min: 15, max: 27, faction: 'Contested' },
  { name: 'Ashenvale',            continent: 'Kalimdor', min: 18, max: 30, faction: 'Contested' },
  { name: 'Thousand Needles',     continent: 'Kalimdor', min: 25, max: 35, faction: 'Contested' },
  { name: 'Desolace',             continent: 'Kalimdor', min: 30, max: 40, faction: 'Contested' },
  { name: 'Dustwallow Marsh',     continent: 'Kalimdor', min: 35, max: 45, faction: 'Contested' },
  { name: 'Feralas',              continent: 'Kalimdor', min: 40, max: 50, faction: 'Contested' },
  { name: 'Tanaris',              continent: 'Kalimdor', min: 40, max: 50, faction: 'Contested' },
  { name: 'Azshara',              continent: 'Kalimdor', min: 45, max: 55, faction: 'Contested' },
  { name: 'Felwood',              continent: 'Kalimdor', min: 48, max: 55, faction: 'Contested' },
  { name: "Un'Goro Crater",       continent: 'Kalimdor', min: 48, max: 55, faction: 'Contested' },
  { name: 'Winterspring',         continent: 'Kalimdor', min: 53, max: 60, faction: 'Contested' },
  { name: 'Silithus',             continent: 'Kalimdor', min: 55, max: 60, faction: 'Contested' },

  // Outland
  { name: 'Hellfire Peninsula',   continent: 'Outland', min: 58, max: 63, faction: 'Contested' },
  { name: 'Zangarmarsh',          continent: 'Outland', min: 60, max: 64, faction: 'Contested' },
  { name: 'Terokkar Forest',      continent: 'Outland', min: 62, max: 65, faction: 'Contested' },
  { name: 'Nagrand',              continent: 'Outland', min: 64, max: 67, faction: 'Contested' },
  { name: "Blade's Edge Mountains",continent: 'Outland', min: 65, max: 68, faction: 'Contested' },
  { name: 'Netherstorm',          continent: 'Outland', min: 67, max: 70, faction: 'Contested' },
  { name: 'Shadowmoon Valley',    continent: 'Outland', min: 67, max: 70, faction: 'Contested' },

  // Northrend
  { name: 'Borean Tundra',        continent: 'Northrend', min: 68, max: 72, faction: 'Contested' },
  { name: 'Howling Fjord',        continent: 'Northrend', min: 68, max: 72, faction: 'Contested' },
  { name: 'Dragonblight',         continent: 'Northrend', min: 71, max: 75, faction: 'Contested' },
  { name: 'Grizzly Hills',        continent: 'Northrend', min: 73, max: 75, faction: 'Contested' },
  { name: "Zul'Drak",             continent: 'Northrend', min: 74, max: 77, faction: 'Contested' },
  { name: 'Sholazar Basin',       continent: 'Northrend', min: 76, max: 78, faction: 'Contested' },
  { name: 'The Storm Peaks',      continent: 'Northrend', min: 77, max: 80, faction: 'Contested' },
  { name: 'Icecrown',             continent: 'Northrend', min: 77, max: 80, faction: 'Contested' },
  { name: 'Crystalsong Forest',   continent: 'Northrend', min: 77, max: 80, faction: 'Contested' },
  { name: 'Wintergrasp',          continent: 'Northrend', min: 77, max: 80, faction: 'PvP' },
  { name: 'Coldarra',             continent: 'Northrend', min: 71, max: 73, faction: 'Contested' },
];

// Index zones by slug for lookups
export const ZONE_BY_SLUG = Object.fromEntries(ZONES.map(z => [slug(z.name), z]));

// ── Other tab data ──────────────────────────────────────────────
export const OTHER_CATEGORIES = [
  { id: 'rdf',          name: 'RDF Brackets',     blurb: 'Random dungeon level ranges' },
  { id: 'weaponmasters',name: 'Weapon Masters',   blurb: 'Horde trainers + locations' },
  { id: 'professionperks',name: 'Profession Perks',blurb: 'Combat bonuses ranked for Warriors' },
];

export const RDF = [
  { bracket: 'Classic 15–60', dungeons: [
    ['Ragefire Chasm', 15, 21], ['Deadmines', 15, 21], ['Wailing Caverns', 15, 25],
    ['Shadowfang Keep', 16, 26], ['Blackfathom Deeps', 20, 30], ['Stormwind Stockade', 20, 30],
    ['Gnomeregan', 24, 34], ['Scarlet Monastery', 28, 38], ['Razorfen Kraul', 30, 40],
    ['Uldaman', 35, 45], ['Scholomance', 38, 48], ['Razorfen Downs', 40, 50],
    ['Stratholme', 42, 52], ["Zul'Farrak", 44, 54], ['Blackrock Depths', 47, 61],
    ['Sunken Temple', 50, 60], ['Lower Blackrock Spire', 55, 65],
  ]},
  { bracket: 'TBC Normal 58–80', dungeons: [
    ['Hellfire Ramparts', 57, 67], ['Blood Furnace', 59, 68], ['Slave Pens', 60, 69],
    ['Underbog', 61, 70], ['Mana-Tombs', 62, 70], ['Auchenai Crypts', 63, 70],
    ['Escape from Durnholde', 64, 70], ['Sethekk Halls', 65, 70], ['Shadow Labyrinth', 67, 70],
    ['Shattered Halls', 67, 70], ['Steamvault', 67, 70], ['Botanica', 67, 70],
    ['Mechanar', 67, 70], ['Opening the Dark Portal', 68, 70], ['Arcatraz', 68, 70],
    ["Magisters' Terrace", 68, 70],
  ]},
  { bracket: 'TBC Heroic', dungeons: [['All BC Heroics', 70, 75]] },
  { bracket: 'WotLK Normal 58–80', dungeons: [
    ['Utgarde Keep', 68, 78], ['The Nexus', 69, 79], ['Azjol-Nerub', 71, 81],
    ["Ahn'kahet: Old Kingdom", 72, 82], ["Drak'Tharon Keep", 73, 83], ['The Violet Hold', 73, 83],
    ['Gundrak', 75, 85], ['Halls of Stone', 75, 85], ['Halls of Lightning', 78, 88],
    ['The Oculus', 78, 88], ['Utgarde Pinnacle', 78, 88], ['Culling of Stratholme', 78, 88],
  ]},
  { bracket: 'WotLK Heroic 80', dungeons: [['All WotLK Heroics', 80, 80]] },
];

export const WEAPON_MASTERS = [
  { name: 'Sayoc',     race: 'Orc',       city: 'Orgrimmar',     loc: 'Valley of Honor (81.5, 19.6)', teaches: ['Bows','Daggers','Fist Weapons','1H Axes','2H Axes','Thrown'] },
  { name: 'Hanashi',   race: 'Troll',     city: 'Orgrimmar',     loc: 'Valley of Honor (81.5, 19.6)', teaches: ['Bows','1H Axes','2H Axes','Staves','Thrown'] },
  { name: 'Ansekhwa',  race: 'Tauren',    city: 'Thunder Bluff', loc: "Hunter's Rise (40.9, 62.7)",   teaches: ['Guns','1H Maces','2H Maces','Staves'] },
  { name: 'Archibald', race: 'Forsaken',  city: 'Undercity',     loc: 'War Quarter (57.3, 32.8)',     teaches: ['Crossbows','Daggers','1H Swords','2H Swords','Polearms'] },
  { name: 'Ileda',     race: 'Blood Elf', city: 'Silvermoon',    loc: "Farstriders' Square (91.0, 38.6)", teaches: ['Daggers','Polearms','1H Swords','Staves'] },
];

export const PROFESSION_PERKS = [
  { name: 'Engineering',   tier: 'Top',    note: 'Hyperspeed Accelerators (340 haste/12s) + Nitro Boosts + Reticulated Armor Webbing' },
  { name: 'Jewelcrafting', tier: 'Top',    note: '3× Dragon\'s Eye unique gems (Fractured for ArP, Bold for Str, +63 Sta for tanks)' },
  { name: 'Blacksmithing', tier: 'Solid',  note: 'Socket Bracer + Socket Gloves = 2 extra sockets (~+62 stat)' },
  { name: 'Mining',        tier: 'Solid',  note: 'Toughness: +60 Stamina passive (best tank gathering perk)' },
  { name: 'Enchanting',    tier: 'Solid',  note: 'Enchant Ring on both rings: +AP or +Sta' },
  { name: 'Inscription',   tier: 'Solid',  note: "Master's Inscription shoulder enchant > Sons of Hodir" },
  { name: 'Leatherworking',tier: 'Solid',  note: 'Self-only Fur Lining bracer enchant (+Sta or +AP)' },
  { name: 'Tailoring',     tier: 'Niche',  note: 'Swordguard Embroidery cloak proc (+400 AP) — cloth only' },
  { name: 'Alchemy',       tier: 'Niche',  note: 'Mixology: extended/boosted flasks. Best gold-maker.' },
  { name: 'Skinning',      tier: 'Gather', note: 'Master of Anatomy: +40 crit rating (~0.87% crit)' },
  { name: 'Herbalism',     tier: 'Gather', note: 'Lifeblood: 3600 HP heal over 5s, 3-min CD' },
];

