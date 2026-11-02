/**
 * OSS Quest — Onboarding Page (3 Steps Multi-Path)
 * Step 1: Language selection (EN, HI, OD)
 * Step 2: Skill level / experience
 * Step 3: Choose Your Quest (Open Source, Java, DSA)
 */

import { requireAuth } from '../services/auth.js';
import { setOnboarding, setSelectedPath } from '../services/progress.js';
import { AudioSys } from '../engine/AudioManager.js';
import { QUEST_PATHS } from '../data/quests.js';

export function renderOnboarding(container) {
    const topBar = document.getElementById('top-bar');
    if (topBar) topBar.classList.add('hidden');
    container.classList.add('no-topbar');

    let selectedLang = 'en';
    let selectedSkill = 'learning';
    let selectedPath = 'opensource';

    renderStep1();

    function renderStep1() {
        container.innerHTML = `
            <section class="onboarding" id="onboarding-page">
                <div class="card card--rounded onboarding-card anim-fade-in">
                    <div class="onboarding-step">Step 1 of 3</div>
                    <h2>Choose your language</h2>
                    <p class="onboarding-desc">
                        Developer terms will be explained in the language you pick.
                        You can change this anytime later.
                    </p>
                    <div class="option-grid option-grid--3" id="lang-options">
                        <button class="option-btn ${selectedLang === 'en' ? 'selected' : ''}" data-lang="en">
                            <span class="option-icon">🇬🇧</span>
                            <span class="option-label">English</span>
                        </button>
                        <button class="option-btn ${selectedLang === 'hi' ? 'selected' : ''}" data-lang="hi">
                            <span class="option-icon">🇮🇳</span>
                            <span class="option-label">हिंदी</span>
                            <span class="option-desc">Hindi</span>
                        </button>
                        <button class="option-btn ${selectedLang === 'od' ? 'selected' : ''}" data-lang="od">
                            <span class="option-icon">🏛️</span>
                            <span class="option-label">ଓଡ଼ିଆ</span>
                            <span class="option-desc">Odia</span>
                        </button>
                    </div>
                    <button class="btn btn--primary btn--large btn--block" id="lang-next-btn">
                        Continue →
                    </button>
                </div>
            </section>
        `;

        const options = container.querySelectorAll('.option-btn[data-lang]');
        const nextBtn = document.getElementById('lang-next-btn');

        options.forEach(btn => {
            btn.addEventListener('click', () => {
                options.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedLang = btn.dataset.lang;
                nextBtn.disabled = false;
            });
        });

        nextBtn.addEventListener('click', () => {
            if (selectedLang) renderStep2();
        });
    }

    function renderStep2() {
        let stepText = "Step 2 of 3";
        let titleText = "Your coding experience";
        let descText = "This helps us tailor explanations for your level. Be honest — there are no wrong answers.";
        let backText = "← Back";
        let continueText = "Continue to Quest Selection →";

        if (selectedLang === 'hi') {
            stepText = "चरण 2 का 3";
            titleText = "आपका कोडिंग अनुभव";
            descText = "यह हमें आपके स्तर के अनुसार व्याख्या करने में मदद करता है। कोई गलत उत्तर नहीं है।";
            backText = "← पीछे";
            continueText = "क्वेस्ट चयन पर आगे बढ़ें →";
        } else if (selectedLang === 'od') {
            stepText = "ପଦକ୍ଷେପ ୨ ର ୩";
            titleText = "ଆପଣଙ୍କ କୋଡିଂ ଅଭିଜ୍ଞତା";
            descText = "ଏହା ଆପଣଙ୍କ ସ୍ତର ଅନୁଯାୟୀ ବୁଝାଇବାରେ ସାହାଯ୍ୟ କରେ। କୌଣସି ଭୁଲ୍ ଉତ୍ତର ନାହିଁ।";
            backText = "← ପଛକୁ";
            continueText = "କ୍ୱେଷ୍ଟ୍ ଚୟନକୁ ଯାଆନ୍ତୁ →";
        }

        container.innerHTML = `
            <section class="onboarding" id="onboarding-page">
                <div class="card card--rounded onboarding-card anim-fade-in">
                    <div class="onboarding-step">${stepText}</div>
                    <h2>${titleText}</h2>
                    <p class="onboarding-desc">${descText}</p>
                    <div class="option-grid option-grid--1" id="skill-options">
                        <button class="option-btn ${selectedSkill === 'none' ? 'selected' : ''}" data-skill="none">
                            <span class="option-label">Never written code</span>
                            <span class="option-desc">I've never opened a code editor or terminal</span>
                        </button>
                        <button class="option-btn ${selectedSkill === 'learning' ? 'selected' : ''}" data-skill="learning">
                            <span class="option-label">Learning the basics</span>
                            <span class="option-desc">I've done a tutorial or two but haven't built anything real</span>
                        </button>
                        <button class="option-btn ${selectedSkill === 'reading' ? 'selected' : ''}" data-skill="reading">
                            <span class="option-label">Can read code</span>
                            <span class="option-desc">I can read simple code and understand what it does</span>
                        </button>
                    </div>
                    <div style="display: flex; gap: var(--s-md); margin-top: var(--s-lg);">
                        <button class="btn btn--ghost" id="skill-back-btn">${backText}</button>
                        <button class="btn btn--primary btn--large" id="skill-next-btn" style="flex:1">
                            ${continueText}
                        </button>
                    </div>
                </div>
            </section>
        `;

        const options = container.querySelectorAll('.option-btn[data-skill]');
        const nextBtn = document.getElementById('skill-next-btn');
        const backBtn = document.getElementById('skill-back-btn');

        options.forEach(btn => {
            btn.addEventListener('click', () => {
                options.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedSkill = btn.dataset.skill;
                nextBtn.disabled = false;
            });
        });

        backBtn.addEventListener('click', () => {
            renderStep1();
        });

        nextBtn.addEventListener('click', () => {
            if (selectedSkill) renderStep3();
        });
    }

    function renderStep3() {
        let stepText = "Step 3 of 3";
        let titleText = "Choose Your Quest";
        let descText = "Select your starting adventure. Each quest features its own separate world map and 6 story villages.";
        let backText = "← Back";
        let startText = "Begin Adventure ⚔️";

        if (selectedLang === 'hi') {
            stepText = "चरण 3 का 3";
            titleText = "अपनी यात्रा (Quest) चुनें";
            descText = "अपनी शुरुआत की यात्रा चुनें। प्रत्येक क्वेस्ट का अपना अलग विश्व मानचित्र और 6 कहानी गाँव हैं।";
            backText = "← पीछे";
            startText = "यात्रा शुरू करें ⚔️";
        } else if (selectedLang === 'od') {
            stepText = "ପଦକ୍ଷେପ ୩ ର ୩";
            titleText = "ଆପଣଙ୍କ କ୍ୱେଷ୍ଟ୍ ବାଛନ୍ତୁ";
            descText = "ନିଜର ପ୍ରାରମ୍ଭିକ ଯାତ୍ରା ବାଛନ୍ତୁ। ପ୍ରତ୍ୟେକ କ୍ୱେଷ୍ଟର ନିଜସ୍ୱ ବିଶ୍ୱ ମାନଚିତ୍ର ଏବଂ ୬ଟି ଗାଁ ରହିଛି।";
            backText = "← ପଛକୁ";
            startText = "ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ ⚔️";
        }

        const pathKeys = ['opensource', 'java', 'dsa'];
        const cardsHtml = pathKeys.map(key => {
            const q = QUEST_PATHS[key];
            const isSel = selectedPath === key;

            let title = q.title;
            let subtitle = q.subtitle;
            let desc = q.desc;
            let world = q.worldName;

            if (selectedLang === 'hi') {
                if (q.title_hi) title = q.title_hi;
                if (q.subtitle_hi) subtitle = q.subtitle_hi;
                if (q.desc_hi) desc = q.desc_hi;
                if (q.worldName_hi) world = q.worldName_hi;
            } else if (selectedLang === 'od') {
                if (q.title_od) title = q.title_od;
                if (q.subtitle_od) subtitle = q.subtitle_od;
                if (q.desc_od) desc = q.desc_od;
                if (q.worldName_od) world = q.worldName_od;
            }

            const villages = q.nodes.map(n => {
                let name = n.name;
                if (selectedLang === 'hi' && n.name_hi) name = n.name_hi;
                else if (selectedLang === 'od' && n.name_od) name = n.name_od;
                return name;
            }).join(' · ');

            return `
                <div class="quest-path-card card ${isSel ? 'selected' : ''}" data-path="${key}" role="button" tabindex="0">
                    <div class="quest-card-header">
                        <div class="quest-card-icon">${q.icon}</div>
                        <div class="quest-card-titles">
                            <span class="quest-world-tag">${world}</span>
                            <h3 class="quest-card-title">${title}</h3>
                            <div class="quest-card-subtitle">${subtitle}</div>
                        </div>
                    </div>
                    <p class="quest-card-desc">${desc}</p>
                    <div class="quest-card-villages">
                        <span class="quest-villages-label">Villages:</span>
                        <span class="quest-villages-names">${villages}</span>
                    </div>
                    <div class="quest-card-footer">
                        <span class="quest-progress-count">6 Villages &middot; Story Quests</span>
                        <span class="quest-select-indicator">${isSel ? '● Selected' : '○ Choose'}</span>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <section class="onboarding" id="onboarding-page">
                <div class="card card--rounded onboarding-card onboarding-card--wide anim-fade-in">
                    <div class="onboarding-step">${stepText}</div>
                    <h2>${titleText}</h2>
                    <p class="onboarding-desc">${descText}</p>

                    <div class="quest-path-grid mb-lg" id="onboarding-quest-grid">
                        ${cardsHtml}
                    </div>

                    <div style="display: flex; gap: var(--s-md); margin-top: var(--s-lg);">
                        <button class="btn btn--ghost" id="quest-back-btn">${backText}</button>
                        <button class="btn btn--primary btn--large" id="quest-start-btn" style="flex:1">
                            ${startText}
                        </button>
                    </div>
                </div>
            </section>
        `;

        const cards = container.querySelectorAll('.quest-path-card');
        const startBtn = document.getElementById('quest-start-btn');
        const backBtn = document.getElementById('quest-back-btn');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedPath = card.dataset.path;
                card.querySelector('.quest-select-indicator').textContent = '● Selected';
                cards.forEach(c => {
                    if (c !== card) c.querySelector('.quest-select-indicator').textContent = '○ Choose';
                });
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        backBtn.addEventListener('click', () => {
            renderStep2();
        });

        startBtn.addEventListener('click', async () => {
            AudioSys.playTheme('overworld_theme');
            requireAuth();

            await setOnboarding(true, {
                language: selectedLang,
                skillLevel: selectedSkill,
                experienceLevel: selectedSkill,
                selectedPath
            });

            await setSelectedPath(selectedPath);

            // Sync lang toggles in header and HUD
            const langToggle = document.getElementById('lang-toggle');
            if (langToggle) langToggle.value = selectedLang;
            const hudLangToggle = document.getElementById('hud-lang-toggle');
            if (hudLangToggle) hudLangToggle.value = selectedLang;

            // Direct player to village/overworld map
            window.location.hash = '#/village';
        });
    }
}
