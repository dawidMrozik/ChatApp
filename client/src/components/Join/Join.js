import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [nameErrors, setNameErrors] = useState(null)
  const [roomErrors, setRoomErrors] = useState(null)

  const validate = e => {
    if (!name) setNameErrors('You must provide your name')
    else setNameErrors(null)

    if (!room) setRoomErrors('You must provide room name')
    else setRoomErrors(null)

    if (!name || !room) e.preventDefault()
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            placeholder={nameErrors ? nameErrors : 'Enter your chat name'}
            className={`joinInput${nameErrors ? ' error' : ''}`}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={
              roomErrors ? roomErrors : 'Enter room you want to join'
            }
            className={`joinInput mt-20${roomErrors ? ' error' : ''}`}
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link onClick={e => validate(e)} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join
