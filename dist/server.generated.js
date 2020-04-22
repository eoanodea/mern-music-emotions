module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.tsx":
/*!*******************************!*\
  !*** ./client/MainRouter.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nexports.__esModule = true;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar MainRouter = /** @class */ (function (_super) {\n    __extends(MainRouter, _super);\n    function MainRouter(props) {\n        var _this = _super.call(this, props) || this;\n        _this.state = {\n            ssrComplete: false,\n            online: false,\n        };\n        if (props.data) {\n            console.log(typeof props.data);\n        }\n        return _this;\n    }\n    /**\n     * Removes the server-side injected CSS when React component mounts\n     */\n    MainRouter.prototype.componentDidMount = function () {\n        var jssStyles = document.getElementById(\"jss-server-side\");\n        if (jssStyles && jssStyles.parentNode) {\n            jssStyles.parentNode.removeChild(jssStyles);\n        }\n        this.setState({ ssrComplete: true, online: navigator.onLine });\n    };\n    MainRouter.prototype.render = function () {\n        var _a = this.state, ssrComplete = _a.ssrComplete, online = _a.online;\n        if (!ssrComplete)\n            return react_1[\"default\"].createElement(\"h2\", null, \"Loading...\");\n        return (react_1[\"default\"].createElement(\"h2\", null, online ? \"Hello react typescript\" : \"offline\")\n        // <Switch>\n        //   <Route exact path=\"/\" component={Signin} />\n        // </Switch>\n        );\n    };\n    return MainRouter;\n}(react_1.Component));\nexports[\"default\"] = MainRouter;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvTWFpblJvdXRlci50c3g/MzQ2YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXlDO0FBWXpDO0lBQXlCLDhCQUF5QjtJQUNoRCxvQkFBWSxLQUFhO1FBQXpCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBU2I7UUFSQyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsV0FBVyxFQUFFLEtBQUs7WUFDbEIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBQ0YsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FFL0I7O0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQWlCLEdBQWpCO1FBQ0UsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDckMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDUSxtQkFBb0MsRUFBbEMsNEJBQVcsRUFBRSxrQkFBcUIsQ0FBQztRQUUzQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sMERBQW1CLENBQUM7UUFFN0MsT0FBTyxDQUNMLDZDQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBTTtRQUN4RCxXQUFXO1FBQ1gsZ0RBQWdEO1FBQ2hELFlBQVk7U0FDYixDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQXBDd0IsaUJBQVMsR0FvQ2pDO0FBRUQscUJBQWUsVUFBVSxDQUFDIiwiZmlsZSI6Ii4vY2xpZW50L01haW5Sb3V0ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbnR5cGUgSVByb3BzID0ge1xuICBkYXRhPzogb2JqZWN0XG59XG5cbnR5cGUgSVN0YXRlID0ge1xuICBzc3JDb21wbGV0ZTogYm9vbGVhbixcbiAgb25saW5lOiBib29sZWFuXG59XG5cbmNsYXNzIE1haW5Sb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3NyQ29tcGxldGU6IGZhbHNlLFxuICAgICAgb25saW5lOiBmYWxzZSxcbiAgICB9O1xuICAgIGlmKHByb3BzLmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9wcy5kYXRhKVxuICAgICAgXG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTIHdoZW4gUmVhY3QgY29tcG9uZW50IG1vdW50c1xuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc3Mtc2VydmVyLXNpZGVcIik7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNzckNvbXBsZXRlOiB0cnVlLCBvbmxpbmU6IG5hdmlnYXRvci5vbkxpbmUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzc3JDb21wbGV0ZSwgb25saW5lIH0gPSB0aGlzLnN0YXRlO1xuICAgIFxuICAgIGlmICghc3NyQ29tcGxldGUpIHJldHVybiA8aDI+TG9hZGluZy4uLjwvaDI+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMj57b25saW5lID8gXCJIZWxsbyByZWFjdCB0eXBlc2NyaXB0XCIgOiBcIm9mZmxpbmVcIn08L2gyPlxuICAgICAgLy8gPFN3aXRjaD5cbiAgICAgIC8vICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtTaWduaW59IC8+XG4gICAgICAvLyA8L1N3aXRjaD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Sb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/MainRouter.tsx\n");

/***/ }),

/***/ "./client/assets/js/theme.ts":
/*!***********************************!*\
  !*** ./client/assets/js/theme.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar styles_1 = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/**\n * Create a Material UI Theme\n */\nvar theme = styles_1.createMuiTheme({\n    palette: {\n        primary: { main: '#FBC02D' },\n        secondary: { main: '#2d67fb' }\n    }\n});\n/**\n * Use responsive font sizes\n */\ntheme = styles_1.responsiveFontSizes(theme);\nexports[\"default\"] = theme;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL2pzL3RoZW1lLnRzPzViYWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrRkFBK0U7QUFFL0U7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRyx1QkFBYyxDQUFDO0lBQ3ZCLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7UUFDNUIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtLQUNqQztDQUNKLENBQUM7QUFFRjs7R0FFRztBQUNILEtBQUssR0FBRyw0QkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQyxxQkFBZSxLQUFLIiwiZmlsZSI6Ii4vY2xpZW50L2Fzc2V0cy9qcy90aGVtZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vKipcbiAqIENyZWF0ZSBhIE1hdGVyaWFsIFVJIFRoZW1lXG4gKi9cbmxldCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIHByaW1hcnk6IHsgbWFpbjogJyNGQkMwMkQnIH0sXG4gICAgICAgIHNlY29uZGFyeTogeyBtYWluOiAnIzJkNjdmYicgfVxuICAgIH1cbn0pXG5cbi8qKlxuICogVXNlIHJlc3BvbnNpdmUgZm9udCBzaXplc1xuICovXG50aGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWUpO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/assets/js/theme.ts\n");

/***/ }),

/***/ "./client/routeConfig.ts":
/*!*******************************!*\
  !*** ./client/routeConfig.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n/**\n * Routes for serverside rendering\n */\nvar routes = [\n    {\n    // path: \"/\",\n    // component: MainRouter,\n    },\n];\nexports[\"default\"] = routes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcm91dGVDb25maWcudHM/ZWNiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztHQUVHO0FBQ0gsSUFBTSxNQUFNLEdBQWtCO0lBQzVCO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtLQUMxQjtDQUNGLENBQUM7QUFFRixxQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoiLi9jbGllbnQvcm91dGVDb25maWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpblJvdXRlciBmcm9tIFwiLi9NYWluUm91dGVyXCI7XG5cbi8qKlxuICogUm91dGVzIGZvciBzZXJ2ZXJzaWRlIHJlbmRlcmluZ1xuICovXG5jb25zdCByb3V0ZXM6IEFycmF5PE9iamVjdD4gPSBbXG4gIHtcbiAgICAvLyBwYXRoOiBcIi9cIixcbiAgICAvLyBjb21wb25lbnQ6IE1haW5Sb3V0ZXIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/routeConfig.ts\n");

/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1[\"default\"].config();\nvar config = {\n    env: process.env.ENV_MODE || \"development\",\n    port: process.env.PORT || 3000,\n    jwtSecret: process.env.JWT_SECRET,\n    mongoUri: process.env.MONGO_URI || \"\",\n    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || \"http://localhost\"\n};\nexports[\"default\"] = config;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLnRzP2ZiYTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0RUFBMkI7QUFDM0IsbUJBQU0sQ0FBQyxNQUFNLEVBQUU7QUFFZixJQUFNLE1BQU0sR0FBRztJQUNYLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhO0lBQzFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJO0lBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7SUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDckMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLGtCQUFrQjtDQUNqRTtBQUVELHFCQUFlLE1BQU0iLCJmaWxlIjoiLi9jb25maWcvY29uZmlnLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcbmRvdGVudi5jb25maWcoKVxuXG5jb25zdCBjb25maWcgPSB7XG4gICAgZW52OiBwcm9jZXNzLmVudi5FTlZfTU9ERSB8fCBcImRldmVsb3BtZW50XCIsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLFxuICAgIGp3dFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgXG4gICAgbW9uZ29Vcmk6IHByb2Nlc3MuZW52Lk1PTkdPX1VSSSB8fCBcIlwiLFxuICAgIENMSUVOVF9PUklHSU46IHByb2Nlc3MuZW52LkNMSUVOVF9PUklHSU4gfHwgXCJodHRwOi8vbG9jYWxob3N0XCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/config.ts\n");

/***/ }),

/***/ "./server/devBundle.ts":
/*!*****************************!*\
  !*** ./server/devBundle.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\nvar webpack_1 = __importDefault(__webpack_require__(/*! webpack */ \"webpack\"));\nvar webpack_dev_middleware_1 = __importDefault(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\"));\nvar webpack_hot_middleware_1 = __importDefault(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\"));\nvar webpackConfig = __webpack_require__(/*! ../webpack.config.client.js */ \"./webpack.config.client.js\");\nvar compile = function (app) {\n    if (config_1[\"default\"].env === \"development\") {\n        console.log(\"MERN Music Emotions System - Starting in Development\");\n        var compiler = webpack_1[\"default\"](webpackConfig);\n        var middleware = webpack_dev_middleware_1[\"default\"](compiler, {\n            publicPath: webpackConfig.output.publicPath,\n        });\n        app.use(middleware);\n        app.use(webpack_hot_middleware_1[\"default\"](compiler));\n    }\n};\nexports[\"default\"] = {\n    compile: compile,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZGV2QnVuZGxlLnRzPzM1MDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrR0FBc0M7QUFDdEMsK0VBQThCO0FBQzlCLDRIQUF1RDtBQUN2RCw0SEFBMEQ7QUFDMUQsSUFBTSxhQUFhLEdBQUcsbUJBQU8sQ0FBQywrREFBNkIsQ0FBQyxDQUFDO0FBRTdELElBQU0sT0FBTyxHQUFHLFVBQUMsR0FBUTtJQUN2QixJQUFJLG1CQUFNLENBQUMsR0FBRyxLQUFLLGFBQWEsRUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDcEUsSUFBTSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxJQUFNLFVBQVUsR0FBRyxtQ0FBaUIsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsVUFBVSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVTtTQUM1QyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUNBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN6QztBQUNILENBQUMsQ0FBQztBQUVGLHFCQUFlO0lBQ2IsT0FBTztDQUNSLENBQUMiLCJmaWxlIjoiLi9zZXJ2ZXIvZGV2QnVuZGxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHdlYnBhY2sgZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB3ZWJwYWNrTWlkZGxld2FyZSBmcm9tIFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiO1xuaW1wb3J0IHdlYnBhY2tIb3RNaWRkbGV3YXJlIGZyb20gXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCI7XG5jb25zdCB3ZWJwYWNrQ29uZmlnID0gcmVxdWlyZShcIi4uL3dlYnBhY2suY29uZmlnLmNsaWVudC5qc1wiKTtcblxuY29uc3QgY29tcGlsZSA9IChhcHA6IGFueSkgPT4ge1xuICBpZiAoY29uZmlnLmVudiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgY29uc29sZS5sb2coXCJNRVJOIE11c2ljIEVtb3Rpb25zIFN5c3RlbSAtIFN0YXJ0aW5nIGluIERldmVsb3BtZW50XCIpO1xuICAgIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayh3ZWJwYWNrQ29uZmlnKTtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gd2VicGFja01pZGRsZXdhcmUoY29tcGlsZXIsIHtcbiAgICAgIHB1YmxpY1BhdGg6IHdlYnBhY2tDb25maWcub3V0cHV0LnB1YmxpY1BhdGgsXG4gICAgfSk7XG5cbiAgICBhcHAudXNlKG1pZGRsZXdhcmUpO1xuICAgIGFwcC51c2Uod2VicGFja0hvdE1pZGRsZXdhcmUoY29tcGlsZXIpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21waWxlLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/devBundle.ts\n");

/***/ }),

/***/ "./server/express.tsx":
/*!****************************!*\
  !*** ./server/express.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\n/**\n * Import primary dependencies\n */\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nvar cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar template_1 = __importDefault(__webpack_require__(/*! ../template */ \"./template.ts\"));\n/**\n * Import Routes\n */\n/**\n * Config environment variables\n */\nvar config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\n/**\n * Modules for server side rendering\n */\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar MainRouter_1 = __importDefault(__webpack_require__(/*! ../client/MainRouter */ \"./client/MainRouter.tsx\"));\nvar theme_1 = __importDefault(__webpack_require__(/*! ../client/assets/js/theme */ \"./client/assets/js/theme.ts\"));\nvar StaticRouter = __webpack_require__(/*! react-router-dom */ \"react-router-dom\").StaticRouter;\nvar styles_1 = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = express_1[\"default\"]();\n/**\n * Compile Development Bundle\n */\nvar devBundle_1 = __importDefault(__webpack_require__(/*! ./devBundle */ \"./server/devBundle.ts\"));\nif (config_1[\"default\"].env === \"development\") {\n    devBundle_1[\"default\"].compile(app);\n}\n/**\n * Server Side Rending with Data\n */\nvar react_router_config_1 = __webpack_require__(/*! react-router-config */ \"react-router-config\");\nvar routeConfig_1 = __importDefault(__webpack_require__(/*! ../client/routeConfig */ \"./client/routeConfig.ts\"));\nvar loadBranchData = function (location) {\n    var branch = react_router_config_1.matchRoutes(routeConfig_1[\"default\"], location);\n    var promises = branch.map(function (_a) {\n        var route = _a.route, match = _a.match;\n        return route.loadData\n            ? route.loadData(branch[0].match.params)\n            : Promise.resolve(null);\n    });\n    return Promise.all(promises);\n};\n/**\n * parse body params and attache them to req.body\n */\napp.use(body_parser_1[\"default\"].json());\napp.use(body_parser_1[\"default\"].urlencoded({ extended: true }));\napp.use(cookie_parser_1[\"default\"]());\napp.use(compression_1[\"default\"]());\n/**\n * Secure apps by setting various HTTP headers\n */\napp.use(helmet_1[\"default\"]());\n/**\n * enable CORS - Cross Origin Resource Sharing\n */\napp.use(cors_1[\"default\"]());\napp.use(\"/dist\", express_1[\"default\"].static(path_1[\"default\"].join(CURRENT_WORKING_DIR, \"dist\")));\n/**\n * Mount Routes\n *\n * @param {App} app\n */\n// function mountRoutes(app) {\n// }\n// mountRoutes(app)\n/**\n * Handle Server Side Render\n *\n * @param {Request} req\n * @param {Response} res\n */\nfunction handleRender(req, res) {\n    var sheets = new styles_1.ServerStyleSheets();\n    var context = {\n        url: ''\n    };\n    loadBranchData(req.url)\n        .then(function (data) {\n        var html = server_1[\"default\"].renderToString(sheets.collect(react_1[\"default\"].createElement(StaticRouter, { location: req.url, context: context },\n            react_1[\"default\"].createElement(styles_1.MuiThemeProvider, { theme: theme_1[\"default\"] },\n                react_1[\"default\"].createElement(MainRouter_1[\"default\"], { data: data })))));\n        if (context.url) {\n            return res.redirect(303, context.url);\n        }\n        var css = sheets.toString();\n        res.status('200').send(template_1[\"default\"](html, css));\n    })[\"catch\"](function (err) {\n        res.redirect(\"/\");\n        console.log(\"Error: \", err);\n        // res.status(500).send({\"error\": \"Could not load React view with data\", \"Error Message\": err})\n    });\n}\napp.use(handleRender);\n/**\n * Catch Unauthorized Errors\n */\n// app.use((err: any, req: Request, res: any }) => {\n//   if (err.name === \"UnauthorizedError\") {\n//     res.status(401).json({ error: err.name + \": \" + err.message });\n//   }\n// });\nexports[\"default\"] = app;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZXhwcmVzcy50c3g/MzM0ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztHQUVHO0FBQ0gsK0VBQThCO0FBQzlCLHNFQUF3QjtBQUN4QiwyRkFBcUM7QUFDckMsaUdBQXlDO0FBQ3pDLDJGQUFtQztBQUNuQyxzRUFBd0I7QUFDeEIsNEVBQTRCO0FBQzVCLDBGQUFtQztBQUVuQzs7R0FFRztBQUdIOztHQUVHO0FBRUgsa0dBQXNDO0FBRXRDOztHQUVHO0FBRUgseUVBQTBCO0FBQzFCLGdHQUE4QztBQUM5QywrR0FBOEM7QUFDOUMsbUhBQTZDO0FBRTdDLElBQU0sWUFBWSxHQUFHLG1CQUFPLENBQUMsMENBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFOUQsK0ZBR2tDO0FBRWxDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDLElBQU0sR0FBRyxHQUFHLG9CQUFPLEVBQUUsQ0FBQztBQUV0Qjs7R0FFRztBQUNILG1HQUFtQztBQUVuQyxJQUFHLG1CQUFNLENBQUMsR0FBRyxLQUFLLGFBQWEsRUFBRTtJQUM3QixzQkFBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Q0FDekI7QUFFRDs7R0FFRztBQUNILGtHQUFrRDtBQUNsRCxpSEFBMkM7QUFHM0MsSUFBTSxjQUFjLEdBQUcsVUFBQyxRQUFnQjtJQUN0QyxJQUFNLE1BQU0sR0FBRyxpQ0FBVyxDQUFDLHdCQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCO1lBQWQsZ0JBQUssRUFBRSxnQkFBSztRQUN6QyxPQUFPLEtBQUssQ0FBQyxRQUFRO1lBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBWSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRXBCOztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBTSxFQUFFLENBQUMsQ0FBQztBQUNsQjs7R0FFRztBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQUksRUFBRSxDQUFDLENBQUM7QUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxNQUFNLENBQUMsaUJBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXpFOzs7O0dBSUc7QUFDSCw4QkFBOEI7QUFFOUIsSUFBSTtBQUVKLG1CQUFtQjtBQUVuQjs7Ozs7R0FLRztBQUNILFNBQVMsWUFBWSxDQUFDLEdBQVksRUFBRSxHQUFRO0lBQzFDLElBQU0sTUFBTSxHQUFHLElBQUksMEJBQWlCLEVBQUUsQ0FBQztJQUN2QyxJQUFJLE9BQU8sR0FBRztRQUNaLEdBQUcsRUFBRSxFQUFFO0tBQ1IsQ0FBQztJQUVGLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxjQUFJO1FBQ1IsSUFBTSxJQUFJLEdBQUcsbUJBQWMsQ0FBQyxjQUFjLENBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQ1osaUNBQUMsWUFBWSxJQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPO1lBQy9DLGlDQUFDLHlCQUFnQixJQUFDLEtBQUssRUFBRSxrQkFBSztnQkFDNUIsaUNBQUMsdUJBQVUsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQ1QsQ0FDTixDQUNoQixDQUNGLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QztRQUNELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUNELE9BQUssRUFBQyxhQUFHO1FBQ1IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QiwrRkFBK0Y7SUFDakcsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0Qjs7R0FFRztBQUNILG9EQUFvRDtBQUNwRCw0Q0FBNEM7QUFDNUMsc0VBQXNFO0FBQ3RFLE1BQU07QUFDTixNQUFNO0FBRU4scUJBQWUsR0FBRyxDQUFDIiwiZmlsZSI6Ii4vc2VydmVyL2V4cHJlc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbXBvcnQgcHJpbWFyeSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSBcImNvb2tpZS1wYXJzZXJcIjtcbmltcG9ydCBjb21wcmVzcyBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgaGVsbWV0IGZyb20gXCJoZWxtZXRcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vdGVtcGxhdGVcIjtcblxuLyoqXG4gKiBJbXBvcnQgUm91dGVzXG4gKi9cblxuXG4vKipcbiAqIENvbmZpZyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAqL1xuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5cbi8qKlxuICogTW9kdWxlcyBmb3Igc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgTWFpblJvdXRlciBmcm9tIFwiLi4vY2xpZW50L01haW5Sb3V0ZXJcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vY2xpZW50L2Fzc2V0cy9qcy90aGVtZVwiXG5cbmNvbnN0IFN0YXRpY1JvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpLlN0YXRpY1JvdXRlcjtcblxuaW1wb3J0IHtcbiAgTXVpVGhlbWVQcm92aWRlcixcbiAgU2VydmVyU3R5bGVTaGVldHMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgQ1VSUkVOVF9XT1JLSU5HX0RJUiA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8qKlxuICogQ29tcGlsZSBEZXZlbG9wbWVudCBCdW5kbGVcbiAqL1xuaW1wb3J0IGRldkJ1bmRsZSBmcm9tICcuL2RldkJ1bmRsZSdcblxuaWYoY29uZmlnLmVudiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgZGV2QnVuZGxlLmNvbXBpbGUoYXBwKVxufVxuXG4vKipcbiAqIFNlcnZlciBTaWRlIFJlbmRpbmcgd2l0aCBEYXRhXG4gKi9cbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL2NsaWVudC9yb3V0ZUNvbmZpZ1wiO1xuXG5cbmNvbnN0IGxvYWRCcmFuY2hEYXRhID0gKGxvY2F0aW9uOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYnJhbmNoID0gbWF0Y2hSb3V0ZXMocm91dGVzLCBsb2NhdGlvbik7XG4gIGNvbnN0IHByb21pc2VzID0gYnJhbmNoLm1hcCgoeyByb3V0ZSwgbWF0Y2ggfSkgPT4ge1xuICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YVxuICAgICAgPyByb3V0ZS5sb2FkRGF0YShicmFuY2hbMF0ubWF0Y2gucGFyYW1zKVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuLyoqXG4gKiBwYXJzZSBib2R5IHBhcmFtcyBhbmQgYXR0YWNoZSB0aGVtIHRvIHJlcS5ib2R5XG4gKi9cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoY29tcHJlc3MoKSk7XG5cbi8qKlxuICogU2VjdXJlIGFwcHMgYnkgc2V0dGluZyB2YXJpb3VzIEhUVFAgaGVhZGVyc1xuICovXG5hcHAudXNlKGhlbG1ldCgpKTtcbi8qKlxuICogZW5hYmxlIENPUlMgLSBDcm9zcyBPcmlnaW4gUmVzb3VyY2UgU2hhcmluZ1xuICovXG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC51c2UoXCIvZGlzdFwiLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oQ1VSUkVOVF9XT1JLSU5HX0RJUiwgXCJkaXN0XCIpKSk7XG5cbi8qKlxuICogTW91bnQgUm91dGVzXG4gKiBcbiAqIEBwYXJhbSB7QXBwfSBhcHAgXG4gKi9cbi8vIGZ1bmN0aW9uIG1vdW50Um91dGVzKGFwcCkge1xuXG4vLyB9XG5cbi8vIG1vdW50Um91dGVzKGFwcClcblxuLyoqXG4gKiBIYW5kbGUgU2VydmVyIFNpZGUgUmVuZGVyXG4gKiBcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxIFxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzIFxuICovXG5mdW5jdGlvbiBoYW5kbGVSZW5kZXIocmVxOiBSZXF1ZXN0LCByZXM6IGFueSk6IHZvaWQge1xuICBjb25zdCBzaGVldHMgPSBuZXcgU2VydmVyU3R5bGVTaGVldHMoKTtcbiAgbGV0IGNvbnRleHQgPSB7XG4gICAgdXJsOiAnJ1xuICB9O1xuXG4gIGxvYWRCcmFuY2hEYXRhKHJlcS51cmwpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zdCBodG1sID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIHNoZWV0cy5jb2xsZWN0KFxuICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgPE1haW5Sb3V0ZXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGlmIChjb250ZXh0LnVybCkge1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMywgY29udGV4dC51cmwpO1xuICAgICAgfVxuICAgICAgY29uc3QgY3NzID0gc2hlZXRzLnRvU3RyaW5nKCk7XG5cbiAgICAgIHJlcy5zdGF0dXMoJzIwMCcpLnNlbmQoVGVtcGxhdGUoaHRtbCwgY3NzKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIHJlcy5yZWRpcmVjdChcIi9cIik7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyKTtcbiAgICAgIC8vIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcImVycm9yXCI6IFwiQ291bGQgbm90IGxvYWQgUmVhY3QgdmlldyB3aXRoIGRhdGFcIiwgXCJFcnJvciBNZXNzYWdlXCI6IGVycn0pXG4gICAgfSk7XG59XG5cbmFwcC51c2UoaGFuZGxlUmVuZGVyKTtcblxuLyoqXG4gKiBDYXRjaCBVbmF1dGhvcml6ZWQgRXJyb3JzXG4gKi9cbi8vIGFwcC51c2UoKGVycjogYW55LCByZXE6IFJlcXVlc3QsIHJlczogYW55IH0pID0+IHtcbi8vICAgaWYgKGVyci5uYW1lID09PSBcIlVuYXV0aG9yaXplZEVycm9yXCIpIHtcbi8vICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBlcnIubmFtZSArIFwiOiBcIiArIGVyci5tZXNzYWdlIH0pO1xuLy8gICB9XG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/express.tsx\n");

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\nvar express_1 = __importDefault(__webpack_require__(/*! ./express */ \"./server/express.tsx\"));\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar options = {\n    useCreateIndex: true,\n    useNewUrlParser: true,\n    useFindAndModify: false,\n    useUnifiedTopology: true\n};\n// Connection URL\nmongoose_1[\"default\"].Promise = global.Promise;\nmongoose_1[\"default\"].connect(config_1[\"default\"].mongoUri, options);\nmongoose_1[\"default\"].connection.on('error', function () {\n    throw new Error(\"unable to connect to database: \" + config_1[\"default\"].mongoUri);\n});\nexpress_1[\"default\"].listen(config_1[\"default\"].port, function () {\n    console.info('Server started on port %s.', config_1[\"default\"].port);\n})\n    .on(\"error\", function (err) {\n    console.error(\"Server Error: \", err);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLnRzPzY1NzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrR0FBcUM7QUFDckMsOEZBQTJCO0FBQzNCLGtGQUErQjtBQUUvQixJQUFNLE9BQU8sR0FBRztJQUNkLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsa0JBQWtCLEVBQUUsSUFBSTtDQUN6QjtBQUVELGlCQUFpQjtBQUNqQixxQkFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztBQUNqQyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7QUFFMUMscUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFrQyxtQkFBTSxDQUFDLFFBQVUsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFFRixvQkFBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBTSxDQUFDLElBQUksRUFBRTtJQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLG1CQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3pELENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO0lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUM7QUFDdEMsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vc2VydmVyL3NlcnZlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcbmltcG9ydCBhcHAgZnJvbSAnLi9leHByZXNzJ1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBvcHRpb25zID0ge1xuICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG59XG5cbi8vIENvbm5lY3Rpb24gVVJMXG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2Vcbm1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLm1vbmdvVXJpLCBvcHRpb25zKVxuXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdlcnJvcicsICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGB1bmFibGUgdG8gY29ubmVjdCB0byBkYXRhYmFzZTogJHtjb25maWcubW9uZ29Vcml9YClcbn0pXG5cbmFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgY29uc29sZS5pbmZvKCdTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICVzLicsIGNvbmZpZy5wb3J0KVxufSlcbi5vbihcImVycm9yXCIsIChlcnIpID0+IHtcbiAgY29uc29sZS5lcnJvcihcIlNlcnZlciBFcnJvcjogXCIsIGVycilcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/server.ts\n");

/***/ }),

/***/ "./template.ts":
/*!*********************!*\
  !*** ./template.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports[\"default\"] = (function (html, css) {\n    return \"<!doctype html>\\n      <html lang=\\\"en\\\" style=\\\"scroll-behavior: smooth;\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n          <title>MERN Music Emotion App</title>\\n          <style>\\n              a{\\n                text-decoration: none\\n              }\\n          </style>\\n        </head>\\n        <body style=\\\"margin:0;background-color:#000000e6\\\">\\n          <div id=\\\"root\\\" style=\\\"overflow: hidden;\\\">\" + html + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZS50cz9iYTk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0JBQWUsVUFBQyxJQUFZLEVBQUUsR0FBVztJQUNyQyxPQUFPLHFnQkFhMEMsSUFBSSx3REFDakIsR0FBRywySEFHN0I7QUFDZCxDQUFDIiwiZmlsZSI6Ii4vdGVtcGxhdGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoaHRtbDogU3RyaW5nLCBjc3M6IFN0cmluZykgPT4ge1xuICAgIHJldHVybiBgPCFkb2N0eXBlIGh0bWw+XG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIiBzdHlsZT1cInNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1wiPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuICAgICAgICAgIDx0aXRsZT5NRVJOIE11c2ljIEVtb3Rpb24gQXBwPC90aXRsZT5cbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5IHN0eWxlPVwibWFyZ2luOjA7YmFja2dyb3VuZC1jb2xvcjojMDAwMDAwZTZcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwicm9vdFwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjtcIj4ke2h0bWx9PC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGlkPVwianNzLXNlcnZlci1zaWRlXCI+JHtjc3N9PC9zdHlsZT5cbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvZGlzdC9idW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPmBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./template.ts\n");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst CURRENT_WORKING_DIR = process.cwd();\n\nmodule.exports = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\n    \"react-hot-loader/patch\",\n    \"webpack-hot-middleware/client?reload=true\",\n    path.join(CURRENT_WORKING_DIR, \"/client/main.tsx\"),\n  ],\n  node: {\n    fs: \"empty\",\n  },\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\",\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx|.ts?$/,\n        use: \"ts-loader\",\n        exclude: /node_modules/,\n      },\n      {\n        test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n        use: \"file-loader\",\n      },\n    ],\n  },\n\n  optimization: {\n    noEmitOnErrors: true,\n  },\n\n  plugins: [\n    new webpack.HotModuleReplacementPlugin(),\n    new webpack.EnvironmentPlugin({ ...process.env }),\n  ],\n\n  resolve: {\n    extensions: [\".tsx\", \".ts\", \".js\"],\n  },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNvbmZpZy5jbGllbnQuanM/YzliYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vd2VicGFjay5jb25maWcuY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xuY29uc3QgQ1VSUkVOVF9XT1JLSU5HX0RJUiA9IHByb2Nlc3MuY3dkKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiBcImJyb3dzZXJcIixcbiAgbW9kZTogXCJkZXZlbG9wbWVudFwiLFxuICBkZXZ0b29sOiBcImV2YWwtc291cmNlLW1hcFwiLFxuICBlbnRyeTogW1xuICAgIFwicmVhY3QtaG90LWxvYWRlci9wYXRjaFwiLFxuICAgIFwid2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQ/cmVsb2FkPXRydWVcIixcbiAgICBwYXRoLmpvaW4oQ1VSUkVOVF9XT1JLSU5HX0RJUiwgXCIvY2xpZW50L21haW4udHN4XCIpLFxuICBdLFxuICBub2RlOiB7XG4gICAgZnM6IFwiZW1wdHlcIixcbiAgfSxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogcGF0aC5qb2luKENVUlJFTlRfV09SS0lOR19ESVIsIFwiL2Rpc3RcIiksXG4gICAgZmlsZW5hbWU6IFwiYnVuZGxlLmpzXCIsXG4gICAgcHVibGljUGF0aDogXCIvZGlzdC9cIixcbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLnRzeHwudHM/JC8sXG4gICAgICAgIHVzZTogXCJ0cy1sb2FkZXJcIixcbiAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwuKHR0Znxlb3R8c3ZnfGdpZnxqcGd8cG5nKShcXD9bXFxzXFxTXSspPyQvLFxuICAgICAgICB1c2U6IFwiZmlsZS1sb2FkZXJcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBvcHRpbWl6YXRpb246IHtcbiAgICBub0VtaXRPbkVycm9yczogdHJ1ZSxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgbmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSxcbiAgICBuZXcgd2VicGFjay5FbnZpcm9ubWVudFBsdWdpbih7IC4uLnByb2Nlc3MuZW52IH0pLFxuICBdLFxuXG4gIHJlc29sdmU6IHtcbiAgICBleHRlbnNpb25zOiBbXCIudHN4XCIsIFwiLnRzXCIsIFwiLmpzXCJdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./webpack.config.client.js\n");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eoan/Sites/testing/js/MERN/mern-music-emotions/server/server.ts */"./server/server.ts");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiP2Y3OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY29tcHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///compression\n");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCI/MjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb29raWUtcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie-parser\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIj9hYWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImhlbG1ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///helmet\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/OTQzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kb20vc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI/NTM0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-config\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrXCI/YzZhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWJwYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///webpack\n");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCI/OWEyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///webpack-dev-middleware\n");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCI/ODkxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ob3QtbWlkZGxld2FyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///webpack-hot-middleware\n");

/***/ })

/******/ });