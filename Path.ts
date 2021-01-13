import {
  PathFinderRegistry,
  instance as pathFinderRegistryInstance,
} from './PathFinderRegistry';
import PathFinder from './PathFinder';
import Tile from '@civ-clone/core-world/Tile';
import { ITileset, Tileset } from '@civ-clone/core-world/Tileset';
import Unit from '@civ-clone/core-unit/Unit';

export interface IPath extends ITileset {
  end(): Tile;
  movementCost(): number;
  setMovementCost(movementCost: number): void;
  start(): Tile;
}

export class Path extends Tileset implements IPath {
  #movementCost: number = Infinity;

  end(): Tile {
    return this.entries()[this.length - 1];
  }

  static for(
    unit: Unit,
    start: Tile,
    end: Tile,
    pathFinderRegistry: PathFinderRegistry = pathFinderRegistryInstance
  ): Path {
    // If there are lots of `PathFinder`s here, this could take aaages, so probably best to only have one registered at
    // a time, but this mechanism avoids and hard-coding
    const [path]: Path[] = pathFinderRegistry
      .entries()
      .map(
        (PathFinderImplementation: typeof PathFinder): PathFinder =>
          new PathFinderImplementation(unit, start, end)
      )
      .map((pathFinder: PathFinder): Path => pathFinder.generate())
      .sort((a: Path, b: Path): number => a.movementCost() - b.movementCost());
    if (!path) {
      return path;
    }

    // the first tile is the source tile, so we can remove it.
    path.shift();

    return path;
  }

  movementCost(): number {
    return this.#movementCost;
  }

  setMovementCost(movementCost: number): void {
    this.#movementCost = movementCost;
  }

  push(...tiles: Tile[]) {
    tiles.forEach((tile: Tile): void => {
      const top: Tile = this.end();

      if (this.length > 0 && !tile.isNeighbourOf(top)) {
        throw new TypeError(
          `Tile#push: Invalid element passed, ${tile.x()},${tile.y()} is not a neighbour of ${top.x()},${top.y()}.`
        );
      }

      super.push(tile);
    });
  }

  start(): Tile {
    return this.entries()[0];
  }
}

export default Path;
