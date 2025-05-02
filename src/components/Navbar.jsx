import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import myImg from '../assets/myImage.jpg';

function BasicExample() {
  return (
    <>
      <Navbar className="h-30  md:h-18 border-b border-gray-200 shadow-sm">
        <Container className="!max-w-screen-xl w-full px-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            {/* Logo + Name */}
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <img src={myImg} alt="myImg" className="rounded-full w-12 h-12" />
              <span className="text-lg font-semibold">Md Hasmat</span>
            </div>

            {/* Nav Links */}
            <Nav className="flex space-x-0 mt-2 md:mt-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/project">Project</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;





// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

// function BasicExample() {
//   return (
//     <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur border-b border-gray-200">
//       {/* Navbar container with wider width */}
//       <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col md:flex-row md:justify-between items-center">
        
//         {/* Logo centered on small screens */}
//         <div className="text-xl font-bold mb-2 md:mb-0">
//           <a href="#logo" className="flex items-center gap-2 text-black no-underline">
//             <FontAwesomeIcon icon={faHome} />
//             Logo
//           </a>
//         </div>

//         {/* Navigation links */}
//         <div className="flex gap-4 text-base justify-center md:justify-end">
//           <a href="/" className="text-black no-underline hover:underline">Home</a>
//           <a href="/about" className="text-black no-underline hover:underline">About</a>
//           <a href="/skills" className="text-black no-underline hover:underline">Skills</a>
//           <a href="/project" className="text-black no-underline hover:underline">Project</a>
//           <a href="/contact" className="text-black no-underline hover:underline">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default BasicExample;
