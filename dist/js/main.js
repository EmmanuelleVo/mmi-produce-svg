/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (() => {

eval("var form = document.getElementById(\"generate\");\nvar backgroundColorInput = form.querySelector(\"#bg-color\");\nvar downloadBTN = form.querySelector(\"#download\");\nvar textColorInput = form.querySelector(\"#tx-color\");\nvar acronymInput = form.querySelector(\"#acronymTextElement\");\nvar titleInput = form.querySelector(\"#titleTextElement\");\nvar textInputs = [acronymInput, titleInput];\nvar svgElement = document.querySelector(\"#Logo\");\n\nfunction parseSVG() {\n  var acronymTextElement = svgElement.querySelector('#acronym');\n  var titleTextElement = svgElement.querySelector('#title');\n  var backgroundElements = svgElement.querySelector('#background');\n  var lBrace = svgElement.querySelector('#lBrace');\n  var rBrace = svgElement.querySelector('#rBrace');\n  return {\n    acronymTextElement: acronymTextElement,\n    titleTextElement: titleTextElement,\n    backgroundElements: backgroundElements,\n    lBrace: lBrace,\n    rBrace: rBrace,\n    textElements: [acronymTextElement, titleTextElement, lBrace, rBrace]\n  };\n}\n\nvar svgLogo = parseSVG();\nform === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n});\nbackgroundColorInput === null || backgroundColorInput === void 0 ? void 0 : backgroundColorInput.addEventListener('input', function (event) {\n  svgLogo.backgroundElements.setAttribute('fill', event.currentTarget.value);\n});\ntextColorInput === null || textColorInput === void 0 ? void 0 : textColorInput.addEventListener('input', function (event) {\n  svgLogo.textElements.forEach(function (element) {\n    element.setAttribute('fill', event.currentTarget.value);\n  });\n});\ndownloadBTN.addEventListener('click', function (event) {\n  var base64doc = btoa(unescape(encodeURIComponent(svgElement.outerHTML)));\n  var link = event.currentTarget;\n  link.download = acronymInput.value + \".svg\";\n  link.href = 'data:image/svg+xml;base64,' + base64doc;\n});\ntextInputs.forEach(function (input) {\n  input.addEventListener('keyup', function (e) {\n    var t = e.currentTarget;\n    drawLogo({\n      id: t.id,\n      value: t.value\n    });\n  });\n});\n\nfunction loadDataInDForm() {\n  acronymInput.value = svgLogo.acronymTextElement.textContent;\n  acronymInput.placeholder = \"Exemple : \" + svgLogo.acronymTextElement.textContent;\n  titleInput.value = svgLogo.titleTextElement.textContent;\n  titleInput.placeholder = \"Exemple : \" + svgLogo.titleTextElement.textContent;\n  backgroundColorInput.value = svgLogo.backgroundElements.getAttribute(\"fill\");\n  textColorInput.value = svgLogo.acronymTextElement.getAttribute(\"fill\");\n}\n\nfunction separateBraces() {\n  var acronymLetterWidth = svgLogo.acronymTextElement.getClientRects()[0].width * 1.1;\n  console.log(svgLogo.acronymTextElement.getClientRects()[0].width);\n  svgLogo.lBrace.setAttribute(\"transform\", \"translate(\".concat(Math.trunc(-acronymLetterWidth), \",0)\"));\n  svgLogo.rBrace.setAttribute(\"transform\", \"translate(\".concat(Math.trunc(acronymLetterWidth), \",0)\"));\n}\n\nfunction drawLogo(info) {\n  svgLogo[info.id].textContent = info.value;\n  separateBraces();\n}\n\nloadDataInDForm();\nseparateBraces();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBeEY7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVkvQixPQUFPLENBQUNOLGtCQUFSLENBQTJCa0MsY0FBM0IsR0FBNEMsQ0FBNUMsRUFBK0NDLEtBQTNEO0FBRUE3QixTQUFPLENBQUNILE1BQVIsQ0FBZU8sWUFBZixDQUE0QixXQUE1QixFQUF5QyxvQkFBYTRCLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNOLGtCQUFaLENBQWIsRUFBNEMsS0FBNUMsQ0FBekM7QUFDQTNCLFNBQU8sQ0FBQ0YsTUFBUixDQUFlTSxZQUFmLENBQTRCLFdBQTVCLEVBQXlDLG9CQUFhNEIsSUFBSSxDQUFDQyxLQUFMLENBQVdOLGtCQUFYLENBQWIsRUFBMkMsS0FBM0MsQ0FBekM7QUFDSDs7QUFFRCxTQUFTUCxRQUFULENBQWtCYyxJQUFsQixFQUFxRDtBQUVqRGxDLFNBQU8sQ0FBQ2tDLElBQUksQ0FBQ2IsRUFBTixDQUFQLENBQWlCRSxXQUFqQixHQUErQlcsSUFBSSxDQUFDNUIsS0FBcEM7QUFDQW9CLGdCQUFjO0FBQ2pCOztBQUdESixlQUFlO0FBQ2ZJLGNBQWMiLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhY2tncm91bmRDb2xvcklucHV0IiwicXVlcnlTZWxlY3RvciIsImRvd25sb2FkQlROIiwidGV4dENvbG9ySW5wdXQiLCJhY3JvbnltSW5wdXQiLCJ0aXRsZUlucHV0IiwidGV4dElucHV0cyIsInN2Z0VsZW1lbnQiLCJwYXJzZVNWRyIsImFjcm9ueW1UZXh0RWxlbWVudCIsInRpdGxlVGV4dEVsZW1lbnQiLCJiYWNrZ3JvdW5kRWxlbWVudHMiLCJsQnJhY2UiLCJyQnJhY2UiLCJ0ZXh0RWxlbWVudHMiLCJzdmdMb2dvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImJhc2U2NGRvYyIsImJ0b2EiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm91dGVySFRNTCIsImxpbmsiLCJkb3dubG9hZCIsImhyZWYiLCJpbnB1dCIsImUiLCJ0IiwiZHJhd0xvZ28iLCJpZCIsImxvYWREYXRhSW5ERm9ybSIsInRleHRDb250ZW50IiwicGxhY2Vob2xkZXIiLCJnZXRBdHRyaWJ1dGUiLCJzZXBhcmF0ZUJyYWNlcyIsImFjcm9ueW1MZXR0ZXJXaWR0aCIsImdldENsaWVudFJlY3RzIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsInRydW5jIiwiaW5mbyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW1pLXByb2R1Y2Utc3ZnLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYXRlXCIpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGJhY2tncm91bmRDb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2JnLWNvbG9yXCIpO1xuY29uc3QgZG93bmxvYWRCVE46IEhUTUxBbmNob3JFbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Rvd25sb2FkXCIpO1xuY29uc3QgdGV4dENvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdHgtY29sb3JcIik7XG5jb25zdCBhY3JvbnltSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYWNyb255bVRleHRFbGVtZW50XCIpO1xuY29uc3QgdGl0bGVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiN0aXRsZVRleHRFbGVtZW50XCIpO1xuY29uc3QgdGV4dElucHV0czogSFRNTElucHV0RWxlbWVudFtdID0gW2Fjcm9ueW1JbnB1dCwgdGl0bGVJbnB1dF07XG5jb25zdCBzdmdFbGVtZW50OiBTVkdBRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTG9nb1wiKTtcblxuXG50eXBlIGxvZ29UeXBlID0ge1xuICAgIGFjcm9ueW1UZXh0RWxlbWVudDogU1ZHVGV4dEVsZW1lbnQsXG4gICAgdGl0bGVUZXh0RWxlbWVudDogU1ZHVGV4dEVsZW1lbnQsXG4gICAgYmFja2dyb3VuZEVsZW1lbnRzOiBTVkdSZWN0RWxlbWVudCxcbiAgICBsQnJhY2U6IFNWR1BhdGhFbGVtZW50LFxuICAgIHJCcmFjZTogU1ZHUGF0aEVsZW1lbnQsXG4gICAgdGV4dEVsZW1lbnRzOiBTVkdFbGVtZW50W11cbn1cblxuLypcblRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBuZWNlc3NhcnkgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIGRvY3VtZW50LiBXZSB1c2UgYSBmdW5jdGlvbiB0byBiZSBhYmxlIHRvIHVzZSB0aGUgc2FtZSBpbmZvcm1hdGlvbiBzZXZlcmFsIHRpbWVzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU1ZHKCk6IGxvZ29UeXBlIHtcbiAgICBjb25zdCBhY3JvbnltVGV4dEVsZW1lbnQ6IFNWR1RleHRFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYWNyb255bScpO1xuICAgIGNvbnN0IHRpdGxlVGV4dEVsZW1lbnQ6IFNWR1RleHRFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kRWxlbWVudHM6IFNWR1JlY3RFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IGxCcmFjZTogU1ZHUGF0aEVsZW1lbnQgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsQnJhY2UnKTtcbiAgICBjb25zdCByQnJhY2U6IFNWR1BhdGhFbGVtZW50ID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjckJyYWNlJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNyb255bVRleHRFbGVtZW50OiBhY3JvbnltVGV4dEVsZW1lbnQsXG4gICAgICAgIHRpdGxlVGV4dEVsZW1lbnQ6IHRpdGxlVGV4dEVsZW1lbnQsXG4gICAgICAgIGJhY2tncm91bmRFbGVtZW50czogYmFja2dyb3VuZEVsZW1lbnRzLFxuICAgICAgICBsQnJhY2U6IGxCcmFjZSxcbiAgICAgICAgckJyYWNlOiByQnJhY2UsXG4gICAgICAgIHRleHRFbGVtZW50czogW2Fjcm9ueW1UZXh0RWxlbWVudCwgdGl0bGVUZXh0RWxlbWVudCwgbEJyYWNlLCByQnJhY2VdXG4gICAgfTtcbn1cblxuY29uc3Qgc3ZnTG9nbzogbG9nb1R5cGUgPSBwYXJzZVNWRygpO1xuXG5mb3JtPy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuYmFja2dyb3VuZENvbG9ySW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN2Z0xvZ28uYmFja2dyb3VuZEVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xufSlcblxudGV4dENvbG9ySW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc3ZnTG9nby50ZXh0RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlsbCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgfSlcbn0pXG5cbmRvd25sb2FkQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYmFzZTY0ZG9jID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3ZnRWxlbWVudC5vdXRlckhUTUwpKSk7XG4gICAgY29uc3QgbGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgbGluay5kb3dubG9hZCA9IGFjcm9ueW1JbnB1dC52YWx1ZSArIFwiLnN2Z1wiO1xuICAgIGxpbmsuaHJlZiA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBiYXNlNjRkb2M7XG59KVxuXG50ZXh0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBkcmF3TG9nbyh7aWQ6IHQuaWQsIHZhbHVlOiB0LnZhbHVlfSk7XG4gICAgfSk7XG59KVxuXG5mdW5jdGlvbiBsb2FkRGF0YUluREZvcm0oKTogdm9pZCB7XG4gICAgYWNyb255bUlucHV0LnZhbHVlID0gc3ZnTG9nby5hY3JvbnltVGV4dEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgYWNyb255bUlucHV0LnBsYWNlaG9sZGVyID0gXCJFeGVtcGxlIDogXCIgKyBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gc3ZnTG9nby50aXRsZVRleHRFbGVtZW50LnRleHRDb250ZW50O1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV4ZW1wbGUgOiBcIiArIHN2Z0xvZ28udGl0bGVUZXh0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBiYWNrZ3JvdW5kQ29sb3JJbnB1dC52YWx1ZSA9IHN2Z0xvZ28uYmFja2dyb3VuZEVsZW1lbnRzLmdldEF0dHJpYnV0ZShcImZpbGxcIik7XG4gICAgdGV4dENvbG9ySW5wdXQudmFsdWUgPSBzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJmaWxsXCIpO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZUJyYWNlcygpIHtcbiAgICAvLyBXZSBnZXQgdGhlIGN1cnJlbnQgd2lkdGggb2YgdGhlIGFjcm9ueW0gRWxlbWVudCBhbmQgZGl2aWRlIGl0IGJ5IHRoZSBudW1iZXIgb2YgbGV0dGVycyB0byBmaW5kIG91dCBob3cgbXVjaCBzcGFjZSBpcyBuZWVkZWQgZm9yIDEuXG4gICAgbGV0IGFjcm9ueW1MZXR0ZXJXaWR0aDogbnVtYmVyID0gc3ZnTG9nby5hY3JvbnltVGV4dEVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS53aWR0aCAqIDEuMTtcbiAgICBjb25zb2xlLmxvZyhzdmdMb2dvLmFjcm9ueW1UZXh0RWxlbWVudC5nZXRDbGllbnRSZWN0cygpWzBdLndpZHRoKTtcbiAgICAvL2Fjcm9ueW1MZXR0ZXJXaWR0aCArPSBzdmdMb2dvLmJhY2tncm91bmRFbGVtZW50cy5nZXRDbGllbnRSZWN0cygpWzBdLndpZHRoICogMC4yO1xuICAgIHN2Z0xvZ28ubEJyYWNlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7TWF0aC50cnVuYygtYWNyb255bUxldHRlcldpZHRoKX0sMClgKTtcbiAgICBzdmdMb2dvLnJCcmFjZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke01hdGgudHJ1bmMoYWNyb255bUxldHRlcldpZHRoKX0sMClgKTtcbn1cblxuZnVuY3Rpb24gZHJhd0xvZ28oaW5mbzogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc3ZnTG9nb1tpbmZvLmlkXS50ZXh0Q29udGVudCA9IGluZm8udmFsdWVcbiAgICBzZXBhcmF0ZUJyYWNlcygpO1xufVxuXG5cbmxvYWREYXRhSW5ERm9ybSgpO1xuc2VwYXJhdGVCcmFjZXMoKSJdLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW1pLXByb2R1Y2Utc3ZnLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmmi_produce_svg"] = self["webpackChunkmmi_produce_svg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;