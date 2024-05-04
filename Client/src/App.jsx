import  { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Input from "./Components/Input";

function App() {
  const socket = io("http://localhost:3000");
  const [data, setData] = useState({});
  const [notification, setNotification] = useState(0);

  useEffect(() => {
    function connectSocket() {
      socket.on("connect", () => {
        console.log("connected to server from client- ", socket);
      });

      socket.on("notification", (count) => {
        setNotification(count);
        console.log("Count no - ",count)
      });
    }
    connectSocket();
  }, [socket]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const score = form.score.value;
    const data = {
      name,
      score,
    };

    setData(data);
    socket.emit("data", data);
  };

  return (
    <div className="container">
      <div className="notification">
        <img src="https://i.ibb.co/8NhzNLk/bell.png" alt="" />
        <p>({notification})</p>
      </div>
      <h1>React Multiplayer dashboard</h1>
      {console.log(data)}

      <form onSubmit={onSubmit}>
        <Input placeholder={"Enter your name"} name="name" />
        <br />
        <br />
        <Input placeholder={"Enter your Score"} name="score" />
        <br /> <br />
        <input type="submit" value="Submit" className={`button`} />
      </form>
    </div>
  );
}

export default App;
