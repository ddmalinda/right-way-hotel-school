import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SingleNav from './navbar/SingleNav';
import ApplyNowButton from '../common/buttons/ApplyNowButton';
import { linkPath } from '../../path/LinkPath';
// import NavDropdown from 'react-bootstrap/NavDropdown';

let navLink=[
    {
        title:'About Us',
        path:linkPath.aboutUs,
    },
    {
        title:'Course Details',
        path:linkPath.courseDetails,
    },
    {
        title:'Student Detials',
        path:linkPath.studentDetails
    },
    {
        title:'Stuff',
        path:linkPath.stuff
    },
]
function TopNavigation() {
  return (
    <Navbar expand="lg" className="bg-white shadow">
      <Container>
       <div className="flex-shrink-0">
            <img className="h-12" src="/assets/logo2.png" alt="Logo" />
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
            <div className='ml-auto'>

          <Nav >
            <div className="grid m-4 justify-items-center lg:flex">
            {navLink.map((val, key) => (
                <div className='mr-10' key={key} > 
                <SingleNav   title={val.title} />
                </div>
            ))}
          </div>
          </Nav>
            </div>
          <ApplyNowButton styles='px-8 py-2 '/>{/** Apply Button */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavigation;