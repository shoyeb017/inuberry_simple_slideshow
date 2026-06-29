import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Presentation from "./pages/Presentation";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Home Page */}
        <Route
            path="/"
            element={<Home/>}
        />


        <Route

            path="/presentation/:folder"

            element={<Presentation/>}

        />

        {/* Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;