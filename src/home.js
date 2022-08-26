import React, {useEffect} from 'react';
import Contact from './components/contact/contact';
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Testimonials from "./components/testimonials/testimonials";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function Home() {
  // const cart = useSelector((state) => state.cart)
  // const dispatch = useDispatch();
  useEffect(() => {
    import('jquery');
  });

  return (
    <>
      <Navbar />
      <Header />
      <About /> 
      <Experience />
      <Testimonials />
      <Contact/>
      <Footer /> 
    </>
  );
}

export default Home;
