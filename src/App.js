import React, { Component } from 'react';


import Book from "./components/Book"
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
  state={
    books:[
      {boolname:"1984" ,writer:"George Orwell"},
      {boolname:"The Da Vinci Code" ,writer:"Dan Brown"},
      {boolname:"The Alchemist" ,writer:"Paulo Coelho"}
  ]
    
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }
  render() { 
    return (  
        <div className="App">
          
            <h1>Book list</h1>
            
            <Book bookname={this.state.books[0].bookname} writer={this.state.books[0].writer}  />
            <Book bookname={this.state.books[1].bookname} writer={this.state.books[1].writer}  />
            <Book bookname={this.state.books[2].bookname} writer={this.state.books[2].writer}  />
           
            
            
          
        </div> );
  }
}
 
export default App;


