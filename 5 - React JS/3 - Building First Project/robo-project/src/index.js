import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// ========== Method 1 ==================
/*
import Card from './Card';
ReactDOM.render(
	<Card />
,
  document.getElementById('root')
);

*/


//import { robots } from './robots' ;
// we use { }because "robots" is not exporting only one file but multiple objects

// ============== Method 2 =================
/* 
import CardList from './CardList'

ReactDOM.render(
	<CardList />
,
  document.getElementById('root')
);

*/

// ============ Method 3 ================
import App from './App'
ReactDOM.render(
	<App />
,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
