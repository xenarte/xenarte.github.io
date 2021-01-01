import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Tapahtumat';

const Events = () => (
  <Page title={pageTitle} imageSrc="vihermarkkinat_nettikoko.png">
    <>
      <h1>Tapahtumat, joissa Xenarte on myymässä</h1>
      <p>
        Tällä hetkellä ei ole tiedossa tapahtumia, johtuen koronan aiheuttamista
        tilaisuuksien perumisista. Tilauksia voi kuitenkin tehdä
        Etsy-verkkokaupan kautta tai tilaustyönä. Linkit löytyvät sivupalkista.
      </p>
    </>
  </Page>
);

export default Events;
