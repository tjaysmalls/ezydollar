
import { IUpdatablePaneView } from '../../views/pane/iupdatable-pane-view';

import { IChartModelBase } from '../chart-model';
import { ISeries } from '../series';
import { CandlestickStyleOptions } from '../series-options';
import { SeriesCandlesticksPaneView } from './candlesticks-pane-view';
import { BuiltInSeriesDefinition } from './series-def';

export const candlestickStyleDefaults: CandlestickStyleOptions = {
	upColor: '#26a69a',
	downColor: '#ef5350',
	wickVisible: true,
	borderVisible: true,
	borderColor: '#378658',
	borderUpColor: '#26a69a',
	borderDownColor: '#ef5350',
	wickColor: '#737375',
	wickUpColor: '#26a69a',
	wickDownColor: '#ef5350',
};

export const candlestickSeries: BuiltInSeriesDefinition<'Candlestick'> = {
	type: 'Candlestick' as const,
	isBuiltIn: true as const,
	defaultOptions: candlestickStyleDefaults,
	createPaneView: (series: ISeries<'Candlestick'>, model: IChartModelBase): IUpdatablePaneView => new SeriesCandlesticksPaneView(series, model),
};
