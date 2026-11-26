// ===== Kartenset: Bienen & Hummeln =====
// Werte: typische Höchstwerte. Volk = Tiere im Volk zur Hochsaison (Einzelgänger = 1); Honig = möglicher Honigertrag pro Volk und Jahr
// (Wildbienen und Hummeln liefern keinen erntbaren Honig = 0); Nachkommen = aufgezogene Bienen pro Volk bzw. Weibchen und Jahr;
// Größe = Körperlänge der Königin bzw. des Weibchens; Lebensdauer = Königin bzw. Weibchen; Flugbeginn = ab dieser Temperatur wird ausgeflogen.
// wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'bienen', name: 'Bienen & Hummeln', title: 'Fleißige Flieger', icon: '🐝',
 colors: ['#f9a825', '#3e2723'], dir: 'sets/bienen/', trump: '1B',
 stats: [
  { k: 'volk', n: 'Größe des Volkes', u: 'Tiere', hi: true },
  { k: 'honig', n: 'Honigertrag/Jahr', u: 'kg',   hi: true },
  { k: 'rad',  n: 'Flugradius',      u: 'm',     hi: true },
  { k: 'nk',   n: 'Nachkommen/Jahr', u: '',      hi: true },
  { k: 'mm',   n: 'Größe',           u: 'mm',    hi: true },
  { k: 'tage', n: 'Lebensdauer',     u: 'Tage',  hi: true },
  { k: 'temp', n: 'Flugbeginn ab',   u: '°C',    hi: false, note: 'kälter sticht' }
 ],
 cards: [
  {id:'1A',name:'Buckfast-Biene',land:'EUR',v:{volk:60000,honig:40,rad:3000,nk:180000,mm:20,tage:1800,temp:10},wp:'Buckfast bee',f:'Andon Gospov, CC BY-SA 4.0'},
  {id:'1B',name:'Kärntner Biene (Carnica)',land:'EUR',v:{volk:50000,honig:35,rad:3000,nk:150000,mm:20,tage:1800,temp:9},wp:'Carniolan honey bee',f:'Richard Bartz, CC BY-SA 2.5'},
  {id:'1C',name:'Italienische Biene',land:'EUR',v:{volk:60000,honig:35,rad:3000,nk:180000,mm:20,tage:1500,temp:11},wp:'Italian bee',f:'Ken Thomas, gemeinfrei'},
  {id:'1D',name:'Dunkle Biene',land:'EUR',v:{volk:40000,honig:20,rad:3000,nk:120000,mm:20,tage:1800,temp:8},wp:'European dark bee',f:'Alvesgaspar, CC BY-SA 3.0'},
  {id:'2A',name:'Kaukasische Biene',land:'ASI',v:{volk:50000,honig:25,rad:3000,nk:140000,mm:20,tage:1800,temp:9},wp:'Apis mellifera caucasia',f:'Zeynel Cebeci, CC BY-SA 4.0'},
  {id:'2B',name:'Afrikanisierte Honigbiene',land:'AME',v:{volk:40000,honig:25,rad:4000,nk:300000,mm:19,tage:1000,temp:13},wp:'Africanized bee',f:'Jonathan Wilkins, CC BY-SA 3.0'},
  {id:'2C',name:'Östliche Honigbiene',land:'ASI',v:{volk:20000,honig:8,rad:1500,nk:70000,mm:15,tage:1000,temp:7},wp:'Apis cerana',f:'Rushenb, CC BY-SA 3.0'},
  {id:'2D',name:'Riesenhonigbiene',land:'ASI',v:{volk:100000,honig:20,rad:5000,nk:300000,mm:22,tage:1000,temp:13},wp:'Apis dorsata',f:'Peterwchen, CC BY-SA 4.0'},
  {id:'3A',name:'Zwerghonigbiene',land:'ASI',v:{volk:6000,honig:0.5,rad:500,nk:20000,mm:10,tage:700,temp:15},wp:'Apis florea',f:'Gideon Pisanty (Gidip) גדעון פיזנטי, CC BY 3.0'},
  {id:'3B',name:'Himalaya-Riesenhonigbiene',land:'ASI',v:{volk:60000,honig:15,rad:5000,nk:150000,mm:30,tage:1000,temp:6},wp:'Apis laboriosa',f:'L. Shyamal, CC BY-SA 3.0'},
  {id:'3C',name:'Stachellose Biene (Melipona)',land:'AME',v:{volk:3000,honig:2,rad:2000,nk:10000,mm:10,tage:730,temp:20},wp:'Melipona beecheii',f:'gailhampshire from Cradley, Malvern, U.K, CC BY 2.0'},
  {id:'3D',name:'Australische Stachellose Biene',land:'AUS',v:{volk:10000,honig:1,rad:500,nk:30000,mm:4,tage:730,temp:18},wp:'Tetragonula carbonaria',f:'James Niland, CC BY 2.0'},
  {id:'4A',name:'Dunkle Erdhummel',land:'EUR',v:{volk:600,honig:0,rad:2000,nk:600,mm:23,tage:365,temp:2},wp:'Bombus terrestris',f:'Marco Almbauer, CC0'},
  {id:'4B',name:'Steinhummel',land:'EUR',v:{volk:300,honig:0,rad:1500,nk:300,mm:22,tage:365,temp:4},wp:'Bombus lapidarius',f:'Ivar Leidus, CC BY-SA 4.0'},
  {id:'4C',name:'Ackerhummel',land:'EUR',v:{volk:150,honig:0,rad:1000,nk:150,mm:18,tage:365,temp:3},wp:'Bombus pascuorum',f:'André Karwath aka Aka, CC BY-SA 2.5'},
  {id:'4D',name:'Wiesenhummel',land:'EUR',v:{volk:120,honig:0,rad:500,nk:120,mm:17,tage:330,temp:2},wp:'Bombus pratorum',f:'Ivar Leidus, CC BY-SA 4.0'},
  {id:'5A',name:'Gartenhummel',land:'EUR',v:{volk:120,honig:0,rad:1000,nk:120,mm:22,tage:365,temp:3},wp:'Bombus hortorum',f:'Ivar Leidus, CC BY-SA 4.0'},
  {id:'5B',name:'Baumhummel',land:'EUR',v:{volk:300,honig:0,rad:1000,nk:300,mm:20,tage:330,temp:2},wp:'Bombus hypnorum',f:'Charles J. Sharp, CC BY-SA 3.0'},
  {id:'5C',name:'Rotschwarze Kuckuckshummel',land:'EUR',v:{volk:1,honig:0,rad:1000,nk:30,mm:24,tage:330,temp:6},wp:'Bombus rupestris',f:'Ivar Leidus, CC BY-SA 4.0'},
  {id:'5D',name:'Patagonische Riesenhummel',land:'AME',v:{volk:300,honig:0,rad:1500,nk:300,mm:40,tage:365,temp:4},wp:'Bombus dahlbomii',f:'Pato Novoa, CC BY 2.0'},
  {id:'6A',name:'Blauschwarze Holzbiene',land:'EUR',v:{volk:1,honig:0,rad:1500,nk:10,mm:28,tage:400,temp:14},wp:'Xylocopa violacea',f:'Gideon Pisanty (Gidip) גדעון פיזנטי, CC BY 3.0'},
  {id:'6B',name:'Rote Mauerbiene',land:'EUR',v:{volk:1,honig:0,rad:300,nk:20,mm:12,tage:60,temp:8},wp:'Osmia bicornis',f:'André Karwath aka Aka, CC BY-SA 2.5'},
  {id:'6C',name:'Gehörnte Mauerbiene',land:'EUR',v:{volk:1,honig:0,rad:300,nk:15,mm:15,tage:60,temp:6},wp:'Osmia cornuta',f:'Gilles San Martin, CC BY-SA 2.0'},
  {id:'6D',name:'Wallace-Riesenbiene',land:'ASI',v:{volk:1,honig:0,rad:500,nk:10,mm:39,tage:60,temp:20},wp:'Megachile pluto',f:'Stavenn, CC BY-SA 3.0'},
  {id:'7A',name:'Garten-Blattschneiderbiene',land:'EUR',v:{volk:1,honig:0,rad:200,nk:20,mm:15,tage:45,temp:14},wp:'Megachile willughbiella',f:'Line Sabroe from Denmark, CC BY 2.0'},
  {id:'7B',name:'Efeu-Seidenbiene',land:'EUR',v:{volk:1,honig:0,rad:300,nk:15,mm:13,tage:40,temp:12},wp:'Colletes hederae',f:'Didier Descouens, CC BY-SA 4.0'},
  {id:'7C',name:'Große Wollbiene',land:'EUR',v:{volk:1,honig:0,rad:300,nk:25,mm:17,tage:50,temp:15},wp:'Anthidium manicatum',f:'Bruce Marlin, CC BY-SA 2.5'},
  {id:'7D',name:'Rotpelzige Sandbiene',land:'EUR',v:{volk:1,honig:0,rad:300,nk:10,mm:13,tage:40,temp:9},wp:'Andrena fulva',f:'Jeffdelonge, CC BY'},
  {id:'8A',name:'Dunkelfransige Hosenbiene',land:'EUR',v:{volk:1,honig:0,rad:300,nk:10,mm:14,tage:40,temp:16},wp:'Dasypoda hirtipes',f:'Christian Fischer, CC BY-SA 3.0'},
  {id:'8B',name:'Frühlings-Pelzbiene',land:'EUR',v:{volk:1,honig:0,rad:600,nk:20,mm:15,tage:50,temp:8},wp:'Anthophora plumipes',f:'pjt56, CC BY 3.0'},
  {id:'8C',name:'Gelbbindige Furchenbiene',land:'EUR',v:{volk:10,honig:0,rad:300,nk:30,mm:14,tage:300,temp:14},wp:'Halictus scabiosae',f:'Didier Descouens, CC BY-SA 4.0'},
  {id:'8D',name:'Gewöhnliche Löcherbiene',land:'EUR',v:{volk:1,honig:0,rad:100,nk:15,mm:7,tage:40,temp:15},wp:'Heriades truncorum',f:'Bernd Trommer, CC BY 4.0'}
 ]
});
