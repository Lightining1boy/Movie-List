
class AddMovie extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			newMovie: ''
		}
		this.handleAddChange = this.handleAddChange.bind(this);
	}
	handleAddChange(event) {
		this.setState({newMovie: event.target.value})
	}
	render() {
		return (
			<div>
			<form onSubmit= {(event) => this.props.handleAdd(event, this.state.newMovie)}>
				<label>
					Add Movie: 
					<input type="text" value= {this.state.newMovie} onChange= {this.handleAddChange}/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		</div>)
	}
}
export default AddMovie;