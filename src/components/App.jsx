class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: window.exampleVideoData, // maybe change this later to accodmate dta fetched from server 
      currentVideo: window.exampleVideoData[0] //this.props.searchYoutube[0]
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick() {
    this.setState({
      currentVideo: window.exampleVideoData[2]
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickMethod={this.onVideoClick}/>
        </div>
      </div>
    ); 
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
