import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'

import './TextContainer.css'

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <h1>
      Welcome to {room} chat room!
      <span role="img" aria-label="emoji">
        ❤️
      </span>
    </h1>
    {users ? (
      <div>
        <h2>People currently chatting:</h2>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
)

export default TextContainer
