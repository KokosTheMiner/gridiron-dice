// ===== Kartenset: Bäume =====
// Werte: Alter, Höhe und Umfang = bekannte Rekordbäume bzw. Höchstwerte der Art (Umfang in 1,3 m Höhe).
// Holzgewicht = Rohdichte lufttrocken (kg/m³); Heizwert = ungefährer Brennwert pro Raummeter lufttrockenes Scheitholz.
// land = Heimat (Region). wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'baeume', name: 'Bäume', title: 'Riesen des Waldes', icon: '🌳',
 colors: ['#2e7d32', '#795548'], dir: 'sets/baeume/', trump: '1B',
 stats: [
  { k: 'age',  n: 'Mögliches Alter', u: 'Jahre',  hi: true },
  { k: 'h',    n: 'Max. Höhe',       u: 'm',      hi: true },
  { k: 'umf',  n: 'Max. Umfang',     u: 'm',      hi: true },
  { k: 'kg',   n: 'Holzgewicht',     u: 'kg/m³',  hi: true },
  { k: 'heiz', n: 'Heizwert',        u: 'kWh/rm', hi: true },
  { k: 'bl',   n: 'Samen ab',        u: 'Jahren', hi: false, note: 'früher sticht' }
 ],
 cards: [
  {id:'1A',name:'Küstenmammutbaum',land:'AME',v:{age:2200,h:116,umf:22,kg:420,heiz:1290,bl:15},wp:'Sequoia sempervirens',f:'Acroterion, CC BY-SA 4.0'},
  {id:'1B',name:'Riesenmammutbaum',land:'AME',v:{age:3200,h:95,umf:31,kg:400,heiz:1240,bl:20},wp:'Sequoiadendron giganteum',f:'Mike Murphy, CC BY-SA 3.0'},
  {id:'1C',name:'Langlebige Kiefer (Grannenkiefer)',land:'AME',v:{age:4850,h:15,umf:11,kg:500,heiz:1500,bl:30},wp:'Pinus longaeva',f:'Dcrjsr, CC BY-SA 3.0'},
  {id:'1D',name:'Afrikanischer Affenbrotbaum',land:'AFR',v:{age:2500,h:25,umf:34,kg:280,heiz:930,bl:20},wp:'Adansonia digitata',f:'Ferdinand Reus from Arnhem, Holland, CC BY-SA 2.0'},
  {id:'2A',name:'Stieleiche',land:'EUR',v:{age:1000,h:40,umf:14,kg:690,heiz:1990,bl:60},wp:'Quercus robur',f:'Radomianin, CC BY-SA 4.0'},
  {id:'2B',name:'Rotbuche',land:'EUR',v:{age:350,h:45,umf:9,kg:720,heiz:2070,bl:50},wp:'Fagus sylvatica',f:'GooseCanada, CC BY-SA 4.0'},
  {id:'2C',name:'Gemeine Esche',land:'EUR',v:{age:250,h:40,umf:7,kg:690,heiz:1990,bl:30},wp:'Fraxinus excelsior',f:'Brian Green, CC BY-SA 2.0'},
  {id:'2D',name:'Bergahorn',land:'EUR',v:{age:500,h:35,umf:9,kg:630,heiz:1840,bl:25},wp:'Acer pseudoplatanus',f:'Willow, CC BY 2.5'},
  {id:'3A',name:'Gemeine Fichte',land:'EUR',v:{age:600,h:62,umf:7,kg:470,heiz:1420,bl:30},wp:'Picea abies',f:'Ivar Leidus, CC BY-SA 3.0 ee'},
  {id:'3B',name:'Weißtanne',land:'EUR',v:{age:600,h:65,umf:8,kg:450,heiz:1370,bl:40},wp:'Abies alba',f:'Crusier, CC BY-SA 3.0'},
  {id:'3C',name:'Waldkiefer',land:'EUR',v:{age:700,h:40,umf:5,kg:520,heiz:1550,bl:15},wp:'Pinus sylvestris',f:'Mickaël Delcey (Silverkey), CC BY-SA 3.0'},
  {id:'3D',name:'Europäische Lärche',land:'EUR',v:{age:1000,h:54,umf:7,kg:590,heiz:1730,bl:20},wp:'Larix decidua',f:'Dominicus Johannes Bergsma, CC BY-SA 4.0'},
  {id:'4A',name:'Zirbe',land:'EUR',v:{age:1000,h:25,umf:6,kg:440,heiz:1340,bl:50},wp:'Pinus cembra',f:'Tigerente at German Wikipedia, CC BY-SA 3.0'},
  {id:'4B',name:'Europäische Eibe',land:'EUR',v:{age:2000,h:20,umf:16,kg:670,heiz:1940,bl:20},wp:'Taxus baccata',f:'H. Zell, CC BY-SA 3.0'},
  {id:'4C',name:'Winterlinde',land:'EUR',v:{age:1000,h:40,umf:17,kg:530,heiz:1580,bl:25},wp:'Tilia cordata',f:'Wilhelm Zimmerling PAR, CC BY-SA 4.0'},
  {id:'4D',name:'Edelkastanie',land:'EUR',v:{age:2000,h:35,umf:22,kg:590,heiz:1730,bl:20},wp:'Castanea sativa',f:'Wikimedia-Nutzer, CC BY-SA 3.0'},
  {id:'5A',name:'Hängebirke',land:'EUR',v:{age:150,h:30,umf:4,kg:650,heiz:1890,bl:10},wp:'Betula pendula',f:'Percita at Flickr, CC BY-SA 2.0'},
  {id:'5B',name:'Silberweide',land:'EUR',v:{age:200,h:30,umf:8,kg:450,heiz:1370,bl:10},wp:'Salix alba',f:'Tournasol7, CC BY 4.0'},
  {id:'5C',name:'Schwarzerle',land:'EUR',v:{age:120,h:35,umf:4,kg:530,heiz:1580,bl:10},wp:'Alnus glutinosa',f:'AnRo0002, CC0'},
  {id:'5D',name:'Walnuss',land:'ASI',v:{age:300,h:30,umf:8,kg:640,heiz:1860,bl:15},wp:'Juglans regia',f:'Thesupermat, CC BY-SA 3.0'},
  {id:'6A',name:'Douglasie',land:'AME',v:{age:1300,h:100,umf:14,kg:510,heiz:1530,bl:15},wp:'Pseudotsuga menziesii',f:'Thayne Tuason, CC BY-SA 4.0'},
  {id:'6B',name:'Riesen-Lebensbaum',land:'AME',v:{age:1500,h:70,umf:19,kg:370,heiz:1160,bl:20},wp:'Thuja plicata',f:'abdallahh from Montréal, Canada, CC BY 2.0'},
  {id:'6C',name:'Zuckerahorn',land:'AME',v:{age:400,h:40,umf:5,kg:710,heiz:2050,bl:30},wp:'Acer saccharum',f:'Cephas, CC BY-SA 4.0'},
  {id:'6D',name:'Montezuma-Zypresse',land:'AME',v:{age:2000,h:45,umf:42,kg:460,heiz:1400,bl:20},wp:'Taxodium mucronatum',f:'User:Gengiskanhg, CC BY-SA 3.0'},
  {id:'7A',name:'Riesen-Eukalyptus',land:'AUS',v:{age:500,h:100,umf:14,kg:650,heiz:1890,bl:20},wp:'Eucalyptus regnans',f:'Bob Beale, gemeinfrei'},
  {id:'7B',name:'Ginkgo',land:'ASI',v:{age:3000,h:40,umf:16,kg:550,heiz:1630,bl:25},wp:'Ginkgo',f:'EecherplazGinkgo06.jpg: Cayambe derivati…, CC BY-SA 3.0'},
  {id:'7C',name:'Japanische Sicheltanne (Sugi)',land:'ASI',v:{age:3000,h:60,umf:16,kg:380,heiz:1190,bl:15},wp:'Cryptomeria',f:'ja:利用者:あおもりくま, CC BY-SA 3.0'},
  {id:'7D',name:'Heiliger Feigenbaum (Bodhi-Baum)',land:'ASI',v:{age:2300,h:30,umf:10,kg:500,heiz:1500,bl:10},wp:'Ficus religiosa',f:'JMK, CC BY-SA 3.0'},
  {id:'8A',name:'Teakbaum',land:'ASI',v:{age:500,h:45,umf:8,kg:650,heiz:1890,bl:20},wp:'Teak',f:'Nizil Shah, CC BY-SA 4.0'},
  {id:'8B',name:'Echtes Mahagoni',land:'AME',v:{age:350,h:45,umf:7,kg:590,heiz:1730,bl:15},wp:'Swietenia macrophylla',f:'J.M.Garg, CC BY-SA 3.0'},
  {id:'8C',name:'Kapokbaum',land:'AME',v:{age:500,h:70,umf:12,kg:300,heiz:980,bl:5},wp:'Ceiba pentandra',f:'Klaus Schönitzer, CC BY-SA 3.0'},
  {id:'8D',name:'Olivenbaum',land:'EUR',v:{age:3000,h:15,umf:12,kg:900,heiz:2540,bl:5},wp:'Olive',f:'Avsa, CC BY 4.0'}
 ]
});
