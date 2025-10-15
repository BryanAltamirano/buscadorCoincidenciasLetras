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

eval("{var texto = document.getElementById(\"texto\");\nvar busqueda = document.getElementById(\"busqueda\");\nvar btnBuscar = document.getElementById(\"btnBuscar\");\nvar btnLimpiar = document.getElementById(\"btnLimpiar\");\nvar resultado = document.getElementById(\"resultado\");\nbtnBuscar.addEventListener(\"click\", function () {\n  var textoVal = texto.value.trim();\n  var buscar = busqueda.value.trim();\n  if (buscar === \"\") {\n    // Si no hay nada que buscar, alerta de fallo con X\n    Swal.fire({\n      icon: \"error\",\n      // esto es la X\n      title: \"El programa falló sin éxito\",\n      text: \"No pusiste nada para buscar\",\n      confirmButtonColor: \"#d33\"\n    });\n    resultado.innerHTML = \"\";\n    return; // detiene ejecución\n  }\n  var regex = new RegExp(\"(\".concat(buscar, \")\"), \"gi\");\n  var coincidencias = textoVal.match(regex);\n  if (!coincidencias) {\n    // No encontró coincidencias → alerta de fallo con X\n    Swal.fire({\n      icon: \"error\",\n      title: \"El programa falló sin éxito\",\n      text: \"No se encontraron coincidencias\",\n      confirmButtonColor: \"#d33\"\n    });\n    resultado.innerHTML = \"\";\n    return;\n  }\n\n  // Si encuentra coincidencias → alerta de éxito\n  Swal.fire({\n    icon: \"success\",\n    title: \"El programa falló correctamente\",\n    text: \"Se encontraron \".concat(coincidencias.length, \" coincidencias\"),\n    confirmButtonColor: \"#00b4d8\"\n  });\n\n  // Mostrar texto con coincidencias resaltadas\n  var textoMarcado = textoVal.replace(regex, '<span class=\"resaltado\">$1</span>');\n  resultado.innerHTML = textoMarcado;\n});\n\n// Botón limpiar\nbtnLimpiar.addEventListener(\"click\", function () {\n  texto.value = \"\";\n  busqueda.value = \"\";\n  resultado.innerHTML = \"\";\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

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