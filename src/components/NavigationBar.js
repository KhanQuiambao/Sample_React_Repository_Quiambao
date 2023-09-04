import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

const NavigationBar = () => {
  return ( 
    <>
      <Navbar className="bg-danger p-2">       
          <NavbarBrand><b className="text-white">SHOELESS</b></NavbarBrand>
      </Navbar>
    
    </>
   );
}
 
export default NavigationBar;