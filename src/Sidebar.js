import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

function Sidebar({ id, name, addNewChat }) {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar-chat">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
          ></SidebarChat>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
