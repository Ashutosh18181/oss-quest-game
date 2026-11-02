/**
 * OSS Quest — Overworld Scene (Multi-Path Edition)
 * Displays the world map for the active quest path (Open Source, Java, or DSA).
 * Player movement is unrestricted — walk anywhere on the map.
 */

import { getQuestPath } from '../data/quests.js';
import { loadProgress, getLanguage, getSelectedPath } from '../services/progress.js';
import { Assets } from './AssetLoader.js';
import { TouchControls } from './TouchControls.js';

export class OverworldScene {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.container = document.getElementById('village-container');
        this.canvas = document.getElementById('village-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this._running = false;
        this._onClick = this._handleClick.bind(this);
        this.progress = loadProgress();

        // Load active quest path
        this.selectedPath = getSelectedPath();
        this.quest = getQuestPath(this.selectedPath);
        this.nodes = this.quest.nodes || [];

        this.playerPos = { x: 0, y: 0 };
        this.hoverNode = null;
        this._onMouseMove = this._handleMouseMove.bind(this);

        this.keys = { w: false, a: false, s: false, d: false, ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
        this._keydownHandler = this._handleKeydown.bind(this);
        this._keyupHandler = this._handleKeyup.bind(this);
        
        this.speed = 170; // pixels per second
        this.facing = 'down';
        this.touchControls = null;

        // Auto-travel feature: press 1-6 or click node to travel automatically
        this.targetNode = null;
        this.isAutoTravelling = false;
        this.autoTravelSpeed = 340; // brisk, smooth travel speed

        this._langListener = () => this._updateHUD();
        this._pathListener = (e) => {
            this.selectedPath = e.detail?.path || getSelectedPath();
            this.quest = getQuestPath(this.selectedPath);
            this.nodes = this.quest.nodes || [];
            this._resetPlayerToSpawn();
            this._updateHUD();
        };
    }

    _resetPlayerToSpawn() {
        let maxUnlocked = 0;
        const curChapters = this.progress.paths?.[this.selectedPath]?.chapters || this.progress.chapters || {};
        for (let i = 1; i <= 6; i++) {
            if (curChapters[i] === 'done') maxUnlocked = i;
            else if (curChapters[i] === 'active') {
                if (maxUnlocked < i - 1) maxUnlocked = i - 1; 
                break;
            }
        }
        
        const startNodeId = maxUnlocked > 0 ? maxUnlocked : 1;
        const startNode = this.nodes.find(n => n.id === startNodeId) || this.nodes[0];
        
        this.playerPos.x = startNode.x;
        this.playerPos.y = startNode.y;
    }

    startAutoTravel(node) {
        if (!node || !this._isUnlocked(node.id)) return;
        const dist = Math.sqrt((node.x - this.playerPos.x)**2 + (node.y - this.playerPos.y)**2);
        if (dist <= 16) {
            this._running = false;
            this.sceneManager.loadScene('village', { villageId: node.id });
            return;
        }
        this.targetNode = node;
        this.isAutoTravelling = true;

        const lang = getLanguage();
        let nodeName = node.name;
        if (lang === 'hi' && node.name_hi) nodeName = node.name_hi;
        else if (lang === 'od' && node.name_od) nodeName = node.name_od;

        const atmoEl = document.getElementById('atmosphere-text');
        if (atmoEl) {
            let msg = `⚡ Auto-traveling to Quest ${node.id}: ${nodeName}…`;
            if (lang === 'hi') msg = `⚡ क्वेस्ट ${node.id}: ${nodeName} की ओर जा रहे हैं…`;
            else if (lang === 'od') msg = `⚡ କ୍ୱେଷ୍ଟ୍ ${node.id}: ${nodeName} କୁ ଯାଉଛନ୍ତି…`;
            atmoEl.textContent = msg;
            atmoEl.style.opacity = '1';
        }
    }

    async start() {
        if (!this.container || !this.canvas) return;
        this.container.style.display = 'block';
        
        this._setupCanvas();
        window.addEventListener('resize', () => this._setupCanvas());
        this.canvas.addEventListener('click', this._onClick);
        this.canvas.addEventListener('mousemove', this._onMouseMove);
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
        window.addEventListener('language-changed', this._langListener);
        window.addEventListener('path-changed', this._pathListener);

        // Mobile / Touch controls
        this.touchControls = new TouchControls();
        this.touchControls.show();
        
        this._resetPlayerToSpawn();
        this._updateHUD();

        this._running = true;
        this._lastTime = performance.now();
        this._loop();
    }

    _updateHUD() {
        this.progress = loadProgress();
        const lang = getLanguage();
        const titleEl = document.getElementById('quest-hud-title');
        const progEl = document.getElementById('quest-hud-progress');
        const fillEl = document.getElementById('quest-hud-energy-fill');
        
        let doneCount = 0;
        let activeChapterId = 1;
        const curChapters = this.progress.paths?.[this.selectedPath]?.chapters || this.progress.chapters || {};
        for (let i = 1; i <= 6; i++) {
            if (curChapters[i] === 'done') {
                doneCount++;
            } else if (curChapters[i] === 'active') {
                if (activeChapterId === 1) activeChapterId = i;
            }
        }
        
        const pct = Math.round((doneCount / 6) * 100);
        if (fillEl) fillEl.style.width = `${pct}%`;

        let questName = this.quest.title;
        if (lang === 'hi' && this.quest.title_hi) questName = this.quest.title_hi;
        else if (lang === 'od' && this.quest.title_od) questName = this.quest.title_od;

        if (titleEl && progEl) {
            if (lang === 'hi') {
                titleEl.textContent = `${this.quest.icon} ${questName} · अध्याय ${activeChapterId}`;
                progEl.textContent = `${doneCount}/6 गाँव पूरे`;
            } else if (lang === 'od') {
                titleEl.textContent = `${this.quest.icon} ${questName} · ଅଧ୍ୟାୟ ${activeChapterId}`;
                progEl.textContent = `${doneCount}/6 ଗାଁ ସମ୍ପୂର୍ଣ୍ଣ`;
            } else {
                titleEl.textContent = `${this.quest.icon} ${questName} · Ch ${activeChapterId}`;
                progEl.textContent = `${doneCount}/6 villages complete`;
            }
        }

        const hintBar = document.querySelector('.controls-hint-bar');
        const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 840);
        if (hintBar) {
            if (isTouch) {
                if (lang === 'hi') hintBar.innerHTML = "D-pad — चलें &nbsp;&middot;&nbsp; टैप / [1-6] — स्वतः यात्रा &nbsp;&middot;&nbsp; E — प्रवेश";
                else if (lang === 'od') hintBar.innerHTML = "D-pad — ଚାଲନ୍ତୁ &nbsp;&middot;&nbsp; ଟ୍ୟାପ୍ / [1-6] — ଯାତ୍ରା &nbsp;&middot;&nbsp; E — ପ୍ରବେଶ";
                else hintBar.innerHTML = "D-pad — move &nbsp;&middot;&nbsp; Tap / [1-6] — auto-travel &nbsp;&middot;&nbsp; E — enter";
            } else {
                if (lang === 'hi') hintBar.innerHTML = "WASD / तीर — चलें &nbsp;&middot;&nbsp; <strong>[1-6] — स्वतः यात्रा</strong> &nbsp;&middot;&nbsp; E — प्रवेश";
                else if (lang === 'od') hintBar.innerHTML = "WASD / ତୀର — ଚାଲନ୍ତୁ &nbsp;&middot;&nbsp; <strong>[1-6] — ସ୍ୱତଃ ଯାତ୍ରା</strong> &nbsp;&middot;&nbsp; E — ପ୍ରବେଶ";
                else hintBar.innerHTML = "WASD / arrows — move &nbsp;&middot;&nbsp; <strong>[1-6] — auto-travel</strong> &nbsp;&middot;&nbsp; E — enter";
            }
        }

        // Clear any leftover atmosphere text unless currently auto-travelling
        if (!this.isAutoTravelling) {
            const atmoEl = document.getElementById('atmosphere-text');
            if (atmoEl) {
                atmoEl.style.opacity = '0';
                atmoEl.textContent = '';
            }
        }
    }

    _setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.ctx.imageSmoothingEnabled = true;
    }

    _isUnlocked(nodeId) {
        return true; // All unlocked for exploration
    }

    _getScaleAndOffset() {
        // Fit current map image into canvas maintaining aspect ratio
        const img = Assets.getImage(this.quest.mapImage) || Assets.getImage('overworld');
        if (!img) return { scale: 1, ox: 0, oy: 0 };
        
        const scale = Math.min(window.innerWidth / img.width, window.innerHeight / img.height);
        const ox = (window.innerWidth - img.width * scale) / 2;
        const oy = (window.innerHeight - img.height * scale) / 2;
        
        return { scale, ox, oy };
    }

    _handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const { scale, ox, oy } = this._getScaleAndOffset();
        const imgX = (mouseX - ox) / scale;
        const imgY = (mouseY - oy) / scale;
        
        this.hoverNode = null;
        for (const node of this.nodes) {
            const dist = Math.sqrt((imgX - node.x)**2 + (imgY - node.y)**2);
            if (dist < 45) {
                this.hoverNode = node;
                break;
            }
        }
        
        if (this.hoverNode && this._isUnlocked(this.hoverNode.id)) {
            this.canvas.style.cursor = 'pointer';
        } else {
            this.canvas.style.cursor = 'default';
        }
    }

    _handleClick(e) {
        if (this.hoverNode && this._isUnlocked(this.hoverNode.id)) {
            const dist = Math.sqrt((this.hoverNode.x - this.playerPos.x)**2 + (this.hoverNode.y - this.playerPos.y)**2);
            if (dist <= 40) {
                this._running = false;
                this.sceneManager.loadScene('village', { villageId: this.hoverNode.id });
            } else {
                this.startAutoTravel(this.hoverNode);
            }
        }
    }

    _handleKeydown(e) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }
        if (this.keys.hasOwnProperty(e.key)) this.keys[e.key] = true;

        // Auto-travel feature: Press quest number 1, 2, 3, 4, 5, 6 to travel & enter
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= 6) {
            e.preventDefault();
            const target = this.nodes.find(n => n.id === num);
            if (target && this._isUnlocked(target.id)) {
                this.startAutoTravel(target);
                return;
            }
        }
        
        if (e.key.toLowerCase() === 'e') {
            for (const node of this.nodes) {
                const dist = Math.sqrt((node.x - this.playerPos.x)**2 + (node.y - this.playerPos.y)**2);
                if (dist < 50 && this._isUnlocked(node.id)) {
                    this._running = false;
                    this.sceneManager.loadScene('village', { villageId: node.id });
                    break;
                }
            }
        }
    }

    _handleKeyup(e) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }
        if (this.keys.hasOwnProperty(e.key)) this.keys[e.key] = false;
    }

    _loop() {
        if (!this._running) return;
        
        const now = performance.now();
        const dt = now - this._lastTime;
        this._lastTime = now;
        
        this._update(dt);
        this._draw();
        
        requestAnimationFrame(() => this._loop());
    }

    _update(dt) {
        const manualMoving = this.keys.w || this.keys.s || this.keys.a || this.keys.d ||
            this.keys.ArrowUp || this.keys.ArrowDown || this.keys.ArrowLeft || this.keys.ArrowRight;

        if (manualMoving && this.isAutoTravelling) {
            // Cancel auto-travel immediately when player presses manual movement keys
            this.isAutoTravelling = false;
            this.targetNode = null;
            const atmoEl = document.getElementById('atmosphere-text');
            if (atmoEl) {
                atmoEl.style.opacity = '0';
                atmoEl.textContent = '';
            }
        }

        let dx = 0; let dy = 0;

        if (this.isAutoTravelling && this.targetNode) {
            const tdx = this.targetNode.x - this.playerPos.x;
            const tdy = this.targetNode.y - this.playerPos.y;
            const dist = Math.sqrt(tdx * tdx + tdy * tdy);

            if (dist <= 16) {
                // Arrived at destination! Snap to node and enter
                this.playerPos.x = this.targetNode.x;
                this.playerPos.y = this.targetNode.y;
                const destId = this.targetNode.id;
                this.isAutoTravelling = false;
                this.targetNode = null;
                const atmoEl = document.getElementById('atmosphere-text');
                if (atmoEl) {
                    atmoEl.style.opacity = '0';
                    atmoEl.textContent = '';
                }
                this._running = false;
                this.sceneManager.loadScene('village', { villageId: destId });
                return;
            }

            dx = tdx / dist;
            dy = tdy / dist;

            if (Math.abs(dx) > Math.abs(dy)) {
                this.facing = dx > 0 ? 'right' : 'left';
            } else {
                this.facing = dy > 0 ? 'down' : 'up';
            }

            this.playerPos.x += dx * this.autoTravelSpeed * (dt / 1000);
            this.playerPos.y += dy * this.autoTravelSpeed * (dt / 1000);
        } else {
            if (this.keys.w || this.keys.ArrowUp) dy -= 1;
            if (this.keys.s || this.keys.ArrowDown) dy += 1;
            if (this.keys.a || this.keys.ArrowLeft) dx -= 1;
            if (this.keys.d || this.keys.ArrowRight) dx += 1;

            if (dx !== 0 && dy !== 0) {
                const length = Math.sqrt(dx*dx + dy*dy);
                dx /= length;
                dy /= length;
            }

            if (dx > 0) this.facing = 'right';
            else if (dx < 0) this.facing = 'left';
            else if (dy > 0) this.facing = 'down';
            else if (dy < 0) this.facing = 'up';

            const stepX = dx * this.speed * (dt / 1000);
            const stepY = dy * this.speed * (dt / 1000);

            this.playerPos.x += stepX;
            this.playerPos.y += stepY;
        }
        
        // Clamp to image bounds
        const img = Assets.getImage(this.quest.mapImage) || Assets.getImage('overworld');
        if (img) {
            if (this.playerPos.x < 0) this.playerPos.x = 0;
            if (this.playerPos.x > img.width) this.playerPos.x = img.width;
            if (this.playerPos.y < 0) this.playerPos.y = 0;
            if (this.playerPos.y > img.height) this.playerPos.y = img.height;
        }
    }

    _draw() {
        const { scale, ox, oy } = this._getScaleAndOffset();
        const img = Assets.getImage(this.quest.mapImage) || Assets.getImage('overworld');
        
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (!img) return;
        
        this.ctx.save();
        this.ctx.translate(ox, oy);
        this.ctx.scale(scale, scale);
        
        this.ctx.drawImage(img, 0, 0);
        
        let nearestNode = null;
        let nearestDist = Infinity;
        const curChapters = this.progress.paths?.[this.selectedPath]?.chapters || this.progress.chapters || {};

        // Draw Nodes
        for (const node of this.nodes) {
            const unlocked = this._isUnlocked(node.id);
            const isDone = curChapters[node.id] === 'done';
            
            const dist = Math.sqrt((node.x - this.playerPos.x)**2 + (node.y - this.playerPos.y)**2);
            if (dist < 50 && unlocked) {
                nearestNode = node;
                nearestDist = dist;
            }

            // Soft glow behind the badge
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
            this.ctx.fillStyle = unlocked ? 'rgba(232, 163, 61, 0.35)' : 'rgba(20, 20, 20, 0.35)';
            this.ctx.fill();

            // Main badge
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 16, 0, Math.PI * 2);
            this.ctx.fillStyle = isDone ? '#5B9468' : (unlocked ? '#E8A33D' : '#6b7280');
            this.ctx.fill();
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = '#FAF8F4';
            this.ctx.stroke();
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeStyle = '#21201C';
            this.ctx.stroke();

            // Icon: checkmark / number / lock
            this.ctx.fillStyle = '#21201C';
            this.ctx.font = 'bold 14px "Space Mono", monospace';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            if (isDone) {
                this.ctx.fillText('✓', node.x, node.y + 1);
            } else if (unlocked) {
                this.ctx.fillText(String(node.id), node.x, node.y + 1);
            } else {
                this.ctx.fillText('🔒', node.x, node.y + 1);
            }

            // Always-visible label pill below the node
            const lang = getLanguage();
            let rawName = node.name;
            if (lang === 'hi' && node.name_hi) rawName = node.name_hi;
            else if (lang === 'od' && node.name_od) rawName = node.name_od;
            const labelText = `[${node.id}] ${rawName}`;

            this.ctx.font = 'bold 12px "Space Mono", monospace';
            const w = this.ctx.measureText(labelText).width + 18;
            this.ctx.fillStyle = 'rgba(33, 32, 28, 0.88)';
            this.ctx.fillRect(node.x - w / 2, node.y + 22, w, 22);
            this.ctx.fillStyle = unlocked ? '#FAF8F4' : '#c9c4b6';
            this.ctx.fillText(labelText, node.x, node.y + 33);
            this.ctx.textBaseline = 'alphabetic';

            // Extra highlight ring on hover
            if ((this.hoverNode === node || nearestNode === node) && unlocked) {
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
                this.ctx.lineWidth = 2;
                this.ctx.strokeStyle = '#FAF8F4';
                this.ctx.setLineDash([4, 3]);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
        }

        // Auto-Travel Trajectory & Target Reticle
        if (this.isAutoTravelling && this.targetNode) {
            const time = performance.now();
            this.ctx.save();
            
            // Animated golden dashed path line
            this.ctx.beginPath();
            this.ctx.moveTo(this.playerPos.x, this.playerPos.y);
            this.ctx.lineTo(this.targetNode.x, this.targetNode.y);
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 3;
            this.ctx.setLineDash([8, 6]);
            this.ctx.lineDashOffset = -time / 20;
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Pulsing target beacon around destination
            const targetPulse = (time % 1000) / 1000;
            this.ctx.beginPath();
            this.ctx.arc(this.targetNode.x, this.targetNode.y, 18 + targetPulse * 22, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(255, 215, 0, ${1 - targetPulse})`;
            this.ctx.lineWidth = 2.5;
            this.ctx.stroke();
            this.ctx.restore();
        }

        // Guide Banner for Node 1 if Chapter 1 is active/pending
        const firstNode = this.nodes.find(n => n.id === 1) || this.nodes[0];
        const isFirstPending = curChapters[1] !== 'done';
        if (firstNode && isFirstPending) {
            const time = performance.now();
            const pulse = (time % 1600) / 1600;

            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(firstNode.x, firstNode.y, 16 + pulse * 32, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(255, 215, 0, ${1 - pulse})`;
            this.ctx.lineWidth = 2.5;
            this.ctx.stroke();

            // Animated floating beacon arrow
            const bounce = Math.sin(time / 180) * 6;
            const arrowY = firstNode.y - 42 + bounce;
            this.ctx.fillStyle = '#FFD700';
            this.ctx.beginPath();
            this.ctx.moveTo(firstNode.x - 10, arrowY - 14);
            this.ctx.lineTo(firstNode.x + 10, arrowY - 14);
            this.ctx.lineTo(firstNode.x, arrowY);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.strokeStyle = '#21201C';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Floating banner text
            const lang = getLanguage();
            let guideText = "⚔️ Start by talking to Borin at The Forge";
            if (this.selectedPath === 'java') {
                guideText = "☕ Start by talking to Master Thorne at The Syntax Mill";
                if (lang === 'hi') guideText = "☕ सिंटैक्स मिल में मास्टर थोर्न से बात करके शुरुआत करें";
                else if (lang === 'od') guideText = "☕ ସିଣ୍ଟାକ୍ସ ମିଲରେ ମାଷ୍ଟର ଥୋର୍ଣ୍ଣ ସହ କଥା ହୋଇ ଆରମ୍ଭ କରନ୍ତୁ";
            } else if (this.selectedPath === 'dsa') {
                guideText = "🌲 Start by talking to Farmer Vance at The Array Plains";
                if (lang === 'hi') guideText = "🌲 ऐरे प्लेन्स में किसान वेंस से बात करके शुरुआत करें";
                else if (lang === 'od') guideText = "🌲 ଆରେ ପ୍ଲେନ୍ସରେ କୃଷକ ଭେନ୍ସ ସହ କଥା ହୋଇ ଆରମ୍ଭ କରନ୍ତୁ";
            } else {
                if (lang === 'hi') guideText = "⚔️ फ़ोर्ज में लोहार बोरिन से बात करके शुरुआत करें";
                else if (lang === 'od') guideText = "⚔️ ଫୋର୍ଜରେ କମାର ବୋରିନ୍ ସହ କଥା ହୋଇ ଆରମ୍ଭ କରନ୍ତୁ";
            }

            this.ctx.font = 'bold 12px "Space Mono", monospace';
            const gw = this.ctx.measureText(guideText).width + 24;
            const gx = firstNode.x - gw / 2;
            const gy = arrowY - 42;

            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
            if (this.ctx.roundRect) this.ctx.roundRect(gx + 2, gy + 3, gw, 28, 8);
            else this.ctx.rect(gx + 2, gy + 3, gw, 28);
            this.ctx.fill();

            this.ctx.fillStyle = '#21201C';
            if (this.ctx.roundRect) this.ctx.roundRect(gx, gy, gw, 28, 8);
            else this.ctx.rect(gx, gy, gw, 28);
            this.ctx.fill();

            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 1.8;
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFD700';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(guideText, firstNode.x, gy + 14);
            this.ctx.restore();
        }
        
        // Draw Player Marker using player_sprite
        this.ctx.save();
        this.ctx.translate(this.playerPos.x, this.playerPos.y);

        this.ctx.beginPath();
        this.ctx.ellipse(0, 16, 16, 6, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(0,0,0,0.28)';
        this.ctx.fill();

        const playerImg = Assets.getImage('player_sprite');
        if (playerImg) {
            const targetH = 80;
            const targetW = playerImg.width * (targetH / playerImg.height);
            
            let bounceY = 0;
            const isMoving = this.isAutoTravelling || this.keys.w || this.keys.a || this.keys.s || this.keys.d ||
                this.keys.ArrowUp || this.keys.ArrowDown || this.keys.ArrowLeft || this.keys.ArrowRight;
            if (isMoving) {
                bounceY = Math.sin(performance.now() / 90) * 3;
            }

            if (this.facing === 'left') {
                this.ctx.scale(-1, 1);
            }
            this.ctx.drawImage(playerImg, 0, 0, playerImg.width, playerImg.height, -targetW / 2, -targetH / 2 + bounceY, targetW, targetH);
        } else {
            this.ctx.beginPath();
            this.ctx.arc(0, 0, 10, 0, Math.PI*2);
            this.ctx.fillStyle = '#6EB5D6';
            this.ctx.fill();
            this.ctx.strokeStyle = '#21201C';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
        }
        this.ctx.restore();

        // Draw interaction prompt if near a node
        if (nearestNode) {
            const lang = getLanguage();
            let nodeName = nearestNode.name;
            if (lang === 'hi' && nearestNode.name_hi) nodeName = nearestNode.name_hi;
            else if (lang === 'od' && nearestNode.name_od) nodeName = nearestNode.name_od;

            let text = "E — Enter " + nodeName;
            if (lang === 'hi') text = `E — ${nodeName} में प्रवेश करें`;
            else if (lang === 'od') text = `E — ${nodeName} ରେ ପ୍ରବେଶ କରନ୍ତୁ`;

            this.ctx.font = 'bold 12px "Space Mono", monospace';
            const w = this.ctx.measureText(text).width + 16;
            this.ctx.fillStyle = '#21201C';
            this.ctx.fillRect(this.playerPos.x - w/2, this.playerPos.y - 45, w, 24);
            this.ctx.fillStyle = '#FAF8F4';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(text, this.playerPos.x, this.playerPos.y - 29);
        }

        this.ctx.restore();
    }

    destroy() {
        this._running = false;
        this.canvas.removeEventListener('click', this._onClick);
        this.canvas.removeEventListener('mousemove', this._onMouseMove);
        window.removeEventListener('keydown', this._keydownHandler);
        window.removeEventListener('keyup', this._keyupHandler);
        if (this.touchControls) {
            this.touchControls.destroy();
            this.touchControls = null;
        }
        if (this._langListener) {
            window.removeEventListener('language-changed', this._langListener);
        }
        if (this._pathListener) {
            window.removeEventListener('path-changed', this._pathListener);
        }
    }
}
