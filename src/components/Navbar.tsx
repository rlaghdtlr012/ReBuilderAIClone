import { Link } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import MultiLanguage from './MultiLanguage';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [className, setClassName] = useState('nav-init');
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position >= 0 && position < 250) {
        setClassName('nav-init');
      } else if (position >= 250 && position < 750) {
        setClassName('nav-middle');
      } else if (position >= 750) {
        setClassName('nav-hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 이펙트 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
