import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function BasicExample() {
  return (
    <>
      {/* ✅ TRANSPARENT NAVBAR WITH GLASS EFFECT */}
      <div className="fixed top-0 left-0 right-0 z-[999] backdrop-blur-md bg-transparent">
        <Navbar expand="lg" className="py-3">
          <Container>
            <Navbar.Brand href="#logo" className="text-xl sm:text-2xl font-bold text-black">
              Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center gap-3 text-base sm:text-lg text-black">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/skills">Skills</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <div className="d-flex flex-row align-items-center gap-3">
                  <Nav.Link href="/twiter">
                    <FontAwesomeIcon icon={faXTwitter} className="text-lg sm:text-xl" />
                  </Nav.Link>
                  <Nav.Link href="/linkedinin">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-lg sm:text-xl" />
                  </Nav.Link>
                  <Nav.Link href="/github">
                    <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* ✅ PADDING BELOW NAVBAR */}
      <div className="pt-24">
        {/* Page content goes here */}
        <h1 className="text-center text-4xl font-bold">Welcome to My Website</h1>
        <p className="text-center mt-4">Scroll to test the transparent blurred navbar.</p>
      </div>
    </>
  );
}

export default BasicExample;
