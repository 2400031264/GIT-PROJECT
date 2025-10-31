import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const heroImageUrl = "https://images.unsplash.com/photo-1573822028151-731623cb0722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MTYyOTkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero imageUrl={heroImageUrl} />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
