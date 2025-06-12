import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SingleNav from './navbar/SingleNav';
import ApplyNowButton from '../common/buttons/ApplyNowButton';
import { linkPath, pagesLinkpath } from '../../path/LinkPath';
import { Link } from 'react-router-dom';
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
        <Link to={pagesLinkpath.homePage}>
            <img className="h-12" src="/assets/logo2.png" alt="Logo" />
        </Link>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
            <div className='ml-auto'>
          <Nav >
            <div className="grid lg:m-4 justify-items-center font-poppins lg:flex">
            {navLink.map((val, key) => (
                <div className='lg:mr-10 sm:mt-2' key={key} > 
                <Link to={val.path} style={{ textDecoration: 'none', color: 'inherit' ,marginRight:'10px'}}>
                <SingleNav title={val.title} />
                </Link>
                </div>
            ))}
          </div>
            <div className='flex mx-auto justify-items-center'>
              <ApplyNowButton styles='px-8 py-2  '/>{/** Apply Button */}
            </div>
          </Nav>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavigation;