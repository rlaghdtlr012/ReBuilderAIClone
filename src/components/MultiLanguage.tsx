// React lib
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// MUI
import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';

// Func
import { getLangTypeArr, getLanguageArr } from '@/common/ComFunc';

const MyStyledButton = styled('button')({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const MultiLanguage = () => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState<string[]>([]);
  const [languagesTypes, setLanguagesTypes] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    sessionStorage.getItem('i18nextLng') || languagesTypes[0],
  );
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchedLanguages = getLangTypeArr();
    const fetchedLanguagesTypes = getLanguageArr();

    setLanguages(fetchedLanguages);
    setLanguagesTypes(fetchedLanguagesTypes);

    if (!sessionStorage.getItem('i18nextLng')) {
      setSelectedLanguage(fetchedLanguagesTypes[0]);
    }
  }, []);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const selectLanguage = (idx: number) => {
    const currentLanguage = languagesTypes[idx];
    i18n.changeLanguage(currentLanguage);
    sessionStorage.setItem('i18nextLng', currentLanguage);
    setSelectedLanguage(currentLanguage);
  };

  return (
    <>
      <MyStyledButton aria-label="language" onMouseOver={openMenu}>
        <LanguageIcon />
      </MyStyledButton>
      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        {languages.map((lang, i) => (
          <MenuItem
            key={lang}
            onClick={() => selectLanguage(i)}
            style={{
              fontWeight:
                selectedLanguage === languagesTypes[i] ? 'bold' : 'normal',
            }}
          >
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MultiLanguage;
