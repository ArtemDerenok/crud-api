/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controlers/usersControler.ts":
/*!******************************************!*\
  !*** ./src/controlers/usersControler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/validate.js");
/* harmony import */ var _models_usersModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/usersModel */ "./src/models/usersModel.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ProductControler = /*#__PURE__*/function () {
  function ProductControler() {
    _classCallCheck(this, ProductControler);
  }
  _createClass(ProductControler, [{
    key: "getUsers",
    value: function () {
      var _getUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models_usersModel__WEBPACK_IMPORTED_MODULE_0__["default"].findAllUsers();
            case 3:
              data = _context.sent;
              res.writeHead(200, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify(data));
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0.message);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function getUsers(_x, _x2) {
        return _getUsers.apply(this, arguments);
      }
      return getUsers;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, id) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!(0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(id)) {
                _context2.next = 8;
                break;
              }
              _context2.next = 4;
              return _models_usersModel__WEBPACK_IMPORTED_MODULE_0__["default"].findUser(id);
            case 4:
              data = _context2.sent;
              res.writeHead(200, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify(data));
              _context2.next = 9;
              break;
            case 8:
              res.writeHead(400, {
                'Content-Type': 'application/jsonn'
              }).end(JSON.stringify('UUID is invalid'));
            case 9:
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              res.writeHead(404, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify(_context2.t0.message));
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 11]]);
      }));
      function getUser(_x3, _x4, _x5) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "createUser",
    value: function createUser(req, res) {
      var body = '';
      req.on('data', function (chunk) {
        body += chunk.toString();
      });
      req.on('end', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var obj;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              obj = JSON.parse(body);
              _context3.prev = 1;
              _context3.next = 4;
              return _models_usersModel__WEBPACK_IMPORTED_MODULE_0__["default"].postUser(obj);
            case 4:
              res.writeHead(201, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify('User was created'));
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](1);
              res.writeHead(400, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify(_context3.t0.message));
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 7]]);
      })));
      req.on('error', function (error) {
        res.writeHead(500, {
          'Content-Type': 'application/json'
        }).end(JSON.stringify(error.message));
      });
    }
  }, {
    key: "updateUser",
    value: function updateUser(req, res, id) {
      if ((0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(id)) {
        var body = '';
        req.on('data', function (chunk) {
          body += chunk.toString();
        });
        req.on('end', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var obj;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                obj = JSON.parse(body);
                _context4.prev = 1;
                _context4.next = 4;
                return _models_usersModel__WEBPACK_IMPORTED_MODULE_0__["default"].putUser(obj, id);
              case 4:
                res.writeHead(200, {
                  'Content-Type': 'application/json'
                }).end(JSON.stringify('User was updated'));
                _context4.next = 10;
                break;
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                res.writeHead(404, {
                  'Content-Type': 'application/json'
                }).end(JSON.stringify(_context4.t0.message));
              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[1, 7]]);
        })));
        req.on('error', function (error) {
          res.writeHead(500, {
            'Content-Type': 'application/json'
          }).end(JSON.stringify(error.message));
        });
      } else {
        res.writeHead(400, {
          'Content-Type': 'application/json'
        }).end(JSON.stringify('UUID is invalid'));
      }
    }
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, id) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              if (!(0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(id)) {
                _context5.next = 7;
                break;
              }
              _context5.next = 4;
              return _models_usersModel__WEBPACK_IMPORTED_MODULE_0__["default"].removeUser(id);
            case 4:
              res.writeHead(200, {
                'Content-Type': 'application/json'
              });
              _context5.next = 8;
              break;
            case 7:
              res.writeHead(400, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify('UUID is invalid'));
            case 8:
              _context5.next = 13;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              res.writeHead(404, {
                'Content-Type': 'application/json'
              }).end(JSON.stringify(_context5.t0.message));
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 10]]);
      }));
      function deleteUser(_x6, _x7, _x8) {
        return _deleteUser.apply(this, arguments);
      }
      return deleteUser;
    }()
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!ProductControler.instance) {
        ProductControler.instance = new ProductControler();
      }
      return ProductControler.instance;
    }
  }]);
  return ProductControler;
}();
var usersControler = ProductControler.getInstance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersControler);

/***/ }),

/***/ "./src/data/users.ts":
/*!***************************!*\
  !*** ./src/data/users.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");

var users = [{
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  username: 'Artem',
  age: 28,
  hobbies: ['Programming']
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  username: 'Ivan',
  age: 25,
  hobbies: ['Books']
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (users);

/***/ }),

/***/ "./src/models/usersModel.ts":
/*!**********************************!*\
  !*** ./src/models/usersModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/users */ "./src/data/users.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var UsersModel = /*#__PURE__*/function () {
  function UsersModel() {
    _classCallCheck(this, UsersModel);
  }
  _createClass(UsersModel, [{
    key: "findAllUsers",
    value: function () {
      var _findAllUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"];
            case 3:
              data = _context.sent;
              return _context.abrupt("return", data);
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function findAllUsers() {
        return _findAllUsers.apply(this, arguments);
      }
      return findAllUsers;
    }()
  }, {
    key: "findUser",
    value: function () {
      var _findUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        var data, user;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"];
            case 3:
              data = _context2.sent;
              user = data.find(function (elem) {
                return elem.id === id;
              });
              if (user) {
                _context2.next = 7;
                break;
              }
              throw new Error('User not found');
            case 7:
              return _context2.abrupt("return", user);
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              throw new Error(_context2.t0.message);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 10]]);
      }));
      function findUser(_x) {
        return _findUser.apply(this, arguments);
      }
      return findUser;
    }()
  }, {
    key: "postUser",
    value: function () {
      var _postUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(body) {
        var user;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(body)) {
                _context3.next = 7;
                break;
              }
              user = _objectSpread({
                id: (0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID)()
              }, body);
              _context3.next = 5;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"].push(user);
            case 5:
              _context3.next = 8;
              break;
            case 7:
              throw new Error("Object doesn't have required fields");
            case 8:
              _context3.next = 13;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              throw new Error(_context3.t0.message);
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 10]]);
      }));
      function postUser(_x2) {
        return _postUser.apply(this, arguments);
      }
      return postUser;
    }()
  }, {
    key: "putUser",
    value: function () {
      var _putUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(body, id) {
        var index;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(body)) {
                _context4.next = 13;
                break;
              }
              _context4.next = 4;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"].findIndex(function (elem) {
                return elem.id === id;
              });
            case 4:
              index = _context4.sent;
              if (!(index >= 0)) {
                _context4.next = 10;
                break;
              }
              _context4.next = 8;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"].splice(index, 1, _objectSpread({
                id: _data_users__WEBPACK_IMPORTED_MODULE_1__["default"][index].id
              }, body));
            case 8:
              _context4.next = 11;
              break;
            case 10:
              throw new Error("User doesn't exist");
            case 11:
              _context4.next = 14;
              break;
            case 13:
              throw new Error("Object doesn't have required fields");
            case 14:
              _context4.next = 19;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](0);
              throw new Error(_context4.t0.message);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 16]]);
      }));
      function putUser(_x3, _x4) {
        return _putUser.apply(this, arguments);
      }
      return putUser;
    }()
  }, {
    key: "removeUser",
    value: function () {
      var _removeUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        var index;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"].findIndex(function (elem) {
                return elem.id === id;
              });
            case 3:
              index = _context5.sent;
              if (!(index >= 0)) {
                _context5.next = 9;
                break;
              }
              _context5.next = 7;
              return _data_users__WEBPACK_IMPORTED_MODULE_1__["default"].splice(index, 1);
            case 7:
              _context5.next = 10;
              break;
            case 9:
              throw new Error("User doesn't exist");
            case 10:
              _context5.next = 15;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              throw new Error(_context5.t0.message);
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 12]]);
      }));
      function removeUser(_x5) {
        return _removeUser.apply(this, arguments);
      }
      return removeUser;
    }()
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!UsersModel.instance) {
        UsersModel.instance = new UsersModel();
      }
      return UsersModel.instance;
    }
  }]);
  return UsersModel;
}();
var userModel = UsersModel.getInstance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userModel);

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isUserBody = function isUserBody(obj) {
  return 'username' in obj && 'age' in obj && 'hobbies' in obj && Object.keys(obj).length === 3;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isUserBody);

/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs")
const path = __webpack_require__(/*! path */ "path")
const os = __webpack_require__(/*! os */ "os")
const packageJson = __webpack_require__(/*! ../package.json */ "./node_modules/dotenv/package.json")

const version = packageJson.version

const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg

// Parser src into an Object
function parse (src) {
  const obj = {}

  // Convert buffer to string
  let lines = src.toString()

  // Convert line breaks to same format
  lines = lines.replace(/\r\n?/mg, '\n')

  let match
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1]

    // Default undefined or null to empty string
    let value = (match[2] || '')

    // Remove whitespace
    value = value.trim()

    // Check if double quoted
    const maybeQuote = value[0]

    // Remove surrounding quotes
    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2')

    // Expand newlines if double quoted
    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, '\n')
      value = value.replace(/\\r/g, '\r')
    }

    // Add to object
    obj[key] = value
  }

  return obj
}

function _log (message) {
  console.log(`[dotenv@${version}][DEBUG] ${message}`)
}

function _resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}

// Populates process.env from .env file
function config (options) {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding = 'utf8'
  const debug = Boolean(options && options.debug)
  const override = Boolean(options && options.override)

  if (options) {
    if (options.path != null) {
      dotenvPath = _resolveHome(options.path)
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
  }

  try {
    // Specifying an encoding returns a string instead of a buffer
    const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }))

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key]
      } else {
        if (override === true) {
          process.env[key] = parsed[key]
        }

        if (debug) {
          if (override === true) {
            _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`)
          } else {
            _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`)
          }
        }
      }
    })

    return { parsed }
  } catch (e) {
    if (debug) {
      _log(`Failed to load ${dotenvPath} ${e.message}`)
    }

    return { error: e }
  }
}

const DotenvModule = {
  config,
  parse
}

module.exports.config = DotenvModule.config
module.exports.parse = DotenvModule.parse
module.exports = DotenvModule


/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/native.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-node/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "./node_modules/dotenv/package.json":
/*!******************************************!*\
  !*** ./node_modules/dotenv/package.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}');

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controlers_usersControler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controlers/usersControler */ "./src/controlers/usersControler.ts");




dotenv__WEBPACK_IMPORTED_MODULE_2__.config();
var server = http__WEBPACK_IMPORTED_MODULE_0__.createServer(function (req, res) {
  var baseURL = url__WEBPACK_IMPORTED_MODULE_1__.parse(req.url, true);
  if (req.url !== '/favicon.ico') {
    if (req.url === '/api/users' && req.method === 'GET') {
      _controlers_usersControler__WEBPACK_IMPORTED_MODULE_3__["default"].getUsers(req, res);
    } else if (req.url === '/api/users' && req.method === 'POST') {
      _controlers_usersControler__WEBPACK_IMPORTED_MODULE_3__["default"].createUser(req, res);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})$/) && req.method === 'PUT') {
      _controlers_usersControler__WEBPACK_IMPORTED_MODULE_3__["default"].updateUser(req, res, baseURL.query.id);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})$/) && req.method === 'GET') {
      _controlers_usersControler__WEBPACK_IMPORTED_MODULE_3__["default"].getUser(req, res, baseURL.query.id);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})$/) && req.method === 'DELETE') {
      _controlers_usersControler__WEBPACK_IMPORTED_MODULE_3__["default"].deleteUser(req, res, baseURL.query.id);
    } else {
      res.writeHead(404, {
        'Content-Type': 'application/json'
      }).end(JSON.stringify("Resource doesn't exist"));
    }
  }
});
var PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT, "."));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxRztFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTXlFLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksSUFBSSxJQUFJO0FBRXJDTCxNQUFNLENBQUNRLE1BQU0sQ0FBQ0gsSUFBSSxFQUFFLFlBQU07RUFDeEJ2RSxPQUFPLENBQUMyRSxHQUFHLDJCQUFBQyxNQUFBLENBQTJCTCxJQUFJLE9BQUk7QUFDaEQsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkLWFwaS8uL3NyYy9jb250cm9sZXJzL3VzZXJzQ29udHJvbGVyLnRzIiwid2VicGFjazovL2NydWQtYXBpLy4vc3JjL2RhdGEvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9zcmMvbW9kZWxzL3VzZXJzTW9kZWwudHMiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9ub2RlX21vZHVsZXMvZG90ZW52L2xpYi9tYWluLmpzIiwid2VicGFjazovL2NydWQtYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3JlZ2V4LmpzIiwid2VicGFjazovL2NydWQtYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9ybmcuanMiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jcnVkLWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvdjQuanMiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2NydWQtYXBpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9jcnVkLWFwaS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9jcnVkLWFwaS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2NydWQtYXBpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJvc1wiIiwid2VicGFjazovL2NydWQtYXBpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInVybFwiIiwid2VicGFjazovL2NydWQtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NydWQtYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NydWQtYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jcnVkLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NydWQtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3J1ZC1hcGkvLi9zcmMvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlIGFzIHV1aWRWYWxpZGF0ZSB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvdXNlcnNNb2RlbCc7XG5pbXBvcnQgeyBJVXNlckJvZHkgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcblxuY2xhc3MgUHJvZHVjdENvbnRyb2xlciB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9kdWN0Q29udHJvbGVyO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFByb2R1Y3RDb250cm9sZXIge1xuICAgIGlmICghUHJvZHVjdENvbnRyb2xlci5pbnN0YW5jZSkge1xuICAgICAgUHJvZHVjdENvbnRyb2xlci5pbnN0YW5jZSA9IG5ldyBQcm9kdWN0Q29udHJvbGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb2R1Y3RDb250cm9sZXIuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0VXNlcnMocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVzZXJNb2RlbC5maW5kQWxsVXNlcnMoKTtcbiAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0VXNlcihyZXEsIHJlcywgaWQpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHV1aWRWYWxpZGF0ZShpZCkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVzZXJNb2RlbC5maW5kVXNlcihpZCk7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoNDAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbm4nIH0pLmVuZChKU09OLnN0cmluZ2lmeSgnVVVJRCBpcyBpbnZhbGlkJykpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMud3JpdGVIZWFkKDQwNCwgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLmVuZChKU09OLnN0cmluZ2lmeShlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZVVzZXIocmVxLCByZXMpIHtcbiAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgcmVxLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICBib2R5ICs9IGNodW5rLnRvU3RyaW5nKCk7XG4gICAgfSk7XG5cbiAgICByZXEub24oJ2VuZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG9iajogSVVzZXJCb2R5ID0gSlNPTi5wYXJzZShib2R5KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdXNlck1vZGVsLnBvc3RVc2VyKG9iaik7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAxLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KCdVc2VyIHdhcyBjcmVhdGVkJykpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLndyaXRlSGVhZCg0MDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KS5lbmQoSlNPTi5zdHJpbmdpZnkoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVxLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgcmVzLndyaXRlSGVhZCg1MDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KS5lbmQoSlNPTi5zdHJpbmdpZnkoZXJyb3IubWVzc2FnZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVVzZXIocmVxLCByZXMsIGlkKSB7XG4gICAgaWYgKHV1aWRWYWxpZGF0ZShpZCkpIHtcbiAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgIHJlcS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICBib2R5ICs9IGNodW5rLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLm9uKCdlbmQnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iajogSVVzZXJCb2R5ID0gSlNPTi5wYXJzZShib2R5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHVzZXJNb2RlbC5wdXRVc2VyKG9iaiwgaWQpO1xuICAgICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KCdVc2VyIHdhcyB1cGRhdGVkJykpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlcy53cml0ZUhlYWQoNDA0LCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgcmVzLndyaXRlSGVhZCg1MDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KS5lbmQoSlNPTi5zdHJpbmdpZnkoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy53cml0ZUhlYWQoNDAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KCdVVUlEIGlzIGludmFsaWQnKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZVVzZXIocmVxLCByZXMsIGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh1dWlkVmFsaWRhdGUoaWQpKSB7XG4gICAgICAgIGF3YWl0IHVzZXJNb2RlbC5yZW1vdmVVc2VyKGlkKTtcbiAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoNDAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KCdVVUlEIGlzIGludmFsaWQnKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy53cml0ZUhlYWQoNDA0LCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkuZW5kKEpTT04uc3RyaW5naWZ5KGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn1cbmNvbnN0IHVzZXJzQ29udHJvbGVyID0gUHJvZHVjdENvbnRyb2xlci5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2Vyc0NvbnRyb2xlcjtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcblxuY29uc3QgdXNlcnM6IEFycmF5PElVc2VyPiA9IFtcbiAge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB1c2VybmFtZTogJ0FydGVtJyxcbiAgICBhZ2U6IDI4LFxuICAgIGhvYmJpZXM6IFsnUHJvZ3JhbW1pbmcnXSxcbiAgfSxcbiAge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB1c2VybmFtZTogJ0l2YW4nLFxuICAgIGFnZTogMjUsXG4gICAgaG9iYmllczogWydCb29rcyddLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcnM7XG4iLCJpbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB1c2VycyBmcm9tICcuLi9kYXRhL3VzZXJzJztcbmltcG9ydCB7IElVc2VyLCBJVXNlckJvZHkgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcbmltcG9ydCBpc1VzZXJCb2R5IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuY2xhc3MgVXNlcnNNb2RlbCB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBVc2Vyc01vZGVsO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFVzZXJzTW9kZWwge1xuICAgIGlmICghVXNlcnNNb2RlbC5pbnN0YW5jZSkge1xuICAgICAgVXNlcnNNb2RlbC5pbnN0YW5jZSA9IG5ldyBVc2Vyc01vZGVsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFVzZXJzTW9kZWwuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmluZEFsbFVzZXJzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlcnM7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBmaW5kVXNlcihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1c2VycztcbiAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmZpbmQoKGVsZW0pID0+IGVsZW0uaWQgPT09IGlkKTtcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwb3N0VXNlcihib2R5OiBJVXNlckJvZHkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGlzVXNlckJvZHkoYm9keSkpIHtcbiAgICAgICAgY29uc3QgdXNlcjogSVVzZXIgPSB7XG4gICAgICAgICAgaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgICAgICAuLi5ib2R5LFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCB1c2Vycy5wdXNoKHVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0IGRvZXNuJ3QgaGF2ZSByZXF1aXJlZCBmaWVsZHNcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcHV0VXNlcihib2R5OiBJVXNlckJvZHksIGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc1VzZXJCb2R5KGJvZHkpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBhd2FpdCB1c2Vycy5maW5kSW5kZXgoKGVsZW0pID0+IGVsZW0uaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBhd2FpdCB1c2Vycy5zcGxpY2UoaW5kZXgsIDEsIHsgaWQ6IHVzZXJzW2luZGV4XS5pZCwgLi4uYm9keSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdCBkb2Vzbid0IGhhdmUgcmVxdWlyZWQgZmllbGRzXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlbW92ZVVzZXIoaWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGF3YWl0IHVzZXJzLmZpbmRJbmRleCgoZWxlbSkgPT4gZWxlbS5pZCA9PT0gaWQpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgYXdhaXQgdXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgZG9lc24ndCBleGlzdFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCB1c2VyTW9kZWwgPSBVc2Vyc01vZGVsLmdldEluc3RhbmNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJNb2RlbDtcbiIsImltcG9ydCB7IElVc2VyQm9keSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmNvbnN0IGlzVXNlckJvZHkgPSAob2JqKTogb2JqIGlzIElVc2VyQm9keSA9PiAndXNlcm5hbWUnIGluIG9iaiAmJiAnYWdlJyBpbiBvYmogJiYgJ2hvYmJpZXMnIGluIG9iaiAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMztcblxuZXhwb3J0IGRlZmF1bHQgaXNVc2VyQm9keTtcbiIsImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpXG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbmNvbnN0IHZlcnNpb24gPSBwYWNrYWdlSnNvbi52ZXJzaW9uXG5cbmNvbnN0IExJTkUgPSAvKD86XnxeKVxccyooPzpleHBvcnRcXHMrKT8oW1xcdy4tXSspKD86XFxzKj1cXHMqP3w6XFxzKz8pKFxccyonKD86XFxcXCd8W14nXSkqJ3xcXHMqXCIoPzpcXFxcXCJ8W15cIl0pKlwifFxccypgKD86XFxcXGB8W15gXSkqYHxbXiNcXHJcXG5dKyk/XFxzKig/OiMuKik/KD86JHwkKS9tZ1xuXG4vLyBQYXJzZXIgc3JjIGludG8gYW4gT2JqZWN0XG5mdW5jdGlvbiBwYXJzZSAoc3JjKSB7XG4gIGNvbnN0IG9iaiA9IHt9XG5cbiAgLy8gQ29udmVydCBidWZmZXIgdG8gc3RyaW5nXG4gIGxldCBsaW5lcyA9IHNyYy50b1N0cmluZygpXG5cbiAgLy8gQ29udmVydCBsaW5lIGJyZWFrcyB0byBzYW1lIGZvcm1hdFxuICBsaW5lcyA9IGxpbmVzLnJlcGxhY2UoL1xcclxcbj8vbWcsICdcXG4nKVxuXG4gIGxldCBtYXRjaFxuICB3aGlsZSAoKG1hdGNoID0gTElORS5leGVjKGxpbmVzKSkgIT0gbnVsbCkge1xuICAgIGNvbnN0IGtleSA9IG1hdGNoWzFdXG5cbiAgICAvLyBEZWZhdWx0IHVuZGVmaW5lZCBvciBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgIGxldCB2YWx1ZSA9IChtYXRjaFsyXSB8fCAnJylcblxuICAgIC8vIFJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKClcblxuICAgIC8vIENoZWNrIGlmIGRvdWJsZSBxdW90ZWRcbiAgICBjb25zdCBtYXliZVF1b3RlID0gdmFsdWVbMF1cblxuICAgIC8vIFJlbW92ZSBzdXJyb3VuZGluZyBxdW90ZXNcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oWydcImBdKShbXFxzXFxTXSopXFwxJC9tZywgJyQyJylcblxuICAgIC8vIEV4cGFuZCBuZXdsaW5lcyBpZiBkb3VibGUgcXVvdGVkXG4gICAgaWYgKG1heWJlUXVvdGUgPT09ICdcIicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFxyL2csICdcXHInKVxuICAgIH1cblxuICAgIC8vIEFkZCB0byBvYmplY3RcbiAgICBvYmpba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIF9sb2cgKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coYFtkb3RlbnZAJHt2ZXJzaW9ufV1bREVCVUddICR7bWVzc2FnZX1gKVxufVxuXG5mdW5jdGlvbiBfcmVzb2x2ZUhvbWUgKGVudlBhdGgpIHtcbiAgcmV0dXJuIGVudlBhdGhbMF0gPT09ICd+JyA/IHBhdGguam9pbihvcy5ob21lZGlyKCksIGVudlBhdGguc2xpY2UoMSkpIDogZW52UGF0aFxufVxuXG4vLyBQb3B1bGF0ZXMgcHJvY2Vzcy5lbnYgZnJvbSAuZW52IGZpbGVcbmZ1bmN0aW9uIGNvbmZpZyAob3B0aW9ucykge1xuICBsZXQgZG90ZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLmVudicpXG4gIGxldCBlbmNvZGluZyA9ICd1dGY4J1xuICBjb25zdCBkZWJ1ZyA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKVxuICBjb25zdCBvdmVycmlkZSA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLm92ZXJyaWRlKVxuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucGF0aCAhPSBudWxsKSB7XG4gICAgICBkb3RlbnZQYXRoID0gX3Jlc29sdmVIb21lKG9wdGlvbnMucGF0aClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZW5jb2RpbmcgIT0gbnVsbCkge1xuICAgICAgZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBTcGVjaWZ5aW5nIGFuIGVuY29kaW5nIHJldHVybnMgYSBzdHJpbmcgaW5zdGVhZCBvZiBhIGJ1ZmZlclxuICAgIGNvbnN0IHBhcnNlZCA9IERvdGVudk1vZHVsZS5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZG90ZW52UGF0aCwgeyBlbmNvZGluZyB9KSlcblxuICAgIE9iamVjdC5rZXlzKHBhcnNlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9jZXNzLmVudiwga2V5KSkge1xuICAgICAgICBwcm9jZXNzLmVudltrZXldID0gcGFyc2VkW2tleV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvdmVycmlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW52W2tleV0gPSBwYXJzZWRba2V5XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfbG9nKGBcIiR7a2V5fVwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBcXGBwcm9jZXNzLmVudlxcYCBhbmQgV0FTIG92ZXJ3cml0dGVuYClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2xvZyhgXCIke2tleX1cIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gXFxgcHJvY2Vzcy5lbnZcXGAgYW5kIHdhcyBOT1Qgb3ZlcndyaXR0ZW5gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBwYXJzZWQgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBfbG9nKGBGYWlsZWQgdG8gbG9hZCAke2RvdGVudlBhdGh9ICR7ZS5tZXNzYWdlfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXJyb3I6IGUgfVxuICB9XG59XG5cbmNvbnN0IERvdGVudk1vZHVsZSA9IHtcbiAgY29uZmlnLFxuICBwYXJzZVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jb25maWcgPSBEb3RlbnZNb2R1bGUuY29uZmlnXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IERvdGVudk1vZHVsZS5wYXJzZVxubW9kdWxlLmV4cG9ydHMgPSBEb3RlbnZNb2R1bGVcbiIsImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRDogY3J5cHRvLnJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmNvbnN0IHJuZHM4UG9vbCA9IG5ldyBVaW50OEFycmF5KDI1Nik7IC8vICMgb2YgcmFuZG9tIHZhbHVlcyB0byBwcmUtYWxsb2NhdGVcblxubGV0IHBvb2xQdHIgPSBybmRzOFBvb2wubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICBpZiAocG9vbFB0ciA+IHJuZHM4UG9vbC5sZW5ndGggLSAxNikge1xuICAgIGNyeXB0by5yYW5kb21GaWxsU3luYyhybmRzOFBvb2wpO1xuICAgIHBvb2xQdHIgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHJuZHM4UG9vbC5zbGljZShwb29sUHRyLCBwb29sUHRyICs9IDE2KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSAndXJsJztcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHVzZXJzQ29udHJvbGVyIGZyb20gJy4vY29udHJvbGVycy91c2Vyc0NvbnRyb2xlcic7XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGJhc2VVUkwgPSB1cmwucGFyc2UocmVxLnVybCwgdHJ1ZSk7XG4gIGlmIChyZXEudXJsICE9PSAnL2Zhdmljb24uaWNvJykge1xuICAgIGlmIChyZXEudXJsID09PSAnL2FwaS91c2VycycgJiYgcmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIHVzZXJzQ29udHJvbGVyLmdldFVzZXJzKHJlcSwgcmVzKTtcbiAgICB9IGVsc2UgaWYgKHJlcS51cmwgPT09ICcvYXBpL3VzZXJzJyAmJiByZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIHVzZXJzQ29udHJvbGVyLmNyZWF0ZVVzZXIocmVxLCByZXMpO1xuICAgIH0gZWxzZSBpZiAocmVxLnVybC5tYXRjaCgvXFwvYXBpXFwvdXNlcnNcXC9cXD9pZD0oLnszNn0pJC8pICYmIHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XG4gICAgICB1c2Vyc0NvbnRyb2xlci51cGRhdGVVc2VyKHJlcSwgcmVzLCBiYXNlVVJMLnF1ZXJ5LmlkKTtcbiAgICB9IGVsc2UgaWYgKHJlcS51cmwubWF0Y2goL1xcL2FwaVxcL3VzZXJzXFwvXFw/aWQ9KC57MzZ9KSQvKSAmJiByZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgdXNlcnNDb250cm9sZXIuZ2V0VXNlcihyZXEsIHJlcywgYmFzZVVSTC5xdWVyeS5pZCk7XG4gICAgfSBlbHNlIGlmIChyZXEudXJsLm1hdGNoKC9cXC9hcGlcXC91c2Vyc1xcL1xcP2lkPSguezM2fSkkLykgJiYgcmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgIHVzZXJzQ29udHJvbGVyLmRlbGV0ZVVzZXIocmVxLCByZXMsIGJhc2VVUkwucXVlcnkuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMud3JpdGVIZWFkKDQwNCwgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLmVuZChKU09OLnN0cmluZ2lmeShcIlJlc291cmNlIGRvZXNuJ3QgZXhpc3RcIikpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5cbnNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9LmApO1xufSk7XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJ2YWxpZGF0ZSIsInV1aWRWYWxpZGF0ZSIsInVzZXJNb2RlbCIsIlByb2R1Y3RDb250cm9sZXIiLCJfZ2V0VXNlcnMiLCJfY2FsbGVlIiwicmVxIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJmaW5kQWxsVXNlcnMiLCJ3cml0ZUhlYWQiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidDAiLCJjb25zb2xlIiwibWVzc2FnZSIsImdldFVzZXJzIiwiX3giLCJfeDIiLCJfZ2V0VXNlciIsIl9jYWxsZWUyIiwiaWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJmaW5kVXNlciIsImdldFVzZXIiLCJfeDMiLCJfeDQiLCJfeDUiLCJjcmVhdGVVc2VyIiwiYm9keSIsIm9uIiwiY2h1bmsiLCJ0b1N0cmluZyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicGFyc2UiLCJwb3N0VXNlciIsInVwZGF0ZVVzZXIiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInB1dFVzZXIiLCJfZGVsZXRlVXNlciIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicmVtb3ZlVXNlciIsImRlbGV0ZVVzZXIiLCJfeDYiLCJfeDciLCJfeDgiLCJnZXRJbnN0YW5jZSIsInVzZXJzQ29udHJvbGVyIiwidjQiLCJ1dWlkdjQiLCJ1c2VycyIsInVzZXJuYW1lIiwiYWdlIiwiaG9iYmllcyIsInJhbmRvbVVVSUQiLCJpc1VzZXJCb2R5IiwiVXNlcnNNb2RlbCIsIl9maW5kQWxsVXNlcnMiLCJfZmluZFVzZXIiLCJ1c2VyIiwiZmluZCIsImVsZW0iLCJfcG9zdFVzZXIiLCJfb2JqZWN0U3ByZWFkIiwiX3B1dFVzZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsIl9yZW1vdmVVc2VyIiwiaHR0cCIsInVybCIsImRvdGVudiIsImNvbmZpZyIsInNlcnZlciIsImNyZWF0ZVNlcnZlciIsImJhc2VVUkwiLCJtYXRjaCIsInF1ZXJ5IiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJsaXN0ZW4iLCJsb2ciLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9