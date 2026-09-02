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
  private _end: Tile;
  private _start: Tile;
  private _unit: Unit;

  constructor(unit: Unit, start: Tile, end: Tile) {
    this._end = end;
    this._start = start;
    this._unit = unit;
  }

  end(): Tile {
    return this._end;
  }

  generate(): Path {
    throw new Error(
      `PathFinder#generate: Must be overridden in '${this.constructor.name}'.`
    );
  }

  start(): Tile {
    return this._start;
  }

  unit(): Unit {
    return this._unit;
  }
}

export default PathFinder;
