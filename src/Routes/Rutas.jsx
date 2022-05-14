import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import App from '../App';
import AllNotes from '../components/AllNotes';


const Rutas = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<AllNotes />} />
          <Route path='active' element={<AllNotes/>}/>
          <Route path='completed' element={<AllNotes/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Rutas