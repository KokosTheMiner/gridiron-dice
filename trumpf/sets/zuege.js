// ===== Kartenset: Schnellzüge =====
// Werte: gerundete Angaben für eine Zugeinheit (Höchstgeschw. = zugelassene Betriebsgeschwindigkeit). wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'zuege', name: 'Schnellzüge', title: 'Hochgeschwindigkeit', icon: '🚄',
 colors: ['#b71c1c', '#455a64'], dir: 'sets/zuege/', trump: '6C',
 stats: [
  { k: 'kmh',  n: 'Höchstgeschw.', u: 'km/h', hi: true },
  { k: 'kw',   n: 'Leistung',      u: 'kW',   hi: true },
  { k: 'pl',   n: 'Sitzplätze',    u: '',     hi: true },
  { k: 'len',  n: 'Länge',         u: 'm',    hi: true },
  { k: 't',    n: 'Gewicht',       u: 't',    hi: true },
  { k: 'wg',   n: 'Wagen',         u: '',     hi: true },
  { k: 'bj',   n: 'Im Einsatz seit', u: '',   hi: true, note: 'jünger sticht' }
 ],
 cards: [
  {id:'1A',name:'Shinkansen Serie 0',land:'J',v:{kmh:220,kw:11840,pl:1340,len:400,t:970,wg:16,bj:1964},wp:'0 Series Shinkansen',f:'ナダテ at Japanese Wikipedia (Nadate), CC BY 3.0'},
  {id:'1B',name:'Shinkansen Serie 300',land:'J',v:{kmh:270,kw:12000,pl:1323,len:402,t:710,wg:16,bj:1992},wp:'300 Series Shinkansen',f:'Sui-setz, gemeinfrei'},
  {id:'1C',name:'Shinkansen Serie 500',land:'J',v:{kmh:300,kw:18240,pl:1324,len:404,t:688,wg:16,bj:1997},wp:'500 Series Shinkansen',f:'Mitsuki-2368, CC BY-SA 3.0'},
  {id:'1D',name:'Shinkansen N700S',land:'J',v:{kmh:300,kw:17080,pl:1319,len:405,t:700,wg:16,bj:2020},wp:'N700S Series Shinkansen',f:'MaedaAkihiko, CC BY-SA 4.0'},
  {id:'2A',name:'Shinkansen E5 „Hayabusa“',land:'J',v:{kmh:320,kw:9600,pl:731,len:253,t:453,wg:10,bj:2011},wp:'E5 Series Shinkansen',f:'MaedaAkihiko, CC BY-SA 4.0'},
  {id:'2B',name:'Shinkansen E7',land:'J',v:{kmh:260,kw:12000,pl:934,len:302,t:540,wg:12,bj:2014},wp:'E7 Series Shinkansen',f:'MaedaAkihiko, CC BY-SA 4.0'},
  {id:'2C',name:'TGV Sud-Est',land:'F',v:{kmh:270,kw:6450,pl:368,len:200,t:385,wg:10,bj:1981},wp:'TGV Sud-Est',f:'joost j. bakker from ijmuiden, the nethe…, CC BY 2.0'},
  {id:'2D',name:'TGV Atlantique',land:'F',v:{kmh:300,kw:8800,pl:485,len:238,t:444,wg:12,bj:1989},wp:'TGV Atlantique',f:'Neimedia_, CC BY-SA 4.0'},
  {id:'3A',name:'TGV Duplex',land:'F',v:{kmh:320,kw:8800,pl:508,len:200,t:380,wg:10,bj:1996},wp:'TGV Duplex',f:'Cheng-en Cheng from Taichung City, Taiwan, CC BY-SA 2.0'},
  {id:'3B',name:'Eurostar e320',land:'GB',v:{kmh:320,kw:16000,pl:894,len:400,t:965,wg:16,bj:2015},wp:'British Rail Class 374',f:'Florian Pépellin, CC BY-SA 4.0'},
  {id:'3C',name:'Eurostar (Class 373)',land:'GB',v:{kmh:300,kw:12200,pl:750,len:394,t:752,wg:20,bj:1994},wp:'British Rail Class 373',f:'Florian Pépellin, CC BY-SA 4.0'},
  {id:'3D',name:'Thalys PBKA',land:'F',v:{kmh:300,kw:8800,pl:377,len:200,t:385,wg:10,bj:1996},wp:'Thalys PBKA',f:'Lars Steffens, CC BY-SA 2.0'},
  {id:'4A',name:'ICE 1',land:'D',v:{kmh:280,kw:9600,pl:703,len:358,t:849,wg:14,bj:1991},wp:'ICE 1',f:'Nelso Silva from Porto, Portugal, CC BY-SA 2.0'},
  {id:'4B',name:'ICE 2',land:'D',v:{kmh:280,kw:4800,pl:391,len:205,t:420,wg:8,bj:1996},wp:'ICE 2',f:'Rob Dammers, CC BY 2.0'},
  {id:'4C',name:'ICE 3 (BR 403)',land:'D',v:{kmh:330,kw:8000,pl:441,len:200,t:409,wg:8,bj:2000},wp:'ICE 3',f:'Sebastian Terfloth User:Sese_Ingolstadt, CC BY-SA 3.0'},
  {id:'4D',name:'ICE T (BR 411)',land:'D',v:{kmh:230,kw:4000,pl:390,len:185,t:368,wg:7,bj:1999},wp:'ICE T',f:'Sebastian Terfloth, CC BY-SA 2.5'},
  {id:'5A',name:'ÖBB Railjet',land:'A',v:{kmh:230,kw:6400,pl:408,len:205,t:410,wg:8,bj:2008},wp:'Railjet',f:'Liberaler Humanist, CC BY-SA 4.0'},
  {id:'5B',name:'ICE 4 (BR 412)',land:'D',v:{kmh:250,kw:9900,pl:918,len:346,t:670,wg:12,bj:2017},wp:'ICE 4',f:'Rob Dammers, CC BY 2.0'},
  {id:'5C',name:'ICE 3neo (BR 408)',land:'D',v:{kmh:320,kw:8000,pl:439,len:200,t:450,wg:8,bj:2022},wp:'ICE 3neo',f:'Nickteeuwen, CC BY 4.0'},
  {id:'5D',name:'SBB Giruno',land:'CH',v:{kmh:250,kw:6000,pl:403,len:202,t:375,wg:11,bj:2019},wp:'SBB RABe 501',f:'Daniel Wipf, CC BY-SA 4.0'},
  {id:'6A',name:'Frecciarossa 1000',land:'I',v:{kmh:300,kw:9800,pl:457,len:202,t:500,wg:8,bj:2015},wp:'Frecciarossa 1000',f:'Nelso Silva from Porto, Portugal, CC BY-SA 2.0'},
  {id:'6B',name:'AGV Italo',land:'I',v:{kmh:300,kw:7500,pl:460,len:200,t:410,wg:11,bj:2012},wp:'AGV Italo',f:'Hoff1980, CC BY-SA 3.0'},
  {id:'6C',name:'Transrapid Shanghai',land:'CN',v:{kmh:431,kw:15000,pl:446,len:153,t:250,wg:5,bj:2004},wp:'Shanghai maglev train',f:'User Alex Needham (own photography) on e…, gemeinfrei'},
  {id:'6D',name:'CRH380A',land:'CN',v:{kmh:380,kw:9600,pl:494,len:203,t:400,wg:8,bj:2010},wp:'CRH380A',f:'Samson Ng . D201@EAL, CC BY-SA 4.0'},
  {id:'7A',name:'CR400AF „Fuxing“',land:'CN',v:{kmh:350,kw:10400,pl:576,len:209,t:450,wg:8,bj:2017},wp:'CR400AF',f:'N509FZ, CC BY-SA 4.0'},
  {id:'7B',name:'AVE S-103',land:'E',v:{kmh:310,kw:8800,pl:404,len:200,t:425,wg:8,bj:2007},wp:'RENFE Class 103',f:'Kabelleger / David Gubler, CC BY-SA 3.0'},
  {id:'7C',name:'Talgo 350 „Pato“',land:'E',v:{kmh:330,kw:8000,pl:318,len:200,t:357,wg:14,bj:2005},wp:'RENFE Class 102',f:'Samson Ng . D201@EAL, CC BY-SA 4.0'},
  {id:'7D',name:'Sapsan',land:'RUS',v:{kmh:250,kw:8000,pl:604,len:250,t:667,wg:10,bj:2009},wp:'Sapsan',f:'Sergey Korovkin 84, CC BY-SA 3.0'},
  {id:'8A',name:'Acela Express',land:'USA',v:{kmh:241,kw:9200,pl:304,len:202,t:566,wg:8,bj:2000},wp:'Acela Express',f:'4300streetcar, CC BY 4.0'},
  {id:'8B',name:'Avelia Liberty (NextGen Acela)',land:'USA',v:{kmh:257,kw:9300,pl:386,len:210,t:540,wg:11,bj:2025},wp:'Avelia Liberty',f:'RedPottery18, CC BY 4.0'},
  {id:'8C',name:'KTX-Sancheon',land:'KR',v:{kmh:305,kw:8800,pl:363,len:201,t:403,wg:10,bj:2010},wp:'KTX-Sancheon',f:'Minseong Kim, CC BY-SA 4.0'},
  {id:'8D',name:'THSR 700T',land:'TW',v:{kmh:300,kw:10260,pl:989,len:304,t:503,wg:12,bj:2007},wp:'THSR 700T',f:'Takeshi Aida from Hong Kong, Hong Kong, CC BY-SA 2.0'}
 ]
});
