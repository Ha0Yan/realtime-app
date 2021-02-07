import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <h1>assdssdas hh</h1>
      <div className="app-body">
        {/*  Router */}
        <Router>
          <Sidebar />
          {/*  page changes */}
          <Switch>
            <Route path="/rooms/:roomID">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
