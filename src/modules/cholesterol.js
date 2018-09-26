import Examination from "./examination";

export default class Cholesterol extends Examination{
  constructor(scheduled, value, lastmeal){
    super(scheduled)
    this.value = value
    this.lastmeal = lastmeal
  }
}