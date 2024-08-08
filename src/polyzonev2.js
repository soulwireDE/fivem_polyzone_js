class PolyZone {
  constructor(polygons) {
      this.polygons = polygons; // Array von Polygonen
      this.activePolygons = new Set(); // Set der aktiven (betretenen) Polygone
  }

  // Methode, um zu prüfen, ob ein Punkt innerhalb eines Polygons liegt
  isPointInPolygon(point, polygon) {
      function isLeft(P0, P1, P2) {
          return (
              (P1.x - P0.x) * (P2.y - P0.y) - (P2.x - P0.x) * (P1.y - P0.y)
          );
      }

      let wn = 0; // winding number counter

      // loop through all edges of the polygon
      for (let i = 0; i < polygon.points.length; i++) {
          let P0 = polygon.points[i];
          let P1 = polygon.points[(i + 1) % polygon.points.length];

          if (P0.y <= point.y) {
              if (P1.y > point.y) {
                  // an upward crossing
                  if (isLeft(P0, P1, point) > 0) {
                      // point is left of edge
                      wn++;
                  }
              }
          } else {
              if (P1.y <= point.y) {
                  // a downward crossing
                  if (isLeft(P0, P1, point) < 0) {
                      // point is right of edge
                      wn--;
                  }
              }
          }
      }

      return wn !== 0;
  }

  // drawWall Funktion
  drawWall(start, end, minZ, maxZ, color) {
      // Zeichne die Wände zwischen den Punkten als Dreiecke
      for (let z = minZ; z < maxZ; z += 0.1) {
          DrawPoly(
              start.x, start.y, z,
              end.x, end.y, z,
              end.x, end.y, z + 0.1,
              color[0], color[1], color[2], color[3]
          );

          DrawPoly(
              start.x, start.y, z,
              end.x, end.y, z + 0.1,
              start.x, start.y, z + 0.1,
              color[0], color[1], color[2], color[3]
          );
      }
  }

  // Methode, um zu prüfen, ob ein Polygon innerhalb eines anderen Polygons liegt
  isPolygonInPolygon(innerPolygon, outerPolygon) {
      for (let i = 0; i < innerPolygon.points.length; i++) {
          if (!this.isPointInPolygon(innerPolygon.points[i], outerPolygon)) {
              return false;
          }
      }
      return true;
  }

  // Methode, um verschachtelte Polygone zu ermitteln
  findNestedPolygons() {
      let nestedPolygons = [];
      for (let i = 0; i < this.polygons.length; i++) {
          for (let j = 0; j < this.polygons.length; j++) {
              if (
                  i !== j &&
                  this.isPolygonInPolygon(this.polygons[i], this.polygons[j])
              ) {
                  nestedPolygons.push({
                      child: this.polygons[i],
                      parent: this.polygons[j],
                  });
              }
          }
      }
      return nestedPolygons;
  }

  // Methode, um zu prüfen, welche Polygone ein Punkt betritt oder verlässt
  checkPlayerPoint(playerPoint) {
      let enteredPolygons = [];
      let exitedPolygons = [];

      for (let i = 0; i < this.polygons.length; i++) {
          let polygon = this.polygons[i];
          let inside = this.isPointInPolygon(playerPoint, polygon);

          if (inside && !this.activePolygons.has(polygon)) {
              enteredPolygons.push(polygon);
              this.activePolygons.add(polygon);
          } else if (!inside && this.activePolygons.has(polygon)) {
              exitedPolygons.push(polygon);
              this.activePolygons.delete(polygon);
          }
      }

      return { enteredPolygons, exitedPolygons };
  }

  // Methode, um Events zu melden
  handleEvents(playerPoint) {
      let { enteredPolygons, exitedPolygons } =
          this.checkPlayerPoint(playerPoint);

      enteredPolygons.forEach((polygon) => {
        const msg =  `Entered Polygon ID: ${polygon.id}, Data: ${JSON.stringify(
          polygon.data
      )}`
          console.log(
            msg
          );
          TriggerEvent('chatMessage', '', { r: 255, g: 255, b: 255 }, msg);
          let parentPolygon = this.getParentPolygon(polygon);
          if (parentPolygon) {
              console.log(
                  `Parent Polygon ID: ${
                      parentPolygon.id
                  }, Data: ${JSON.stringify(parentPolygon.data)}`
              );
          }
      });

      exitedPolygons.forEach((polygon) => {
        const msg = `Exited Polygon ID: ${polygon.id}, Data: ${JSON.stringify(
                  polygon.data
              )}`

          console.log(
              msg
          );
          TriggerEvent('chatMessage', '', { r: 255, g: 0, b: 255 }, msg);
          let parentPolygon = this.getParentPolygon(polygon);
          if (parentPolygon) {
              console.log(
                  `Parent Polygon ID: ${
                      parentPolygon.id
                  }, Data: ${JSON.stringify(parentPolygon.data)}`
              );
          }
      });

      this.activePolygons.forEach((polygon) => {
          console.log(
              `Currently inside Polygon ID: ${
                  polygon.id
              }, Data: ${JSON.stringify(polygon.data)}`
          );
      });
  }

  // Methode, um das übergeordnete Polygon zu finden
  getParentPolygon(polygon) {
      for (let i = 0; i < this.polygons.length; i++) {
          if (
              this.polygons[i] !== polygon &&
              this.isPolygonInPolygon(polygon, this.polygons[i])
          ) {
              return this.polygons[i];
          }
      }
      return null;
  }

  showPolygonName(polygon, playerPos) {

    const distance = Vdist(playerPos[0], playerPos[1], playerPos[2], polygon.points[0].x, polygon.points[0].y, playerPos[2]);

    if (distance < 10.0) {
        SetTextFont(0);
        SetTextProportional(1);
        SetTextScale(0.0, 0.5);
        SetTextColour(255, 255, 255, 255);
        SetTextDropshadow(0, 0, 0, 0, 255);
        SetTextEdge(1, 0, 0, 0, 255);
        SetTextDropShadow();
        SetTextOutline();
        SetTextEntry("STRING");
        AddTextComponentString(`${polygon.data.name} (ID: ${polygon.id})`);
        DrawText(0.5, 0.5);
    }
}





  // Methode zum Zeichnen der Polygone in GTA V
  draw() {
    const zDrawDist = 36.0;
    const oColor = [255, 0, 0, 255]; // Outline color (red)
    const wColor = [0, 255, 0, 128]; // Walls color (green, 50% transparent)
    const overlapColor = [0, 0, 255, 128]; // Overlapping color (blue, 50% transparent)
    const plyPed = PlayerPedId();
    const [plyPosX, plyPosY, plyPosZ] = GetEntityCoords(plyPed);
    const minZ = (plyPosZ - zDrawDist) * 1.0;
    const maxZ = (plyPosZ + zDrawDist) * 1.0;

    this.polygons.forEach((polygon) => {
      if(polygon.debug !==true) return
        const points = polygon.points;
        const isOverlapping = this.activePolygons.has(polygon);

        points.forEach((currentPoint, index) => {
            const point = this.transformPoint(currentPoint);
            if (index < points.length - 1) {
                const p2 = this.transformPoint(points[index + 1]);
                this.drawWall(point, p2, minZ, maxZ, isOverlapping ? overlapColor : wColor);
            }
        });

        if (points.length > 2) {
            const firstPoint = this.transformPoint(points[0]);
            const lastPoint = this.transformPoint(points[points.length - 1]);
            this.drawWall(firstPoint, lastPoint, minZ, maxZ, isOverlapping ? overlapColor : wColor);
        }
    });
}

  // Hilfsmethode, um die Punkte von 3D-Koordinaten auf die 2D-Ebene zu transformieren
  transformPoint(point) {
      // Hier kannst du eine Umrechnung der Koordinaten vornehmen, wenn nötig
      // Dies ist ein einfacher Platzhalter, der keine Umrechnung vornimmt
      return { x: point.x, y: point.y };
  }

startDrawing() {
  setTick(async () => {
      this.draw();
      const plyPed = PlayerPedId();
      const playerPos = GetEntityCoords(plyPed);
    /*  this.polygons.forEach(polygon => {

          this.showPolygonName(polygon, playerPos);
      });
      */
      await Wait(3300); // Lässt die Schleife jede Frame ausführen
  });
}
}