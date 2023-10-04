const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const raceLyt = document.getElementById("raceLyt");
const horses = document.querySelectorAll(".horse");

var raceLytWith = raceLyt.clientWidth;
var raceRaking = [];

function startEvent() {
  console.log(raceLytWith);
  for (let i = 0; i < horses.length; i++) {
    const el = horses[i];
    let distance = 0;

    let raceForwards = setInterval(() => {
      const randomNum = Math.random() * 1;
      distance = distance + randomNum;
      el.style.marginLeft = distance + "px";

      if (distance + 132 >= raceLytWith) {
        raceRaking.push(i+1);

        clearInterval(raceForwards);

        raceRaking.length === horses.length && console.log(raceRaking);
      }
    }, 1);
  }
}

function resetEvent() {
    for (let i = 0; i < horses.length; i++) {
        const el = horses[i];
        el.style.marginLeft = 0 + "px";
    }
}
