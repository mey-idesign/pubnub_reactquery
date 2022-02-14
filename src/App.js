import React from "react";
import { useState } from "react";
import ChatComponent from "./ChatComponent";

const SelectUser = ({ handleChange }) => {
  return (
    <div onChange={handleChange}>
      <input type="radio" id="user1" name="users" value="User1" defaultChecked />
      <label for="user1">User1</label>
      <input type="radio" id="user1" name="users" value="User2" />
      <label for="user2">User2</label>
    </div>
  );
};

function App() {
  const [user, setUser] = useState("User1");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <SelectUser handleChange={handleChange} />
      <ChatComponent user={user} />
    </>
  );
}

export default App;
