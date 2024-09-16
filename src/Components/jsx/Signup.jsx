import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// import Arrow1 from '../imgs/Arrow 1.png'
// import Arrow2 from '../imgs/Arrow 2.png'
import '../css/signup2.css'

//import firebase 
import { db } from '../../firebase';
import { get, set, ref } from 'firebase/database';

function Signup() {

  //title
  document.title = 'Signup'
  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let [passChecker, setPassChecker] = useState('')
  let passRef = useRef()
  let [passwordShow, setPasswordShow] = useState(false)

  function check() {
    console.log(user + ' ' + pass)

    //check for empty values
    if (user === '' || pass === '') {
      alert('Please enter valid info');
      return;
    }

    //check password length
    if (pass.length < 8) {
      alert('Password must be at least 8 letters long')
      passRef.current.focus()
      return;
    }

    //check for repeating username
    get(ref(db, 'username/' + user))
      .then((snapshot) => {
        //username already exists
        if (snapshot.exists()) {
          alert('Username already exists. Please try some other username!')
          return;
        }
        //unique username
        else {
          send()
        }
      })

  }

  //all checks passed
  function send() {
    set(ref(db, 'username/' + user + '/credentials/'), {
      password: pass,
      username: user,
      number: 0
    })

    alert('signup successful')

    async function delay() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      window.localStorage.setItem('user', user)
      window.location.href = '/profile?=' + user
    }

    delay()
  }

  //check pass length at real time
  function checkPassLength() {
    if (pass.length <= 1) {
      setPassChecker('')
    }
    else if (pass.length >= 1 && pass.length < 7) {
      setPassChecker('"MUST BE 8 LETTERS LONG!!"')
    } else {
      setPassChecker('')
    }
  }

  //toggle password visibility
  function passShow() {
    setPasswordShow(!passwordShow)
  }


  return (
    <div className='signup-body'>
      <div className="signup-container">
        <div className="signup-box">
          <h2>Sign-Up</h2>

          <form action="#" className='signup-form'>
            <div className='signup-input-box'>
              <input id='signup-input-username' type="text" onChange={(e) => setUser(e.target.value)} />
              <label htmlFor='signup-input-username'>Username</label>
            </div>

            {/* <p>HINT: Enter your instagram username</p> */}
            {/* <p>HEY {user}!</p> */}

            <div className='signup-input-box'>
              <input id='signup-input-password' ref={passRef} type={passwordShow ? 'text' : 'password'} onChange={(e) => { setPass(e.target.value); checkPassLength() }} />
              <label htmlFor='signup-input-password'>Password {passChecker}</label>
            </div>

            <div className='signup-input-showPassword'>
              <input type="checkbox" onChange={passShow} style={{ width: '12px' }} /> Show Password
            </div>

            {/* <p>{passChecker}</p> */}

            <button type="button" className="signup-btn" onClick={check}>
              Signup
              {/* <img id="white_arrow" src={Arrow1} />
            <img id="black_arrow" src={Arrow2} /> */}
            </button>

            <div className="login-link">
              <p><Link className='login-link-link' to="/login">Already a User? Login</Link></p>
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

      {/* <br /><br /><br /> */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <p style={{ color: "#fff" }}>HEY <span style={{ color: "#0ef", fontWeight: "600", fontSize: "1.2em" }}>{user}</span>!</p>

        <h3 style={{ color: "#fff" }}>
          <span style={{ color: '#0ef', textDecoration: 'none' }}>Anonygram</span> - Made by <Link to='https://avibedi1768.github.io' style={{ color: '#0ef', textDecoration: 'none' }}>Arsh</Link>
        </h3>
      </div>
    </div>
  )
}

export default Signup