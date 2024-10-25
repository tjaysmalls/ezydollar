import { IUpdatablePaneView } from '../../views/pane/iupdatable-pane-view';

import { IChartModelBase } from '../chart-model';
import { Series, SeriesOptionsInternal } from '../series';
import { BarStyleOptions } from '../series-options';
import { SeriesBarsPaneView } from './bars-pane-view';
import { SeriesDefinition } from './series-def';

export const barStyleDefaults: BarStyleOptions = {
	upColor: '#26a69a',
	downColor: '#ef5350',
	openVisible: true,
	thinBars: true,
};
const seriesType = 'Bar';
const createPaneView = (series: Series<typeof seriesType>, model: IChartModelBase): IUpdatablePaneView => new SeriesBarsPaneView(series, model);

export const barSeries: SeriesDefinition<typeof seriesType> = {
	type: seriesType,
	isBuiltIn: true as const,
	defaultOptions: barStyleDefaults,
	createSeries: (model: IChartModelBase, options: SeriesOptionsInternal<typeof seriesType>): Series<typeof seriesType> => {
		return new Series<typeof seriesType>(model, seriesType, options, createPaneView);
	},
};
