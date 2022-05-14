import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NotesProvider } from "./context/NotesProvider";
import Rutas from "./Routes/Rutas";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
        <Rutas/>
    </NotesProvider>
  </React.StrictMode>
);
