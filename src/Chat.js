import "./Chat.css";
import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomID } = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomID]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessge = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/avataaars/${seed}.svg`}
        />
        <div className="chat-header-info">
          <h3>{roomName}</h3>
          <p>Lase Seen at...</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message ${true && "chat-reciver"}`}>
          <span className="chat-name">Sonny</span>
          Hi sds
          <span className="chat-timestamp">3:52pm</span>
        </p>
        <p className="chat-message">Hi sds</p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessge} type="submit">
            send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
