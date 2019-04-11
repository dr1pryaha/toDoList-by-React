import React,{Component} from 'react';
import '../styles/App.css';
import EntryField from './EntryField.js';
import ButtonList from './ButtonList.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.isEnterPressed = this.isEnterPressed.bind(this);
		this.state = {text: ''};
	}

	isEnterPressed(e) {
		if (e.key === 'Enter') {
			this.setState({text: ''});
		}
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	render(){
		return (
			<div>
				<EntryField 
					value={this.state.text}
					onChange={this.handleChange} 
					onKeyPress={this.isEnterPressed}
				/>
				<ButtonList />
			</div>
	);
	}
}

export default App;