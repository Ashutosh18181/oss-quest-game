/**
 * OSS Quest — Journey Map Page (Multi-Path Edition)
 * Displays the chapter progression path for the currently selected quest.
 */

import { getChapters } from '../data/chapters.js';
import { getQuestPath } from '../data/quests.js';
import { loadProgress, getSelectedPath } from '../services/progress.js';

export function renderJourney(container) {
    const topBar = document.getElementById('top-bar');
    if (topBar) topBar.classList.remove('hidden');
    container.classList.remove('no-topbar');

    const progress = loadProgress();
    const curPathKey = getSelectedPath();
    const quest = getQuestPath(curPathKey);
    const chapters = getChapters(curPathKey);

    // Update top bar stats
    const xpEl = document.getElementById('xp-count');
    const streakEl = document.getElementById('streak-count');
    const langToggle = document.getElementById('lang-toggle');
    if (xpEl) xpEl.textContent = progress.xp;
    if (streakEl) streakEl.textContent = progress.streak;
    if (langToggle) langToggle.value = progress.language;

    const pathData = progress.paths?.[curPathKey] || { chapters: progress.chapters || {} };

    const chaptersHTML = chapters.map((ch, idx) => {
        const status = pathData.chapters[ch.id] || 'locked';
        const statusLabel = status === 'done' ? '✅ Complete'
            : status === 'active' ? '⭐ Ready'
            : '🔒 Locked';

        const nodeClass = `chapter-node ${status}`;
        const bodyClass = status === 'active' ? 'chapter-node-body anim-pulse-glow' : 'chapter-node-body';
        
        const connector = idx < chapters.length - 1
            ? `<div class="chapter-connector ${status === 'done' ? 'done' : ''}"></div>`
            : '';

        let title = ch.title;
        let subtitle = ch.subtitle;
        if (progress.language === 'hi') {
            if (ch.title_hi) title = ch.title_hi;
            if (ch.subtitle_hi) subtitle = ch.subtitle_hi;
        } else if (progress.language === 'od') {
            if (ch.title_od) title = ch.title_od;
            if (ch.subtitle_od) subtitle = ch.subtitle_od;
        }

        return `
            <div class="${nodeClass}" data-chapter="${ch.id}" role="button" tabindex="${status !== 'locked' ? '0' : '-1'}" aria-label="Chapter ${ch.id}: ${title}">
                <div class="chapter-node-number">${ch.icon}</div>
                <div class="${bodyClass}">
                    <div class="chapter-node-title">${title}</div>
                    <p class="chapter-node-desc">${subtitle || ch.description}</p>
                    <div class="chapter-node-status">${statusLabel}</div>
                </div>
            </div>
            ${connector}
        `;
    }).join('');

    container.innerHTML = `
        <section class="journey" id="journey-page">
            <div class="journey-header anim-fade-in">
                <div style="display: flex; justify-content: center; align-items: center; gap: var(--s-sm); margin-bottom: var(--s-sm);">
                    <span style="font-size: 2rem;">${quest.icon}</span>
                    <h1 style="margin: 0;">${quest.title}</h1>
                </div>
                <p>${quest.subtitle} &middot; Follow the path across all 6 villages</p>
                <div style="margin-top: var(--s-md);">
                    <a href="#/choose-quest" class="btn btn--ghost btn--small">Switch Quest Path 🔄</a>
                </div>
            </div>
            <div class="chapter-path stagger">
                ${chaptersHTML}
            </div>
        </section>
    `;

    // Click handlers for chapter nodes
    container.querySelectorAll('.chapter-node:not(.locked)').forEach(node => {
        node.addEventListener('click', () => {
            const id = node.dataset.chapter;
            window.location.hash = `#/chapter/${id}`;
        });
        node.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                node.click();
            }
        });
    });
}
