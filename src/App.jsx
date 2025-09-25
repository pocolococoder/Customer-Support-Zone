import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner inProgressCount={0} resolvedCount={0} />
      <Footer />
    </div>
  );
}
