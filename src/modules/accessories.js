import BloodPressure from "./bloodpressure";

export let formater = new Intl.DateTimeFormat("de-DE")
export function simulate(examination){
  if(examination instanceof BloodPressure){
    examination.scheduled = formater.format(new Date("January 31 1980 12:30"))
    examination.higher = Math.floor(Math.random() * 100)
    examination.lower = Math.floor(Math.random() * 100)
    examination.pulse = Math.floor(Math.random() * 100)
  }else{
    examination.scheduled = formater.format(new Date)
    examination.value = Math.floor(Math.random() * 100)
    examination.lastmeal = Math.floor(Math.random() * 100)
   }
}

export class Message {
    constructor(x){
      this.value = x
    }
    set = function(x) {
      this.value + x;
    }
}

