import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";

// page imports
import HomePage from "./pages/home/HomePage";
import CreatePage from "./pages/create/CreatePage";
import RecipePage from "./pages/recipe/RecipePage";

// component imports
import Navbar from "./components/Navbar";

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <Switch>
          <Route path="/" exact>
            <HomePage searchFilter={searchFilter} />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>

          <Route path="/recipe/:id">
            <RecipePage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
