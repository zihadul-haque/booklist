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
  deleteBookState =(index)=>{
    const books=this.state.books
    books.splice(index,1)
    this.setState({
      books:books
    })
  }
  changeWithInputState = event =>{
    this.setState(
      {
        books:[
          {bookname: event.target.value ,writer:"George Orwell"},
          // document object model event.target.value
          {bookname:"The Da Vinci Code" ,writer:"Dan Brown"},
          {bookname:"Zihad the Changer" ,writer:"It's me"}
        ]
      }
    )
  }
  render() { 
    const style={
      border:"1px solid red",
      borderRadius:"5px",
      backgroundColor:"black",
      color:"white"
    };
    const books=this.state.books.map((book,index) => {
      return(
        <Book
        bookname={book.bookname}
         writer={book.writer} 
         delete={()=>this.deleteBookState("index")}/>

      )
       
     
    })
    return (  
        <div className="App">
          
            <h1 style={style}>Book list</h1>
            {books}
            
            
          
        </div> );
  }
}
 
export default App;


