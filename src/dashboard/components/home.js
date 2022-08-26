import Navbar from '../common/navbar'
import Footer from '../common/footer'
import Container from './container'

function Home() {
  return (
      <main className="main-content position-relative border-radius-lg">
         <Navbar/>
         <div className="container-fluid py-4 ds-scrollable-container">
            <div className="container-xxl bg-white py-6" id="about">
               <Container />
               {/* <Footer /> */}
            </div>
         </div>
      </main>
  );
}

export default Home;
