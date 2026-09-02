"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PathFinder_end, _PathFinder_start, _PathFinder_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathFinder = void 0;
class PathFinder {
    constructor(unit, start, end) {
        _PathFinder_end.set(this, void 0);
        _PathFinder_start.set(this, void 0);
        _PathFinder_unit.set(this, void 0);
        __classPrivateFieldSet(this, _PathFinder_end, end, "f");
        __classPrivateFieldSet(this, _PathFinder_start, start, "f");
        __classPrivateFieldSet(this, _PathFinder_unit, unit, "f");
    }
    end() {
        return __classPrivateFieldGet(this, _PathFinder_end, "f");
    }
    generate() {
        throw new Error(`PathFinder#generate: Must be overridden in '${this.constructor.name}'.`);
    }
    start() {
        return __classPrivateFieldGet(this, _PathFinder_start, "f");
    }
    unit() {
        return __classPrivateFieldGet(this, _PathFinder_unit, "f");
    }
}
exports.PathFinder = PathFinder;
_PathFinder_end = new WeakMap(), _PathFinder_start = new WeakMap(), _PathFinder_unit = new WeakMap();
exports.default = PathFinder;
//# sourceMappingURL=PathFinder.js.map