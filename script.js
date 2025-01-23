$(document).ready(function () {
    const API_KEY = 'AIzaSyD85uY1z0XHm8upzNfhWAm5ELYY6Nv-25A';
    const PLAYLIST_ID = 'PLR1AMXXKzITu11LgZC9VcA8Fy30r7_YkB';
    const API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    const options = {
        part: 'snippet',
        key: API_KEY,
        maxResults: 40,
        playlistId: PLAYLIST_ID
    };

    /**
     * Load videos from YouTube API
     */
    function loadVids() {
        $.getJSON(API_URL, options)
            .done(function (data) {
                if (data.items && data.items.length > 0) {
                    const firstVidId = data.items[0]?.snippet?.resourceId?.videoId || '';
                    if (firstVidId) {
                        mainVid(firstVidId);
                    } else {
                        console.error('No valid video ID found for the first item.');
                    }
                    resultsLoop(data);
                } else {
                    console.error('No items found in the API response.');
                }
            })
            .fail(function (jqxhr, textStatus, error) {
                console.error('YouTube API request failed: ', textStatus, error);
            });
    }

    /**
     * Update the main video player with the given video ID
     * @param {string} id - YouTube video ID
     */
    function mainVid(id) {
        if (!id) {
            console.error('Invalid video ID');
            return;
        }

        const iframe = `
            <iframe 
                width="420" 
                height="315" 
                src="https://www.youtube.com/embed/${id}" 
                frameborder="0" 
                allow="encrypted-media" 
                allowfullscreen>
            </iframe>`;
        $('.responsive-embed').html(iframe);
    }

    /**
     * Populate video thumbnails and details
     * @param {object} data - API response data
     */
    function resultsLoop(data) {
        $('main').empty(); // Clear previous results to prevent duplicates

        data.items.forEach(function (item) {
            const thumb = item.snippet?.thumbnails?.medium?.url || ''; // Ensure thumbnail exists
            const title = item.snippet?.title?.substring(0, 40) || 'No Title';
            const description = item.snippet?.description?.substring(0, 70) || 'No Description';
            const vid = item.snippet?.resourceId?.videoId || '';

            if (!thumb || !vid) {
                console.warn('Skipping item with missing properties:', item);
                return;
            }

            // Build the video thumbnail and details
            const article = `
                <article class="item" data-key="${vid}">
                    <img src="${thumb}" alt="Video Thumbnail" class="thumb">
                    <div class="details">
                        <h4>${title}</h4>
                        <p>${description} ...</p>
                    </div>
                </article>`;
            $('main').append(article);
        });
    }

    /**
     * Adjust playlist container height to match video container
     */
    function playlistHeight() {
        const vidContainer = document.getElementById('vid-container');
        const playlistContainer = document.getElementById('playlist-container');

        if (!vidContainer || !playlistContainer) {
            console.warn('Containers not found for adjusting playlist height.');
            return;
        }

        playlistContainer.style.height = vidContainer.offsetHeight + 'px';
    }

    // Event listener for playlist height on resize
    window.addEventListener('resize', playlistHeight);

    // Event listener for main video updates
    $('main').on('click', 'article', function () {
        const id = $(this).data('key');
        mainVid(id);
    });

    // Initial setup
    loadVids();
    playlistHeight();

    // Adjust main padding based on video container height
    function adjustMainPadding() {
        const frameHeight = $('.resp-container').outerHeight();
        $('main').css('padding-top', frameHeight + 140 + 'px');
    }

    adjustMainPadding();
    $(window).resize(adjustMainPadding);
});
