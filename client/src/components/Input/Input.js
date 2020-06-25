import React from 'react'

import Send from '../svgs/Send'
import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      placeholder="Type a message..."
      value={message}
      type="text"
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>
      <Send />
    </button>
  </form>
)

export default Input
