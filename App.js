import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import LogOut from "./components/LogOut";
import UserRedux from "./components/User/UserRedux";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/" element={<Protected Component={Home} />}></Route>
          <Route path="/todo" element={<Protected Component={Todo} />}></Route>
          <Route
            path="/user"
            element={<Protected Component={UserRedux} />}
          ></Route>
          <Route
            path="/logout"
            element={<Protected Component={LogOut} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
