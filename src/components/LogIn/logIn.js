
import blog from '../../assets/BlogPost.png';
import contact from '../../assets/contact.png';
import eyeOff from '../../assets/eye-off.png';
import React from 'react';

const logIn = () => (
    <body>
        <div className="conatiner">
            <input id="email" type="email" placeholder="Enter your username" />
            <input id="pass" type="password" placeholder="Enter your password" />

        </div>
    </body>
)

export default logIn








// import React, { Component } from 'react';
// import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
// // import './logIn.css';

//  class Login extends Component {
  
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             {/* <ControlLabel>Email</ControlLabel> */}
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             {/* <ControlLabel>Password</ControlLabel> */}
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
