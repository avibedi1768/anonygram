import React, { useState, useEffect } from 'react'
// import LoadMsg from './LoadMsg'

//import firebase
import { db } from '../../firebase'
import { get, ref } from 'firebase/database'

function Profile() {
  let [msgs, setMsgs] = useState([]);
  let user = window.location.href.split('#')[1];

  //first we will do for an example: raghav
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
    <div>
      {/* {<LoadMsg msg={user} />} */}
      <h1>Hey {user}!</h1>
      {/* <button onClick={show}>check</button><br /> */}

      {msgs.length > 0 ? (
        <ul>
          {msgs.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default Profile