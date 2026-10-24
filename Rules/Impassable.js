"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Impassable = void 0;
const Rule_1 = require("@civ-clone/core-rule/Rule");
/**
 * Whether a route for `unit` can't pass through `to`, stepping on from `from`,
 * although it could move there: a path finder leaves out any tile one of these
 * rules says `true` for, unless it's where the route ends. For a tile that is
 * there to be gone round, such as one a move onto would break a treaty.
 */
class Impassable extends Rule_1.default {
}
exports.Impassable = Impassable;
exports.default = Impassable;
//# sourceMappingURL=Impassable.js.map