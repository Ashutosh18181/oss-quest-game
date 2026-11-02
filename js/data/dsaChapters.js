/**
 * OSS Quest — DSA Quest Chapter Definitions ("The Algorithm Realm")
 * 6 structured chapters taking the learner through fundamental Data Structures and Algorithms.
 * Includes complete multi-lingual support: English (en), Hindi (hi), and Odia (od).
 */

export const DSA_CHAPTERS = [
    {
        id: 1,
        title: 'The Array Plains',
        title_hi: 'द ऐरे प्लेन्स',
        title_od: 'ଦ ଆରେ ପ୍ଲେନ୍ସ',
        subtitle: 'Contiguous Memory & Big-O Complexity',
        subtitle_hi: 'लगातार मेमोरी और बिग-ओ जटिलता',
        subtitle_od: 'କ୍ରମାନ୍ୱୟ ମେମୋରୀ ଏବଂ ବିଗ୍-ଓ ଜଟିଳତା',
        xpReward: 50,
        icon: '🌾',
        description: 'Explore contiguous memory grids, constant-time index lookups, and algorithmic time complexity.',
        content: [
            {
                heading: 'Order in the Fields: The Array',
                body: `Welcome to the Array Plains. Like neat rows of golden wheat, an <span class="jargon" data-term="array">array</span> stores items directly adjacent to each other in contiguous memory blocks. Because the memory is linear, calculating the exact address of any element takes zero effort.`
            },
            {
                heading: 'Instant Access via Zero-Based Index',
                body: `To access any element in an array, you provide its numerical <span class="jargon" data-term="index">index</span> (starting at 0 for the first item). Whether an array has 5 items or 5 million items, reading arr[42] takes instantaneous O(1) time!`
            },
            {
                heading: 'The Measure of Efficiency: Big-O',
                body: `Computer scientists measure how code scales using <span class="jargon" data-term="big-o">Big-O notation</span>. Constant time O(1) is lightning fast. But searching for a value without knowing its index requires scanning every plot one by one — which scales linearly in <span class="jargon" data-term="time-complexity">O(n) time</span>.`
            }
        ]
    },
    {
        id: 2,
        title: 'The Linked Chain',
        title_hi: 'द लिंक्ड चेन',
        title_od: 'ଦ ଲିଙ୍କଡ୍ ଚେନ୍',
        subtitle: 'Dynamic Nodes & Memory Pointers',
        subtitle_hi: 'डायनामिक नोड्स और मेमोरी पॉइंटर्स',
        subtitle_od: 'ନୋଡ୍ ଏବଂ ମେମୋରୀ ପଏଣ୍ଟର୍',
        xpReward: 75,
        icon: '⛓️',
        description: 'Navigate dynamic data chains where elements live anywhere in memory, connected by forward and backward pointers.',
        content: [
            {
                heading: 'Floating Barges of the River',
                body: `Unlike arrays that require one large unbroken strip of memory, a <span class="jargon" data-term="linked-list">linked list</span> consists of independent parcels scattered anywhere in RAM. Each parcel is called a <span class="jargon" data-term="node">node</span>.`
            },
            {
                heading: 'Connecting the Links: Pointers',
                body: `Every node holds its own data value and a <span class="jargon" data-term="pointer">pointer</span> (reference) pointing to the address of the next node in the chain. The list begins at the Head and terminates when a pointer points to null.`
            },
            {
                heading: 'Arrays vs. Linked Lists',
                body: `Inserting a new node at the very beginning of a linked list is instantaneous (O(1)) — you just rewire two pointers without shifting any other data. But finding the 500th element requires walking link-by-link from the Head (O(n)).`
            }
        ]
    },
    {
        id: 3,
        title: 'The Stack & Queue Fort',
        title_hi: 'स्टैक और कतार किला',
        title_od: 'ଷ୍ଟାକ୍ ଓ କ୍ୟୁ ଦୁର୍ଗ',
        subtitle: 'LIFO Crates & FIFO Gate Lines',
        subtitle_hi: 'LIFO क्रेट्स और FIFO कतारें',
        subtitle_od: 'LIFO ଏବଂ FIFO ନିୟମ',
        xpReward: 100,
        icon: '🛡️',
        description: 'Harness the disciplined rules of Stacks (Last-In, First-Out) and Queues (First-In, First-Out) to manage program state and buffers.',
        content: [
            {
                heading: 'The Citadel Supply: Stacks (LIFO)',
                body: `In the fort armory, shields are stacked in tall vertical piles. This is a <span class="jargon" data-term="stack">stack</span>. It strictly obeys LIFO: <span class="jargon" data-term="lifo">Last-In, First-Out</span>. You push items onto the top, and you pop items off the top. Your browser's back button and function call stacks work exactly like this!`
            },
            {
                heading: 'The Castle Gate: Queues (FIFO)',
                body: `Outside the drawbridge, villagers form a fair and orderly line. This is a <span class="jargon" data-term="queue">queue</span>, governed by FIFO: <span class="jargon" data-term="fifo">First-In, First-Out</span>. New arrivals enter at the rear (enqueue), and the first person to arrive is served first at the front (dequeue).`
            },
            {
                heading: 'Predictable Order Prevents Chaos',
                body: `Both stacks and queues provide guaranteed O(1) push/enqueue and pop/dequeue operations. They prevent messy random access and form the backbone of printer buffers, undo histories, and task schedulers.`
            }
        ]
    },
    {
        id: 4,
        title: 'The Tree Grove',
        title_hi: 'द ट्री ग्रोव',
        title_od: 'ଦ ଟ୍ରି ଗ୍ରୋଭ୍',
        subtitle: 'Hierarchies & Binary Search Trees',
        subtitle_hi: 'पदानुक्रम और बाइनरी सर्च ट्री',
        subtitle_od: 'ବାଇନାରୀ ସର୍ଚ୍ଚ ଟ୍ରି ଏବଂ ଶାଖା',
        xpReward: 125,
        icon: '🌲',
        description: 'Branch into hierarchical data structures: binary trees, search trees with O(log n) efficiency, and systematic traversals.',
        content: [
            {
                heading: 'Branching Above the Forest Floor',
                body: `Welcome to the ancient Tree Grove. When data has natural hierarchy (like folders on a disk or an organization chart), linear lists fall short. A <span class="jargon" data-term="binary-tree">binary tree</span> begins at a single Root node, branching out into left and right children.`
            },
            {
                heading: 'The Power of the Binary Search Tree (BST)',
                body: `A <span class="jargon" data-term="bst">Binary Search Tree</span> enforces a brilliant golden rule: every value smaller than the parent goes to the left, and every value larger goes to the right! With each step down the tree, you eliminate half of all remaining candidates, yielding blazing fast O(log n) searches.`
            },
            {
                heading: 'Exploring Every Leaf: Tree Traversal',
                body: `To inspect every node in a tree, we use <span class="jargon" data-term="tree-traversal">tree traversal</span> algorithms. In-Order traversal (Left, Root, Right) visits every item in perfectly sorted ascending order!`
            }
        ]
    },
    {
        id: 5,
        title: 'The Graph Crossroads',
        title_hi: 'द ग्राफ चौराहा',
        title_od: 'ଦ ଗ୍ରାଫ୍ ଛକ',
        subtitle: 'Networks, BFS Waves & DFS Paths',
        subtitle_hi: 'नेटवर्क, बीएफएस तरंगें और डीएफएस रास्ते',
        subtitle_od: 'ନେଟୱର୍କ, BFS ଏବଂ DFS ଅନୁସନ୍ଧାନ',
        xpReward: 150,
        icon: '🧭',
        description: 'Map interconnected networks using vertices and edges, traversing routes using Breadth-First Search and Depth-First Search.',
        content: [
            {
                heading: 'The Crossroads of All Paths: The Graph',
                body: `At the central crossroads, roads branch across bridges in every direction. A <span class="jargon" data-term="graph">graph</span> is the ultimate general network: it consists of <span class="jargon" data-term="vertex">vertices</span> (cities, people, servers) connected by <span class="jargon" data-term="edge">edges</span> (roads, friendships, cables).`
            },
            {
                heading: 'Ripples in Water: Breadth-First Search (BFS)',
                body: `When finding the shortest route across a city, BFS explores outward in concentric rings, level by level, using a Queue. BFS is guaranteed to discover the path with the fewest road segments!`
            },
            {
                heading: 'Diving Deep: Depth-First Search (DFS)',
                body: `DFS marches down a single path as far as possible until it hits a dead end, then backtracks using a Stack or recursion. DFS is ideal for solving labyrinths, cycle detection, and dependency ordering in compilers.`
            }
        ]
    },
    {
        id: 6,
        title: 'The Sorting Arena',
        title_hi: 'द सॉर्टिंग एरीना',
        title_od: 'ଦ ସର୍ଟିଂ ଆରେନା',
        subtitle: 'Divide-and-Conquer & Binary Search',
        subtitle_hi: 'विभाजन और विजय तथा बाइनरी सर्च',
        subtitle_od: 'ସର୍ଟିଂ ଏବଂ ବାଇନାରୀ ସର୍ଚ୍ଚ',
        xpReward: 200,
        icon: '🏟️',
        description: 'Order chaotic data at competitive speed using Merge Sort, Quick Sort, and rapid O(log n) binary search.',
        content: [
            {
                heading: 'Chaos into Order: The Arena',
                body: `In the grand colosseum, hundreds of gladiators enter in random order. A <span class="jargon" data-term="sorting">sorting algorithm</span> rearranges them into flawless numerical sequence by power rank.`
            },
            {
                heading: 'Divide and Conquer: Merge Sort',
                body: `Naive bubble sorting requires slow O(n²) comparisons. But Merge Sort splits the arena in half repeatedly until single pairs remain, then merges them back together in guaranteed O(n log n) time.`
            },
            {
                heading: 'The Ultimate Reward: Binary Search',
                body: `Once data is sorted, you unlock <span class="jargon" data-term="binary-search">binary search</span>. Finding any name among a billion sorted records requires no more than 30 guesses! You have mastered the ancient algorithmic arts of the realm!`
            }
        ]
    }
];

