import React from 'react'
let Book = (props) =>{
    return(
        <div>
            <h3> Book:{props.bookname} </h3>
            <h4>Writer:{props.writer} </h4>
        </div>
    )
}
export default Book;