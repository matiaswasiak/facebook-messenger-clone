import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "matias", text: "hey guys" },
    { username: "aldo", text: "hey boys" },
    { username: "agus", text: "hey bros" },
  ]);
  const [username, setUsername] = useState("");

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    // run code here...
    // const name = prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));

    // if its blank inside [], this code runs ONCE when the app component loads
  }, []); // condition;

  const sendMessage = (e) => {
    // all the logic to send a message goes
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* messages themselves */}

      {messages.map((message) => (
        <>
          <Message username={message.username} message={message} />
        </>
      ))}
    </div>
  );
}

export default App;
