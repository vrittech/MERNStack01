import { useContext, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { WsContext } from "../App";
import instance from "../config/axios";

export default function Message() {
    useEffect(() => {
        //Get the messages from the server.
    }, [])
    const [searchParams] = useSearchParams();
    const user_id = searchParams.get('user_id')
    const myUserId = searchParams.get('myUserId')
    const ws = new WebSocket(`ws://localhost:8000?user_id=${myUserId}`);
  
  const inputRef = useRef("");
  const [messages, setMessages] = useState(["1", "Hello"]);
  ws.onmessage = (event) => {
    setMessages((prev) => [...prev, event.data])
  };

  const handleSendMessage = async () => {
   
   const response =  await instance.post('/messages',{
        message : inputRef.current.value,
        user_id
    })
    inputRef.current.value = ''
   
   setMessages((prev) => [...prev, response.data.message])
  };
  return (
    <>
      <input placeholder="Send a message....." ref={inputRef} />
      <button onClick={handleSendMessage}>Send message</button>
      <div>
        {messages.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
      </div>
    </>
  );
}
