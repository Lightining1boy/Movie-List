import AddMovie from './AddMovie.js'
import ListOfMoviesMap from './List-of-movies-map.js'
import SearchMovies from './searchMovies.js'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [
        { title: "Mean Girls" , watch: false},
        { title: "Hackers", watch: false },
        { title: "The Grey", watch: false },
        { title: "Sunshine", watch: false },
        { title: "Ex Machina", watch: false }
      ],
      filteredMovies: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleSubmit(event, value) {
    
    let filteredMoviesArr = this.state.movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({filteredMovies: filteredMoviesArr});
    event.preventDefault();
  }
  handleAdd (event, newMovie) {
    this.state.filteredMovies.push({title: newMovie, watch: false});
    this.setState({filteredMovies: this.state.filteredMovies})
    console.log(this.state.filteredMovies);
    event.preventDefault();
  }
  render () {
    return (
      <div className='listOfMovies'>
        <h1 className="title">Movie List</h1>
        <AddMovie handleAdd= {this.handleAdd}/>
        <SearchMovies  handleSubmit= {this.handleSubmit}/>
        <div>
          <ListOfMoviesMap movies= {this.state.movies} filteredMovies= {this.state.filteredMovies} />
        </div>
      </div>
    );
  }
  };
  export default App;