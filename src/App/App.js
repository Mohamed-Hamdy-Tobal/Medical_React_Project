import './App.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Routes, Route, Outlet} from 'react-router-dom';
import Header from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';
import MainAbout from '../Components/Pages/MainAbout/MainAbout';
import Team from '../Components/Pages/Team/Team';
import FourO4 from '../Components/Pages/4o4/Four_o4';
import MainBook from '../Components/Pages/MainBooking/MainBooking';
import Fax from '../Components/Pages/Faqs/Facs';
import Login from '../Components/Pages/Log/Log';
import Register from '../Components/Pages/Log/Register';
import BlogMain from '../Components/Blogs/Blog/Blog';
import BlogDetail from '../Components/Blogs/BlogDetails/BlogDetails';
import ServiceMain from '../Components/Services/Service/Service';
import SerDetail from '../Components/Services/ServiceDetails/ServiceDetails';
import ButtonUP from '../Components/ButtonUP/ButtonUP';


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>

        <Route path='/pages' element={
          <>
            <Outlet/>
          </>
        } >
          <Route path='about' element={<MainAbout/>}></Route>
          <Route path='team' element={<Team/>}></Route>
          <Route path='fax' element={<Fax/>}></Route>
          <Route path='fourO4' element={<FourO4/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='book' element={<MainBook/>}></Route>
        </Route>

        <Route path='/services' element={
          <>
            <Outlet/>
          </>
        } >
          <Route path='service' element={<ServiceMain/>}></Route>
          <Route path='service-details' element={<SerDetail/>}></Route>
        </Route>

        <Route path='/blogs' element={
          <>
            <Outlet/>
          </>
        } >
          <Route path='blog' element={<BlogMain/>}></Route>
          <Route path='blog-details' element={<BlogDetail/>}></Route>
        </Route>

        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
      <Footer/>
      <ButtonUP/>
    </div>
  );
}

export default App;
