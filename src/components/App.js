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
		this.markTodoDone = this.markTodoDone.bind(this);
		this.state = {
			text: '', 
			todoList: [
				{title:'Сделать тупую херню', isChecked: false}, 
				{title: 'Сделать тупую херню еще раз', isChecked: false}
			]
		};
		
		//this.createToDoItem = this.createToDoItem.bind(this);
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	isEnterPressed(e) {
		if (e.key === 'Enter') {
			e.preventDefault();

			this.setState({
				todoList: [...this.state.todoList, {title:this.state.text, isChecked: false}],
				text: ''
			});
		};
	}

	markTodoDone(e) {
		var todoClass = this.state.todoList.isChecked ? true : false;
		this.setState({isChecked:{todoClass}});
		console.log('hello');
	}

	render(){
		return (
			<div>
				<EntryField 
					value={this.state.text}
					onChange={this.handleChange} 
					onKeyDown={this.isEnterPressed}
				/>
				<ButtonList />
				<ToDoList 
					todoList={this.state.todoList} 
					onClick={this.markTodoDone}
				/>
			</div>
		);
		
	}
}
 
export default App;