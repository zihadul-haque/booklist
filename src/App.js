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
  changeBookState = (newBookName)=>{
    this.setState(
      {
        books:[
          {bookname:newBookName ,writer:"George Orwell"},
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
            <button onClick={this.changeBookState.bind(this,"Nineteen Eighty-Four")}> Change state</button>
            
            <Book bookname={this.state.books[0].bookname} writer={this.state.books[0].writer}  />
            <Book bookname={this.state.books[1].bookname} writer={this.state.books[1].writer}  />
            <Book bookname={this.state.books[2].bookname} writer={this.state.books[2].writer} change={this.changeBookState.bind(this,"Eighty Four")}  />
           
            
            
          
        </div> );
  }
}
 
export default App;


