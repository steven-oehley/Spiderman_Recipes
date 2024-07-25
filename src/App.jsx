import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
        <Routes>
          <Route path="/" element={<HomePage searchFilter={searchFilter} />} />

          <Route path="/create" element={<CreatePage />} />

          <Route path="/recipe/:id" element={<RecipePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
