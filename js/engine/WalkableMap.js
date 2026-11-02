/**
 * OSS Quest — Walkable Map Engine
 * Enforces road-only and plaza-only movement across all overworld maps.
 * Forests, water, mountains, and off-path terrain block movement.
 * Includes smooth multi-axis wall sliding so navigation feels responsive and natural.
 */

export class WalkableMap {
    /**
     * @param {Object} questDef - Quest definition containing roads and plazas
     */
    constructor(questDef) {
        this.questDef = questDef || {};
        this.roads = questDef.roads || [];
        this.plazas = questDef.plazas || [];
    }

    /**
     * Test whether coordinate (x, y) is on a road corridor or in an open plaza.
     * @param {number} x
     * @param {number} y
     * @returns {boolean}
     */
    isWalkable(x, y) {
        // 1. Check open plazas (villages, bridges, major intersections)
        for (let i = 0; i < this.plazas.length; i++) {
            const p = this.plazas[i];
            const dx = x - p.x;
            const dy = y - p.y;
            const r = p.r || 45;
            if (dx * dx + dy * dy <= r * r) {
                return true;
            }
        }

        // 2. Check road corridors (line segments with radius width)
        for (let i = 0; i < this.roads.length; i++) {
            const r = this.roads[i];
            const p1 = r.p1;
            const p2 = r.p2;
            const radius = r.radius || 24;
            if (this._distToSegmentSq(x, y, p1.x, p1.y, p2.x, p2.y) <= radius * radius) {
                return true;
            }
        }

        return false;
    }

    /**
     * Compute squared perpendicular distance from point P to segment [P1, P2].
     */
    _distToSegmentSq(px, py, x1, y1, x2, y2) {
        const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
        if (l2 === 0) {
            const dx = px - x1;
            const dy = py - y1;
            return dx * dx + dy * dy;
        }
        let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
        t = Math.max(0, Math.min(1, t));
        const projX = x1 + t * (x2 - x1);
        const projY = y1 + t * (y2 - y1);
        const dx = px - projX;
        const dy = py - projY;
        return dx * dx + dy * dy;
    }

    /**
     * Resolves movement from current (x, y) with attempted delta (dx, dy).
     * Implements wall-sliding: if diagonal motion is blocked by road borders,
     * checks single-axis movement along X or Y to slide smoothly along curves.
     *
     * @param {number} x - Current X
     * @param {number} y - Current Y
     * @param {number} dx - Attempted movement in X
     * @param {number} dy - Attempted movement in Y
     * @returns {{x: number, y: number}}
     */
    resolveMove(x, y, dx, dy) {
        // If current position is somehow outside bounds (e.g. from an old save),
        // allow any motion that brings the player closer to a walkable area
        const currentWalkable = this.isWalkable(x, y);
        if (!currentWalkable) {
            const nearest = this.getNearestWalkable(x, y);
            const curDistSq = (x - nearest.x)**2 + (y - nearest.y)**2;
            const targetX = x + dx;
            const targetY = y + dy;
            const targetDistSq = (targetX - nearest.x)**2 + (targetY - nearest.y)**2;
            if (targetDistSq < curDistSq || this.isWalkable(targetX, targetY)) {
                return { x: targetX, y: targetY };
            }
            return { x: nearest.x, y: nearest.y };
        }

        // 1. Full move (both X and Y)
        if (this.isWalkable(x + dx, y + dy)) {
            return { x: x + dx, y: y + dy };
        }

        // 2. Wall slide along X (horizontal component)
        if (dx !== 0 && this.isWalkable(x + dx, y)) {
            return { x: x + dx, y };
        }

        // 3. Wall slide along Y (vertical component)
        if (dy !== 0 && this.isWalkable(x, y + dy)) {
            return { x, y: y + dy };
        }

        // 4. Fully blocked: keep current position
        return { x, y };
    }

    /**
     * Returns the closest walkable point on the road network to (x, y).
     * Used for safe recovery / respawn snapping.
     */
    getNearestWalkable(x, y) {
        if (this.isWalkable(x, y)) return { x, y };

        let bestDistSq = Infinity;
        let bestPoint = { x, y };

        // Check plazas
        for (let i = 0; i < this.plazas.length; i++) {
            const p = this.plazas[i];
            const dSq = (x - p.x)**2 + (y - p.y)**2;
            if (dSq < bestDistSq) {
                bestDistSq = dSq;
                bestPoint = { x: p.x, y: p.y };
            }
        }

        // Check road segment projections
        for (let i = 0; i < this.roads.length; i++) {
            const r = this.roads[i];
            const x1 = r.p1.x, y1 = r.p1.y;
            const x2 = r.p2.x, y2 = r.p2.y;
            const l2 = (x2 - x1)**2 + (y2 - y1)**2;
            let t = l2 === 0 ? 0 : ((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / l2;
            t = Math.max(0, Math.min(1, t));
            const projX = x1 + t * (x2 - x1);
            const projY = y1 + t * (y2 - y1);
            const dSq = (x - projX)**2 + (y - projY)**2;
            if (dSq < bestDistSq) {
                bestDistSq = dSq;
                bestPoint = { x: projX, y: projY };
            }
        }

        return bestPoint;
    }
}

