// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let bgflightScreen = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    takeOffButton.addEventListener("click", function() {
        let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (shuttleReady) {
            flightStatus.innerText = "Shuttle in flight.";
            bgflightScreen.style.backgroundColor = "blue";
            shuttleHeight.innerText = "10000";
        }
    })
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function() {
        let shuttleLanding = alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        bgflightScreen.style.backgroundColor = "green";
        shuttleHeight.innerText = "0";
    })
    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener("click", function() {
        let missionAbort = window.confirm("Confirm that you want to abort the mission.");
        if (missionAbort) {
            flightStatus.innerText = "Mission aborted.";
            bgflightScreen.setAttribute("style", "background-color: green");
            shuttleHeight.innerText = "0";  
        }
    })
    let rocketImg = document.getElementById("rocket");
    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function(){
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        shuttleHeightAmount += 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
        rocketImg.style.top -= 10;

    })
    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function() {
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        shuttleHeightAmount -= 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
    })
})