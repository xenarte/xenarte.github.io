import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Arvonnat';

const Raffles = () => (
  <Page title={pageTitle} imageSrc="lehtikorvisasetelma.png">
    <>
      <h1>Arvonnat</h1>
      <p>
        Tällä hetkellä ei ole käynnissäolevia arvontoja. Ota Xenarten Facebook-
        ja Instagram seurantaan, niin saat tiedon, kun uusia arvontoja taas
        järjestetään.
      </p>
      <h2>Arvontojen yleiset säännöt</h2>
      <ol>
        <li>
          Arvonta suoritetaan ohjeiden mukaan arvonta-julkaisua kommentoineiden
          kesken
        </li>
        <li>
          Mikäli emme tavoita voittajaa ja saa osoitetietoja palkinnon
          toimitusta varten 2 päivää arvonnan päättymisestä, arvomme uuden
          voittajan
        </li>
        <li>Voittaja ilmoitetaan some-julkaisun kommenttikentässä</li>
        <li>
          Arvonnan järjestää Xenarte, eikä Facebook tai Instagram sponsoroi,
          suosittele tai hallinnoi arvontaa millään tavalla, eikä arvonta liity
          mitenkään Facebookiin tai Instagramiin
        </li>
      </ol>
    </>
  </Page>
);

export default Raffles;
