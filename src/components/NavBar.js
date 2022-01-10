import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home'
    },
    {
      id: 2,
      path: '/about',
      text: 'About'
    }
  ]
  return ( 
      <nav className="navBar">
        <ul>
          {links.map(link=> (
            <NavLink to={link.path} key={link.id}>{link.text}</NavLink>
          ))}
        </ul>
      </nav>
   );
}
 
export default NavBar;