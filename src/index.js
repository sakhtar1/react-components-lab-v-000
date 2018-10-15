 import React, { Component } from 'react' // We need to import react so we can make use of its .component class
 import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends Component {

  // this function should return the JSX we want the DOM to render
   render() {
     return (
     <div class ="olderCoaster">
       <p> {"Two grannies having the time of their life!}"</p>
       <p> {"Passengers:"} </p>
     <ul>
      <li> {props.name}</li>
      <li> {props.name}</li>
     </ul>
     </div>
    )
   }
  //
}

export class InFrontOfYou extends Component {
  // your code here
  render() {
   return (
     <div>
       <p>{"You shouldnt look too far."}</p>
       <p>{"Sometimes, the solution is right in front of you."}</p>
     </div>  
   )
 }
}

export class ButcherShop extends Component {
  // your code here
  const ROTTEN_MEAT_PRODUCTS = ["Old Fish", "Sweeney Todd", "Tomatoes?"]
 
const products = [<li>{ROTTEN_MEAT_PRODUCTS[0]}</li>, <li>ROTTEN_MEAT_PRODUCTS[1]</li>, etc...]
render() {
  return (
    <div class="butcher-shop">
      <p>{"Hello! We have the following products for sale today:"}</p>
      <ul>
        { products }
      </ul>
    </div>
  )
 }
}


export class App extends Component {
  render() {
    return (
      <div id="app">
    
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
