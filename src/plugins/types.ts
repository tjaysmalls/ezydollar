import { ISeriesApi } from '../api/iseries-api';

import { SeriesType } from '../model/series-options';

/**
 * Represents a horizontal alignment.
 */
export type HorzAlign = 'left' | 'center' | 'right';
/**
 * Represents a vertical alignment.
 */
export type VertAlign = 'top' | 'center' | 'bottom';

type DefaultOptionsType<T> = Record<string, string | number | boolean | T>;
export interface IPluginApiBase<Options extends DefaultOptionsType<string>> {
	series(): ISeriesApi<SeriesType>;
	detach(): void;
	options(): Options;
	applyOptions(options: Options | Partial<Options>): void;
}