import React, { Component } from 'react';


import Book from "./component/Book.js"
import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <div>
//         <h1>Hello world!</h1>
//         <p>I am {props.name} age:{props.age}</p>
//         <Person/>
//       </div>
//     </div>
//   );
// }
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }
  render() { 
    return (  
        <div className="App">
          
            <h1>Book list</h1>
            
            <Book bookname="1984" writer="George"  />
            <Book bookname="The vinci code" writer="Dan Brown"  />
            <Book bookname="The Alchemist" writer="Paulo Coelho"  />
            
            
          
        </div> );
  }
}
 
export default App;


