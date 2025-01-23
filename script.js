$(document).ready(function(){

	const key = 'AIzaSyD85uY1z0XHm8upzNfhWAm5ELYY6Nv-25A';

	const playlistId = 'PLR1AMXXKzITu11LgZC9VcA8Fy30r7_YkB';

	const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

	const options = {
		part: 'snippet',
		key: key,
		maxResults: 40,
		playlistId: playlistId
	}

	function loadVids(){
		$.getJSON(URL, options, function(data){
			//const arrayRandom = Math.floor(Math.random() * data.items.length);
			//console.log(arrayRandom);
			const id = data.items[0].snippet.resourceId.videoId;
			//console.log(id);
			mainVid(id);
			resultsLoop(data);
		})
	}

	function getRandomVid(){
		const button = document.getElementById('randBtn');
		console.log(button);
	}

	// $('#randomBtn').on('click', function(){
	// 	$.getJSON(URL, options, function(data){
	// 		var arrayRandom = Math.floor(Math.random() * data.items.length);
	// 		//console.log(arrayRandom);
	// 		const id = data.items[arrayRandom].snippet.resourceId.videoId;
	// 		//console.log(id);
	// 		mainVid(id);
	// 		resultsLoop(data);
	// 	})
	// });


	function mainVid(id){
		$('.responsive-embed').html(`

			<iframe width="420" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

		`);
	}

	function resultsLoop(data){

		$.each(data.items, function(i, item){

			const thumb = item.snippet.thumbnails.medium.url;
			const title = item.snippet.title.substring(0,40);
			const description = item.snippet.description.substring(0, 70);
			const vid = item.snippet.resourceId.videoId;

			$('main').append(`
				<article class="item" data-key="${vid}">

					<img src="${thumb}" alt="#" class="thumb">

					<div class="details">
						<h4>${title}</h4>
						<p>${description} ...</p>
					</div>
				</article>
			`);
		});

	}


	$('main').on('click', 'article', function(){
		const id = $(this).attr('data-key');
		mainVid(id);
	});	


	loadVids();

	const frameHeight = $('.resp-container').outerHeight();

	$('main').css('padding-top', frameHeight + 140 + 'px');

	$(window).resize(function(){

		const frameHeight = $('.resp-container').outerHeight();

		$('main').css('padding-top', frameHeight + 140 + 'px');

	});

	function playlistHeight() {
		const vidContainer = document.getElementById('vid-container').offsetHeight;
		const playlistContainer = document.getElementById('playlist-container');
		const windowWidth = window.innerWidth;

		playlistContainer.style.height = vidContainer + 'px';

		console.log(windowWidth);
	}

	playlistHeight();
	
	window.addEventListener('resize', playlistHeight);
	

});