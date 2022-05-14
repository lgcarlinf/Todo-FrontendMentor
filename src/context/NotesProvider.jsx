import { createContext, useEffect } from "react";
import { useState } from "react";
const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('');

  const handleEliminarNota = (id) => {
    const notasRestantes = notes.filter((note) => note.id !== id);
    setNotes(notasRestantes);
  };

  const handleComplete = (id) => {
    const notaActualizada = notes.map((note) => {
      if (note.id === id) {
        note.completed = !note.completed;
      }
      return note;
    });
    setNotes(notaActualizada);
  };

  const handleAllDelete = () => {
     setNotes([]);
  };

  return (
    <NotesContext.Provider value={{ notes, setNotes ,handleEliminarNota,handleComplete,handleAllDelete,theme,setTheme}}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider };

export default NotesContext;
