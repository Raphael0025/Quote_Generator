import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
      colors: [],
    }
  }

  render(){
    return (
    <div className="App">
      <div id='quote-box'>
        <div id='text'></div>
        <div id='author'></div>
        <div id='new-quote'></div>
        <div id='tweet-quote'></div>
        
      </div>
    </div>
  );}
}

export default App;