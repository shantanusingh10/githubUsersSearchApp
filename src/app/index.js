import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/List_Item'

const url = "https://api.github.com/search/users?q=";
let searchTerm = "";

class App extends Component {
	
	constructor(){
		super();

		this.state = {
			term: "",
			count: 1,
			users: []
		}
	}

	// set state to change term to the new value of term. 
	onInputChange(event){
		let newterm = event.target.value;
		console.log(newterm);
		this.setState({term: newterm});
	}


	onButtonClick(event){

		// if term is empty and user clicks submit show alert
		if(!this.state.term){
			alert("Please enter a name");
			return;
		}
		// Get current term value
		let currterm = this.state.term;
		// Fetch the user data
		fetch(url+currterm)
		.then((resp) => resp.json())
		.then((data) => {
			this.setState({users: data.items,count: data.length});
		})
	}

	render(){
		return (
			<div className="sub-container"> <span id="title">Github User Search</span> 
				<img id="titleimg" src="https://tctechcrunch2011.files.wordpress.com/2010/07/github-logo.png"/>
				<div className="inputarea">
					<input 
						placeholder = "Enter name here"
						onChange={this.onInputChange.bind(this)}
						id="search">
					</input>
					<button
						onClick = {this.onButtonClick.bind(this)}
						>Search
					</button>
				</div>
				<div className="List">
					<ListItem users={this.state.users} count = {this.state.count}/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector("#container"));