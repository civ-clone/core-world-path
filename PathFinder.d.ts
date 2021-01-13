import Path from './Path';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export interface IPathFinder {
  end(): Tile;
  generate(): Path;
  start(): Tile;
  unit(): Unit;
}
export declare class PathFinder implements IPathFinder {
  #private;
  constructor(unit: Unit, start: Tile, end: Tile);
  end(): Tile;
  generate(): Path;
  start(): Tile;
  unit(): Unit;
}
export default PathFinder;
