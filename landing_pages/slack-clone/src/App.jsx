import Navbar from './Navbar';
import LandingBillboard from './LandingBillboard';
import FeaturesSection from './FeaturesSection';
import TeamsSection from './TeamsSection';
import QuoteSection from './QuoteSection';
import DeepDiveSection from './DeepDiveSection';
import DemoSection from './DemoSection';
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
