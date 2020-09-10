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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funções.js":
/*!********************!*\
  !*** ./funções.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n;\n\n//# sourceURL=webpack:///./fun%C3%A7%C3%B5es.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funEs = __webpack_require__(/*! ./funções */ \"./funções.js\");\n\n// class List {\n//     constructor(){\n//         this.data = []        \n//     }\n//     add(data) {\n//         this.data.push(data);\n//         console.log(this.data);\n//     }\n// }\n// class TodoList extends List{\n//     constructor() {\n//         super();\n//         this.usuario =  'Felipe';\n//     }\n//     mostraUsuario() {\n//         console.log(this.usuario);  \n//     }\n// }\n// const MinhaList = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaList.add('Novo Todo');\n// }\n// MinhaList.mostraUsuario();\n// class TodoList {\n//     constructor() {\n//         this.todos = [];\n//     }\n//     addTodo() {\n//         this.todos.push('Novo Todo');\n//         console.log(this.todos);\n//     }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaLista.addTodo();\n// }\n// class TodoList {\n//     constructor() {\n//         this.todos = [];\n//     }\n//     addTodo() {\n//         this.todos.push('Novo Todo');\n//         console.log(this.todos);\n//     }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaLista.addTodo();\n// }\n// class List {\n//     constructor(){\n//         this.todos = [];\n//     }\n//     addTodo(){\n//         this.todos.push('Novo Todo');\n//         console.log(this.todos);\n//     }\n// }\n// class TodoList extends List {\n//     constructor(){\n//         super()\n//         this.usuario = 'Felipe';\n//     }\n//     mostrarUser(){\n//         console.log(this.usuario);\n//     }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaLista.addTodo();\n// }\n// MinhaLista.mostrarUser();\n// class List {\n//     constructor(){\n//         this.todos = [];\n//     }\n//     addTodo(){\n//         this.todos.push('Novo Todo');\n//         console.log(this.todos);\n//     }\n// }\n// class TodoList extends List{\n//     constructor(){\n//         super()\n//         this.user = 'Felipe';\n//     }\n//     MostraUser(){\n//         console.log(this.user);\n//     }\n// }\n// const MinhaList = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaList.addTodo();\n// }\n// MinhaList.MostraUser();\n// class List {    \n//     constructor() {\n//         this.todos = [];\n//     }\n//     addTodo(){\n//         this.todos.push('Novo Todo');\n//         console.log(this.todos);\n//     }\n// }\n// class TodoList extends List {\n//     constructor() {\n//         super();\n//         this.user = 'Felipe';\n//     }\n//     mostraUser() {\n//         console.log(this.user);\n//     }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaLista.addTodo();\n// }\n// MinhaLista.mostraUser();\n// // class static \n// class Matematica {\n//     static soma(a, b){\n//         return a + b;\n//     }\n// }\n// document.getElementById('novotodo').onclick = function(){\n//     console.log(Matematica.soma(20, 10)); \n// }\n// class List {\n//     constructor() {\n//         this.todos = [];\n//     }\n//     addTodo() {\n//         this.todos.push('Novo Todo');\n//         console.log(this.todos);\n//     }\n// }\n// class TodoList extends List{\n//     constructor() {\n//         super();\n//         this.user = 'Felipe';\n//     }\n//     mostraUser(){\n//         console.log(this.user);\n//     }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaLista.addTodo();\n// }\n// MinhaLista.mostraUser();\n// // operações com Arrays (Map, Reduce, filter)\n// // MAP\n// const arr = [1, 2, 3, 4, 5];\n// const newArr = arr.map(function(item) {\n//     return item * 3;\n// })\n// console.log(newArr);\n// const arr = [10, 20, 30, 40];\n// const newArr = arr.map(function(item) {\n//     return item * 10;\n// })\n// console.log(newArr);\n// const arr = [12, 21, 42, 39];\n// const newArr = arr.map(function(item, ) {\n//     return item * 7;\n// });\n// console.log(newArr);\n// const arr = [10, 20, 30, 40, 50, 70];\n// const newArr = arr.map(function(item, index){\n//     return item + index;\n// });\n// console.log(newArr);\n// // REDUCE\n// const arr = [10, 11, 13, 15, 17, 20, 30, 40, 50, 70];\n// const som = arr.reduce(function(total, next){\n//     return total + next;\n// })\n// console.log(som);\n// const filter = arr.filter(function(item){\n//     return item % 2 !== 0;\n// })\n// console.log(filter);\n// const find = arr.find(function(item){\n//     return item === 10;\n// })\n// console.log(find);\n// // Arrow functions\n// const arr = [10, 11, 13, 15, 17, 20, 30];\n// const newArr = arr.map((item, index) => item * 2 + index);\n// console.log(newArr);\n// const teste = () => ({ nome: 'Felipe' });\n// console.log(teste);\n// const teste2 = () => ({ nome: 'Teste' });\n// console.log(teste2);\n// destructuring of the object;\n// const user = {\n//     nome: 'Felipe',\n//     idade: 26,\n//     endereco: {\n//         cidade: 'Brasília',\n//         estado: 'DF',\n//     }\n// }\n// const { nome, endereco: { estado } } = user;\n// console.log(nome);\n// console.log(estado);\n// const escola = {\n//     nome: 'uniplan',\n//     professor: 'Fabiano',\n//     turmas: {\n//         ads1: '20 alunos',\n//         ads2: '30 alunos',\n//         ads3: '25 alunos',\n//     }\n// }\n// // console.log(escola.nome);\n// // console.log(escola.turmas.ads2);\n// const { nome, turmas: { ads1, ads3 }} = escola;\n// console.log(escola);\n// // REST & SPREAD\n// const escola = {\n//     nome: 'uniplan',\n//     professor: 'Fabiano',\n//     turmas: {\n//         ads1: '20 alunos',\n//         ads2: '30 alunos',\n//         ads3: '25 alunos',\n//     }\n// }\n// const { nome, ...resto } = escola;\n// console.log(nome);\n// console.log(resto);\n// const arr = [1, 2, 3, 4, 5];\n// const [ a, b, ...c] = arr;\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// function soma(a, b, ...params){\n//     return params;\n// }\n// console.log(soma(1, 4, 5, 7, 7, 10));\n// // Spread \n// const arr1 = [1, 2, 3];\n// const arr2 = [4, 5, 6];\n// const arr3 = [ ...arr1, ...arr2 ];\n// console.log(arr3);\n// const user = {\n//     nome: 'Felipe',\n//     idade: 26,\n//     cidade: 'brasília'\n// }\n// const user2 = { ...user, nome: 'Felp2', idade: 25 };\n// console.log(user);\n// console.log(user2);\n// // Template literals ${}\n// const name = 'Felipe';\n// const age = 26;\n// console.log(`My name is ${name} and i have ${age} years`)\n// // Object Short Syntax \n// const name = 'Felipe';\n// const age = 26;\n// const user = {\n//     name,\n//     age, \n//     student: 'yes'\n// }\n// console.log(user);\n// // ASYNC AWAIT\n// const myPromise = () => new Promise((response, reject) => {\n//     setTimeout(() => { response('Teste...') }, 3000);\n// })\n// async function executaPromise() {\n//     const response = await myPromise();\n//     console.log(response);\n// }\n// executaPromise();\nconsole.log((0, _funEs.soma)(2, 4));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });