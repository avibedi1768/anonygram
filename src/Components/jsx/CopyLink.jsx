import React from 'react'

function CopyLink(val) {

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
    <div>
      <input type="text" defaultValue={val.sharableLink} />
      <button onClick={copyToClipboard}>Copy</button>
      <button onClick={openLink}>Open Link</button>
    </div>
  )
}

export default CopyLink