import React from 'react'
import "../stylesheets/Book.css"
const Book = (props) =>{
    return(
        <div className="Book" onClick={props.delete}>
            <h3  > Book:{props.bookname} </h3>
            <h4>Writer:{props.writer} </h4>
            <input type="text" onChange={props.inputName} value={props.bookname}/>
        </div>
    )
}
export default Book;