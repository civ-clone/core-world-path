"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.PathFinderRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const PathFinder_1 = require("./PathFinder");
class PathFinderRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(PathFinder_1.default);
    }
}
exports.PathFinderRegistry = PathFinderRegistry;
exports.instance = new PathFinderRegistry();
exports.default = PathFinderRegistry;
//# sourceMappingURL=PathFinderRegistry.js.map