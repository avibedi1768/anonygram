import React, { useState } from 'react'
// import Arrow1 from '../imgs/Arrow 1.png'
// import Arrow2 from '../imgs/Arrow 2.png'
import '../css/main.css'
// import CopyLink from './CopyLink'
import { Link } from 'react-router-dom'

//import firebase
import { db } from '../../firebase'
import { set, ref, get, update } from 'firebase/database'

function Main() {

  // title
  document.title = 'Send msgs!'

  let [msg, setMsg] = useState('');
  let index = window.location.href.indexOf('?=')
  let index2 = window.location.href.indexOf('&')
  let user;
  console.log(index + ' ' + index2)
  if (index2 === -1) {
    user = window.location.href.split('?=')[1]
    console.log(user)
  } else {
    user = window.location.href.substring(index + 2, index2)
  }
  var n;

  function sendmsg() {
    console.log(user);
    //if msg empty, alert
    if (msg === '') {
      alert('plz enter something bruh!')
      return;
    }

    // first get number
    get(ref(db, '/username/' + user + '/credentials/number'))
      .then((snapshot) => {
        n = snapshot.val()
        console.log(n + ' inside')
        sendToFirebase(n);
      })
    // console.log(n + ' outside')

  }

  function sendToFirebase(n) {
    //update number
    update(ref(db, 'username/' + user + '/credentials'), {
      number: n + 1
    })

    //send msg
    set(ref(db, 'username/' + user + '/messages/' + n), {
      message: msg
    })

    alert('message sent successfully!')
    // window.location.reload()
    setMsg('')

    return


  }

  return (
    <div className='overall'>
      <div className='main'>
        <div className="container">
          {/* <!-- white wala --> */}
          <div id="upper">
            <i id="icon" className="fab fa-instagram"></i>
            <div>
              <p id="user">@{user}</p>
              <p id="option">Chaliye shuru karte hai!!</p>
            </div>
            <span className="emoji">&#x1F31D;</span>
          </div>
          {/* <!-- input text --> */}
          <div id="lower">
            <textarea
              type="text"
              rows="4"
              id="msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Send your message anonymously"
            ></textarea>
          </div>
        </div>

        <div id="buttons">
          {/* <button type="submit" className="btn" id="sugg">Suggestions</button> */}

          <button type="button" className="btn" id="go" onClick={sendmsg}>
            Go
            {/* <img id="white_arrow" src={Arrow1} /> */}
            {/* <img id="black_arrow" src={Arrow2} />  */}
          </button>
          <br />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <p style={{ color: '#fff', fontSize: '1.1em' }} >Get your own <Link style={{ color: '#fff', fontWeight: 600, fontSize: '1.2em', textDecoration: 'none' }} to='/signup' >Anonygram</Link> Link!</p>
        {/* <button onClick={() => { window.location.href = '/signup' }}>Click Me</button> */}

        {/* <br /><br /> */}
        <h3>Made by <Link to='https://avibedi1768.github.io' style={{ color: '#fff', textDecoration: 'none' }}>Arsh</Link></h3>
      </div>
    </div>
  )
}

export default Main