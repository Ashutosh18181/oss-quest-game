/**
 * OSS Quest — Profile Page (Multi-Path Edition)
 * Shows XP, streak, language setting, active quest path switcher, and per-path chapter progress.
 */

import { loadProgress, setLanguage, resetProgress, setSelectedPath, getSelectedPath } from '../services/progress.js';
import { getCurrentUser, signOut } from '../services/auth.js';
import { getChapters } from '../data/chapters.js';
import { QUEST_PATHS } from '../data/quests.js';

export function renderProfile(container) {
    const topBar = document.getElementById('top-bar');
    if (topBar) topBar.classList.remove('hidden');
    container.classList.remove('no-topbar');

    const progress = loadProgress();
    const user = getCurrentUser();
    const curPathKey = getSelectedPath();
    const activeQuest = QUEST_PATHS[curPathKey] || QUEST_PATHS.opensource;
    const chapters = getChapters(curPathKey);

    // Calculate active chapter completion
    const totalChapters = chapters.length;
    const pathChapters = progress.paths?.[curPathKey]?.chapters || progress.chapters || {};
    const doneChapters = Object.values(pathChapters).filter(s => s === 'done').length;
    const progressPct = Math.round((doneChapters / totalChapters) * 100);

    // Skill level display
    const skillLabels = {
        none: 'Never written code',
        learning: 'Learning the basics',
        reading: 'Can read code',
    };

    const pathSelectorHtml = ['opensource', 'java', 'dsa'].map(key => {
        const q = QUEST_PATHS[key];
        const isCur = key === curPathKey;
        const pData = progress.paths?.[key] || { completed: [], xp: 0 };
        const done = pData.completed?.length || 0;

        let title = q.title;
        let subtitle = q.subtitle;
        if (progress.language === 'hi') {
            if (q.title_hi) title = q.title_hi;
            if (q.subtitle_hi) subtitle = q.subtitle_hi;
        } else if (progress.language === 'od') {
            if (q.title_od) title = q.title_od;
            if (q.subtitle_od) subtitle = q.subtitle_od;
        }

        return `
            <div class="quest-path-pill card card--flat ${isCur ? 'active-path' : ''}" data-path="${key}" role="button" tabindex="0">
                <div style="font-size: 1.5rem; margin-bottom: var(--s-xs);">${q.icon}</div>
                <div style="font-weight: 700; font-size: var(--fs-md);">${title}</div>
                <div class="text-sm text-muted" style="margin-bottom: var(--s-xs);">${subtitle}</div>
                <div class="text-mono text-sm" style="color: var(--c-primary); font-weight: 600;">
                    ${done}/6 Completed · ${pData.xp || 0} XP
                </div>
                ${isCur ? `<div class="quest-active-tag">Active</div>` : `<div class="quest-switch-action">Switch →</div>`}
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section class="profile" id="profile-page">
            <a href="#/village" class="chapter-back">← Back to World Map</a>
            
            <h1 class="anim-fade-in">Your Profile</h1>

            <div class="profile-stats stagger">
                <div class="card profile-stat anim-fade-in-up">
                    <div class="profile-stat-value">${progress.xp}</div>
                    <div class="profile-stat-label">${activeQuest.icon} ${activeQuest.title} XP</div>
                </div>
                <div class="card profile-stat anim-fade-in-up">
                    <div class="profile-stat-value">${progress.streak}</div>
                    <div class="profile-stat-label">Day Streak</div>
                </div>
                <div class="card profile-stat anim-fade-in-up">
                    <div class="profile-stat-value">${doneChapters}/${totalChapters}</div>
                    <div class="profile-stat-label">Chapters Complete</div>
                </div>
            </div>

            <!-- Multi-Quest Switcher -->
            <div class="profile-section card anim-fade-in" style="animation-delay: 200ms">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--s-md);">
                    <h3 style="margin: 0;">Active Quest Path</h3>
                    <a href="#/choose-quest" class="btn btn--ghost btn--small">Browse All Quests →</a>
                </div>
                <p class="text-sm text-muted" style="margin-bottom: var(--s-md);">
                    Switch between Open Source, Java, and DSA at any time. Your progress is saved separately per path.
                </p>
                <div class="profile-quest-grid">
                    ${pathSelectorHtml}
                </div>
            </div>

            <!-- Active Quest Chapter Progress -->
            <div class="profile-progress card anim-fade-in" style="animation-delay: 300ms">
                <h3>${activeQuest.icon} ${activeQuest.title} Progress</h3>
                <div style="display: flex; align-items: center; gap: var(--s-md); margin-top: var(--s-md);">
                    <div class="progress-bar-bg" style="flex:1">
                        <div class="progress-bar-fill anim-bar-fill" style="width: ${progressPct}%"></div>
                    </div>
                    <span class="text-mono text-sm" style="font-weight: 700">${progressPct}%</span>
                </div>
                <div style="margin-top: var(--s-md);">
                    ${chapters.map(ch => {
                        const s = pathChapters[ch.id] || 'locked';
                        const icon = s === 'done' ? '✅' : s === 'active' ? '⭐' : '🔒';
                        const chTitle = (progress.language === 'hi' && ch.title_hi) ? ch.title_hi : (progress.language === 'od' && ch.title_od) ? ch.title_od : ch.title;
                        return `<div style="display: flex; align-items: center; gap: var(--s-sm); margin-bottom: var(--s-xs); font-size: var(--fs-sm);">
                            <span>${icon}</span>
                            <span style="color: ${s === 'locked' ? 'var(--c-locked)' : 'var(--c-ink)'}">
                                Ch ${ch.id}: ${chTitle}
                            </span>
                        </div>`;
                    }).join('')}
                </div>
            </div>

            <div class="profile-section card anim-fade-in" style="animation-delay: 400ms">
                <h3>Settings</h3>
                <div style="margin-top: var(--s-md);">
                    <label class="text-mono text-sm" style="display: block; margin-bottom: var(--s-xs); font-weight: 700;">
                        Language
                    </label>
                    <select id="profile-lang" class="lang-toggle" style="width: 100%; padding: var(--s-sm);">
                        <option value="en" ${progress.language === 'en' ? 'selected' : ''}>English</option>
                        <option value="hi" ${progress.language === 'hi' ? 'selected' : ''}>हिंदी (Hindi)</option>
                        <option value="od" ${progress.language === 'od' ? 'selected' : ''}>ଓଡ଼ିଆ (Odia)</option>
                    </select>
                </div>
                <div style="margin-top: var(--s-md);">
                    <span class="text-mono text-sm" style="font-weight: 700;">Skill Level:</span>
                    <span class="text-sm text-muted">${skillLabels[progress.skillLevel] || 'Learning the basics'}</span>
                </div>
                ${user ? `
                <div style="margin-top: var(--s-md);">
                    <span class="text-mono text-sm" style="font-weight: 700;">Account:</span>
                    <span class="text-sm text-muted">${user.email}</span>
                </div>
                ` : ''}
            </div>

            <div class="profile-actions anim-fade-in" style="animation-delay: 500ms; margin-top: var(--s-xl); display: flex; gap: var(--s-md);">
                <button class="btn btn--ghost text-danger" id="reset-btn">Reset All Progress</button>
                ${user ? '<button class="btn btn--ghost" id="signout-btn">Sign Out</button>' : ''}
            </div>
        </section>
    `;

    // Path switcher click handlers
    container.querySelectorAll('.quest-path-pill').forEach(pill => {
        pill.addEventListener('click', async () => {
            const p = pill.dataset.path;
            if (p !== curPathKey) {
                await setSelectedPath(p);
                renderProfile(container);
            }
        });
    });

    // Language change
    const langSelect = document.getElementById('profile-lang');
    if (langSelect) {
        langSelect.addEventListener('change', async (e) => {
            await setLanguage(e.target.value);
            renderProfile(container);
        });
    }

    // Reset progress
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', async () => {
            if (confirm('Are you sure you want to reset all quest progress? This cannot be undone.')) {
                await resetProgress();
                renderProfile(container);
            }
        });
    }

    // Sign out
    const signOutBtn = document.getElementById('signout-btn');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', () => {
            signOut();
            window.location.hash = '#/';
        });
    }
}
