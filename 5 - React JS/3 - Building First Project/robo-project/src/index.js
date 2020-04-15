import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import { robots } from './robots' ;
// we use { }because "robots" is not exporting only one file but multiple objects
import CardList from './CardList'

ReactDOM.render(
	<CardList />
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
