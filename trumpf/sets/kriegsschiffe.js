// ===== Kartenset: Kriegsschiffe =====
// Werte: gerundete Angaben (Verdrängung voll beladen bzw. getaucht, Besatzung ohne Fliegerstaffel wo bekannt). wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'kriegsschiffe', name: 'Kriegsschiffe', title: 'Stahl auf See', icon: '⚓',
 colors: ['#455a64', '#1a237e'], dir: 'sets/kriegsschiffe/', trump: '3B',
 stats: [
  { k: 'len', n: 'Länge',        u: 'm',  hi: true },
  { k: 'br',  n: 'Breite',       u: 'm',  hi: true },
  { k: 't',   n: 'Verdrängung',  u: 't',  hi: true },
  { k: 'kn',  n: 'Höchstgeschw.', u: 'kn', hi: true },
  { k: 'crew',n: 'Besatzung',    u: '',   hi: true },
  { k: 'kw',  n: 'Leistung',     u: 'kW', hi: true },
  { k: 'bj',  n: 'In Dienst',    u: '',   hi: true, note: 'jünger sticht' }
 ],
 cards: [
  {id:'1A',name:'Yamato (Schlachtschiff)',land:'J',v:{len:263,br:38.9,t:72800,kn:27,crew:2500,kw:110000,bj:1941},wp:'Japanese battleship Yamato',f:'Hasuya Hirohata, gemeinfrei'},
  {id:'1B',name:'Bismarck (Schlachtschiff)',land:'D',v:{len:251,br:36,t:50300,kn:30,crew:2092,kw:110000,bj:1940},wp:'German battleship Bismarck',f:'unbekannt, CC BY-SA 3.0 de'},
  {id:'1C',name:'USS Iowa (Schlachtschiff)',land:'USA',v:{len:270,br:33,t:57540,kn:33,crew:2700,kw:157000,bj:1943},wp:'USS Iowa (BB-61)',f:'PH1 Jeff Hilton, gemeinfrei'},
  {id:'1D',name:'HMS Dreadnought',land:'GB',v:{len:160.6,br:25,t:21060,kn:21,crew:773,kw:17400,bj:1906},wp:'HMS Dreadnought (1906)',f:'Adam Cuerden, gemeinfrei'},
  {id:'2A',name:'HMS Hood (Schlachtkreuzer)',land:'GB',v:{len:262,br:31.8,t:47430,kn:31,crew:1418,kw:107000,bj:1920},wp:'HMS Hood',f:'Photographer: Allan C. Green 1878 - 1954…, gemeinfrei'},
  {id:'2B',name:'Richelieu (Schlachtschiff)',land:'F',v:{len:247.9,br:33,t:47548,kn:30,crew:1569,kw:110000,bj:1940},wp:'French battleship Richelieu',f:'U.S. Navy photo 80-G-78789, gemeinfrei'},
  {id:'2C',name:'Scharnhorst (Schlachtschiff)',land:'D',v:{len:235,br:30,t:38100,kn:31,crew:1968,kw:122000,bj:1939},wp:'German battleship Scharnhorst',f:'unbekannt, CC BY-SA 3.0 de'},
  {id:'2D',name:'Mikasa (Linienschiff)',land:'J',v:{len:131.7,br:23.2,t:15140,kn:18,crew:860,kw:11000,bj:1902},wp:'Japanese battleship Mikasa',f:'江戸村のとくぞう, CC BY-SA 4.0'},
  {id:'3A',name:'USS Nimitz (Flugzeugträger)',land:'USA',v:{len:332.8,br:76.8,t:100000,kn:31.5,crew:5680,kw:194000,bj:1975},wp:'USS Nimitz',f:'United States Navy, gemeinfrei'},
  {id:'3B',name:'USS Gerald R. Ford (Flugzeugträger)',land:'USA',v:{len:337,br:78,t:100000,kn:30,crew:4539,kw:194000,bj:2017},wp:'USS Gerald R. Ford',f:'U.S. Navy photo by Mass Communication Sp…, gemeinfrei'},
  {id:'3C',name:'USS Enterprise CVN-65',land:'USA',v:{len:342,br:78.4,t:93284,kn:33.6,crew:4600,kw:210000,bj:1961},wp:'USS Enterprise (CVN-65)',f:'U.S. Navy photo by Photographers Mate Ai…, gemeinfrei'},
  {id:'3D',name:'Charles de Gaulle (Flugzeugträger)',land:'F',v:{len:261.5,br:64.4,t:42500,kn:27,crew:1950,kw:61000,bj:2001},wp:'French aircraft carrier Charles de Gaulle',f:'U.S. Navy photo by Mass Communication Sp…, gemeinfrei'},
  {id:'4A',name:'Admiral Kusnezow (Flugzeugträger)',land:'RUS',v:{len:305,br:72,t:58600,kn:29,crew:2600,kw:150000,bj:1990},wp:'Russian aircraft carrier Admiral Kuznetsov',f:'Сергей Федюнин, CC BY 4.0'},
  {id:'4B',name:'HMS Queen Elizabeth (Flugzeugträger)',land:'GB',v:{len:284,br:73,t:65000,kn:25,crew:1600,kw:109000,bj:2017},wp:'HMS Queen Elizabeth (R08)',f:'Dave Jenkins - InfoGibraltar, CC BY 2.0'},
  {id:'4C',name:'Fujian (Flugzeugträger)',land:'CN',v:{len:316,br:76,t:80000,kn:30,crew:2500,kw:150000,bj:2025},wp:'Chinese aircraft carrier Fujian',f:'EditQ, CC BY-SA 4.0'},
  {id:'4D',name:'Akagi (Flugzeugträger)',land:'J',v:{len:260.7,br:31.3,t:41300,kn:31,crew:1630,kw:99000,bj:1927},wp:'Japanese aircraft carrier Akagi',f:'Japanese Navy, gemeinfrei'},
  {id:'5A',name:'USS Midway (Flugzeugträger)',land:'USA',v:{len:296,br:72.5,t:64000,kn:33,crew:4100,kw:158000,bj:1945},wp:'USS Midway',f:'unbekannt, gemeinfrei'},
  {id:'5B',name:'Prinz Eugen (Kreuzer)',land:'D',v:{len:212.5,br:21.9,t:19050,kn:32,crew:1400,kw:98000,bj:1940},wp:'German cruiser Prinz Eugen',f:'U.S. Navy, gemeinfrei'},
  {id:'5C',name:'Pjotr Weliki (Kirow-Klasse)',land:'RUS',v:{len:252,br:28.5,t:28000,kn:32,crew:710,kw:103000,bj:1998},wp:'Russian battlecruiser Pyotr Velikiy',f:'unbekannt, gemeinfrei'},
  {id:'5D',name:'Moskwa (Kreuzer)',land:'SU',v:{len:186,br:20.8,t:12490,kn:32,crew:510,kw:90000,bj:1983},wp:'Russian cruiser Moskva',f:'Ministry of Defence, CC BY 4.0'},
  {id:'6A',name:'USS Zumwalt (Zerstörer)',land:'USA',v:{len:190,br:24.6,t:15995,kn:30,crew:175,kw:78000,bj:2016},wp:'USS Zumwalt',f:'National Museum of the U.S. Navy, gemeinfrei'},
  {id:'6B',name:'Arleigh-Burke-Klasse (Zerstörer)',land:'USA',v:{len:155,br:20,t:9200,kn:30,crew:330,kw:75000,bj:1991},wp:'Arleigh Burke-class destroyer',f:'U.S. Navy photo by Mass Communication Sp…, gemeinfrei'},
  {id:'6C',name:'Ticonderoga-Klasse (Kreuzer)',land:'USA',v:{len:173,br:16.8,t:9800,kn:32.5,crew:400,kw:60000,bj:1983},wp:'Ticonderoga-class cruiser',f:'U.S. Navy photo by Mass Communication Sp…, gemeinfrei'},
  {id:'6D',name:'Fregatte Sachsen (F124)',land:'D',v:{len:143,br:17.4,t:5800,kn:29,crew:255,kw:31500,bj:2004},wp:'German frigate Sachsen',f:'Ein Dahmer, CC BY-SA 4.0'},
  {id:'7A',name:'Typhoon-Klasse (U-Boot)',land:'SU',v:{len:175,br:23,t:48000,kn:27,crew:160,kw:74600,bj:1981},wp:'Typhoon-class submarine',f:'Bellona Foundation?, Attribution'},
  {id:'7B',name:'Ohio-Klasse (U-Boot)',land:'USA',v:{len:170.7,br:12.8,t:18750,kn:25,crew:155,kw:45000,bj:1981},wp:'Ohio-class submarine',f:'PH1 James Preston, gemeinfrei'},
  {id:'7C',name:'Borei-Klasse (U-Boot)',land:'RUS',v:{len:170,br:13.5,t:24000,kn:29,crew:107,kw:37000,bj:2013},wp:'Borei-class submarine',f:'Ildus Gilyazutdinov, CC BY 4.0'},
  {id:'7D',name:'Seawolf-Klasse (U-Boot)',land:'USA',v:{len:107.6,br:12.2,t:9140,kn:35,crew:140,kw:39000,bj:1997},wp:'Seawolf-class submarine',f:'Thiep Nguyen, gemeinfrei'},
  {id:'8A',name:'Virginia-Klasse (U-Boot)',land:'USA',v:{len:115,br:10.4,t:7900,kn:25,crew:135,kw:30000,bj:2004},wp:'Virginia-class submarine',f:'U.S. Navy photo by General Dynamics Elec…, gemeinfrei'},
  {id:'8B',name:'Astute-Klasse (U-Boot)',land:'GB',v:{len:97,br:11.3,t:7400,kn:30,crew:98,kw:27500,bj:2010},wp:'Astute-class submarine',f:'LA(Phot) Will Haigh, OGL v1.0'},
  {id:'8C',name:'U-Boot Typ XXI',land:'D',v:{len:76.7,br:6.6,t:2100,kn:17.2,crew:57,kw:2900,bj:1944},wp:'Type XXI submarine',f:'Sicherlich at German Wikipedia Retouched…, CC BY-SA 3.0'},
  {id:'8D',name:'U-Boot Typ VII C',land:'D',v:{len:67.1,br:6.2,t:871,kn:17.7,crew:50,kw:2400,bj:1940},wp:'Type VII submarine',f:'File:U995 2004 1.jpg: Darkone derivative…, CC BY-SA 2.0'}
 ]
});
