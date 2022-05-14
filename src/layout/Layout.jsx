import { useContext} from "react";
import Header from "../components/Header";
import NotesContext from "../context/NotesProvider";


const Layout = ({children}) => {
 
  const {theme} = useContext(NotesContext);
  
  return (
    <div className={`bg-[url('./images/bg-mobile-light.jpg')] md:bg-[url('./images/bg-desktop-light.jpg')] dark:bg-[url('./images/bg-mobile-dark.jpg')] md:dark:bg-[url('./images/bg-desktop-dark.jpg')] h-screen bg-no-repeat bg-[length:100%_220px] md:w-screen md:flex-col md:items-center ${theme=== 'dark' ? 'dark dark-scheme' : ''}`}>
      <Header />
    {children}
    </div>
  );
};

export default Layout;
