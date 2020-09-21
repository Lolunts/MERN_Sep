import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {
  const [connectionMessage, setConnectionMessage] = useState("Waiting for socket connection...") // message showing whether connected or not.
  const [chatLog, setChatLog] = useState([]); // log of all messages in this chat
  const [message, setMessage] = useState(""); // message user is currently writing
  const [socket] = useState(() => io(':8000')); // establishing the socket connection

  const [joined, setJoined] = useState(false);
  const [roomName, setRoomName] = useState("");

  useEffect( () => {
    return () => socket.disconnect(true);
  }, [])

  socket.on('toeshimmy', () => setConnectionMessage("Enter a desired room name"))
  
  socket.on('typing', data => setConnectionMessage(data))

  socket.on('message', data => setChatLog([...chatLog, data]));

  const submitHandler = e => {
    e.preventDefault();
    socket.emit('message', { room: roomName, message: message });
    setChatLog([...chatLog, message]);
    setMessage('');
  }

  const changeHandler = e => {
    socket.emit('typing', { room: roomName, message: `User ${socket.id} is typing...`});
    setMessage(e.target.value);
  }

  const joinRoom = e => {
    socket.emit('joinroom', roomName);
    setJoined(true);
  }

  return (
    <div className="App">
      {
        !joined ?
        <>
          <input type="text" onChange={ e => setRoomName(e.target.value) } value={roomName}/>
          <button onClick={joinRoom}>Join</button>
        </>
        :
        <>
          <h2>{ connectionMessage }</h2>
          <ul>
            {
              chatLog.map((msg, i) =>
              <li key={i}>{msg}</li>
              )
            }
          </ul>
          <form onSubmit={submitHandler}>
            <input type="text" onChange={ changeHandler } value={ message }/>
            <br/>
            <input type="submit" value="Send Message!"/>
          </form>
        </>
        }
    </div>
  );
}

export default App;
