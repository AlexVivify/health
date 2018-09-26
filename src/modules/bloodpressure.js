import Examination from "./examination";

export default class BloodPressure extends Examination{
  constructor(scheduled, lower, higher, pulse){
    super(scheduled)
    this.lower = lower
    this.higher = higher
    this.pulse = pulse
  }
}