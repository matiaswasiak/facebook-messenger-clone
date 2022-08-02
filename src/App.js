import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    // run code here...
    // const name = prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));

    // if its blank inside [], this code runs ONCE when the app component loads
  }, []); // condition;

  const sendMessage = (e) => {
    // all the logic to send a message goes
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

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

      <FlipMove>
        {messages.map((message) => (
          <>
            <Message username={message.username} message={message} />
          </>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
