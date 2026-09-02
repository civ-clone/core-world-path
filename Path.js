"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const PathFinderRegistry_1 = require("./PathFinderRegistry");
const Tileset_1 = require("@civ-clone/core-world/Tileset");
class Path extends Tileset_1.Tileset {
    constructor() {
        super(...arguments);
        this._movementCost = Infinity;
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
        return this._movementCost;
    }
    setMovementCost(movementCost) {
        this._movementCost = movementCost;
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
exports.default = Path;
//# sourceMappingURL=Path.js.map