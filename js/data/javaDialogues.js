/**
 * OSS Quest — Java Quest Dialogue Scripts ("The Code Foundry")
 * Complete localized dialogue scripts for English (en), Hindi (hi), and Odia (od).
 */

export const JAVA_DIALOGUES = {
    thorne: {
        chapterId: 1,
        xpReward: 50,
        nodes: [
            {
                text: "Welcome to The Syntax Mill! I am Master Thorne. Here, raw thoughts are milled into rigid, strongly-typed steel.",
                text_hi: "द सिंटैक्स मिल में आपका स्वागत है! मैं मास्टर थोर्न हूँ। यहाँ विचारों को मजबूत और स्ट्रॉन्गली-टाइप्ड कोड में ढाला जाता है।",
                text_od: "ଦ ସିଣ୍ଟାକ୍ସ ମିଲକୁ ସ୍ୱାଗତ! ମୁଁ ମାଷ୍ଟର ଥୋର୍ଣ୍ଣ। ଏଠାରେ ଚିନ୍ତାଧାରାକୁ ଶକ୍ତ ଜାଭା କୋଡରେ ପରିଣତ କରାଯାଏ।",
                choices: [
                    { label: "What is strongly-typed steel?", label_hi: "स्ट्रॉन्गली-टाइप्ड से आपका क्या मतलब है?", label_od: "ଷ୍ଟ୍ରଙ୍ଗଲି-ଟାଇପ୍ଡ୍ ମାନେ କ'ଣ?", next: 1 },
                    { label: "How does Java work?", label_hi: "जावा कैसे काम करता है?", label_od: "ଜାଭା କିପରି କାମ କରେ?", next: 1 },
                    { label: "Teach me the syntax.", label_hi: "मुझे सिंटैक्स सिखाइए।", label_od: "ମୋତେ ସିଣ୍ଟାକ୍ସ ଶିଖାନ୍ତୁ।", next: 1 }
                ]
            },
            {
                text: "In Java, every variable must declare its exact ~data-type~. A number box can only hold numbers; a text box only holds letters. No shortcuts!",
                text_hi: "जावा में हर वेरिएबल को अपना सही ~data-type~ बताना होता है। संख्या वाले डिब्बे में केवल संख्या और शब्दों वाले में केवल शब्द रह सकते हैं। कोई शॉर्टकट नहीं!",
                text_od: "ଜାଭାରେ ପ୍ରତ୍ୟେକ ଭେରିଏବଲ୍ ନିଜର ~data-type~ ଘୋଷଣା କରିବା ବାଧ୍ୟତାମୂଳକ। ସଂଖ୍ୟା ବକ୍ସରେ କେବଳ ସଂଖ୍ୟା ହିଁ ରହିପାରିବ।",
                jargon: 'data-type'
            },
            {
                text: "Before any gear turns, our grand ~compiler~ (javac) inspects every line of your source code. If a single semicolon is missing, it catches it immediately.",
                text_hi: "इससे पहले कि मिल का कोई भी पहिया घूमे, हमारा ~compiler~ (javac) आपके कोड की हर लाइन की जांच करता है। अगर कोई सेमीकोलन भी छूटा हो, तो यह तुरंत रोक देता है।",
                text_od: "ଚକ ଘୁରିବା ପୂର୍ବରୁ ଆମର ~compiler~ (javac) ପ୍ରତ୍ୟେକ ଲାଇନ୍ ଯାଞ୍ଚ କରେ। ଯଦି କିଛି ଭୁଲ ଥାଏ, ଏହା ତୁରନ୍ତ ଧରିନିଏ।",
                jargon: 'compiler'
            },
            {
                text: "Once approved, the compiler generates portable ~bytecode~ (.class files). This bytecode is not bound to any single machine.",
                text_hi: "सफल होने पर कंपाइलर पोर्टेबल ~bytecode~ (.class) बनाता है। यह बाइटकोड किसी एक मशीन का बंधक नहीं होता।",
                text_od: "ପାସ୍ ହେବା ପରେ କମ୍ପାଇଲର ~bytecode~ (.class) ପ୍ରସ୍ତୁତ କରେ। ଏହି ବାଇଟକୋଡ୍ ଯେକୌଣସି ମେସିନରେ ଚାଲିପାରିବ।",
                jargon: 'bytecode'
            },
            {
                text: "The bytecode is executed by the ~jvm~ (Java Virtual Machine). That is why Java code runs everywhere — from giant cloud servers to tiny smartcards. Remember: Write Once, Run Anywhere!",
                text_hi: "इस बाइटकोड को ~jvm~ (Java Virtual Machine) चलाता है। इसीलिए जावा का कोड हर जगह चलता है — विशाल सर्वर से लेकर छोटे स्मार्टकार्ड तक!",
                text_od: "ଏହି ବାଇଟକୋଡକୁ ~jvm~ ଚଲାଏ। ସେଥିପାଇଁ ଜାଭା ସବୁଠାରେ ଚାଲେ — ବିଶାଳ ସର୍ଭରରୁ ଆରମ୍ଭ କରି ସ୍ମାର୍ଟଫୋନ୍ ପର୍ଯ୍ୟନ୍ତ!",
                jargon: 'jvm'
            }
        ]
    },

    vane: {
        chapterId: 2,
        xpReward: 75,
        nodes: [
            {
                text: "Halt! You stand at The Control Tower. I am Commander Vane. Without control flow, programs wander blindly in the dark.",
                text_hi: "रुकिए! आप कंट्रोल टॉवर पर हैं। मैं कमांडर वेन हूँ। नियंत्रण के बिना प्रोग्राम दिशाहीन भटकते हैं।",
                text_od: "ଅଟକନ୍ତୁ! ଆପଣ କଣ୍ଟ୍ରୋଲ ଟାୱାରରେ ଅଛନ୍ତି। ମୁଁ କମାଣ୍ଡର ଭେନ୍। କଣ୍ଟ୍ରୋଲ ଫ୍ଲୋ ବିନା କୋଡ୍ ଦିଗହରା ହୋଇଯାଏ।",
                choices: [
                    { label: "How do we direct the code?", label_hi: "हम कोड को दिशा कैसे देते हैं?", label_od: "ଆମେ କୋଡକୁ କିପରି ନିୟନ୍ତ୍ରଣ କରିବା?", next: 1 },
                    { label: "Show me the towers.", label_hi: "मुझे टॉवर की प्रणाली दिखाइए।", label_od: "ମୋତେ ପ୍ରଣାଳୀ ଦେଖାନ୍ତୁ।", next: 1 }
                ]
            },
            {
                text: "We make choices using ~conditional~ statements: if, else if, and else. If the drawbridge is down, cross. Else, stand fast and wait.",
                text_hi: "हम ~conditional~ स्टेटमेंट्स से निर्णय लेते हैं: if, else if, और else। अगर पुल खुला है, तो आगे बढ़ें। नहीं तो वहीं रुकें।",
                text_od: "ଆମେ ~conditional~ (if, else) ବ୍ୟବହାର କରି ନିଷ୍ପତ୍ତି ନେଉ। ଯଦି ପୋଲ ଖୋଲା ଅଛି ଯାଆନ୍ତୁ, ନଚେତ୍ ଅପେକ୍ଷା କରନ୍ତୁ।",
                jargon: 'conditional'
            },
            {
                text: "When you must guard the wall day and night, you do not write a thousand lines of vigilance. You deploy a ~loop~ to repeat tasks smoothly.",
                text_hi: "जब आपको रात-दिन पहरा देना हो, तो आप बार-बार कोड नहीं लिखते। आप काम को दोहराने के लिए ~loop~ का उपयोग करते हैं।",
                text_od: "ଗୋଟିଏ କାମକୁ ବାରମ୍ବାର କରିବା ପାଇଁ ହଜାରେ ଥର କୋଡ୍ ନଲେଖି ଆମେ ~loop~ ବ୍ୟବହାର କରୁ।",
                jargon: 'loop'
            },
            {
                text: "Use a 'for' loop when you know the exact patrol count, and a 'while' loop when waiting for an enemy signal. But always ensure your loop has an exit condition!",
                text_hi: "जब आपको संख्या पता हो तो 'for' लूप इस्तेमाल करें, और जब किसी संकेत का इंतजार हो तो 'while' लूप। लेकिन लूप में बाहर निकलने की शर्त हमेशा रखें!",
                text_od: "ନିର୍ଦ୍ଦିଷ୍ଟ ସଂଖ୍ୟା ଥିଲେ 'for' ଲୁପ୍ ଏବଂ ସର୍ତ୍ତ ଅପେକ୍ଷାରେ ଥିଲେ 'while' ଲୁପ୍ ବ୍ୟବହାର କରନ୍ତୁ।",
            }
        ]
    },

    clara: {
        chapterId: 3,
        xpReward: 100,
        nodes: [
            {
                text: "Greetings, traveler! I am Artisan Clara of The Object Workshop. Here, we breathe life into cold stone through blueprints.",
                text_hi: "नमस्ते मुसाफ़िर! मैं ऑब्जेक्ट वर्कशॉप की कारीगर क्लारा हूँ। यहाँ हम ब्लूप्रिंट की मदद से नए ऑब्जेक्ट्स को जन्म देते हैं।",
                text_od: "ନମସ୍କାର! ମୁଁ ଅବଜେକ୍ଟ ୱାର୍କସପର କାରିଗର କ୍ଲାରା। ଏଠାରେ ଆମେ ବ୍ଲୁପ୍ରିଣ୍ଟ ମାଧ୍ୟମରେ ନୂତନ ଅବଜେକ୍ଟ ଗଢୁ।",
                choices: [
                    { label: "What is a blueprint in Java?", label_hi: "जावा में ब्लूप्रिंट क्या होता है?", label_od: "ଜାଭାରେ ବ୍ଲୁପ୍ରିଣ୍ଟ କ'ଣ?", next: 1 },
                    { label: "How do you forge an object?", label_hi: "ऑब्जेक्ट कैसे बनाया जाता है?", label_od: "ଅବଜେକ୍ଟ କିପରି ତିଆରି ହୁଏ?", next: 1 }
                ]
            },
            {
                text: "A blueprint is called a ~java-class~. It defines what attributes an entity has (fields) and what actions it can perform (methods).",
                text_hi: "ब्लूप्रिंट को ~java-class~ कहते हैं। यह बताता है कि किसी चीज़ के क्या गुण (fields) होंगे और वह क्या काम (methods) कर सकती है।",
                text_od: "ବ୍ଲୁପ୍ରିଣ୍ଟକୁ ~java-class~ କୁହାଯାଏ। ଏହା ଅବଜେକ୍ଟର ଗୁଣ ଏବଂ କାର୍ଯ୍ୟ ବର୍ଣ୍ଣନା କରେ।",
                jargon: 'java-class'
            },
            {
                text: "When you write 'new Golem()', memory is forged and an actual ~object~ steps onto the foundry floor, with its own independent state.",
                text_hi: "जब आप 'new' कीवर्ड लिखते हैं, तो मेमोरी में एक वास्तविक ~object~ बनता है, जिसका अपना अलग डेटा होता है।",
                text_od: "ଯେତେବେଳେ ଆପଣ 'new' ଲେଖନ୍ତି, ମେମୋରୀରେ ଏକ ବାସ୍ତବ ~object~ ତିଆରି ହୁଏ।",
                jargon: 'object'
            },
            {
                text: "At the moment of creation, the ~constructor~ method initializes the object's power, and its ~method~ functions carry out your will. Object-Oriented magic at its finest!",
                text_hi: "सृजन के समय ~constructor~ शुरुआती मान सेट करता है, और ~method~ आपके आदेशों का पालन करते हैं!",
                text_od: "ଅବଜେକ୍ଟ ତିଆରି ହେବା କ୍ଷଣି ~constructor~ ଏହାର ମୂଲ୍ୟ ସେଟ୍ କରେ ଏବଂ ~method~ କାର୍ଯ୍ୟ ସମ୍ପାଦନ କରେ!",
                jargon: 'constructor'
            }
        ]
    },

    roland: {
        chapterId: 4,
        xpReward: 125,
        nodes: [
            {
                text: "Step forward into The Inheritance Hall! I am Archon Roland. In this guild, no warrior reinvents armor their ancestors perfected.",
                text_hi: "इनहेरिटेंस हॉल में आपका स्वागत है! मैं आर्कन रोलैंड हूँ। इस गिल्ड में कोई भी पूर्वजों द्वारा बनाई गई नींव को दोबारा नहीं बनाता।",
                text_od: "ଇନହେରିଟାନ୍ସ ହଲକୁ ସ୍ୱାଗତ! ମୁଁ ରୋଲାଣ୍ଡ। ଏଠାରେ ଆମେ ପୂର୍ବଜଙ୍କ ଜ୍ଞାନକୁ ଉତ୍ତରାଧିକାର ସୂତ୍ରରେ ଆଗକୁ ନେଉ।",
                choices: [
                    { label: "What is inheritance?", label_hi: "इनहेरिटेंस क्या है?", label_od: "ଇନହେରିଟାନ୍ସ କ'ଣ?", next: 1 },
                    { label: "Tell me about interfaces.", label_hi: "इंटरफ़ेस के बारे में बताइए।", label_od: "ଇଣ୍ଟରଫେସ୍ ବିଷୟରେ କୁହନ୍ତୁ।", next: 1 }
                ]
            },
            {
                text: "Through ~inheritance~ with the 'extends' keyword, a child class inherits all strengths and methods of its parent class, saving countless hours of work.",
                text_hi: "कीवर्ड 'extends' के साथ ~inheritance~ के जरिए, एक चाइल्ड क्लास अपने पैरेंट क्लास के सभी गुण पा लेती है।",
                text_od: "'extends' ବ୍ୟବହାର କରି ~inheritance~ ମାଧ୍ୟମରେ ଚାଇଲ୍ଡ କ୍ଲାସ୍ ପ୍ୟାରେଣ୍ଟର ସମସ୍ତ ଗୁଣ ପାଇଥାଏ।",
                jargon: 'inheritance'
            },
            {
                text: "And through ~polymorphism~, a single command like 'soundTheHorn()' sounds differently whether played by a Knight or an Archer. One method, many forms!",
                text_hi: "और ~polymorphism~ (बहुरूपता) की बदौलत एक ही मेथड हर योद्धा अपने खास तरीके से निभा सकता है। एक मेथड, अनेक रूप!",
                text_od: "ଏବଂ ~polymorphism~ ଦ୍ୱାରା ଗୋଟିଏ କମାଣ୍ଡ ବିଭିନ୍ନ ଯୋଦ୍ଧା ନିଜର ସ୍ୱତନ୍ତ୍ର ଉପାୟରେ ପାଳନ କରନ୍ତି!",
                jargon: 'polymorphism'
            },
            {
                text: "When unrelated houses must swear the same oath, we use an ~interface~. It sets an unbreakable contract of what methods each house must provide.",
                text_hi: "जब अलग-अलग क्लास को एक ही नियम का पालन करना हो, तो हम ~interface~ का अनुबंध बनाते हैं।",
                text_od: "ସମସ୍ତେ ସମାନ ନିୟମ ପାଳନ କରିବା ପାଇଁ ଆମେ ~interface~ ର ଚୁକ୍ତି ବ୍ୟବହାର କରୁ।",
                jargon: 'interface'
            }
        ]
    },

    ignis: {
        chapterId: 5,
        xpReward: 150,
        nodes: [
            {
                text: "Careful! You tread upon the rim of The Exception Pit. I am Keeper Ignis. The fires below are filled with unhandled errors.",
                text_hi: "सावधान! आप एक्सेप्शन पिट के किनारे खड़े हैं। मैं कीपर इग्निस हूँ। नीचे बिना संभाली गई गलतियों की आग धधक रही है।",
                text_od: "ସାବଧାନ! ଆପଣ ଏକ୍ସେପ୍ସନ ପିଟ୍ କୂଳରେ ଛିଡ଼ା ହୋଇଛନ୍ତି। ମୁଁ ଇଗ୍ନିସ୍। ତଳେ ଅସମ୍ଭାଳ ତ୍ରୁଟିର ନିଆଁ ଜଳୁଛି।",
                choices: [
                    { label: "What are exceptions?", label_hi: "एक्सेप्शन क्या होते हैं?", label_od: "ଏକ୍ସେପ୍ସନ କ'ଣ?", next: 1 },
                    { label: "How do we prevent crashes?", label_hi: "हम क्रैश से कैसे बचें?", label_od: "ପ୍ରୋଗ୍ରାମ କ୍ରାସ୍ କିପରି ରୋକିବା?", next: 1 }
                ]
            },
            {
                text: "When illegal calculations strike — dividing by zero or reading missing files — an ~exception~ erupts. If uncontained, it crashes the world.",
                text_hi: "जब कोड में कोई असंभव काम होता है — जैसे शून्य से भाग देना या गायब फ़ाइल पढ़ना — तो एक ~exception~ उत्पन्न होता है जो पूरे सिस्टम को क्रैश कर सकता है।",
                text_od: "ଯେତେବେଳେ କୋଡରେ ଭୁଲ ଗଣନା ହୁଏ, ଏକ ~exception~ ସୃଷ୍ଟି ହୁଏ ଯାହା ସିଷ୍ଟମକୁ ବନ୍ଦ କରିଦେଇପାରେ।",
                jargon: 'exception'
            },
            {
                text: "To protect our machinery, we enclose perilous operations in a ~try-catch~ dome. Dangerous code runs inside 'try'; if it erupts, 'catch' intercepts the blow safely.",
                text_hi: "अपनी मशीनरी को बचाने के लिए हम जोखिम भरे कोड को ~try-catch~ में रखते हैं। खतरा होने पर 'catch' उसे संभाल लेता है।",
                text_od: "ସୁରକ୍ଷା ପାଇଁ ଆମେ କୋଡକୁ ~try-catch~ ରେ ରଖୁ। 'catch' କୌଣସି ବିପଦକୁ ସୁରକ୍ଷିତ ଭାବେ ସମ୍ଭାଳିନିଏ।",
                jargon: 'try-catch'
            },
            {
                text: "And never forget 'finally' — rain or shine, error or success, the finally block always runs to douse the embers and close open gates.",
                text_hi: "और 'finally' ब्लॉक को कभी न भूलें — चाहे एरर आए या न आए, यह हमेशा दरवाज़े बंद करने और सफ़ाई करने के लिए चलता है।",
                text_od: "'finally' ସବୁବେଳେ ଚାଲେ — ତ୍ରୁଟି ହେଉ ବା ନହେଉ, ଏହା ସବୁ ଫାଇଲ୍ ଏବଂ ଗେଟ୍ ସୁରକ୍ଷିତ ଭାବେ ବନ୍ଦ କରେ।",
            }
        ]
    },

    priya: {
        chapterId: 6,
        xpReward: 200,
        nodes: [
            {
                text: "Greetings, Foundry Master! I am Archivist Priya of The Package Library. Here, all knowledge is categorized and bound for the world.",
                text_hi: "प्रणाम, फ़ाउंड्री मास्टर! मैं पैकेज लाइब्रेरी की आर्काइविस्ट प्रिया हूँ। यहाँ पूरे ज्ञान को व्यवस्थित और संकलित किया जाता है।",
                text_od: "ନମସ୍କାର ଫାଉଣ୍ଡ୍ରି ମାଷ୍ଟର! ମୁଁ ପ୍ୟାକେଜ ଲାଇବ୍ରେରୀର ପ୍ରିୟା। ଏଠାରେ ସମସ୍ତ ଜ୍ଞାନକୁ ସଜାଇ ରଖାଯାଏ।",
                choices: [
                    { label: "How do we organize big projects?", label_hi: "हम बड़े प्रोजेक्ट्स को कैसे व्यवस्थित करते हैं?", label_od: "ବଡ଼ ପ୍ରୋଜେକ୍ଟ କିପରି ସଜାଡ଼ିବା?", next: 1 },
                    { label: "What is a JAR?", label_hi: "JAR फ़ाइल क्या होती है?", label_od: "JAR ଫାଇଲ୍ କ'ଣ?", next: 1 }
                ]
            },
            {
                text: "When your project grows to hundreds of classes, you group related classes into a ~package~ using folder namespaces. This prevents conflicting names across libraries.",
                text_hi: "जब सैकड़ों क्लास हों, तो हम उन्हें ~package~ बनाकर फ़ोल्डर नेमस्पेस में रखते हैं ताकि नामों का टकराव न हो।",
                text_od: "ଅନେକ କ୍ଲାସ୍ ଥିବା ବେଳେ ଆମେ ସେଗୁଡ଼ିକୁ ~package~ ରେ ସଜାଡ଼ି ରଖୁ ଯାହା ଦ୍ୱାରା ନାମରେ ବିବାଦ ହୁଏ ନାହିଁ।",
                jargon: 'package'
            },
            {
                text: "To ship your completed application to kingdoms far away, we compress all compiled bytecode and assets into a single ~jar~ archive file.",
                text_hi: "अपने पूरे एप्लिकेशन को दुनिया में भेजने के लिए, हम सारे बाइटकोड और फ़ाइलों को एक कॉम्पैक्ट ~jar~ आर्काइव में पैक करते हैं।",
                text_od: "ଆପଣଙ୍କ ପ୍ରୋଜେକ୍ଟକୁ ଅନ୍ୟମାନଙ୍କୁ ପଠାଇବା ପାଇଁ ଆମେ ସବୁ ବାଇଟକୋଡକୁ ଏକ ~jar~ ଫାଇଲରେ ପ୍ୟାକ୍ କରୁ।",
                jargon: 'jar'
            },
            {
                text: "You have mastered the six sacred arts of Java! Go forth and build grand software that stands strong across all architectures!",
                text_hi: "आपने जावा की सभी छह कलाओं में महारत हासिल कर ली है! आगे बढ़ें और ऐसे सॉफ़्टवेयर बनाएं जो कभी न झुकें!",
                text_od: "ଆପଣ ଜାଭାର ସମସ୍ତ ୬ଟି ମୂଳତତ୍ତ୍ୱ ଶିଖିସାରିଛନ୍ତି! ଆଗକୁ ବଢ଼ନ୍ତୁ ଏବଂ ଶକ୍ତିଶାଳୀ ସଫ୍ଟୱେର ନିର୍ମାଣ କରନ୍ତୁ!",
            }
        ]
    }
};

