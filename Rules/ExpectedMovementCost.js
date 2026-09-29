"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpectedMovementCost = void 0;
const Rule_1 = require("@civ-clone/core-rule/Rule");
/**
 * What a step costing `movementCost` (from the `MovementCost` rules) is worth to
 * a route on average, for a unit with `movement` moves a turn. A path finder
 * asks this only when `movementCost > movement`, because only then can entering
 * the tile take more than one attempt. `movement` is passed in because working
 * it out is a yield calculation, and a path finder has it already.
 */
class ExpectedMovementCost extends Rule_1.default {
}
exports.ExpectedMovementCost = ExpectedMovementCost;
exports.default = ExpectedMovementCost;
//# sourceMappingURL=ExpectedMovementCost.js.map