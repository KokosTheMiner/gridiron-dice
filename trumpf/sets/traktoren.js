// ===== Kartenset: Traktoren =====
// Neues Set hinzufügen: diese Datei kopieren (z. B. sets/lkw.js), Bilder in sets/<id>/<Kartennummer>.jpg (600×400) ablegen
// und in index.html eine Zeile <script src="sets/<id>.js"></script> ergänzen. Fertig – das Set erscheint im Startbildschirm.
//
// stats: k = Schlüssel, n = Name auf der Karte, u = Einheit, hi = true -> höherer Wert gewinnt, false -> niedrigerer Wert gewinnt
// trump: Kartennummer der Supertrumpf-Karte (sticht alle Karten außer den A-Karten)
// Werte: gerundete Angaben aus Wikipedia, Prospekten und Typenblättern – je nach Ausführung können sie abweichen.
// Fotos: Wikimedia Commons, Urheber und Lizenz siehe "f" (wird im Spiel unter "Bildnachweis" angezeigt).
(window.TRUMPF_SETS = window.TRUMPF_SETS || []).push({
 id: 'traktoren',
 name: 'Traktoren',
 title: 'Bulldogs & Giganten',
 colors: ['#c62828', '#1565c0'],
 dir: 'sets/traktoren/',
 trump: '4B',
 stats: [
  { k: 'ps',   n: 'Leistung',     u: 'PS',   hi: true },
  { k: 'ccm',  n: 'Hubraum',      u: 'cm³',  hi: true },
  { k: 'zyl',  n: 'Zylinder',     u: '',     hi: true },
  { k: 'kmh',  n: 'Höchstgeschw.', u: 'km/h', hi: true },
  { k: 'kg',   n: 'Leergewicht',  u: 'kg',   hi: true },
  { k: 'tank', n: 'Tankinhalt',   u: 'l',    hi: true },
  { k: 'bj',   n: 'Baujahr',      u: '',     hi: false, note: 'älter sticht' }
 ],
 cards: [
  { id: '1A', name: 'Lanz Bulldog D 9506',     land: 'D',   v: { ps: 45,  ccm: 10338, zyl: 1,  kmh: 17, kg: 3950,  tank: 110,  bj: 1937 }, f: 'Brbbl, CC BY-SA 3.0' },
  { id: '1B', name: 'Fordson Model F',         land: 'USA', v: { ps: 20,  ccm: 3916,  zyl: 4,  kmh: 11, kg: 1232,  tank: 80,   bj: 1917 }, f: 'newhollandag, CC BY-SA 2.0' },
  { id: '1C', name: 'McCormick Farmall H',     land: 'USA', v: { ps: 26,  ccm: 2490,  zyl: 4,  kmh: 26, kg: 2370,  tank: 59,   bj: 1939 }, f: 'Chr. Späth, gemeinfrei' },
  { id: '1D', name: 'Ferguson TE 20',          land: 'GB',  v: { ps: 28,  ccm: 2088,  zyl: 4,  kmh: 22, kg: 1150,  tank: 45,   bj: 1946 }, f: 'Hjart, CC BY-SA 4.0' },
  { id: '2A', name: 'Porsche-Diesel Junior 108', land: 'D', v: { ps: 14,  ccm: 822,   zyl: 1,  kmh: 20, kg: 920,   tank: 22,   bj: 1957 }, f: 'Cherubino, CC BY-SA 3.0' },
  { id: '2B', name: 'Steyr 80 „15er“',         land: 'A',   v: { ps: 15,  ccm: 1300,  zyl: 1,  kmh: 18, kg: 1200,  tank: 20,   bj: 1949 }, f: 'ChiemseeMan, gemeinfrei' },
  { id: '2C', name: 'Deutz F1L 514',           land: 'D',   v: { ps: 15,  ccm: 1330,  zyl: 1,  kmh: 15, kg: 1190,  tank: 20,   bj: 1950 }, f: 'H. Zell, CC BY-SA 3.0' },
  { id: '2D', name: 'Steyr 180',               land: 'A',   v: { ps: 26,  ccm: 2661,  zyl: 2,  kmh: 20, kg: 1800,  tank: 40,   bj: 1947 }, f: 'Johannes Maximilian, CC BY-SA 4.0' },
  { id: '3A', name: 'Belarus MTS-80',          land: 'SU',  v: { ps: 80,  ccm: 4750,  zyl: 4,  kmh: 34, kg: 3770,  tank: 130,  bj: 1974 }, f: 'George Chernilevsky, gemeinfrei' },
  { id: '3B', name: 'Zetor Crystal 8011',      land: 'CS',  v: { ps: 82,  ccm: 4562,  zyl: 4,  kmh: 30, kg: 3850,  tank: 160,  bj: 1969 }, f: 'Mutney, CC0' },
  { id: '3C', name: 'Fortschritt ZT 300',      land: 'DDR', v: { ps: 100, ccm: 6560,  zyl: 4,  kmh: 30, kg: 4820,  tank: 165,  bj: 1967 }, f: 'Matti Blume, CC BY-SA 4.0' },
  { id: '3D', name: 'Ursus C-330',             land: 'PL',  v: { ps: 30,  ccm: 1960,  zyl: 2,  kmh: 23, kg: 1870,  tank: 40,   bj: 1967 }, f: 'Adikpl, CC BY-SA 4.0' },
  { id: '4A', name: 'Kirowez K-700A',          land: 'SU',  v: { ps: 215, ccm: 14860, zyl: 8,  kmh: 30, kg: 12850, tank: 640,  bj: 1975 }, f: 'LutzBruno, CC BY-SA 3.0' },
  { id: '4B', name: 'Big Bud 16V-747',         land: 'USA', v: { ps: 760, ccm: 24122, zyl: 16, kmh: 13, kg: 45359, tank: 3785, bj: 1977 }, f: 'Myron Reynard, CC BY-SA 2.0' },
  { id: '4C', name: 'Schlüter Profi Trac 5000 TVL', land: 'D', v: { ps: 500, ccm: 21930, zyl: 12, kmh: 40, kg: 18000, tank: 1000, bj: 1978 }, f: 'Schlueter1300, gemeinfrei' },
  { id: '4D', name: 'MB-trac 1500',            land: 'D',   v: { ps: 150, ccm: 5675,  zyl: 6,  kmh: 40, kg: 6200,  tank: 185,  bj: 1976 }, f: 'joost j. bakker, CC BY 2.0' },
  { id: '5A', name: 'Ford TW-20',              land: 'GB',  v: { ps: 145, ccm: 6571,  zyl: 6,  kmh: 30, kg: 5800,  tank: 284,  bj: 1979 }, f: 'Vauxford, CC BY-SA 4.0' },
  { id: '5B', name: 'International 1056 XL',   land: 'USA', v: { ps: 105, ccm: 5867,  zyl: 6,  kmh: 29, kg: 4370,  tank: 140,  bj: 1977 }, f: 'Joost J. Bakker, CC BY 2.0' },
  { id: '5C', name: 'John Deere 4240',         land: 'USA', v: { ps: 125, ccm: 7636,  zyl: 6,  kmh: 32, kg: 5500,  tank: 257,  bj: 1978 }, f: 'Calreyn88, CC BY-SA 4.0' },
  { id: '5D', name: 'Unimog 406',              land: 'D',   v: { ps: 84,  ccm: 5675,  zyl: 6,  kmh: 71, kg: 4300,  tank: 90,   bj: 1963 }, f: 'Free Photo World, CC BY 2.0' },
  { id: '6A', name: 'Fendt 1050 Vario',        land: 'D',   v: { ps: 517, ccm: 12419, zyl: 6,  kmh: 60, kg: 14000, tank: 800,  bj: 2015 }, f: 'Manataworfl, CC BY-SA 4.0' },
  { id: '6B', name: 'John Deere 8R 410',       land: 'USA', v: { ps: 410, ccm: 9049,  zyl: 6,  kmh: 50, kg: 12500, tank: 727,  bj: 2020 }, f: 'Homoatrox, CC BY-SA 3.0' },
  { id: '6C', name: 'Case IH Quadtrac 715',    land: 'USA', v: { ps: 725, ccm: 15927, zyl: 6,  kmh: 40, kg: 25500, tank: 2385, bj: 2023 }, f: 'MarcelX42, CC BY-SA 4.0' },
  { id: '6D', name: 'Claas Xerion 5000',       land: 'D',   v: { ps: 530, ccm: 15600, zyl: 6,  kmh: 40, kg: 16000, tank: 1250, bj: 2014 }, f: 'Otopon, CC BY-SA 4.0' },
  { id: '7A', name: 'Steyr Terrus 6300 CVT',   land: 'A',   v: { ps: 300, ccm: 6728,  zyl: 6,  kmh: 50, kg: 9950,  tank: 630,  bj: 2016 }, f: 'Blonder1984, CC BY-SA 4.0' },
  { id: '7B', name: 'JCB Fastrac 8330',        land: 'GB',  v: { ps: 348, ccm: 8900,  zyl: 6,  kmh: 70, kg: 11900, tank: 600,  bj: 2014 }, f: 'MarcelX42, CC BY-SA 4.0' },
  { id: '7C', name: 'Valtra T234 Versu',       land: 'FIN', v: { ps: 250, ccm: 7400,  zyl: 6,  kmh: 50, kg: 7600,  tank: 380,  bj: 2014 }, f: 'Valtra Oy Ab, CC0' },
  { id: '7D', name: 'Massey Ferguson 8S.305',  land: 'F',   v: { ps: 305, ccm: 7400,  zyl: 6,  kmh: 50, kg: 10000, tank: 630,  bj: 2020 }, f: 'Bene Riobó, CC BY-SA 4.0' },
  { id: '8A', name: 'Lindner Geotrac 134ep',   land: 'A',   v: { ps: 136, ccm: 4400,  zyl: 4,  kmh: 40, kg: 4850,  tank: 165,  bj: 2014 }, f: 'MarcelX42, CC BY-SA 4.0' },
  { id: '8B', name: 'Kubota M7-173',           land: 'J',   v: { ps: 175, ccm: 6124,  zyl: 4,  kmh: 50, kg: 6650,  tank: 330,  bj: 2015 }, f: 'MB-one, CC BY-SA 4.0' },
  { id: '8C', name: 'New Holland T7.315',      land: 'GB',  v: { ps: 313, ccm: 6728,  zyl: 6,  kmh: 50, kg: 11000, tank: 630,  bj: 2016 }, f: 'Manataworfl, CC BY-SA 4.0' },
  { id: '8D', name: 'Deutz-Fahr 9340 TTV',     land: 'D',   v: { ps: 336, ccm: 7755,  zyl: 6,  kmh: 60, kg: 11700, tank: 600,  bj: 2015 }, f: 'MarcelX42, CC BY-SA 4.0' }
 ]
});
