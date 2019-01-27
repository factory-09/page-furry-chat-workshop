'use strict';

function extJS_getArt() {
	let attachment, message, out, name, url;

	$.ajax({
		url: 'https://discordapp.com/api/channels/303556951672094722/messages',
		method: 'GET',
		dataType: 'json',
		cache: false,
		headers: {
			'Authorization': 'Bot ' + atob('TlRNNE5qZzFPREF4TVRRME1qVTBORGMxLkR5NW9fQS5mbTlpdkxCYUt2aTlaZE5JRW9KUGtSQ0Q1V0k=')
		}
	}).done(function (data) {
		message = data;
		out = '';

		let i = 0;
		const j = message.length;

		for (; i < j; i++) {
			attachment = message[i].attachments;

			let k = 0;
			const l = attachment.length;

			for (; k < l; k++) {
				url = attachment[k].url;
				name = attachment[k].filename;

				if (attachment[k].width === undefined) {
					out += url + name;
				} else {
					out += url + name;
				}
			}
		}

		$('#page-wrapper').empty().append(out);
	})
}

extJS_getArt();