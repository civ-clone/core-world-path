"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathFinder = void 0;
class PathFinder {
    constructor(unit, start, end) {
        this._end = end;
        this._start = start;
        this._unit = unit;
    }
    end() {
        return this._end;
    }
    generate() {
        throw new Error(`PathFinder#generate: Must be overridden in '${this.constructor.name}'.`);
    }
    start() {
        return this._start;
    }
    unit() {
        return this._unit;
    }
}
exports.PathFinder = PathFinder;
exports.default = PathFinder;
//# sourceMappingURL=PathFinder.js.map