import "./App.css";
import Home from "./pages/Home";
import UserState from "./context/UserState";

function App() {
  return (
    <div className="App">
      <UserState>
        <Home />
      </UserState>
    </div>
  );
}

export default App;
