// noclip.js

let isNoClipping = false;
let noclipSpeed = 1.0; // Geschwindigkeit der Bewegung
let heightSpeed = 0.5; // Geschwindigkeit der Höhenänderung

let playerPed;
let lastMouseY = 0;

// Funktion um No-Clip zu aktivieren/deaktivieren
function toggleNoClip() {
    isNoClipping = !isNoClipping;
    playerPed = PlayerPedId();
    SetEntityInvincible(playerPed, isNoClipping);
    SetPlayerInvincible(PlayerId(), isNoClipping);
    SetPlayerVisible(PlayerId(), isNoClipping);
}

// Funktion zum Steuern des No-Clip
function controlNoClip() {
    if (isNoClipping) {
        const [x, y, z] = GetEntityCoords(playerPed, true);
        const [heading] = GetGameplayCamRot(0); // Kamera-Rotation
        const [mouseX, mouseY] = GetNormalizedMousePosition();

        // Bewege den Spieler basierend auf der Mausbewegung
        const moveForward = GetForwardVectorFromHeading(heading) * noclipSpeed;
        const moveRight = GetRightVectorFromHeading(heading) * noclipSpeed;
        const moveUp = [0, 0, mouseY - lastMouseY].map(v => v * heightSpeed);

        // Aktualisiere die Spielerposition
        SetEntityCoordsNoOffset(playerPed, x + moveForward[0] + moveRight[0], y + moveForward[1] + moveRight[1], z + moveUp[2], true, true, true);

        lastMouseY = mouseY;
    }
}

// Helper-Funktion zum Erhalten des Vorwärtsvektors
function GetForwardVectorFromHeading(heading) {
    return [
        Math.sin(heading * Math.PI / 180),
        -Math.cos(heading * Math.PI / 180),
        0
    ];
}

// Helper-Funktion zum Erhalten des Rechtsvektors
function GetRightVectorFromHeading(heading) {
    return [
        -Math.cos(heading * Math.PI / 180),
        -Math.sin(heading * Math.PI / 180),
        0
    ];
}

// Helper-Funktion zum Erhalten der normalisierten Mausposition
function GetNormalizedMousePosition() {
    // Ersetze dies durch die Methode, die in deiner Umgebung funktioniert
    return [0, 0];
}

// Hauptloop
setTick(() => {
    controlNoClip();

    if (IsControlJustPressed(1, 289)) { // F5 als Hotkey für No-Clip
        toggleNoClip();
    }
});


RegisterCommand('noclip', () => {
    toggleNoClipMode();
}, false);

RegisterKeyMapping('noclip', 'Toggle NoClip', 'keyboard', 'F5');