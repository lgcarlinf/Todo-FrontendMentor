import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NotesProvider } from "./context/NotesProvider";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AllNotes from "./components/AllNotes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<AllNotes />} />
          <Route path='active' element={<AllNotes/>}/>
          <Route path='completed' element={<AllNotes/>}/>
        </Route>
      </Routes>
    </Router>
    </NotesProvider>
  </React.StrictMode>
);
