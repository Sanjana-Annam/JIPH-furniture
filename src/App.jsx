import Hero from "./components/Hero/Hero";
import BrandSlider from "./components/BrandSlider/BrandSlider";
import CategoryCarousel from "./components/ProductShowcase/CategoryCarousel";

import ProcessFlow from "./components/ProcessFlow/ProcessFlow"; 
import Test from "./components/Test/Test";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <BrandSlider />
      <CategoryCarousel />
      <ProcessFlow />
     <Test />
     <FAQ />
     <Footer />
      {/* next sections will come here */}
    </>
  );
}

export default App;
