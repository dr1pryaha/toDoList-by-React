import React,{Component} from 'react';
import '../styles/App.css';
import EntryField from './EntryField.js';
import ButtonList from './ButtonList.js';
import ToDoList from './ToDoList.js';
//import update from 'react-addons-update'
 


class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.isEnterPressed = this.isEnterPressed.bind(this);
		this.markTodoDone = this.markTodoDone.bind(this);
		this.state = {
			text: '', 
			todoList: [
				{id: 1, title:'Сделать тупую херню', isChecked: false}, 
				{id: 2, title: 'Сделать тупую херню еще раз', isChecked: false}
			]
		};
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	isEnterPressed(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			//let currentId = this.state.todoList.map(todo => todo.id === todo.id+1);

			this.setState({
				todoList: [...this.state.todoList, { title: this.state.text, isChecked: false}],
				text: ''
			}); console.log(this.state.todoList)
		}; 
	}

	markTodoDone(id) {
		const currentTodo = this.state.todoList.find(todo => todo.id === id);
		currentTodo.isChecked = !currentTodo.isChecked;

		this.setState({
			todoList: [...this.state.todoList, currentTodo]
		});
	}
	
	/*(todo) {
		this.setState({
			todoList: this.state.todoList.map((todo) =>
				({ title: todo.title, isChecked: (todo.isChecked === false) ? true : false}))
		})
		console.log(todo)
	}*/

	destroyTodo(todo){
		this.setState({
			todoList: this.state.todoList.map((todo) => 
				{todo === undefined})
		});
		console.log("mouse down");
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
					onMouseDown={this.destroyTodo}
				/>
			</div>
		);
		
	}
}

export default App;