// ===== Kartenset: Le Mans (24 Stunden, nur die schnellste Klasse: Prototypen/Gesamtsieger 1963–2023) =====
// Werte: gerundete Angaben der jeweiligen Rennversion (Leistung bei Hybriden = Systemleistung, Mazda 787B: 4 Rotoren statt Zylinder).
// Siege = Gesamtsiege dieses Modells in Le Mans. wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'lemans', name: 'Le Mans', title: '24 Stunden', icon: '🏁',
 colors: ['#4a9fd8', '#f47b20'], dir: 'sets/lemans/', trump: '2B',
 stats: [
  { k: 'ps',    n: 'Leistung',      u: 'PS',   hi: true },
  { k: 'ccm',   n: 'Hubraum',       u: 'cm³',  hi: true },
  { k: 'zyl',   n: 'Zylinder',      u: '',     hi: true },
  { k: 'kmh',   n: 'Höchstgeschw.', u: 'km/h', hi: true },
  { k: 'kg',    n: 'Gewicht',       u: 'kg',   hi: false, note: 'leichter sticht' },
  { k: 'siege', n: 'Le-Mans-Siege', u: '',     hi: true },
  { k: 'bj',    n: 'Baujahr',       u: '',     hi: false, note: 'älter sticht' }
 ],
 cards: [
  {id:'1A',name:'Ford GT40 Mk II',land:'USA',v:{ps:485,ccm:6997,zyl:8,kmh:340,kg:1250,siege:1,bj:1966},wp:'Ford GT40',f:'Bahnfrend, CC BY-SA 4.0'},
  {id:'1B',name:'Ford GT40 Mk IV',land:'USA',v:{ps:530,ccm:6997,zyl:8,kmh:343,kg:1100,siege:1,bj:1967},wp:'Ford GT40',f:'Nathan Bittinger from Rochester, NY, USA…, CC BY 2.0'},
  {id:'1C',name:'Ferrari 330 P4',land:'I',v:{ps:450,ccm:3989,zyl:12,kmh:320,kg:792,siege:0,bj:1967},wp:'Ferrari 330 P4',f:'Alexander Migl, CC BY-SA 4.0'},
  {id:'1D',name:'Ferrari 250 P',land:'I',v:{ps:310,ccm:2953,zyl:12,kmh:290,kg:760,siege:1,bj:1963},wp:'Ferrari 250 P',f:'Al R from Philadelphia, USA, CC BY-SA 2.0'},
  {id:'2A',name:'Porsche 917 LH',land:'D',v:{ps:620,ccm:4907,zyl:12,kmh:386,kg:820,siege:0,bj:1971},wp:'Porsche 917',f:'Y.Leclercq©, CC BY-SA 4.0'},
  {id:'2B',name:'Porsche 917 K',land:'D',v:{ps:600,ccm:4907,zyl:12,kmh:360,kg:800,siege:2,bj:1970},wp:'Porsche 917',f:'MrWalkr, CC BY-SA 4.0'},
  {id:'2C',name:'Ferrari 512 S',land:'I',v:{ps:550,ccm:4994,zyl:12,kmh:340,kg:840,siege:0,bj:1970},wp:'Ferrari 512',f:'Andrew Basterfield, CC BY-SA 2.0'},
  {id:'2D',name:'Matra-Simca MS670',land:'F',v:{ps:450,ccm:2993,zyl:12,kmh:330,kg:670,siege:3,bj:1972},wp:'Matra MS670',f:'Dave Hamster, CC BY 2.0'},
  {id:'3A',name:'Lola T70',land:'GB',v:{ps:450,ccm:4995,zyl:8,kmh:320,kg:900,siege:0,bj:1965},wp:'Lola T70',f:'John Chapman (Pyrope), CC BY-SA 3.0'},
  {id:'3B',name:'Chaparral 2F',land:'USA',v:{ps:575,ccm:6997,zyl:8,kmh:320,kg:880,siege:0,bj:1967},wp:'Chaparral 2F',f:'Craig Howell, CC BY 2.0'},
  {id:'3C',name:'Mirage GR8',land:'GB',v:{ps:400,ccm:2993,zyl:8,kmh:320,kg:700,siege:1,bj:1975},wp:'Mirage GR8',f:'MrWalkr, CC BY-SA 4.0'},
  {id:'3D',name:'Renault-Alpine A442B',land:'F',v:{ps:500,ccm:1997,zyl:6,kmh:360,kg:750,siege:1,bj:1978},wp:'Renault Alpine A442',f:'Brato, CC BY-SA 4.0'},
  {id:'4A',name:'Porsche 936',land:'D',v:{ps:540,ccm:2142,zyl:6,kmh:345,kg:700,siege:3,bj:1976},wp:'Porsche 936',f:'ikerlaes, CC BY 2.0'},
  {id:'4B',name:'Rondeau M379',land:'F',v:{ps:450,ccm:2993,zyl:8,kmh:330,kg:790,siege:1,bj:1979},wp:'Rondeau M379',f:'Antoine, CC BY-SA 2.0'},
  {id:'4C',name:'Porsche 956',land:'D',v:{ps:635,ccm:2649,zyl:6,kmh:350,kg:840,siege:4,bj:1982},wp:'Porsche 956',f:'Brian Snelson from Hockley, Essex, England, CC BY 2.0'},
  {id:'4D',name:'Porsche 962 C',land:'D',v:{ps:680,ccm:2994,zyl:6,kmh:380,kg:850,siege:3,bj:1985},wp:'Porsche 962',f:'MrWalkr, CC BY-SA 4.0'},
  {id:'5A',name:'Jaguar XJR-9 LM',land:'GB',v:{ps:750,ccm:6995,zyl:12,kmh:394,kg:850,siege:1,bj:1988},wp:'Jaguar XJR-9',f:'Morio, CC BY-SA 3.0'},
  {id:'5B',name:'Sauber-Mercedes C9',land:'D',v:{ps:720,ccm:4973,zyl:8,kmh:400,kg:905,siege:1,bj:1987},wp:'Sauber C9',f:'Matti Blume, CC BY-SA 4.0'},
  {id:'5C',name:'Mazda 787B',land:'J',v:{ps:700,ccm:2616,zyl:4,kmh:340,kg:830,siege:1,bj:1991},wp:'Mazda 787B',f:'韋駄天狗, CC BY-SA 3.0'},
  {id:'5D',name:'Peugeot 905',land:'F',v:{ps:680,ccm:3499,zyl:10,kmh:350,kg:750,siege:2,bj:1990},wp:'Peugeot 905',f:'Clément Bucco-Lechat, CC BY-SA 3.0'},
  {id:'6A',name:'McLaren F1 GTR',land:'GB',v:{ps:600,ccm:6064,zyl:12,kmh:330,kg:1050,siege:1,bj:1995},wp:'McLaren F1 GTR',f:'PSParrot from England, CC BY 2.0'},
  {id:'6B',name:'Toyota GT-One',land:'J',v:{ps:600,ccm:3600,zyl:8,kmh:350,kg:900,siege:0,bj:1998},wp:'Toyota GT-One',f:'Morio, CC BY-SA 3.0'},
  {id:'6C',name:'BMW V12 LMR',land:'D',v:{ps:580,ccm:5990,zyl:12,kmh:340,kg:900,siege:1,bj:1999},wp:'BMW V12 LMR',f:'Matti Blume, CC BY-SA 4.0'},
  {id:'6D',name:'Audi R8',land:'D',v:{ps:610,ccm:3600,zyl:8,kmh:340,kg:900,siege:5,bj:2000},wp:'Audi R8 (LMP)',f:'Vauxford, CC BY-SA 4.0'},
  {id:'7A',name:'Bentley Speed 8',land:'GB',v:{ps:615,ccm:4000,zyl:8,kmh:340,kg:900,siege:1,bj:2001},wp:'Bentley Speed 8',f:'Brian Snelson, CC BY 2.0'},
  {id:'7B',name:'Audi R10 TDI',land:'D',v:{ps:650,ccm:5500,zyl:12,kmh:330,kg:925,siege:3,bj:2006},wp:'Audi R10 TDI',f:'Joachim Köhler, CC BY 3.0'},
  {id:'7C',name:'Peugeot 908 HDi FAP',land:'F',v:{ps:700,ccm:5500,zyl:12,kmh:340,kg:930,siege:1,bj:2007},wp:'Peugeot 908 HDi FAP',f:'DoomWarrior, CC BY-SA 3.0'},
  {id:'7D',name:'Audi R18 e-tron quattro',land:'D',v:{ps:740,ccm:3700,zyl:6,kmh:330,kg:915,siege:4,bj:2012},wp:'Audi R18',f:'Thesupermat, CC BY-SA 4.0'},
  {id:'8A',name:'Porsche 919 Hybrid',land:'D',v:{ps:900,ccm:2000,zyl:4,kmh:340,kg:875,siege:3,bj:2014},wp:'Porsche 919 Hybrid',f:'Matti Blume, CC BY-SA 4.0'},
  {id:'8B',name:'Toyota TS050 Hybrid',land:'J',v:{ps:1000,ccm:2400,zyl:6,kmh:340,kg:878,siege:3,bj:2016},wp:'Toyota TS050 Hybrid',f:'Matti Blume, CC BY-SA 4.0'},
  {id:'8C',name:'Toyota GR010 Hybrid',land:'J',v:{ps:680,ccm:3500,zyl:6,kmh:340,kg:1040,siege:2,bj:2021},wp:'Toyota GR010 Hybrid',f:'MarcelX42, CC BY-SA 4.0'},
  {id:'8D',name:'Ferrari 499P',land:'I',v:{ps:680,ccm:2992,zyl:6,kmh:340,kg:1060,siege:3,bj:2023},wp:'Ferrari 499P',f:'Mickael Le rouzic, CC BY 2.0'}
 ]
});
