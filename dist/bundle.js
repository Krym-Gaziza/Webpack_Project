/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './styles.css';\n\n// function createPage(title, content) {\n//     const app = document.getElementById('app');\n//     app.innerHTML = '';\n//     app.innerHTML = `\n//         <h2>${title}</h2>\n//         <p>${content}</p>\n//     `;\n// }\n\n// document.querySelector('nav').addEventListener('click', function (event) {\n//     event.preventDefault();\n//     if (event.target.tagName === 'A') {\n//         const page = event.target.getAttribute('href');\n//         fetch(page)\n//             .then(response => response.text())\n//             .then(data => {\n//                 const parser = new DOMParser();\n//                 const doc = parser.parseFromString(data, 'text/html');\n//                 const title = doc.querySelector('title').textContent;\n//                 const content = doc.querySelector('main').innerHTML;\n//                 createPage(title, content);\n//             })\n//             .catch(error => console.error(error));\n//     }\n// });\n\n// fetch('index.html')\n//     .then(response => response.text())\n//     .then(data => {\n//         const parser = new DOMParser();\n//         const doc = parser.parseFromString(data, 'text/html');\n//         const title = doc.querySelector('title').textContent;\n//         const content = doc.querySelector('main').innerHTML;\n//         createPage(title, content);\n//     })\n//     .catch(error => console.error(error));\n\ndocument.querySelector('nav').addEventListener('click', function (event) {\n  event.preventDefault();\n  if (event.target.tagName === 'A') {\n    var page = event.target.getAttribute('href');\n    fetch(page).then(function (response) {\n      return response.text();\n    }).then(function (data) {\n      var parser = new DOMParser();\n      var doc = parser.parseFromString(data, 'text/html');\n      var title = doc.querySelector('title').textContent;\n      var content = doc.querySelector('main').innerHTML;\n      createPage(title, content);\n    })[\"catch\"](function (error) {\n      return console.error(error);\n    });\n  }\n});\nfetch('index.html').then(function (response) {\n  return response.text();\n}).then(function (data) {\n  var parser = new DOMParser();\n  var doc = parser.parseFromString(data, 'text/html');\n  var title = doc.querySelector('title').textContent;\n  var content = doc.querySelector('main').innerHTML;\n  createPage(title, content);\n})[\"catch\"](function (error) {\n  return console.error(error);\n});\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;