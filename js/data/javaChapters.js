/**
 * OSS Quest — Java Quest Chapter Definitions ("The Code Foundry")
 * 6 structured chapters taking the learner from fundamental Java syntax to modular packages.
 * Includes complete multi-lingual support: English (en), Hindi (hi), and Odia (od).
 */

export const JAVA_CHAPTERS = [
    {
        id: 1,
        title: 'The Syntax Mill',
        title_hi: 'द सिंटैक्स मिल',
        title_od: 'ଦ ସିଣ୍ଟାକ୍ସ ମିଲ୍',
        subtitle: 'Variables, Types & The JVM Engine',
        subtitle_hi: 'वेरिएबल्स, टाइप्स और जेवीएम इंजन',
        subtitle_od: 'ଭେରିଏବଲ୍, ଡାଟା ଟାଇପ୍ ଏବଂ JVM ଇଞ୍ଜିନ',
        xpReward: 50,
        icon: '⚙️',
        description: 'Discover how human-readable Java code is compiled into bytecode and executed by the Java Virtual Machine (JVM).',
        content: [
            {
                heading: 'Welcome to the Code Foundry',
                body: `In the Code Foundry, raw thoughts are milled into rigid, strongly-typed steel. Unlike dynamically typed languages, every piece of data in Java must declare its exact <span class="jargon" data-term="data-type">data type</span> — whether it is an integer (int), floating-point decimal (double), or text (String).`
            },
            {
                heading: 'The Power of the Java Compiler',
                body: `When you write code in Java, the <span class="jargon" data-term="compiler">compiler</span> (javac) inspects every line before running. It catches typos, mismatched types, and logic errors early. If you try to store words inside a number box, the compiler halts the mill before any machine can break.`
            },
            {
                heading: 'Bytecode & The Virtual Machine',
                body: `The compiler produces <span class="jargon" data-term="bytecode">bytecode</span> stored in .class files. This bytecode is not bound to a single computer — it runs on any device that has a <span class="jargon" data-term="jvm">JVM (Java Virtual Machine)</span>. That is the legendary promise: Write Once, Run Anywhere!`
            }
        ]
    },
    {
        id: 2,
        title: 'The Control Tower',
        title_hi: 'द कंट्रोल टॉवर',
        title_od: 'ଦ କଣ୍ଟ୍ରୋଲ ଟାୱାର',
        subtitle: 'Decisions & Loops in Motion',
        subtitle_hi: 'निर्णय और लूप का नियंत्रण',
        subtitle_od: 'ନିଷ୍ପତ୍ତି ଏବଂ ଲୁପ୍ ନିୟନ୍ତ୍ରଣ',
        xpReward: 75,
        icon: '🗼',
        description: 'Direct the flow of execution using if/else conditionals, switch statements, for loops, and while loops.',
        content: [
            {
                heading: 'Making Decisions with Conditionals',
                body: `At the top of the Control Tower, molten logic is directed across the realm. Using <span class="jargon" data-term="conditional">conditionals</span> like if, else if, and else, your program inspects conditions and chooses the correct path based on true or false statements.`
            },
            {
                heading: 'Repetition with Loops',
                body: `When you need to repeat a task 100 times, you do not write 100 lines of code. You use a <span class="jargon" data-term="loop">loop</span>. A for loop repeats a fixed number of times using a counter; a while loop runs as long as a certain condition remains true.`
            },
            {
                heading: 'Guarding Against Infinite Loops',
                body: `Every loop must have a clear exit condition. If a loop continues forever without stopping, it consumes all system memory and hangs the tower. Always make sure your loop variables move steadily toward termination.`
            }
        ]
    },
    {
        id: 3,
        title: 'The Object Workshop',
        title_hi: 'द ऑब्जेक्ट वर्कशॉप',
        title_od: 'ଦ ଅବଜେକ୍ଟ ୱାର୍କସପ୍',
        subtitle: 'Classes, Objects & Constructors',
        subtitle_hi: 'क्लास, ऑब्जेक्ट और कंस्ट्रक्टर',
        subtitle_od: 'କ୍ଲାସ୍, ଅବଜେକ୍ଟ ଏବଂ କନଷ୍ଟ୍ରକ୍ଟର',
        xpReward: 100,
        icon: '🔨',
        description: 'Master object-oriented programming by designing blueprints (classes) and instantiating living objects with state and methods.',
        content: [
            {
                heading: 'Blueprints of Creation: The Class',
                body: `In the Object Workshop, everything begins with a blueprint called a <span class="jargon" data-term="java-class">class</span>. A class describes what an entity knows (its fields, such as name and health) and what it can do (its methods, such as attack or repair).`
            },
            {
                heading: 'Bringing Blueprints to Life: The Object',
                body: `A class blueprint sits on paper until you forge it into a living <span class="jargon" data-term="object">object</span> using the new keyword. Each object occupies its own location in computer memory and holds its own personal state.`
            },
            {
                heading: 'Constructors & Methods',
                body: `When an object is forged, a special method called a <span class="jargon" data-term="constructor">constructor</span> runs immediately to set initial values. From then on, you invoke <span class="jargon" data-term="method">methods</span> on the object to command its actions.`
            }
        ]
    },
    {
        id: 4,
        title: 'The Inheritance Hall',
        title_hi: 'द इनहेरिटेंस हॉल',
        title_od: 'ଦ ଇନହେରିଟାନ୍ସ ହଲ୍',
        subtitle: 'Inheritance, Polymorphism & Interfaces',
        subtitle_hi: 'इनहेरिटेंस, बहुरूपता और इंटरफ़ेस',
        subtitle_od: 'ଇନହେରିଟାନ୍ସ, ବହୁରୂପତା ଏବଂ ଇଣ୍ଟରଫେସ୍',
        xpReward: 125,
        icon: '🏰',
        description: 'Pass down capabilities from parent classes using extends, override behaviors, and establish binding contracts with interfaces.',
        content: [
            {
                heading: 'The Ancestral Lineage: Inheritance',
                body: `In the grand Inheritance Hall, young classes do not start from scratch. Through <span class="jargon" data-term="inheritance">inheritance</span> (extends), a child class automatically receives all fields and methods of its parent class, eliminating redundant code.`
            },
            {
                heading: 'Many Forms: Polymorphism',
                body: `Through <span class="jargon" data-term="polymorphism">polymorphism</span>, a parent reference can point to any of its specialized subclasses. When you call an action like forgeItem(), each child class executes its own unique overridden version.`
            },
            {
                heading: 'Unbreakable Contracts: Interfaces',
                body: `An <span class="jargon" data-term="interface">interface</span> defines what capabilities a class must provide without dictating how it must implement them. Classes implement interfaces to guarantee they uphold the standard.`
            }
        ]
    },
    {
        id: 5,
        title: 'The Exception Pit',
        title_hi: 'द एक्सेप्शन पिट',
        title_od: 'ଦ ଏକ୍ସେପ୍ସନ ପିଟ୍',
        subtitle: 'Robust Error Handling & Recovery',
        subtitle_hi: 'त्रुटि प्रबंधन और सुरक्षा जाल',
        subtitle_od: 'ତ୍ରୁଟି ପରିଚାଳନା ଏବଂ ସୁରକ୍ଷା ବ୍ୟବସ୍ଥା',
        xpReward: 150,
        icon: '🌋',
        description: 'Tame the volcanic dangers of runtime crashes using try-catch blocks, finally clauses, and custom exceptions.',
        content: [
            {
                heading: 'When Things Go Wrong: Exceptions',
                body: `Beneath the foundry lies the volcanic Exception Pit. When a program attempts an illegal operation — like dividing by zero or reading a file that does not exist — Java raises an <span class="jargon" data-term="exception">exception</span>.`
            },
            {
                heading: 'Building Safe Nets with Try-Catch',
                body: `Instead of letting errors crash your entire system, you enclose dangerous logic in a <span class="jargon" data-term="try-catch">try-catch</span> block. If an error erupts in the try block, execution jumps to the catch block where you handle it gracefully.`
            },
            {
                heading: 'The Finally Guarantee',
                body: `Whether an exception was thrown or everything succeeded smoothly, the finally block always executes. This is where you safely close open network streams, release database locks, and extinguish flames.`
            }
        ]
    },
    {
        id: 6,
        title: 'The Package Library',
        title_hi: 'द पैकेज लाइब्रेरी',
        title_od: 'ଦ ପ୍ୟାକେଜ ଲାଇବ୍ରେରୀ',
        subtitle: 'Packages, JAR Archives & Libraries',
        subtitle_hi: 'पैकेज, जार आर्काइव और लाइब्रेरी',
        subtitle_od: 'ପ୍ୟାକେଜ୍, JAR ଆର୍କାଇଭ୍ ଏବଂ ଲାଇବ୍ରେରୀ',
        xpReward: 200,
        icon: '📚',
        description: 'Organize industrial Java systems into clean packages, bundle classes into JAR archives, and reuse ecosystem libraries.',
        content: [
            {
                heading: 'Organizing Namespaces with Packages',
                body: `As your codebase grows to thousands of classes, collisions happen. A <span class="jargon" data-term="package">package</span> provides a clean folder namespace (such as com.forge.engine) that keeps related classes neatly categorized and protected.`
            },
            {
                heading: 'Distributing Your Code: JAR Archives',
                body: `When your application is ready for the world, you compress the compiled classes and assets into a <span class="jargon" data-term="jar">JAR (Java ARchive)</span> file. A single JAR can be shipped, shared, and executed on any computer with the JVM.`
            },
            {
                heading: 'Congratulations, Master of the Foundry!',
                body: `You have conquered the 6 foundational pillars of Java: types, control flow, object classes, inheritance, exceptions, and packages. You are now prepared to build production-grade, enterprise-ready software!`
            }
        ]
    }
];

