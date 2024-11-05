// eslint-env node

/**
 * @type {import('size-limit').SizeLimitConfig}
*/
// eslint-disable-next-line import/no-default-export
export default [
	{
		name: 'ESM',
		path: 'dist/lightweight-charts.production.mjs',
		limit: '45.00 KB',
		import: '*',
		ignore: ['fancy-canvas'],
		brotli: true,
	},
	{
		name: 'ESM createChart',
		path: 'dist/lightweight-charts.production.mjs',
		limit: '45.00 KB',
		import: '{ createChart }',
		ignore: ['fancy-canvas'],
		brotli: true,
	},
	{
		name: 'ESM createChartEx',
		path: 'dist/lightweight-charts.production.mjs',
		limit: '45.00 KB',
		import: '{ createChartEx }',
		ignore: ['fancy-canvas'],
		brotli: true,
	},
	{
		name: 'ESM Standalone',
		path: 'dist/lightweight-charts.standalone.production.mjs',
		limit: '50.00 KB',
		import: '*',
		brotli: true,
	},
	{
		name: 'Standalone',
		path: 'dist/lightweight-charts.standalone.production.js',
		limit: '50.00 KB',
		brotli: true,
	},
	{
		name: 'Plugin: Text Watermark',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ createTextWatermark }',
		ignore: ['fancy-canvas'],
		limit: '2.00 KB',
		brotli: true,
	},
	{
		name: 'Plugin: Image Watermark',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ createImageWatermark }',
		ignore: ['fancy-canvas'],
		limit: '2.00 KB',
		brotli: true,
	},
	{
		name: 'Plugin: Series Markers',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ createSeriesMarkers }',
		ignore: ['fancy-canvas'],
		limit: '4.08 KB',
		brotli: true,
	},
	{
		name: 'Series: LineSeries',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ LineSeries }',
		ignore: ['fancy-canvas'],
		limit: '2.7 KB',
		brotli: true,
	},
	{
		name: 'Series: BaselineSeries',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ BaselineSeries }',
		ignore: ['fancy-canvas'],
		limit: '3.2 KB',
		brotli: true,
	},
	{
		name: 'Series: AreaSeries',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ AreaSeries }',
		ignore: ['fancy-canvas'],
		limit: '3.2 KB',
		brotli: true,
	},
	{
		name: 'Series: BarSeries',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ BarSeries }',
		ignore: ['fancy-canvas'],
		limit: '2.5 KB',
		brotli: true,
	},
	{
		name: 'Series: CandlestickSeries',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ CandlestickSeries }',
		ignore: ['fancy-canvas'],
		limit: '2.5 KB',
		brotli: true,
	},
	{
		name: 'Series: HistogramSeries',
		path: 'dist/lightweight-charts.production.mjs',
		import: '{ HistogramSeries }',
		ignore: ['fancy-canvas'],
		limit: '2.5 KB',
		brotli: true,
	},
];
