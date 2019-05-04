import ListOfMoviesMap from './MovieList.js'
class SearchMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  
  render () {
  return (
  <div>
    <form onSubmit= {(event) => this.props.handleSubmit(event,this.state.value)}>
      <label>
        Search Movie: 
        <input type="text" value= {this.state.value} onChange= {this.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
  );
  }
}
export default SearchMovies;