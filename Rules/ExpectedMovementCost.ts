import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';

/**
 * What a step costing `movementCost` (from the `MovementCost` rules) is worth to
 * a route on average, for a unit with `movement` moves a turn. A path finder
 * asks this only when `movementCost > movement`, because only then can entering
 * the tile take more than one attempt. `movement` is passed in because working
 * it out is a yield calculation, and a path finder has it already.
 */
export class ExpectedMovementCost extends Rule<
  [Unit, number, number],
  number
> {}

export default ExpectedMovementCost;
