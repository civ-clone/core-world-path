"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Path_movementCost;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const PathFinderRegistry_1 = require("./PathFinderRegistry");
const Tileset_1 = require("@civ-clone/core-world/Tileset");
class Path extends Tileset_1.Tileset {
    constructor() {
        super(...arguments);
        _Path_movementCost.set(this, Infinity);
    }
    end() {
        return this.entries()[this.length - 1];
    }
    static for(unit, start, end, pathFinderRegistry = PathFinderRegistry_1.instance) {
        // If there are lots of `PathFinder`s here, this could take aaages, so probably best to only have one registered at
        // a time, but this mechanism avoids and hard-coding
        const [path] = pathFinderRegistry
            .entries()
            .map((PathFinderImplementation) => new PathFinderImplementation(unit, start, end))
            .map((pathFinder) => pathFinder.generate())
            .sort((a, b) => a.movementCost() - b.movementCost());
        if (!path) {
            return path;
        }
        // the first tile is the source tile, so we can remove it.
        path.shift();
        return path;
    }
    movementCost() {
        return __classPrivateFieldGet(this, _Path_movementCost, "f");
    }
    setMovementCost(movementCost) {
        __classPrivateFieldSet(this, _Path_movementCost, movementCost, "f");
    }
    push(...tiles) {
        tiles.forEach((tile) => {
            const top = this.end();
            if (this.length > 0 && !tile.isNeighbourOf(top)) {
                throw new TypeError(`Tile#push: Invalid element passed, ${tile.x()},${tile.y()} is not a neighbour of ${top.x()},${top.y()}.`);
            }
            super.push(tile);
        });
    }
    start() {
        return this.entries()[0];
    }
}
exports.Path = Path;
_Path_movementCost = new WeakMap();
exports.default = Path;
//# sourceMappingURL=Path.js.map