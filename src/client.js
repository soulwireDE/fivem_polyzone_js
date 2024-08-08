
const points = [
    PolyVectorTools.vector2(299.04132080078, -1350.3809814453),
    PolyVectorTools.vector2(294.47015380859, -1355.0686035156),
    PolyVectorTools.vector2(285.49755859375, -1347.5473632812),
    PolyVectorTools.vector2(298.36239624023, -1349.8017578125)
  ];

  // Optionen für die PolyZone
  const options = {
    name: 'TestZone',
    debugPoly: true, // Setze dies auf true, um die Zone im Spiel zu visualisieren
    minZ: 24.0, // Minimaler Z-Wert der Zone
    maxZ: 34.0  // Maximaler Z-Wert der Zone
  };

  // Erstelle die PolyZone
  const myZone = new PolyZone(points, options);

  // Funktion, die ausgeführt wird, wenn der Spieler die Zone betritt oder verlässt
  function onPlayerInOut(isPointInside, point) {
    if (isPointInside) {
      console.log(`Spieler hat die Zone betreten: ${myZone.name}`);
    } else {
      console.log(`Spieler hat die Zone verlassen: ${myZone.name}`);
    }
  }

  // Überwache, ob der Spieler die Zone betritt oder verlässt
  myZone.onPlayerInOut(onPlayerInOut, 10); // Überprüfung alle 500ms

setTick(() => {

});
