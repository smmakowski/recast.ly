// TODO: Render the `App` component to the DOM
window.autoplay = 1;
ReactDOM.render(<App searchYouTube={window.searchYouTube} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById('app')); 
