import React, { useContext, useEffect, useState } from "react";
import NotesContext from "../context/NotesProvider";

const Header = () => {
  const [note, setNote] = useState("");
  const { notes, setNotes,theme,setTheme } = useContext(NotesContext);
  const id = Math.random().toString(29).slice(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(note.trim() === ""){
      return
    }

    setNotes([...notes, { id, note, completed: false }]);
    setNote("");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className=" flex flex-col p-6 pt-10 sm:w-4/5 sm:m-auto sm:px-0 md:w-3/5 md:m-auto md:px-0 lg:w-1/2 lg:px-0 ">
      <div className="flex justify-between">
        <h1 className="text-white text-3xl font-bold tracking-[.45em]">TODO</h1>
        <span onClick={toggleTheme} className='cursor-pointer'>
        <div
          className="dark:bg-[url('./images/icon-sun.svg')] bg-[url('./images/icon-moon.svg')]"
          style={{ width: "25px", height: "25px" }}
        ></div>
        
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="h-12  mt-9 rounded-md w-full pl-16 outline-0 bg-slate-50  dark:bg-[#24273c]"
            placeholder="Create a new todo..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div
            className="absolute border-gray-300 dark:border-[#8b8a98] border rounded-full flex justify-center items-center top-12 left-4 z-10   " /* bg-gradient-to-t from-fuchsia-500 to-indigo-500 */
            style={{ width: "25px", height: "25px" }}
          >
    
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
