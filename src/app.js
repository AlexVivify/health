import Doctor from './modules/doctor';
import Patient from './modules/patient';
import BloodPressure from './modules/bloodpressure';
import SugarLevel from './modules/sugarlevel';
import Cholesterol from './modules/cholesterol';
import { Message } from './modules/accessories';



let doctor = new Doctor('Milan', 'Milanovic')
let pacijent = new Patient('Dragan', 'Draganovic')
pacijent.setDoctor(doctor)
let exam1 = new BloodPressure
let exam2 = new SugarLevel
doctor.setExamination(exam1, pacijent);
pacijent.exacuteExamination(exam1);
doctor.setExamination(exam2, pacijent)
pacijent.exacuteExamination(exam2);

let message = new Message('ghdhf');
console.log(message.value)



