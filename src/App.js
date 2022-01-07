import 'bootstrap/dist/css/bootstrap.min.css';
import CovidCard from './Components/CovidCard/CovidCard';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div className="App">
      <Navigation />
      <CovidCard />
      <Footer />

    </div>
  );
}

export default App;
