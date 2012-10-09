var Default = {};

Default.load_page = function (url) {
	if (typeof url != 'string') return false;

	var filename = '/view' + url + '.ctp';

	$.get(filename, function (data) {
		document.getElementById('content').innerHTML = data;
	});
};

(function () {
});