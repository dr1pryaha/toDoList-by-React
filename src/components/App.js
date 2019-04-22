import React,{Component} from 'react';
import '../styles/App.css';
import EntryField from './EntryField.js';
import ButtonList from './ButtonList.js';
import ToDoList from './ToDoList.js';
 
var todoItems = [
		{index: 1, title: "Сделать тупую херню", isChecked: false},
		{index: 2, title: "Сделать тупую херню еще раз", isChecked: false},
		{index: 3, title: "Ну, и еще разок сделать тупую херню", isChecked: false}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.isEnterPressed = this.isEnterPressed.bind(this);
		this.state = {text: '',
		todoItems: todoItems,
	};
		
		//this.createToDoItem = this.createToDoItem.bind(this);
	}
	
	isEnterPressed(e) {
		if (e.key === 'Enter') {
			this.setState({
				todoItems: todoItems,
				text: ''});
		};
		{todoItems.map((todo/*, index*/) => 
						<div>
							<div onKeyDown={this.isEnterPressed} /*key={index}*/ className = 'to-do-item' >
								{todo.title}
								<input id = 'chk' type = 'checkbox' className = 'checkbox'/>
								<label htmlFor = 'chk' className = 'far fa-circle'></label>
								<i className = 'fas fa-window-close'></i>
							</div>
						</div>
		)};
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	/*createToDoItem(e) {
		if (isEnterPressed()) {
			toDoItem.push(<ToDoList/>)
		}
	}*/

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
					onKeyDown={this.isEnterPressed}
				/>
			</div>
		);
		
	}
}
 
export default App;