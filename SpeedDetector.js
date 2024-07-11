function speedDetector(speed) {
    speed = parseInt(speed);

    if (isNaN(speed)) {
        console.log("Invalid speed input.");
        return;
    }

    if (speed < 70) {
        console.log("Ok");
    } else if (speed >= 70) {
        let demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("demeritPoints: " + demeritPoints);
        }
    }
}
// input speed
speedDetector();