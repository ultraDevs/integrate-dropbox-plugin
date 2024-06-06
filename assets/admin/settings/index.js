/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings/App.jsx":
/*!******************************!*\
  !*** ./src/settings/App.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Content */ "./src/settings/components/Content.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/settings/components/Header.jsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Sidebar */ "./src/settings/components/Sidebar.jsx");
/* harmony import */ var _scss_settings_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/settings.scss */ "./src/settings/scss/settings.scss");






const App = () => {
  const hash = window.location.hash;
  const hashValue = hash.replace('#', '');
  const [activeItem, setActiveItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(hashValue || 'accounts');
  const [formData, setFormData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formData: formData,
    setFormData: setFormData
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeItem: activeItem,
    setActiveItem: setActiveItem
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeItem: activeItem,
    formData: formData,
    setFormData: setFormData
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/settings/components/Content.jsx":
/*!*********************************************!*\
  !*** ./src/settings/components/Content.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contents_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents/Accounts */ "./src/settings/components/contents/Accounts.jsx");
/* harmony import */ var _contents_Appearance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents/Appearance */ "./src/settings/components/contents/Appearance.jsx");





const Content = props => {
  const {
    activeItem,
    formData,
    setFormData
  } = props;
  const {
    activeAccount
  } = EDBIData;

  // const settingsData = useSelect( ( select ) => {
  //     return select( 'edbi-page' ).getSettings();
  // })

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, activeItem === 'accounts' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_contents_Accounts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formData: formData,
    setFormData: setFormData
  }), activeItem === 'appearance' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_contents_Appearance__WEBPACK_IMPORTED_MODULE_4__["default"], {
    formData: formData,
    setFormData: setFormData
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/settings/components/Header.jsx":
/*!********************************************!*\
  !*** ./src/settings/components/Header.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const Header = props => {
  const {
    activeAccount,
    accounts,
    version
  } = EDBIData;
  const {
    formData,
    setFormData
  } = props;
  console.log('header formdaa', formData);
  const saveSettings = () => {
    console.log('saveSettings', formData);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center edbi-page__header__left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-admin-generic"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings', 'integrate-dropbox-wp'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "v", version))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__header__right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "px-5 py-3 text-sm text-white rounded-md bg-secondary",
    onClick: saveSettings
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-saved"
  }), ' ', "Save Changes")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/settings/components/Sidebar.jsx":
/*!*********************************************!*\
  !*** ./src/settings/components/Sidebar.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






const Sidebar = props => {
  const {
    activeItem,
    setActiveItem
  } = props;
  const {
    activeAccount
  } = EDBIData;
  const items = [{
    slug: 'accounts',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Accounts', 'integrate-dropbox-wp'),
    icon: 'dashicons-admin-users'
  }
  // {
  // 	slug: 'appearance',
  // 	label: __( 'Appearance', 'integrate-dropbox-wp' ),
  // 	icon: 'dashicons-admin-appearance'
  // },
  ];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__l"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__sidebar__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__sidebar__items"
  }, items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('edbi-page__sidebar__item', {
      'edbi-page__sidebar__item--active': activeItem === item.slug
    }),
    onClick: () => {
      setActiveItem(item.slug);

      // Add slug with # to URL.
      window.history.pushState('', '', '#' + item.slug);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `dashicons ${item.icon}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/settings/components/contents/Accounts.jsx":
/*!*******************************************************!*\
  !*** ./src/settings/components/contents/Accounts.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_alertHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/alertHelper */ "./src/utils/alertHelper.js");



const Accounts = props => {
  const {
    formData,
    setFormData
  } = props;
  const {
    accounts,
    activeAccount
  } = EDBIData;
  const handleAccountChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      accounts
    });
  };
  const removeAccount = account => {
    (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_2__.showAlert)({
      title: 'Remove Account',
      text: 'Are you sure you want to remove this account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      confirmButtonColor: '#d33',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        // delete accounts[account];
        // setFormData({
        //     ...formData,
        //     accounts
        // })

        wp.ajax.post('idbwp_remove_account', {
          account_id: account,
          nonce: EDBIData?.ajaxNonce
        }).then(response => {
          delete accounts[account];
          setFormData({
            ...formData,
            accounts
          });
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_2__.showAlert)({
            title: 'Account Removed',
            text: 'Account has been removed successfully',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok'
            // confirmButtonColor: '#007bff',
          });
        }).catch(error => {
          console.error(error);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_2__.showAlert)({
            title: 'Error',
            text: 'An error occurred while removing account',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok'
            // confirmButtonColor: '#007bff',
          });
        });
      }
    });
  };
  console.log(accounts);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-accounts"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-accounts__list"
  }, Object.keys(accounts).map((account, index) => {
    const accountData = accounts[account];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "edbi-accounts__item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "edbi-accounts__item__avatar"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: accountData.photo,
      alt: accountData.name
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-accounts__item__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, accountData.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, accountData.email)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-accounts__item__actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        removeAccount(account);
      }
    }, "Remove")));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "edbi-accounts__add",
    onClick: () => {
      window.open(EDBIData.authUrl, '_blank', 'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes');
    }
  }, "Add Account")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accounts);

/***/ }),

/***/ "./src/settings/components/contents/Appearance.jsx":
/*!*********************************************************!*\
  !*** ./src/settings/components/contents/Appearance.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const Appearance = props => {
  const {
    formData,
    setFormData
  } = props;
  const {
    accounts
  } = EDBIData;
  const handleAccountChange = e => {
    const {
      name,
      value
    } = e.target;

    // setFormData({
    //     ...formData,
    //     [name]: value
    // })

    setFormData({
      ...formData,
      appearance: {
        'setting1': 'value1'
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__content__accounts"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleAccountChange
  }, "Add Account")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Appearance);

/***/ }),

/***/ "./src/settings/store/settingsData.js":
/*!********************************************!*\
  !*** ./src/settings/store/settingsData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_STATE = {
  settings: {
    accounts: [],
    accountsLoaded: false
  }
};
const actions = {
  setSetting(item, value) {
    return {
      type: 'SET_DATA',
      item,
      value
    };
  }
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('edbi-settings', {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.item]: action.value
          }
        };
    }
    return state;
  },
  actions,
  selectors: {
    getSetting(state, item) {
      const {
        settings
      } = state;
      return settings[item];
    },
    getSettings(state) {
      return state.settings;
    }
  }
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/utils/alertHelper.js":
/*!**********************************!*\
  !*** ./src/utils/alertHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAlert: () => (/* binding */ showAlert)
/* harmony export */ });
const showAlert = data => {
  const defaultData = {
    showCloseButton: true
  };
  data = Object.assign(defaultData, data);
  return window.Swal.fire(data);
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/settings/scss/settings.scss":
/*!*****************************************!*\
  !*** ./src/settings/scss/settings.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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
/*!*******************************!*\
  !*** ./src/settings/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/settings/App.jsx");
/* harmony import */ var _store_settingsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/settingsData */ "./src/settings/store/settingsData.js");




(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('edbi-settings'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map