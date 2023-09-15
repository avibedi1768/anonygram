import { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
import '../css/signup.css'

//import firebase 
import { db } from '../../firebase';
import { set, ref } from 'firebase/database';

function Signup() {

  //title
  document.title = 'Signup'
  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  
  function send() {
    console.log(user + ' ' + pass)

    if (user == '' || pass == '') {
      alert('Please enter data');
      return;
    }

    else {
      set(ref(db, 'username/' + user + '/credentials/'), {
        password: pass,
        username: user,
        number: 0
      })

      alert('signup successful')

      async function delay() {
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.location.href = '/login';
      }

      delay();

    }
  }

  let style1 = {
    marginLeft: '-30px',
    cursor: 'pointer'
  }
  return (
    <>
      <div className='signup'>
        <div className="container">
          <h2>Sign-Up</h2>
          <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
          <p>HINT: Enter your instagram username</p>
          <br />
          <p>HEY! {user}</p>
          <br />
          <input type="password" placeholder="Password" className="inp" onChange={(e) => setPass(e.target.value)} />
          <i className="far fa-eye" id="togglePassword" style={style1}></i>

          <br /><br />
          {/* <input
            type="password"
            id="repassword"
            className="inp"
            placeholder="Re-enter Password"
          />
          <i className="far fa-eye" id="retogglePassword" style={style1}></i> */}

          <br /><br /><br />
          <button type="submit" id="btn" onClick={send}>
            Go <img id="white_arrow" src={Arrow1} />
            <img id="black_arrow" src={Arrow2} />
          </button>
          <p className="right"><Link to="/login">Already a User? Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default Signup