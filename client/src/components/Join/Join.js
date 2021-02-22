import React, { useState } from "react";
import { Link } from "react-router-dom";

//using React hooks to use state and life style methods on function based components. Decalre hooks only inside function based components

import './Join.css';

const Join = () => {
  const [name, setName] = useState(""); //parameter 1 is a variable, 2nd parameter is a setter function, set equal to the hook
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
