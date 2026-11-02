/**
 * OSS Quest — Village & Overworld Data (Update 03)
 */

export const TILE = {
    GRASS_1: 0, GRASS_2: 1, GRASS_3: 2,
    DIRT: 3, STONE: 4, WATER: 5, FLOWERS: 6,
    TALL_GRASS: 7, FENCE: 8, BRIDGE: 9,
    SAND: 10, SNOW: 11, ICE: 12, LAVA: 13,
    DARK_STONE: 14, WOOD_FLOOR: 15
};

export const TILE_COLORS = {
    [TILE.GRASS_1]: ['#5a8a3c','#528e38','#60944a','#4d8035'],
    [TILE.DIRT]:    ['#c4a882','#b39871','#cbb28e','#bfa77c'],
    [TILE.STONE]:   ['#9e9688','#8e8678','#a8a092','#b0a89a'],
    [TILE.WATER]:   ['#4a8fb5','#3a7fa5','#5599c0','#3585aa'],
    [TILE.SAND]:    ['#e8d890','#e0c880','#f0e8a0'],
    [TILE.SNOW]:    ['#f0f8ff','#e0f0ff','#ffffff'],
    [TILE.ICE]:     ['#a0d8f0','#b0e8ff'],
    [TILE.LAVA]:    ['#d44a2a','#e86a3a','#b43a1a'],
    [TILE.DARK_STONE]: ['#4a4840','#3a3830','#5a5850'],
    [TILE.WOOD_FLOOR]: ['#8a5a3a','#7a4a2a'],
};

// --- VILLAGES (IMAGE-BASED) ---
export const VILLAGES_OPENSOURCE = {
    1: {
        id: 1, name: "The Forge", name_hi: "द फ़ोर्ज", name_od: "ଦ ଫୋର୍ଜ",
        image: "bg_forge", width: 1595, height: 986,
        spawn: { x: 750, y: 650 },
        bounds: { minX: 380, maxX: 1150, minY: 350, maxY: 750 },
        exitZone: 'bottom',
        npcId: 'borin', npcPos: { x: 700, y: 500 }
    },
    2: {
        id: 2, name: "The Old Copyworks", name_hi: "द ओल्ड कॉपीवर्क्स", name_od: "ଦ ଓଲ୍ଡ କପିୱାର୍କ୍ସ",
        image: "bg_copyworks", width: 1597, height: 985,
        spawn: { x: 800, y: 700 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 850 },
        exitZone: 'bottom',
        npcId: 'elda', npcPos: { x: 800, y: 400 }
    },
    3: {
        id: 3, name: "The Reading Grove", name_hi: "द रीडिंग ग्रोव", name_od: "ଦ ରିଡିଙ୍ଗ ଗ୍ରୋଭ୍",
        image: "bg_reading_grove", width: 1594, height: 986,
        spawn: { x: 800, y: 600 },
        bounds: { minX: 300, maxX: 1300, minY: 200, maxY: 800 },
        exitZone: 'left',
        npcId: 'maren', npcPos: { x: 850, y: 450 }
    },
    4: {
        id: 4, name: "The Speaking Well", name_hi: "द स्पीकिंग वेल", name_od: "ଦ ସ୍ପିକିଙ୍ଗ ୱେଲ୍",
        image: "bg_speaking_well", width: 1594, height: 986,
        spawn: { x: 800, y: 700 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 850 },
        exitZone: 'bottom',
        npcId: 'fenwick', npcPos: { x: 800, y: 400 }
    },
    5: {
        id: 5, name: "The Proving Grounds", name_hi: "द प्रूविंग ग्राउंड्स", name_od: "ଦ ପ୍ରୁଭିଙ୍ଗ ଗ୍ରାଉଣ୍ଡ୍ସ",
        image: "bg_proving_grounds", width: 1594, height: 987,
        spawn: { x: 400, y: 800 },
        bounds: { minX: 200, maxX: 1400, minY: 200, maxY: 900 },
        exitZone: 'bottom-left',
        npcId: 'oren', npcPos: { x: 800, y: 500 }
    },
    6: {
        id: 6, name: "The Gate of Merging", name_hi: "द गेट ऑफ़ मर्जिंग", name_od: "ଦ ଗେଟ୍ ଅଫ୍ ମର୍ଜିଂ",
        image: "bg_gate", width: 1597, height: 985,
        spawn: { x: 800, y: 800 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 900 },
        exitZone: 'bottom',
        npcId: 'voss', npcPos: { x: 800, y: 400 }
    }
};

export const VILLAGES_JAVA = {
    1: {
        id: 1, name: "The Syntax Mill", name_hi: "द सिंटैक्स मिल", name_od: "ଦ ସିଣ୍ଟାକ୍ସ ମିଲ୍",
        image: "bg_copyworks", width: 1597, height: 985,
        spawn: { x: 750, y: 650 },
        bounds: { minX: 380, maxX: 1150, minY: 350, maxY: 750 },
        exitZone: 'bottom',
        npcId: 'thorne', npcPos: { x: 700, y: 500 }
    },
    2: {
        id: 2, name: "The Control Tower", name_hi: "द कंट्रोल टॉवर", name_od: "ଦ କଣ୍ଟ୍ରୋଲ ଟାୱାର",
        image: "bg_gate", width: 1597, height: 985,
        spawn: { x: 800, y: 700 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 850 },
        exitZone: 'bottom',
        npcId: 'vane', npcPos: { x: 800, y: 400 }
    },
    3: {
        id: 3, name: "The Object Workshop", name_hi: "द ऑब्जेक्ट वर्कशॉप", name_od: "ଦ ଅବଜେକ୍ଟ ୱାର୍କସପ୍",
        image: "bg_forge", width: 1595, height: 986,
        spawn: { x: 800, y: 600 },
        bounds: { minX: 300, maxX: 1300, minY: 200, maxY: 800 },
        exitZone: 'left',
        npcId: 'clara', npcPos: { x: 850, y: 450 }
    },
    4: {
        id: 4, name: "The Inheritance Hall", name_hi: "द इनहेरिटेंस हॉल", name_od: "ଦ ଇନହେରିଟାନ୍ସ ହଲ୍",
        image: "bg_proving_grounds", width: 1594, height: 987,
        spawn: { x: 800, y: 700 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 850 },
        exitZone: 'bottom',
        npcId: 'roland', npcPos: { x: 800, y: 400 }
    },
    5: {
        id: 5, name: "The Exception Pit", name_hi: "द एक्सेप्शन पिट", name_od: "ଦ ଏକ୍ସେପ୍ସନ ପିଟ୍",
        image: "bg_speaking_well", width: 1594, height: 986,
        spawn: { x: 400, y: 800 },
        bounds: { minX: 200, maxX: 1400, minY: 200, maxY: 900 },
        exitZone: 'bottom-left',
        npcId: 'ignis', npcPos: { x: 800, y: 500 }
    },
    6: {
        id: 6, name: "The Package Library", name_hi: "द पैकेज लाइब्रेरी", name_od: "ଦ ପ୍ୟାକେଜ ଲାଇବ୍ରେରୀ",
        image: "bg_reading_grove", width: 1594, height: 986,
        spawn: { x: 800, y: 800 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 900 },
        exitZone: 'bottom',
        npcId: 'priya', npcPos: { x: 800, y: 400 }
    }
};

export const VILLAGES_DSA = {
    1: {
        id: 1, name: "The Array Plains", name_hi: "द ऐरे प्लेन्स", name_od: "ଦ ଆରେ ପ୍ଲେନ୍ସ",
        image: "bg_proving_grounds", width: 1594, height: 987,
        spawn: { x: 750, y: 650 },
        bounds: { minX: 380, maxX: 1150, minY: 350, maxY: 750 },
        exitZone: 'bottom',
        npcId: 'vance', npcPos: { x: 700, y: 500 }
    },
    2: {
        id: 2, name: "The Linked Chain", name_hi: "द लिंक्ड चेन", name_od: "ଦ ଲିଙ୍କଡ୍ ଚେନ୍",
        image: "bg_speaking_well", width: 1594, height: 986,
        spawn: { x: 800, y: 700 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 850 },
        exitZone: 'bottom',
        npcId: 'lin', npcPos: { x: 800, y: 400 }
    },
    3: {
        id: 3, name: "The Stack & Queue Fort", name_hi: "स्टैक और कतार किला", name_od: "ଷ୍ଟାକ୍ ଓ କ୍ୟୁ ଦୁର୍ଗ",
        image: "bg_gate", width: 1597, height: 985,
        spawn: { x: 800, y: 600 },
        bounds: { minX: 300, maxX: 1300, minY: 200, maxY: 800 },
        exitZone: 'left',
        npcId: 'brick', npcPos: { x: 850, y: 450 }
    },
    4: {
        id: 4, name: "The Tree Grove", name_hi: "द ट्री ग्रोव", name_od: "ଦ ଟ୍ରି ଗ୍ରୋଭ୍",
        image: "bg_reading_grove", width: 1594, height: 986,
        spawn: { x: 800, y: 700 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 850 },
        exitZone: 'bottom',
        npcId: 'sylvia', npcPos: { x: 800, y: 400 }
    },
    5: {
        id: 5, name: "The Graph Crossroads", name_hi: "द ग्राफ चौराहा", name_od: "ଦ ଗ୍ରାଫ୍ ଛକ",
        image: "bg_copyworks", width: 1597, height: 985,
        spawn: { x: 400, y: 800 },
        bounds: { minX: 200, maxX: 1400, minY: 200, maxY: 900 },
        exitZone: 'bottom-left',
        npcId: 'jax', npcPos: { x: 800, y: 500 }
    },
    6: {
        id: 6, name: "The Sorting Arena", name_hi: "द सॉर्टिंग एरीना", name_od: "ଦ ସର୍ଟିଂ ଆରେନା",
        image: "bg_forge", width: 1595, height: 986,
        spawn: { x: 800, y: 800 },
        bounds: { minX: 400, maxX: 1200, minY: 300, maxY: 900 },
        exitZone: 'bottom',
        npcId: 'kaida', npcPos: { x: 800, y: 400 }
    }
};

export const VILLAGES = VILLAGES_OPENSOURCE;

export function getVillageDef(pathId, villageId) {
    let dict = VILLAGES_OPENSOURCE;
    if (pathId === 'java') dict = VILLAGES_JAVA;
    else if (pathId === 'dsa') dict = VILLAGES_DSA;
    return dict[villageId] || dict[1];
}

export const NPCS = {
    // Open Source Quest
    borin: { id: 'borin', name: 'Borin', role: 'the Forge-Keeper', chapterId: 1, colors: { skin: '#e8b87a', shirt: '#B4502A' } },
    elda: { id: 'elda', name: 'Elda', role: 'the Scribe', chapterId: 2, colors: { skin: '#e8c89a', shirt: '#5B4A8A' } },
    maren: { id: 'maren', name: 'Maren', role: 'the Cartographer', chapterId: 3, colors: { skin: '#d4a06a', shirt: '#4A6E3A' } },
    fenwick: { id: 'fenwick', name: 'Fenwick', role: 'the Courier', chapterId: 4, colors: { skin: '#c89a6a', shirt: '#8B6914' } },
    oren: { id: 'oren', name: 'Sage Oren', role: 'the Watcher', chapterId: 5, colors: { skin: '#e0c8a0', shirt: '#4A5A6E' } },
    voss: { id: 'voss', name: 'Captain Voss', role: 'the Gatekeeper', chapterId: 6, colors: { skin: '#d0a878', shirt: '#5A4A3A' } },

    // Java Quest
    thorne: { id: 'thorne', name: 'Master Thorne', role: 'the Mill Operator', chapterId: 1, colors: { skin: '#e8b87a', shirt: '#8B4513' } },
    vane: { id: 'vane', name: 'Commander Vane', role: 'the Watch Officer', chapterId: 2, colors: { skin: '#e0c8a0', shirt: '#4A5A6E' } },
    clara: { id: 'clara', name: 'Artisan Clara', role: 'the Class Architect', chapterId: 3, colors: { skin: '#e8c89a', shirt: '#B4502A' } },
    roland: { id: 'roland', name: 'Archon Roland', role: 'the Guild Master', chapterId: 4, colors: { skin: '#d4a06a', shirt: '#5B4A8A' } },
    ignis: { id: 'ignis', name: 'Keeper Ignis', role: 'the Pit Guardian', chapterId: 5, colors: { skin: '#c89a6a', shirt: '#8B0000' } },
    priya: { id: 'priya', name: 'Archivist Priya', role: 'the Master Librarian', chapterId: 6, colors: { skin: '#d0a878', shirt: '#2E8B57' } },

    // DSA Quest
    vance: { id: 'vance', name: 'Farmer Vance', role: 'the Field Surveyor', chapterId: 1, colors: { skin: '#e8b87a', shirt: '#556B2F' } },
    lin: { id: 'lin', name: 'Ferryman Lin', role: 'the Chain Tender', chapterId: 2, colors: { skin: '#d4a06a', shirt: '#4682B4' } },
    brick: { id: 'brick', name: 'Quartermaster Brick', role: 'the Storekeeper', chapterId: 3, colors: { skin: '#e0c8a0', shirt: '#708090' } },
    sylvia: { id: 'sylvia', name: 'Dryad Sylvia', role: 'the Canopy Guardian', chapterId: 4, colors: { skin: '#e8c89a', shirt: '#228B22' } },
    jax: { id: 'jax', name: 'Pathfinder Jax', role: 'the Wayfarer', chapterId: 5, colors: { skin: '#c89a6a', shirt: '#CD853F' } },
    kaida: { id: 'kaida', name: 'Champion Kaida', role: 'the Arena Master', chapterId: 6, colors: { skin: '#d0a878', shirt: '#800000' } },
};

// --- OVERWORLD MAP ---
// Defines the nodes on the world map and the paths connecting them.
export const OVERWORLD = {
    width: 1536,
    height: 1024,
    nodes: [
        { id: 1, name: "The Forge", name_hi: "द फ़ोर्ज", name_od: "ଦ ଫୋର୍ଜ", x: 245, y: 100, unlockedBy: 0 },
        { id: 2, name: "The Old Copyworks", name_hi: "द ओल्ड कॉपीवर्क्स", name_od: "ଦ ଓଲ୍ଡ କପିୱାର୍କ୍ସ", x: 230, y: 400, unlockedBy: 1 },
        { id: 3, name: "The Reading Grove", name_hi: "द रीडिंग ग्रोव", name_od: "ଦ ରିଡିଙ୍ଗ ଗ୍ରୋଭ୍", x: 920, y: 190, unlockedBy: 2 },
        { id: 4, name: "The Speaking Well", name_hi: "द स्पीकिंग वेल", name_od: "ଦ ସ୍ପିକିଙ୍ଗ ୱେଲ୍", x: 970, y: 380, unlockedBy: 3 },
        { id: 5, name: "The Proving Grounds", name_hi: "द प्रूविंग ग्राउंड्स", name_od: "ଦ ପ୍ରୁଭିଙ୍ଗ ଗ୍ରାଉଣ୍ଡ୍ସ", x: 330, y: 710, unlockedBy: 4 },
        { id: 6, name: "The Gate of Merging", name_hi: "द गेट ऑफ़ मर्जिंग", name_od: "ଦ ଗେଟ୍ ଅଫ୍ ମର୍ଜିଂ", x: 1350, y: 550, unlockedBy: 5 }
    ],
    paths: [
        // Optional waypoints can go here, using straight lines for now
    ],
    props: [
        { type: 'tree', x: 4, y: 20 },
        { type: 'tree', x: 8, y: 22 },
        { type: 'tree', x: 12, y: 16 },
        { type: 'rock', x: 16, y: 20 },
        { type: 'tree', x: 20, y: 18 },
        { type: 'tree', x: 28, y: 20 },
        { type: 'rock', x: 32, y: 14 },
        { type: 'tree', x: 24, y: 6 },
        { type: 'tree', x: 18, y: 2 }
    ]
};
