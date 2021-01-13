"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _end, _start, _unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathFinder = void 0;
class PathFinder {
    constructor(unit, start, end) {
        _end.set(this, void 0);
        _start.set(this, void 0);
        _unit.set(this, void 0);
        __classPrivateFieldSet(this, _end, end);
        __classPrivateFieldSet(this, _start, start);
        __classPrivateFieldSet(this, _unit, unit);
    }
    end() {
        return __classPrivateFieldGet(this, _end);
    }
    generate() {
        throw new Error(`PathFinder#generate: Must be overridden in '${this.constructor.name}'.`);
    }
    start() {
        return __classPrivateFieldGet(this, _start);
    }
    unit() {
        return __classPrivateFieldGet(this, _unit);
    }
}
exports.PathFinder = PathFinder;
_end = new WeakMap(), _start = new WeakMap(), _unit = new WeakMap();
exports.default = PathFinder;
//# sourceMappingURL=PathFinder.js.map