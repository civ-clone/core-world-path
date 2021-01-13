import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import PathFinder from './PathFinder';

export interface IPathFinder extends IConstructorRegistry<PathFinder> {}

export class PathFinderRegistry
  extends ConstructorRegistry<PathFinder>
  implements IPathFinder {
  constructor() {
    super(PathFinder);
  }
}

export const instance: PathFinderRegistry = new PathFinderRegistry();

export default PathFinderRegistry;
