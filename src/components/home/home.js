  import React from 'react';
  import './home.css';
  import Login from '../login/logIn';
  import coWorker from '../../assets/co-work.jpeg';


const Home =() => {
   return (
   <main style={{ marginTop: '14px' }}>
   <div className="container">
     <img id="workers" src={coWorker} />
     <div className="sub_container">
       <p className="title">For the best file Modification</p>
       <p className="sub_title">Local website for modify ﬁles for our employees  This service make ofﬁce work more easy </p>
       <a className="submitLink">
         <button className="submit__Button"
         onClick={Login}
         >Log In</button>
       </a>
     </div>
   </div>
 </main>
   )
  }

  export default Home;
