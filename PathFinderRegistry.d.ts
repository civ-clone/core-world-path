import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import PathFinder from './PathFinder';
export interface IPathFinder extends IConstructorRegistry<PathFinder> {}
export declare class PathFinderRegistry
  extends ConstructorRegistry<PathFinder>
  implements IPathFinder {
  constructor();
}
export declare const instance: PathFinderRegistry;
export default PathFinderRegistry;
