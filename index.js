var React = require('react');
var ReactDOM = require('react-dom');
import './App.css';
import Index from 'index.js';

const notifItems = notifications.map((notifications) =>
  
  <div>
  	<h1>{notifications.title}</h1>
  	<p>{notifications.body}</p>
  </div>

);

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);


export default notifItems;
export default listItems;