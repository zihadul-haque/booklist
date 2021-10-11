import React from "react";
// for class component use {component}
let Person = (props) =>{
    return ( 
         <div>
            <p>I am {props.name} ,I am {props.age} years old.
            <h1>Exrea Info:{props.children}</h1>
            </p>
        </div>
        )
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = {  }
//     }
//     render() { 
//         console.log(this.props)
//         return ( 
//             <div>
//                 <p>I am {this.props.name} ,I am {this.props.age} years old.
//                 <h1>Exrea Info:{this.props.children}</h1>
//                 </p>
//             </div>


//          );
//     }

// }
 
export default Person;
 