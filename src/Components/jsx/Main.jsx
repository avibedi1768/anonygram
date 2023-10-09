import React, { useState } from 'react'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
import '../css/main.css'
import CopyLink from './CopyLink'

//import firebase
import { db } from '../../firebase'
import { set, ref, get, update } from 'firebase/database'

function Main() {

  // title
  document.title = 'Send msgs!'

  let [msg, setMsg] = useState('');
  let user = window.location.href.split('#')[1];
  var n;

  function sendmsg() {
    console.log(user);
    //if msg empty, alert
    if (msg == '') {
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
    window.location.reload()

    return


  }

  return (
    <div className='main'>
      <div className="container">
        {/* <!-- white wala --> */}
        <div id="upper">
          <i id="icon" className="fab fa-instagram"></i>
          <div>
            <p id="user">@{user}</p>
            <p id="option">I am waiting for a pickup line!!</p>
          </div>
          <span className="emoji">&#x1F609;</span>
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

        <button type="submit" className="btn" id="go" onClick={sendmsg}>
          Go <img id="white_arrow" src={Arrow1} />
          <img id="black_arrow" src={Arrow2} /> </button>
        <br />
      </div>

      <p>Get your own AskMeOut Link!</p>
      <button onClick={()=>{window.location.href='/signup'}}>Click Me</button>
    </div>
  )
}

export default Main