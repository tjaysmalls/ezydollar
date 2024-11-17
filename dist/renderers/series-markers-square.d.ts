import { Coordinate } from '../model/coordinate';
import { BitmapShapeItemCoordinates } from './series-markers-utils';
export declare function drawSquare(ctx: CanvasRenderingContext2D, coords: BitmapShapeItemCoordinates, size: number): void;
export declare function hitTestSquare(centerX: Coordinate, centerY: Coordinate, size: number, x: Coordinate, y: Coordinate): boolean;
