let digitalClock = document.querySelector(".digital-clock");
let analogclock = {
  hourHand: document.querySelector(".hour-hand"),
  minHand: document.querySelector(".min-hand"),
  secHand: document.querySelector(".sec-hand"),
};
let time = {
  date: new Date(),
  hour() {
    return this.date.getHours();
  },
  min() {
    return this.date.getMinutes();
  },
  sec() {
    return this.date.getSeconds();
  },
};
console.log(time.hour());
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  /*let time = new time()
  digitalClock.innerText =
    time.hour() + " : " + time.min()  + " : " + time.sec() ;
*/
  digitalClock.innerText = hour + " : " + min + " : " + sec;
  let hdeg = hour * 30 + min /12;
  let mindeg = min * 6;
  let sdeg = sec * 6;
  analogclock.hourHand.style.transform =`rotateZ(${hdeg}deg)`;
  analogclock.minHand.style.transform =`rotateZ(${mindeg}deg)`;
  analogclock.secHand.style.transform =`rotateZ(${sdeg}deg)`;
});
