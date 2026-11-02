/**
 * OSS Quest — DSA Quest Dialogue Scripts ("The Algorithm Realm")
 * Complete localized dialogue scripts for English (en), Hindi (hi), and Odia (od).
 */

export const DSA_DIALOGUES = {
    vance: {
        chapterId: 1,
        xpReward: 50,
        nodes: [
            {
                text: "Welcome to The Array Plains, traveler! I'm Farmer Vance. See these crops? Every furrow is planted at an exact, measured stride.",
                text_hi: "ऐरे प्लेन्स में आपका स्वागत है! मैं किसान वेंस हूँ। इन फ़सलों को देखिए? हर क्यारी एक निश्चित दूरी पर लगाई गई है।",
                text_od: "ଆରେ ପ୍ଲେନ୍ସକୁ ସ୍ୱାଗତ! ମୁଁ ଚାଷୀ ଭେନ୍ସ। ପ୍ରତ୍ୟେକ ଧାଡ଼ି ମାପିଚୁପି ଲଗାଯାଇଛି।",
                choices: [
                    { label: "Why plant them so rigidly?", label_hi: "इतने नियम से क्यों लगाया?", label_od: "ଏତେ ନିୟମରେ କାହିଁକି ଲଗାଇଛନ୍ତି?", next: 1 },
                    { label: "How does an array work in memory?", label_hi: "मेमोरी में ऐरे कैसे काम करता है?", label_od: "ମେମୋରୀରେ ଆରେ କିପରି କାମ କରେ?", next: 1 }
                ]
            },
            {
                text: "Because in an ~array~, memory is contiguous — elements sit shoulder to shoulder. If I know where plot 0 starts, I can calculate plot 40 instantly!",
                text_hi: "क्योंकि एक ~array~ में डेटा एक के बाद एक लगातार मेमोरी में बैठता है। अगर मुझे पहले डब्बे का पता मालूम है, तो 40वें डब्बे का पता तुरंत मिल जाता है!",
                text_od: "କାରଣ ଏକ ~array~ ରେ ଡାଟା ପାଖାପାଖି ମେମୋରୀରେ ଥାଏ। ପ୍ରଥମ ସ୍ଥାନ ଜଣାଥିଲେ ୪୦ତମ ସ୍ଥାନ ତୁରନ୍ତ ମିଳିଯାଏ!",
                jargon: 'array'
            },
            {
                text: "We access elements using an ~index~ starting at 0. Accessing any index takes instantaneous O(1) time!",
                text_hi: "हम 0 से शुरू होने वाले ~index~ का उपयोग करते हैं। किसी भी इंडेक्स को पढ़ना पलक झपकते ही O(1) समय में होता है!",
                text_od: "ଆମେ ୦ ରୁ ଆରମ୍ଭ ହେଉଥିବା ~index~ ବ୍ୟବହାର କରୁ। ଯେକୌଣସି ଇଣ୍ଡେକ୍ସକୁ O(1) ସମୟରେ ଖୋଜିହୁଏ!",
                jargon: 'index'
            },
            {
                text: "We measure how fast operations scale using ~big-o~ notation. Remember: looking up by index is O(1), but searching an unsorted array takes linear O(n) time.",
                text_hi: "हम गति को ~big-o~ नोटेशन से मापते हैं। याद रखें: इंडेक्स से देखना O(1) है, लेकिन बिना क्रम वाले ऐरे में खोजना O(n) समय लेता है।",
                text_od: "ଆମେ ଗତିକୁ ~big-o~ ଦ୍ୱାରା ମାପୁ। ଇଣ୍ଡେକ୍ସ ସାହାଯ୍ୟରେ O(1), କିନ୍ତୁ ସାଧାରଣ ଖୋଜିବାରେ O(n) ସମୟ ଲାଗେ।",
                jargon: 'big-o'
            }
        ]
    },

    lin: {
        chapterId: 2,
        xpReward: 75,
        nodes: [
            {
                text: "Ahoy! Step aboard at The Linked Chain. I am Ferryman Lin. Our river barges do not crowd together like farm rows — they float freely.",
                text_hi: "अहोय! लिंक्ड चेन में नाव पर आइए। मैं नाविक लिन हूँ। हमारी नावें खेतों की तरह जुड़ी नहीं हैं — वे आज़ादी से तैरती हैं।",
                text_od: "ଆହୋଇ! ଲିଙ୍କଡ୍ ଚେନକୁ ସ୍ୱାଗତ। ମୁଁ ନାଉରିଆ ଲିନ୍। ଆମ ଡଙ୍ଗାଗୁଡ଼ିକ ମୁକ୍ତ ଭାବେ ଭାସୁଛନ୍ତି।",
                choices: [
                    { label: "How do the barges stay together?", label_hi: "नावें आपस में कैसे जुड़ी हैं?", label_od: "ଡଙ୍ଗାଗୁଡ଼ିକ କିପରି ଯୋଡ଼ି ହୋଇ ରହିଛନ୍ତି?", next: 1 },
                    { label: "What is a linked list?", label_hi: "लिंक्ड लिस्ट क्या होती है?", label_od: "ଲିଙ୍କଡ୍ ଲିଷ୍ଟ୍ କ'ଣ?", next: 1 }
                ]
            },
            {
                text: "Each barge is an independent ~node~ holding precious cargo. And each node carries a heavy iron chain — a ~pointer~ — connecting it to the next node.",
                text_hi: "हर नाव एक स्वतंत्र ~node~ है जिसमें सामान रखा है। और हर नोड के पास एक लोहे की चेन यानी ~pointer~ है जो अगली नाव से जुड़ी है।",
                text_od: "ପ୍ରତ୍ୟେକ ଡଙ୍ଗା ଏକ ସ୍ୱତନ୍ତ୍ର ~node~ ଏବଂ ଏଥିରେ ଥିବା ଚେନ୍ ହେଉଛି ~pointer~ ଯାହା ପରବର୍ତ୍ତୀ ଡଙ୍ଗା ସହ ଯୋଡ଼ିଥାଏ।",
                jargon: 'node'
            },
            {
                text: "This forms a ~linked-list~. If I want to attach a new barge at the front of my convoy, it takes instant O(1) time — just hook the chain!",
                text_hi: "इसे ~linked-list~ कहते हैं। अगर मुझे सबसे आगे नई नाव जोड़नी हो, तो बिना बाकी नावों को हिलाए सिर्फ एक चेन जोड़नी है — O(1) समय!",
                text_od: "ଏହାକୁ ~linked-list~ କୁହାଯାଏ। ଆଗରେ ନୂଆ ଡଙ୍ଗା ଯୋଡ଼ିବା ପାଇଁ କେବଳ ଚେନ୍ ଲଗାଇବାକୁ ହୁଏ — O(1) ସମୟ!",
                jargon: 'linked-list'
            },
            {
                text: "The tradeoff? You cannot jump straight to the middle barge. You must sail from node to node along the pointers until you reach your goal.",
                text_hi: "नुकसान क्या है? आप सीधे बीच वाली नाव पर छलांग नहीं लगा सकते। आपको पहली नाव से एक-एक करके आगे बढ़ना होगा।",
                text_od: "କିନ୍ତୁ ମଝି ଡଙ୍ଗାକୁ ସିଧା ଯାଇପାରିବେ ନାହିଁ, ଆପଣଙ୍କୁ ପ୍ରଥମରୁ ଗୋଟିଏ ପରେ ଗୋଟିଏ ଯିବାକୁ ପଡ଼ିବ।",
                jargon: 'pointer'
            }
        ]
    },

    brick: {
        chapterId: 3,
        xpReward: 100,
        nodes: [
            {
                text: "Stand at attention! You enter The Stack & Queue Fort. I am Quartermaster Brick. Discipline is the only thing standing between victory and chaos.",
                text_hi: "सावधान! आप स्टैक और कतार किले में हैं। मैं क्वार्टरमास्टर ब्रिक हूँ। अनुशासन ही व्यवस्था की नींव है।",
                text_od: "ସାବଧାନ! ଆପଣ ଷ୍ଟାକ୍ ଓ କ୍ୟୁ ଦୁର୍ଗରେ ଅଛନ୍ତି। ମୁଁ ବ୍ରିକ୍। ଅନୁଶାସନ ହିଁ ସବୁକିଛି।",
                choices: [
                    { label: "How do you organize supplies?", label_hi: "सामान कैसे व्यवस्थित करते हैं?", label_od: "ସାମଗ୍ରୀ କିପରି ସଜାଡ଼ି ରଖନ୍ତି?", next: 1 },
                    { label: "What is a Stack and a Queue?", label_hi: "स्टैक और कतार क्या हैं?", label_od: "ଷ୍ଟାକ୍ ଏବଂ କ୍ୟୁ କ'ଣ?", next: 1 }
                ]
            },
            {
                text: "In the armory, heavy cannonballs are piled in a vertical ~stack~. It obeys LIFO: ~lifo~ (Last-In, First-Out). You can only push to the top, and pop from the top!",
                text_hi: "शस्त्रागार में तोप के गोले एक के ऊपर एक ~stack~ में रखे हैं। यह LIFO नियम मानता है: जो अंत में रखा गया, वही पहले निकलेगा!",
                text_od: "ଅସ୍ତ୍ରାଗାରରେ ତୋପର ଗୋଳା ଗୋଟିଏ ଉପରେ ଗୋଟିଏ ~stack~ ଭାବେ ରଖାଯାଇଛି (LIFO ନିୟମ)।",
                jargon: 'stack'
            },
            {
                text: "Outside the gate, soldiers and wagons form a single-file ~queue~. That follows FIFO: ~fifo~ (First-In, First-Out). First to arrive is first through the archway.",
                text_hi: "दरवाज़े के बाहर सैनिक एक सीधी ~queue~ में खड़े हैं। यह FIFO नियम मानता है: जो पहले आया, वही पहले अंदर जाएगा।",
                text_od: "ଗେଟ୍ ବାହାରେ ସୈନ୍ୟମାନେ ଏକ ସିଧା ~queue~ ରେ ଛିଡ଼ା ହୋଇଛନ୍ତି (FIFO ନିୟମ)।",
                jargon: 'queue'
            },
            {
                text: "Stacks power your function call frames and undo history. Queues power your print buffers and web request listeners. Order is absolute!",
                text_hi: "स्टैक आपके प्रोग्राम के अनडू (undo) और फ़ंक्शन कॉल को संभालते हैं। कतारें प्रिंटिंग और नेटवर्क रिक्वेस्ट को क्रम में रखती हैं।",
                text_od: "ଷ୍ଟାକ୍ ଆପଣଙ୍କ ଅନଡୁ (undo) ଏବଂ କ୍ୟୁ ପ୍ରିଣ୍ଟିଂ କାମରେ ବ୍ୟବହୃତ ହୁଏ।",
            }
        ]
    },

    sylvia: {
        chapterId: 4,
        xpReward: 125,
        nodes: [
            {
                text: "Listen closely to the canopy whispers. I am Dryad Sylvia of The Tree Grove. Data in nature does not live in flat lines.",
                text_hi: "पेड़ों की सरसराहट को ध्यान से सुनिए। मैं ट्री ग्रोव की ड्रायड सिल्विया हूँ। प्रकृति में डेटा सपाट रेखाओं में नहीं रहता।",
                text_od: "ଗଛର ଶବ୍ଦ ଶୁଣନ୍ତୁ। ମୁଁ ସିଲଭିଆ। ପ୍ରକୃତିରେ ଡାଟା କେବଳ ସିଧା ଲାଇନରେ ରହେ ନାହିଁ।",
                choices: [
                    { label: "How do trees branch in code?", label_hi: "कोड में ट्री कैसे शाखाएं बनाते हैं?", label_od: "କୋଡରେ ଟ୍ରି କିପରି ଶାଖା ମେଲେ?", next: 1 },
                    { label: "What is a Binary Search Tree?", label_hi: "बाइनरी सर्च ट्री क्या है?", label_od: "ବାଇନାରୀ ସର୍ଚ୍ଚ ଟ୍ରି କ'ଣ?", next: 1 }
                ]
            },
            {
                text: "A ~binary-tree~ sprouts from a single Root high above. Each parent node splits into two downward branches: a Left Child and a Right Child.",
                text_hi: "एक ~binary-tree~ सबसे ऊपर एक रूट (Root) से शुरू होता है और हर नोड से दो शाखाएं निकलती हैं: बायाँ और दायाँ बच्चा।",
                text_od: "ଏକ ~binary-tree~ ଶୀର୍ଷରେ ଥିବା ରୁଟ୍ ରୁ ଆରମ୍ଭ ହୋଇ ଦୁଇଟି ଶାଖା (ବାମ ଓ ଡାହାଣ) ରେ ବିସ୍ତାର ହୁଏ।",
                jargon: 'binary-tree'
            },
            {
                text: "In a ~bst~ (Binary Search Tree), everything smaller than the parent grows to the left, and everything larger grows to the right. Splitting the world in half with every step!",
                text_hi: "एक ~bst~ (बाइनरी सर्च ट्री) में, छोटे मान बाईं ओर और बड़े मान दाईं ओर जाते हैं। हर कदम पर आधी दुनिया हट जाती है — O(log n) गति!",
                text_od: "ଏକ ~bst~ ରେ ଛୋଟ ମାନ ବାମକୁ ଏବଂ ବଡ଼ ମାନ ଡାହାଣକୁ ଯାଏ, ଯାହା O(log n) ଗତି ଦିଏ!",
                jargon: 'bst'
            },
            {
                text: "When you walk the grove using ~tree-traversal~ (Left, Root, Right), you emerge reading every number in perfect sorted harmony.",
                text_hi: "जब आप ~tree-traversal~ (In-Order) से ट्री को देखते हैं, तो सभी मान अपने-आप सही क्रम में मिल जाते हैं।",
                text_od: "~tree-traversal~ ମାଧ୍ୟମରେ ଆପଣ ସମସ୍ତ ମାନକୁ ସଠିକ୍ କ୍ରମରେ ପାଇପାରିବେ।",
                jargon: 'tree-traversal'
            }
        ]
    },

    jax: {
        chapterId: 5,
        xpReward: 150,
        nodes: [
            {
                text: "Greetings, traveler! I am Pathfinder Jax of The Graph Crossroads. Bridges, trails, and river crossings — every journey is a graph.",
                text_hi: "नमस्ते मुसाफ़िर! मैं ग्राफ चौराहे का पाथफ़ाइंडर जैक्स हूँ। पुल, पगडंडियाँ और रास्ते — हर यात्रा एक ग्राफ़ है।",
                text_od: "ନମସ୍କାର! ମୁଁ ଗ୍ରାଫ୍ ଛକର ପାଥଫାଇଣ୍ଡର ଜ୍ୟାକ୍ସ। ପୋଲ, ରାସ୍ତା ଏବଂ ନଦୀ — ପ୍ରତ୍ୟେକ ଯାତ୍ରା ଏକ ଗ୍ରାଫ୍।",
                choices: [
                    { label: "What makes a graph?", label_hi: "ग्राफ़ किससे बनता है?", label_od: "ଗ୍ରାଫ୍ କିପରି ତିଆରି ହୁଏ?", next: 1 },
                    { label: "How do you find the best path?", label_hi: "सही रास्ता कैसे खोजते हैं?", label_od: "ସଠିକ୍ ରାସ୍ତା କିପରି ଖୋଜିବା?", next: 1 }
                ]
            },
            {
                text: "A ~graph~ is the ultimate network: villages and landmarks are ~vertex~ points, and the roads connecting them are ~edge~ links.",
                text_hi: "एक ~graph~ सबसे शक्तिशाली नेटवर्क है: गाँव और चौकियाँ ~vertex~ (बिंदु) हैं, और उन्हें जोड़ने वाली सड़कें ~edge~ (रेखाएं) हैं।",
                text_od: "ଏକ ~graph~ ସର୍ବୋତ୍ତମ ନେଟୱର୍କ: ଗାଁଗୁଡ଼ିକ ~vertex~ ଏବଂ ସଂଯୋଗକାରୀ ରାସ୍ତାଗୁଡ଼ିକ ~edge~ ଅଟନ୍ତି।",
                jargon: 'graph'
            },
            {
                text: "To search a network, we deploy ~bfs-dfs~. Breadth-First Search (BFS) spreads like water ripples using a Queue to find the shortest path in unweighted networks.",
                text_hi: "रास्ता खोजने के लिए हम ~bfs-dfs~ का उपयोग करते हैं। बीएफएस (BFS) पानी की लहरों की तरह फैलता है और सबसे छोटा रास्ता ढूंढता है।",
                text_od: "ରାସ୍ତା ଖୋଜିବା ପାଇଁ ଆମେ ~bfs-dfs~ ବ୍ୟବହାର କରୁ। BFS ପାଣିର ତରଙ୍ଗ ପରି ସବୁଠାରୁ କମ୍ ଦୂରତା ଖୋଜିଥାଏ।",
                jargon: 'bfs-dfs'
            },
            {
                text: "Depth-First Search (DFS) marches straight down a single path with a Stack until it must backtrack. Maps, social networks, and GPS rely on these very graphs!",
                text_hi: "डीएफएस (DFS) गहराई तक जाता है और फिर पीछे लौटता है। गूगल मैप्स और सोशल नेटवर्क इन्हीं ग्राफ़ पर टिके हैं!",
                text_od: "DFS ଗଭୀରକୁ ଯାଇ ପଥ ଖୋଜେ। ମ୍ୟାପ୍ସ ଏବଂ ସୋସିଆଲ ନେଟୱର୍କ ଏହି ଗ୍ରାଫ୍ ଉପରେ ଚାଲିଥାଏ!",
            }
        ]
    },

    kaida: {
        chapterId: 6,
        xpReward: 200,
        nodes: [
            {
                text: "Step into the light of The Sorting Arena! I am Champion Kaida. Here, champions are ranked and chaos is vanquished through algorithmic precision.",
                text_hi: "सॉर्टिंग एरीना में आइए! मैं चैंपियन काइदा हूँ। यहाँ योद्धाओं को उनकी शक्ति के अनुसार व्यवस्थित किया जाता है।",
                text_od: "ସର୍ଟିଂ ଆରେନାକୁ ଆସନ୍ତୁ! ମୁଁ ଚାମ୍ପିଅନ୍ କାଇଦା। ଏଠାରେ ଯୋଦ୍ଧାମାନଙ୍କୁ ସେମାନଙ୍କ ଶକ୍ତି କ୍ରମରେ ସଜାଯାଏ।",
                choices: [
                    { label: "What is the fastest way to sort?", label_hi: "क्रमबद्ध (sort) करने का सबसे तेज़ तरीका क्या है?", label_od: "ସଜାଇବାର ଦ୍ରୁତତମ ଉପାୟ କ'ଣ?", next: 1 },
                    { label: "Teach me binary search.", label_hi: "मुझे बाइनरी सर्च सिखाइए।", label_od: "ମୋତେ ବାଇନାରୀ ସର୍ଚ୍ଚ ଶିଖାନ୍ତୁ।", next: 1 }
                ]
            },
            {
                text: "Comparing every gladiator against every other takes slow O(n²) time. But advanced ~sorting~ like Merge Sort divides the arena in half and conquers in O(n log n) time!",
                text_hi: "सबको सबसे तुलना करना O(n²) में धीमा है। लेकिन मर्ज सॉर्ट (Merge Sort) जैसे तरीके समस्या को आधा-आधा बांटकर O(n log n) में सुलझाते हैं!",
                text_od: "ସମସ୍ତଙ୍କୁ ତୁଳନା କରିବା O(n²) ଧୀମା, କିନ୍ତୁ ମର୍ଜ ସର୍ଟ୍ O(n log n) ସମୟରେ କାମ ଶେଷ କରେ!",
                jargon: 'sorting'
            },
            {
                text: "Once the arena is sorted, finding any warrior takes instant ~binary-search~. You inspect the middle, discard half, and repeat. Even in a million warriors, you find them in 20 steps!",
                text_hi: "एक बार क्रम बन जाने पर, ~binary-search~ से किसी को भी 20 चरणों में खोजा जा सकता है — चाहे दस लाख योद्धा क्यों न हों!",
                text_od: "ଥରେ ତାଲିକା ସଜାଡ଼ି ହେବା ପରେ, ~binary-search~ ଦ୍ୱାରା ଲକ୍ଷେ ଲୋକଙ୍କ ଭିତରୁ ମାତ୍ର ୨୦ ପଦକ୍ଷେପରେ ଖୋଜିହୁଏ!",
                jargon: 'binary-search'
            },
            {
                text: "You have conquered the Algorithm Realm! Arrays, lists, stacks, trees, graphs, and sorting are in your grasp. Code with speed and pride, Champion!",
                text_hi: "आपने एल्गोरिदम की दुनिया जीत ली है! ऐरे, लिस्ट, स्टैक, ट्री, ग्राफ और सॉर्टिंग अब आपकी मुट्ठी में हैं। गर्व से कोड करें!",
                text_od: "ଆପଣ ଆଲଗୋରିଦିମ୍ ଦୁନିଆ ବିଜୟ କରିଛନ୍ତି! ଗର୍ବର ସହ କୋଡିଂ କରନ୍ତୁ, ଚାମ୍ପିଅନ୍!",
            }
        ]
    }
};

