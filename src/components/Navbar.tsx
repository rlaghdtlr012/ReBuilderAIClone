import { Link } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import MultiLanguage from './MultiLanguage';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [className, setClassName] = useState('nav-init');
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0 && position < 150) {
        setClassName('nav-scrolled');
      } else if (position >= 150) {
        setClassName('nav-hidden');
      } else {
        setClassName('nav-init');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 이펙트 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container className={className}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="/src/assets/img/logo.svg" />
        </Link>
        <Stack direction="row" spacing={2}>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            Services
          </Link>
          <Link to="/technology" style={{ textDecoration: 'none' }}>
            Technology
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            Contact
          </Link>
        </Stack>
        <MultiLanguage />
      </Stack>
    </Container>
  );
};

export default Navbar;
