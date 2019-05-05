

const MovieListEntry = (props) => {
  return<div key={props.movie.title}>
    <div>{props.movie.title} <button onClick= {(event) => props.watchClick(event, props.movie)}>Watch</button></div> 
    
  </div>
}
export default MovieListEntry;