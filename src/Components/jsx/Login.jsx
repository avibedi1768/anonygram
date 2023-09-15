import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
import '../css/login.css';

//import firebase 
import { db } from '../../firebase';
import { ref, get } from 'firebase/database';

function Login() {

  //title
  document.title = 'Login'

  // let abc = 'hahahaha'
  let [user, setUser] = useState('');
  let [pass, setPass] = useState('');

  function match() {
    get(ref(db, 'username/' + user + '/credentials/password'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //username exists!
          const p = snapshot.val();
          console.log(p);
          //if password matches
          if (pass == p) {
            alert("password matches");
            window.location.href = '/main#' + user;
          } else {
            alert("password does not match. plz try again");
          }
        } else {
          alert('no user found. kindly signup');
          window.location.href = '/signup';
        }
      })
  }

  let style1 = {
    marginLeft: '-30px',
    cursor: 'pointer'
  }
  return (
    <>
      <div className='login'>
        <div className="container">
          <h2>Login</h2>
          <br /><br /><br />
          <input type="text" placeholder="Username" id="username" value={user} onChange={(e) => setUser(e.target.value)} />
          <br /><br /><br />
          <input type="password" id="password" placeholder="Password" className="inp" value={pass} onChange={(e) => setPass(e.target.value)} />
          <i className="far fa-eye" id="togglePassword" style={style1}></i>

          <br /><br /><br /><br />
          <button type="submit" id="btn" onClick={match}>
            Go <img id="white_arrow" src={Arrow1} />
            <img id="black_arrow" src={Arrow2} /></button>
          <br />
          <p className="right"><Link to="/signup">New User? Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login