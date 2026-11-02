/**
 * OSS Quest — Quest Paths & World Definitions
 * Central configuration for:
 * 1. Open Source Quest ("The Path to Your First PR")
 * 2. Java Quest ("The Code Foundry")
 * 3. DSA Quest ("The Algorithm Realm")
 *
 * Each quest path includes world map settings, villages, NPCs, and road corridors.
 */

function createRoads(polylines, defaultRadius = 24) {
    const roads = [];
    for (const poly of polylines) {
        for (let i = 0; i < poly.length - 1; i++) {
            roads.push({
                p1: { x: poly[i][0], y: poly[i][1] },
                p2: { x: poly[i + 1][0], y: poly[i + 1][1] },
                radius: defaultRadius
            });
        }
    }
    return roads;
}

export const QUEST_PATHS = {
    opensource: {
        id: 'opensource',
        icon: '⚔️',
        title: 'Open Source Quest',
        title_hi: 'ओपन सोर्स क्वेस्ट',
        title_od: 'ଓପନ ସୋର୍ସ କ୍ୱେଷ୍ଟ',
        subtitle: 'The Path to Your First PR',
        subtitle_hi: 'पहला पुल रिक्वेस्ट बनाने की यात्रा',
        subtitle_od: 'ପ୍ରଥମ ପୁଲ୍ ରିକ୍ୱେଷ୍ଟ ଯାତ୍ରା',
        desc: 'Learn Git, forking, branches, and issues in a retro RPG world. Matched with real beginner-friendly GitHub repositories.',
        desc_hi: 'आरपीजी गाँव में Git, forking, branches और issues सीखें। वास्तविक GitHub रिपॉजिटरी से मिलान।',
        desc_od: 'ଆରପିଜି ଗାଁରେ Git, forking, branches ଏବଂ issues ଶିଖନ୍ତୁ। ପ୍ରକୃତ GitHub ରିପୋଜିଟୋରୀ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ।',
        worldName: 'The Open Source Realm',
        worldName_hi: 'ओपन सोर्स की दुनिया',
        worldName_od: 'ଓପନ୍ ସୋର୍ସ ଦୁନିଆ',
        mapImage: 'overworld',
        mapWidth: 1536,
        mapHeight: 1024,
        nodes: [
            { id: 1, name: "The Forge", name_hi: "द फ़ोर्ज", name_od: "ଦ ଫୋର୍ଜ", x: 245, y: 100, npcId: 'borin' },
            { id: 2, name: "The Old Copyworks", name_hi: "द ओल्ड कॉपीवर्क्स", name_od: "ଦ ଓଲ୍ଡ କପିୱାର୍କ୍ସ", x: 230, y: 400, npcId: 'elda' },
            { id: 3, name: "The Reading Grove", name_hi: "द रीडिंग ग्रोव", name_od: "ଦ ରିଡିଙ୍ଗ ଗ୍ରୋଭ୍", x: 920, y: 190, npcId: 'maren' },
            { id: 4, name: "The Speaking Well", name_hi: "द स्पीकिंग वेल", name_od: "ଦ ସ୍ପିକିଙ୍ଗ ୱେଲ୍", x: 970, y: 380, npcId: 'fenwick' },
            { id: 5, name: "The Proving Grounds", name_hi: "द प्रूविंग ग्राउंड्स", name_od: "ଦ ପ୍ରୁଭିଙ୍ଗ ଗ୍ରାଉଣ୍ଡ୍ସ", x: 330, y: 710, npcId: 'oren' },
            { id: 6, name: "The Gate of Merging", name_hi: "द गेट ऑफ़ मर्जिंग", name_od: "ଦ ଗେଟ୍ ଅଫ୍ ମର୍ଜିଂ", x: 1350, y: 550, npcId: 'voss' }
        ],
        plazas: [
            { x: 245, y: 100, r: 55 },
            { x: 230, y: 400, r: 55 },
            { x: 920, y: 190, r: 55 },
            { x: 970, y: 380, r: 55 },
            { x: 330, y: 710, r: 60 },
            { x: 1350, y: 550, r: 65 },
            { x: 560, y: 360, r: 42 },
            { x: 770, y: 330, r: 45 },
            { x: 700, y: 680, r: 45 },
            { x: 1000, y: 620, r: 45 }
        ],
        roads: createRoads([
            // 1 to 2
            [[245, 100], [240, 200], [235, 300], [230, 400]],
            // 2 to 5
            [[230, 400], [250, 480], [270, 560], [300, 640], [330, 710]],
            // 2 to Center Crossroads
            [[230, 400], [340, 390], [450, 370], [560, 360], [660, 350], [770, 330]],
            // Crossroads to 3 (Reading Grove)
            [[770, 330], [820, 280], [870, 230], [920, 190]],
            // Crossroads to 4 (Speaking Well)
            [[770, 330], [840, 350], [910, 370], [970, 380]],
            // 3 to 4 direct
            [[920, 190], [950, 280], [970, 380]],
            // 4 to 6 (Gate of Merging)
            [[970, 380], [1060, 420], [1160, 460], [1250, 500], [1350, 550]],
            // 5 to 6 southern route
            [[330, 710], [450, 710], [580, 700], [700, 680], [850, 650], [1000, 620], [1150, 590], [1250, 560], [1350, 550]],
            // 4 to southern road
            [[970, 380], [990, 490], [1000, 620]]
        ], 28)
    },

    java: {
        id: 'java',
        icon: '☕',
        title: 'Java Quest',
        title_hi: 'जावा क्वेस्ट',
        title_od: 'ଜାଭା କ୍ୱେଷ୍ଟ୍',
        subtitle: 'The Code Foundry',
        subtitle_hi: 'द कोड फ़ाउंड्री',
        subtitle_od: 'ଦ କୋଡ୍ ଫାଉଣ୍ଡ୍ରି',
        desc: 'Master Java syntax, OOP, inheritance, exception handling, and packages across 6 steampunk industrial villages.',
        desc_hi: 'स्टीमपंक औद्योगिक दुनिया में जावा सिंटैक्स, OOP, इनहेरिटेंस, एक्सेप्शन और पैकेज में महारत हासिल करें।',
        desc_od: 'ଜାଭା ସିଣ୍ଟାକ୍ସ, OOP, ଇନହେରିଟାନ୍ସ, ଏକ୍ସେପ୍ସନ ଏବଂ ପ୍ୟାକେଜ ଶିଖନ୍ତୁ।',
        worldName: 'The Code Foundry',
        worldName_hi: 'द कोड फ़ाउंड्री',
        worldName_od: 'ଦ କୋଡ୍ ଫାଉଣ୍ଡ୍ରି',
        mapImage: 'overworld_java',
        mapWidth: 1024,
        mapHeight: 571,
        nodes: [
            { id: 1, name: "The Syntax Mill", name_hi: "द सिंटैक्स मिल", name_od: "ଦ ସିଣ୍ଟାକ୍ସ ମିଲ୍", x: 210, y: 160, npcId: 'thorne' },
            { id: 2, name: "The Control Tower", name_hi: "द कंट्रोल टॉवर", name_od: "ଦ କଣ୍ଟ୍ରୋଲ ଟାୱାର", x: 770, y: 120, npcId: 'vane' },
            { id: 3, name: "The Object Workshop", name_hi: "द ऑब्जेक्ट वर्कशॉप", name_od: "ଦ ଅବଜେକ୍ଟ ୱାର୍କସପ୍", x: 410, y: 400, npcId: 'clara' },
            { id: 4, name: "The Inheritance Hall", name_hi: "द इनहेरिटेंस हॉल", name_od: "ଦ ଇନହେରିଟାନ୍ସ ହଲ୍", x: 670, y: 350, npcId: 'roland' },
            { id: 5, name: "The Exception Pit", name_hi: "द एक्सेप्शन पिट", name_od: "ଦ ଏକ୍ସେପ୍ସନ ପିଟ୍", x: 240, y: 480, npcId: 'ignis' },
            { id: 6, name: "The Package Library", name_hi: "द पैकेज लाइब्रेरी", name_od: "ଦ ପ୍ୟାକେଜ ଲାଇବ୍ରେରୀ", x: 730, y: 480, npcId: 'priya' }
        ],
        plazas: [
            { x: 210, y: 160, r: 50 },
            { x: 770, y: 120, r: 48 },
            { x: 410, y: 400, r: 52 },
            { x: 670, y: 350, r: 52 },
            { x: 240, y: 480, r: 48 },
            { x: 730, y: 480, r: 52 },
            { x: 380, y: 220, r: 38 },
            { x: 530, y: 240, r: 38 },
            { x: 550, y: 520, r: 38 },
            { x: 590, y: 260, r: 38 }
        ],
        roads: createRoads([
            // Syntax Mill across upper bridge
            [[140, 160], [210, 160], [280, 180], [340, 200], [380, 220], [450, 230], [530, 240], [590, 260]],
            // Junction down to Object Workshop
            [[380, 220], [370, 280], [380, 340], [410, 400]],
            // Object Workshop down to Exception Pit
            [[410, 400], [350, 430], [300, 460], [240, 480]],
            // Object Workshop across lower bridge to Package Library
            [[410, 400], [460, 440], [500, 490], [550, 520], [610, 510], [670, 495], [730, 480]],
            // Upper Bridge to Inheritance Hall
            [[590, 260], [630, 300], [670, 350]],
            // Upper Bridge winding up to Control Tower
            [[590, 260], [640, 220], [690, 180], [730, 140], [770, 120]],
            // Control Tower down east ridge to Castle
            [[770, 120], [810, 170], [800, 240], [760, 310], [670, 350]],
            // Castle south to Package Library
            [[670, 350], [690, 410], [730, 480]]
        ], 22)
    },

    dsa: {
        id: 'dsa',
        icon: '🌲',
        title: 'DSA Quest',
        title_hi: 'डीएसए क्वेस्ट',
        title_od: 'DSA କ୍ୱେଷ୍ଟ୍',
        subtitle: 'The Algorithm Realm',
        subtitle_hi: 'द एल्गोरिदम रियल्म',
        subtitle_od: 'ଦ ଆଲଗୋରିଦିମ୍ ରେଆଲମ୍',
        desc: 'Conquer core data structures & algorithms: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and Sorting.',
        desc_hi: 'महत्वपूर्ण डेटा संरचनाओं और एल्गोरिदम पर विजय प्राप्त करें: Array, Linked List, Stack, Tree, Graph और Sorting।',
        desc_od: 'ଆରେ, ଲିଙ୍କଡ୍ ଲିଷ୍ଟ୍, ଷ୍ଟାକ୍, ଟ୍ରି, ଗ୍ରାଫ୍ ଏବଂ ସର୍ଟିଂ ଆଲଗୋରିଦିମ୍ ଶିଖନ୍ତୁ।',
        worldName: 'The Algorithm Realm',
        worldName_hi: 'द एल्गोरिदम रियल्म',
        worldName_od: 'ଦ ଆଲଗୋରିଦିମ୍ ରେଆଲମ୍',
        mapImage: 'overworld_dsa',
        mapWidth: 1024,
        mapHeight: 571,
        nodes: [
            { id: 1, name: "The Array Plains", name_hi: "द ऐरे प्लेन्स", name_od: "ଦ ଆରେ ପ୍ଲେନ୍ସ", x: 220, y: 170, npcId: 'vance' },
            { id: 2, name: "The Linked Chain", name_hi: "द लिंक्ड चेन", name_od: "ଦ ଲିଙ୍କଡ୍ ଚେନ୍", x: 510, y: 140, npcId: 'lin' },
            { id: 3, name: "The Stack & Queue Fort", name_hi: "स्टैक और कतार किला", name_od: "ଷ୍ଟାକ୍ ଓ କ୍ୟୁ ଦୁର୍ଗ", x: 800, y: 160, npcId: 'brick' },
            { id: 4, name: "The Tree Grove", name_hi: "द ट्री ग्रोव", name_od: "ଦ ଟ୍ରି ଗ୍ରୋଭ୍", x: 210, y: 430, npcId: 'sylvia' },
            { id: 5, name: "The Graph Crossroads", name_hi: "द ग्राफ चौराहा", name_od: "ଦ ଗ୍ରାଫ୍ ଛକ", x: 480, y: 390, npcId: 'jax' },
            { id: 6, name: "The Sorting Arena", name_hi: "द सॉर्टिंग एरीना", name_od: "ଦ ସର୍ଟିଂ ଆରେନା", x: 780, y: 440, npcId: 'kaida' }
        ],
        plazas: [
            { x: 220, y: 170, r: 50 },
            { x: 510, y: 140, r: 50 },
            { x: 800, y: 160, r: 52 },
            { x: 210, y: 430, r: 50 },
            { x: 480, y: 390, r: 58 },
            { x: 780, y: 440, r: 58 },
            { x: 420, y: 330, r: 38 },
            { x: 330, y: 470, r: 38 },
            { x: 580, y: 360, r: 38 }
        ],
        roads: createRoads([
            // Array Plains down to Crossroads
            [[220, 170], [270, 220], [330, 260], [380, 300], [420, 330], [480, 390]],
            // Linked Chain down river to Crossroads
            [[510, 80], [510, 140], [520, 200], [530, 270], [500, 330], [480, 390]],
            // Tree Grove across bridge to Crossroads
            [[210, 430], [270, 450], [330, 470], [390, 460], [440, 420], [480, 390]],
            // Crossroads to Stack & Queue Fort
            [[480, 390], [540, 380], [580, 360], [630, 330], [680, 280], [730, 230], [770, 190], [800, 160]],
            // Crossroads to Sorting Arena
            [[480, 390], [540, 380], [580, 360], [630, 360], [680, 390], [730, 420], [780, 440]],
            // Fort directly to Arena
            [[800, 160], [790, 240], [770, 310], [760, 380], [780, 440]],
            // River village east connector
            [[530, 270], [590, 260], [640, 250], [680, 280]]
        ], 22)
    }
};

export function getQuestPath(pathId) {
    return QUEST_PATHS[pathId] || QUEST_PATHS.opensource;
}

