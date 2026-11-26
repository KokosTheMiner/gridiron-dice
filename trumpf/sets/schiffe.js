// ===== Kartenset: Riesenschiffe (zivil) =====
// Werte: gerundete Angaben (BRZ = Bruttoraumzahl, bei alten Schiffen BRT). wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'schiffe', name: 'Riesenschiffe', title: 'Giganten der Meere', icon: '🚢',
 colors: ['#0d47a1', '#00838f'], dir: 'sets/schiffe/', trump: '1B',
 stats: [
  { k: 'len', n: 'Länge',       u: 'm',  hi: true },
  { k: 'br',  n: 'Breite',      u: 'm',  hi: true },
  { k: 'tg',  n: 'Tiefgang',    u: 'm',  hi: true },
  { k: 'brz', n: 'Größe (BRZ)', u: '',   hi: true },
  { k: 'kn',  n: 'Höchstgeschw.', u: 'kn', hi: true },
  { k: 'kw',  n: 'Leistung',    u: 'kW', hi: true },
  { k: 'bj',  n: 'Baujahr',     u: '',   hi: true, note: 'jünger sticht' }
 ],
 cards: [
  {id:'1A',name:'Batillus (Tanker)',land:'F',v:{len:414.2,br:63,tg:28.5,brz:275276,kn:16.7,kw:47800,bj:1976},wp:'Batillus',f:'Jacques Girard, Copyrighted free use'},
  {id:'1B',name:'Seawise Giant (Tanker)',land:'J',v:{len:458.5,br:68.8,tg:24.6,brz:260941,kn:16.5,kw:37300,bj:1979},wp:'Seawise Giant',f:'Nils Koch, CC BY-SA 4.0'},
  {id:'1C',name:'TI Europe (Tanker)',land:'KR',v:{len:380,br:68,tg:24.5,brz:234006,kn:16.5,kw:36900,bj:2002},wp:'TI-class supertanker',f:'Maurice F Scholten, MSF Photography, gemeinfrei'},
  {id:'1D',name:'Mozah (Gastanker)',land:'KR',v:{len:345,br:53.8,tg:12,brz:163922,kn:19.5,kw:43000,bj:2008},wp:'Mozah (ship)',f:'Nakilat, CC BY-SA 4.0'},
  {id:'2A',name:'Pioneering Spirit',land:'NL',v:{len:382,br:124,tg:25,brz:403342,kn:14,kw:95000,bj:2014},wp:'Pioneering Spirit',f:'kees torn, CC BY-SA 2.0'},
  {id:'2B',name:'Blue Marlin (Dockschiff)',land:'NL',v:{len:225,br:63,tg:13.3,brz:51821,kn:14.5,kw:12640,bj:2000},wp:'MV Blue Marlin',f:'U.S. Navy/Journalist 2nd Class Ryan C. M…, gemeinfrei'},
  {id:'2C',name:'Christophe de Margerie (Eis-Tanker)',land:'RUS',v:{len:299,br:50,tg:11.8,brz:128806,kn:19.5,kw:45000,bj:2016},wp:'Christophe de Margerie (ship)',f:'kremlin.ru website team, CC BY-SA 4.0'},
  {id:'2D',name:'Polarstern (Forschung)',land:'D',v:{len:118,br:25,tg:11.2,brz:12614,kn:16,kw:14000,bj:1982},wp:'RV Polarstern',f:'Hannes Grobe, Alfred Wegener Institute, CC BY-SA 2.5'},
  {id:'3A',name:'Icon of the Seas',land:'FIN',v:{len:364.75,br:48.5,tg:9.3,brz:248663,kn:22,kw:67500,bj:2024},wp:'Icon of the Seas',f:'Corey Seeman, CC BY-SA 4.0'},
  {id:'3B',name:'Wonder of the Seas',land:'F',v:{len:362,br:64,tg:9.3,brz:236857,kn:22,kw:67000,bj:2022},wp:'Wonder of the Seas',f:'Master0Garfield, CC0'},
  {id:'3C',name:'Oasis of the Seas',land:'FIN',v:{len:361.6,br:60.5,tg:9.3,brz:225282,kn:22.6,kw:97000,bj:2009},wp:'Oasis of the Seas',f:'Jack Adamenko, CC0'},
  {id:'3D',name:'Queen Mary 2',land:'GB',v:{len:345,br:41,tg:10.3,brz:149215,kn:29.6,kw:117200,bj:2003},wp:'Queen Mary 2',f:'Oceanhistory46, CC BY-SA 4.0'},
  {id:'4A',name:'Titanic',land:'GB',v:{len:269,br:28.2,tg:10.5,brz:46328,kn:23,kw:34000,bj:1912},wp:'Titanic',f:'Francis Godolphin Osbourne Stuart, gemeinfrei'},
  {id:'4B',name:'Normandie',land:'F',v:{len:313.8,br:36.4,tg:11.2,brz:83423,kn:32,kw:120000,bj:1935},wp:'SS Normandie',f:'SS_Normandie_at_sea.jpg: Vick the Viking…, CC BY 2.0'},
  {id:'4C',name:'SS United States',land:'USA',v:{len:302,br:31,tg:9.5,brz:53329,kn:38.3,kw:182000,bj:1952},wp:'SS United States',f:'unbekannt, gemeinfrei'},
  {id:'4D',name:'Queen Elizabeth 2',land:'GB',v:{len:293.5,br:32,tg:9.9,brz:70327,kn:32.5,kw:99000,bj:1969},wp:'Queen Elizabeth 2',f:'by Balou46. Cropped by HefePine23, CC BY-SA 4.0'},
  {id:'5A',name:'Queen Mary (1936)',land:'GB',v:{len:310.7,br:36,tg:11.9,brz:81237,kn:30,kw:120000,bj:1936},wp:'RMS Queen Mary',f:'RMS_Queen_Mary_Long_Beach_January_2011.j…, CC BY 2.0'},
  {id:'5B',name:'Bremen (1929)',land:'D',v:{len:286,br:31,tg:10.2,brz:51656,kn:28.5,kw:99000,bj:1929},wp:'SS Bremen (1928)',f:'unbekannt, gemeinfrei'},
  {id:'5C',name:'Lusitania',land:'GB',v:{len:240,br:26.7,tg:10.2,brz:31550,kn:25,kw:57000,bj:1907},wp:'RMS Lusitania',f:'George Grantham Bain, gemeinfrei'},
  {id:'5D',name:'Great Eastern',land:'GB',v:{len:211,br:25,tg:9.1,brz:18915,kn:14,kw:6000,bj:1858},wp:'SS Great Eastern',f:'most likely Robert Edward Holloway (d. 1…, gemeinfrei'},
  {id:'6A',name:'SS France',land:'F',v:{len:316,br:33.7,tg:10.5,brz:66343,kn:35,kw:120000,bj:1962},wp:'SS France (1960)',f:'Nikolay Chekanov, CC BY-SA 4.0'},
  {id:'6B',name:'AIDAnova',land:'D',v:{len:337,br:42,tg:8.8,brz:183858,kn:21.5,kw:61800,bj:2018},wp:'AIDAnova',f:'kees torn, CC BY-SA 2.0'},
  {id:'6C',name:'MSC World Europa',land:'F',v:{len:333,br:47,tg:9,brz:215863,kn:22,kw:69000,bj:2022},wp:'MSC World Europa',f:'ND44, CC BY-SA 4.0'},
  {id:'6D',name:'Color Fantasy (Fähre)',land:'N',v:{len:224,br:35,tg:6.8,brz:75027,kn:22,kw:31200,bj:2004},wp:'MS Color Fantasy',f:'Jelly, CC BY-SA 3.0'},
  {id:'7A',name:'Stena Hollandica (Fähre)',land:'S',v:{len:240,br:32,tg:6.4,brz:63039,kn:22,kw:33600,bj:2010},wp:'Stena Hollandica (2010)',f:'Harwich &amp; Dovercourt, CC BY-SA 2.0'},
  {id:'7B',name:'Emma Mærsk (Container)',land:'DK',v:{len:397,br:56.4,tg:15.5,brz:170794,kn:25.5,kw:80080,bj:2006},wp:'Emma Mærsk',f:'Stefan Brending (2eight), CC BY-SA 3.0 de'},
  {id:'7C',name:'Mærsk Mc-Kinney Møller (Container)',land:'DK',v:{len:399,br:59,tg:14.5,brz:194849,kn:23,kw:64000,bj:2013},wp:'Mærsk Mc-Kinney Møller (ship)',f:'Maersk Line, CC BY-SA 2.0'},
  {id:'7D',name:'Ever Given (Container)',land:'TW',v:{len:399.9,br:58.8,tg:14.5,brz:220940,kn:22.8,kw:59300,bj:2018},wp:'Ever Given',f:'S.J. de Waard, CC BY-SA 3.0'},
  {id:'8A',name:'MSC Irina (Container)',land:'CH',v:{len:399.9,br:61.3,tg:17,brz:236184,kn:22,kw:58000,bj:2023},wp:'MSC Irina',f:'Giridharseeman, CC0'},
  {id:'8B',name:'CMA CGM Jacques Saadé (Container)',land:'F',v:{len:400,br:61,tg:16,brz:236583,kn:22,kw:63840,bj:2020},wp:'CMA CGM Jacques Saadé',f:'Cmacgm13, CC BY-SA 4.0'},
  {id:'8C',name:'Vale Brasil (Erzfrachter)',land:'KR',v:{len:362,br:65,tg:23,brz:198980,kn:15.4,kw:29400,bj:2011},wp:'Vale Brasil',f:'Superfast1111, CC BY-SA 3.0'},
  {id:'8D',name:'Berge Stahl (Erzfrachter)',land:'N',v:{len:342,br:63.5,tg:23,brz:175720,kn:13.5,kw:20000,bj:1986},wp:'Berge Stahl',f:'Ctbolt, gemeinfrei'}
 ]
});
