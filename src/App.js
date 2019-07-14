import React, { Component } from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();

    this.state={
      mymonster:[],
      SearchField: ""
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(myresponse => myresponse.json())
      .then(myusers => this.setState({mymonster:myusers}))

    }

  render(){
    const {mymonster , SearchField} = this.state; //getting state of the two arrays
    /*const heymonster=this.state.mymonster;
    const sField=this.state.SearchField; these two lines means the same as the above one line*/ 

    const filteredmonsters=mymonster.filter(sMonster => sMonster.name.toLowerCase().includes( SearchField.toLowerCase() ))
    

    return(<div className="App">
    <h1>Monsters</h1>
    <SearchBox placeHolder="search text comes here" HandleChange={ e => this.setState(
        {SearchField:e.target.value})} />

    <CardList passmonster={filteredmonsters /*this.state.mymonster*/ } /> 
    

  </div>)
  }
  
}

export default App;
