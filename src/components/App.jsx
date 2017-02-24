class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: window.exampleVideoData, // maybe change this later to accodmate dta fetched from server 
      currentVideo: window.exampleVideoData[0],
      search: 'sparky wheres satan' //this.props.searchYoutube[0]
    };

    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      })
    );
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickMethod={this.onVideoClick}/>
        </div>
      </div>
    ); 
  }

  componentDidMount() {
    this.props.searchYouTube({query: this.state.search, max: 5, key: window.YOUTUBE_API_KEY}, (videoList) => {
      this.setState({videoList: videoList, currentVideo: videoList[0]});
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
