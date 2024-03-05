
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css'; //Needed for boostrap
import MainSection from '../MainSection';
import Highlights from '../Highlights'
import Testimonials from '../Testimonials';
import About from '../About';
import Footer from '../Footer';

function HomePage() {
  return (
    <>
    <Header/>
    <MainSection/>
    <Highlights/>
    <Testimonials/>
    <About/>
    <Footer/>
    </>
  );
}

export default HomePage;
