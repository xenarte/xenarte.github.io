---
date: 2020-01-06
title: 'Esimerkki postauksesta'
cover: 'park.jpg'
categories:
  - Markkinointi
  - Taide
tags:
  - ohjelmointi
  - web
  - markdown
---

## Tämä on otsikko

Aika simppeliä, vai mitä? Tekstiä voi myös korostaa, **vahvistamalla** tai _kursivoimalla_. Myös _alaviivat_ toimii **samoin**, mutta kannattaa ehkä valita jompi kumpi. Joskus saattaa olla kiva myös tehdä **_vahvaa kursiivia_**.

Kappleiden väliin jätetään aina tyhjä rivi. ~~Tekstiä voi myös yliviivata~~, mutta en ole ihan varma alleviivaamisesta.

Ai joo. On sisällön indeksoinnin kannalta parempi, jos ei käytetä ykköstason otsikoita (eli vain yksi risuaita).

### Ja tämä on alaotsikko

Jos halutaan lisätä mukaan esimerkiksi kuvia, niin niitä voidaan linkata sekaan näin:

![Kuvan kuvaus](./images/park.jpg)

Kuvalle voi myös kertoa myöhemmin kuvatun linkin tapaisesti tooltipin:

![Kuvan kuvaus](./images/park.jpg 'Kuvan tooltip')

## Lainaaminen

Jos halutaan lainata henkilöä ymstms.

> Sekin onnistuu.
>
> Myös useamman kappaleen yli.
>
> > Ja vaikka sisäkkäin.

## Listoja

Listojakin voi tehdä. Ne tulee numeroituina nätisti riippumatta siitä missä järjestyksessä numerot ovat, kunhan lista alkaa ykkösestä:

1. eka
1. toka
1. kolmas
1. neljäs
1. viides
   1. sisäkkäinen eka
   2. sisäkkäinen toka
1. kuudes

Joskus saattaa olla parempi käyttää numeroimattomia listoja, niihin toimii viiva, tähti tai plussa:

- kohta
- toinen kohta

* kolmas kohta

- neljäs kohta

* viides kohta
  1. sisäkkäin numeroiden
  1. hienoa vai mitä?
     - whooooo
* kuudes kohta

Listojen sisään voi asettaa sisennettynä (tabi tai neljä välilyöntiä) myös muita elementtejä. Ei varmaan tarpeen näyttää.

## Erottimet!

Sekaan voi laittaa myös vaakaerottimia. Tämä onnistuu laittamalla vähintään kolme tähti- tai viiva-merkkiä omalle rivilleen:

---

jup

---

onnistuu

## Linkit

Linkit on superhelppoja myös. Esimerkiksi linkki [Xenarten Etsyyn](https://etsy.com/shop/xenarte).

Linkkiin voi lisätä myös tooltipin: Esimerkiksi linkki [Xenarten Etsyyn](https://etsy.com/shop/xenarte 'maailman upein verkkokauppa').

Jos ei tarvitse nimetä linkkiä, niin homma on vielä helpompaa: <https://etsy.com/shop/xenarte>

Sama mailiosoitteen kanssa: <xenarteshop@gmail.com>

Linkkejä voi korostaa samalla tavalla kuin tekstiä: **_[Xenarten Etsy](https://etsy.com/shop/xenarte)_**

Jos linkkien lisääminen tekstin sekaan tuntuu tekevän markdown-tekstistä vaikealukuista, niin on ihan mahdollista esim. lisätä [linkki Etsyyn][1] tiiviimmin, ja kertoa linkin sisältö muualla tiedostossa. Usein näppärintä on heti linkin sisältäneen kappaleen jälkeen.

[1]: https://etsy.com/shop/xenarte 'maailman upein verkkokauppa'

Kuvankin voi merkata linkiksi, mutta siitä tulee aika lukukelvotonta, joten en näytä tässä...

## Taulukot

Taulukoitakin on suht helppoa tehdä, tosin niiden kanssa tulee helpommin mokailtua...

| Otsikko          | Toinen otsikko |
| ---------------- | -------------- |
| solu             | toinen solu    |
| toisen rivin eka | ja toka        |

Mikään ei estä muotoilemasta taulukkoa nätimmin markdowniinkin toki, eli tämäkin toimii:

| Otsikko          | Toinen otsikko |
| ---------------- | -------------- |
| solu             | toinen solu    |
| toisen rivin eka | ja toka        |

Hauskasti taulukoiden sarakkeiden sisältöä on myös mahdollista tasata halutusti:

| Otsikko          | Toinen otsikko | Kolmas ihan kokeeksi |
| :--------------- | :------------: | -------------------: |
| solu             |  toinen solu   |              whooooo |
| toisen rivin eka |    ja toka     |         Aika siistiä |

## Koodi tai muu valmiiksi muotoiltu tekstin

Ok... Tätä tuskin tarvitsee hirveän usein, mutta tekstin sekaan voi `merkata koodia` aika helposti.

Enemmän kuitenkin voi olla hyötyä koodiblokeista. Niille voi kertoa myös formaatin jos siltä tuntuu.

```
{
  "firstName": "Seena",
  "lastName": "Arovaara",
  "age": 13
}
```

Ja formaatin kera

```json
{
  "firstName": "Seena",
  "lastName": "Arovaara",
  "age": 13
}
```

## Muuta?

Joo on, mutta tuskin kovin oleellista. Esimerkiksi täältä voi vilaista: <https://www.markdownguide.org/cheat-sheet/>.
