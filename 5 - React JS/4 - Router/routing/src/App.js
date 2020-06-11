import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import {BrowserRouter as Router,Switch , Route } from 'react-router-dom'
import ItemDetail from './Components/ItemDetail/ItemDetail';



function App() {
  return (
    /* Wrap all of the items that need to be routed in this tag*/
    <Router>
      <div className="App">
        <NavigationBar />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <h1>Home</h1>
  );


}
export default App;
