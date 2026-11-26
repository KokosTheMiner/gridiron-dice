// ===== Kartenset: Kult-Autos der 70er & 80er =====
// Werte: gerundete Werksangaben der genannten Ausführung (Leistung DIN-PS). wp = Wikipedia-Artikel (Bildquelle), f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'autos', name: 'Autos 70er & 80er', title: 'Kult-Autos', icon: '🚗',
 colors: ['#e65100', '#283593'], dir: 'sets/autos/', trump: '3B',
 stats: [
  { k: 'ps',  n: 'Leistung',      u: 'PS',   hi: true },
  { k: 'ccm', n: 'Hubraum',       u: 'cm³',  hi: true },
  { k: 'zyl', n: 'Zylinder',      u: '',     hi: true },
  { k: 'kmh', n: 'Höchstgeschw.', u: 'km/h', hi: true },
  { k: 'acc', n: '0–100 km/h',    u: 's',    hi: false, note: 'schneller sticht' },
  { k: 'kg',  n: 'Leergewicht',   u: 'kg',   hi: false, note: 'leichter sticht' },
  { k: 'bj',  n: 'Baujahr',       u: '',     hi: false, note: 'älter sticht' }
 ],
 cards: [
  {id:'1A',name:'VW Golf GTI (I)',land:'D',v:{ps:110,ccm:1588,zyl:4,kmh:182,acc:9.0,kg:810,bj:1976},wp:'Volkswagen Golf Mk1',f:'Kazuyanagae, CC BY-SA 4.0'},
  {id:'1B',name:'VW Scirocco GTI',land:'D',v:{ps:110,ccm:1588,zyl:4,kmh:185,acc:8.8,kg:830,bj:1976},wp:'Volkswagen Scirocco',f:'Calreyn88, CC BY-SA 4.0'},
  {id:'1C',name:'Opel Monza 3.0 E',land:'D',v:{ps:180,ccm:2969,zyl:6,kmh:215,acc:8.5,kg:1395,bj:1978},wp:'Opel Monza',f:'Vauxford, CC BY-SA 4.0'},
  {id:'1D',name:'Opel Manta B GT/E',land:'D',v:{ps:110,ccm:1979,zyl:4,kmh:190,acc:10.0,kg:1000,bj:1977},wp:'Opel Manta',f:'Martina Spurzem, CC BY-SA 2.0 de'},
  {id:'2A',name:'Toyota Celica 1600 GT',land:'J',v:{ps:105,ccm:1588,zyl:4,kmh:185,acc:10.5,kg:960,bj:1970},wp:'Toyota Celica (A20)',f:'TTTNIS, CC0'},
  {id:'2B',name:'Mazda 323 1.6i GT',land:'J',v:{ps:105,ccm:1597,zyl:4,kmh:190,acc:9.3,kg:970,bj:1986},wp:'Mazda Familia (BF)',f:'Rutger van der Maar, CC BY 4.0'},
  {id:'2C',name:'Porsche 911 Turbo 3.0',land:'D',v:{ps:260,ccm:2994,zyl:6,kmh:250,acc:5.5,kg:1140,bj:1975},wp:'Porsche 930',f:'Mr.choppers, CC BY-SA 3.0'},
  {id:'2D',name:'Ferrari Testarossa',land:'I',v:{ps:390,ccm:4943,zyl:12,kmh:290,acc:5.8,kg:1506,bj:1984},wp:'Ferrari Testarossa',f:'Alexander Migl, CC BY-SA 4.0'},
  {id:'3A',name:'BMW M1',land:'D',v:{ps:277,ccm:3453,zyl:6,kmh:262,acc:5.6,kg:1300,bj:1978},wp:'BMW M1',f:'Mr.choppers, CC BY-SA 3.0'},
  {id:'3B',name:'Lamborghini Countach 5000 QV',land:'I',v:{ps:455,ccm:5167,zyl:12,kmh:295,acc:4.9,kg:1490,bj:1985},wp:'Lamborghini Countach',f:'Brian Snelson from Hockley, Essex, England, CC BY 2.0'},
  {id:'3C',name:'BMW M3 (E30)',land:'D',v:{ps:195,ccm:2302,zyl:4,kmh:235,acc:6.9,kg:1200,bj:1986},wp:'BMW M3 (E30)',f:'Yu Chu Chin, CC BY-SA 4.0'},
  {id:'3D',name:'Mercedes 190 E 2.3-16',land:'D',v:{ps:185,ccm:2299,zyl:4,kmh:230,acc:7.5,kg:1230,bj:1984},wp:'Mercedes-Benz 190E 2.3-16',f:'Bretbmorgan, CC BY-SA 4.0'},
  {id:'4A',name:'Audi quattro',land:'D',v:{ps:200,ccm:2144,zyl:5,kmh:222,acc:7.1,kg:1290,bj:1980},wp:'Audi Quattro',f:'Calreyn88, CC0'},
  {id:'4B',name:'Ford Capri 2.8i',land:'D',v:{ps:160,ccm:2792,zyl:6,kmh:210,acc:8.5,kg:1120,bj:1981},wp:'Ford Capri',f:'TuRbO_J from Adelaide, Australia, CC BY 2.0'},
  {id:'4C',name:'Ford Sierra RS Cosworth',land:'GB',v:{ps:204,ccm:1993,zyl:4,kmh:241,acc:6.5,kg:1220,bj:1986},wp:'Ford Sierra RS Cosworth',f:'Vauxford, CC BY-SA 4.0'},
  {id:'4D',name:'Lancia Stratos HF',land:'I',v:{ps:190,ccm:2418,zyl:6,kmh:230,acc:6.8,kg:980,bj:1973},wp:'Lancia Stratos',f:'Mr.choppers, CC BY-SA 3.0'},
  {id:'5A',name:'Lancia Delta HF integrale',land:'I',v:{ps:185,ccm:1995,zyl:4,kmh:215,acc:6.6,kg:1200,bj:1987},wp:'Lancia Delta Integrale',f:'Alexander-93, CC BY-SA 4.0'},
  {id:'5B',name:'Peugeot 205 GTI 1.9',land:'F',v:{ps:130,ccm:1905,zyl:4,kmh:206,acc:7.8,kg:910,bj:1986},wp:'Peugeot 205 GTI',f:'Rudolf Stricker, CC BY-SA 3.0'},
  {id:'5C',name:'Renault 5 Turbo',land:'F',v:{ps:160,ccm:1397,zyl:4,kmh:200,acc:6.9,kg:970,bj:1980},wp:'Renault 5 Turbo',f:'MrWalkr, CC BY-SA 4.0'},
  {id:'5D',name:'DeLorean DMC-12',land:'USA',v:{ps:132,ccm:2849,zyl:6,kmh:210,acc:9.5,kg:1230,bj:1981},wp:'DeLorean DMC-12',f:'Kevin Abato, www.grenexmedia.com, CC BY-SA 3.0'},
  {id:'6A',name:'Chevrolet Corvette C3',land:'USA',v:{ps:223,ccm:5733,zyl:8,kmh:205,acc:7.5,kg:1600,bj:1978},wp:'Chevrolet Corvette (C3)',f:'Alexander Migl, CC BY-SA 4.0'},
  {id:'6B',name:'Pontiac Firebird Trans Am',land:'USA',v:{ps:203,ccm:6555,zyl:8,kmh:190,acc:8.5,kg:1650,bj:1977},wp:'Pontiac Firebird (second generation)',f:'Eric Friedebach, CC BY 3.0'},
  {id:'6C',name:'Datsun 240Z',land:'J',v:{ps:130,ccm:2393,zyl:6,kmh:200,acc:8.0,kg:1050,bj:1970},wp:'Nissan S30',f:'TTTNIS, CC0'},
  {id:'6D',name:'Toyota Supra 3.0i (A70)',land:'J',v:{ps:204,ccm:2954,zyl:6,kmh:225,acc:8.0,kg:1500,bj:1986},wp:'Toyota Supra (A70)',f:'Jacob Frey 4A, CC BY 2.0'},
  {id:'7A',name:'Mazda RX-7 (Wankel)',land:'J',v:{ps:105,ccm:1146,zyl:2,kmh:200,acc:9.0,kg:1050,bj:1978},wp:'Mazda RX-7',f:'TTTNIS, CC0'},
  {id:'7B',name:'Honda CRX 1.6i-16',land:'J',v:{ps:125,ccm:1590,zyl:4,kmh:200,acc:8.5,kg:860,bj:1985},wp:'Honda CR-X',f:'韋駄天狗, CC BY-SA 3.0'},
  {id:'7C',name:'Saab 900 Turbo',land:'S',v:{ps:145,ccm:1985,zyl:4,kmh:195,acc:9.5,kg:1250,bj:1978},wp:'Saab 900',f:'Vauxford, CC BY-SA 4.0'},
  {id:'7D',name:'Opel Kadett E GSi',land:'D',v:{ps:115,ccm:1796,zyl:4,kmh:197,acc:9.5,kg:970,bj:1984},wp:'Opel Kadett E',f:'Ellywa at Dutch Wikipedia, CC BY-SA 3.0'},
  {id:'8A',name:'Mercedes 450 SEL 6.9',land:'D',v:{ps:286,ccm:6834,zyl:8,kmh:225,acc:7.4,kg:1935,bj:1975},wp:'Mercedes-Benz 450SEL 6.9',f:'nakhon100, CC BY 2.0'},
  {id:'8B',name:'Ferrari 308 GTB',land:'I',v:{ps:255,ccm:2926,zyl:8,kmh:252,acc:6.5,kg:1090,bj:1975},wp:'Ferrari 308 GTB/GTS',f:'Alexander Migl, CC BY-SA 4.0'},
  {id:'8C',name:'Porsche 924',land:'D',v:{ps:125,ccm:1984,zyl:4,kmh:200,acc:9.5,kg:1080,bj:1976},wp:'Porsche 924',f:'Alexander Migl, CC BY-SA 4.0'},
  {id:'8D',name:'Alfa Romeo GTV6',land:'I',v:{ps:160,ccm:2492,zyl:6,kmh:205,acc:8.8,kg:1210,bj:1980},wp:'Alfa Romeo GTV6',f:'Riley from Christchurch, New Zealand, CC BY 2.0'}
 ]
});
