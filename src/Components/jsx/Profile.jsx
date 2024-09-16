import React, { useState, useEffect } from 'react'
import CopyLink from './CopyLink'
import Footer from './Footer'
import SingleMessage from './SingleMessage'

//import firebase
import { db } from '../../firebase'
import { get, ref } from 'firebase/database'

import { shareMessage } from './shareMessage'
import './../css/profile.css'

function Profile() {
  let sharableLink = window.location.href.replace('profile', 'main')

  let [msgs, setMsgs] = useState([]);
  let user = window.location.href.split('?=')[1];

  //check in local storage if user is logged in:
  let username = localStorage.getItem('user')
  if (user !== username) {
    window.location.href = '/login'
  }

  //to show msgs:
  var n;
  useEffect(() => {
    get(ref(db, 'username/' + user + '/credentials/number'))
      .then((snapshot) => {
        n = snapshot.val()
        console.log(n + ' msgs')
        console.log('username: ' + user)
        //do loop from 1 to n, and do 'get' for each message
        loop(n)
      })
  }, []);

  //for msgs: 0 to n
  function loop(n) {
    let promises = [];
    for (let i = 0; i < n; i++) {
      let promise = get(ref(db, 'username/' + user + '/messages/' + i + '/message'))
        .then((snapshot) => {
          return snapshot.val();
        });
      promises.push(promise);
    }

    Promise.all(promises).then((messages) => {
      console.log(messages);
      setMsgs(messages);
    });
  }

  return (
    <div className='profile-container'>
      <div className="profile-top">
        <h1>Hey {user}!</h1>

        {/* links */}
        <CopyLink sharableLink={sharableLink} />
        <p>You can send this link to your firends:</p>
      </div>
      <h1 style={{ textAlign: 'center' }}>Here are your messages!</h1>
      <div className="msgs-container">
        {msgs.length > 0 ? (
          <ul>
            {msgs.map((msg, index) => (
              <li key={index}>
                {/* {msg} &nbsp;&nbsp; */}
                <button
                  onClick={() => shareMessage(msg)}
                  className='profile-btn'
                >
                  Share?
                </button>
                <SingleMessage msg={msg} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No Messages :(</p>
        )}
      </div>

      <hr style={{ margin: '5vh 30vh', opacity: '0.4' }} />

      <Footer />

    </div>
  )
}

export default Profile