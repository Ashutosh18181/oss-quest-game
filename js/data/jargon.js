/**
 * OSS Quest — Jargon Dictionary
 * Developer terms with plain-language translations in EN, HI, OD.
 * Covers Open Source, Java, and Data Structures & Algorithms.
 */

export const JARGON = {
    // --- OPEN SOURCE TERMS ---
    'version-control': {
        term: 'Version Control',
        en: 'A system that records every change to your files so you can go back to any earlier version. Like "undo" but for an entire project.',
        hi: 'एक सिस्टम जो आपकी फ़ाइलों में हर बदलाव को याद रखता है ताकि आप किसी भी पुराने वर्ज़न पर वापस जा सकें। पूरे प्रोजेक्ट के लिए "undo" जैसा।',
        od: 'ଏକ ସିଷ୍ଟମ ଯାହା ଆପଣଙ୍କ ଫାଇଲରେ ପ୍ରତ୍ୟେକ ପରିବର୍ତ୍ତନକୁ ରେକର୍ଡ କରେ ଯାହା ଦ୍ୱାରା ଆପଣ ଯେକୌଣସି ପୁରୁଣା ସଂସ୍କରଣକୁ ଫେରି ପାରିବେ।'
    },
    'git': {
        term: 'Git',
        en: 'A free tool that tracks every change in your project. It runs on your computer and keeps a complete history of your work.',
        hi: 'एक फ्री टूल जो आपके प्रोजेक्ट में हर बदलाव को ट्रैक करता है। यह आपके कंप्यूटर पर चलता है और आपके काम का पूरा इतिहास रखता है।',
        od: 'ଏକ ମାଗଣା ଟୁଲ ଯାହା ଆପଣଙ୍କ ପ୍ରୋଜେକ୍ଟରେ ପ୍ରତ୍ୟେକ ପରିବର୍ତ୍ତନକୁ ଟ୍ରାକ କରେ। ଏହା ଆପଣଙ୍କ କମ୍ପ୍ୟୁଟରରେ ଚାଲେ ଏବଂ ଆପଣଙ୍କ କାମର ସମ୍ପୂର୍ଣ୍ଣ ଇତିହାସ ରଖେ।'
    },
    'github': {
        term: 'GitHub',
        en: 'A website where people store and share their Git projects. Anyone can view public projects, suggest changes, and collaborate.',
        hi: 'एक वेबसाइट जहाँ लोग अपने Git प्रोजेक्ट्स स्टोर और शेयर करते हैं। कोई भी पब्लिक प्रोजेक्ट्स देख सकता है, बदलाव सुझा सकता है, और मिलकर काम कर सकता है।',
        od: 'ଏକ ୱେବସାଇଟ ଯେଉଁଠାରେ ଲୋକମାନେ ସେମାନଙ୍କ Git ପ୍ରୋଜେକ୍ଟ ଷ୍ଟୋର ଏବଂ ସେୟାର କରନ୍ତି। ଯେକେହି ପବ୍ଲିକ ପ୍ରୋଜେକ୍ଟ ଦେଖିପାରିବେ ଏବଂ ପରିବର୍ତ୍ତନ ପ୍ରସ୍ତାବ ଦେଇପାରିବେ।'
    },
    'repository': {
        term: 'Repository',
        en: 'A project folder tracked by Git. It contains all the code, files, and the complete history of every change ever made.',
        hi: 'Git द्वारा ट्रैक किया गया एक प्रोजेक्ट फ़ोल्डर। इसमें सारा कोड, फ़ाइलें, और हर बदलाव का पूरा इतिहास होता है।',
        od: 'Git ଦ୍ୱାରା ଟ୍ରାକ ହୋଇଥିବା ଏକ ପ୍ରୋଜେକ୍ଟ ଫୋଲ୍ଡର। ଏଥିରେ ସମସ୍ତ କୋଡ, ଫାଇଲ ଏବଂ ପ୍ରତ୍ୟେକ ପରିବର୍ତ୍ତନର ସମ୍ପୂର୍ଣ୍ଣ ଇତିହାସ ରହିଥାଏ।'
    },
    'commit': {
        term: 'Commit',
        en: 'A saved snapshot of your changes. Each commit has a message describing what you changed and why. Think of it as a checkpoint.',
        hi: 'आपके बदलावों का एक सेव किया हुआ स्नैपशॉट। हर commit में एक मैसेज होता है जो बताता है कि क्या बदला और क्यों। इसे एक चेकपॉइंट समझें।',
        od: 'ଆପଣଙ୍କ ପରିବର୍ତ୍ତନର ଏକ ସେଭ ହୋଇଥିବା ସ୍ନାପସଟ। ପ୍ରତ୍ୟେକ commit ରେ ଏକ ବାର୍ତ୍ତା ଥାଏ ଯାହା ବର୍ଣ୍ଣନା କରେ ଆପଣ କ\'ଣ ପରିବର୍ତ୍ତନ କଲେ।'
    },
    'fork': {
        term: 'Fork',
        en: 'Your personal copy of someone else\'s repository on GitHub. You can change your fork freely without affecting the original.',
        hi: 'GitHub पर किसी और की repository की आपकी निजी कॉपी। आप अपनी fork में बिना ओरिजिनल को प्रभावित किए कुछ भी बदल सकते हैं।',
        od: 'GitHub ରେ ଅନ୍ୟ କାହାରର repository ର ଆପଣଙ୍କ ନିଜସ୍ୱ କପି। ଆପଣ ମୂଳକୁ ପ୍ରଭାବିତ ନକରି ଆପଣଙ୍କ fork ରେ ଯାହା ଇଚ୍ଛା ବଦଳାଇ ପାରିବେ।'
    },
    'clone': {
        term: 'Clone',
        en: 'Download a copy of a repository from GitHub to your own computer. After cloning, you have all the files and history locally.',
        hi: 'GitHub से repository की कॉपी अपने कंप्यूटर पर डाउनलोड करना। क्लोन करने के बाद, सारी फ़ाइलें और इतिहास आपकी मशीन पर होता है।',
        od: 'GitHub ରୁ repository ର ଏକ କପି ଆପଣଙ୍କ କମ୍ପ୍ୟୁଟରକୁ ଡାଉନଲୋଡ କରନ୍ତୁ। କ୍ଲୋନ ପରେ ସମସ୍ତ ଫାଇଲ ଏବଂ ଇତିହାସ ଲୋକାଲରେ ଥାଏ।'
    },
    'branch': {
        term: 'Branch',
        en: 'A separate line of work within a repository. You create a branch to work on a feature or fix without disturbing the main code.',
        hi: 'एक repository के अंदर काम की एक अलग लाइन। आप मुख्य कोड को बिना छेड़े किसी फ़ीचर या फ़िक्स पर काम करने के लिए branch बनाते हैं।',
        od: 'ଏକ repository ଭିତରେ କାମର ଏକ ଅଲଗା ଲାଇନ। ଆପଣ ମୁଖ୍ୟ କୋଡକୁ ବିଘ୍ନ ନକରି ଏକ ଫିଚର କିମ୍ବା ଫିକ୍ସ ଉପରେ କାମ କରିବା ପାଇଁ branch ତିଆରି କରନ୍ତି।'
    },
    'pull-request': {
        term: 'Pull Request',
        en: 'A request to merge your changes into the original project. The maintainer reviews your code, may suggest edits, and then merges it in.',
        hi: 'अपने बदलावों को ओरिजिनल प्रोजेक्ट में मर्ज करने का अनुरोध। मेंटेनर आपका कोड रिव्यू करता है, बदलाव सुझा सकता है, और फिर इसे मर्ज करता है।',
        od: 'ଆପଣଙ୍କ ପରିବର୍ତ୍ତନଗୁଡ଼ିକୁ ମୂଳ ପ୍ରୋଜେକ୍ଟରେ ମର୍ଜ କରିବା ପାଇଁ ଅନୁରୋଧ। ମେଣ୍ଟେନର ଆପଣଙ୍କ କୋଡ ସମୀକ୍ଷା କରନ୍ତି ଏବଂ ତାପରେ ଏହାକୁ ମର୍ଜ କରନ୍ତି।'
    },
    'issue': {
        term: 'Issue',
        en: 'A task, bug report, or feature request posted on a GitHub repository. Issues are how people communicate about what needs to be done.',
        hi: 'GitHub repository पर पोस्ट किया गया एक टास्क, बग रिपोर्ट, या फ़ीचर रिक्वेस्ट। Issues से लोग बात करते हैं कि क्या करना है।',
        od: 'ଏକ GitHub repository ରେ ପୋଷ୍ଟ ହୋଇଥିବା ଏକ ଟାସ୍କ, ବଗ ରିପୋର୍ଟ, କିମ୍ବା ଫିଚର ଅନୁରୋଧ। ଇସ୍ୟୁ ହେଉଛି ଲୋକମାନେ କ\'ଣ କରିବାକୁ ଅଛି ସେ ବିଷୟରେ ଯୋଗାଯୋଗ କରିବାର ଉପାୟ।'
    },
    'merge': {
        term: 'Merge',
        en: 'Combining changes from one branch into another. When a pull request is merged, your changes become part of the main project.',
        hi: 'एक branch के बदलावों को दूसरे में मिलाना। जब pull request merge होता है, तो आपके बदलाव मुख्य प्रोजेक्ट का हिस्सा बन जाते हैं।',
        od: 'ଗୋଟିଏ branch ର ପରିବର୍ତ୍ତନଗୁଡ଼ିକୁ ଅନ୍ୟ ଏକ branch ସହ ମିଶାଇବା। ଯେତେବେଳେ pull request ମର୍ଜ ହୁଏ, ଆପଣଙ୍କ ପରିବର୍ତ୍ତନ ମୂଳ ପ୍ରୋଜେକ୍ଟର ଅଂଶ ହୋଇଯାଏ।'
    },
    'ci': {
        term: 'CI (Continuous Integration)',
        en: 'Automated checks that run every time someone submits a change. CI makes sure the code still works after your changes.',
        hi: 'ऑटोमेटेड चेक जो हर बार चलते हैं जब कोई बदलाव सबमिट करता है। CI सुनिश्चित करता है कि आपके बदलावों के बाद भी कोड काम करे।',
        od: 'ସ୍ୱୟଂଚାଳିତ ଯାଞ୍ଚ ଯାହା ପ୍ରତ୍ୟେକ ଥର ଯେତେବେଳେ କେହି ପରିବର୍ତ୍ତନ ଦାଖଲ କରନ୍ତି ସେତେବେଳେ ଚାଲେ। CI ନିଶ୍ଚିତ କରେ ଯେ ଆପଣଙ୍କ ପରିବର୍ତ୍ତନ ପରେ କୋଡ ଏପର୍ଯ୍ୟନ୍ତ କାମ କରୁଛି।'
    },
    'maintainer': {
        term: 'Maintainer',
        en: 'The person or team who manages an open-source project — they review contributions, fix bugs, and decide what gets merged.',
        hi: 'वह व्यक्ति या टीम जो ओपन-सोर्स प्रोजेक्ट को मैनेज करता है — वे contributions रिव्यू करते हैं, बग्स ठीक करते हैं, और तय करते हैं कि क्या merge होगा।',
        od: 'ସେହି ବ୍ୟକ୍ତି କିମ୍ବା ଦଳ ଯିଏ ଏକ ଓପନ-ସୋର୍ସ ପ୍ରୋଜେକ୍ଟ ପରିଚାଳନା କରନ୍ତି — ସେମାନେ contributions ସମୀକ୍ଷା କରନ୍ତି ଏବଂ କ\'ଣ merge ହେବ ତାହା ସ୍ଥିର କରନ୍ତି।'
    },
    'readme': {
        term: 'README',
        en: 'A text file (usually README.md) at the top of a repository that explains what the project is, how to set it up, and how to contribute.',
        hi: 'एक टेक्स्ट फ़ाइल (आमतौर पर README.md) जो repository के टॉप पर होती है और बताती है कि प्रोजेक्ट क्या है, कैसे सेट अप करें, और कैसे contribute करें।',
        od: 'ଏକ ଟେକ୍ସଟ ଫାଇଲ (ସାଧାରଣତଃ README.md) ଯାହା repository ର ଶୀର୍ଷରେ ଥାଏ ଏବଂ ବର୍ଣ୍ଣନା କରେ ପ୍ରୋଜେକ୍ଟ କ\'ଣ, କିପରି ସେଟ ଅପ କରିବେ, ଏବଂ କିପରି contribute କରିବେ।'
    },
    'contributing-guide': {
        term: 'Contributing Guide',
        en: 'A document (CONTRIBUTING.md) that explains the rules for contributing to a project — how to format your code, how to submit changes, and what\'s expected.',
        hi: 'एक डॉक्यूमेंट (CONTRIBUTING.md) जो बताता है कि किसी प्रोजेक्ट में contribute करने के नियम क्या हैं — कोड कैसे फ़ॉर्मेट करें, बदलाव कैसे सबमिट करें।',
        od: 'ଏକ ଡକ୍ୟୁମେଣ୍ଟ (CONTRIBUTING.md) ଯାହା ଏକ ପ୍ରୋଜେକ୍ଟରେ contribute କରିବାର ନିୟମ ବର୍ଣ୍ଣନା କରେ — କୋଡ କିପରି ଫର୍ମାଟ କରିବେ, ପରିବର୍ତ୍ତନ କିପରି ଦାଖଲ କରିବେ।'
    },
    'good-first-issue': {
        term: 'Good First Issue',
        en: 'A label maintainers add to issues that are suitable for newcomers. These are typically small, well-defined tasks with clear instructions.',
        hi: 'एक लेबल जो maintainers उन issues पर लगाते हैं जो नए लोगों के लिए सही हैं। ये आमतौर पर छोटे, अच्छे से डिफ़ाइंड टास्क होते हैं।',
        od: 'ଏକ ଲେବଲ ଯାହା maintainers ନୂଆ ଲୋକମାନଙ୍କ ପାଇଁ ଉପଯୁକ୍ତ ଇସ୍ୟୁ ଉପରେ ଯୋଡ଼ନ୍ତି। ଏଗୁଡ଼ିକ ସାଧାରଣତଃ ଛୋଟ, ସ୍ପଷ୍ଟ ନିର୍ଦ୍ଦେଶ ସହ ଥିବା ଟାସ୍କ।'
    },
    'open-source': {
        term: 'Open Source',
        en: 'Software whose code is publicly available for anyone to read, use, and contribute to. Most open-source projects are free.',
        hi: 'सॉफ़्टवेयर जिसका कोड सबके लिए उपलब्ध है — कोई भी पढ़ सकता है, इस्तेमाल कर सकता है, और contribute कर सकता है।',
        od: 'ସଫ୍ଟୱେର ଯାହାର କୋଡ ସାର୍ବଜନୀନ ଭାବେ ଯେକୌଣସି ବ୍ୟକ୍ତିଙ୍କ ପଢ଼ିବା, ବ୍ୟବହାର କରିବା ଏବଂ contribute କରିବା ପାଇଁ ଉପଲବ୍ଧ।'
    },

    // --- JAVA QUEST TERMS ---
    'jvm': {
        term: 'JVM (Java Virtual Machine)',
        en: 'The execution engine that runs compiled Java bytecode on any operating system, enabling "write once, run anywhere".',
        hi: 'वह इंजन जो किसी भी कंप्यूटर या ऑपरेटिंग सिस्टम पर जावा बाइटकोड को चलाता है ("एक बार लिखें, कहीं भी चलाएं")।',
        od: 'ଏକ ଇଞ୍ଜିନ ଯାହା ଯେକୌଣସି ଅପରେଟିଂ ସିଷ୍ଟମରେ କମ୍ପାଇଲ୍ ହୋଇଥିବା ଜାଭା ବାଇଟକୋଡ୍ ଚଲାଏ।'
    },
    'bytecode': {
        term: 'Bytecode',
        en: 'The intermediate, platform-independent code generated by the Java compiler (.class files) to be executed by the JVM.',
        hi: 'जावा कंपाइलर द्वारा तैयार किया गया मध्यवर्ती कोड (.class) जो किसी भी ऑपरेटिंग सिस्टम की JVM पर चल सकता है।',
        od: 'ଜାଭା କମ୍ପାଇଲର ଦ୍ୱାରା ପ୍ରସ୍ତୁତ ମଧ୍ୟବର୍ତ୍ତୀ କୋଡ୍ (.class) ଯାହା JVM ଦ୍ୱାରା ନିଷ୍ପାଦିତ ହୁଏ।'
    },
    'compiler': {
        term: 'Compiler (javac)',
        en: 'A tool that inspects your human-readable Java code, validates syntax and types, and translates it into machine-executable bytecode.',
        hi: 'एक टूल (javac) जो आपके जावा कोड की जांच करता है, सिंटैक्स चेक करता है, और उसे बाइटकोड में बदलता है।',
        od: 'ଏକ ଟୁଲ୍ (javac) ଯାହା ଆପଣଙ୍କ ଜାଭା କୋଡ୍ ଯାଞ୍ଚ କରେ ଏବଂ ଏହାକୁ ବାଇଟକୋଡରେ ପରିଣତ କରେ।'
    },
    'data-type': {
        term: 'Data Type',
        en: 'A classification in Java (like int, double, boolean, String) that dictates what type of data a variable holds and how memory is allocated.',
        hi: 'जावा में डेटा का प्रकार (जैसे int, boolean, String) जो बताता है कि वेरिएबल में कौन सी वैल्यू रखी जाएगी।',
        od: 'ଜାଭାରେ ଏକ ବର୍ଗୀକରଣ (ଯେପରିକି int, boolean, String) ଯାହା ସ୍ଥିର କରେ କେଉଁ ପ୍ରକାର ଡାଟା ରହିବ।'
    },
    'conditional': {
        term: 'Conditional (if/else)',
        en: 'A decision-making statement that executes different blocks of code depending on whether a boolean condition is true or false.',
        hi: 'निर्णय लेने वाला कोड ब्लॉक (if/else) जो शर्त सही (true) या गलत (false) होने पर अलग कोड चलाता है।',
        od: 'ନିଷ୍ପତ୍ତି ନେବା ପାଇଁ ବ୍ୟବହୃତ କୋଡ୍ (if/else) ଯାହା ସର୍ତ୍ତ ଅନୁଯାୟୀ ବିଭିନ୍ନ କୋଡ୍ ଚଲାଏ।'
    },
    'loop': {
        term: 'Loop (for / while)',
        en: 'A control structure that repeatedly executes a block of code until a specified termination condition is met.',
        hi: 'एक नियंत्रण संरचना जो किसी कोड को बार-बार तब तक दोहराती है जब तक कि दी गई शर्त पूरी न हो जाए।',
        od: 'ଏକ କୋଡ୍ ଗଠନ ଯାହା ନିର୍ଦ୍ଦିଷ୍ଟ ସର୍ତ୍ତ ପୂରଣ ନହେବା ପର୍ଯ୍ୟନ୍ତ ବାରମ୍ବାର ଚାଲିଥାଏ।'
    },
    'java-class': {
        term: 'Class',
        en: 'A blueprint or template that defines the state (fields) and behavior (methods) of a conceptual object.',
        hi: 'एक ब्लूप्रिंट या सांचा जो किसी ऑब्जेक्ट के गुणों (fields) और उसके कार्यों (methods) को परिभाषित करता है।',
        od: 'ଏକ ବ୍ଲୁପ୍ରିଣ୍ଟ ବା ଢାଞ୍ଚା ଯାହା ଅବଜେକ୍ଟର ଗୁଣ ଏବଂ କାର୍ଯ୍ୟକୁ ବର୍ଣ୍ଣନା କରେ।'
    },
    'object': {
        term: 'Object',
        en: 'A concrete instance of a class created in memory with the "new" keyword, holding its own unique data values.',
        hi: 'क्लास के ब्लूप्रिंट से मेमोरी में बना एक वास्तविक रूप (instance) जो अपना अलग डेटा रखता है।',
        od: 'କ୍ଲାସରୁ "new" ଶବ୍ଦ ବ୍ୟବହାର କରି ମେମୋରୀରେ ତିଆରି ହୋଇଥିବା ଏକ ବାସ୍ତବ ରୂପ।'
    },
    'method': {
        term: 'Method',
        en: 'A reusable function declared inside a class that performs actions or calculations using the object\'s state.',
        hi: 'क्लास के अंदर लिखा गया एक फ़ंक्शन जो ऑब्जेक्ट के डेटा का उपयोग करके कोई कार्य या गणना करता है।',
        od: 'କ୍ଲାସ ଭିତରେ ଥିବା ଏକ ଫଙ୍କସନ ଯାହା ଅବଜେକ୍ଟର ଡାଟା ବ୍ୟବହାର କରି କାର୍ଯ୍ୟ କରେ।'
    },
    'constructor': {
        term: 'Constructor',
        en: 'A special method called automatically when creating an object (new ClassName()) to initialize its starting fields.',
        hi: 'ऑब्जेक्ट बनाते समय अपने-आप चलने वाला एक विशेष मेथड जो ऑब्जेक्ट के शुरुआती डेटा को सेट करता है।',
        od: 'ଅବଜେକ୍ଟ ତିଆରି ସମୟରେ ଆପେ ଆପେ ଚାଲୁଥିବା ଏକ ସ୍ୱତନ୍ତ୍ର ମେଥଡ୍ ଯାହା ପ୍ରାରମ୍ଭିକ ମାନ ସେଟ୍ କରେ।'
    },
    'inheritance': {
        term: 'Inheritance (extends)',
        en: 'An OOP mechanism where a child class automatically inherits methods and properties from a parent class, promoting code reuse.',
        hi: 'OOP की एक विधि जिसमें एक चाइल्ड क्लास अपने पैरेंट क्लास के गुणों और मेथड्स को विरासत में प्राप्त करती है।',
        od: 'ଏକ OOP ବ୍ୟବସ୍ଥା ଯେଉଁଥିରେ ଚାଇଲ୍ଡ କ୍ଲାସ୍ ପ୍ୟାରେଣ୍ଟ୍ କ୍ଲାସର ସମସ୍ତ ଗୁଣ ଉତ୍ତରାଧିକାର ସୂତ୍ରରେ ପାଏ।'
    },
    'polymorphism': {
        term: 'Polymorphism',
        en: 'The ability of different classes to respond to the same method call in their own specialized way (many forms).',
        hi: 'अलग-अलग क्लास का एक ही मेथड को अपने-अपने विशेष तरीके से लागू करने की क्षमता ("बहुरूपता")।',
        od: 'ଗୋଟିଏ ମେଥଡକୁ ବିଭିନ୍ନ କ୍ଲାସ୍ ନିଜର ସ୍ୱତନ୍ତ୍ର ଉପାୟରେ ପ୍ରକାଶ କରିବାର କ୍ଷମତା।'
    },
    'interface': {
        term: 'Interface (implements)',
        en: 'A contract defining a set of abstract method signatures that any implementing class must provide concrete code for.',
        hi: 'एक अनुबंध (contract) जो बताता है कि कौन से मेथड्स होने चाहिए, जिन्हें लागू करने वाली क्लास को कोड लिखना पड़ता है।',
        od: 'ଏକ ଚୁକ୍ତି ଯାହା କହେ କେଉଁ ମେଥଡ୍ ରହିବ, ଏବଂ ତାହାକୁ ବ୍ୟବହାର କରୁଥିବା କ୍ଲାସ୍ ସେହି କୋଡ୍ ଲେଖିବା ବାଧ୍ୟତାମୂଳକ।'
    },
    'try-catch': {
        term: 'Try-Catch Block',
        en: 'A programming construct that encloses risky code in "try" and catches anticipated errors in "catch" to prevent crashes.',
        hi: 'जोखिम भरे कोड को सुरक्षित रूप से चलाने का तरीका: "try" में कोड चलाएं और गलती होने पर "catch" में संभालें।',
        od: 'ସୁରକ୍ଷିତ ଭାବେ କୋଡ୍ ଚଳାଇବାର ଉପାୟ: "try" ରେ କୋଡ୍ ଏବଂ ତ୍ରୁଟି ହେଲେ "catch" ରେ ପରିଚାଳନା କରନ୍ତୁ।'
    },
    'exception': {
        term: 'Exception',
        en: 'An abnormal condition or error event that disrupts the normal flow of program execution at runtime.',
        hi: 'रनटाइम के दौरान होने वाली कोई अप्रत्याशित गड़बड़ी या एरर जो प्रोग्राम के सामान्य प्रवाह को रोक देती है।',
        od: 'ପ୍ରୋଗ୍ରାମ ଚାଲୁଥିବା ସମୟରେ ଘଟୁଥିବା ଏକ ଅପ୍ରତ୍ୟାଶିତ ତ୍ରୁଟି ବା ଏରର୍।'
    },
    'package': {
        term: 'Package (import)',
        en: 'A directory namespace in Java that groups related classes and prevents naming collisions across libraries.',
        hi: 'संबंधित क्लासेज को व्यवस्थित करने वाला एक फ़ोल्डर/नेमस्पेस जो नामों के टकराव को रोकता है।',
        od: 'ଜାଭାରେ ସମ୍ପର୍କିତ କ୍ଲାସଗୁଡ଼ିକୁ ଏକତ୍ର ରଖୁଥିବା ଫୋଲ୍ଡର ବା ନେମସ୍ପେସ୍।'
    },
    'jar': {
        term: 'JAR (Java ARchive)',
        en: 'A compressed file packaging multiple compiled Java class files and resources into a single distributable bundle.',
        hi: 'एक कंप्रेस्ड फ़ाइल (.jar) जिसमें कई जावा क्लास और रिसोर्स एक साथ बंडल किए जाते हैं।',
        od: 'ଏକ କମ୍ପ୍ରେସ୍ ହୋଇଥିବା ଫାଇଲ୍ (.jar) ଯେଉଁଥିରେ ଅନେକ ଜାଭା କ୍ଲାସ୍ ଏବଂ ଫାଇଲ୍ ଏକତ୍ର ଥାଏ।'
    },

    // --- DSA QUEST TERMS ---
    'array': {
        term: 'Array',
        en: 'A sequential collection of items stored at adjacent, contiguous memory addresses, accessed by a zero-based index.',
        hi: 'मेमोरी में लगातार स्थित स्थानों पर स्टोर की गई डेटा की एक कतार, जिसे इंडेक्स (0, 1, 2...) द्वारा एक्सेस किया जाता है।',
        od: 'ମେମୋରୀରେ ପାଖାପାଖି ସ୍ଥାନରେ ରହିଥିବା ଡାଟାର ଏକ ତାଲିକା, ଯାହାକୁ ଇଣ୍ଡେକ୍ସ ଦ୍ୱାରା ଖୋଜାଯାଏ।'
    },
    'index': {
        term: 'Index',
        en: 'The numeric position of an element inside an array or list, typically starting at 0 for the first element.',
        hi: 'ऐरे या सूची में किसी आइटम की संख्यात्मक स्थिति, जो आमतौर पर 0 से शुरू होती है।',
        od: 'ଆରେ ଭିତରେ ଥିବା ଏକ ଉପାଦାନର ସାଂଖ୍ୟିକ ସ୍ଥାନ, ଯାହା ସାଧାରଣତଃ ୦ ରୁ ଆରମ୍ଭ ହୁଏ।'
    },
    'time-complexity': {
        term: 'Time Complexity',
        en: 'A computational measurement of how the execution time of an algorithm grows as the size of the input data increases.',
        hi: 'यह मापना कि इनपुट डेटा का आकार बढ़ने पर किसी एल्गोरिदम को चलने में कितना अधिक समय लगेगा।',
        od: 'ଡାଟାର ଆକାର ବଢ଼ିବା ସହିତ ଏକ ଆଲଗୋରିଦିମ୍ ଶେଷ ହେବାକୁ କେତେ ସମୟ ଲାଗିବ ତାହାର ମାପ।'
    },
    'big-o': {
        term: 'Big-O Notation',
        en: 'A mathematical notation (e.g. O(1), O(n), O(n log n)) describing the upper-bound rate of algorithm resource growth.',
        hi: 'एक गणितीय संकेत (जैसे O(1), O(n)) जो किसी एल्गोरिदम के सबसे खराब समय प्रदर्शन को दर्शाता है।',
        od: 'ଏକ ଗାଣିତିକ ସଂକେତ (ଯଥା O(1), O(n)) ଯାହା ଆଲଗୋରିଦିମର କାର୍ଯ୍ୟଦକ୍ଷତା ବର୍ଣ୍ଣନା କରେ।'
    },
    'linked-list': {
        term: 'Linked List',
        en: 'A linear data structure where elements are not stored contiguously, but each node contains a value and a pointer to the next node.',
        hi: 'एक डेटा संरचना जिसमें आइटम अलग-अलग मेमोरी में होते हैं, लेकिन हर आइटम अगले आइटम का पता (pointer) रखता है।',
        od: 'ଏକ ଡାଟା ଗଠନ ଯେଉଁଥିରେ ପ୍ରତ୍ୟେକ ନୋଡ୍ ନିଜର ଡାଟା ଏବଂ ପରବର୍ତ୍ତୀ ନୋଡର ଠିକଣା ରଖିଥାଏ।'
    },
    'node': {
        term: 'Node',
        en: 'A fundamental building block in linked structures (lists, trees, graphs) that holds a piece of data and references to other nodes.',
        hi: 'लिंक्ड लिस्ट या ट्री का मूल घटक (डब्बा) जिसमें डेटा और अन्य नोड्स से जुड़ने का लिंक होता है।',
        od: 'ଲିଙ୍କଡ୍ ଲିଷ୍ଟ୍ କିମ୍ବା ଟ୍ରିର ମୁଖ୍ୟ ଉପାଦାନ ଯେଉଁଥିରେ ଡାଟା ଏବଂ ଅନ୍ୟ ନୋଡର ଲିଙ୍କ୍ ଥାଏ।'
    },
    'pointer': {
        term: 'Pointer / Reference',
        en: 'A memory reference stored in a variable that directly points to where another object or node is located in RAM.',
        hi: 'एक संदर्भ या पता जो सीधे यह बताता है कि कोई दूसरा ऑब्जेक्ट या नोड मेमोरी में कहाँ मौजूद है।',
        od: 'ଏକ ମେମୋରୀ ଠିକଣା ଯାହା ଦର୍ଶାଏ ଅନ୍ୟ ଏକ ଅବଜେକ୍ଟ କିମ୍ବା ନୋଡ୍ କେଉଁଠି ଅଛି।'
    },
    'stack': {
        term: 'Stack (LIFO)',
        en: 'A linear collection following Last-In, First-Out: the last item pushed on top is the first item popped off.',
        hi: 'प्लेट्स के ढेर जैसी संरचना (LIFO): जो सबसे अंत में ऊपर रखा गया है, वही सबसे पहले बाहर निकलेगा।',
        od: 'ଏକ ଡାଟା ସଂଗ୍ରହ (LIFO): ଯାହା ଶେଷରେ ରଖାଯାଇଛି, ତାହା ପ୍ରଥମେ ବାହାରିବ।'
    },
    'queue': {
        term: 'Queue (FIFO)',
        en: 'A linear collection following First-In, First-Out: the first item to enter the line is the first one served and removed.',
        hi: 'टिकट की कतार जैसी संरचना (FIFO): जो पहले लाइन में लगा, उसका काम पहले होगा और वह पहले निकलेगा।',
        od: 'ଏକ ଧାଡ଼ି ପରି ଡାଟା ସଂଗ୍ରହ (FIFO): ଯିଏ ପ୍ରଥମେ ଆସିଛି, ସିଏ ପ୍ରଥମେ ବାହାରିବ।'
    },
    'binary-tree': {
        term: 'Binary Tree',
        en: 'A hierarchical tree structure where each parent node has at most two children, commonly called the left child and right child.',
        hi: 'एक पदानुक्रमित संरचना जिसमें हर पैरेंट नोड के अधिकतम दो बच्चे होते हैं — बायाँ (left) और दायाँ (right)।',
        od: 'ଏକ ପଦାନୁକ୍ରମିକ ଗଛ ପରି ଗଠନ ଯେଉଁଥିରେ ପ୍ରତ୍ୟେକ ନୋଡର ସର୍ବାଧିକ ଦୁଇଟି ଶାଖା (ବାମ ଓ ଡାହାଣ) ଥାଏ।'
    },
    'bst': {
        term: 'Binary Search Tree (BST)',
        en: 'A binary tree where every node\'s left subtree contains smaller values and right subtree contains larger values, enabling fast O(log n) search.',
        hi: 'एक क्रमबद्ध बाइनरी ट्री: बाएँ में छोटे मान और दाएँ में बड़े मान, जिससे किसी भी मान को O(log n) में खोजना आसान होता है।',
        od: 'ଏକ ସଜ୍ଜିତ ବାଇନାରୀ ଟ୍ରି: ବାମରେ ଛୋଟ ଏବଂ ଡାହାଣରେ ବଡ଼ ମାନ ରହିଥାଏ, ଯାହା ଦ୍ରୁତ ଅନୁସନ୍ଧାନକୁ ସହଜ କରେ।'
    },
    'tree-traversal': {
        term: 'Tree Traversal',
        en: 'Algorithms (like In-Order, Pre-Order, Post-Order) that systematically visit and inspect every node in a tree exactly once.',
        hi: 'ट्री के हर नोड पर एक निश्चित क्रम (जैसे In-Order, Pre-Order) में जाकर देखने की प्रक्रिया।',
        od: 'ଟ୍ରିର ପ୍ରତ୍ୟେକ ନୋଡକୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ରମରେ ଭ୍ରମଣ କରିବାର ପଦ୍ଧତି।'
    },
    'graph': {
        term: 'Graph',
        en: 'A non-linear network data structure composed of a set of vertices (points) connected by edges (lines/paths).',
        hi: 'एक नेटवर्क संरचना जिसमें कई बिंदु (vertices) आपस में रास्तों या रेखाओं (edges) से जुड़े होते हैं।',
        od: 'ଏକ ନେଟୱର୍କ ଗଠନ ଯେଉଁଥିରେ ଅନେକ ବିନ୍ଦୁ (vertices) ରେଖା (edges) ଦ୍ୱାରା ପରସ୍ପର ସହ ଯୋଡ଼ି ହୋଇଥାନ୍ତି।'
    },
    'vertex': {
        term: 'Vertex / Node',
        en: 'An individual point or entity in a graph representing a location, person, or data element.',
        hi: 'ग्राफ़ का एक बिंदु या स्थान (जैसे कोई शहर या व्यक्ति)।',
        od: 'ଗ୍ରାଫର ଏକ ବ୍ୟକ୍ତିଗତ ବିନ୍ଦୁ ବା ସ୍ଥାନ (ଯେପରିକି ଏକ ଗାଁ କିମ୍ବା ଡାଟା)।'
    },
    'edge': {
        term: 'Edge / Path',
        en: 'The connection or link between two vertices in a graph, which may be directed (one-way) or undirected (two-way).',
        hi: 'ग्राफ़ में दो बिंदुओं को जोड़ने वाला रास्ता या रेखा (एकतरफ़ा या दोतरफ़ा)।',
        od: 'ଗ୍ରାଫରେ ଦୁଇଟି ବିନ୍ଦୁ ମଧ୍ୟରେ ଥିବା ସଂଯୋଗ ବା ରାସ୍ତା।'
    },
    'bfs-dfs': {
        term: 'BFS & DFS',
        en: 'Graph search strategies: Breadth-First Search (BFS) explores level-by-level using a queue; Depth-First Search (DFS) dives deep using a stack.',
        hi: 'ग्राफ़ खोजने के तरीके: चौड़ाई से खोजना (BFS - कतार से) और गहराई से खोजना (DFS - स्टैक से)।',
        od: 'ଗ୍ରାଫ୍ ଅନୁସନ୍ଧାନ କୌଶଳ: BFS (ଧାଡ଼ି ବ୍ୟବହାର କରି ପାଖରୁ ଆରମ୍ଭ) ଏବଂ DFS (ଗଭୀରକୁ ଯାଇ ଅନୁସନ୍ଧାନ)।'
    },
    'sorting': {
        term: 'Sorting Algorithm',
        en: 'A systematic procedure (such as Merge Sort or Quick Sort) to arrange a collection of elements in ascending or descending order.',
        hi: 'डेटा को छोटे से बड़े (आरोही) या बड़े से छोटे (अवरोही) क्रम में व्यवस्थित करने की तकनीक।',
        od: 'ଡାଟାକୁ ଛୋଟରୁ ବଡ଼ କିମ୍ବା ବଡ଼ରୁ ଛୋଟ କ୍ରମରେ ସଜାଇବାର ପଦ୍ଧତି।'
    },
    'binary-search': {
        term: 'Binary Search',
        en: 'An efficient algorithm that finds an item in a sorted array in O(log n) time by repeatedly dividing the search interval in half.',
        hi: 'सॉर्ट किए गए डेटा में किसी चीज़ को बहुत तेज़ी से (O(log n)) खोजने का तरीका — हर बार सूची को आधा करके।',
        od: 'ସଜ୍ଜିତ ତାଲିକାରେ ଅର୍ଦ୍ଧେକ ଅଂଶକୁ ବାରମ୍ବାର ବିଭକ୍ତ କରି O(log n) ସମୟରେ ଖୋଜିବାର ଦ୍ରୁତ ପଦ୍ଧତି।'
    }
};

/**
 * Get a jargon definition in the selected language.
 * @param {string} termKey — the key in the JARGON dict
 * @param {string} lang — 'en', 'hi', or 'od'
 * @returns {{ term: string, definition: string }}
 */
export function getJargonDefinition(termKey, lang = 'en') {
    const entry = JARGON[termKey];
    if (!entry) return { term: termKey, definition: '' };
    return {
        term: entry.term,
        definition: entry[lang] || entry.en
    };
}
