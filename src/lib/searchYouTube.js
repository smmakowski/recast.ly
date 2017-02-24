var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {q: options.query, maxResults: options.max, key: options.key, videoEmbeddable: true, part: 'snippet', type: 'video'},
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      callback(data.items);
    },
    error: function(data) {
      console.log('ajax call failed' + data);
    }
  });
};

window.searchYouTube = searchYouTube;

