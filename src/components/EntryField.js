import React,{Component} from 'react';

class EntryField extends Component{
	render(){
		console.log(this.props);
		return (
			<div>
				<h1>toDos</h1>
				<div className = 'head-field'>
					<input 
						type = 'search' 
						className = 'entry-field' 
						autoFocus
						value = {this.props.text}
						onChange={this.props.onChange} 
						onKeyDown={this.props.onKeyDown}
					/>
				</div>
			</div>
		);
	}
}

export default EntryField;