import MovieListEntry from './MovieListEntry.js'
var MovieList = (props) => {
		return (
			<div>
				{props.displayMovies.map(movie => {
					return <MovieListEntry movie = {movie} watchClick={props.watchClick}/>
				})}
			</div>)
}
export default MovieList;
