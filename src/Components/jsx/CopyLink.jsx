import React, { useState } from 'react'

function CopyLink(val) {

  const [btn1Hover, setBtn1Hover] = useState(false);
  const [btn2Hover, setBtn2Hover] = useState(false);

  const parentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px'
  }

  const copyBoxStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    borderBottom: '1px solid #fff',
    padding: '3px 10px'
  }

  const copyBtn1Style = {
    backgroundColor: btn1Hover ? '#fff' : 'transparent',
    color: btn1Hover ? '#000' : '#fff',
    border: 'none',
    borderBottom: '1px solid #fff',
    borderTop: '1px solid #fff',
    borderRadius: '5px',
    padding: '2px 10px',
    cursor: 'pointer',
    transition: '0.3s'
  }
  const copyBtn2Style = {
    backgroundColor: btn2Hover ? '#fff' : 'transparent',
    color: btn2Hover ? '#000' : '#fff',
    border: 'none',
    borderBottom: '1px solid #fff',
    borderTop: '1px solid #fff',
    borderRadius: '5px',
    padding: '2px 10px',
    cursor: 'pointer',
    transition: '0.3s'
  }

  function copyToClipboard() {
    console.log('copyToClipboard started')
    const input = document.createElement('input')
    input.value = val.sharableLink
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    alert('copied to clipboard')
  }

  function openLink() {
    window.location.href = val.sharableLink
  }

  return (
    <div className='copy-link-parent' style={parentStyle}>
      <input type="text" defaultValue={val.sharableLink} style={copyBoxStyle} />
      <button
        onClick={copyToClipboard} style={copyBtn1Style}
        onMouseEnter={() => { setBtn1Hover(true) }}
        onMouseLeave={() => { setBtn1Hover(false) }}
      >
        Copy
      </button>

      <button
        onClick={openLink} style={copyBtn2Style}
        onMouseEnter={() => { setBtn2Hover(true) }}
        onMouseLeave={() => { setBtn2Hover(false) }}
      >
        Open Link
      </button>
    </div>
  )
}

export default CopyLink