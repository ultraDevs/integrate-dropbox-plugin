/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/file-browser/components/DropDownPopover.js":
/*!********************************************************!*\
  !*** ./src/file-browser/components/DropDownPopover.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);




const DropdownPopover = ({
  btnData,
  btnContent,
  content
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    className: "relative"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
    className: btnData.className
  }, btnContent ? btnContent : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: btnData.icon
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-y-1",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {
    className: "ud-c-popover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-popover__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("ud-c-popover__content__wrap", btnData.contentClass)
  }, content)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownPopover);

/***/ }),

/***/ "./src/file-browser/components/Header.js":
/*!***********************************************!*\
  !*** ./src/file-browser/components/Header.js ***!
  \***********************************************/
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
/* harmony import */ var _DropDownPopover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDownPopover */ "./src/file-browser/components/DropDownPopover.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_alertHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/alertHelper */ "./src/utils/alertHelper.js");








const Header = () => {
  const {
    activeAccount,
    accounts
  } = EDBIData;
  const breadcrumbs = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('breadcrumbs'));
  const refresh = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('refresh'));
  const filterV = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('filter'));
  const currentPath = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('current_path'));
  const filter = filterV.by ? filterV.by : 'name';
  const sortDirection = filterV.direction ? filterV.direction : 'asc';
  console.log(filterV);
  const setFilter = filter => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('isLoading', true);
    // update FilterV's by property.
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('filter', {
      ...filterV,
      by: filter
    });
  };
  const setSortDirection = dir => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('isLoading', true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('filter', {
      ...filterV,
      direction: dir
    });
  };
  const [aAccount, setActiveAccount] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(activeAccount);
  const switchAccount = id => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/idb/v1/switch-account',
      method: 'POST',
      data: {
        id: id
      }
    }).then(response => {
      if ('success' === response.status) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('refresh', true);
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('isLoading', true);
      }
      // Reload the page.
      window.location.reload();
    });
  };
  const handleCreateFolder = () => {
    (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_6__.showAlert)({
      title: 'New Folder',
      html: `
					<p>Create New Folder</p>
					<div>
						<input id="swal-new-folder-input" class="swal2-input" placeholder="Create New Folder" />
					</div>
				`,
      confirmButtonText: 'Create'
    }).then(result => {
      if (result.isConfirmed) {
        wp.ajax.post('edbi_create_folder', {
          account_id: activeAccount['id'],
          nonce: EDBIData?.ajaxNonce,
          path: currentPath,
          name: document.getElementById('swal-new-folder-input').value
        }).then(response => {
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_6__.showAlert)({
            title: 'Success',
            text: response.message,
            icon: 'success'
          });

          // Dispatch an action to refresh the browser.
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('isLoading', true);
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('refresh', true);
        }).catch(error => {
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_6__.showAlert)({
            title: 'Error',
            text: error.message,
            icon: 'error'
          });
        });
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "flex edbi-file-browser__header__breadcrumb",
    "aria-label": "Breadcrumb"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "aria-hidden": "true",
    class: "w-4 h-4 mr-2",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  })), "Home")), breadcrumbs.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      "aria-current": "page",
      key: index,
      onClick: () => {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('current_path', item.path.replace(/\/$/, ''));
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "flex items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      class: "w-6 h-6 text-gray-400",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      "fill-rule": "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      "clip-rule": "evenodd"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, item.name)));
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__header__right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__header__right__refresh edbi-file-browser__header__right__btn",
    onClick: () => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('refresh', !refresh);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('isLoading', true);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: EDBIData.assets + 'images/refresh.svg'
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownPopover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative",
    btnData: {
      className: 'edbi-file-browser__header__right__filter edbi-file-browser__header__right__btn relative',
      icon: EDBIData.assets + 'images/filter.svg',
      contentClass: 'min-w-[200px]'
    },
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__filter__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__filter__content__title"
    }, "Filter by"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__filter__content__options"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('edbi-file-browser__header__right__filter__content__options__item', {
        'edbi-file-browser__header__right__filter__content__options__item--active': filter === 'name'
      }),
      onClick: () => setFilter('name')
    }, "Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('edbi-file-browser__header__right__filter__content__options__item', {
        'edbi-file-browser__header__right__filter__content__options__item--active': filter === 'size'
      }),
      onClick: () => setFilter('size')
    }, "Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('edbi-file-browser__header__right__filter__content__options__item', {
        'edbi-file-browser__header__right__filter__content__options__item--active': filter === 'modified'
      }),
      onClick: () => setFilter('modified')
    }, "Modified"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__filter__content__title"
    }, "Sort Direction"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__filter__content__options"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('edbi-file-browser__header__right__filter__content__options__item', {
        'edbi-file-browser__header__right__filter__content__options__item--active': sortDirection === 'asc'
      }),
      onClick: () => setSortDirection('asc')
    }, "ASC"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('edbi-file-browser__header__right__filter__content__options__item', {
        'edbi-file-browser__header__right__filter__content__options__item--active': sortDirection === 'desc'
      }),
      onClick: () => setSortDirection('desc')
    }, "DESC")))))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownPopover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative",
    btnData: {
      className: 'edbi-file-browser__header__right__more edbi-file-browser__header__right__btn relative',
      icon: EDBIData.assets + 'images/more.svg',
      contentClass: 'min-w-[200px]'
    },
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__more__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      onClick: () => handleCreateFolder()
    }, "New Folder"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      onClick: () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('dropbox-browser').setData('showUploader', true)
    }, "Upload"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Select All"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Download"))))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownPopover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative",
    btnData: {
      className: 'edbi-file-browser__header__right__user edbi-file-browser__header__right__btn relative',
      contentClass: 'min-w-[200px]'
    },
    btnContent: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, accounts ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__user__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: aAccount.photo,
      alt: aAccount.name
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__user__info__more"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__user__info__more__name"
    }, aAccount.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__user__info__more__email"
    }, aAccount.email))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        window.open(EDBIData.authUrl, '_blank', 'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes');
      },
      className: "ud-c-btn ud-c-btn--primary"
    }, "Add Account")),
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__user__content"
    }, accounts && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Switch Account"), Object.entries(accounts).map(account => {
      account = account[1];
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('edbi-file-browser__header__right__user__info', account.id === aAccount.id ? 'edbi-file-browser__header__right__user__info--active' : ''),
        onClick: () => {
          switchAccount(account.id);
          setActiveAccount(account);
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: account.photo,
        alt: account.name
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "edbi-file-browser__header__right__user__info__more"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "edbi-file-browser__header__right__user__info__more__name"
      }, account.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "edbi-file-browser__header__right__user__info__more__email"
      }, account.email))));
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__header__right__user__content__add"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        window.open(EDBIData.authUrl, '_blank', 'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes');
      },
      className: "ud-c-btn ud-c-btn--primary"
    }, "Add Account"))))
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/file-browser/helper/common.js":
/*!*******************************************!*\
  !*** ./src/file-browser/helper/common.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatBytes: () => (/* binding */ formatBytes),
/* harmony export */   generateDataAttributes: () => (/* binding */ generateDataAttributes),
/* harmony export */   getIcon: () => (/* binding */ getIcon)
/* harmony export */ });
const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
const getIcon = ext => {
  switch (ext) {
    case 'mp3':
      return 'dashicons-media-audio';
    case 'mp4':
      return 'dashicons-media-video';
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return 'dashicons-format-image';
    case 'pdf':
      return 'dashicons-media-document';
    case 'zip':
      return 'dashicons-media-archive';
    default:
      return 'dashicons-media-default';
  }
};
const generateDataAttributes = file => {
  // if (!file) return '';

  let attributes = {};
  const activeAccount = EDBIData?.activeAccount;
  const filePreview = `${EDBIData.ajaxUrl}?action=edbi_file_preview&account_id=${activeAccount['id']}&nonce=${EDBIData?.ajaxNonce}&file=${file.id}`;

  // If item.ext is mp4, webm, or ogg, we will add the video attribute
  if (['mp4', 'webm', 'ogg'].includes(file.ext)) {
    const videoData = {
      poster: file.preview,
      source: [{
        src: filePreview,
        type: `video/${file.ext}`
      }],
      "attributes": {
        "controls": true,
        "preload": "auto",
        "playsinline": "true"
      }
    };
    attributes['data-poster'] = file.thumbnail;
    attributes['data-video'] = JSON.stringify(videoData);
  }

  // Audio file
  if (['mp3', 'wav', 'ogg'].includes(file.ext)) {
    // attributes['data-audio'] = filePreview;
    attributes['data-poster'] = file.thumbnail;
    const audioData = {
      // poster: file.preview,
      source: [{
        src: filePreview,
        type: `audio/${file.ext}`
      }],
      "attributes": {
        "controls": true,
        "preload": "auto",
        "playsinline": "true"
      }
    };
    attributes['data-video'] = JSON.stringify(audioData);
    attributes['data-iframe'] = false;
  }

  // if (['mp3', 'wav', 'ogg'].includes(file.ext)) {
  // 	attributes['data-audio'] = filePreview;
  // }

  if (['jpg', 'jpeg', 'png', 'gif'].includes(file.ext)) {
    attributes['href'] = filePreview;
  }
  if (file.ext === 'svg') {
    attributes['data-src'] = file.thumbnail;
    attributes['data-iframe'] = true;
  }
  if (file.ext === 'pdf') {
    attributes['data-src'] = filePreview;
    attributes['data-iframe'] = true;
  }
  if (file.ext === 'zip') {
    attributes['data-src'] = filePreview;
    attributes['data-iframe'] = true;
  }
  attributes['data-sub-html'] = `
		<h4>${file.name}</h4>
		<p>${formatBytes(file.size)}</p>
	`;
  attributes['data-ext'] = file.ext;
  return attributes;
};

/***/ }),

/***/ "./src/shortcode-builder/App.jsx":
/*!***************************************!*\
  !*** ./src/shortcode-builder/App.jsx ***!
  \***************************************/
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
/* harmony import */ var _components_CreateShortCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CreateShortCode */ "./src/shortcode-builder/components/CreateShortCode.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ "./src/shortcode-builder/components/Header.jsx");
/* harmony import */ var _scss_shortcode_builder_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/shortcode-builder.scss */ "./src/shortcode-builder/scss/shortcode-builder.scss");
/* harmony import */ var _components_contents_ShortCodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contents/ShortCodes */ "./src/shortcode-builder/components/contents/ShortCodes.jsx");
/* harmony import */ var _components_EditShortCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/EditShortCode */ "./src/shortcode-builder/components/EditShortCode.jsx");









const App = () => {
  const hash = window.location.hash;
  const hashValue = hash.replace('#', '');
  const [activeItem, setActiveItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(hashValue || 'types');
  const [save, setSave] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [shortCodeTitle, setShortCodeTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ShortCode Title', 'easy-dropbox-integration'));
  const [shortCodeConfig, setShortCodeConfig] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    type: 'image-gallery',
    source: {
      all: false,
      privateFiles: false,
      items: []
    },
    settings: {
      container: {
        width: '100%',
        height: null
      },
      sorting: {
        sortBy: 'name',
        sortOrder: 'asc'
      },
      imgLayout: 'grid'
    }
  });
  const [currentTab, setCurrentTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('shortcodes');
  const {
    activeAccount,
    ajaxNonce
  } = EDBIData;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.location.search.includes('edit')) {
      setCurrentTab('edit');
    }
    if (window.location.search.includes('create')) {
      setCurrentTab('create');
    }
  }, [currentTab]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: currentTab,
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    save: save,
    setSave: setSave,
    shortCodeTitle: shortCodeTitle,
    setShortCodeTitle: setShortCodeTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'shortcodes' === currentTab ? 'edbi-page__con' : 'edbi-page__body'
  }, currentTab === 'shortcodes' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_contents_ShortCodes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentTab: currentTab,
    setCurrentTab: setCurrentTab,
    setShortCodeConfig: setShortCodeConfig,
    setShortCodeTitle: setShortCodeTitle
  }), currentTab === 'create' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CreateShortCode__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeItem: activeItem,
    setActiveItem: setActiveItem,
    save: save,
    setSave: setSave,
    shortCodeConfig: shortCodeConfig,
    setShortCodeConfig: setShortCodeConfig,
    shortCodeTitle: shortCodeTitle,
    setShortCodeTitle: setShortCodeTitle,
    actionType: "create"
  }), currentTab === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EditShortCode__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeItem: activeItem,
    setActiveItem: setActiveItem,
    save: save,
    setSave: setSave,
    shortCodeConfig: shortCodeConfig,
    setShortCodeConfig: setShortCodeConfig,
    shortCodeTitle: shortCodeTitle,
    setShortCodeTitle: setShortCodeTitle,
    actionType: "edit"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/shortcode-builder/components/CreateShortCode.jsx":
/*!**************************************************************!*\
  !*** ./src/shortcode-builder/components/CreateShortCode.jsx ***!
  \**************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ShortCodeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShortCodeConfig */ "./src/shortcode-builder/components/ShortCodeConfig.jsx");





const CreateShortCode = props => {
  const {
    formData,
    setFormData,
    activeItem,
    setActiveItem,
    save,
    setSave,
    shortCodeConfig,
    setShortCodeConfig,
    shortCodeTitle,
    setShortCodeTitle
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShortCodeConfig__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateShortCode);

/***/ }),

/***/ "./src/shortcode-builder/components/EditShortCode.jsx":
/*!************************************************************!*\
  !*** ./src/shortcode-builder/components/EditShortCode.jsx ***!
  \************************************************************/
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
/* harmony import */ var _ShortCodeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShortCodeConfig */ "./src/shortcode-builder/components/ShortCodeConfig.jsx");



const EditShortCode = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShortCodeConfig__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditShortCode);

/***/ }),

/***/ "./src/shortcode-builder/components/Header.jsx":
/*!*****************************************************!*\
  !*** ./src/shortcode-builder/components/Header.jsx ***!
  \*****************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");




const Header = props => {
  const {
    activeAccount,
    accounts,
    version
  } = EDBIData;
  const {
    currentTab,
    setCurrentTab,
    title,
    type,
    save,
    setSave,
    shortCodeTitle,
    setShortCodeTitle
  } = props;
  const saveSettings = () => {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center edbi-page__header__left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-admin-generic"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ShortCode Builder', 'easy-dropbox-integration'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "v", version))), ('create' === type || 'edit' === type) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ml-5 bg-white edbi-shortcodes-create"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter ShortCode Title', 'easy-dropbox-integration'),
    value: shortCodeTitle || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ShortCode Title', 'easy-dropbox-integration'),
    onChange: e => setShortCodeTitle(e.target.value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__header__right"
  }, 'create' === type || 'edit' === type ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "px-5 py-3 text-sm text-white rounded-md bg-secondary",
    onClick: () => {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.setActiveTabWithParam)('shortcodes', setCurrentTab);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "mr-2 dashicons dashicons-arrow-left-alt"
  }), "Back"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "px-5 py-3 text-sm text-white rounded-md bg-secondary",
    onClick: () => setSave(!save)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "mr-2 dashicons dashicons-saved"
  }), "Save")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "px-5 py-3 text-sm text-white rounded-md bg-secondary",
    onClick: () => (0,_utils__WEBPACK_IMPORTED_MODULE_3__.setActiveTabWithParam)('create', setCurrentTab)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "mr-2 dashicons dashicons-plus-alt"
  }), "Add New ShortCode")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/shortcode-builder/components/ShortCodeConfig.jsx":
/*!**************************************************************!*\
  !*** ./src/shortcode-builder/components/ShortCodeConfig.jsx ***!
  \**************************************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/shortcode-builder/components/Sidebar.jsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _file_browser_helper_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../file-browser/helper/common */ "./src/file-browser/helper/common.js");
/* harmony import */ var _file_browser_components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../file-browser/components/Header */ "./src/file-browser/components/Header.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_alertHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/alertHelper */ "./src/utils/alertHelper.js");











const ShortCodeConfig = props => {
  const {
    activeItem,
    setActiveItem,
    save,
    setSave,
    shortCodeConfig,
    setShortCodeConfig,
    shortCodeTitle,
    setShortCodeTitle,
    actionType
  } = props;
  const [type, setType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('image-gallery');
  const [entries, setEntries] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const filter = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select('dropbox-browser').getData('filter'));
  const refresh = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select('dropbox-browser').getData('refresh'));
  const isLoading = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select('dropbox-browser').getData('isLoading'));
  const currentPath = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select('dropbox-browser').getData('current_path'));
  const previousPath = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select('dropbox-browser').getData('previous_path'));
  const showUploader = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => select('dropbox-browser').getData('showUploader'));
  const [selectedItems, setSelectedItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(shortCodeConfig.source.items || []);

  // get edit params
  const params = new URLSearchParams(window.location.search);
  const id = params.get('edit');
  const {
    activeAccount,
    ajaxNonce
  } = EDBIData;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log('shortCodeTitle', shortCodeTitle);
    if (shortCodeTitle === 'ShortCode Title') {
      // get shortcode data from server.
      wp.ajax.post('edbi_get_shortcode', {
        id,
        nonce: ajaxNonce
      }).then(response => {
        if (response) {
          setShortCodeTitle(response.title);
          const parsedConfig = JSON.parse(response.config);
          setShortCodeConfig(parsedConfig);
          setSelectedItems(parsedConfig.source.items || []);
        }
      });
    }
  }, [shortCodeTitle, shortCodeConfig]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectedItems.length !== 0) {
      setShortCodeConfig({
        ...shortCodeConfig,
        source: {
          ...shortCodeConfig.source,
          items: selectedItems
        }
      });
    }
  }, [selectedItems]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (activeAccount.length !== 0) {
      // dispatch('dropbox-browser').setData('isLoading', true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: '/idb/v1/get-files',
        method: 'POST',
        data: {
          path: currentPath,
          accountId: activeAccount['id'],
          filter: filter
        }
      }).then(response => {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('dropbox-browser').setData('breadcrumbs', response.data.breadcrumbs);
        setEntries(response.data.files);
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('dropbox-browser').setData('previous_path', response.data.previous_path);
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('dropbox-browser').setData('isLoading', false);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [currentPath, refresh, filter]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (save) {
      const jsonString = JSON.stringify(shortCodeConfig);
      const base64String = btoa(jsonString);
      if ('edit' === actionType) {
        wp.ajax.post('edbi_update_shortcode', {
          id,
          title: shortCodeTitle,
          config: base64String,
          nonce: ajaxNonce
        }).then(response => {
          console.log(response);
          setSave(!save);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_10__.showAlert)({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Shortcode Updated', 'easy-dropbox-integration'),
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Shortcode has been updated successfully', 'easy-dropbox-integration'),
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok'
            // confirmButtonColor: '#007bff',
          });
        }).catch(error => {
          console.error(error);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_10__.showAlert)({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Error', 'easy-dropbox-integration'),
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('An error occurred while updating the shortcode', 'easy-dropbox-integration'),
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok'
            // confirmButtonColor: '#007bff',
          });
        });
      } else {
        wp.ajax.post('edbi_create_shortcode', {
          title: shortCodeTitle,
          config: base64String,
          nonce: ajaxNonce
        }).then(response => {
          console.log(response);
          setSave(!save);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_10__.showAlert)({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Shortcode Created', 'easy-dropbox-integration'),
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Shortcode has been created successfully', 'easy-dropbox-integration'),
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok'
            // confirmButtonColor: '#007bff',
          });
        }).catch(error => {
          console.error(error);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_10__.showAlert)({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Error', 'easy-dropbox-integration'),
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('An error occurred while creating the shortcode', 'easy-dropbox-integration'),
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok'
            // confirmButtonColor: '#007bff',
          });
        });
      }
    }
  }, [save]);
  const setPath = path => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('dropbox-browser').setData('isLoading', true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('dropbox-browser').setData('current_path', path);
    // if ( '/' === path ) {
    // 	dispatch('dropbox-browser').setData('previous_path', '/');
    // } else {
    // 	dispatch('dropbox-browser').setData('current_path', path);
    // }
  };
  const updateShortCodeConfig = (key, value) => {
    setShortCodeConfig({
      ...shortCodeConfig,
      [key]: value
    });
  };
  const types = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Image Gallery', 'easy-dropbox-integration'),
    value: 'image-gallery',
    desc: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Display images in a gallery', 'easy-dropbox-integration'),
    icon: 'format-gallery'
  }
  // {
  //     label: __( 'File Browser', 'easy-dropbox-integration' ),
  //     value: 'file-browser',
  //     desc: __( 'Let users browse files', 'easy-dropbox-integration' ),
  //     icon: 'open-folder'
  // }
  ];
  let folders = [];
  let files = [];
  if (entries.length) {
    folders = entries.filter(item => {
      return item.is_dir ? item : '';
    });
    files = entries.filter(item => {
      if ('image-gallery' === type) {
        return item.is_file && item.ext.match(/(jpg|jpeg|png|gif)$/i) ? item : '';
      }
      return item.is_file ? item : '';
    });
  }
  console.log('title', shortCodeTitle);
  console.log('config', shortCodeConfig);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeItem: activeItem,
    setActiveItem: setActiveItem
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-page__content"
  }, activeItem === 'types' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap"
  }, types.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('edbi-info-box edbi-info-box--types', item.value === type ? 'edbi-info-box--active' : ''),
      onClick: () => {
        setType(item.value);
        updateShortCodeConfig('type', item.value);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-info-box__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `dashicons dashicons-${item.icon}`
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-info-box__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, item.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.desc)));
  })), activeItem === 'source' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__browser"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_file_browser_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null), isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__loading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__loading__spinner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__loading__spinner--bounce1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__loading__spinner--bounce2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__loading__spinner--bounce3"
  }))) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__file-list"
  }, previousPath && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__file-list__item edbi-file-browser__file-list__prev edbi-file-browser__file-list__item--folder",
    onClick: () => {
      setPath(previousPath);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__file-list__item__info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "dashicons dashicons-arrow-left-alt2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Previous Folder"))), folders.length > 0 && folders.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('edbi-file-browser__file-list__item', 'edbi-file-browser__file-list__item--folder'),
      key: index,
      onClick: e => {
        if (item.is_dir) {
          setPath(item.path);
        }
      }
      // onContextMenu={(e) => {
      //     showContexify(e, FOLDER_MENU, {
      //         type: 'folder',
      //         path: item.path,
      //         item,
      //     });
      // }}
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__file-list__item__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "dashicons dashicons-open-folder"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.name)));
  })), files.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-file-browser__file-list"
  }, files.map((item, index) => {
    const exists = selectedItems.filter(selectedItem => {
      return selectedItem.id === item.id;
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('edbi-file-browser__file-list__item', 'edbi-file-browser__file-list__item--file', 'gallery-item',
      // selectedItems.filter( selectedItem ) => {
      //     return selectedItem.id === item.id
      // } 
      exists.length ? 'edbi-file-browser__file-list__item--exist' : ''),
      key: index,
      onClick: () => {
        if (exists.length) {
          setSelectedItems(selectedItems.filter(selectedItem => {
            return selectedItem.id !== item.id;
          }));
        } else {
          setSelectedItems([...selectedItems, item]);
        }
      }
    }, item.can_preview && item.thumbnail ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__file-list__item__thumb"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.thumbnail
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__file-list__item__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('dashicons', (0,_file_browser_helper_common__WEBPACK_IMPORTED_MODULE_7__.getIcon)(item.ext))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-file-browser__file-list__item__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: classnames__WEBPACK_IMPORTED_MODULE_5___default()('dashicons', (0,_file_browser_helper_common__WEBPACK_IMPORTED_MODULE_7__.getIcon)(item.ext))
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.name)));
  }))) : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__selected-items"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between px-3 py-2 text-white edbi-shortcode-builder__selected-items__header bg-secondary"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-sm text-white"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, selectedItems.length, " ", ' '), "Selected ", selectedItems.length > 1 ? 'Items' : 'Item'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "px-3 py-1 text-white rounded-md bg-primary",
    onClick: () => {
      setSelectedItems([]);
    }
  }, "Clear")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__selected-items__list"
  }, selectedItems.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "edbi-shortcode-builder__selected-items__list__item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-shortcode-builder__selected-items__list__item__thumb"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.thumbnail
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-shortcode-builder__selected-items__list__item__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edbi-shortcode-builder__selected-items__list__item__actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "px-2 py-1 text-white rounded-md bg-primary",
      onClick: () => {
        setSelectedItems(selectedItems.filter(selectedItem => {
          return selectedItem.id !== item.id;
        }));
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "dashicons dashicons-trash"
    }))));
  })))), activeItem === 'advanced' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Module Container"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item__fields"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item__field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Width', 'easy-dropbox-integration'),
    value: shortCodeConfig.settings.container.width,
    onChange: value => {
      updateShortCodeConfig('settings', {
        ...shortCodeConfig.settings,
        container: {
          ...shortCodeConfig.settings.container,
          width: value
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item__field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Height', 'easy-dropbox-integration'),
    value: shortCodeConfig.settings.container.height,
    onChange: value => {
      updateShortCodeConfig('settings', {
        ...shortCodeConfig.settings,
        container: {
          ...shortCodeConfig.settings.container,
          height: value
        }
      });
    }
  })))), 'image-gallery' === type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Image Layout"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item__fields"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcode-builder__advanced__item__field"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: shortCodeConfig.settings.imgLayout === 'justified',
    onClick: () => {
      updateShortCodeConfig('settings', {
        ...shortCodeConfig.settings,
        imgLayout: 'justified'
      });
    },
    disabled: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Justified', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: shortCodeConfig.settings.imgLayout === 'masonry',
    onClick: () => {
      updateShortCodeConfig('settings', {
        ...shortCodeConfig.settings,
        imgLayout: 'masonry'
      });
    },
    disabled: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Masonry', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: shortCodeConfig.settings.imgLayout === 'grid',
    onClick: () => {
      updateShortCodeConfig('settings', {
        ...shortCodeConfig.settings,
        imgLayout: 'grid'
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Grid', 'easy-dropbox-integration'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Image Gallery Layout', 'easy-dropbox-integration')))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortCodeConfig);

/***/ }),

/***/ "./src/shortcode-builder/components/Sidebar.jsx":
/*!******************************************************!*\
  !*** ./src/shortcode-builder/components/Sidebar.jsx ***!
  \******************************************************/
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
    slug: 'types',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Types', 'easy-dropbox-integration'),
    icon: 'dashicons-admin-home'
  }, {
    slug: 'source',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Source', 'easy-dropbox-integration'),
    icon: 'dashicons-database'
  },
  // {
  // 	slug: 'filters',
  // 	label: __( 'Filters', 'easy-dropbox-integration' ),
  // 	icon: 'dashicons-admin-site'
  // },
  {
    slug: 'advanced',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Advanced', 'easy-dropbox-integration'),
    icon: 'dashicons-admin-settings'
  }
  // {
  // 	slug: 'permission',
  // 	label: __( 'Permission', 'easy-dropbox-integration' ),
  // 	icon: 'dashicons-admin-generic'
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

/***/ "./src/shortcode-builder/components/contents/ShortCodes.jsx":
/*!******************************************************************!*\
  !*** ./src/shortcode-builder/components/contents/ShortCodes.jsx ***!
  \******************************************************************/
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
/* harmony import */ var _utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/alertHelper */ "./src/utils/alertHelper.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");





const ShortCodes = props => {
  const {
    currentTab,
    setCurrentTab,
    setShortCodeConfig,
    setShortCodeTitle
  } = props;
  const [shortCodes, setShortCodes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    accounts,
    activeAccount
  } = EDBIData;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    wp.ajax.post('edbi_get_shortcodes', {
      account_id: activeAccount?.id,
      nonce: EDBIData?.ajaxNonce
    }).then(response => {
      setShortCodes(response);
    }).catch(error => {
      console.error(error);
      (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error', 'easy-dropbox-integration'),
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while fetching ShortCodes', 'easy-dropbox-integration'),
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'Ok'
      });
    });
  }, []);
  console.log('ShortCodes', shortCodes);
  const removeShortCode = shortcode => {
    (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
      title: 'Remove Shortcode',
      text: 'Are you sure you want to remove this Shortcode?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      confirmButtonColor: '#d33',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        wp.ajax.post('edbi_delete_shortcode', {
          nonce: EDBIData?.ajaxNonce,
          id: shortcode
        }).then(response => {
          // remove the shortcode from the list and update the state
          const newShortCodes = {
            ...shortCodes
          };
          delete newShortCodes[shortcode];
          setShortCodes(newShortCodes);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Success', 'easy-dropbox-integration'),
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shortcode removed successfully', 'easy-dropbox-integration'),
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok'
          });
        }).catch(error => {
          console.error(error);
          (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error', 'easy-dropbox-integration'),
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while removing Shortcode', 'easy-dropbox-integration'),
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok'
          });
        });
      }
    });
  };
  const duplicateShortCode = shortcode => {
    wp.ajax.post('edbi_duplicate_shortcode', {
      nonce: EDBIData?.ajaxNonce,
      id: shortcode
    }).then(response => {
      console.log('response', response);
      setShortCodes({
        ...shortCodes,
        [response.data.id]: response.data
      });
      (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Success', 'easy-dropbox-integration'),
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shortcode duplicated successfully', 'easy-dropbox-integration'),
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Ok'
      });
    }).catch(error => {
      console.error(error);
      (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Error', 'easy-dropbox-integration'),
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while duplicating Shortcode', 'easy-dropbox-integration'),
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'Ok'
      });
    });
  };
  console.log(accounts);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-5 py-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-scroll edbi-shortcodes"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between edbi-shortcodes__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "flex items-center gap-4 mb-3 text-base font-bold text-black"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ShortCodes', 'easy-dropbox-integration'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-sm text-gray-600"
  }, "(", Object.keys(shortCodes).length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Items', 'easy-dropbox-integration'), " )"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "edbi-shortcodes__lists"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ID', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ShortCode', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Created', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Status', 'easy-dropbox-integration')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'easy-dropbox-integration')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Object.keys(shortCodes).length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edbi-shortcodes__lists__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No ShortCodes found', 'easy-dropbox-integration'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Object.keys(shortCodes).map(key => {
    const item = shortCodes[key];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "edbi-shortcodes__list",
      key: key
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item.id)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item.title)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item?.type?.replace('-', ' ').toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase()))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-center gap-3 p-2 bg-gray-200 edbi-shortcodes__list__shortcode",
      title: "Click to copy shortcode",
      onClick: () => {
        navigator.clipboard.writeText(`[easy_dropbox_integration id="${item.id}"]`);
        (0,_utils_alertHelper__WEBPACK_IMPORTED_MODULE_3__.showAlert)({
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shortcode Copied', 'easy-dropbox-integration'),
          icon: 'success',
          position: 'top-right',
          toast: true,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "dashicons dashicons-admin-page"
    }), "[easy_dropbox_integration id=\"", item.id, "\"]")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item.created_at)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item.status)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-center w-full gap-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "",
      title: 'Edit',
      onClick: () => {
        setShortCodeTitle(item.title);
        setShortCodeConfig(JSON.parse(item.config));
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.setActiveTabWithParam)('edit', setCurrentTab, item.id);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "dashicons dashicons-edit"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "",
      onClick: () => removeShortCode(item.id)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "dashicons dashicons-trash"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duplicate', 'easy-dropbox-integration'),
      onClick: () => duplicateShortCode(item.id)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "dashicons dashicons-admin-page"
    })))));
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortCodes);

/***/ }),

/***/ "./src/shortcode-builder/store/settingsData.js":
/*!*****************************************************!*\
  !*** ./src/shortcode-builder/store/settingsData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_STATE = {
  settings: {
    shortcodeData: []
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

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setActiveTabWithParam: () => (/* binding */ setActiveTabWithParam)
/* harmony export */ });
const setActiveTabWithParam = (tab, setTab, id = null) => {
  // Set the active tab
  setTab(tab);

  // Create a new URL object based on the current window location
  const url = new URL(window.location.href);

  // Remove existing 'create' and 'edit' parameters
  url.searchParams.delete('create');
  url.searchParams.delete('edit');

  // Add the appropriate parameter based on the active tab
  if (tab === 'edit' && id !== null) {
    url.searchParams.set('edit', id);
  } else if (tab === 'create') {
    url.searchParams.set('create', '');
  }

  // Update the browser's history state with the new URL
  window.history.pushState({}, '', url.toString());
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

/***/ "./src/shortcode-builder/scss/shortcode-builder.scss":
/*!***********************************************************!*\
  !*** ./src/shortcode-builder/scss/shortcode-builder.scss ***!
  \***********************************************************/
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

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

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keys: () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/popover/popover.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/popover/popover.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ Rt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
var Me=(p=>(p[p.Open=0]="Open",p[p.Closed=1]="Closed",p))(Me||{}),Le=(t=>(t[t.TogglePopover=0]="TogglePopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(Le||{});let Fe={[0]:n=>({...n,popoverState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(n.popoverState,{[0]:1,[1]:0})}),[1](n){return n.popoverState===1?n:{...n,popoverState:1}},[2](n,r){return n.button===r.button?n:{...n,button:r.button}},[3](n,r){return n.buttonId===r.buttonId?n:{...n,buttonId:r.buttonId}},[4](n,r){return n.panel===r.panel?n:{...n,panel:r.panel}},[5](n,r){return n.panelId===r.panelId?n:{...n,panelId:r.panelId}}},le=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);le.displayName="PopoverContext";function Z(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(le);if(r===null){let p=new Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,Z),p}return r}let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ae.displayName="PopoverAPIContext";function ue(n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae);if(r===null){let p=new Error(`<${n} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,ue),p}return r}let se=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);se.displayName="PopoverGroupContext";function Te(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(se)}let pe=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);pe.displayName="PopoverPanelContext";function he(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(pe)}function Be(n,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r.type,Fe,n,r)}let xe="div",De=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){var x;let O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(p,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.optionalRef)(e=>{O.current=e})),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Be,{popoverState:1,buttons:C,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),afterPanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),[{popoverState:o,button:a,buttonId:v,panel:c,panelId:M,beforePanelSentinel:T,afterPanelSentinel:d},i]=t,u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__.useOwnerDocument)((x=O.current)!=null?x:a),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(!a||!c)return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(a))^Number(K==null?void 0:K.contains(c)))return!0;let e=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.getFocusableElements)(),l=e.indexOf(a),A=(l+e.length-1)%e.length,b=(l+1)%e.length,G=e[A],me=e[b];return!c.contains(G)&&!c.contains(me)},[a,c]),g=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)(v),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.useLatestValue)(M),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:g,panelId:y,close:()=>i({type:1})}),[g,y,i]),I=Te(),F=I==null?void 0:I.registerPopover,V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{var e;return(e=I==null?void 0:I.isFocusWithinPopoverGroup())!=null?e:(u==null?void 0:u.activeElement)&&((a==null?void 0:a.contains(u.activeElement))||(c==null?void 0:c.contains(u.activeElement)))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>F==null?void 0:F(L),[F,L]),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__.useEventListener)(u==null?void 0:u.defaultView,"focus",e=>{var l,A,b,G;o===0&&(V()||!a||!c||e.target!==window&&((A=(l=T.current)==null?void 0:l.contains)!=null&&A.call(l,e.target)||(G=(b=d.current)==null?void 0:b.contains)!=null&&G.call(b,e.target)||i({type:1})))},!0),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_9__.useOutsideClick)([a,c],(e,l)=>{i({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.isFocusableElement)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusableMode.Loose)||(e.preventDefault(),a==null||a.focus())},o===0);let h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{i({type:1});let l=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:a:a)();l==null||l.focus()}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:h,isPortalled:f}),[h,f]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0,close:h}),[o,h]),E=r,P={ref:R};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(le.Provider,{value:t},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ae.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(o,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:P,theirProps:E,slot:m,defaultTag:xe,name:"Popover"}))))}),He="button",ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let O=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.useId)(),{id:R=`headlessui-popover-button-${O}`,...C}=r,[t,o]=Z("Popover.Button"),{isPortalled:a}=ue("Popover.Button"),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=`headlessui-focus-sentinel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.useId)()}`,M=Te(),T=M==null?void 0:M.closeOthers,i=he()!==null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!i)return o({type:3,buttonId:R}),()=>{o({type:3,buttonId:null})}},[i,R,o]);let[u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>Symbol()),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(v,p,i?null:e=>{if(e)t.buttons.current.push(u);else{let l=t.buttons.current.indexOf(u);l!==-1&&t.buttons.current.splice(l,1)}t.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&o({type:2,button:e})}),g=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(v,p),y=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__.useOwnerDocument)(v),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{var l,A,b;if(i){if(t.popoverState===1)return;switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter:e.preventDefault(),(A=(l=e.target).click)==null||A.call(l),o({type:1}),(b=t.button)==null||b.focus();break}}else switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter:e.preventDefault(),e.stopPropagation(),t.popoverState===1&&(T==null||T(t.buttonId)),o({type:0});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Escape:if(t.popoverState!==0)return T==null?void 0:T(t.buttonId);if(!v.current||(y==null?void 0:y.activeElement)&&!v.current.contains(y.activeElement))return;e.preventDefault(),e.stopPropagation(),o({type:1});break}}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{i||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space&&e.preventDefault()}),F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{var l,A;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_13__.isDisabledReactIssue7711)(e.currentTarget)||r.disabled||(i?(o({type:1}),(l=t.button)==null||l.focus()):(e.preventDefault(),e.stopPropagation(),t.popoverState===1&&(T==null||T(t.buttonId)),o({type:0}),(A=t.button)==null||A.focus()))}),V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{e.preventDefault(),e.stopPropagation()}),h=t.popoverState===0,s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:h}),[h]),m=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__.useResolveButtonType)(r,v),E=i?{ref:g,type:m,onKeyDown:L,onClick:F}:{ref:f,id:t.buttonId,type:m,"aria-expanded":r.disabled?void 0:t.popoverState===0,"aria-controls":t.panel?t.panelId:void 0,onKeyDown:L,onKeyUp:I,onClick:F,onMouseDown:V},P=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.useTabDirection)(),x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{let e=t.panel;if(!e)return;function l(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(P.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last)})===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.getFocusableElements)().filter(b=>b.dataset.headlessuiFocusGuard!=="true"),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(P.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Forwards]:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Backwards]:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous}),{relativeTo:t.button})}l()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:E,theirProps:C,slot:s,defaultTag:He,name:"Popover.Button"}),h&&!i&&a&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Hidden,{id:c,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x}))}),Ge="div",we=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,_e=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let O=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.useId)(),{id:R=`headlessui-popover-overlay-${O}`,...C}=r,[{popoverState:t},o]=Z("Popover.Overlay"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(p),v=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),c=(()=>v!==null?(v&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:t===0)(),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(i=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_13__.isDisabledReactIssue7711)(i.currentTarget))return i.preventDefault();o({type:1})}),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t===0}),[t]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:R,"aria-hidden":!0,onClick:M},theirProps:C,slot:T,defaultTag:Ge,features:we,visible:c,name:"Popover.Overlay"})}),Ne="div",Ke=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,Ue=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let O=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.useId)(),{id:R=`headlessui-popover-panel-${O}`,focus:C=!1,...t}=r,[o,a]=Z("Popover.Panel"),{close:v,isPortalled:c}=ue("Popover.Panel"),M=`headlessui-focus-sentinel-before-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.useId)()}`,T=`headlessui-focus-sentinel-after-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.useId)()}`,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(d,p,s=>{a({type:4,panel:s})}),u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__.useOwnerDocument)(d);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>(a({type:5,panelId:R}),()=>{a({type:5,panelId:null})}),[R,a]);let f=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),g=(()=>f!==null?(f&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:o.popoverState===0)(),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(s=>{var m;switch(s.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Escape:if(o.popoverState!==0||!d.current||(u==null?void 0:u.activeElement)&&!d.current.contains(u.activeElement))return;s.preventDefault(),s.stopPropagation(),a({type:1}),(m=o.button)==null||m.focus();break}});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var s;r.static||o.popoverState===1&&((s=r.unmount)!=null?s:!0)&&a({type:4,panel:null})},[o.popoverState,r.unmount,r.static,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!C||o.popoverState!==0||!d.current)return;let s=u==null?void 0:u.activeElement;d.current.contains(s)||(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(d.current,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First)},[C,d,o.popoverState]);let L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.popoverState===0,close:v}),[o,v]),I={ref:i,id:R,onKeyDown:y,onBlur:C&&o.popoverState===0?s=>{var E,P,x,e,l;let m=s.relatedTarget;!m||!d.current||(E=d.current)!=null&&E.contains(m)||(a({type:1}),(((x=(P=o.beforePanelSentinel.current)==null?void 0:P.contains)==null?void 0:x.call(P,m))||((l=(e=o.afterPanelSentinel.current)==null?void 0:e.contains)==null?void 0:l.call(e,m)))&&m.focus({preventScroll:!0}))}:void 0,tabIndex:-1},F=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.useTabDirection)(),V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{let s=d.current;if(!s)return;function m(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(F.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Forwards]:()=>{var P;(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error&&((P=o.afterPanelSentinel.current)==null||P.focus())},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Backwards]:()=>{var E;(E=o.button)==null||E.focus({preventScroll:!0})}})}m()}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{let s=d.current;if(!s)return;function m(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(F.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Forwards]:()=>{var A;if(!o.button)return;let E=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.getFocusableElements)(),P=E.indexOf(o.button),x=E.slice(0,P+1),l=[...E.slice(P+1),...x];for(let b of l.slice())if(b.dataset.headlessuiFocusGuard==="true"||((A=o.panel)==null?void 0:A.contains(b))){let G=l.indexOf(b);G!==-1&&l.splice(G,1)}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First,{sorted:!1})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.Direction.Backwards]:()=>{var P;(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(s,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error&&((P=o.button)==null||P.focus())}})}m()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(pe.Provider,{value:R},g&&c&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Hidden,{id:M,ref:o.beforePanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:V}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:I,theirProps:t,slot:L,defaultTag:Ne,features:Ke,visible:g,name:"Popover.Panel"}),g&&c&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Hidden,{id:T,ref:o.afterPanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.Features.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h}))}),We="div",je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(r,p){let O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(O,p),[C,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(u=>{t(f=>{let g=f.indexOf(u);if(g!==-1){let y=f.slice();return y.splice(g,1),y}return f})}),a=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(u=>(t(f=>[...f,u]),()=>o(u))),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>{var g;let u=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_18__.getOwnerDocument)(O);if(!u)return!1;let f=u.activeElement;return(g=O.current)!=null&&g.contains(f)?!0:C.some(y=>{var L,I;return((L=u.getElementById(y.buttonId.current))==null?void 0:L.contains(f))||((I=u.getElementById(y.panelId.current))==null?void 0:I.contains(f))})}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(u=>{for(let f of C)f.buttonId.current!==u&&f.close()}),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:a,unregisterPopover:o,isFocusWithinPopoverGroup:v,closeOthers:c}),[a,o,v,c]),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),d=r,i={ref:R};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(se.Provider,{value:M},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:i,theirProps:d,slot:T,defaultTag:We,name:"Popover.Group"}))}),Rt=Object.assign(De,{Button:ke,Overlay:_e,Panel:Ue,Group:je});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transition: () => (/* binding */ Ye)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _utils_class_names_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
/* harmony import */ var _hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-flags.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.js");
function H(i=""){return i.split(" ").filter(e=>e.trim().length>1)}let M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="TransitionContext";var Ee=(s=>(s.Visible="visible",s.Hidden="hidden",s))(Ee||{});function Se(){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}function xe(){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(I);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}let I=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);I.displayName="NestingContext";function _(i){return"children"in i?_(i.children):i.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function re(i,e){let s=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(i),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),m=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__.useIsMounted)(),y=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__.useDisposables)(),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((l,r=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);t!==-1&&((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(r,{[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount](){n.current.splice(t,1)},[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden](){n.current[t].state="hidden"}}),y.microTask(()=>{var o;!_(n)&&m.current&&((o=s.current)==null||o.call(s))}))}),S=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(l=>{let r=n.current.find(({el:t})=>t===l);return r?r.state!=="visible"&&(r.state="visible"):n.current.push({el:l,state:"visible"}),()=>E(l,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount)}),x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Promise.resolve()),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({enter:[],leave:[],idle:[]}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((l,r,t)=>{x.current.splice(0),e&&(e.chains.current[r]=e.chains.current[r].filter(([o])=>o!==l)),e==null||e.chains.current[r].push([l,new Promise(o=>{x.current.push(o)})]),e==null||e.chains.current[r].push([l,new Promise(o=>{Promise.all(p.current[r].map(([f,a])=>a)).then(()=>o())})]),r==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>t(r)):t(r)}),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((l,r,t)=>{Promise.all(p.current[r].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=x.current.shift())==null||o()}).then(()=>t(r))});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:n,register:S,unregister:E,onStart:d,onStop:v,wait:u,chains:p}),[S,E,n,d,v,p,u])}function Pe(){}let He=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ie(i){var s;let e={};for(let n of He)e[n]=(s=i[n])!=null?s:Pe;return e}function Ne(i){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(ie(i));return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e.current=ie(i)},[i]),e}let Re="div",oe=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.Features.RenderStrategy,se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:y,afterLeave:E,enter:S,enterFrom:x,enterTo:u,entered:p,leave:d,leaveFrom:v,leaveTo:l,...r}=e,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(t,s),f=r.unmount?_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount:_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden,{show:a,appear:P,initial:le}=Se(),[h,j]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a?"visible":"hidden"),Q=xe(),{register:F,unregister:L}=Q,U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>F(t),[F,t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(f===_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden&&!!t.current){if(a&&h!=="visible"){j("visible");return}return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(h,{["hidden"]:()=>L(t),["visible"]:()=>F(t)})}},[h,t,F,L,a,f]);let k=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)({enter:H(S),enterFrom:H(x),enterTo:H(u),entered:H(p),leave:H(d),leaveFrom:H(v),leaveTo:H(l)}),O=Ne({beforeEnter:n,afterEnter:m,beforeLeave:y,afterLeave:E}),G=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_8__.useServerHandoffComplete)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(G&&h==="visible"&&t.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,h,G]);let B=le&&!P,ae=(()=>!G||B||U.current===a?"idle":a?"enter":"leave")(),D=(0,_hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_9__.useFlags)(0),ue=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(g=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(g,{enter:()=>{D.addFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Opening),O.current.beforeEnter()},leave:()=>{D.addFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closing),O.current.beforeLeave()},idle:()=>{}})),de=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(g=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(g,{enter:()=>{D.removeFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Opening),O.current.afterEnter()},leave:()=>{D.removeFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closing),O.current.afterLeave()},idle:()=>{}})),w=re(()=>{j("hidden"),L(t)},Q);(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_11__.useTransition)({container:t,classes:k,direction:ae,onStart:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(g=>{w.onStart(t,g,ue)}),onStop:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(g=>{w.onStop(t,g,de),g==="leave"&&!_(w)&&(j("hidden"),L(t))})}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!B||(f===_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden?U.current=null:U.current=a)},[a,B,h]);let W=r,fe={ref:o};return P&&a&&_utils_env_js__WEBPACK_IMPORTED_MODULE_12__.env.isServer&&(W={...W,className:(0,_utils_class_names_js__WEBPACK_IMPORTED_MODULE_13__.classNames)(r.className,...k.current.enter,...k.current.enterFrom)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(I.Provider,{value:w},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(h,{["visible"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open,["hidden"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed})|D.flags},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:fe,theirProps:W,defaultTag:Re,features:oe,visible:h==="visible",name:"Transition.Child"})))}),K=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(e,s){let{show:n,appear:m=!1,unmount:y,...E}=e,S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),x=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(S,s);(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_8__.useServerHandoffComplete)();let u=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)();if(n===void 0&&u!==null&&(n=(u&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n?"visible":"hidden"),v=re(()=>{d("hidden")}),[l,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([n]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_14__.useIsoMorphicEffect)(()=>{l!==!1&&t.current[t.current.length-1]!==n&&(t.current.push(n),r(!1))},[t,n]);let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:n,appear:m,initial:l}),[n,m,l]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(n)d("visible");else if(!_(v))d("hidden");else{let a=S.current;if(!a)return;let P=a.getBoundingClientRect();P.x===0&&P.y===0&&P.width===0&&P.height===0&&d("hidden")}},[n,v]);let f={unmount:y};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(I.Provider,{value:v},react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:o},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{...f,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(se,{ref:x,...f,...E})},theirProps:{},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:oe,visible:p==="visible",name:"Transition"})))}),ye=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(e,s){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M)!==null,m=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)()!==null;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!n&&m?react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{ref:s,...e}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(se,{ref:s,...e}))}),Ye=Object.assign(K,{Child:ye,Root:K});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transition: () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _utils_once_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.js */ "./node_modules/@headlessui/react/dist/utils/once.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
function v(t,...e){t&&e.length>0&&t.classList.add(...e)}function f(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();if(!t)return n.dispose;let{transitionDuration:a,transitionDelay:i}=getComputedStyle(t),[m,d]=[a,i].map(o=>{let[r=0]=o.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,g)=>g-l);return r});if(m+d!==0){let o=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),o())})}else e();return n.add(()=>e()),n.dispose}function M(t,e,n,a){let i=n?"enter":"leave",m=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_0__.disposables)(),d=a!==void 0?(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_1__.once)(a):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let u=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i,{enter:()=>e.enter,leave:()=>e.leave}),o=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return f(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),v(t,...u,...r),m.nextFrame(()=>{f(t,...r),v(t,...o),F(t,()=>(f(t,...u),v(t,...e.entered),d()))}),m.dispose}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisposables: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListener: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function E(n,e,a,t){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(a);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlags: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function b(g=0){let[t,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(g),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a|e),[t]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>Boolean(t&e),[t]),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a&~e),[l]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a^e),[l]);return{flags:t,addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
var o;let I=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.env.nextId():null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{e===null&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.env.nextId())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMounted: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoMorphicEffect: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClick: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
function L(m,E,c=!0){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&!!n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(n,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("click",e=>{!u.current||(f(e,()=>u.current),u.current=null)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOwnerDocument: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useResolveButtonType: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServerHandoffComplete: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function l(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&f(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionalRef: () => (/* binding */ T),
/* harmony export */   useSyncRefs: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Direction: () => (/* binding */ s),
/* harmony export */   useTabDirection: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
var s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s||{});function n(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransition: () => (/* binding */ D)
/* harmony export */ });
/* harmony import */ var _components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/transitions/utils/transition.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_is_mounted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)(),c=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)(),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(t);(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__.disposables)();c.add(e.dispose);let n=i.current;if(!!n&&r.current!=="idle"&&!!a.current)return e.dispose(),s.current(r.current),e.add((0,_components_transitions_utils_transition_js__WEBPACK_IMPORTED_MODULE_5__.transition)(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current)})),e.dispose},[t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowEvent: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ s),
/* harmony export */   Hidden: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="div";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:d,theirProps:r,slot:{},defaultTag:a,name:"Hidden"})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenClosedProvider: () => (/* binding */ c),
/* harmony export */   State: () => (/* binding */ d),
/* harmony export */   useOpenClosed: () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function C(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDisabledReactIssue7711: () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ e)
/* harmony export */ });
function e(...n){return n.filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disposables: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function m(){let a=[],i=[],r={enqueue(e){i.push(e)},addEventListener(e,t,n,s){return e.addEventListener(t,n,s),r.add(()=>e.removeEventListener(t,n,s))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},add(e){return a.push(e),()=>{let t=a.indexOf(e);if(t>=0){let[n]=a.splice(t,1);n()}}},dispose(){for(let e of a.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()},style(e,t,n){let s=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:s})})}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ L),
/* harmony export */   FocusResult: () => (/* binding */ N),
/* harmony export */   FocusableMode: () => (/* binding */ F),
/* harmony export */   focusElement: () => (/* binding */ S),
/* harmony export */   focusFrom: () => (/* binding */ v),
/* harmony export */   focusIn: () => (/* binding */ I),
/* harmony export */   getFocusableElements: () => (/* binding */ E),
/* harmony export */   isFocusableElement: () => (/* binding */ h),
/* harmony export */   restoreFocusIfNecessary: () => (/* binding */ g),
/* harmony export */   sortByDomNode: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L=(r=>(r[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r))(L||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),T=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(T||{});function E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(F||{});function h(e,t=0){var n;return e===((n=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:n.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t,{[0](){return e.matches(f)},[1](){let l=e;for(;l!==null;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function g(e){let t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{t&&!h(t.activeElement,0)&&S(e)})}function S(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function w(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?n:!1}function A(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),i=t(l);if(o===null||i===null)return 0;let r=o.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function v(e,t){return I(E(),t,{relativeTo:e})}function I(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,r=Array.isArray(e)?n?A(e):e:E(e);o.length>0&&r.length>1&&(r=r.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(l))-1;if(t&4)return Math.max(0,r.indexOf(l))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},c=0,a=r.length,u;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(t&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=r[s],u==null||u.focus(p),c+=d}while(u!==i.activeElement);return t&6&&w(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microTask: () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   once: () => (/* binding */ l)
/* harmony export */ });
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function e(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ j),
/* harmony export */   RenderStrategy: () => (/* binding */ w),
/* harmony export */   compact: () => (/* binding */ P),
/* harmony export */   forwardRefWithAs: () => (/* binding */ V),
/* harmony export */   render: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var j=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(j||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:l}){let o=h(t,r);if(n)return m(o,e,a,l);let u=s!=null?s:0;if(u&2){let{static:i=!1,...d}=o;if(i)return m(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i?0:1,{[0](){return null},[1](){return m({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return m(o,e,a,l)}function m(r,t={},e,a){var y;let{as:s=e,children:n,refName:l="ref",...o}=T(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;o.className&&typeof o.className=="function"&&(o.className=o.className(t));let d={};if(t){let f=!1,c=[];for(let[p,F]of Object.entries(t))typeof F=="boolean"&&(f=!0),F===!0&&c.push(p);f&&(d["data-headlessui-state"]=c.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(P(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let f=(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)((y=i.props)==null?void 0:y.className,o.className),c=f?{className:f}:{};return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},h(i.props,P(T(o,["ref"]))),d,u,O(i.ref,u.ref),c))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},T(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function O(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function h(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...l){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function V(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function P(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function T(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


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
/*!****************************************!*\
  !*** ./src/shortcode-builder/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/shortcode-builder/App.jsx");
/* harmony import */ var _store_settingsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/settingsData */ "./src/shortcode-builder/store/settingsData.js");




(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('edbi-shortcode-builder'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map