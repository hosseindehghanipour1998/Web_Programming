
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'
import './App.css'


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

// =======================================================
/*
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
      //*/
/*
      //F2
      let filteredRobotsObject = this.getfilteredRobotsNames();


      return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots = {filteredRobotsObject} />
      </div>
  );
  }

}
*/


/*
props are the STATES given by a parent to it's child. A child can never change the valu of the prop received from it's father.
so the first thing we need to do is to change the state the parent is going to give the child.
*/


// ========================================================================

// lifecyclehooks : functions that are automatically called in order while the app is being rendered or started and there is no need
//for us to call the functions.
// Visit : https://reactjs.org/docs/react-component.html


import React,{Component} from 'react' ;
import Scroll from'./Scroll';

class App extends Component {

  constructor(){
    super();
    this.state = {
      // we don't want to use the predefined JSON
      robots:[],
      searchfield : ''
    } ;
  }

  onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value});
  }

  // This is a LifeCycleHook 
  componentDidMount(){
    // Make HTTP Request
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => {
      return response.json();
    })
    .then(users => {
      this.setState({robots:users});
    });
  }

  getfilteredRobotsNames = () => {
    let allRobots = this.state.robots ;
    let searchField = this.state.searchfield ;
    const filteredRobots = allRobots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return filteredRobots ;
  }

  // let's make a <scroll> object tag.
  render(){

      const filteredRobotsObject = 
      this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      });
      // If it takes time to load the page it's better to show a header than nothing.
      if ( this.state.robots.length === 0 ){
        return (<h1> Loading ... </h1>);
      }

      else {
        return (

          <div className="tc">
            <h1 className="f1">Robot Friends</h1>

            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll> 
              <CardList robots = {filteredRobotsObject} />
            </Scroll>
          </div>
         );
      }

  }
}

export default App;