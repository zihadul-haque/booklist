import React, { Component } from 'react';
import Book from "./Book.js"
import booklist from "../assets/booklist.js";
class MainComponet extends Component{

    state={
        books:booklist,
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

export default MainComponet;