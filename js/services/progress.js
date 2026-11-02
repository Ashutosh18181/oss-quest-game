/**
 * OSS Quest — Progress Service (Multi-Path Edition)
 * Fully persists progress to localStorage (and syncs with backend when available).
 *
 * Progress shape:
 * {
 *   language: "en",
 *   experienceLevel: "learning",
 *   selectedPath: "opensource" | "java" | "dsa",
 *   paths: {
 *     opensource: { completed: [], xp: 0, chapters: { 1: 'active', ... } },
 *     java: { completed: [], xp: 0, chapters: { 1: 'active', ... } },
 *     dsa: { completed: [], xp: 0, chapters: { 1: 'active', ... } }
 *   }
 * }
 */

import { requireAuth } from './auth.js';

const STORAGE_KEY = 'oss_quest_progress_v3';
const LEGACY_STORAGE_KEY = 'oss_quest_progress_v2';

const BACKEND_BASE = (typeof window !== 'undefined' && window.location.port && window.location.port !== '3001' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? `${window.location.protocol}//${window.location.hostname}:3001`
    : '';

const BACKEND_URL = `${BACKEND_BASE}/api/progress`;

const DEFAULT_CHAPTER_MAP = {
    1: 'active',
    2: 'active',
    3: 'active',
    4: 'active',
    5: 'active',
    6: 'active'
};

const DEFAULT_PATHS = {
    opensource: {
        completed: [],
        xp: 0,
        chapters: { ...DEFAULT_CHAPTER_MAP }
    },
    java: {
        completed: [],
        xp: 0,
        chapters: { ...DEFAULT_CHAPTER_MAP }
    },
    dsa: {
        completed: [],
        xp: 0,
        chapters: { ...DEFAULT_CHAPTER_MAP }
    }
};

const DEFAULT_PROGRESS = {
    language: 'en',
    experienceLevel: 'learning',
    skillLevel: 'learning',
    selectedPath: 'opensource',
    paths: {
        opensource: { completed: [], xp: 0, chapters: { ...DEFAULT_CHAPTER_MAP } },
        java: { completed: [], xp: 0, chapters: { ...DEFAULT_CHAPTER_MAP } },
        dsa: { completed: [], xp: 0, chapters: { ...DEFAULT_CHAPTER_MAP } }
    },
    // Top-level aliases for backwards compatibility with earlier components
    chapters: { ...DEFAULT_CHAPTER_MAP },
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    codeLanguage: 'javascript',
    onboardingComplete: false,
};

/** Normalize and ensure valid paths structure */
function normalizeProgress(rawObj) {
    const obj = { ...DEFAULT_PROGRESS, ...rawObj };
    if (!obj.paths) obj.paths = {};

    const availablePaths = ['opensource', 'java', 'dsa'];
    for (const p of availablePaths) {
        if (!obj.paths[p]) {
            obj.paths[p] = {
                completed: [],
                xp: 0,
                chapters: { ...DEFAULT_CHAPTER_MAP }
            };
        } else {
            obj.paths[p] = {
                completed: Array.isArray(obj.paths[p].completed) ? obj.paths[p].completed : [],
                xp: typeof obj.paths[p].xp === 'number' ? obj.paths[p].xp : 0,
                chapters: { ...DEFAULT_CHAPTER_MAP, ...(obj.paths[p].chapters || {}) }
            };
        }
    }

    if (!availablePaths.includes(obj.selectedPath)) {
        obj.selectedPath = 'opensource';
    }

    // Populate completed array if chapters are done
    const curPath = obj.paths[obj.selectedPath];
    for (let i = 1; i <= 6; i++) {
        if (curPath.chapters[i] === 'done' && !curPath.completed.includes(i)) {
            curPath.completed.push(i);
        }
    }

    // Sync root convenience properties to active path
    obj.chapters = { ...curPath.chapters };
    obj.xp = curPath.xp;

    return obj;
}

/** Load initial progress synchronously from localStorage */
function loadFromStorage() {
    if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };
    try {
        let raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            // Attempt migration from v2
            raw = localStorage.getItem(LEGACY_STORAGE_KEY);
            if (raw) {
                const legacy = JSON.parse(raw);
                const migrated = normalizeProgress({
                    ...legacy,
                    selectedPath: 'opensource',
                    paths: {
                        opensource: {
                            completed: Object.entries(legacy.chapters || {})
                                .filter(([_, state]) => state === 'done')
                                .map(([id]) => parseInt(id, 10)),
                            xp: legacy.xp || 0,
                            chapters: { ...DEFAULT_CHAPTER_MAP, ...(legacy.chapters || {}) }
                        },
                        java: { completed: [], xp: 0, chapters: { ...DEFAULT_CHAPTER_MAP } },
                        dsa: { completed: [], xp: 0, chapters: { ...DEFAULT_CHAPTER_MAP } }
                    }
                });
                persistToStorage(migrated);
                return migrated;
            }
        }
        if (raw) {
            return normalizeProgress(JSON.parse(raw));
        }
    } catch (e) {
        console.warn("Failed to read progress from localStorage:", e);
    }
    return normalizeProgress({});
}

/** Save progress state synchronously to localStorage */
function persistToStorage(data) {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn("Failed to write progress to localStorage:", e);
    }
}

let localCache = loadFromStorage();

/** Micro-toast indicating progress was saved */
export function showSaveIndicator(msg) {
    if (typeof document === 'undefined' || !document.createElement) return;
    const lang = localCache.language || 'en';
    let defaultMsg = 'Progress saved ✓';
    if (lang === 'hi') defaultMsg = 'प्रगति सहेजी गई ✓';
    else if (lang === 'od') defaultMsg = 'ପ୍ରଗତି ସଞ୍ଚିତ ହେଲା ✓';

    let el = document.getElementById('save-indicator');
    if (!el) {
        el = document.createElement('div');
        el.id = 'save-indicator';
        el.className = 'save-indicator';
        document.body.appendChild(el);
    }
    el.textContent = msg || defaultMsg;
    el.classList.add('visible');
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => {
        el.classList.remove('visible');
    }, 1800);
}

/** Update persistent top-bar counter elements */
export function updateTopBarUI() {
    const xpEl = document.getElementById('xp-count');
    const streakEl = document.getElementById('streak-count');
    if (xpEl) xpEl.textContent = localCache.xp;
    if (streakEl) streakEl.textContent = localCache.streak;

    const questPillIcon = document.getElementById('quest-pill-icon');
    const questPillTitle = document.getElementById('quest-pill-title');
    const hudIcon = document.getElementById('quest-hud-icon');

    const path = localCache.selectedPath || 'opensource';
    let icon = '⚔️';
    let name = 'OSS Quest';
    if (path === 'java') {
        icon = '☕';
        name = 'Java Quest';
    } else if (path === 'dsa') {
        icon = '🌲';
        name = 'DSA Quest';
    }

    if (questPillIcon) questPillIcon.textContent = icon;
    if (questPillTitle) questPillTitle.textContent = name;
    if (hudIcon) hudIcon.textContent = icon;
}

/** Initialize progress: combines localStorage cache and optionally merges backend updates */
export async function initProgress() {
    localCache = loadFromStorage();
    updateTopBarUI();

    const user = requireAuth();
    if (!user) return localCache;

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 1500);

        const response = await fetch(BACKEND_URL, {
            headers: { 'Authorization': `Bearer ${user.id}` },
            signal: controller.signal
        });
        clearTimeout(timeout);

        if (response.ok) {
            const data = await response.json();
            if (data && typeof data === 'object') {
                localCache = normalizeProgress({
                    ...localCache,
                    ...data,
                    paths: {
                        ...localCache.paths,
                        ...(data.paths || {})
                    }
                });
                persistToStorage(localCache);
                updateTopBarUI();
            }
        }
    } catch (e) {
        // Backend offline — localStorage cache remains primary
    }

    return localCache;
}

/** Synchronously return the loaded progress cache for UI rendering */
export function loadProgress() {
    return localCache;
}

/** Save progress to localStorage (and asynchronously sync with backend) */
export async function saveProgress(progress, showToast = true) {
    localCache = normalizeProgress({
        ...localCache,
        ...progress,
        paths: {
            ...localCache.paths,
            ...(progress.paths || {})
        }
    });
    persistToStorage(localCache);
    updateTopBarUI();

    if (showToast) showSaveIndicator();

    const user = requireAuth();
    if (!user) return;

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000);
        await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.id}`
            },
            body: JSON.stringify(localCache),
            signal: controller.signal
        });
        clearTimeout(timeout);
    } catch (e) {
        // Backend offline
    }
}

/** Get current active quest path ('opensource' | 'java' | 'dsa') */
export function getSelectedPath() {
    return localCache.selectedPath || 'opensource';
}

/** Switch active quest path */
export async function setSelectedPath(pathId) {
    if (!['opensource', 'java', 'dsa'].includes(pathId)) return;
    localCache.selectedPath = pathId;
    localCache = normalizeProgress(localCache);
    persistToStorage(localCache);
    updateTopBarUI();

    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('path-changed', { detail: { path: pathId } }));
    }
    await saveProgress({ selectedPath: pathId }, false);
}

/** Get status of a chapter within the active (or specified) quest path */
export function getChapterStatus(chapterId, pathId = null) {
    const p = pathId || localCache.selectedPath || 'opensource';
    const pathData = localCache.paths[p];
    if (!pathData) return 'locked';
    return pathData.chapters[chapterId] || 'locked';
}

/** Get path-specific progress data */
export function getPathProgress(pathId) {
    const p = pathId || localCache.selectedPath || 'opensource';
    return localCache.paths[p] || { completed: [], xp: 0, chapters: { ...DEFAULT_CHAPTER_MAP } };
}

/**
 * Complete a chapter — updates status, awards XP, unlocks next.
 * @param {number} chapterId
 * @param {number} xpReward
 */
export async function completeChapter(chapterId, xpReward = 0) {
    const curPath = localCache.selectedPath || 'opensource';
    const pathData = localCache.paths[curPath];

    pathData.chapters[chapterId] = 'done';
    if (!pathData.completed.includes(chapterId)) {
        pathData.completed.push(chapterId);
    }

    // Unlock next chapter
    const nextId = chapterId + 1;
    if (nextId <= 6 && pathData.chapters[nextId] === 'locked') {
        pathData.chapters[nextId] = 'active';
    }

    pathData.xp += xpReward;
    localCache.xp = pathData.xp;
    localCache.streak = Math.max(localCache.streak, 1);
    localCache.lastActiveDate = new Date().toISOString();

    localCache = normalizeProgress(localCache);
    persistToStorage(localCache);
    updateTopBarUI();
    showSaveIndicator(`+${xpReward} XP Earned · Progress saved ✓`);

    await saveProgress(localCache, false);
}

export function getLanguage() {
    return localCache.language || 'en';
}

export async function setLanguage(lang) {
    localCache.language = lang;
    persistToStorage(localCache);
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: lang } }));
    }
    await saveProgress({ language: lang }, false);
}

export async function setOnboarding(complete, profileData = {}) {
    localCache.onboardingComplete = complete;
    localCache = normalizeProgress({ ...localCache, ...profileData });
    persistToStorage(localCache);
    if (typeof window !== 'undefined' && profileData.language) {
        window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: profileData.language } }));
    }
    if (typeof window !== 'undefined' && profileData.selectedPath) {
        window.dispatchEvent(new CustomEvent('path-changed', { detail: { path: profileData.selectedPath } }));
    }
    await saveProgress(localCache, false);
}

export async function resetProgress() {
    localCache = normalizeProgress({ ...DEFAULT_PROGRESS });
    persistToStorage(localCache);
    updateTopBarUI();
    await saveProgress(localCache, true);
}
