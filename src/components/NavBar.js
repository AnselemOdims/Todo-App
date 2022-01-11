import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontSize: '30px', color: '#ececec' }}>Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.id}
                className="linked"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  margin: '0 10px',
                  borderBottom: isActive ? 'solid 5px darkcyan' : '',
                  color: isActive ? 'darkcyan' : 'white',
                })}
              >
                {link.text}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
