import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

/**
 * Whether a route for `unit` can't pass through `to`, stepping on from `from`,
 * although it could move there: a path finder leaves out any tile one of these
 * rules says `true` for, unless it's where the route ends. For a tile that is
 * there to be gone round, such as one a move onto would break a treaty.
 */
export class Impassable extends Rule<[Unit, Tile, Tile], boolean> {}

export default Impassable;
