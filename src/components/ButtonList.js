import React,{Component} from 'react';

class ButtonList extends Component{
	render(){
		return (
			<div className = 'button-list'>
				<button className="button all-btn" value="all">Все</button>
				<button className="button not-done-btn" value="not-done-btn">Несделанные</button>
				<button className="button done-btn" value="done-btn">Cделанные</button>
			</div>
		);
	}
}

export default ButtonList;