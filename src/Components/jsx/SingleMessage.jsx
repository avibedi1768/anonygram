import React, { useState } from 'react'

function SingleMessage({ msg }) {

  const [hovered, setHovered] = useState(false)
  const [btnClick, setBtnClick] = useState(false)
  var btnMessage = btnClick ? 'hide' : 'show'
  const paraMsg = (btnMessage === 'hide') ? msg : 'show the message!'

  // function getRandomColor() {
  //   const letters = '0123456789ABCDEF'
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)]
  //   }
  //   return color
  // }

  const subtleColors = [
    '#264653', '#2a9d8f', '#e76f51', '#1d3557', '#457b9d',
    '#2d6a4f', '#2b2d42', '#8d99ae', '#023047', '#8ecae6',
    '#001219', '#005f73', '#0a9396', '#94d2bd', '#4a4e69',
    '#22223b', '#9a031e', '#ae2012', '#00509e', '#0f4c5c',
    '#01497c', '#013a63', '#001f54', '#0d3b66', '#8338ec',
    '#4e148c', '#2f3e46', '#355070', '#6d597a', '#264653'
  ];

  function getRandomColor() {
    const index = Math.floor(Math.random() * subtleColors.length)
    return subtleColors[index]
  }

  const styling = {
    position: 'relative',
    width: '300px',
    height: '300px',
    padding: '20px',
    backgroundColor: getRandomColor(),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    borderRadius: '15px'
  }

  const btnStyle = {
    backgroundColor: hovered ? '#fff' : 'transparent',
    border: 'none',
    color: hovered ? '#222' : '#fff',
    borderBottom: '1px solid #fff',
    borderRadius: '5px',
    padding: '3px 10px',
    transition: '0.4s',
    cursor: 'pointer'
  }

  return (
    <div className='msg-box' style={styling}
    // onMouseEnter={() => setHovered(true)}
    // onMouseLeave={() => setHovered(false)}
    >
      <p>{paraMsg}</p>
      <button
        onClick={() => { setBtnClick(!btnClick) }}
        style={btnStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >{btnMessage}</button>
    </div>
  )
}

export default SingleMessage