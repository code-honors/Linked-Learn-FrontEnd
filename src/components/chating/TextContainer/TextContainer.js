import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">

    {
      users
        ? (
          <div className="people">
            <h4 className="infoBar2">Online</h4>
            <div className="activeContainer">
              <h4 >
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    <img style={{ paddingRight: "8px" }} alt="Online Icon" src={onlineIcon} />
                    {name}

                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;