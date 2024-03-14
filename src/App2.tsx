import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { i18nLanguageType } from '../public/translation/enums';
import './App.css'

function App() {
  const { t: translate, i18n } = useTranslation();
  const [count, setCount] = useState(0)

  const changeLanguageToKo = () => i18n.changeLanguage(i18nLanguageType.KR);
  const changeLanguageToEn = () => i18n.changeLanguage(i18nLanguageType.EN);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{translate('ex.ex1')}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={changeLanguageToKo}>
          한국어로 바꾸기
        </button>
        <button onClick={changeLanguageToEn}>
          영어로 바꾸기
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
