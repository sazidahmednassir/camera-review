import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import Reviews from './Components/Reviews/Reviews';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/"  element={<Home></Home>}></Route>
      <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path='*' element={<Notfound></Notfound>} ></Route>
    </Routes>
    </>
  );
}

export default App;
