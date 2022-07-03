import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'page404' });
  return (
    <div className="text-center">
      <h1 className="h4">
        {t('pageNotFound')}
      </h1>
      <p>
        {t('navigate')}
        <Link to="/">{t('mainPage')}</Link>
      </p>
    </div>
  );
};
export default Page404;