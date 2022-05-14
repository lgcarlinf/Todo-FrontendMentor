import { useContext} from "react";
import Header from "../components/Header";
import NotesContext from "../context/NotesProvider";

const Layout = ({children}) => {
 
  const {theme} = useContext(NotesContext);

  return (
    <div className={` relative h-screen bg-no-repeat  md:w-screen md:flex-col md:items-center ${theme}`}>
      <div className=" absolute z-[-1] dark:z-[-1] w-full h-[200px] bg-cover  dark:bg-[length:100%_220px] bg-[url('./images/bg-mobile-light.jpg')] md:bg-[url('./images/bg-desktop-light.jpg')] dark:bg-[url('./images/bg-mobile-dark.jpg')] md:dark:bg-[url('./images/bg-desktop-dark.jpg')] ">
      </div>
      <Header />
    {children}
    </div>
  );
};

export default Layout;
