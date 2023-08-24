import { Navbar, Container, Nav } from "react-bootstrap";
import NavLink from "./bitlio-navbar/NavLink.component";

const BitlioNavbar = ({type}) => {
  const types = {
    bitlio: "#9D81BB",
    glass: undefined,
    dark: "black"
  } 
  
  return (
    <>
      <Navbar className="pt-2 pb-2" expand="lg" style={{
        backgroundColor: types[type]
      }}>
        <Container>
          <Navbar.Brand href="/">
            <img src="/brand/texted-white-logo.png" className="brand-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"navbar-basic-nav"} />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mt-2">
              <NavLink href="/">
                Əsas səhifə  
              </NavLink> 
              <NavLink href="/join">
                Qoşul
              </NavLink>  
              <NavLink href="/about">
                Haqqımızda 
              </NavLink> 
              <NavLink href="/trainings">
                Təlimlər
              </NavLink>
              <NavLink href="/posts">
                Məqalələr
              </NavLink>
              <NavLink href="/dashboard">
                Panel
              </NavLink>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        .brand-logo {
          width: 100px;
        }
      `}</style>
    </>
  );
};

export default BitlioNavbar;
