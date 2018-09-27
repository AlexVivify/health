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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./src/modules/bloodpressure.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examination__ = __webpack_require__(/*! ./examination */ 1);\n\n\nclass BloodPressure extends __WEBPACK_IMPORTED_MODULE_0__examination__[\"a\" /* default */]{\n  constructor(scheduled, lower, higher, pulse){\n    super(scheduled)\n    this.lower = lower\n    this.higher = higher\n    this.pulse = pulse\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = BloodPressure;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Jsb29kcHJlc3N1cmUuanM/MDlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbWluYXRpb24gZnJvbSBcIi4vZXhhbWluYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvb2RQcmVzc3VyZSBleHRlbmRzIEV4YW1pbmF0aW9ue1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZWQsIGxvd2VyLCBoaWdoZXIsIHB1bHNlKXtcbiAgICBzdXBlcihzY2hlZHVsZWQpXG4gICAgdGhpcy5sb3dlciA9IGxvd2VyXG4gICAgdGhpcy5oaWdoZXIgPSBoaWdoZXJcbiAgICB0aGlzLnB1bHNlID0gcHVsc2VcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYmxvb2RwcmVzc3VyZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./src/modules/examination.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Examination {\n  constructor(scheduled){\n    this.scheduled = scheduled\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Examination;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2V4YW1pbmF0aW9uLmpzP2QwOGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbWluYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZWQpe1xuICAgIHRoaXMuc2NoZWR1bGVkID0gc2NoZWR1bGVkXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2V4YW1pbmF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/modules/person.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\nclass Person {\n  constructor(firstname, lastname){\n    this.firstname = firstname\n    this.lastname = lastname\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Person;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcz9hNzkwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uIHtcbiAgY29uc3RydWN0b3IoZmlyc3RuYW1lLCBsYXN0bmFtZSl7XG4gICAgdGhpcy5maXJzdG5hbWUgPSBmaXJzdG5hbWVcbiAgICB0aGlzLmxhc3RuYW1lID0gbGFzdG5hbWVcbiAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL3BlcnNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************!*\
  !*** ./src/modules/accessories.js ***!
  \************************************/
/*! exports provided: formater, simulate */
/*! exports used: formater, simulate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return formater; });\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = simulate;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bloodpressure__ = __webpack_require__(/*! ./bloodpressure */ 0);\n\n\nlet formater = new Intl.DateTimeFormat(\"de-DE\")\nfunction simulate(examination){\n  if(examination instanceof __WEBPACK_IMPORTED_MODULE_0__bloodpressure__[\"a\" /* default */]){\n    examination.scheduled = formater.format(new Date(\"January 31 1980 12:30\"))\n    examination.higher = Math.floor(Math.random() * 100)\n    examination.lower = Math.floor(Math.random() * 100)\n    examination.pulse = Math.floor(Math.random() * 100)\n  }else{\n    examination.scheduled = formater.format(new Date)\n    examination.value = Math.floor(Math.random() * 100)\n    examination.lastmeal = Math.floor(Math.random() * 100)\n   }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FjY2Vzc29yaWVzLmpzP2VlYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb29kUHJlc3N1cmUgZnJvbSBcIi4vYmxvb2RwcmVzc3VyZVwiO1xuXG5leHBvcnQgbGV0IGZvcm1hdGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJkZS1ERVwiKVxuZXhwb3J0IGZ1bmN0aW9uIHNpbXVsYXRlKGV4YW1pbmF0aW9uKXtcbiAgaWYoZXhhbWluYXRpb24gaW5zdGFuY2VvZiBCbG9vZFByZXNzdXJlKXtcbiAgICBleGFtaW5hdGlvbi5zY2hlZHVsZWQgPSBmb3JtYXRlci5mb3JtYXQobmV3IERhdGUoXCJKYW51YXJ5IDMxIDE5ODAgMTI6MzBcIikpXG4gICAgZXhhbWluYXRpb24uaGlnaGVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgIGV4YW1pbmF0aW9uLmxvd2VyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgIGV4YW1pbmF0aW9uLnB1bHNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICB9ZWxzZXtcbiAgICBleGFtaW5hdGlvbi5zY2hlZHVsZWQgPSBmb3JtYXRlci5mb3JtYXQobmV3IERhdGUpXG4gICAgZXhhbWluYXRpb24udmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgZXhhbWluYXRpb24ubGFzdG1lYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYWNjZXNzb3JpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************************!*\
  !*** ./src/modules/sugarlevel.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examination__ = __webpack_require__(/*! ./examination */ 1);\n\n\nclass SugarLevel extends __WEBPACK_IMPORTED_MODULE_0__examination__[\"a\" /* default */]{\n  constructor(scheduled, value, lastmeal){\n    super(scheduled)\n    this.value = value\n    this.lastmeal = lastmeal\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = SugarLevel;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N1Z2FybGV2ZWwuanM/MTMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbWluYXRpb24gZnJvbSBcIi4vZXhhbWluYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VnYXJMZXZlbCBleHRlbmRzIEV4YW1pbmF0aW9ue1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZWQsIHZhbHVlLCBsYXN0bWVhbCl7XG4gICAgc3VwZXIoc2NoZWR1bGVkKVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMubGFzdG1lYWwgPSBsYXN0bWVhbFxuICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvc3VnYXJsZXZlbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_doctor__ = __webpack_require__(/*! ./modules/doctor */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_patient__ = __webpack_require__(/*! ./modules/patient */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_bloodpressure__ = __webpack_require__(/*! ./modules/bloodpressure */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_sugarlevel__ = __webpack_require__(/*! ./modules/sugarlevel */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_cholesterol__ = __webpack_require__(/*! ./modules/cholesterol */ 8);\n\n\n\n\n\n\n\nlet doctor = new __WEBPACK_IMPORTED_MODULE_0__modules_doctor__[\"a\" /* default */]('Milan', 'Milanovic')\nlet pacijent = new __WEBPACK_IMPORTED_MODULE_1__modules_patient__[\"a\" /* default */]('Dragan', 'Draganovic')\npacijent.setDoctor(doctor)\nlet exam1 = new __WEBPACK_IMPORTED_MODULE_2__modules_bloodpressure__[\"a\" /* default */]\nlet exam2 = new __WEBPACK_IMPORTED_MODULE_3__modules_sugarlevel__[\"a\" /* default */]\ndoctor.setExamination(exam1, pacijent);\npacijent.exacuteExamination(exam1);\ndoctor.setExamination(exam2, pacijent)\npacijent.exacuteExamination(exam2);\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdG9yIGZyb20gJy4vbW9kdWxlcy9kb2N0b3InO1xuaW1wb3J0IFBhdGllbnQgZnJvbSAnLi9tb2R1bGVzL3BhdGllbnQnO1xuaW1wb3J0IEJsb29kUHJlc3N1cmUgZnJvbSAnLi9tb2R1bGVzL2Jsb29kcHJlc3N1cmUnO1xuaW1wb3J0IFN1Z2FyTGV2ZWwgZnJvbSAnLi9tb2R1bGVzL3N1Z2FybGV2ZWwnO1xuaW1wb3J0IENob2xlc3Rlcm9sIGZyb20gJy4vbW9kdWxlcy9jaG9sZXN0ZXJvbCc7XG5cblxubGV0IGRvY3RvciA9IG5ldyBEb2N0b3IoJ01pbGFuJywgJ01pbGFub3ZpYycpXG5sZXQgcGFjaWplbnQgPSBuZXcgUGF0aWVudCgnRHJhZ2FuJywgJ0RyYWdhbm92aWMnKVxucGFjaWplbnQuc2V0RG9jdG9yKGRvY3RvcilcbmxldCBleGFtMSA9IG5ldyBCbG9vZFByZXNzdXJlXG5sZXQgZXhhbTIgPSBuZXcgU3VnYXJMZXZlbFxuZG9jdG9yLnNldEV4YW1pbmF0aW9uKGV4YW0xLCBwYWNpamVudCk7XG5wYWNpamVudC5leGFjdXRlRXhhbWluYXRpb24oZXhhbTEpO1xuZG9jdG9yLnNldEV4YW1pbmF0aW9uKGV4YW0yLCBwYWNpamVudClcbnBhY2lqZW50LmV4YWN1dGVFeGFtaW5hdGlvbihleGFtMik7XG5cblxuXG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************!*\
  !*** ./src/modules/doctor.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(/*! ./person */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessories__ = __webpack_require__(/*! ./accessories */ 3);\n\n\n\n\n\nclass Doctor extends __WEBPACK_IMPORTED_MODULE_0__person__[\"a\" /* default */] {\n  constructor(firstname, lastname, speciality){\n    super(firstname, lastname)\n    this.speciality = speciality\n    this.patients = []\n    console.log(`${__WEBPACK_IMPORTED_MODULE_1__accessories__[\"a\" /* formater */].format(new Date)} Created doctor  ${ this.firstname }  ${ this.lastname }`);\n\n  }\n\n  addPatient(patient){\n    this.patients.includes(patient)?\n    alert('Action denied, doctor already set for this patient!')\n    :this.patients.push(patient)\n  }\n\n  setExamination(examination, patient){\n    patient.setExamination(examination)\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Doctor;\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RvY3Rvci5qcz82MjlhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9wZXJzb25cIjtcbmltcG9ydCB7IGZvcm1hdGVyIH0gZnJvbSBcIi4vYWNjZXNzb3JpZXNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N0b3IgZXh0ZW5kcyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihmaXJzdG5hbWUsIGxhc3RuYW1lLCBzcGVjaWFsaXR5KXtcbiAgICBzdXBlcihmaXJzdG5hbWUsIGxhc3RuYW1lKVxuICAgIHRoaXMuc3BlY2lhbGl0eSA9IHNwZWNpYWxpdHlcbiAgICB0aGlzLnBhdGllbnRzID0gW11cbiAgICBjb25zb2xlLmxvZyhgJHtmb3JtYXRlci5mb3JtYXQobmV3IERhdGUpfSBDcmVhdGVkIGRvY3RvciAgJHsgdGhpcy5maXJzdG5hbWUgfSAgJHsgdGhpcy5sYXN0bmFtZSB9YCk7XG5cbiAgfVxuXG4gIGFkZFBhdGllbnQocGF0aWVudCl7XG4gICAgdGhpcy5wYXRpZW50cy5pbmNsdWRlcyhwYXRpZW50KT9cbiAgICBhbGVydCgnQWN0aW9uIGRlbmllZCwgZG9jdG9yIGFscmVhZHkgc2V0IGZvciB0aGlzIHBhdGllbnQhJylcbiAgICA6dGhpcy5wYXRpZW50cy5wdXNoKHBhdGllbnQpXG4gIH1cblxuICBzZXRFeGFtaW5hdGlvbihleGFtaW5hdGlvbiwgcGF0aWVudCl7XG4gICAgcGF0aWVudC5zZXRFeGFtaW5hdGlvbihleGFtaW5hdGlvbilcbiAgfVxufVxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZG9jdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************!*\
  !*** ./src/modules/patient.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(/*! ./person */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bloodpressure__ = __webpack_require__(/*! ./bloodpressure */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sugarlevel__ = __webpack_require__(/*! ./sugarlevel */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accessories__ = __webpack_require__(/*! ./accessories */ 3);\n\n\n\n\n\nclass Patient extends __WEBPACK_IMPORTED_MODULE_0__person__[\"a\" /* default */]{\n  constructor(firstname, lastname, jmbg, cartonId){\n    super(firstname, lastname)\n    this.jmbg = jmbg\n    this.cartonId = cartonId\n    this.examinations = []\n    console.log(`${__WEBPACK_IMPORTED_MODULE_3__accessories__[\"a\" /* formater */].format(new Date)} Created patient  ${this.firstname}  ${this.lastname} `);\n  }\n  setDoctor(doctor){\n    if(this.doctor !== undefined){\n      alert('Doctor already set')\n    }else{\n      this.doctor = doctor\n      var form  = new Intl.DateTimeFormat(\"de-DE\")\n\n      console.log(`${form.format(new Date)} Patient  ${this.firstname}  have chosen doctor ${this.doctor.firstname}`);\n    }\n\n  }\n  getDoctor(){\n    this.doctor !== undefined? this.doctor:alert('Please choose a doctor!')\n  }\n  setExamination(examination){\n    this.examinations.includes(examination)?alert('Examination already scheduled!'):this.examinations.push(examination)\n  }\n\n  exacuteExamination(examination){\n    if(this.examinations.includes(examination)){\n        Object(__WEBPACK_IMPORTED_MODULE_3__accessories__[\"b\" /* simulate */])(examination)\n        console.log('Patient examined successfuly on ' + __WEBPACK_IMPORTED_MODULE_3__accessories__[\"a\" /* formater */].format(new Date))\n        console.log('Results: ')\n      if(examination instanceof __WEBPACK_IMPORTED_MODULE_1__bloodpressure__[\"a\" /* default */]){\n        console.log('Scheduled: '+ examination.scheduled)\n        console.log('Lower pressure: ' + examination.lower)\n        console.log('Higher pressure: ' + examination.higher)\n        console.log('Pulse: ' + examination.pulse)\n      }else{\n        console.log('Scheduled: ' + examination.scheduled)\n        console.log('Value: ' + examination.value)\n        console.log('Last meal: ' + examination.lastmeal)\n      }\n    }else{\n      alert('Examination is not scheduled')\n    }\n\n  }\n\n\n\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Patient;\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhdGllbnQuanM/YzM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVyc29uIGZyb20gXCIuL3BlcnNvblwiO1xuaW1wb3J0IEJsb29kUHJlc3N1cmUgZnJvbSBcIi4vYmxvb2RwcmVzc3VyZVwiO1xuaW1wb3J0IFN1Z2FyTGV2ZWwgZnJvbSBcIi4vc3VnYXJsZXZlbFwiO1xuaW1wb3J0IHsgZm9ybWF0ZXIsIHNpbXVsYXRlIH0gZnJvbSBcIi4vYWNjZXNzb3JpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aWVudCBleHRlbmRzIFBlcnNvbntcbiAgY29uc3RydWN0b3IoZmlyc3RuYW1lLCBsYXN0bmFtZSwgam1iZywgY2FydG9uSWQpe1xuICAgIHN1cGVyKGZpcnN0bmFtZSwgbGFzdG5hbWUpXG4gICAgdGhpcy5qbWJnID0gam1iZ1xuICAgIHRoaXMuY2FydG9uSWQgPSBjYXJ0b25JZFxuICAgIHRoaXMuZXhhbWluYXRpb25zID0gW11cbiAgICBjb25zb2xlLmxvZyhgJHtmb3JtYXRlci5mb3JtYXQobmV3IERhdGUpfSBDcmVhdGVkIHBhdGllbnQgICR7dGhpcy5maXJzdG5hbWV9ICAke3RoaXMubGFzdG5hbWV9IGApO1xuICB9XG4gIHNldERvY3Rvcihkb2N0b3Ipe1xuICAgIGlmKHRoaXMuZG9jdG9yICE9PSB1bmRlZmluZWQpe1xuICAgICAgYWxlcnQoJ0RvY3RvciBhbHJlYWR5IHNldCcpXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmRvY3RvciA9IGRvY3RvclxuICAgICAgdmFyIGZvcm0gID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJkZS1ERVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyhgJHtmb3JtLmZvcm1hdChuZXcgRGF0ZSl9IFBhdGllbnQgICR7dGhpcy5maXJzdG5hbWV9ICBoYXZlIGNob3NlbiBkb2N0b3IgJHt0aGlzLmRvY3Rvci5maXJzdG5hbWV9YCk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0RG9jdG9yKCl7XG4gICAgdGhpcy5kb2N0b3IgIT09IHVuZGVmaW5lZD8gdGhpcy5kb2N0b3I6YWxlcnQoJ1BsZWFzZSBjaG9vc2UgYSBkb2N0b3IhJylcbiAgfVxuICBzZXRFeGFtaW5hdGlvbihleGFtaW5hdGlvbil7XG4gICAgdGhpcy5leGFtaW5hdGlvbnMuaW5jbHVkZXMoZXhhbWluYXRpb24pP2FsZXJ0KCdFeGFtaW5hdGlvbiBhbHJlYWR5IHNjaGVkdWxlZCEnKTp0aGlzLmV4YW1pbmF0aW9ucy5wdXNoKGV4YW1pbmF0aW9uKVxuICB9XG5cbiAgZXhhY3V0ZUV4YW1pbmF0aW9uKGV4YW1pbmF0aW9uKXtcbiAgICBpZih0aGlzLmV4YW1pbmF0aW9ucy5pbmNsdWRlcyhleGFtaW5hdGlvbikpe1xuICAgICAgICBzaW11bGF0ZShleGFtaW5hdGlvbilcbiAgICAgICAgY29uc29sZS5sb2coJ1BhdGllbnQgZXhhbWluZWQgc3VjY2Vzc2Z1bHkgb24gJyArIGZvcm1hdGVyLmZvcm1hdChuZXcgRGF0ZSkpXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRzOiAnKVxuICAgICAgaWYoZXhhbWluYXRpb24gaW5zdGFuY2VvZiBCbG9vZFByZXNzdXJlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NjaGVkdWxlZDogJysgZXhhbWluYXRpb24uc2NoZWR1bGVkKVxuICAgICAgICBjb25zb2xlLmxvZygnTG93ZXIgcHJlc3N1cmU6ICcgKyBleGFtaW5hdGlvbi5sb3dlcilcbiAgICAgICAgY29uc29sZS5sb2coJ0hpZ2hlciBwcmVzc3VyZTogJyArIGV4YW1pbmF0aW9uLmhpZ2hlcilcbiAgICAgICAgY29uc29sZS5sb2coJ1B1bHNlOiAnICsgZXhhbWluYXRpb24ucHVsc2UpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NjaGVkdWxlZDogJyArIGV4YW1pbmF0aW9uLnNjaGVkdWxlZClcbiAgICAgICAgY29uc29sZS5sb2coJ1ZhbHVlOiAnICsgZXhhbWluYXRpb24udmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdMYXN0IG1lYWw6ICcgKyBleGFtaW5hdGlvbi5sYXN0bWVhbClcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGFsZXJ0KCdFeGFtaW5hdGlvbiBpcyBub3Qgc2NoZWR1bGVkJylcbiAgICB9XG5cbiAgfVxuXG5cblxuXG59XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9wYXRpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************!*\
  !*** ./src/modules/cholesterol.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examination__ = __webpack_require__(/*! ./examination */ 1);\n\n\nclass Cholesterol extends __WEBPACK_IMPORTED_MODULE_0__examination__[\"a\" /* default */]{\n  constructor(scheduled, value, lastmeal){\n    super(scheduled)\n    this.value = value\n    this.lastmeal = lastmeal\n  }\n}\n/* unused harmony export default */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Nob2xlc3Rlcm9sLmpzP2YyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1pbmF0aW9uIGZyb20gXCIuL2V4YW1pbmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2xlc3Rlcm9sIGV4dGVuZHMgRXhhbWluYXRpb257XG4gIGNvbnN0cnVjdG9yKHNjaGVkdWxlZCwgdmFsdWUsIGxhc3RtZWFsKXtcbiAgICBzdXBlcihzY2hlZHVsZWQpXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5sYXN0bWVhbCA9IGxhc3RtZWFsXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2Nob2xlc3Rlcm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);