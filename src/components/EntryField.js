import React,{Component} from 'react';

class EntryField extends Component{
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
		const text = this.state.text;
		return (
			<div>
    			<h1>toDos</h1>
    			<div className = 'head-field'>
        			<input 
        			type='search' 
        			value={text} 
        			onChange={this.handleChange} 
        			onKeyPress={this.isEnterPressed} 
        			className = 'entry-field' 
        			autoFocus />
    			</div>
    		</div>
		);
	}
}

export default EntryField;