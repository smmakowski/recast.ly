var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    //key: options.key,
    //q: options.query,
    //maxResults: options.max,
    success: (data) => {
      console.log(data);
      callback(data.items);
    },
    error: (data) => {
      console.log('ajax call failed' + data);
    }
  });
};

window.searchYouTube = searchYouTube;