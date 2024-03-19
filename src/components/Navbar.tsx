import { Link } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import MultiLanguage from './MultiLanguage';
import { useEffect, useState } from 'react';

const Navbar = ({ scrollPosition }) => {
  const [className, setClassName] = useState('nav-init');

  useEffect(() => {
    if (scrollPosition >= 0 && scrollPosition < 5) {
      setClassName('nav-init');
    } else if (scrollPosition >= 5 && scrollPosition < 10) {
      setClassName('nav-middle');
    } else if (scrollPosition >= 10) {
      setClassName('nav-hidden');
    }
  }, [scrollPosition]);

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
            <Link to="/" aria-lavel="Go Back To HomePage">
              <img
                src={
                  className === 'nav-middle'
                    ? '/src/assets/img/logoBlack.svg'
                    : '/src/assets/img/logo.svg'
                }
              />
            </Link>
            <Stack flexDirection="row">
              <Link to="/services" className="header-nav">
                Services
              </Link>
              <Link to="/technology" className="header-nav">
                Technology
              </Link>
              <Link to="/about" className="header-nav">
                About
              </Link>
              <Link to="/contact" className="header-nav">
                Contact
              </Link>
            </Stack>
            <MultiLanguage />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
