import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      className='d-flex justify-content-between rounded'
    >
      <Navbar.Brand href='/' className='px-4 my-2'>
        WaiterApp
      </Navbar.Brand>
      <div className='px-4 my-2'>
        <Nav.Link as={NavLink} to='/'>
          Home
        </Nav.Link>
      </div>
    </Navbar>
  );
};
