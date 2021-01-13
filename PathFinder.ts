import Path from './Path';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export interface IPathFinder {
  end(): Tile;
  generate(): Path;
  start(): Tile;
  unit(): Unit;
}

export class PathFinder implements IPathFinder {
  #end: Tile;
  #start: Tile;
  #unit: Unit;

  constructor(unit: Unit, start: Tile, end: Tile) {
    this.#end = end;
    this.#start = start;
    this.#unit = unit;
  }

  end(): Tile {
    return this.#end;
  }

  generate(): Path {
    throw new Error(
      `PathFinder#generate: Must be overridden in '${this.constructor.name}'.`
    );
  }

  start(): Tile {
    return this.#start;
  }

  unit(): Unit {
    return this.#unit;
  }
}

export default PathFinder;
