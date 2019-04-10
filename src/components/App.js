import React,{Component} from 'react';
import '../styles/App.css';
import EntryField from './EntryField.js';
import ButtonList from './ButtonList.js';
 
class App extends Component{
  render(){
    return (
    	<div>
    		<EntryField />
    		<ButtonList />
    	</div>
    );
  }
}
 
export default App;