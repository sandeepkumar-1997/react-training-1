import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import EditUser from "./UpdateUser";
import adduser from "./Adduser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-user" component={adduser} />
        <Route exact path="/update-user" component={EditUser} />
      </BrowserRouter>
    </div>
  );
};

export default App;
