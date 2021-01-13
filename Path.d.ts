import { PathFinderRegistry } from './PathFinderRegistry';
import Tile from '@civ-clone/core-world/Tile';
import { ITileset, Tileset } from '@civ-clone/core-world/Tileset';
import Unit from '@civ-clone/core-unit/Unit';
export interface IPath extends ITileset {
  end(): Tile;
  movementCost(): number;
  setMovementCost(movementCost: number): void;
  start(): Tile;
}
export declare class Path extends Tileset implements IPath {
  #private;
  end(): Tile;
  static for(
    unit: Unit,
    start: Tile,
    end: Tile,
    pathFinderRegistry?: PathFinderRegistry
  ): Path;
  movementCost(): number;
  setMovementCost(movementCost: number): void;
  push(...tiles: Tile[]): void;
  start(): Tile;
}
export default Path;
