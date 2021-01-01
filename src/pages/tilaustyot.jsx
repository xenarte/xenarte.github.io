import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Tilaustyöt';

const CustomOrders = () => (
  <Page title={pageTitle} imageSrc="marmorikuutioasetelma_mv_leikattu.png">
    <>
      <h1>Tilaustyöt</h1>
      <p>
        Xenarte ottaa vastaan myös tilaustöitä. Xenartelta voi siis tilata
        tiettyyn tilaisuuteen sopivan tai sinun itse hahmottelemasi kortin,
        avaimenperän tai korvakorut.
      </p>

      <h2>Miten tilaan</h2>

      <ol>
        <li>
          Mieti
          <ol>
            <li>
              minkälaisen tuotteen haluat (esim. haluan syntymäpäiväkortin 15 v.
              tyttärelleni)
            </li>
            <li>minkä värinen / teema</li>
            <li>tuotteen koko</li>
            <li>toive toimitusajasta</li>
            <li>voit myös halutessasi piirtää luonnoksen</li>
            <li>
              esim. “haluan auringonkukkakorvakorut noin 1 cm halkaisijalla”
            </li>
          </ol>
        </li>
        <li>
          Lähetä toiveesi:{' '}
          <a href="mailto:xenarteshop@gmail.com">xenarteshop@gmail.com</a>
        </li>
        <li>
          Lähetän mahdollisesti lisäkysymyksiä, sillä haluan varmistua, että
          olen ymmärtänyt toiveesi ja saat haluamasi tuotteen.
        </li>
        <li>
          Kun suunnitelma tuotteestasi on valmis, lähetän sinulle mahdollisesti
          hahmotelman tulevasta tuotteestasi ja hinta-arvion. Laitan samalla
          myös tilinumeron, jonne voit maksaa tilauksesi. Postikulut Suomeen
          maksavat 1,60 €.
        </li>
        <li>
          Jos hinta on mielestäsi sopiva ja hyväksyt tilauksen, vahvista ja
          maksa tilaus ja laita meille toimitusosoite. Sinun on myös mahdollista
          sovittaessa tulla hakemaan tuotteesi tilaisuudesta, jossa olen
          myymässä tai erikseen sovitusta paikasta Jyväskylän alueella. Jos
          noudat tuotteen, on myös käteismaksu mahdollinen.
          Korttimaksumahdollisuutta ei ole.
        </li>
        <li>
          Kun tuotteesi on valmis, toimitamme sen valitsemallasi tavalla
          perille.
        </li>
      </ol>
    </>
  </Page>
);

export default CustomOrders;
