// ===== Kartenset: Passagierflugzeuge =====
// Werte: gerundete Herstellerangaben (Passagiere = maximal zugelassen bzw. dichteste Bestuhlung). wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'flugzeuge', name: 'Passagierflugzeuge', title: 'Jets & Propeller', icon: '🛫',
 colors: ['#0277bd', '#6d4c41'], dir: 'sets/flugzeuge/', trump: '5B',
 stats: [
  { k: 'pax',  n: 'Passagiere',    u: '',     hi: true },
  { k: 'rw',   n: 'Reichweite',    u: 'km',   hi: true },
  { k: 'kmh',  n: 'Reisegeschw.',  u: 'km/h', hi: true },
  { k: 'span', n: 'Spannweite',    u: 'm',    hi: true },
  { k: 'len',  n: 'Länge',         u: 'm',    hi: true },
  { k: 'mtow', n: 'Startgewicht',  u: 't',    hi: true },
  { k: 'bj',   n: 'Erstflug',      u: '',     hi: true, note: 'jünger sticht' }
 ],
 cards: [
  {id:'1A',name:'Airbus A380',land:'EU',v:{pax:853,rw:15000,kmh:903,span:79.75,len:72.7,mtow:575,bj:2005},wp:'Airbus A380',f:'Maarten Visser from Capelle aan den IJss…, CC BY-SA 2.0'},
  {id:'1B',name:'Airbus A350-1000',land:'EU',v:{pax:440,rw:16100,kmh:903,span:64.75,len:73.79,mtow:319,bj:2016},wp:'Airbus A350',f:'Steve Lynes, CC BY 2.0'},
  {id:'1C',name:'Airbus A340-600',land:'EU',v:{pax:440,rw:14450,kmh:881,span:63.45,len:75.36,mtow:380,bj:2001},wp:'Airbus A340',f:'MarcelX42, CC BY-SA 4.0'},
  {id:'1D',name:'Airbus A330-300',land:'EU',v:{pax:440,rw:11750,kmh:871,span:60.3,len:63.66,mtow:242,bj:1992},wp:'Airbus A330',f:'4300streetcar, CC BY 4.0'},
  {id:'2A',name:'Boeing 747-8',land:'USA',v:{pax:605,rw:14320,kmh:917,span:68.4,len:76.3,mtow:448,bj:2011},wp:'Boeing 747-8',f:'Juke Schweizer, CC BY-SA 4.0'},
  {id:'2B',name:'Boeing 777-300ER',land:'USA',v:{pax:550,rw:13650,kmh:905,span:64.8,len:73.9,mtow:351.5,bj:2003},wp:'Boeing 777',f:'Aero Icarus from Zürich, Switzerland, CC BY-SA 2.0'},
  {id:'2C',name:'Boeing 777-9',land:'USA',v:{pax:426,rw:13500,kmh:905,span:71.8,len:76.7,mtow:351.5,bj:2020},wp:'Boeing 777X',f:'Dan Nevill from Seattle, WA, United States, CC BY 2.0'},
  {id:'2D',name:'Boeing 787-9 Dreamliner',land:'USA',v:{pax:420,rw:14010,kmh:903,span:60.1,len:62.8,mtow:254,bj:2013},wp:'Boeing 787 Dreamliner',f:'4300streetcar, CC BY 4.0'},
  {id:'3A',name:'Boeing 767-300ER',land:'USA',v:{pax:375,rw:11070,kmh:851,span:47.6,len:54.9,mtow:186.9,bj:1986},wp:'Boeing 767',f:'Delta_Air_Lines_B767-300_N130DL.jpg: Ric…, CC BY-SA 2.0'},
  {id:'3B',name:'Boeing 757-200',land:'USA',v:{pax:239,rw:7250,kmh:850,span:38.05,len:47.3,mtow:115.7,bj:1982},wp:'Boeing 757',f:'4300streetcar, CC BY 4.0'},
  {id:'3C',name:'Boeing 737 MAX 8',land:'USA',v:{pax:210,rw:6570,kmh:839,span:35.9,len:39.5,mtow:82.6,bj:2016},wp:'Boeing 737 MAX',f:'KirkXWB, CC BY-SA 4.0'},
  {id:'3D',name:'Boeing 727-200',land:'USA',v:{pax:189,rw:4020,kmh:917,span:32.9,len:46.7,mtow:95,bj:1963},wp:'Boeing 727',f:'Iberia Airlines, CC BY 2.0'},
  {id:'4A',name:'Boeing 707-320',land:'USA',v:{pax:189,rw:9300,kmh:973,span:44.4,len:46.6,mtow:151,bj:1957},wp:'Boeing 707',f:'Mike Freer, GFDL 1.2'},
  {id:'4B',name:'Airbus A320neo',land:'EU',v:{pax:194,rw:6300,kmh:833,span:35.8,len:37.57,mtow:79,bj:2014},wp:'Airbus A320neo family',f:'BriYYZ from Toronto, Canada, CC BY-SA 2.0'},
  {id:'4C',name:'Airbus A321XLR',land:'EU',v:{pax:244,rw:8700,kmh:833,span:35.8,len:44.51,mtow:101,bj:2022},wp:'Airbus A321neo',f:'N509FZ, CC BY-SA 4.0'},
  {id:'4D',name:'Airbus A220-300',land:'EU',v:{pax:160,rw:6300,kmh:829,span:35.1,len:38.7,mtow:70.9,bj:2015},wp:'Airbus A220',f:'Romain COUPY, CC BY-SA 4.0'},
  {id:'5A',name:'Tupolew Tu-144',land:'SU',v:{pax:140,rw:6500,kmh:2200,span:28.8,len:65.5,mtow:207,bj:1968},wp:'Tupolev Tu-144',f:'clipperarctic, CC BY-SA 2.0'},
  {id:'5B',name:'Concorde',land:'EU',v:{pax:128,rw:7222,kmh:2179,span:25.6,len:61.66,mtow:185,bj:1969},wp:'Concorde',f:'Eduard Marmet, CC BY-SA 3.0'},
  {id:'5C',name:'McDonnell Douglas MD-11',land:'USA',v:{pax:410,rw:12455,kmh:876,span:51.97,len:61.6,mtow:286,bj:1990},wp:'McDonnell Douglas MD-11',f:'Björn Strey, CC BY-SA 2.0'},
  {id:'5D',name:'McDonnell Douglas DC-10',land:'USA',v:{pax:380,rw:9600,kmh:908,span:50.4,len:55.5,mtow:263,bj:1970},wp:'McDonnell Douglas DC-10',f:'Danielkang7744 at English Wikipedia, gemeinfrei'},
  {id:'6A',name:'Lockheed L-1011 TriStar',land:'USA',v:{pax:400,rw:7400,kmh:890,span:47.35,len:54.17,mtow:231,bj:1970},wp:'Lockheed L-1011 TriStar',f:'Aero Icarus from Zürich, Switzerland, CC BY-SA 2.0'},
  {id:'6B',name:'Airbus A300',land:'EU',v:{pax:345,rw:5375,kmh:847,span:44.84,len:53.61,mtow:165,bj:1972},wp:'Airbus A300',f:'Aero Icarus from Zürich, Switzerland, CC BY-SA 2.0'},
  {id:'6C',name:'Douglas DC-3',land:'USA',v:{pax:32,rw:2400,kmh:333,span:28.96,len:19.7,mtow:11.4,bj:1935},wp:'Douglas DC-3',f:'Towpilot, CC BY-SA 3.0'},
  {id:'6D',name:'Junkers Ju 52 „Tante Ju“',land:'D',v:{pax:17,rw:950,kmh:245,span:29.25,len:18.9,mtow:10.5,bj:1932},wp:'Junkers Ju 52',f:'Bernd K, CC BY-SA 4.0'},
  {id:'7A',name:'Lockheed Super Constellation',land:'USA',v:{pax:109,rw:8700,kmh:489,span:37.5,len:34.6,mtow:62.4,bj:1951},wp:'Lockheed L-1049 Super Constellation',f:'RuthAS, CC BY 3.0'},
  {id:'7B',name:'de Havilland Comet',land:'GB',v:{pax:81,rw:5190,kmh:809,span:35,len:34,mtow:73.5,bj:1949},wp:'de Havilland Comet',f:'BEA_De_Havilland_DH-106_Comet_4B_Manteuf…, GFDL 1.2'},
  {id:'7C',name:'Iljuschin Il-96',land:'RUS',v:{pax:300,rw:11000,kmh:870,span:60.1,len:55.3,mtow:250,bj:1988},wp:'Ilyushin Il-96',f:'N509FZ, CC BY-SA 4.0'},
  {id:'7D',name:'Tupolew Tu-154',land:'SU',v:{pax:180,rw:5200,kmh:900,span:37.55,len:47.9,mtow:104,bj:1968},wp:'Tupolev Tu-154',f:'Aktug Ates, GFDL 1.2'},
  {id:'8A',name:'Embraer E195-E2',land:'BR',v:{pax:146,rw:4800,kmh:833,span:35.12,len:41.5,mtow:61.5,bj:2019},wp:'Embraer E-Jet E2 family',f:'Valentin Hintikka from Finland, CC BY 2.0'},
  {id:'8B',name:'ATR 72',land:'EU',v:{pax:78,rw:1528,kmh:510,span:27.05,len:27.17,mtow:23,bj:1988},wp:'ATR 72',f:'Ken Fielding, CC BY-SA 3.0'},
  {id:'8C',name:'COMAC C919',land:'CN',v:{pax:192,rw:5555,kmh:834,span:35.8,len:38.9,mtow:78,bj:2017},wp:'Comac C919',f:'N509FZ, CC BY-SA 4.0'},
  {id:'8D',name:'Dash 8 Q400',land:'CDN',v:{pax:90,rw:2040,kmh:667,span:28.4,len:32.8,mtow:30.5,bj:1998},wp:'De Havilland Canada Dash 8',f:'MarcelX42, CC BY-SA 4.0'}
 ]
});
