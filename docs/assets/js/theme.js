'use strict';

function extJS_getArt() {
	let message, attach, attach_name, attach_url, out;

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

		let i = 0;
		const j = message.length;

		for (; i < j; i++) {
			attach = message[i].attachments;

			let k = 0;
			const l = attachment.length;

			for (; k < l; k++) {
				attach_name = attach[k].filename;
				attach_url = attach[k].url;

				if (attach[k].width === undefined) {
					out += '';
				} else {
					out += '<figure class="image"><img src="' + url + '" alt="' + name + '" /></figure>';
				}
			}
		}
	})
}

extJS_getArt();