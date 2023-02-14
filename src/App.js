import HeadNav from "./Components/HeadNav/HeadNav";
import ShowImage from "./Components/ShowImage/ShowImage";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>

            <Route exact path={'/photos/:key'}>
              <HeadNav></HeadNav>
              <ShowImage></ShowImage>
            </Route>

            <Route exact path={'/'}>
              <HeadNav></HeadNav>
            </Route>

            <Route path={'*'}>
              <p>404 Not found!</p>
            </Route>



          </Switch>
        </Router>
      </header>
      <footer>
        <p className="text-center"><small>Author : Antu Saha</small></p>
      </footer>
    </div>
  );
}

export default App;
