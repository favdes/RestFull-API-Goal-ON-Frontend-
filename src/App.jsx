import './App.css';
import AllUsers from './pages/AllUsers'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import NewUser from './pages/NewUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleUser from './pages/SingleUser';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AllUsers' element={<AllUsers/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/SingleUser/:userId' element={<SingleUser/>}/>
      
    
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

