const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  timer: document.querySelector("#timer-1"),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

// const timer = {
//   // isActive: false,
//   start(targetTime) {
//     // if (this.isActive) {
//     //   return;
//     // }
//     // this.isActive = true;
//     //const targetTime = new Date("Aug 25, 2021");

//     this.timerId = setInterval(() => {
//       const currentTime = Date.now();

//       this.deltaTime = targetTime - currentTime;
//       if (Math.floor(this.deltaTime / 1000) <= 0) {
//         this.stop();
//       }
//       updateTimer(this.deltaTime);
//     }, 1000);
//   },

//   stop() {
//     // clearInterval(this.timerId);
//     // this.isActive = false;
//     this.deltaTime = 0;
//     // updateTimer(this.deltaTime);
//   },
// };
// timer.start(new Date("Aug 23, 2021"));
//refs.startBtn.addEventListener("click", timer.start.bind(timer));
//refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

// function updateTimer(time, selector) {
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   // refs.days.textContent = days;
//   // refs.hours.textContent = hours;
//   // refs.mins.textContent = mins;
//   // refs.secs.textContent = secs;

//   selector.querySelector('span[data-value="days"]').textContent = days;
//   selector.querySelector('span[data-value="hours"]').textContent = hours;
//   selector.querySelector('span[data-value="mins"]').textContent = mins;
//   selector.querySelector('span[data-value="secs"]').textContent = secs;
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

//================== class ==================
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();

      this.deltaTime = this.targetDate - currentTime;
      if (Math.floor(this.deltaTime / 1000) <= 0) {
        this.stop();
      }
      this.updateTimer(this.deltaTime, this.selector);
    }, 1000);
  }

  stop() {
    this.deltaTime = 0;
  }

  updateTimer(time, selector) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    selector.querySelector('span[data-value="days"]').textContent = days;
    selector.querySelector('span[data-value="hours"]').textContent = hours;
    selector.querySelector('span[data-value="mins"]').textContent = mins;
    selector.querySelector('span[data-value="secs"]').textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  // targetDate: new Date("Aug 04, 2022"),
  targetDate: new Date(new Date().getTime() + 30000),
});

countdownTimer.start();
