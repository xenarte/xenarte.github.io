import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Kasvutarina';

const MyStory = () => (
  <Page title={pageTitle} imageSrc="elaimet.png">
    <>
      <h1>Kasvutarina</h1>

      <ul>
        <li>
          12-vuotias Seena Arovaara oli aina tehnyt paljon käsitöitä ja päätti
          helmikuussa 2019, että hän alkaa myydä itse tekemiään korvakoruja.
        </li>
        <li>
          27.3.2019 Perustettiin Etsy-verkkokauppa. Nimeksi tuli Xenarte.
          Myyntiin laitettiin muutamia korvakoruja.
        </li>
        <li>Toukokuussa 2019, Xenarte sai ensimmäisen ison tilauksen.</li>
        <li>
          Kesällä 2019 Seena testaili myydä tekemiään tuotteita puiston
          edustalla pitäen omaa myyntikojua. Koruja saatiin myyntiin myös
          kukkakauppaan.
        </li>
        <li>
          Taidot kehittyivät niin tuotteiden valmistuksessa, valokuvauksessa
          kuin myymisessäkin. Tuotevalikoimaan tuli lisää kortit, avaimenperät
          ja jääkaappimagneetit.
        </li>
        <li>
          Syyskuussa 2019 Seenan tuotteita meni myyntiin Iloiseen
          Design-kauppaan, joka oli suomalaisen designin pop-up -myymälä.
        </li>
        <li>
          Syyskuussa 2019 ilmestyi myös ensimmäinen lehtiartikkeli Seenasta.
        </li>
        <li>Marraskuussa 2019 Xenarte sai tilauksen USA:sta.</li>
        <li>Joulukuussa ilmestyi toinen pieni lehtijuttu.</li>
        <li>Xenarten valikoimaan on tullut uusimpana akryllimaalaukset.</li>
        <li>
          Xenarte myi vuonna 2019 yli 600 tuotetta. Vaikka tulot sinänsä ovatkin
          nuoren yrittäjän tulevaisuutta varten, on osa tuotoista lahjoitettu
          myös hyväntekeväisyyteen.
        </li>
        <li>
          Toukokuussa 2020 Seena oli yksi voittajista Yritys Hyvä 2020
          -kilpailussa kilpailutyöllään{' '}
          <a
            target="_blank"
            href="https://docs.google.com/presentation/d/1_s18CODkJYXtnr7IvHU5Z0EaZYr0Ks8o1KQcRInQV4k/edit?usp=sharing"
          >
            "Xenarte - harrastuksesta yrittäjäksi"
          </a>
        </li>
        <li>
          Matka on vasta alussa. Aika näyttää minne Xenarten tie vielä vie.
        </li>
      </ul>
    </>
  </Page>
);

export default MyStory;
