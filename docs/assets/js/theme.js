'use strict';

function extJS_getWorkshop() {
	let message, author, attach, attach_name, attach_url, timestamp, date, out;

	$.ajax({
		url: 'https://discordapp.com/api/channels/475258834500321280/messages?limit=100',
		method: 'get',
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
			$('#data-art').empty().append(out);
		}
	}).done(function (data) {
		message = data;
		out = '';

		let i = 0;
		const j = message.length;

		for (; i < j; i++) {
			author = message[i].author;
			attach = message[i].attachments;
			timestamp = message[i].timestamp;
			date = new Date(message[i].timestamp).toISOString().split('T')[0];

			let k = 0;
			const l = attach.length;

			for (; k < l; k++) {
				attach_name = attach[k].filename;
				attach_url = attach[k].url;

				if (attach[k].width === undefined) {
					out += '';
				} else {
					out += '<div class="grid-cell">';
					out += '<div class="card">';
					out += '<div class="card-image"><figure class="image is-4by3"><a href="' + attach_url + '" data-fancybox="gallery"><img src="' + attach_url + '" alt="' + attach_name + '" /></a></figure></div>';
					out += '<div class="card-content">';
					out += '<div class="media">';
					out += '<div class="media-left"><figure class="image is-64x64"><img src="https://cdn.discordapp.com/avatars/' + author.id + '/' + author.avatar + '.png" alt="" /></figure></div>';
					out += '<div class="media-content"><h4 class="title is-4">' + author.username + '</h4><p class="subtitle is-6"><time datetime="' + timestamp + '">' + date + '</time></p></div>';
					out += '</div>';
					out += '</div>';
					out += '</div>';
					out += '</div>';
				}
			}
		}
	})
}

extJS_getWorkshop();
