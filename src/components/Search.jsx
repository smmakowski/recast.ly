var Search = ({handleSearchInputChange}) => {
  // var onSearchChange = () => {
  //   props.onSearchChange();
  // };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e) => handleSearchInputChange(e.target.value)}/>
      <button className="btn hidden-sm-down" onClick={
        function() {
          if ( window.autoplay === 1) {
            window.autoplay = 0;
          } else if (window.autoplay === 0) {
            window.autoplay = 1;
          } } }>
        <span className="glyphicon glyphicon-search">Not a search thing(Autoplay Toggler); Autoplay changes will be reflected during next search</span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;