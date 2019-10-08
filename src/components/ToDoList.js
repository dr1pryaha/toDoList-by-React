import React,{Component} from 'react';

class ToDoList extends Component{
	
	render(){
		return (
			<div>
				<section className = 'to-do-list'>
					{this.props.markTodoDone};
					{this.props.todoList.map((todo, index) => 
						<div key={index}>
							<div className = 'to-do-item'>
								{todo.title}
								<input id = 'chk' type = 'checkbox' className = 'checkbox'/>
									<label 
										htmlFor = 'chk'
										className={todo.isChecked ? 'fa-check-circle' : 'far fa-circle'}
										onClick={this.props.onClick}
									>
									</label>
								<i className = 'fas fa-window-close'></i>
							</div>
						</div>
					)}
				</section>
			</div>
		)
	}
}

export default ToDoList;