/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	/*******************************************************
	 * Copyright (C) 2016 PTP APP LLC - All Rights Reserved
	 * Unauthorized copying of this file, in whole or in part, via any medium is strictly prohibited.
	 * Proprietary and Confidential
	 *******************************************************/
	
	var _urlToolkit = __webpack_require__(1);
	
	var _urlToolkit2 = _interopRequireDefault(_urlToolkit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PollBuilderInject = function () {
		function PollBuilderInject() {
			_classCallCheck(this, PollBuilderInject);
		}
	
		_createClass(PollBuilderInject, null, [{
			key: 'map',
	
			/**
	  	The main mapping function for usage when injecting the poll builder into the page.
	  */
			value: function map(requirements, itemSelector, logic, intvl) {
				// figure out if page meets requirements and should have poll builder injected
				if (Array.isArray(requirements)) {
					if (!requirements.some(document.querySelector(sel))) return false;
				} else if (typeof requirements === 'function') {
					if (!requirements()) return false;
				} else if (typeof requirements === 'string') {
					if (!document.querySelector(requirements)) return false;
				} else {
					if (!requirements) return false;
				}
	
				// figure out what elements on the page are the items themselves
				var items, item;
				if (Array.isArray(itemSelector)) items = itemSelector;else if (typeof itemSelector === 'function') items = itemSelector();else if (typeof itemSelector === 'string') items = document.querySelectorAll(itemSelector);else throw new Error('Invalid item selector value');
	
				// for every item run the logic supplied
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						item = _step.value;
	
						logic(item);
					} // If an interval is supplied, check again on that interval.
					// This is specifically for the purpose of pages that load more
					// items dynamically, so that it can detect new items later.
					// Function should check for if items have already been modified.
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				if (intvl) {
					PollBuilderInject._interval = setInterval(function () {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;
	
						try {
							for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								item = _step2.value;
	
								logic(item);
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}
					}, intvl);
				}
	
				// return true for success
				return true;
			}
		}, {
			key: 'embed',
	
	
			/**
	  	Adds the poll builder embedding script to the page, and then embeds sticky-style.
	  */
			value: function embed(token, options, callback) {
				// allow (token, callback) format if no options
				if (typeof options === 'function' && typeof callback === 'undefined') callback = options;
	
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.async = true;
				script.addEventListener('load', function () {
					pollBuilder.embedSticky(token, options || {});
					callback();
				});
				script.src = 'https://scripts.gethyperr.com/desktop/latest.js';
				document.getElementsByTagName('head')[0].appendChild(script);
			}
	
			/**
	  	Shortcut that can be used by the mapping logic functions for the adding of data element.
	  */
	
		}, {
			key: 'addDataElement',
			value: function addDataElement(elem, image, link) {
				var obj = { image: image };
				if (link) obj.link = link;
	
				elem.setAttribute('data-poll-builder', JSON.stringify(obj));
			}
	
			/**
	  	Makes a url such as `/folder/resource.ext` or `folder/resource.ext` and converts to proper absolute URL.
	  */
	
		}, {
			key: 'absoluteURL',
			value: function absoluteURL(url) {
				return _urlToolkit2.default.buildAbsoluteURL(document.location.href, url);
			}
	
			/**
	  	Automatically sets up buttons (either as an array of elements, or a query selector) to show/hide as pollbuilder does.
	  	@note - must ONLY be called after successful loading of the pollBuilder object/script (i.e. on the callback)
	  */
	
		}, {
			key: 'autoHideButtons',
			value: function autoHideButtons(btns) {
				if (typeof btns === 'string') btns = Array.prototype.slice.call(document.querySelectorAll(btns));
	
				pollBuilder.addEventListener("pb:maximized", function () {
					btns.map(function (button) {
						button.style.opacity = '1';
						button.style.pointerEvents = 'auto';
					});
				});
				pollBuilder.addEventListener("pb:minimized", function () {
					btns.map(function (button) {
						button.style.opacity = '0';
						button.style.pointerEvents = 'none';
					});
				});
			}
		}]);
	
		return PollBuilderInject;
	}();
	
	PollBuilderInject._interval = null;
	
	
	window.PollBuilderInject = PollBuilderInject;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// see https://tools.ietf.org/html/rfc1808
	
	/* jshint ignore:start */
	(function (root) {
	  /* jshint ignore:end */
	
	  var URL_REGEX = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/;
	  var FIRST_SEGMENT_REGEX = /^([^\/;?#]*)(.*)$/;
	  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
	  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g;
	
	  var URLToolkit = { // jshint ignore:line
	    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
	    // E.g
	    // With opts.alwaysNormalize = false (default, spec compliant)
	    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
	    // With opts.alwaysNormalize = true (default, not spec compliant)
	    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
	    buildAbsoluteURL: function buildAbsoluteURL(baseURL, relativeURL, opts) {
	      opts = opts || {};
	      // remove any remaining space and CRLF
	      baseURL = baseURL.trim();
	      relativeURL = relativeURL.trim();
	      if (!relativeURL) {
	        // 2a) If the embedded URL is entirely empty, it inherits the
	        // entire base URL (i.e., is set equal to the base URL)
	        // and we are done.
	        if (!opts.alwaysNormalize) {
	          return baseURL;
	        }
	        var basePartsForNormalise = this.parseURL(baseURL);
	        if (!baseParts) {
	          throw new Error('Error trying to parse base URL.');
	        }
	        basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path);
	        return URLToolkit.buildURLFromParts(basePartsForNormalise);
	      }
	      var relativeParts = this.parseURL(relativeURL);
	      if (!relativeParts) {
	        throw new Error('Error trying to parse relative URL.');
	      }
	      if (relativeParts.scheme) {
	        // 2b) If the embedded URL starts with a scheme name, it is
	        // interpreted as an absolute URL and we are done.
	        if (!opts.alwaysNormalize) {
	          return relativeURL;
	        }
	        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
	        return URLToolkit.buildURLFromParts(relativeParts);
	      }
	      var baseParts = this.parseURL(baseURL);
	      if (!baseParts) {
	        throw new Error('Error trying to parse base URL.');
	      }
	      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
	        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
	        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
	        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
	        baseParts.netLoc = pathParts[1];
	        baseParts.path = pathParts[2];
	      }
	      if (baseParts.netLoc && !baseParts.path) {
	        baseParts.path = '/';
	      }
	      var builtParts = {
	        // 2c) Otherwise, the embedded URL inherits the scheme of
	        // the base URL.
	        scheme: baseParts.scheme,
	        netLoc: relativeParts.netLoc,
	        path: null,
	        params: relativeParts.params,
	        query: relativeParts.query,
	        fragment: relativeParts.fragment
	      };
	      if (!relativeParts.netLoc) {
	        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
	        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
	        // (if any) of the base URL.
	        builtParts.netLoc = baseParts.netLoc;
	        // 4) If the embedded URL path is preceded by a slash "/", the
	        // path is not relative and we skip to Step 7.
	        if (relativeParts.path[0] !== '/') {
	          if (!relativeParts.path) {
	            // 5) If the embedded URL path is empty (and not preceded by a
	            // slash), then the embedded URL inherits the base URL path
	            builtParts.path = baseParts.path;
	            // 5a) if the embedded URL's <params> is non-empty, we skip to
	            // step 7; otherwise, it inherits the <params> of the base
	            // URL (if any) and
	            if (!relativeParts.params) {
	              builtParts.params = baseParts.params;
	              // 5b) if the embedded URL's <query> is non-empty, we skip to
	              // step 7; otherwise, it inherits the <query> of the base
	              // URL (if any) and we skip to step 7.
	              if (!relativeParts.query) {
	                builtParts.query = baseParts.query;
	              }
	            }
	          } else {
	            // 6) The last segment of the base URL's path (anything
	            // following the rightmost slash "/", or the entire path if no
	            // slash is present) is removed and the embedded URL's path is
	            // appended in its place.
	            var baseURLPath = baseParts.path;
	            var newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) + relativeParts.path;
	            builtParts.path = URLToolkit.normalizePath(newPath);
	          }
	        }
	      }
	      if (builtParts.path === null) {
	        builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path;
	      }
	      return URLToolkit.buildURLFromParts(builtParts);
	    },
	    parseURL: function parseURL(url) {
	      var parts = URL_REGEX.exec(url);
	      if (!parts) {
	        return null;
	      }
	      return {
	        scheme: parts[1] || '',
	        netLoc: parts[2] || '',
	        path: parts[3] || '',
	        params: parts[4] || '',
	        query: parts[5] || '',
	        fragment: parts[6] || ''
	      };
	    },
	    normalizePath: function normalizePath(path) {
	      // The following operations are
	      // then applied, in order, to the new path:
	      // 6a) All occurrences of "./", where "." is a complete path
	      // segment, are removed.
	      // 6b) If the path ends with "." as a complete path segment,
	      // that "." is removed.
	      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
	      // 6c) All occurrences of "<segment>/../", where <segment> is a
	      // complete path segment not equal to "..", are removed.
	      // Removal of these path segments is performed iteratively,
	      // removing the leftmost matching pattern on each iteration,
	      // until no matching pattern remains.
	      // 6d) If the path ends with "<segment>/..", where <segment> is a
	      // complete path segment not equal to "..", that
	      // "<segment>/.." is removed.
	      while (path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length) {} // jshint ignore:line
	      return path.split('').reverse().join('');
	    },
	    buildURLFromParts: function buildURLFromParts(parts) {
	      return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment;
	    }
	  };
	
	  /* jshint ignore:start */
	  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = URLToolkit;else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return URLToolkit;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["URLToolkit"] = URLToolkit;else root["URLToolkit"] = URLToolkit;
	})(undefined);
	/* jshint ignore:end */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=pollbuilder-inject.js.map