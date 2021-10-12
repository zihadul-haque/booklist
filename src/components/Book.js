import React from 'react'
let Book = (props) =>{
    return(
        <div>
            <h3 onClick={props.change} > Book:{props.bookname} </h3>
            <h4>Writer:{props.writer} </h4>
            <input type="text" onChange={props.inputName} value={props.bookname}/>
        </div>
    )
}
export default Book;