
import { data } from "autoprefixer";
import { useContext,useState ,useEffect} from "react";
import { useLocation, Link } from "react-router-dom";
import NotesContext from "../context/NotesProvider";
import Note from "./Note";

const AllNotes = () => {
  const { notes, handleAllDelete} = useContext(NotesContext);
  const [allNotes, setAllNotes] = useState('');

  const path = useLocation()

  useEffect(()=>{
    setAllNotes(notes)
    renderConditional(path.pathname)
  }
  ,[path,notes])

  const renderConditional = (path) => {
    
    if (path === "/") {
      setAllNotes(notes)
      return allNotes
    }

    if (path === "/active") {
      setAllNotes(notes.filter((note) => note.completed === false));
      return allNotes
      }

    if (path === "/completed") {  
      setAllNotes(notes.filter((note) => note.completed === true));
      return allNotes
    }
      
  }

  return (
    <div className=" mx-6 pb-8 sm:w-4/5 sm:m-auto md:w-3/5 md:m-auto lg:w-1/2 ">
      <div className=" h-auto rounded-md bg-white shadow-xl dark:bg-[#181824]">
          {allNotes && allNotes.map((note) => (
            
            <Note key={note.id} data={note} />
          ))}
          
        <div className="flex justify-between items-center p-3 px-4 dark:bg-[#24273c] dark:rounded-md">
          <p className="text-[#8b8a98] text-sm font-medium">
            {allNotes.length} items left
          </p>
          <p className="text-[#8b8a98] text-sm font-medium" onClick={handleAllDelete}>Clear All</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center p-3 bg-white shadow-lg mt-4 rounded-md dark:bg-[#24273c] ">
        <Link to='/' className={`font-bold ${path.pathname === '/' ? ' text-sky-600' : 'text-[#8b8a98]' }`}>All</Link>
        <Link to='/active' className={`font-bold ${path.pathname === '/active' ? ' text-sky-600' : 'text-[#8b8a98]' }`}>Active</Link>
        <Link to='/completed' className={`font-bold ${path.pathname === '/completed' ? ' text-sky-600' : 'text-[#8b8a98]' }`}>Completed</Link>
      </div>
    </div>
  );
};

export default AllNotes;
