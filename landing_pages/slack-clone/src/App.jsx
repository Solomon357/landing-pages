import Navbar from './Navbar';
import LandingBillboard from './sections/LandingBillboard';
import FeaturesSection from './sections/FeaturesSection';
import TeamsSection from './sections/TeamsSection';
import QuoteSection from './sections/QuoteSection';
import DeepDiveSection from './sections/DeepDiveSection';
import DemoSection from './sections/DemoSection';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Navbar />
      
      <main id="main" role="main">
        <LandingBillboard />

        <FeaturesSection />

        <TeamsSection />

        <QuoteSection />

        <DeepDiveSection />

        <DemoSection />

        <Footer />
      </main>
    </div>
  );
}

export default App;
