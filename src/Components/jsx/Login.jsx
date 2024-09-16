import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// import Arrow1 from '../imgs/Arrow 1.png'
// import Arrow2 from '../imgs/Arrow 2.png'
import '../css/login2.css';

//import firebase 
import { db } from '../../firebase';
import { ref, get } from 'firebase/database';

function Login() {

  //title
  document.title = 'Login'

  let [user, setUser] = useState('');
  let [pass, setPass] = useState('');
  let passRef = useRef();
  let [passwordShow, setPasswordShow] = useState(false);

  function match() {
    get(ref(db, 'username/' + user + '/credentials/password'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //username exists!
          const p = snapshot.val();
          console.log(p);
          //if password matches
          if (pass === p) {
            window.localStorage.setItem('user', user)
            alert("password matches");
            window.location.href = '/profile?=' + user;
          } else {
            alert("password does not match. plz try again");
            passRef.current.focus()
          }
        } else {
          alert('no user found. kindly signup');
          window.location.href = '/signup';
        }
      })
  }

  //toggle password visibility
  function passShow() {
    setPasswordShow(!passwordShow)
  }

  // let style1 = {
  //   marginLeft: '-30px',
  //   cursor: 'pointer'
  // }
  return (
    <div className='login-body'>
      <div className='login-container'>
        <div className="login-box">
          <h2>Login</h2>

          <form action="#" className='login-form'>
            <div className="login-input-box">
              <input type="text" id="login-input-username" value={user} onChange={(e) => setUser(e.target.value)} />
              <label htmlFor="login-input-username">Username</label>
            </div>

            <div className="login-input-box">
              <input ref={passRef} type={passwordShow ? 'text' : 'password'} id="login-input-password" value={pass} onChange={(e) => setPass(e.target.value)} />
              <label htmlFor="login-input-password">Password</label>
            </div>

            <div className='login-input-showPassword'>
              <input type="checkbox" onChange={passShow} style={{ width: '12px' }} /> Show Password
            </div>

            {/* <input type="checkbox" onChange={passShow} style={{ width: '16px' }} />Show password */}
            {/* <i className="far fa-eye" id="togglePassword" style={style1}></i> */}

            <button type="button" className="login-btn" onClick={match}>
              Login
              {/* <img id="white_arrow" src={Arrow1} /> */}
              {/* <img id="black_arrow" src={Arrow2} /> */}
            </button>

            <div className="signup-link">
              <p className="signup-link-link" ><Link to="/signup" style={{ color: "#0ef", textDecoration: "none" }}>New User? Sign Up</Link></p>
            </div>
          </form>

        </div>

        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 4 }}></span>
        <span style={{ "--i": 5 }}></span>
        <span style={{ "--i": 6 }}></span>
        <span style={{ "--i": 7 }}></span>
        <span style={{ "--i": 8 }}></span>
        <span style={{ "--i": 9 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 27 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 29 }}></span>
        <span style={{ "--i": 30 }}></span>
        <span style={{ "--i": 31 }}></span>
        <span style={{ "--i": 32 }}></span>
        <span style={{ "--i": 33 }}></span>
        <span style={{ "--i": 34 }}></span>
        <span style={{ "--i": 35 }}></span>
        <span style={{ "--i": 36 }}></span>
        <span style={{ "--i": 37 }}></span>
        <span style={{ "--i": 38 }}></span>
        <span style={{ "--i": 39 }}></span>
        <span style={{ "--i": 40 }}></span>
        <span style={{ "--i": 41 }}></span>
        <span style={{ "--i": 42 }}></span>
        <span style={{ "--i": 43 }}></span>
        <span style={{ "--i": 44 }}></span>
        <span style={{ "--i": 45 }}></span>
        <span style={{ "--i": 46 }}></span>
        <span style={{ "--i": 47 }}></span>
        <span style={{ "--i": 48 }}></span>
        <span style={{ "--i": 49 }}></span>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <p style={{ color: '#fff' }}>Welcome Back <span style={{ color: '#0ef', fontWeight: 600, fontSize: '1.2em' }}>{user}</span>!</p>

        <h3 style={{ color: "#fff" }}>
          <span style={{ color: '#0ef', textDecoration: 'none' }}>Anonygram</span> - Made by <Link to='https://avibedi1768.github.io' style={{ color: '#0ef', textDecoration: 'none' }}>Arsh</Link>
        </h3>
      </div>
    </div>
  )
}

export default Login