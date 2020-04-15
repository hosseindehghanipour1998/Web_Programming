
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'
/*
import React from 'react';
function App() {
  return (
    <div className="tc">
      <h1>Robot Friends</h1>
      <SearchBox />
      <CardList robots = {robots} />
    </div>
  );
}*/


import React,{Component} from 'react'

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots:robots,
      searchfield : ''
    } ;
  }

  onSearchChange = (event) =>{
    //console.log(event.target.value);
    this.setState({searchfield:event.target.value});
  }

  getfilteredRobotsNames = () => {
    let allRobots = this.state.robots ;
    let searchField = this.state.searchfield ;
    const filteredRobots = allRobots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return filteredRobots ;
  }

  render(){
      // You Can use Either F1 or F2
      
      //F1
      /*
      const filteredRobotsObject = 
      this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      });
      */

      //F2
      let filteredRobotsObject = this.getfilteredRobotsNames();


      return (
      <div className="tc">
        <h1>Robot Friends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots = {filteredRobotsObject} />
      </div>
  );
  }

}

/*
props are the STATES given by a parent to it's child. A child can never change the valu of the prop received from it's father.
so the first thing we need to do is to change the state the parent is going to give the child.
*/















export default App;