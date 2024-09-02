import { ISeriesApi } from '../../api/iseries-api';

import { SeriesType } from '../../model/series-options';

import { SeriesPrimitiveAdapter } from '../series-primitive-adapter';
import { SeriesMarkersPrimitive } from './primitive';
import { SeriesMarker } from './types';

class SeriesMarkersPrimitiveWrapper<HorzScaleItem> extends SeriesPrimitiveAdapter<HorzScaleItem, unknown, SeriesMarkersPrimitive<HorzScaleItem>> {
	public constructor(series: ISeriesApi<SeriesType, HorzScaleItem>, primitive: SeriesMarkersPrimitive<HorzScaleItem>, markers?: SeriesMarker<HorzScaleItem>[]) {
		super(series, primitive);
		if (markers) {
			this.setMarkers(markers);
		}
	}
	public setMarkers(markers: SeriesMarker<HorzScaleItem>[]): void {
		this._primitive.setMarkers(markers);
	}

	public markers(): readonly SeriesMarker<HorzScaleItem>[] {
		return this._primitive.markers();
	}
}

/**
 * A function to create a series markers primitive.
 *
 * @param series - The series to which the primitive will be attached.
 *
 * @param markers - An array of markers to be displayed on the series.
 *
 * @example
 * ```js
 * import { createSeriesMarkers } from 'lightweight-charts';
 *
 *	const seriesMarkersPrimitive = createSeriesMarkers(
 *		series,
 *		[
 *			{
 *				color: 'green',
 *				position: 'inBar',
 * 				shape: 'arrowDown',
 *				time: 1556880900,
 *			},
 *		]
 *	);
 *  // and then you can modify the markers
 *  // set it to empty array to remove all markers
 *  seriesMarkersPrimitive.setMarkers([]);
 *
 *  // `seriesMarkersPrimitive.markers()` returns current markers
 * ```
 */
export function createSeriesMarkers<HorzScaleItem>(
	series: ISeriesApi<SeriesType, HorzScaleItem>,
	markers?: SeriesMarker<HorzScaleItem>[]
): SeriesMarkersPrimitiveWrapper<HorzScaleItem> {
	const wrapper = new SeriesMarkersPrimitiveWrapper(series, new SeriesMarkersPrimitive<HorzScaleItem>());
	if (markers) {
		wrapper.setMarkers(markers);
	}
	return wrapper;
}
