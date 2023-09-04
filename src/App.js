import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import image1 from "./images/nike1.jpg";
import image2 from "./images/nike2.jpg";
import image3 from "./images/nike3.jpg";
import image4 from "./images/nike4.jpg";
import image5 from "./images/nike5.jpg";
import image6 from "./images/nike6.jpg";
import Footer from "./components/Footer";
import Griditems from "./components/Griditems";


function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      
      <div className="bg-dark p-5">
        <div className="container">
          <h1 className="text-white mb-5">Top 5 Shoes of the week:</h1>
          <div className="row g-5">
            <Griditems name="melo" imageFile={image1} desc="Lorem shoes1"></Griditems>
            <Griditems name="lbj" imageFile={image2} desc="Lorem shoes2"></Griditems>
            <Griditems name="kd" imageFile={image3} desc="Lorem shoes3"></Griditems>
            <Griditems name="kobe" imageFile={image4} desc="Lorem shoes4"></Griditems>
            <Griditems name="wade" imageFile={image5} desc="Lorem shoes5"></Griditems>
            <Griditems name="slippers" imageFile={image6} desc="Lorem slipper1"></Griditems>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
