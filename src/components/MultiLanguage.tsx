// React lib
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/redux/language';

// MUI
import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';

// Func
import { _iLanguageState } from '@/types';
import { getLangTypeArr, getLanguageArr } from '@/common/ComFunc';

const MyStyledButton = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  color: 'white',
});

const MultiLanguage = () => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState<string[]>([]);
  const [languagesTypes, setLanguagesTypes] = useState<string[]>([]);
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: _iLanguageState) => state.language.selectedLanguage,
  );
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchedLanguages = getLangTypeArr();
    const fetchedLanguagesTypes = getLanguageArr();

    setLanguages(fetchedLanguages);
    setLanguagesTypes(fetchedLanguagesTypes);

    if (!sessionStorage.getItem('i18nextLng')) {
      dispatch(setLanguage(fetchedLanguagesTypes[0]));
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
    dispatch(setLanguage(currentLanguage));
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
