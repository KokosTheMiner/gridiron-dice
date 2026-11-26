// ===== Kartenset: Tiere =====
// Werte: typische Werte ausgewachsener Tiere (Größe = Körperlänge bzw. Höhe, Tragzeit bei Eierlegern = Brutzeit, Nachwuchs = Junge pro Wurf bzw. Eier pro Gelege)
// wp = Wikipedia-Artikel, f = Foto-Urheber/Lizenz. land = Lebensraum (keine Flagge)
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'tiere', name: 'Tiere', title: 'Wilde Tiere', icon: '🐘',
 colors: ['#2e7d32', '#ef8f00'], dir: 'sets/tiere/', trump: '1B',
 stats: [
  { k: 'kg',   n: 'Gewicht',        u: 'kg',    hi: true },
  { k: 'cm',   n: 'Größe',          u: 'cm',    hi: true },
  { k: 'kmh',  n: 'Höchstgeschw.',  u: 'km/h',  hi: true },
  { k: 'age',  n: 'Lebenserwartung', u: 'Jahre', hi: true },
  { k: 'tz',   n: 'Tragzeit/Brutzeit', u: 'Tage', hi: true },
  { k: 'jg',   n: 'Nachwuchs',      u: '',      hi: true }
 ],
 cards: [
  {id:'1A',name:'Afrikanischer Elefant',land:'AFR',v:{kg:6000,cm:700,kmh:40,age:70,tz:660,jg:1},wp:'African bush elephant',f:'Giles Laurent, CC BY-SA 4.0'},
  {id:'1B',name:'Blauwal',land:'MEER',v:{kg:150000,cm:2700,kmh:50,age:90,tz:335,jg:1},wp:'Blue whale',f:'NOAA Photo Library, gemeinfrei'},
  {id:'1C',name:'Giraffe',land:'AFR',v:{kg:1200,cm:550,kmh:60,age:25,tz:450,jg:1},wp:'Giraffe',f:'Muhammad Mahdi Karim Facebook The making…, GFDL 1.2'},
  {id:'1D',name:'Flusspferd',land:'AFR',v:{kg:3000,cm:450,kmh:30,age:45,tz:240,jg:1},wp:'Hippopotamus',f:'Muhammad Mahdi Karim, CC BY-SA 4.0'},
  {id:'2A',name:'Breitmaulnashorn',land:'AFR',v:{kg:2300,cm:400,kmh:50,age:45,tz:480,jg:1},wp:'White rhinoceros',f:'Giles Laurent, CC BY-SA 4.0'},
  {id:'2B',name:'Eisbär',land:'ARK',v:{kg:600,cm:250,kmh:40,age:30,tz:240,jg:2},wp:'Polar bear',f:'Alan Wilson, CC BY-SA 3.0'},
  {id:'2C',name:'Braunbär',land:'EUR',v:{kg:400,cm:250,kmh:50,age:30,tz:220,jg:2},wp:'Brown bear',f:'Yathin S Krishnappa, CC BY-SA 3.0'},
  {id:'2D',name:'Löwe',land:'AFR',v:{kg:190,cm:250,kmh:80,age:15,tz:110,jg:3},wp:'Lion',f:'Giles Laurent, CC BY-SA 4.0'},
  {id:'3A',name:'Tiger',land:'ASI',v:{kg:220,cm:300,kmh:65,age:20,tz:105,jg:3},wp:'Tiger',f:'Charles J. Sharp, CC BY-SA 4.0'},
  {id:'3B',name:'Gepard',land:'AFR',v:{kg:55,cm:140,kmh:110,age:12,tz:93,jg:4},wp:'Cheetah',f:'AfricanConservation, CC BY-SA 4.0'},
  {id:'3C',name:'Wolf',land:'EUR',v:{kg:45,cm:130,kmh:60,age:13,tz:63,jg:6},wp:'Wolf',f:'User:Mas3cf, CC BY-SA 4.0'},
  {id:'3D',name:'Rotfuchs',land:'EUR',v:{kg:7,cm:75,kmh:50,age:5,tz:52,jg:5},wp:'Red fox',f:'ClaudiaTen, CC BY-SA 4.0'},
  {id:'4A',name:'Gorilla',land:'AFR',v:{kg:180,cm:175,kmh:40,age:40,tz:260,jg:1},wp:'Western gorilla',f:'Brocken Inaglory, CC BY-SA 3.0'},
  {id:'4B',name:'Orang-Utan',land:'ASI',v:{kg:90,cm:150,kmh:5,age:45,tz:250,jg:1},wp:'Orangutan',f:'Eleifert, CC BY-SA 3.0'},
  {id:'4C',name:'Rotes Riesenkänguru',land:'AUS',v:{kg:85,cm:160,kmh:70,age:22,tz:33,jg:1},wp:'Red kangaroo',f:'fir0002 flagstaffotos, GFDL 1.2'},
  {id:'4D',name:'Zweifinger-Faultier',land:'AME',v:{kg:7,cm:70,kmh:0.3,age:20,tz:330,jg:1},wp:"Linnaeus's two-toed sloth",f:'Dick Culbert from Gibsons, B.C., Canada, CC BY 2.0'},
  {id:'5A',name:'Rothirsch',land:'EUR',v:{kg:200,cm:250,kmh:70,age:18,tz:235,jg:1},wp:'Red deer',f:'Lviatour, CC BY-SA 3.0'},
  {id:'5B',name:'Wildschwein',land:'EUR',v:{kg:150,cm:180,kmh:48,age:12,tz:115,jg:6},wp:'Wild boar',f:'Valentin Panzirsch, CC BY-SA 3.0 at'},
  {id:'5C',name:'Alpensteinbock',land:'EUR',v:{kg:100,cm:160,kmh:45,age:20,tz:167,jg:1},wp:'Alpine ibex',f:'Giles Laurent, CC BY-SA 4.0'},
  {id:'5D',name:'Alpenmurmeltier',land:'EUR',v:{kg:6,cm:55,kmh:15,age:15,tz:34,jg:4},wp:'Alpine marmot',f:'Photography captured by Giles Laurent, CC BY-SA 4.0'},
  {id:'6A',name:'Steinadler',land:'EUR',v:{kg:6,cm:90,kmh:320,age:30,tz:43,jg:2},wp:'Golden eagle',f:'Giles Laurent, CC BY-SA 4.0'},
  {id:'6B',name:'Wanderfalke',land:'EUR',v:{kg:1,cm:45,kmh:390,age:17,tz:33,jg:4},wp:'Peregrine falcon',f:'Mykola Swarnyk, CC BY-SA 3.0'},
  {id:'6C',name:'Strauß',land:'AFR',v:{kg:130,cm:250,kmh:70,age:45,tz:42,jg:10},wp:'Common ostrich',f:'Yathin S Krishnappa, CC BY-SA 4.0'},
  {id:'6D',name:'Kaiserpinguin',land:'ANT',v:{kg:35,cm:120,kmh:10,age:20,tz:64,jg:1},wp:'Emperor penguin',f:'Ian Duffy from UK, CC BY 2.0'},
  {id:'7A',name:'Leistenkrokodil',land:'ASI',v:{kg:1000,cm:600,kmh:29,age:70,tz:90,jg:50},wp:'Saltwater crocodile',f:'Obtained from Molly Ebersold of the St. …, gemeinfrei'},
  {id:'7B',name:'Komodowaran',land:'ASI',v:{kg:70,cm:300,kmh:20,age:30,tz:220,jg:25},wp:'Komodo dragon',f:'James Jolokia (james1203), CC BY 4.0'},
  {id:'7C',name:'Netzpython',land:'ASI',v:{kg:150,cm:650,kmh:2,age:25,tz:80,jg:50},wp:'Reticulated python',f:'Foto: Mariluna…, CC BY-SA 3.0'},
  {id:'7D',name:'Weißer Hai',land:'MEER',v:{kg:1100,cm:500,kmh:56,age:70,tz:365,jg:8},wp:'Great white shark',f:'Pterantula (Terry Goss) at en.wikipedia, CC BY 2.5'},
  {id:'8A',name:'Orca (Schwertwal)',land:'MEER',v:{kg:6000,cm:800,kmh:56,age:50,tz:520,jg:1},wp:'Orca',f:'Robert Pittman, gemeinfrei'},
  {id:'8B',name:'Großer Tümmler (Delfin)',land:'MEER',v:{kg:300,cm:380,kmh:35,age:40,tz:365,jg:1},wp:'Common bottlenose dolphin',f:'NASA, gemeinfrei'},
  {id:'8C',name:'Galápagos-Riesenschildkröte',land:'AME',v:{kg:300,cm:150,kmh:0.3,age:150,tz:180,jg:10},wp:'Galápagos tortoise',f:'Matthew Field, CC BY-SA 3.0'},
  {id:'8D',name:'Fleckvieh (Hausrind)',land:'EUR',v:{kg:750,cm:250,kmh:40,age:20,tz:285,jg:1},wp:'Simmental cattle',f:'Kim Hansen, CC BY-SA 3.0'}
 ]
});
