import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; //Needed for boostrap
import MainSection from './Components/MainSection';
import Highlights from './Components/Highlights'
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Router from './Routes';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import BookingForm from './Components/Pages/BookingForm';
import SubmitPage from './Components/Pages/SubmitPage';

function App() {
  return (
    <div className="App">
      <meta name="description" content="Little Lemon is a restaurant open Monday to Sunday, 11 to 9, based in Chicago."/>
      <meta name="og:title" content="little Lemon Restaurant"/>
      <meta name="og:description" content="Little restaurant is a family-owned restaurant based in Chicago serving some sort of cuisine"/>
      <meta name="og:image" content="Logo.png"/>
      {/* <Router/> */}
      <Routes>
        <Route path ="/" element = {<HomePage/>}/>
        <Route path = "/BookingForm" element = {<BookingForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
