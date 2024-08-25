// components
import Image from "next/image";
import Landing from "./components/Landing";
import Navbar from "./components/navbar";

// styles
import styles from "./page.module.scss";
import BestSeller from "./components/BestSeller/BestSeller";
import ShopCategory from "./components/ShopCategory";
import About from "./components/About";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <BestSeller />
      <ShopCategory />
      <About />
      <Instagram />
      <Footer/>
    </main>
  );
}
