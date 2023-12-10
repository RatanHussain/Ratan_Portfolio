/** @format */

var form = document.getElementById('sheetdb-form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch(form.action, {
		method: 'POST',
		body: new FormData(document.getElementById('sheetdb-form')),
	})
		.then((response) => response.json())
		.then(() => {
			// you can put any JS code here
			location.reload();
		});
});
