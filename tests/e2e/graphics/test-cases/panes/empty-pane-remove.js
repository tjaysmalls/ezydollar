function generateBar(i, startValue, target) {
	const step = (i % 20) / 1000;
	const base = i + startValue;
	target.open = base * (1 - step);
	target.high = base * (1 + 2 * step);
	target.low = base * (1 - 2 * step);
	target.close = base * (1 + step);
}

function generateData(startValue) {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		const item = {
			time: time.getTime() / 1000,
		};
		time.setUTCDate(time.getUTCDate() + 1);

		generateBar(i, startValue, item);
		res.push(item);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addBarSeries();
	const secondSeries = chart.addBarSeries({ pane: 1 });

	const startValue = Math.floor(container.getBoundingClientRect().height / 100) * 100;

	mainSeries.setData(generateData(startValue));
	secondSeries.setData(generateData(startValue + 10));
	try {
		chart.removeSeries(mainSeries);
	} catch (error) {
		console.error(error);
	}
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				console.assert(chart.getPaneElements().length === 1, 'Pane should be removed');
				resolve();
			} catch (error) {
				reject(error);
			}
		}, 100);
	});
}
