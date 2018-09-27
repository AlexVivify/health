'use strict'
import Person from "./person";
import { formater } from "./accessories";


export default class Doctor extends Person {
  constructor(firstname, lastname, speciality){
    super(firstname, lastname)
    this.speciality = speciality
    this.patients = []
    console.log(`${formater.format(new Date)} Created doctor  ${ this.firstname }  ${ this.lastname }`);

  }

  addPatient(patient){
    this.patients.includes(patient)?
    alert('Action denied, doctor already set for this patient!')
    :this.patients.push(patient)
  }

  setExamination(examination, patient){
    patient.setExamination(examination)
  }
}


