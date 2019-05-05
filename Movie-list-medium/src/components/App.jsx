import AddMovie from './AddMovie.js'
import MovieList from './MovieList.js'
import SearchMovies from './searchMovies.js'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayMovies: [{ title: "Mean Girls" , watch: false},
      { title: "Hackers", watch: false },
      { title: "The Grey", watch: false },
      { title: "Sunshine", watch: false },
      { title: "Ex Machina", watch: false }],
      addedMovies: [],
      watchedMovies: [],
      toWatchMovies: [],
      filteredMovies: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.watchClick = this.watchClick.bind(this);
    this.watchedMovieClick = this.watchedMovieClick.bind(this);
    this.toWatchMovieClick = this.toWatchMovieClick.bind(this);
  }
  // Function filters the movies 
  handleSubmit(event, value) {
    let filteredMoviesArr = this.state.displayMovies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      filteredMovies: filteredMoviesArr,
      displayMovies: filteredMoviesArr,
    });
    event.preventDefault();
  }
  //Function that adds a movie to addMovieList
  handleAdd (event, newMovie) {
    this.state.addedMovies.push({title: newMovie, watch: false});
    this.setState({displayMovies: this.state.addedMovies})
    event.preventDefault();
  }
  // Function that runs when the watch button on a movie is clicked pushing it to a array
  watchClick (event, movie) {
    movie.watch = !movie.watch
    if(movie.watch === true) {
      this.state.watchedMovies.push(movie);
    }
    else if (movie.watch !== true) {
      this.state.toWatchMovies.push(movie);
    }
  }
  // Function displays only the movies that have been watched
  watchedMovieClick() {
    let watchedMovies = this.state.watchedMovies;
    for (let i = 0; i < watchedMovies.length; i++) {
      if (watchedMovies[i].watch === false) {
        watchedMovies.splice(i,1);
      }
    }
    this.setState({displayMovies: this.state.watchedMovies})
    console.log( 'watched', this.state.watchedMovies)
  }
  // Function displays only movies that havent been watched
  toWatchMovieClick() {
    let toWatch = this.state.toWatchMovies;
    for(let i = 0; i < toWatch.length; i++) {
      if (toWatch[i].watch === true) {
        toWatch.splice(i,1);
      }
    }
    this.setState({displayMovies: this.state.toWatchMovies})
    console.log('tothis.state.toWatchMovies')
  }
  render () {
    return (
      <div className='listOfMovies'>
        <h1 className="title">Movie List</h1>
        <AddMovie handleAdd= {this.handleAdd}/>
        <SearchMovies  handleSubmit= {this.handleSubmit}/>
        <button onClick= {this.watchedMovieClick}>Watched</button> <button onClick= {this.toWatchMovieClick}>Watch</button>
        <div>
          <MovieList displayMovies= {this.state.displayMovies} watchClick= {this.watchClick}/>
        </div>
      </div>
    );
  }
  };
  export default App;