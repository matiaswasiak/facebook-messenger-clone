import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hi", "this", "is", "amazing"]);

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    // all the logic to send a message goes
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>

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
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
