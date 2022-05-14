import {useState,useEffect, useContext} from "react";
import AllNotes from "../components/AllNotes";
import Header from "../components/Header";
import NotesContext from "../context/NotesProvider";

const Layout = ({children}) => {
 
  const {theme} = useContext(NotesContext);
  
  return (
    <div className={`bg-[url('./assets/bg-mobile-light.jpg')] md:bg-[url('./assets/bg-desktop-light.jpg')] dark:bg-[url('./assets/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/bg-desktop-dark.jpg')] h-screen bg-no-repeat bg-[length:100%_220px] md:w-screen md:flex-col md:items-center ${theme=== 'dark' ? 'dark dark-scheme' : ''}`}>
      <Header />
    {children}
    </div>
  );
};

export default Layout;
