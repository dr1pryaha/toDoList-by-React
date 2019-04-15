import React,{Component} from 'react';
import '../styles/App.css';
import EntryField from './EntryField.js';
import ButtonList from './ButtonList.js';
import ToDoList from './ToDoList.js';
 
class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.isEnterPressed = this.isEnterPressed.bind(this);
		this.state = {text: ''};
		const toDoItem = [];
		this.createToDoItem = this.createToDoItem.bind(this);
	}

	isEnterPressed(e) {
		if (e.key === 'Enter') {
			this.setState({text: ''});
		}
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	createToDoItem(e) {
		if (isEnterPressed()) {
			toDoItem.push(<ToDoList/>)
		}
	}

	render(){
		return (
			<div>
				<EntryField 
					value={this.state.text}
					onChange={this.handleChange} 
					onKeyDown={this.isEnterPressed}
				/>
				<ToDoList
					className = 'to-do-item'
				/>
				<ButtonList />
			</div>
		);
		
	}
}
 
export default App;