define(function() {

	//temporary GA.
	window.GoogleAnalyticsObject = 'ga';
	window.ga = function () { (window.ga.q = window.ga.q || []).push(arguments); };
	window.ga.l = 1 * new Date();

	window.ga('create', 'UA-18728567-2', 'lucasmonteverde.com');
	window.ga('send', 'pageview');

	//final GA loader
	require(['//www.google-analytics.com/analytics.js']);

	return function () {
		window.ga.apply(this, arguments);
	};
});

/* define([ 'http://www.google-analytics.com/ga.js' ], function ( ga ) {
	ga('create', 'UA-18728567-2', 'lucasmonteverde.com');
	ga('send', 'pageview');
}); */