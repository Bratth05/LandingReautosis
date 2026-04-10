import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Locations from './components/Locations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Locations />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}