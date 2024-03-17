// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const language = createSlice({
  name: 'language',
  initialState: {
    selectedLanguage: sessionStorage.getItem('i18nextLng') || 'ko',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});
export const { setLanguage } = language.actions;

export default language.reducer;
