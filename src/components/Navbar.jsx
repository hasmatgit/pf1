import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


<FontAwesomeIcon icon={faHome} />


function BasicExample() {
  return (
    <>
    <div className=''>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#logo">Logo</Navbar.Brand>
          <Nav className="flex justify-end space-x-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <div className='d-flex flex-row space-x-4 flex justify-end'>
            <Nav.Link href="/twiter"><FontAwesomeIcon icon={faXTwitter} size="lg" /></Nav.Link>
            <Nav.Link href="/linkedinin"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></Nav.Link>
            <Nav.Link href="/github"><FontAwesomeIcon icon={faGithub} size="lg" /></Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default BasicExample;