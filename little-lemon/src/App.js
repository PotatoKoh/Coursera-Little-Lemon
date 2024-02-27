import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; //Needed for boostrap
import MainSection from './Components/MainSection';
import Highlights from './Components/Highlights'
import Testimonials from './Components/Testimonials';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <meta name="description" content="Little Lemon is a restaurant open Monday to Sunday, 11 to 9, based in Chicago."/>
      <meta name="og:title" content="little Lemon Restaurant"/>
      <meta name="og:description" content="Little restaurant is a family-owned restaurant based in Chicago serving some sort of cuisine"/>
      <meta name="og:image" content="Logo.png"/>
      <Header/>
      <MainSection/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </div>
  );
}

export default App;
