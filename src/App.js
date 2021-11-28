//! https://btholt.github.io/complete-intro-to-react-v6/error-boundaries

import React from "react";
import { StrictMode, useState  } from "react";
import ThemeContext from "./ThemeContext";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";



// const App = () => {
//   return React.createElement(
//     "div",
//     {}, //! any attribute that u can think of in css
//     [
//       React.createElement("h1", {}, "Adopt me!"),

//       React.createElement(Pet, {
//         name: "Luna",
//         animal: "Dog",
//         breed: "Havanese",
//       }), //! render -> X3
//       React.createElement(Pet, { name: "Lucy", animal: "Dog", breed: "Furry" }), //! render -> X3
//       React.createElement(Pet, {
//         name: "Tom",
//         animal: "Cat",
//         breed: "Street Cat",
//       }), //! render -> X3
//     ]
//   );
// };

const App = () => {

  const theme = useState("green");
  return (
    <ThemeContext.Provider value = {theme}>
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));


//! yet another way...
//? ReactDOM.render(<App/>, document.getElementById("root"));