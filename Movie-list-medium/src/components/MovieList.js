import App from './App.js';
var MovieList = (props) => {
	
	if (props.filteredMovies.length !== 0) {
		return (
			<div>
				{props.filteredMovies.map(movie => {
					
					return <div key={movie.title}>{movie.title} </div>
				})}
			</div>)
	}
	else {
		return (
			<div>
				{props.movies.map(movie => {
					return <div key={movie.title}>{movie.title} </div>
				})}
			</div>)
		}
}
export default MovieList;
