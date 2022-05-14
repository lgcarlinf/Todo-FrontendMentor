import React,{useContext, useEffect} from "react";
import { useLocation } from "react-router-dom";
import NotesContext from "../context/NotesProvider";
import cross from "../images/icon-cross.svg";
import check from '../images/icon-check.svg';

const Note = ({ data }) => {
  const { id, note } = data;
  const { handleEliminarNota , handleComplete} = useContext(NotesContext);
  const path = useLocation()
  const {pathname} = path;

  useEffect(()=>{
    handleComplete(id);
  },[data])

  return (
    <div key={id} className="w-full border-b-2 dark:border-[#8b8a98] dark:border-b-[1px]  dark:bg-[#24273c]">
      <div className="h-14 rounded-md w-full pl-4 outline-0 flex items-center justify-between">
      <div
        className={` relative cursor-pointer p-4 rounded-full flex  justify-center items-center  ${data.completed ? 'bg-gradient-to-t from-fuchsia-500 to-indigo-500 dark:bg-gradient-to-t from-fuchsia-500 to-indigo-500 ' : 'border-gray-300 border dark:border-[#8b8a98]'} `} 
        style={{ width: "25px", height: "25px" }}
        onClick={()=>{handleComplete(id)}} 
      >
        <img
          src={check}
          alt="check"
          style={{ width: "12px", height: "12px" }}
           className={`absolute ${data.completed ? 'opacity-100' : 'opacity-0'}`}
        />
       
      </div>
      <p className={`  font-bold w-full text-[#8b8a98]  text-base pl-6 ${data.completed ? 'line-through' : ''} `}>{note}</p> 
        <span className="cursor-pointer" onClick={()=>{data.completed && handleEliminarNota(id)}} >

        {pathname === '/' ? <img src={cross} alt="cross" className="mr-8"  style={{ width: "15px", height: "15px" }}/> : ''}
        </span>
      </div>
      
    </div>
  );
};

export default Note;
