import React,{Component} from 'react';

class ToDoList extends Component{
	constructor(props) {
		super(props);
		this.state = [
			{title: 'Сделать тупую херню', isChecked: true},
			{title: 'Сделать тупую херню еще раз', isChecked: false},
		];
	}
	
	render(){
		return (

			<div>
				<section className = 'to-do-list'>
					{this.state.map((todo/*, index*/) => 
						<div>
							<div onChange={this.props.onChange} /*key={index}*/ className = 'to-do-item' >
								{todo.title}
								<input id = 'chk' type = 'checkbox' className = 'checkbox'/>
								<label htmlFor = 'chk' className = 'far fa-circle'></label>
								<i className = 'fas fa-window-close'></i>
							</div>
						</div>
					)}
				</section>
			</div>
		);
	}
}

export default ToDoList;