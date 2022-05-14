import React, { useContext, useEffect, useState } from "react";
import NotesContext from "../context/NotesProvider";

const Header = () => {
  const [note, setNote] = useState("");
  const { notes, setNotes,theme } = useContext(NotesContext);
  const id = Math.random().toString(29).slice(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { id, note, completed: false }]);
    setNote("");
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme"); 
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(()=>{
    toggleTheme();
  },[])

  return (
    <div className=" flex flex-col p-6 pt-10 sm:w-4/5 sm:m-auto sm:px-0 md:w-3/5 md:m-auto md:px-0 lg:w-1/2 lg:px-0 ">
      <div className="flex justify-between">
        <h1 className="text-white text-3xl font-bold tracking-[.45em]">TODO</h1>
        <span onClick={toggleTheme} className='cursor-pointer'>
        <div
          className="dark:bg-[url('/assets/icon-sun.svg')] bg-[url('/assets/icon-moon.svg')]"
          style={{ width: "25px", height: "25px" }}
        ></div>
        
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="h-12  mt-9 rounded-md w-full pl-16 outline-0 dark:bg-[#24273c]"
            placeholder="Create a new todo..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div
            className="absolute border-gray-300 dark:border-[#8b8a98] border rounded-full flex justify-center items-center top-12 left-4 z-10   " /* bg-gradient-to-t from-fuchsia-500 to-indigo-500 */
            style={{ width: "25px", height: "25px" }}
          >
         {/*    <img
              src="/assets/icon-check.svg"
              alt="check"
              style={{ width: "12px", height: "12px" }}
            /> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;