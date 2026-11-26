// ===== Kartenset: Militärflugzeuge =====
// Werte: gerundete Angaben (Reichweite meist Überführungsreichweite). wp = Wikipedia-Artikel (Bildquelle), f = Foto-Urheber/Lizenz
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'kampfjets', name: 'Militärflugzeuge', title: 'Jäger & Bomber', icon: '✈️',
 colors: ['#455a64', '#556b2f'], dir: 'sets/kampfjets/', trump: '2D',
 stats: [
  { k: 'kmh',  n: 'Höchstgeschw.', u: 'km/h', hi: true },
  { k: 'rw',   n: 'Reichweite',    u: 'km',   hi: true },
  { k: 'gh',   n: 'Gipfelhöhe',    u: 'm',    hi: true },
  { k: 'mtow', n: 'Startgewicht',  u: 'kg',   hi: true },
  { k: 'len',  n: 'Länge',         u: 'm',    hi: true },
  { k: 'span', n: 'Spannweite',    u: 'm',    hi: true },
  { k: 'bj',   n: 'Erstflug',      u: '',     hi: true, note: 'jünger sticht' }
 ],
 cards: [
  {id:'1A',name:'Supermarine Spitfire',land:'GB',v:{kmh:657,rw:1135,gh:13100,mtow:3400,len:9.47,span:11.23,bj:1936},wp:'Supermarine Spitfire',f:'Airwolfhound, CC BY-SA 2.0'},
  {id:'1B',name:'Messerschmitt Bf 109',land:'D',v:{kmh:640,rw:850,gh:12000,mtow:3400,len:9.02,span:9.92,bj:1935},wp:'Messerschmitt Bf 109',f:'Hebenstreit, CC BY-SA 3.0 de'},
  {id:'1C',name:'North American P-51 Mustang',land:'USA',v:{kmh:703,rw:2755,gh:12800,mtow:5490,len:9.83,span:11.28,bj:1940},wp:'North American P-51 Mustang',f:'USAAF/361st FG Association (via Al Richa…, gemeinfrei'},
  {id:'1D',name:'Messerschmitt Me 262',land:'D',v:{kmh:900,rw:1050,gh:11450,mtow:7130,len:10.6,span:12.6,bj:1941},wp:'Messerschmitt Me 262',f:'USAF museum, gemeinfrei'},
  {id:'2A',name:'MiG-21',land:'SU',v:{kmh:2175,rw:1210,gh:17800,mtow:8825,len:14.7,span:7.15,bj:1955},wp:'Mikoyan-Gurevich MiG-21',f:'Gojanovic123456789, CC BY-SA 4.0'},
  {id:'2B',name:'F-4 Phantom II',land:'USA',v:{kmh:2370,rw:2600,gh:18300,mtow:28030,len:19.2,span:11.7,bj:1958},wp:'McDonnell Douglas F-4 Phantom II',f:'USAF, gemeinfrei'},
  {id:'2C',name:'Saab 35 Draken',land:'S',v:{kmh:2125,rw:2750,gh:20000,mtow:12270,len:15.35,span:9.42,bj:1955},wp:'Saab 35 Draken',f:'Blockhaj, CC BY-SA 4.0'},
  {id:'2D',name:'Lockheed SR-71 Blackbird',land:'USA',v:{kmh:3540,rw:5400,gh:25900,mtow:78000,len:32.7,span:16.9,bj:1964},wp:'Lockheed SR-71 Blackbird',f:'USAF / Judson Brohmer, gemeinfrei'},
  {id:'3A',name:'MiG-25',land:'SU',v:{kmh:3000,rw:1730,gh:20700,mtow:36720,len:19.75,span:14.0,bj:1964},wp:'Mikoyan-Gurevich MiG-25',f:'Leonid Faerberg (transport-photo.com), GFDL 1.2'},
  {id:'3B',name:'F-14 Tomcat',land:'USA',v:{kmh:2485,rw:2960,gh:15200,mtow:33720,len:19.1,span:19.55,bj:1970},wp:'Grumman F-14 Tomcat',f:'U.S. Navy photo, gemeinfrei'},
  {id:'3C',name:'F-15 Eagle',land:'USA',v:{kmh:2650,rw:5550,gh:20000,mtow:30845,len:19.43,span:13.05,bj:1972},wp:'McDonnell Douglas F-15 Eagle',f:'Airman 1st Class Matthew Seefeldt, gemeinfrei'},
  {id:'3D',name:'F-16 Fighting Falcon',land:'USA',v:{kmh:2120,rw:4220,gh:15240,mtow:19190,len:15.06,span:9.96,bj:1974},wp:'General Dynamics F-16 Fighting Falcon',f:'Master Sgt. Andy Dunaway, gemeinfrei'},
  {id:'4A',name:'F/A-18 Hornet',land:'USA',v:{kmh:1915,rw:3330,gh:15000,mtow:23400,len:17.1,span:12.3,bj:1978},wp:'McDonnell Douglas F/A-18 Hornet',f:'US Air Force, gemeinfrei'},
  {id:'4B',name:'MiG-29',land:'SU',v:{kmh:2400,rw:2100,gh:18000,mtow:18000,len:17.37,span:11.4,bj:1977},wp:'Mikoyan MiG-29',f:'Artem Katranzhi from Bakashikha, Russia, CC BY-SA 2.0'},
  {id:'4C',name:'Suchoi Su-27',land:'SU',v:{kmh:2500,rw:3530,gh:19000,mtow:30450,len:21.9,span:14.7,bj:1977},wp:'Sukhoi Su-27',f:'Dmitriy Pichugin, GFDL 1.2'},
  {id:'4D',name:'Panavia Tornado',land:'EU',v:{kmh:2400,rw:3890,gh:15240,mtow:28000,len:16.72,span:13.91,bj:1974},wp:'Panavia Tornado',f:'Corporal Mike Jones, OGL v1.0'},
  {id:'5A',name:'Dassault Mirage 2000',land:'F',v:{kmh:2530,rw:3335,gh:17060,mtow:17000,len:14.36,span:9.13,bj:1978},wp:'Dassault Mirage 2000',f:'Tim Felce (Airwolfhound), CC BY-SA 2.0'},
  {id:'5B',name:'Harrier II',land:'GB',v:{kmh:1085,rw:3300,gh:15000,mtow:14100,len:14.12,span:9.25,bj:1978},wp:'McDonnell Douglas AV-8B Harrier II',f:'Aldo Bidini, GFDL 1.2'},
  {id:'5C',name:'A-10 Thunderbolt II',land:'USA',v:{kmh:706,rw:4150,gh:13700,mtow:23000,len:16.26,span:17.53,bj:1972},wp:'Fairchild Republic A-10 Thunderbolt II',f:'Master Sgt. William Greer, U.S. Air Force, gemeinfrei'},
  {id:'5D',name:'Eurofighter Typhoon',land:'EU',v:{kmh:2495,rw:3790,gh:19810,mtow:23500,len:15.96,span:10.95,bj:1994},wp:'Eurofighter Typhoon',f:'Chris Lofting, GFDL 1.2'},
  {id:'6A',name:'Dassault Rafale',land:'F',v:{kmh:1912,rw:3700,gh:15835,mtow:24500,len:15.27,span:10.8,bj:1986},wp:'Dassault Rafale',f:'Tim Felce (Airwolfhound), CC BY-SA 2.0'},
  {id:'6B',name:'Saab JAS 39 Gripen',land:'S',v:{kmh:2204,rw:3200,gh:15240,mtow:14000,len:14.1,span:8.4,bj:1988},wp:'Saab JAS 39 Gripen',f:'Tuomo Salonen / SIMFinnish Aviation Museum, CC BY-SA 4.0'},
  {id:'6C',name:'F-22 Raptor',land:'USA',v:{kmh:2414,rw:2960,gh:19800,mtow:38000,len:18.9,span:13.56,bj:1997},wp:'Lockheed Martin F-22 Raptor',f:'F-22_Raptor.JPG: Master Sgt. Andy Dunaway, gemeinfrei'},
  {id:'6D',name:'F-35A Lightning II',land:'USA',v:{kmh:1930,rw:2200,gh:15240,mtow:31800,len:15.7,span:10.7,bj:2006},wp:'Lockheed Martin F-35 Lightning II',f:'U.S. Air Force photo by Master Sgt. Dona…, gemeinfrei'},
  {id:'7A',name:'Suchoi Su-57',land:'RUS',v:{kmh:2600,rw:3500,gh:20000,mtow:35000,len:20.1,span:14.1,bj:2010},wp:'Sukhoi Su-57',f:'Anna Zvereva from Tallinn, Estonia, CC BY-SA 2.0'},
  {id:'7B',name:'Boeing B-52 Stratofortress',land:'USA',v:{kmh:1047,rw:14080,gh:15000,mtow:220000,len:48.5,span:56.4,bj:1952},wp:'Boeing B-52 Stratofortress',f:'Airman 1st Class Victor J. Caputo, gemeinfrei'},
  {id:'7C',name:'Northrop B-2 Spirit',land:'USA',v:{kmh:1010,rw:11100,gh:15200,mtow:170600,len:21.0,span:52.4,bj:1989},wp:'Northrop B-2 Spirit',f:'Royal Air Force, OGL v1.0'},
  {id:'7D',name:'Rockwell B-1B Lancer',land:'USA',v:{kmh:1335,rw:12000,gh:18000,mtow:216400,len:44.5,span:41.8,bj:1974},wp:'Rockwell B-1 Lancer',f:'USAF, gemeinfrei'},
  {id:'8A',name:'Tupolew Tu-160',land:'SU',v:{kmh:2220,rw:12300,gh:16000,mtow:275000,len:54.1,span:55.7,bj:1981},wp:'Tupolev Tu-160',f:'Alex Beltyukov, CC BY-SA 3.0'},
  {id:'8B',name:'Lockheed C-130 Hercules',land:'USA',v:{kmh:590,rw:3800,gh:10060,mtow:70300,len:29.8,span:40.4,bj:1954},wp:'Lockheed C-130 Hercules',f:'U.S. Air Force photo by Tech. Sgt. Howar…, gemeinfrei'},
  {id:'8C',name:'Lockheed C-5 Galaxy',land:'USA',v:{kmh:932,rw:8900,gh:10900,mtow:381000,len:75.3,span:67.9,bj:1968},wp:'Lockheed C-5 Galaxy',f:'U.S. Air Force photo by Brett Snow, gemeinfrei'},
  {id:'8D',name:'Lockheed U-2',land:'USA',v:{kmh:805,rw:10300,gh:21300,mtow:18100,len:19.2,span:31.4,bj:1955},wp:'Lockheed U-2',f:'United States Department of the Air Force, gemeinfrei'}
 ]
});
