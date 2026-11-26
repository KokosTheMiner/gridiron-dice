// ===== Kartenset: Maler & Bildhauer =====
// Teuerstes Werk = höchster bekannter Verkaufspreis (Auktion oder Privatverkauf, Mio. US-$ zum Verkaufszeitpunkt), Titel in "sub".
// Gesamtwerk = sehr grobe Schätzung des heutigen Marktwerts aller Werke (Mrd. US-$) – dafür gibt es keine offiziellen Zahlen.
// Werke = ungefähre Zahl der Gemälde bzw. Skulpturen. Wikipedia = Zahl der Sprachen mit eigenem Artikel (Bekanntheit, Stand 2026).
// Lebensalter: bei lebenden Künstlern das heutige Alter (Banksy: geschätzt). wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'kunst', name: 'Maler & Bildhauer', title: 'Meister der Kunst', icon: '🎨',
 colors: ['#8e24aa', '#c9a227'], dir: 'sets/kunst/', trump: '1B',
 stats: [
  { k: 'preis', n: 'Teuerstes Werk',  u: 'Mio. $', hi: true },
  { k: 'ges',   n: 'Gesamtwerk (geschätzt)', u: 'Mrd. $', hi: true },
  { k: 'werke', n: 'Werke (ca.)',     u: '',      hi: true },
  { k: 'alter', n: 'Lebensalter',     u: 'Jahre', hi: true },
  { k: 'wiki',  n: 'Wikipedia-Sprachen', u: '',   hi: true },
  { k: 'bj',    n: 'Geburtsjahr',     u: '',      hi: false, note: 'älter sticht' }
 ],
 cards: [
  {id:'1A',name:'Pablo Picasso',land:'E',sub:'Les Femmes d’Alger (Version O), 2015',v:{preis:179.4,ges:100,werke:13500,alter:91,wiki:213,bj:1881},wp:'Pablo Picasso',f:'Argentina. Revista Vea y Lea, gemeinfrei'},
  {id:'1B',name:'Leonardo da Vinci',land:'I',sub:'Salvator Mundi, 2017',v:{preis:450.3,ges:20,werke:20,alter:67,wiki:244,bj:1452},wp:'Leonardo da Vinci',f:'Attributed to Francesco Melzi, gemeinfrei'},
  {id:'1C',name:'Vincent van Gogh',land:'NL',sub:'Obstgarten mit Zypressen, 2022',v:{preis:117.2,ges:40,werke:860,alter:37,wiki:221,bj:1853},wp:'Vincent van Gogh',f:'Vincent van Gogh, gemeinfrei'},
  {id:'1D',name:'Claude Monet',land:'F',sub:'Getreideschober, 2019',v:{preis:110.7,ges:40,werke:2000,alter:86,wiki:141,bj:1840},wp:'Claude Monet',f:'Nadar, gemeinfrei'},
  {id:'2A',name:'Rembrandt',land:'NL',sub:'Bildnisse Soolmans & Coppit, 2016',v:{preis:180,ges:15,werke:350,alter:63,wiki:185,bj:1606},wp:'Rembrandt',f:'Rembrandt, gemeinfrei'},
  {id:'2B',name:'Raffael',land:'I',sub:'Kopf einer Muse (Zeichnung), 2009',v:{preis:48,ges:10,werke:180,alter:37,wiki:181,bj:1483},wp:'Raphael',f:'Raphael, gemeinfrei'},
  {id:'2C',name:'Johannes Vermeer',land:'NL',sub:'Junge Frau am Virginal, 2004',v:{preis:30,ges:5,werke:37,alter:43,wiki:109,bj:1632},wp:'Johannes Vermeer',f:'Johannes Vermeer, gemeinfrei'},
  {id:'2D',name:'Peter Paul Rubens',land:'B',sub:'Der bethlehemitische Kindermord, 2002',v:{preis:76.7,ges:10,werke:1400,alter:62,wiki:160,bj:1577},wp:'Peter Paul Rubens',f:'Peter Paul Rubens, gemeinfrei'},
  {id:'3A',name:'Gustav Klimt',land:'A',sub:'Dame mit Fächer, 2023',v:{preis:108.4,ges:10,werke:250,alter:55,wiki:97,bj:1862},wp:'Gustav Klimt',f:'Josef Anton Trčka, gemeinfrei'},
  {id:'3B',name:'Egon Schiele',land:'A',sub:'Häuser mit bunter Wäsche, 2011',v:{preis:40.1,ges:4,werke:340,alter:28,wiki:68,bj:1890},wp:'Egon Schiele',f:'unbekannt, gemeinfrei'},
  {id:'3C',name:'Edvard Munch',land:'N',sub:'Der Schrei (Pastell), 2012',v:{preis:119.9,ges:8,werke:1800,alter:80,wiki:105,bj:1863},wp:'Edvard Munch',f:'Unknown authorUnknown author, CC BY 2.0'},
  {id:'3D',name:'Paul Cézanne',land:'F',sub:'Die Kartenspieler, 2011',v:{preis:250,ges:20,werke:950,alter:67,wiki:121,bj:1839},wp:'Paul Cézanne',f:'Unknown; Cézanne was born in 1839 and diâ€¦, gemeinfrei'},
  {id:'4A',name:'Paul Gauguin',land:'F',sub:'Nafea faa ipoipo, 2014',v:{preis:210,ges:10,werke:500,alter:54,wiki:115,bj:1848},wp:'Paul Gauguin',f:'Louis-Maurice Boutet de Monvel, gemeinfrei'},
  {id:'4B',name:'Amedeo Modigliani',land:'I',sub:'Liegender Akt (Nu couché), 2015',v:{preis:170.4,ges:8,werke:350,alter:35,wiki:80,bj:1884},wp:'Amedeo Modigliani',f:'French art dealer Paul Guillaume (1891–1â€¦, gemeinfrei'},
  {id:'4C',name:'Henri Matisse',land:'F',sub:'Odaliske mit Magnolien, 2018',v:{preis:80.8,ges:20,werke:1000,alter:84,wiki:161,bj:1869},wp:'Henri Matisse',f:'Alvin Langdon Coburn, gemeinfrei'},
  {id:'4D',name:'Wassily Kandinsky',land:'RUS',sub:'Murnau mit Kirche II, 2023',v:{preis:44.9,ges:6,werke:600,alter:77,wiki:87,bj:1866},wp:'Wassily Kandinsky',f:'Vassily Kandinsky by Adolf Elnain Photo â€¦, gemeinfrei'},
  {id:'5A',name:'Salvador Dalí',land:'E',sub:'Bildnis Paul Éluard, 2011',v:{preis:22.4,ges:5,werke:1500,alter:84,wiki:208,bj:1904},wp:'Salvador Dalí',f:'Van Vechten, Carl, 1880-1964., gemeinfrei'},
  {id:'5B',name:'René Magritte',land:'B',sub:'Das Reich der Lichter, 2024',v:{preis:121.2,ges:4,werke:1100,alter:68,wiki:84,bj:1898},wp:'René Magritte',f:'Unknown authorUnknown author, CC0'},
  {id:'5C',name:'Frida Kahlo',land:'MEX',sub:'Diego y yo, 2021',v:{preis:34.9,ges:2,werke:200,alter:47,wiki:177,bj:1907},wp:'Frida Kahlo',f:'Guillermo Kahlo, gemeinfrei'},
  {id:'5D',name:'Edward Hopper',land:'USA',sub:'Chop Suey, 2018',v:{preis:91.9,ges:3,werke:370,alter:84,wiki:56,bj:1882},wp:'Edward Hopper',f:'Harris &amp; Ewing, photographer, gemeinfrei'},
  {id:'6A',name:'Andy Warhol',land:'USA',sub:'Shot Sage Blue Marilyn, 2022',v:{preis:195,ges:30,werke:10000,alter:58,wiki:148,bj:1928},wp:'Andy Warhol',f:'Bernard Gotfryd, gemeinfrei'},
  {id:'6B',name:'Jean-Michel Basquiat',land:'USA',sub:'Untitled (Schädel), 2017',v:{preis:110.5,ges:10,werke:600,alter:27,wiki:52,bj:1960},wp:'Jean-Michel Basquiat',f:'Unknown authorUnknown author, gemeinfrei'},
  {id:'6C',name:'Mark Rothko',land:'USA',sub:'No. 6 (Violet, Green and Red), 2014',v:{preis:186,ges:10,werke:800,alter:66,wiki:63,bj:1903},wp:'Mark Rothko',f:'Consuelo Kanaga, No restrictions'},
  {id:'6D',name:'Jackson Pollock',land:'USA',sub:'Number 17A, 2015',v:{preis:200,ges:5,werke:700,alter:44,wiki:106,bj:1912},wp:'Jackson Pollock',f:'Hans Namuth, gemeinfrei'},
  {id:'7A',name:'Willem de Kooning',land:'NL',sub:'Interchange, 2015',v:{preis:300,ges:6,werke:1500,alter:92,wiki:49,bj:1904},wp:'Willem de Kooning',f:'Antony di Gesu, photographer, gemeinfrei'},
  {id:'7B',name:'David Hockney',land:'GB',sub:'Porträt eines Künstlers (Pool), 2018',v:{preis:90.3,ges:5,werke:2000,alter:89,wiki:58,bj:1937},wp:'David Hockney',f:'United Press International, gemeinfrei'},
  {id:'7C',name:'Gerhard Richter',land:'D',sub:'Abstraktes Bild (599), 2015',v:{preis:46.3,ges:8,werke:3000,alter:94,wiki:50,bj:1932},wp:'Gerhard Richter',f:'Jindřich Nosek (NoJin), CC BY-SA 4.0'},
  {id:'7D',name:'Banksy',land:'GB',sub:'Love is in the Bin, 2021',v:{preis:25.4,ges:1,werke:500,alter:52,wiki:64,bj:1974},wp:'Banksy',f:'Simon Höger, CC BY 4.0'},
  {id:'8A',name:'Alberto Giacometti (Bildhauer)',land:'CH',sub:'L’homme au doigt, 2015',v:{preis:141.3,ges:10,werke:700,alter:64,wiki:56,bj:1901},wp:'Alberto Giacometti',f:'Emmy Andriesse, gemeinfrei'},
  {id:'8B',name:'Auguste Rodin (Bildhauer)',land:'F',sub:'Ewiger Frühling, 2016',v:{preis:20.4,ges:3,werke:7000,alter:77,wiki:98,bj:1840},wp:'Auguste Rodin',f:'George Charles Beresford, gemeinfrei'},
  {id:'8C',name:'Constantin Brâncuși (Bildhauer)',land:'RO',sub:'Das kultivierte Mädchen, 2018',v:{preis:71,ges:3,werke:215,alter:81,wiki:58,bj:1876},wp:'Constantin Brâncuși',f:'Edward Steichen, gemeinfrei'},
  {id:'8D',name:'Jeff Koons (Bildhauer)',land:'USA',sub:'Rabbit, 2019',v:{preis:91.1,ges:3,werke:300,alter:71,wiki:38,bj:1955},wp:'Jeff Koons',f:'Bengt Oberger, CC BY-SA 4.0'},
  {id:'8E',name:'Friedensreich Hundertwasser',land:'A',sub:'Rekordpreis rund 2 Mio. $; bekannt fürs Hundertwasserhaus',v:{preis:2.2,ges:0.5,werke:900,alter:71,wiki:48,bj:1928},wp:'Friedensreich Hundertwasser',f:'Hannes Grobe, CC BY-SA 2.5'}
 ]
});
