/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/ReplaceEmoticons.js":
/*!***************************************!*\
  !*** ./src/forum/ReplaceEmoticons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of justoverclock/flarum-ext-emoticonpack.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('baseUrl') + '/assets/extensions/justoverclock-emoticonpack/';
  var emoticons = {
    ':argh:': 'argh',
    ':blow:': 'blow',
    ':bad:': 'bad',
    ':beat:': 'beat',
    ':bee:': 'bee',
    ':beer:': 'beer',
    ':bike:': 'bike',
    ':blink:': 'blink',
    ':bot:': 'bot',
    ':bunny:': 'bunny',
    ':burger:': 'burger',
    ':cake:': 'cake',
    ':car:': 'car',
    ':center:': 'center',
    ':clap:': 'clap',
    ':coffee:': 'coffee',
    ':cold:': 'cold',
    ':copter:': 'copter',
    ':cow:': 'cow',
    ':cowboy:': 'cowboy',
    ':crazy:': 'crazy',
    ':cry:': 'cry',
    ':cup:': 'cup',
    ':devil:': 'devil',
    ':drum:': 'drum',
    ':drunk:': 'drunk',
    ':etciu:': 'etciu',
    ':fire:': 'fire',
    ':fish:': 'fish',
    ':fishing:': 'fishing',
    ':flu:': 'flu',
    ':frog:': 'frog',
    ':ghost:': 'ghost',
    ':glass:': 'glass',
    ':hot:': 'hot',
    ':joy:': 'joy',
    ':king:': 'king',
    ':kiss:': 'kiss',
    ':laugh:': 'laugh',
    ':lord:': 'lord',
    ':love:': 'love',
    ':missile:': 'missile',
    ':money:': 'money',
    ':money2:': 'money2',
    ':nerd:': 'nerd',
    ':nono:': 'nono',
    ':ok:': 'ok',
    ':omg:': 'omg',
    ':owl:': 'owl',
    ':pancake:': 'pancake',
    ':party:': 'party',
    ':photo:': 'photo',
    ':pig:': 'pig',
    ':pingu:': 'pingu',
    ':pistol:': 'pistol',
    ':police:': 'police',
    ':poo:': 'poo',
    ':rain:': 'rain',
    ':rofl:': 'rofl',
    ':sad:': 'sad',
    ':santa:': 'santa',
    ':sbav:': 'sbav',
    ':see:': 'see',
    ':sleep:': 'sleep',
    ':snake:': 'snake',
    ':snow:': 'snow',
    ':sshh:': 'sshh',
    ':star:': 'star',
    ':sun:': 'sun',
    ':throw:': 'throw',
    ':toast:': 'toast',
    ':tongue:': 'tongue',
    ':tornado:': 'tornado',
    ':uff:': 'uff',
    ':xmas:': 'xmas',
    ':zip:': 'zip',
    ':zombie:': 'zombie',
    ':alien:': 'alien',
    ':angel:': 'angel',
    ':upd:': 'upd',
    ':loveu:': 'loveu',
    ':hug:': 'hug',
    ':mumble:': 'mumble',
    ':yawn:': 'yawn',
    ':nose:': 'nose',
    ':fist:': 'fist',
    ':rock:': 'rock',
    ':finger:': 'finger',
    ':look:': 'look',
    ':doh:': 'doh',
    ':dog:': 'dog',
    ':uni:': 'uni',
    ':kang:': 'kang',
    ':sloth:': 'sloth',
    ':popcorn:': 'popcorn',
    ':golf:': 'golf',
    ':movie:': 'movie',
    ':plane:': 'plane',
    ':ufo:': 'ufo',
    ':island:': 'island',
    ':volcano:': 'volcano',
    ':alarm:': 'alarm',
    ':broken:': 'broken',
    ':warning:': 'warning',
    ':check:': 'check',
    ':clock:': 'clock'
  };
  mapIdsToPaths(emoticons, url, '', '');
  this.element.querySelectorAll('p').forEach(function (e) {
    return e.innerHTML = replaceEmoticons(e.innerHTML, emoticons);
  });
  function replaceEmoticons(text, emotes) {
    return Object.keys(emotes).reduce(function (result, emote) {
      return result.replace(new RegExp(RegExpEscape(emote), 'gi'), function (match) {
        return function (img) {
          return img != null ? '<img src="' + img + '" class="emoticonpack"/>' : match;
        }(emotes[match]);
      });
    }, text);
  }
  function RegExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  function mapIdsToPaths(emotes, url, prefix) {
    Object.keys(emotes).forEach(function (id) {
      emotes[id] = url + prefix + emotes[id] + '.gif';
    });
  }
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ReplaceEmoticons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReplaceEmoticons */ "./src/forum/ReplaceEmoticons.js");
/*
 * This file is part of justoverclock/flarum-ext-emoticonpack.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */





flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('justoverclock/flarum-ext-emoticonpack', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), ['oncreate', 'onupdate'], _ReplaceEmoticons__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map