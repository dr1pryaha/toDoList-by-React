import React,{Component} from 'react';

class EntryField extends Component{
	render(){
		return (
			<div>
			<h1>toDos</h1>
			<div className = 'head-field'>
				<input 
					type='search' 
					className = 'entry-field' 
					autoFocus />
				</div>
			</div>
		);
	}
}

export default EntryField;