export interface _iLanguageState {
  language: _iLanguageReducer;
}

export interface _iLanguageReducer {
  selectedLanguage: string;
}

export interface ComponentExampleProps {
  style?: React.CSSProperties;
  manufactureCaption?: string;
  manufactureTitle: string;
  manufactureContentFirstLine: string;
  manufactureContentSecondLine: string;
  manufactureContentThirdLine?: string;
  videoSrcEn: string;
  videoSrcKo: string;
  imageExplanation?: string;
}
