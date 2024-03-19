import { Link } from 'react-router-dom';
import { Button, Container, Hidden, Stack } from '@mui/material';
import MultiLanguage from './MultiLanguage';
import { useEffect, useState } from 'react';
import NavbarDialog from './NavbarDialog';

const Navbar = ({ scrollPosition }) => {
  const [className, setClassName] = useState('nav-init');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (scrollPosition >= 0 && scrollPosition < 5) {
      setClassName('nav-init');
    } else if (scrollPosition >= 5 && scrollPosition < 10) {
      setClassName('nav-middle');
    } else if (scrollPosition >= 10) {
      setClassName('nav-hidden');
    }
  }, [scrollPosition]);

  const menuItems = [
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={className}>
      <Container className="nav-container">
        <Stack direction="column" display="flex">
          <Stack
            paddingTop="33px"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to="/" aria-label="Go Back To HomePage">
              <img
                src={
                  className === 'nav-middle'
                    ? '/src/assets/img/logoBlack.svg'
                    : '/src/assets/img/logo.svg'
                }
                alt="RebuilderAI Logo"
              />
            </Link>
            <Hidden mdDown implementation="css">
              <Stack flexDirection="row">
                {menuItems.map((item) => (
                  <Link key={item.name} to={item.path} className="header-nav">
                    {item.name}
                  </Link>
                ))}
              </Stack>
              <MultiLanguage />
            </Hidden>
            <Hidden mdUp implementation="css">
              <Button onClick={toggleMobileMenu}>
                <NavbarDialog />
              </Button>
            </Hidden>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
