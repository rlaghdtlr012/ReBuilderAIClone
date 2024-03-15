import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t: translate } = useTranslation();
  return <>{translate('main.mobile3DVisionSDK')}</>;
};

export default MainPage;
