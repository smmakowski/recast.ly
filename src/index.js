// TODO: Render the `App` component to the DOM
window.autoplay = 1;
ReactDOM.render(<App searchYouTube={_.debounce(window.searchYouTube, 500)} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById('app')); 
