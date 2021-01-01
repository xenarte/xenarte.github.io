import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Ei löydy';

const NotFoundPage = () => (
  <Page title={pageTitle} imageSrc="kissa_nettikoko.png">
    <>
      <h1>Sivua ei löytynyt</h1>
      <p>
        Osuit osoitteeseen, jota ei ole olemassa. Voi surku. Lohdutukseksi kuva
        söpöstä kissasta.
      </p>
    </>
  </Page>
);

export default NotFoundPage;
