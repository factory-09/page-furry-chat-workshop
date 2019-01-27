'use strict';

function extJS_getArt() {
	let message, author, attach, attach_name, attach_url, out;

	$.ajax({
		url: 'https://discordapp.com/api/channels/475258834500321280/messages?limit=100',
		method: 'GET',
		dataType: 'json',
		headers: {
			'Authorization': 'Bot ' + atob('TlRNNE5qZzFPREF4TVRRME1qVTBORGMxLkR5NW9fQS5mbTlpdkxCYUt2aTlaZE5JRW9KUGtSQ0Q1V0k=')
		},
		beforeSend: function () {
		},
		success: function () {
		},
		error: function () {
		},
		complete: function () {
			$('.container').empty().append(out);
		}
	}).done(function (data) {
		message = data;
		out = '';

		let i = 0, count = 0;
		const j = message.length;

		for (; i < j; i++) {
			attach = message[i].attachments;

			let k = 0;
			const l = attach.length;

			for (; k < l; k++) {

				if (count % 2 === 0) out += '<div class="columns">';

				attach_name = attach[k].filename;
				attach_url = attach[k].url;

				if (attach[k].width === undefined) {
					return false;
				}

				out += '<div class="column"><figure class="image is-128x128"><img src="' + attach_url + '" alt="' + attach_name + '" /></figure></div>';

				if (count % 2 !== 0) out += '</div>';

				count++;

				console.log(count);
			}

		}
		if (count % 2 !== 0) out += '</div>';
	})
}

extJS_getArt();