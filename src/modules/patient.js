import Person from "./person";
import BloodPressure from "./bloodpressure";
import SugarLevel from "./sugarlevel";
import { formater, simulate } from "./accessories";

export default class Patient extends Person{
  constructor(firstname, lastname, jmbg, cartonId){
    super(firstname, lastname)
    this.jmbg = jmbg
    this.cartonId = cartonId
    this.examinations = []
    console.log(formater.format(new Date)+" Created patient " + this.firstname + ' ' + this.lastname );
  }
  setDoctor(doctor){
    if(this.doctor !== undefined){
      alert('Doctor already set')
    }else{
      this.doctor = doctor
      var form  = new Intl.DateTimeFormat("de-DE")

      console.log(form.format(new Date)+" Patient " + this.firstname + ' ' + ' have chosen doctor ' + this.doctor.firstname );
    }

  }
  getDoctor(){
    if(this.doctor !== undefined){
      return this.doctor
    }else{
      alert('Please choose a doctor!')
    }
  }
  setExamination(examination){
    if(this.examinations.includes(examination)){
      alert('Examination already scheduled')
    }else{
      this.examinations.push(examination)
    }
  }

  exacuteExamination(examination){
    if(this.examinations.includes(examination)){
        simulate(examination)
        console.log('Patient examined successfuly on ' + formater.format(new Date))
        console.log('Results: ')
      if(examination instanceof BloodPressure){
        console.log('Scheduled: '+ examination.scheduled)
        console.log('Lower pressure: ' + examination.lower)
        console.log('Higher pressure: ' + examination.higher)
        console.log('Pulse: ' + examination.pulse)
      }else{
        console.log('Scheduled: ' + examination.scheduled)
        console.log('Value: ' + examination.value)
        console.log('Last meal: ' + examination.lastmeal)
      }
    }else{
      alert('Examination is not scheduled')
    }

  }




}


