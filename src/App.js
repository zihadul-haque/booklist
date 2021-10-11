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
      {bookname:"1984" ,writer:"George Orwell"},
      {bookname:"The Da Vinci Code" ,writer:"Dan Brown"},
      {bookname:"The Alchemist" ,writer:"Paulo Coelho"}
  ]
    
  }
  changeBookState = ()=>{
    this.setState(
      {
        books:[
          {bookname:"Nineteen Eighty Four" ,writer:"George Orwell"},
          {bookname:"The Da Vinci Code" ,writer:"Dan Brown"},
          {bookname:"Zihad the Changer" ,writer:"It's me"}
        ]
      }
    )
  }
  render() { 
    return (  
        <div className="App">
          
            <h1>Book list</h1>
            <button onClick={this.changeBookState}> Change state</button>
            
            <Book bookname={this.state.books[0].bookname} writer={this.state.books[0].writer}  />
            <Book bookname={this.state.books[1].bookname} writer={this.state.books[1].writer}  />
            <Book bookname={this.state.books[2].bookname} writer={this.state.books[2].writer}  />
           
            
            
          
        </div> );
  }
}
 
export default App;


