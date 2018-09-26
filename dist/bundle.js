/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_doctor__ = __webpack_require__(/*! ./modules/doctor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_patient__ = __webpack_require__(/*! ./modules/patient */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_bloodpressure__ = __webpack_require__(/*! ./modules/bloodpressure */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_sugarlevel__ = __webpack_require__(/*! ./modules/sugarlevel */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_cholesterol__ = __webpack_require__(/*! ./modules/cholesterol */ 9);\n\n\n\n\n\n\n\n\nlet doctor = new __WEBPACK_IMPORTED_MODULE_0__modules_doctor__[\"a\" /* default */]('Milan', 'Milanovic')\nlet pacijent = new __WEBPACK_IMPORTED_MODULE_1__modules_patient__[\"a\" /* default */]('Dragan', 'Draganovic')\npacijent.setDoctor(doctor)\nlet exam1 = new __WEBPACK_IMPORTED_MODULE_2__modules_bloodpressure__[\"a\" /* default */]\nlet exam2 = new __WEBPACK_IMPORTED_MODULE_3__modules_sugarlevel__[\"a\" /* default */]\ndoctor.setExamination(exam1, pacijent);\npacijent.exacuteExamination(exam1);\ndoctor.setExamination(exam2, pacijent)\npacijent.exacuteExamination(exam2);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdG9yIGZyb20gJy4vbW9kdWxlcy9kb2N0b3InO1xuaW1wb3J0IFBhdGllbnQgZnJvbSAnLi9tb2R1bGVzL3BhdGllbnQnO1xuaW1wb3J0IEJsb29kUHJlc3N1cmUgZnJvbSAnLi9tb2R1bGVzL2Jsb29kcHJlc3N1cmUnO1xuaW1wb3J0IFN1Z2FyTGV2ZWwgZnJvbSAnLi9tb2R1bGVzL3N1Z2FybGV2ZWwnO1xuaW1wb3J0IENob2xlc3Rlcm9sIGZyb20gJy4vbW9kdWxlcy9jaG9sZXN0ZXJvbCc7XG5cblxuXG5sZXQgZG9jdG9yID0gbmV3IERvY3RvcignTWlsYW4nLCAnTWlsYW5vdmljJylcbmxldCBwYWNpamVudCA9IG5ldyBQYXRpZW50KCdEcmFnYW4nLCAnRHJhZ2Fub3ZpYycpXG5wYWNpamVudC5zZXREb2N0b3IoZG9jdG9yKVxubGV0IGV4YW0xID0gbmV3IEJsb29kUHJlc3N1cmVcbmxldCBleGFtMiA9IG5ldyBTdWdhckxldmVsXG5kb2N0b3Iuc2V0RXhhbWluYXRpb24oZXhhbTEsIHBhY2lqZW50KTtcbnBhY2lqZW50LmV4YWN1dGVFeGFtaW5hdGlvbihleGFtMSk7XG5kb2N0b3Iuc2V0RXhhbWluYXRpb24oZXhhbTIsIHBhY2lqZW50KVxucGFjaWplbnQuZXhhY3V0ZUV4YW1pbmF0aW9uKGV4YW0yKTtcblxuXG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/*!*******************************!*\
  !*** ./src/modules/person.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\nclass Person {\n  constructor(firstname, lastname){\n    this.firstname = firstname\n    this.lastname = lastname\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Person;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcz9hNzkwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uIHtcbiAgY29uc3RydWN0b3IoZmlyc3RuYW1lLCBsYXN0bmFtZSl7XG4gICAgdGhpcy5maXJzdG5hbWUgPSBmaXJzdG5hbWVcbiAgICB0aGlzLmxhc3RuYW1lID0gbGFzdG5hbWVcbiAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL3BlcnNvbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************************!*\
  !*** ./src/modules/doctor.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(/*! ./person */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessories__ = __webpack_require__(/*! ./accessories */ 10);\n\n\n\n\n\nclass Doctor extends __WEBPACK_IMPORTED_MODULE_0__person__[\"a\" /* default */] {\n  constructor(firstname, lastname, speciality){\n    super(firstname, lastname)\n    this.speciality = speciality\n    this.patients = []\n    console.log(__WEBPACK_IMPORTED_MODULE_1__accessories__[\"a\" /* formater */].format(new Date)+\" Created doctor \" + this.firstname + ' ' + this.lastname );\n  }\n\n  addPatient(patient){\n    if(this.patients.includes(patient)){\n      alert('Action denied, doctor already set for this patient!')\n    }else{\n      this.patients.push(patient)\n    }\n  }\n\n  setExamination(examination, patient){\n    patient.setExamination(examination)\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Doctor;\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RvY3Rvci5qcz82MjlhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9wZXJzb25cIjtcbmltcG9ydCB7IGZvcm1hdGVyIH0gZnJvbSBcIi4vYWNjZXNzb3JpZXNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N0b3IgZXh0ZW5kcyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihmaXJzdG5hbWUsIGxhc3RuYW1lLCBzcGVjaWFsaXR5KXtcbiAgICBzdXBlcihmaXJzdG5hbWUsIGxhc3RuYW1lKVxuICAgIHRoaXMuc3BlY2lhbGl0eSA9IHNwZWNpYWxpdHlcbiAgICB0aGlzLnBhdGllbnRzID0gW11cbiAgICBjb25zb2xlLmxvZyhmb3JtYXRlci5mb3JtYXQobmV3IERhdGUpK1wiIENyZWF0ZWQgZG9jdG9yIFwiICsgdGhpcy5maXJzdG5hbWUgKyAnICcgKyB0aGlzLmxhc3RuYW1lICk7XG4gIH1cblxuICBhZGRQYXRpZW50KHBhdGllbnQpe1xuICAgIGlmKHRoaXMucGF0aWVudHMuaW5jbHVkZXMocGF0aWVudCkpe1xuICAgICAgYWxlcnQoJ0FjdGlvbiBkZW5pZWQsIGRvY3RvciBhbHJlYWR5IHNldCBmb3IgdGhpcyBwYXRpZW50IScpXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnBhdGllbnRzLnB1c2gocGF0aWVudClcbiAgICB9XG4gIH1cblxuICBzZXRFeGFtaW5hdGlvbihleGFtaW5hdGlvbiwgcGF0aWVudCl7XG4gICAgcGF0aWVudC5zZXRFeGFtaW5hdGlvbihleGFtaW5hdGlvbilcbiAgfVxufVxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZG9jdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************!*\
  !*** ./src/modules/patient.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(/*! ./person */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bloodpressure__ = __webpack_require__(/*! ./bloodpressure */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sugarlevel__ = __webpack_require__(/*! ./sugarlevel */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accessories__ = __webpack_require__(/*! ./accessories */ 10);\n\n\n\n\n\nclass Patient extends __WEBPACK_IMPORTED_MODULE_0__person__[\"a\" /* default */]{\n  constructor(firstname, lastname, jmbg, cartonId){\n    super(firstname, lastname)\n    this.jmbg = jmbg\n    this.cartonId = cartonId\n    this.examinations = []\n    console.log(__WEBPACK_IMPORTED_MODULE_3__accessories__[\"a\" /* formater */].format(new Date)+\" Created patient \" + this.firstname + ' ' + this.lastname );\n  }\n  setDoctor(doctor){\n    if(this.doctor !== undefined){\n      alert('Doctor already set')\n    }else{\n      this.doctor = doctor\n      var form  = new Intl.DateTimeFormat(\"de-DE\")\n\n      console.log(form.format(new Date)+\" Patient \" + this.firstname + ' ' + ' have chosen doctor ' + this.doctor.firstname );\n    }\n\n  }\n  getDoctor(){\n    if(this.doctor !== undefined){\n      return this.doctor\n    }else{\n      alert('Please choose a doctor!')\n    }\n  }\n  setExamination(examination){\n    if(this.examinations.includes(examination)){\n      alert('Examination already scheduled')\n    }else{\n      this.examinations.push(examination)\n    }\n  }\n\n  exacuteExamination(examination){\n    if(this.examinations.includes(examination)){\n        Object(__WEBPACK_IMPORTED_MODULE_3__accessories__[\"b\" /* simulate */])(examination)\n        console.log('Patient examined successfuly on ' + __WEBPACK_IMPORTED_MODULE_3__accessories__[\"a\" /* formater */].format(new Date))\n        console.log('Results: ')\n      if(examination instanceof __WEBPACK_IMPORTED_MODULE_1__bloodpressure__[\"a\" /* default */]){\n        console.log('Scheduled: '+ examination.scheduled)\n        console.log('Lower pressure: ' + examination.lower)\n        console.log('Higher pressure: ' + examination.higher)\n        console.log('Pulse: ' + examination.pulse)\n      }else{\n        console.log('Scheduled: ' + examination.scheduled)\n        console.log('Value: ' + examination.value)\n        console.log('Last meal: ' + examination.lastmeal)\n      }\n    }else{\n      alert('Examination is not scheduled')\n    }\n\n  }\n\n\n\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Patient;\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhdGllbnQuanM/YzM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVyc29uIGZyb20gXCIuL3BlcnNvblwiO1xuaW1wb3J0IEJsb29kUHJlc3N1cmUgZnJvbSBcIi4vYmxvb2RwcmVzc3VyZVwiO1xuaW1wb3J0IFN1Z2FyTGV2ZWwgZnJvbSBcIi4vc3VnYXJsZXZlbFwiO1xuaW1wb3J0IHsgZm9ybWF0ZXIsIHNpbXVsYXRlIH0gZnJvbSBcIi4vYWNjZXNzb3JpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aWVudCBleHRlbmRzIFBlcnNvbntcbiAgY29uc3RydWN0b3IoZmlyc3RuYW1lLCBsYXN0bmFtZSwgam1iZywgY2FydG9uSWQpe1xuICAgIHN1cGVyKGZpcnN0bmFtZSwgbGFzdG5hbWUpXG4gICAgdGhpcy5qbWJnID0gam1iZ1xuICAgIHRoaXMuY2FydG9uSWQgPSBjYXJ0b25JZFxuICAgIHRoaXMuZXhhbWluYXRpb25zID0gW11cbiAgICBjb25zb2xlLmxvZyhmb3JtYXRlci5mb3JtYXQobmV3IERhdGUpK1wiIENyZWF0ZWQgcGF0aWVudCBcIiArIHRoaXMuZmlyc3RuYW1lICsgJyAnICsgdGhpcy5sYXN0bmFtZSApO1xuICB9XG4gIHNldERvY3Rvcihkb2N0b3Ipe1xuICAgIGlmKHRoaXMuZG9jdG9yICE9PSB1bmRlZmluZWQpe1xuICAgICAgYWxlcnQoJ0RvY3RvciBhbHJlYWR5IHNldCcpXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmRvY3RvciA9IGRvY3RvclxuICAgICAgdmFyIGZvcm0gID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJkZS1ERVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyhmb3JtLmZvcm1hdChuZXcgRGF0ZSkrXCIgUGF0aWVudCBcIiArIHRoaXMuZmlyc3RuYW1lICsgJyAnICsgJyBoYXZlIGNob3NlbiBkb2N0b3IgJyArIHRoaXMuZG9jdG9yLmZpcnN0bmFtZSApO1xuICAgIH1cblxuICB9XG4gIGdldERvY3Rvcigpe1xuICAgIGlmKHRoaXMuZG9jdG9yICE9PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuIHRoaXMuZG9jdG9yXG4gICAgfWVsc2V7XG4gICAgICBhbGVydCgnUGxlYXNlIGNob29zZSBhIGRvY3RvciEnKVxuICAgIH1cbiAgfVxuICBzZXRFeGFtaW5hdGlvbihleGFtaW5hdGlvbil7XG4gICAgaWYodGhpcy5leGFtaW5hdGlvbnMuaW5jbHVkZXMoZXhhbWluYXRpb24pKXtcbiAgICAgIGFsZXJ0KCdFeGFtaW5hdGlvbiBhbHJlYWR5IHNjaGVkdWxlZCcpXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmV4YW1pbmF0aW9ucy5wdXNoKGV4YW1pbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGV4YWN1dGVFeGFtaW5hdGlvbihleGFtaW5hdGlvbil7XG4gICAgaWYodGhpcy5leGFtaW5hdGlvbnMuaW5jbHVkZXMoZXhhbWluYXRpb24pKXtcbiAgICAgICAgc2ltdWxhdGUoZXhhbWluYXRpb24pXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXRpZW50IGV4YW1pbmVkIHN1Y2Nlc3NmdWx5IG9uICcgKyBmb3JtYXRlci5mb3JtYXQobmV3IERhdGUpKVxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0czogJylcbiAgICAgIGlmKGV4YW1pbmF0aW9uIGluc3RhbmNlb2YgQmxvb2RQcmVzc3VyZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTY2hlZHVsZWQ6ICcrIGV4YW1pbmF0aW9uLnNjaGVkdWxlZClcbiAgICAgICAgY29uc29sZS5sb2coJ0xvd2VyIHByZXNzdXJlOiAnICsgZXhhbWluYXRpb24ubG93ZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKCdIaWdoZXIgcHJlc3N1cmU6ICcgKyBleGFtaW5hdGlvbi5oaWdoZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKCdQdWxzZTogJyArIGV4YW1pbmF0aW9uLnB1bHNlKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTY2hlZHVsZWQ6ICcgKyBleGFtaW5hdGlvbi5zY2hlZHVsZWQpXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYWx1ZTogJyArIGV4YW1pbmF0aW9uLnZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZygnTGFzdCBtZWFsOiAnICsgZXhhbWluYXRpb24ubGFzdG1lYWwpXG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBhbGVydCgnRXhhbWluYXRpb24gaXMgbm90IHNjaGVkdWxlZCcpXG4gICAgfVxuXG4gIH1cblxuXG5cblxufVxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvcGF0aWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************!*\
  !*** ./src/modules/examination.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Examination {\n  constructor(scheduled){\n    this.scheduled = scheduled\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Examination;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2V4YW1pbmF0aW9uLmpzP2QwOGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbWluYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZWQpe1xuICAgIHRoaXMuc2NoZWR1bGVkID0gc2NoZWR1bGVkXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2V4YW1pbmF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**************************************!*\
  !*** ./src/modules/bloodpressure.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examination__ = __webpack_require__(/*! ./examination */ 6);\n\n\nclass BloodPressure extends __WEBPACK_IMPORTED_MODULE_0__examination__[\"a\" /* default */]{\n  constructor(scheduled, lower, higher, pulse){\n    super(scheduled)\n    this.lower = lower\n    this.higher = higher\n    this.pulse = pulse\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = BloodPressure;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Jsb29kcHJlc3N1cmUuanM/MDlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbWluYXRpb24gZnJvbSBcIi4vZXhhbWluYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvb2RQcmVzc3VyZSBleHRlbmRzIEV4YW1pbmF0aW9ue1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZWQsIGxvd2VyLCBoaWdoZXIsIHB1bHNlKXtcbiAgICBzdXBlcihzY2hlZHVsZWQpXG4gICAgdGhpcy5sb3dlciA9IGxvd2VyXG4gICAgdGhpcy5oaWdoZXIgPSBoaWdoZXJcbiAgICB0aGlzLnB1bHNlID0gcHVsc2VcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYmxvb2RwcmVzc3VyZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************!*\
  !*** ./src/modules/sugarlevel.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examination__ = __webpack_require__(/*! ./examination */ 6);\n\n\nclass SugarLevel extends __WEBPACK_IMPORTED_MODULE_0__examination__[\"a\" /* default */]{\n  constructor(scheduled, value, lastmeal){\n    super(scheduled)\n    this.value = value\n    this.lastmeal = lastmeal\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = SugarLevel;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N1Z2FybGV2ZWwuanM/MTMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbWluYXRpb24gZnJvbSBcIi4vZXhhbWluYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VnYXJMZXZlbCBleHRlbmRzIEV4YW1pbmF0aW9ue1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZWQsIHZhbHVlLCBsYXN0bWVhbCl7XG4gICAgc3VwZXIoc2NoZWR1bGVkKVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMubGFzdG1lYWwgPSBsYXN0bWVhbFxuICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvc3VnYXJsZXZlbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************!*\
  !*** ./src/modules/cholesterol.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examination__ = __webpack_require__(/*! ./examination */ 6);\n\n\nclass Cholesterol extends __WEBPACK_IMPORTED_MODULE_0__examination__[\"a\" /* default */]{\n  constructor(scheduled, value, lastmeal){\n    super(scheduled)\n    this.value = value\n    this.lastmeal = lastmeal\n  }\n}\n/* unused harmony export default */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Nob2xlc3Rlcm9sLmpzP2YyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1pbmF0aW9uIGZyb20gXCIuL2V4YW1pbmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2xlc3Rlcm9sIGV4dGVuZHMgRXhhbWluYXRpb257XG4gIGNvbnN0cnVjdG9yKHNjaGVkdWxlZCwgdmFsdWUsIGxhc3RtZWFsKXtcbiAgICBzdXBlcihzY2hlZHVsZWQpXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5sYXN0bWVhbCA9IGxhc3RtZWFsXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2Nob2xlc3Rlcm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./src/modules/accessories.js ***!
  \************************************/
/*! exports provided: formater, simulate */
/*! exports used: formater, simulate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return formater; });\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = simulate;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bloodpressure__ = __webpack_require__(/*! ./bloodpressure */ 7);\n\n\nlet formater = new Intl.DateTimeFormat(\"de-DE\")\nfunction simulate(examination){\n  if(examination instanceof __WEBPACK_IMPORTED_MODULE_0__bloodpressure__[\"a\" /* default */]){\n    examination.scheduled = formater.format(new Date(\"January 31 1980 12:30\"))\n    examination.higher = Math.floor(Math.random() * 100)\n    examination.lower = Math.floor(Math.random() * 100)\n    examination.pulse = Math.floor(Math.random() * 100)\n  }else{\n    examination.scheduled = formater.format(new Date)\n    examination.value = Math.floor(Math.random() * 100)\n    examination.lastmeal = Math.floor(Math.random() * 100)\n   }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hY2Nlc3Nvcmllcy5qcz9lZWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9vZFByZXNzdXJlIGZyb20gXCIuL2Jsb29kcHJlc3N1cmVcIjtcblxuZXhwb3J0IGxldCBmb3JtYXRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZGUtREVcIilcbmV4cG9ydCBmdW5jdGlvbiBzaW11bGF0ZShleGFtaW5hdGlvbil7XG4gIGlmKGV4YW1pbmF0aW9uIGluc3RhbmNlb2YgQmxvb2RQcmVzc3VyZSl7XG4gICAgZXhhbWluYXRpb24uc2NoZWR1bGVkID0gZm9ybWF0ZXIuZm9ybWF0KG5ldyBEYXRlKFwiSmFudWFyeSAzMSAxOTgwIDEyOjMwXCIpKVxuICAgIGV4YW1pbmF0aW9uLmhpZ2hlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICBleGFtaW5hdGlvbi5sb3dlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICBleGFtaW5hdGlvbi5wdWxzZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgfWVsc2V7XG4gICAgZXhhbWluYXRpb24uc2NoZWR1bGVkID0gZm9ybWF0ZXIuZm9ybWF0KG5ldyBEYXRlKVxuICAgIGV4YW1pbmF0aW9uLnZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgIGV4YW1pbmF0aW9uLmxhc3RtZWFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2FjY2Vzc29yaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ })
/******/ ]);