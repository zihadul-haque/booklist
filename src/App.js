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
      {id:1, bookname:"1984" ,writer:"George Orwell"},
      {id:2, bookname:"The Da Vinci Code" ,writer:"Dan Brown"},
      {id:3, bookname:"The Alchemist" ,writer:"Paulo Coelho"}
    ],
    showBooks:true
    
  }
  toggleBooks = () => {
    this.setState({
     showBooks :!this.state.showBooks
    })
  }

  changeWithInputState = (event,index) =>{
    const book ={
      ...this.state.books[index]
       
    }
    
    book.bookname=event.target.value;
    const books=[...this.state.books] ;//copy of state object
    books[index]=book;
    this.setState({books:books})
  }


  deleteBookState =(index)=>{
    const books=[...this.state.books]
    console.log(books)
    books.splice(index,1)
    this.setState({
      books:books
    })
  }
  
  render() { 
    const style={
      border:"1px solid red",
      borderRadius:"5px",
      backgroundColor:"black",
      color:"white"
    };

    let books =null;
    if(this.state.showBooks){

      books=this.state.books.map((book,index) => {
        return(
          <Book
          bookname={book.bookname}
           writer={book.writer} 
           delete={()=>this.deleteBookState("index")}
           key={book.id} 
           inputName={(event)=>this.changeWithInputState(event,index)}/>
  
        )
      }
      )   
    }
    return (  
        <div className="App">
            <button onClick={this.toggleBooks}>Toggle Books</button>
            <h1 style={style}>Book list</h1>
            {books}
 
        </div> );
  }
}
 
export default App;


