import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Koruista';

const AboutJewellery = () => (
  <Page title={pageTitle} imageSrc="marmori_mustavalkoinen.png">
    <>
      <h1>Materiaalit</h1>
      <p>
        Xenarten korujen ihoa vasten tulevat metalliosat ovat kirurgin terästä
        (allergisoimaton). Muut metalliosat saattavat olla muutakin metallia,
        mutta etsimme jatkuvasti sopivia toimittajia mahdollisimman laadukkaille
        osille. Itse koru on tehty superkevyestä ja kestävästä Silk Clay
        -askartelumassasta ja lakattu vedenkestävällä lakalla.
      </p>

      <p>
        Avaimenperät tehdään Silk Clay -massasta. Avaimenperärengas on
        kirurginterästä, mutta ketju muuta metallia.
      </p>

      <h2>Kuinka huolehtia koruista</h2>
      <p>
        Xenarten korut ovat kestäviä, mutta kuten missä tahansa koruissa, muun
        muassa rengasliitososat voivat käytössä löystyä johtuen koruun
        kohdistuneesta vetoliikkeestä. Asia on helppo korjata, tarvitset vain
        pihdit ja puristat renkaan takaisin kiinni. Jos korusi pinta on likainen
        voit pyyhkiä sitä hellästi kostealla paperilla (älä hankaa liikaa, jotta
        lakkakerros ei kulu). Jos korusi menee rikki muulla tavalla, ota
        yhteyttä:{' '}
        <a href="mailto:xenarteshop@gmail.com">xenarteshop@gmail.com</a>
      </p>
    </>
  </Page>
);

export default AboutJewellery;
