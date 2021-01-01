import React from 'react';
import Page from '../layout/page';

const pageTitle = 'Arvot';

const Values = () => (
  <Page title={pageTitle} imageSrc="ruusut.png">
    <>
      <h1>arvot</h1>
      <p>
        Xenarte ei halua olla sellainen yritys, joka miettii ahneesti vain omaa
        etua. Xenarten tavoite ja tarkoitus on tehdä mahdollisimman paljon
        hyväntekeväisyyttä. Pyrimme jatkuvasti parantamaan tuotteiden
        ekologisuutta.
      </p>

      <p>
        Pakkausmateriaaleina käytämme mahdollisuuksien mukaan puhtaita ja
        siistejä kierrätysmateriaaleja. Korujen ihoa vasten tulevat metalliosat
        ovat kirurgin terästä. Materiaalina kirurgin teräs on luja,
        allergisoimaton materiaali, mikä tekee korysta pitkäikäisen. Kestävyys
        tekee siitä osaltaan myös ekologisen vaihtoehdon.
      </p>

      <p>
        Pyrimme ottamaan selvää, että korujen materiaalit on valmistettu
        inhimillisissä olosuhteissa, kohtuullisin korvauksin, ilman
        lapsityövoimaa. Kaikkia osia emme valitettavasti ole pystyneet vielä
        varmistamaan, mutta pyrimme löytämään parhaat ja luotettavimmat
        toimittajat, joilta saamme parhaat osat.
      </p>
    </>
  </Page>
);

export default Values;
