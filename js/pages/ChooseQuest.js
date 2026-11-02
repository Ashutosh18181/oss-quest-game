/**
 * OSS Quest — Choose Your Quest Page
 * Multi-path selection screen allowing learners to pick between:
 * 1. Open Source Quest ("The Path to Your First PR")
 * 2. Java Quest ("The Code Foundry")
 * 3. DSA Quest ("The Algorithm Realm")
 *
 * Fully localized in English, Hindi, and Odia.
 */

import { QUEST_PATHS } from '../data/quests.js';
import { loadProgress, setSelectedPath, getLanguage, getSelectedPath, setOnboarding } from '../services/progress.js';
import { requireAuth } from '../services/auth.js';
import { AudioSys } from '../engine/AudioManager.js';

const STRINGS = {
    en: {
        heading: "Choose Your Quest",
        subheading: "Select your learning path. Each quest has its own world map, 6 interactive villages, and story quests.",
        switchNote: "You can switch between quests anytime from your profile.",
        villagesLabel: "6 Villages:",
        progressLabel: "Complete",
        activeBadge: "CURRENT QUEST",
        startBtn: "Begin Quest",
        switchBtn: "Switch to this Quest"
    },
    hi: {
        heading: "अपनी यात्रा (Quest) चुनें",
        subheading: "अपनी सीखने की यात्रा चुनें। हर क्वेस्ट का अपना विश्व मानचित्र, 6 संवादात्मक गाँव और कहानी क्वेस्ट हैं।",
        switchNote: "आप अपनी प्रोफ़ाइल से कभी भी क्वेस्ट बदल सकते हैं।",
        villagesLabel: "6 गाँव:",
        progressLabel: "पूरा हुआ",
        activeBadge: "सक्रिय क्वेस्ट",
        startBtn: "यात्रा शुरू करें",
        switchBtn: "यह क्वेस्ट चुनें"
    },
    od: {
        heading: "ଆପଣଙ୍କ କ୍ୱେଷ୍ଟ୍ ବାଛନ୍ତୁ",
        subheading: "ଆପଣଙ୍କ ଶିକ୍ଷଣ ଯାତ୍ରା ବାଛନ୍ତୁ। ପ୍ରତ୍ୟେକ କ୍ୱେଷ୍ଟର ନିଜସ୍ୱ ବିଶ୍ୱ ମାନଚିତ୍ର, ୬ଟି ଗାଁ ଏବଂ କାହାଣୀ ରହିଛି।",
        switchNote: "ଆପଣ ପ୍ରୋଫାଇଲରୁ ଯେକୌଣସି ସମୟରେ କ୍ୱେଷ୍ଟ୍ ବଦଳାଇ ପାରିବେ।",
        villagesLabel: "୬ଟି ଗାଁ:",
        progressLabel: "ସମ୍ପୂର୍ଣ୍ଣ",
        activeBadge: "ସକ୍ରିୟ କ୍ୱେଷ୍ଟ୍",
        startBtn: "ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
        switchBtn: "ଏହି କ୍ୱେଷ୍ଟ୍ ଚୟନ କରନ୍ତୁ"
    }
};

export function renderChooseQuest(container, options = {}) {
    const topBar = document.getElementById('top-bar');
    if (topBar) topBar.classList.remove('hidden');
    container.classList.remove('no-topbar');

    const progress = loadProgress();
    const lang = getLanguage();
    const t = STRINGS[lang] || STRINGS.en;
    let selectedPath = options.initialPath || getSelectedPath();

    const pathKeys = ['opensource', 'java', 'dsa'];

    function buildCardsHTML() {
        return pathKeys.map(key => {
            const q = QUEST_PATHS[key];
            const isSelected = selectedPath === key;
            const isActive = progress.selectedPath === key;
            const pathProgress = progress.paths?.[key] || { completed: [], xp: 0 };
            const doneCount = pathProgress.completed?.length || 0;

            let title = q.title;
            let subtitle = q.subtitle;
            let desc = q.desc;
            let world = q.worldName;

            if (lang === 'hi') {
                if (q.title_hi) title = q.title_hi;
                if (q.subtitle_hi) subtitle = q.subtitle_hi;
                if (q.desc_hi) desc = q.desc_hi;
                if (q.worldName_hi) world = q.worldName_hi;
            } else if (lang === 'od') {
                if (q.title_od) title = q.title_od;
                if (q.subtitle_od) subtitle = q.subtitle_od;
                if (q.desc_od) desc = q.desc_od;
                if (q.worldName_od) world = q.worldName_od;
            }

            const villagesList = q.nodes.map(n => {
                let nName = n.name;
                if (lang === 'hi' && n.name_hi) nName = n.name_hi;
                else if (lang === 'od' && n.name_od) nName = n.name_od;
                return nName;
            }).join(' &middot; ');

            return `
                <div class="quest-path-card card ${isSelected ? 'selected' : ''}" data-path="${key}" role="button" tabindex="0">
                    <div class="quest-card-header">
                        <div class="quest-card-icon">${q.icon}</div>
                        <div class="quest-card-titles">
                            <div class="quest-card-meta">
                                <span class="quest-world-tag">${world}</span>
                                ${isActive ? `<span class="quest-active-pill">${t.activeBadge}</span>` : ''}
                            </div>
                            <h2 class="quest-card-title">${title}</h2>
                            <div class="quest-card-subtitle">${subtitle}</div>
                        </div>
                    </div>

                    <p class="quest-card-desc">${desc}</p>

                    <div class="quest-card-villages">
                        <span class="quest-villages-label">${t.villagesLabel}</span>
                        <span class="quest-villages-names">${villagesList}</span>
                    </div>

                    <div class="quest-card-footer">
                        <div class="quest-card-progress">
                            <span class="quest-progress-count">${doneCount}/6 ${t.progressLabel}</span>
                            <span class="quest-xp-count">${pathProgress.xp || 0} XP</span>
                        </div>
                        <div class="quest-select-indicator">
                            ${isSelected ? '● Selected' : '○ Select'}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    container.innerHTML = `
        <section class="choose-quest-page anim-fade-in" id="choose-quest-page">
            <div class="choose-quest-header">
                <h1>${t.heading}</h1>
                <p class="choose-quest-desc">${t.subheading}</p>
                <div class="choose-quest-note">${t.switchNote}</div>
            </div>

            <div class="quest-path-grid" id="quest-path-grid">
                ${buildCardsHTML()}
            </div>

            <div class="choose-quest-actions">
                ${options.showBack ? `<button class="btn btn--ghost" id="quest-back-btn">← Back</button>` : ''}
                <button class="btn btn--primary btn--large" id="quest-launch-btn">
                    ${t.startBtn} ⚔️
                </button>
            </div>
        </section>
    `;

    // Interactive card selection
    const cards = container.querySelectorAll('.quest-path-card');
    const launchBtn = document.getElementById('quest-launch-btn');
    const backBtn = document.getElementById('quest-back-btn');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            selectedPath = card.dataset.path;
            const grid = document.getElementById('quest-path-grid');
            if (grid) grid.innerHTML = buildCardsHTML();
            attachCardListeners();
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    function attachCardListeners() {
        const newCards = container.querySelectorAll('.quest-path-card');
        newCards.forEach(card => {
            card.addEventListener('click', () => {
                selectedPath = card.dataset.path;
                const grid = document.getElementById('quest-path-grid');
                if (grid) grid.innerHTML = buildCardsHTML();
                attachCardListeners();
            });
        });
    }

    if (backBtn && options.onBack) {
        backBtn.addEventListener('click', () => options.onBack());
    }

    if (launchBtn) {
        launchBtn.addEventListener('click', async () => {
            AudioSys.playTheme('overworld_theme');
            requireAuth();

            // Set chosen path in progress
            await setSelectedPath(selectedPath);

            if (options.onComplete) {
                options.onComplete(selectedPath);
            } else {
                window.location.hash = '#/village';
            }
        });
    }
}

