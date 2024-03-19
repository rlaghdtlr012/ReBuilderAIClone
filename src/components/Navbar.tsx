import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Hidden, Stack } from '@mui/material';
import MultiLanguage from './MultiLanguage';
import NavbarDialog from './NavbarDialog';

const Navbar = ({ scrollPosition }) => {
  const navigate = useNavigate();
  const [className, setClassName] = useState('nav-init');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (scrollPosition >= 0 && scrollPosition < 5) {
      setClassName('nav-init');
    } else if (scrollPosition >= 5 && scrollPosition < 25) {
      setClassName('nav-middle');
    } else if (scrollPosition >= 25) {
      setClassName('nav-hidden');
    }
  }, [scrollPosition]);

  const menuItems = [
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={className}>
      <Stack className="iRSRwG css-1qsxih2">
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
            <Stack flexDirection="row">
              {menuItems.map((item) => (
                <span
                  key={item.name}
                  onClick={() => handleNavigate(item.path)}
                  className={`sc-dZoequ imrcMr ${className}`}
                >
                  {item.name}
                </span>
              ))}
              <div></div>
            </Stack>
            <MultiLanguage className={className} />
            <Hidden mdUp implementation="css">
              <Button onClick={toggleMobileMenu}>
                <NavbarDialog />
              </Button>
            </Hidden>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
