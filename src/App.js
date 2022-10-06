import "./App.css";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/chats/:person" element={<ChatScreen />} />
          <Route exact path="/chats" element={<Chats />} />
          <Route exact path="/" element={<TinderCards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
