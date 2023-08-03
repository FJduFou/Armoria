export const positionsSelect = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "y",
  "z",
  "kn",
  "bh",
  "df",
  "pq",
  "jo",
  "lm",
  "abc",
  "def",
  "ghi",
  "adg",
  "beh",
  "cfi",
  "jeo",
  "jln",
  "kmo",
  "peq",
  "lem",
  "bhdf",
  "jleh",
  "behdf",
  "acegi",
  "bdefh",
  "kenpq",
  "abcpqh",
  "abcdefgzi",
  "ABCDEFGHIJKL"
];

export const positions = {
  conventional: {
    e: 20,
    abcdefgzi: 3,
    beh: 3,
    behdf: 2,
    acegi: 1,
    kn: 3,
    bhdf: 1,
    jeo: 1,
    abc: 3,
    jln: 6,
    jlh: 3,
    kmo: 2,
    jleh: 1,
    def: 3,
    abcpqh: 4,
    ABCDEFGHIJKL: 1
  },
  complex: {e: 40, beh: 1, kn: 1, jeo: 1, abc: 2, jln: 7, jlh: 2, def: 1, abcpqh: 1},
  divisions: {
    perPale: {e: 15, pq: 5, jo: 2, jl: 2, ABCDEFGHIJKL: 1},
    perFess: {e: 12, kn: 4, jkl: 2, gizgiz: 1, jlh: 3, kmo: 1, ABCDEFGHIJKL: 1},
    perBend: {e: 5, lm: 5, bcfdgh: 1},
    perBendSinister: {e: 1, jo: 1},
    perCross: {e: 4, jlmo: 1, j: 1, jo: 2, jl: 1},
    perChevron: {e: 1, jlh: 1, dfk: 1, dfbh: 2, bdefh: 1},
    perChevronReversed: {e: 1, mok: 2, dfh: 2, dfbh: 1, bdefh: 1},
    perSaltire: {bhdf: 8, e: 3, abcdefgzi: 1, bh: 1, df: 1, ABCDEFGHIJKL: 1},
    perPile: {ee: 3, be: 2, abceh: 1, abcabc: 1, jleh: 1}
  },
  ordinariesOn: {
    pale: {ee: 12, beh: 10, kn: 3, bb: 1},
    fess: {ee: 1, def: 3},
    bar: {defdefdef: 1},
    fessCotissed: {ee: 1, def: 3},
    fessDoubleCotissed: {ee: 1, defdef: 3},
    bend: {ee: 2, jo: 1, joe: 1},
    bendSinister: {ee: 1, lm: 1, lem: 4},
    bendlet: {joejoejoe: 1},
    bendletSinister: {lemlemlem: 1},
    bordure: {ABCDEFGHIJKL: 1},
    chief: {abc: 5, bbb: 1},
    quarter: {jjj: 1},
    canton: {yyyy: 1},
    cross: {eeee: 1, behdfbehdf: 3, behbehbeh: 2},
    crossParted: {e: 5, ee: 1},
    saltire: {ee: 5, jlemo: 1},
    saltireParted: {e: 5, ee: 1},
    pall: {ee: 1, jleh: 5, jlhh: 3},
    pallReversed: {ee: 1, bemo: 5},
    pile: {bbb: 1},
    pileInBend: {eeee: 1, eeoo: 1},
    pileInBendSinister: {eeee: 1, eemm: 1}
  },
  ordinariesOff: {
    pale: {yyy: 1},
    fess: {abc: 3, abcz: 1},
    bar: {abc: 2, abcgzi: 1, jlh: 5, bgi: 2, ach: 1},
    gemelle: {abc: 1},
    bend: {ccg: 2, ccc: 1},
    bendSinister: {aai: 2, aaa: 1},
    bendlet: {ccg: 2, ccc: 1},
    bendletSinister: {aai: 2, aaa: 1},
    bordure: {e: 4, jleh: 2, kenken: 1, peqpeq: 1},
    orle: {e: 4, jleh: 1, kenken: 1, peqpeq: 1},
    chief: {emo: 2, emoz: 1, ez: 2},
    terrace: {e: 5, def: 1, bdf: 3},
    mount: {e: 5, def: 1, bdf: 3},
    point: {e: 2, def: 1, bdf: 3, acbdef: 1},
    flaunches: {e: 3, kn: 1, beh: 3},
    gyron: {bh: 1},
    quarter: {e: 1},
    canton: {e: 5, beh: 1, def: 1, bdefh: 1, kn: 1},
    cross: {acgi: 1},
    pall: {BCKFEILGJbdmfo: 1},
    pallReversed: {aczac: 1},
    chevron: {ach: 3, hhh: 1},
    chevronReversed: {bbb: 1},
    pile: {acdfgi: 1, acac: 1},
    pileInBend: {cg: 1},
    pileInBendSinister: {ai: 1},
    label: {defgzi: 2, eh: 3, defdefhmo: 1, egiegi: 1, pqn: 5}
  },
  // charges
  inescutcheon: {e: 4, jln: 1},
  mascle: {
    e: 15,
    abcdefgzi: 3,
    beh: 3,
    bdefh: 4,
    acegi: 1,
    kn: 3,
    joe: 2,
    abc: 3,
    jlh: 8,
    jleh: 1,
    df: 3,
    abcpqh: 4,
    pqe: 3,
    eknpq: 3
  },
  lionRampant: {e: 10, def: 2, abc: 2, bdefh: 1, kn: 1, jlh: 2, abcpqh: 1},
  lionPassant: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1},
  wolfPassant: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1},
  greyhoundСourant: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1},
  greyhoundSejant: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1},
  griffinRampant: {e: 10, def: 2, abc: 2, bdefh: 1, kn: 1, jlh: 2, abcpqh: 1},
  griffinPassant: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1},
  boarRampant: {e: 12, beh: 1, kn: 1, jln: 2},
  eagle: {e: 15, beh: 1, kn: 1, abc: 1, jlh: 2, def: 2, pq: 1},
  raven: {e: 15, beh: 1, kn: 1, jeo: 1, abc: 3, jln: 3, def: 1},
  wyvern: {e: 10, jln: 1},
  garb: {e: 1, def: 3, abc: 2, beh: 1, kn: 1, jln: 3, jleh: 1, abcpqh: 1, joe: 1, lme: 1},
  crown: {e: 10, abcdefgzi: 1, beh: 3, behdf: 2, acegi: 1, kn: 1, pq: 2, abc: 1, jln: 4, jleh: 1, def: 2, abcpqh: 3},
  crown2: {e: 10, abcdefgzi: 1, beh: 3, behdf: 2, acegi: 1, kn: 1, pq: 2, abc: 1, jln: 4, jleh: 1, def: 2, abcpqh: 3},
  hand: {e: 10, jln: 2, kn: 1, jeo: 1, abc: 2, pqe: 1},
  armillarySphere: {e: 1},
  tree: {e: 1},
  lymphad: {e: 1},
  head: {e: 1},
  headWreathed: {e: 1},
  cavalier: {e: 1},
  angel: {e: 1}
};

export const lines = {
  straight: 50,
  wavy: 8,
  engrailed: 4,
  invecked: 3,
  rayonne: 3,
  embattled: 1,
  raguly: 1,
  urdy: 1,
  dancetty: 1,
  indented: 2,
  dentilly: 1,
  bevilled: 1,
  angled: 1,
  flechy: 1,
  barby: 1,
  enclavy: 1,
  escartely: 1,
  arched: 2,
  archedReversed: 1,
  nowy: 1,
  nowyReversed: 1,
  embattledGhibellin: 1,
  embattledNotched: 1,
  embattledGrady: 1,
  dovetailedIndented: 1,
  dovetailed: 1,
  potenty: 1,
  potentyDexter: 1,
  potentySinister: 1,
  nebuly: 2,
  seaWaves: 1,
  dragonTeeth: 1,
  firTrees: 1
};

export const divisions = {
  variants: {
    perPale: 5,
    perFess: 5,
    perBend: 2,
    perBendSinister: 1,
    perChevron: 1,
    perChevronReversed: 1,
    perCross: 5,
    perPile: 1,
    perSaltire: 1,
    gyronny: 1,
    chevronny: 1
  },
  perPale: lines,
  perFess: lines,
  perBend: lines,
  perBendSinister: lines,
  perChevron: lines,
  perChevronReversed: lines,
  perCross: {
    straight: 20,
    wavy: 5,
    engrailed: 4,
    invecked: 3,
    rayonne: 1,
    embattled: 1,
    raguly: 1,
    urdy: 1,
    indented: 2,
    dentilly: 1,
    bevilled: 1,
    angled: 1,
    embattledGhibellin: 1,
    embattledGrady: 1,
    dovetailedIndented: 1,
    dovetailed: 1,
    potenty: 1,
    potentyDexter: 1,
    potentySinister: 1,
    nebuly: 1
  },
  perPile: lines
};

export const ordinaries = {
  lined: {
    pale: 7,
    fess: 5,
    bend: 3,
    bendSinister: 2,
    chief: 5,
    bar: 2,
    gemelle: 1,
    fessCotissed: 1,
    fessDoubleCotissed: 1,
    bendlet: 2,
    bendletSinister: 1,
    terrace: 3,
    cross: 6,
    crossParted: 1,
    saltire: 2,
    saltireParted: 1
  },
  straight: {
    bordure: 8,
    orle: 4,
    mount: 1,
    point: 2,
    flaunches: 1,
    gore: 1,
    gyron: 1,
    quarter: 1,
    canton: 2,
    pall: 3,
    pallReversed: 2,
    chevron: 4,
    chevronReversed: 3,
    pile: 2,
    pileInBend: 2,
    pileInBendSinister: 1,
    piles: 1,
    pilesInPoint: 2,
    label: 1
  },
  patternable: ["flaunches", "gyron", "quarter", "canton", "pall", "pallReversed", "pileInBend", "pileInBendSinister"]
};

export const charges = {
  types: {
    conventional: 30,
    crosses: 10,
    animals: 2,
    animalHeads: 1,
    birds: 2,
    aquatic: 1,
    seafaring: 1,
    fantastic: 3,
    plants: 1,
    agriculture: 1,
    arms: 3,
    bodyparts: 1,
    people: 1,
    architecture: 1,
    miscellaneous: 3,
    inescutcheon: 3,
    uploaded: 0
  },
  single: {
    conventional: 12,
    crosses: 8,
    plants: 2,
    animals: 10,
    animalHeads: 2,
    birds: 4,
    aquatic: 2,
    seafaring: 2,
    fantastic: 7,
    agriculture: 1,
    arms: 6,
    bodyparts: 1,
    people: 2,
    architecture: 1,
    miscellaneous: 10,
    inescutcheon: 5,
    uploaded: 0
  },
  semy: {conventional: 4, crosses: 1},
  conventional: {
    lozenge: 2,
    fusil: 4,
    mascle: 4,
    rustre: 2,
    lozengeFaceted: 3,
    lozengePloye: 1,
    roundel: 4,
    roundel2: 3,
    annulet: 4,
    mullet: 5,
    mulletPierced: 1,
    mulletFaceted: 1,
    mullet4: 3,
    mullet6: 4,
    mullet6Pierced: 1,
    mullet6Faceted: 1,
    mullet7: 1,
    mullet8: 1,
    mullet10: 1,
    estoile: 1,
    compassRose: 1,
    billet: 5,
    delf: 0,
    triangle: 3,
    trianglePierced: 1,
    goutte: 4,
    heart: 4,
    pique: 2,
    carreau: 1,
    trefle: 2,
    fleurDeLis: 6,
    sun: 3,
    sunInSplendour: 1,
    sunInSplendour2: 1,
    moonInCrescent: 1,
    crescent: 5,
    fountain: 1
  },
  inescutcheon: {
    inescutcheonHeater: 1,
    inescutcheonSpanish: 1,
    inescutcheonFrench: 1,
    inescutcheonHorsehead: 1,
    inescutcheonHorsehead2: 1,
    inescutcheonPolish: 1,
    inescutcheonHessen: 1,
    inescutcheonSwiss: 1,
    inescutcheonBoeotian: 1,
    inescutcheonRoman: 1,
    inescutcheonKite: 1,
    inescutcheonOldFrench: 1,
    inescutcheonRenaissance: 1,
    inescutcheonBaroque: 1,
    inescutcheonTarge: 1,
    inescutcheonTarge2: 1,
    inescutcheonPavise: 1,
    inescutcheonWedged: 1,
    inescutcheonFlag: 1,
    inescutcheonPennon: 1,
    inescutcheonGuidon: 1,
    inescutcheonBanner: 1,
    inescutcheonDovetail: 1,
    inescutcheonGonfalon: 1,
    inescutcheonPennant: 1,
    inescutcheonRound: 1,
    inescutcheonOval: 1,
    inescutcheonVesicaPiscis: 1,
    inescutcheonSquare: 1,
    inescutcheonDiamond: 1,
    inescutcheonNo: 1,
    inescutcheonFantasy1: 1,
    inescutcheonFantasy2: 1,
    inescutcheonFantasy3: 1,
    inescutcheonFantasy4: 1,
    inescutcheonFantasy5: 1,
    inescutcheonNoldor: 1,
    inescutcheonGondor: 1,
    inescutcheonEasterling: 1,
    inescutcheonErebor: 1,
    inescutcheonIronHills: 1,
    inescutcheonUrukHai: 1,
    inescutcheonMoriaOrc: 1
  },
  crosses: {
    crossHummetty: 15,
    crossVoided: 1,
    crossPattee: 2,
    crossPatteeAlisee: 1,
    crossFormee: 1,
    crossFormee2: 2,
    crossPotent: 2,
    crossJerusalem: 1,
    crosslet: 1,
    crossClechy: 3,
    crossBottony: 1,
    crossFleury: 3,
    crossPatonce: 1,
    crossPommy: 1,
    crossGamma: 1,
    crossArrowed: 1,
    crossFitchy: 1,
    crossCercelee: 1,
    crossMoline: 2,
    crossFourchy: 1,
    crossAvellane: 1,
    crossErminee: 1,
    crossBiparted: 1,
    crossMaltese: 3,
    crossTemplar: 2,
    crossCeltic: 1,
    crossCeltic2: 1,
    crossTriquetra: 1,
    crossCarolingian: 1,
    crossOccitan: 1,
    crossSaltire: 3,
    crossBurgundy: 1,
    crossLatin: 3,
    crossPatriarchal: 1,
    crossOrthodox: 1,
    crossCalvary: 1,
    crossDouble: 1,
    crossTau: 1,
    crossSantiago: 1,
    crossAnkh: 1
  },
  animals: {
    lionRampant: 6,
    lionPassant: 2,
    lionPassantGuardant: 1,
    lionSejant: 1,
    wolfRampant: 1,
    wolfPassant: 1,
    wolfStatant: 1,
    greyhoundCourant: 1,
    greyhoundRampant: 1,
    greyhoundSejant: 1,
    mastiffStatant: 1,
    talbotPassant: 1,
    talbotSejant: 1,
    martenCourant: 1,
    boarRampant: 1,
    stagPassant: 1,
    hindStatant: 1,
    horseRampant: 2,
    horseSalient: 1,
    horsePassant: 1,
    bearRampant: 2,
    bearPassant: 1,
    bullPassant: 1,
    cowStatant: 1,
    goat: 1,
    lamb: 1,
    lambPassantReguardant: 1,
    agnusDei: 1,
    ramPassant: 1,
    badgerStatant: 1,
    elephant: 1,
    rhinoceros: 1,
    camel: 1,
    porcupine: 1,
    hedgehog: 1,
    catPassantGuardant: 1,
    rabbitSejant: 1,
    ratRampant: 1,
    squirrel: 1,
    frog: 1,
    snake: 1,
    crocodile: 1,
    lizard: 1,
    scorpion: 1,
    butterfly: 1,
    bee: 1,
    fly: 1
  },
  animalHeads: {
    wolfHeadErased: 2,
    bullHeadCaboshed: 1,
    deerHeadCaboshed: 1,
    donkeyHeadCaboshed: 1,
    lionHeadCaboshed: 2,
    lionHeadErased: 2,
    boarHeadErased: 1,
    horseHeadCouped: 1,
    ramHeadErased: 1,
    elephantHeadErased: 1
  },
  fantastic: {
    dragonPassant: 2,
    dragonRampant: 2,
    wyvern: 1,
    wyvernWithWingsDisplayed: 1,
    griffinPassant: 1,
    griffinRampant: 1,
    eagleTwoHeads: 2,
    unicornRampant: 1,
    pegasus: 1,
    serpent: 1,
    basilisk: 1,
    sagittarius: 1
  },
  birds: {
    eagle: 9,
    falcon: 2,
    raven: 2,
    cock: 3,
    parrot: 1,
    swan: 2,
    swanErased: 1,
    heron: 1,
    owl: 1,
    owlDisplayed: 1,
    dove: 2,
    doveDisplayed: 1,
    duck: 1,
    peacock: 1,
    peacockInPride: 1,
    swallow: 1
  },
  plants: {
    tree: 1,
    oak: 1,
    pineTree: 1,
    palmTree: 1,
    trefoil: 1,
    quatrefoil: 1,
    cinquefoil: 1,
    sextifoil: 1,
    mapleLeaf: 1,
    rose: 1,
    apple: 1,
    pear: 1,
    grapeBunch: 1,
    wheatStalk: 1,
    pineCone: 1
  },
  aquatic: {escallop: 5, pike: 1, plaice: 1, salmon: 1, cancer: 1, dolphin: 1},
  seafaring: {anchor: 6, boat: 2, boat2: 1, lymphad: 2, caravel: 1, armillarySphere: 1},
  agriculture: {garb: 2, sickle: 1, scythe: 1, rake: 1, plough: 2},
  arms: {
    sword: 4,
    falchion: 1,
    sabre: 1,
    sabresCrossed: 1,
    sabre2: 1,
    hatchet: 3,
    axe: 3,
    lochaberAxe: 1,
    spear: 1,
    mallet: 1,
    bowWithArrow: 3,
    bow: 1,
    arrow: 1,
    arrowsSheaf: 1,
    arbalest: 1,
    helmet: 2,
    gauntlet: 1,
    shield: 1,
    cannon: 1
  },
  bodyparts: {hand: 4, head: 1, headWreathed: 1, foot: 1, skull: 1},
  people: {cavalier: 3, monk: 1, angel: 2},
  architecture: {tower: 1, castle: 1, bridge: 1, column: 1},
  miscellaneous: {
    crown: 2,
    crown2: 1,
    laurelWreath: 1,
    mitre: 1,
    orb: 1,
    chalice: 1,
    key: 1,
    buckle: 1,
    bugleHorn: 1,
    bugleHorn2: 1,
    bell: 2,
    pot: 1,
    bucket: 1,
    horseshoe: 3,
    stirrup: 1,
    attire: 1,
    stagsAttires: 1,
    ramsHorn: 1,
    cowHorns: 2,
    wing: 1,
    wingSword: 1,
    lute: 1,
    harp: 1,
    drum: 1,
    wheel: 2,
    crosier: 1,
    sceptre: 1,
    fasces: 1,
    log: 1,
    chain: 1,
    anvil: 1,
    ladder: 1,
    banner: 1,
    bookClosed: 1,
    bookOpen: 1,
    scissors: 1
  },
  uploaded: {},
  natural: {
    fountain: "azure",
    garb: "or",
    raven: "sable",
    dove: "argent",
    doveDisplayed: "argent",
    fly: "sable",
  }, // charges to mainly use predefined colours
  multicolor: {
    // charges that can have several tinctures
    agnusDei: 2,
    angel: 2,
    apple: 2,
    arbalest: 3,
    arrow: 3,
    arrowsSheaf: 3,
    axe: 2,
    badgerStatant: 2,
    banner: 2,
    basilisk: 3,
    bearPassant: 3,
    bearRampant: 3,
    bee: 3,
    bell: 2,
    boarHeadErased: 3,
    boarRampant: 3,
    boat: 2,
    bookClosed: 3,
    bookOpen: 3,
    bowWithArrow: 3,
    bucket: 2,
    bugleHorn: 2,
    bugleHorn2: 2,
    bullHeadCaboshed: 2,
    bullPassant: 3,
    butterfly: 3,
    camel: 2,
    cannon: 2,
    caravel: 3,
    castle: 2,
    catPassantGuardant: 2,
    chalice: 2,
    cock: 3,
    cowStatant: 3,
    crocodile: 2,
    crown: 2,
    crown2: 3,
    deerHeadCaboshed: 2,
    dolphin: 2,
    donkeyHeadCaboshed: 2,
    dove: 2,
    doveDisplayed: 2,
    dragonPassant: 3,
    dragonRampant: 3,
    drum: 3,
    duck: 3,
    eagle: 3,
    eagleTwoHeads: 3,
    elephant: 2,
    elephantHeadErased: 2,
    falchion: 2,
    falcon: 3,
    fasces: 3,
    fly: 3,
    garb: 2,
    goat: 3,
    grapeBunch: 3,
    greyhoundCourant: 3,
    greyhoundRampant: 2,
    greyhoundSejant: 3,
    griffinPassant: 3,
    griffinRampant: 3,
    harp: 2,
    hatchet: 2,
    head: 2,
    headWreathed: 3,
    hedgehog: 3,
    heron: 2,
    hindStatant: 2,
    horsePassant: 2,
    horseRampant: 3,
    horseSalient: 2,
    lamb: 2,
    lambPassantReguardant: 2,
    laurelWreath: 2,
    lionHeadCaboshed: 2,
    lionHeadErased: 2,
    lionPassant: 3,
    lionPassantGuardant: 3,
    lionRampant: 3,
    lionSejant: 3,
    lochaberAxe: 2,
    lute: 2,
    lymphad: 3,
    mallet: 2,
    martenCourant: 3,
    mastiffStatant: 3,
    mitre: 3,
    oak: 3,
    orb: 3,
    owl: 2,
    owlDisplayed: 2,
    palmTree: 3,
    parrot: 2,
    peacock: 3,
    peacockInPride: 3,
    pear: 2,
    pegasus: 3,
    pike: 2,
    pineTree: 2,
    plaice: 2,
    plough: 2,
    porcupine: 2,
    rabbitSejant: 2,
    ramHeadErased: 3,
    ramPassant: 3,
    ratRampant: 2,
    raven: 2,
    rhinoceros: 2,
    rose: 3,
    sabre: 2,
    sabre2: 2,
    sabresCrossed: 2,
    sagittarius: 3,
    salmon: 2,
    scythe: 2,
    serpent: 2,
    shield: 2,
    sickle: 2,
    snake: 2,
    spear: 2,
    squirrel: 2,
    stagPassant: 2,
    stirrup: 2,
    swallow: 2,
    swan: 3,
    swanErased: 3,
    sword: 2,
    talbotPassant: 3,
    talbotSejant: 3,
    tower: 2,
    unicornRampant: 3,
    wheatStalk: 2,
    wingSword: 3,
    wolfHeadErased: 2,
    wolfPassant: 3,
    wolfRampant: 3,
    wolfStatant: 3,
    wyvern: 3,
    wyvernWithWingsDisplayed: 3
  },
  sinister: [
    // charges that can be sinister
    "moonInCrescent",
    "crossGamma",
    "lionRampant",
    "lionPassant",
    "lionSejant",
    "wolfRampant",
    "wolfPassant",
    "wolfStatant",
    "wolfHeadErased",
    "greyhoundСourant",
    "greyhoundRampant",
    "greyhoundSejant",
    "mastiffStatant",
    "talbotPassant",
    "talbotSejant",
    "martenCourant",
    "boarRampant",
    "badgerStatant",
    "stagPassant",
    "hindStatant",
    "horseRampant",
    "horseSalient",
    "horsePassant",
    "bullPassant",
    "bearRampant",
    "bearPassant",
    "cowStatant",
    "boarHeadErased",
    "horseHeadCouped",
    "lionHeadErased",
    "ramHeadErased",
    "elephantHeadErased",
    "ramPassant",
    "goat",
    "lamb",
    "lambPassantReguardant",
    "agnusDei",
    "dove",
    "doveDisplayed",
    "duck",
    "peacock",
    "peacockInPride",
    "swallow",
    "elephant",
    "rhinoceros",
    "eagle",
    "falcon",
    "raven",
    "cock",
    "parrot",
    "swan",
    "swanErased",
    "heron",
    "pike",
    "plaice",
    "salmon",
    "dragonPassant",
    "dragonRampant",
    "wyvern",
    "wyvernWithWingsDisplayed",
    "griffinPassant",
    "griffinRampant",
    "unicornRampant",
    "pegasus",
    "serpent",
    "sagittarius",
    "hatchet",
    "lochaberAxe",
    "hand",
    "wing",
    "wingSword",
    "lute",
    "harp",
    "bow",
    "head",
    "headWreathed",
    "knight",
    "lymphad",
    "caravel",
    "log",
    "crosier",
    "dolphin",
    "sabre",
    "monk",
    "owl",
    "axe",
    "camel",
    "fasces",
    "lionPassantGuardant",
    "helmet",
    "gauntlet",
    "shield",
    "foot",
    "sickle",
    "scythe",
    "plough",
    "sabre2",
    "cannon",
    "porcupine",
    "hedgehog",
    "catPassantGuardant",
    "rabbitSejant",
    "ratRampant",
    "squirrel",
    "basilisk",
    "snake",
    "crocodile",
    "anvil"
  ],
  reversed: [
    // charges that can be reversed
    "goutte",
    "mullet",
    "mullet7",
    "crescent",
    "cancer",
    "frog",
    "lizard",
    "scorpion",
    "butterfly",
    "bee",
    "fly",
    "trefoil",
    "cinquefoil",
    "sword",
    "falchion",
    "sabresCrossed",
    "spear",
    "gauntlet",
    "hand",
    "horseshoe",
    "bowWithArrow",
    "arrow",
    "arrowsSheaf",
    "arbalest",
    "rake",
    "sickle",
    "scythe",
    "scissors",
    "crossTriquetra",
    "crossLatin",
    "crossTau",
    "sabre2"
  ],
  patternable: [
    // charges that can have pattern tincture when counterchanged
    "lozengePloye",
    "roundel",
    "annulet",
    "mullet4",
    "mullet8",
    "delf",
    "triangle",
    "trianglePierced",
    "sun",
    "fountain",
    "inescutcheonRound",
    "inescutcheonSquare",
    "inescutcheonNo",
    "crossHummetty",
    "crossVoided",
    "crossPattee",
    "crossPatteeAlisee",
    "crossFormee",
    "crossFormee2",
    "crossPotent",
    "crossJerusalem",
    "crosslet",
    "crossClechy",
    "crossBottony",
    "crossFleury",
    "crossPatonce",
    "crossPommy",
    "crossGamma",
    "crossArrowed",
    "crossFitchy",
    "crossCercelee",
    "crossMoline",
    "crossAvellane",
    "crossErminee",
    "crossBiparted",
    "crossMaltese",
    "crossTemplar",
    "crossCeltic",
    "crossCeltic2",
    "crossTau"
  ]
};

export const patternSize = {standard: 154, small: 20, smaller: 20, big: 5, smallest: 1};
