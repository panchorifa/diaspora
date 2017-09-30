(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.main = undefined;

	var _regenerator = __webpack_require__(1);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(2);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var main = exports.main = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event, context, callback) {
	    var limit, offset, stream;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.prev = 0;
	            limit = event.query.limit || DEFAULT_LIMIT;
	            offset = event.query.offset || DEFAULT_OFFSET;
	            _context.next = 5;
	            return scraper.scrapeStream(parseInt(limit), parseInt(offset));

	          case 5:
	            stream = _context.sent;

	            callback(null, (0, _responseLib.success)(stream));
	            _context.next = 13;
	            break;

	          case 9:
	            _context.prev = 9;
	            _context.t0 = _context['catch'](0);

	            console.log(_context.t0);
	            callback(null, (0, _responseLib.failure)({ status: false }));

	          case 13:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this, [[0, 9]]);
	  }));

	  return function main(_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();

	var _scraperLib = __webpack_require__(3);

	var scraper = _interopRequireWildcard(_scraperLib);

	var _responseLib = __webpack_require__(6);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_LIMIT = 15;
	var DEFAULT_OFFSET = 0;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.scrapeStream = undefined;

	var _regenerator = __webpack_require__(1);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(2);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var scrapeStream = exports.scrapeStream = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(limit, offset) {
	    var chromeless, pageLimit, stream;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            chromeless = new _chromeless2.default({ remote: true,
	              scrollBeforeClick: true, implicitWait: true });
	            _context.next = 3;
	            return diaspora.login(chromeless, USERNAME, PASSWORD);

	          case 3:
	            if (!_context.sent) {
	              _context.next = 17;
	              break;
	            }

	            console.log('Successfully logged in!');

	            pageLimit = limit;

	            if (offset > 0) {
	              pageLimit += offset;
	            }
	            _context.next = 9;
	            return diaspora.paginate(chromeless, pageLimit);

	          case 9:
	            _context.next = 11;
	            return diaspora.stream(chromeless);

	          case 11:
	            stream = _context.sent;

	            if (stream.length > limit) {
	              stream = stream.slice(offset, offset + limit);
	            }
	            console.log("Found " + stream.length + " posts.");

	            _context.next = 16;
	            return chromeless.end();

	          case 16:
	            return _context.abrupt('return', { stream: stream });

	          case 17:
	            console.log('Failed to log in!');
	            return _context.abrupt('return', { error: 'Unable to login!' });

	          case 19:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function scrapeStream(_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

	// scrapeStream()


	var _chromeless = __webpack_require__(4);

	var _chromeless2 = _interopRequireDefault(_chromeless);

	var _diasporaLib = __webpack_require__(5);

	var diaspora = _interopRequireWildcard(_diasporaLib);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var USERNAME = process.env.DIASPORA_USERNAME;
	var PASSWORD = process.env.DIASPORA_PASSWORD;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("chromeless");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stream = exports.paginate = exports.login = undefined;

	var _regenerator = __webpack_require__(1);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(2);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var login = exports.login = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(chromeless, username, password) {
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            console.log('Login Attempt.....');
	            _context.next = 3;
	            return chromeless.goto(SIGNIN_URL).wait('div#login').type(username, 'input#user_username').type(password, 'input#user_password').click('input[name="commit"]').wait(PAGE_TIMEOUT);

	          case 3:
	            return _context.abrupt('return', chromeless.exists('div#main_stream'));

	          case 4:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function login(_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();

	var paginate = exports.paginate = function () {
	  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(chromeless, limit) {
	    var loadedPosts;
	    return _regenerator2.default.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            loadedPosts = PAGE_LIMIT;

	          case 1:
	            if (!(loadedPosts < limit)) {
	              _context2.next = 8;
	              break;
	            }

	            _context2.next = 4;
	            return chromeless.scrollTo(0, 9999999).wait(PAGE_TIMEOUT);

	          case 4:
	            loadedPosts += PAGE_LIMIT;
	            console.log("Paginate : " + loadedPosts);
	            _context2.next = 1;
	            break;

	          case 8:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this);
	  }));

	  return function paginate(_x4, _x5) {
	    return _ref2.apply(this, arguments);
	  };
	}();

	var stream = exports.stream = function () {
	  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(chromeless) {
	    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	    return _regenerator2.default.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            _context3.next = 2;
	            return chromeless.evaluate(function (offset, limit) {

	              var POST_SELECTOR = '#main_stream .stream-element';
	              var POST_AUTHOR_SELECTOR = POST_SELECTOR + ' .post-controls';
	              var POST_CONTENT_SELECTOR = POST_SELECTOR + ' .post-content .markdown-content';
	              var POST_TEXT_SELECTOR = POST_CONTENT_SELECTOR + ' p';
	              var POST_TIME_SELECTOR = POST_SELECTOR + ' span.details';
	              var POST_LIKES_SELECTOR = '#main_stream .likes a';
	              var POST_RESHARES_SELECTOR = '#main_stream .reshares a';
	              var POST_LIKES_SUFFIX = ' Like';
	              var POST_RESHARES_SUFFIX = ' Reshare';

	              function parsePostText(i) {
	                return document.querySelectorAll(POST_TEXT_SELECTOR)[i].innerText;
	              }

	              function parsePostTime(i) {
	                var el = document.querySelectorAll(POST_TIME_SELECTOR)[i];
	                var html = el.children[0].innerHTML;
	                var idx = html.indexOf('datetime=') + 10;
	                return html.substring(idx, idx + 24);
	              }

	              function parsePostTags(i) {
	                var html = document.querySelectorAll(POST_CONTENT_SELECTOR)[i].innerHTML;
	                var tags = [];
	                html.replace(/[^<]*(<a href="([^"]+)" class="tag">([^<]+)<\/a>)/g, function () {
	                  tags.push(arguments[3]);
	                });
	                return tags;
	              }

	              // Parses likes and reshares
	              function parseOptionalInt(selector, i) {
	                var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	                var el = document.querySelectorAll(selector)[i];
	                if (el) {
	                  var text = el.innerText;
	                  return suffix ? parseInt(text.substring(0, text.indexOf(suffix))) : text;
	                }
	                return 0;
	              }

	              function parseAuthor(i) {
	                var author = document.querySelectorAll(POST_AUTHOR_SELECTOR)[i];
	                return author.parentNode.children[1].children[0];
	              }

	              function parsePost(i) {
	                var author = parseAuthor(i);
	                return {
	                  author_name: author.innerText,
	                  author_link: author.href,
	                  post_time: parsePostTime(i),
	                  post_text: parsePostText(i),
	                  post_tags: parsePostTags(i),
	                  post_likes: parseOptionalInt(POST_LIKES_SELECTOR, i, POST_LIKES_SUFFIX),
	                  post_reshares: parseOptionalInt(POST_RESHARES_SELECTOR, i, POST_RESHARES_SUFFIX)
	                };
	              }

	              return [].map.call(document.querySelectorAll(POST_SELECTOR), function (el, i) {
	                return parsePost(i);
	              });
	            });

	          case 2:
	            return _context3.abrupt('return', _context3.sent);

	          case 3:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, this);
	  }));

	  return function stream(_x8) {
	    return _ref3.apply(this, arguments);
	  };
	}();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SIGNIN_URL = 'https://joindiaspora.com/users/sign_in/';
	var PAGE_LIMIT = 15;
	var PAGE_TIMEOUT = 3000;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.success = success;
	exports.failure = failure;
	function success(body) {
	  return buildResponse(200, body);
	}

	function failure(body) {
	  return buildResponse(500, body);
	}

	function buildResponse(statusCode, body) {
	  return {
	    statusCode: statusCode,
	    headers: {
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Credentials': true,
	      'Content-Type': 'application/json'
	    },
	    // body: JSON.stringify(body),
	    body: body
	  };
	}

/***/ })
/******/ ])));