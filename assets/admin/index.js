/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings/App.js":
/*!*****************************!*\
  !*** ./src/settings/App.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/settings/components/Header.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar */ "./src/settings/components/Sidebar.js");
/* harmony import */ var _components_Browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Browser */ "./src/settings/components/Browser.js");
/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/admin.scss */ "./src/settings/scss/admin.scss");
/* harmony import */ var _components_Contexify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contexify */ "./src/settings/components/Contexify.js");






const App = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Contexify__WEBPACK_IMPORTED_MODULE_5__.Contexify, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Browser__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/settings/components/Browser.js":
/*!********************************************!*\
  !*** ./src/settings/components/Browser.js ***!
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/common */ "./src/settings/helper/common.js");
/* harmony import */ var react_contexify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-contexify */ "./node_modules/react-contexify/dist/index.mjs");
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lightgallery/react */ "./node_modules/lightgallery/react/Lightgallery.es5.js");
/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lightgallery/plugins/thumbnail */ "./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lightgallery/plugins/video */ "./node_modules/lightgallery/plugins/video/lg-video.es5.js");
/* harmony import */ var lightgallery_scss_lightgallery_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lightgallery/scss/lightgallery.scss */ "./node_modules/lightgallery/scss/lightgallery.scss");
/* harmony import */ var lightgallery_scss_lg_zoom_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lightgallery/scss/lg-zoom.scss */ "./node_modules/lightgallery/scss/lg-zoom.scss");








// React Contextify.


// Light Gallery


// Plugins





const FOLDER_MENU = 'file-browser-folder';
const FILE_MENU = 'file-browser-file';
const Browser = () => {
  const filter = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('dropbox-browser').getData('filter'));
  const refresh = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('dropbox-browser').getData('refresh'));
  const isLoading = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('dropbox-browser').getData('isLoading'));
  const currentPath = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('dropbox-browser').getData('current_path'));
  const previousPath = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('dropbox-browser').getData('previous_path'));
  const {
    activeAccount
  } = IDBAdmin;
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const setPath = path => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('dropbox-browser').setData('isLoading', true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('dropbox-browser').setData('current_path', path);
    // if ( '/' === path ) {
    // 	dispatch('dropbox-browser').setData('previous_path', '/');
    // } else {
    // 	dispatch('dropbox-browser').setData('current_path', path);
    // }
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/idb/v1/get-files',
      method: 'POST',
      data: {
        path: currentPath,
        accountId: activeAccount['id'],
        filter: filter
      }
    }).then(response => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('dropbox-browser').setData('breadcrumbs', response.data.breadcrumbs);
      setData(response.data.files);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('dropbox-browser').setData('previous_path', response.data.previous_path);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('dropbox-browser').setData('isLoading', false);
    }).catch(error => {
      console.log(error);
    });
  }, [currentPath, refresh, filter]);
  const folders = data.filter(item => {
    return item.is_dir ? item : '';
  });
  const files = data.filter(item => {
    return item.is_file ? item : '';
  });

  // const lightGallery = useRef(null);
  // const [lgItems, setLgItems] = useState(files);

  // const onLGInit = useCallback((lg) => {
  // 	if (lg) {
  // 		lightGallery.current = lg.instance;
  // 	}
  // }, []);

  // const getLGItems = useCallback(() => {
  // 	return lgItems.map((item) => {
  // 		console.log(item);
  // 		return (
  // 			<>
  // 				{item.can_preview && item.thumbnail ? (
  // 					<img src={item.thumbnail} />
  // 				) : (
  // 					<div className='ud-c-file-browser__file-list__item__icon'>
  // 						<span className={classnames('dashicons', getIcon(item.ext))}></span>
  // 					</div>
  // 				)}
  // 			</>
  // 		);
  // 	});
  // }, [lgItems]);

  // useEffect(() => {
  // 	lightGallery.current.refresh();
  // }, [files]);

  const showContexify = (e, name, data) => {
    const {
      show
    } = (0,react_contexify__WEBPACK_IMPORTED_MODULE_6__.useContextMenu)({
      id: name
    });
    show({
      event: e,
      props: {
        data: data
      }
    });
  };

  // I'm using a single event handler for all items
  // but you don't have too :)
  const handleItemClick = ({
    id,
    event,
    props
  }) => {
    switch (id) {
      case "copy":
        console.log(event, props);
        break;
      case "cut":
        console.log(event, props);
        break;
      //etc...
    }
  };

  const filePreview = item => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/idb/v1/file-preview',
      method: 'POST',
      data: {
        path: item.path,
        accountId: activeAccount['id']
      }
    }).then(response => {
      console.log('Preview', response.data);
    }).catch(error => {
      console.log(error);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    id: FILE_MENU
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "preview",
    onClick: handleItemClick
  }, "Preview"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "preview",
    onClick: handleItemClick
  }, "Preview in a new window"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "direct-link",
    onClick: handleItemClick
  }, "Direct Link"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "share",
    onClick: handleItemClick
  }, "Share"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "download",
    onClick: handleItemClick
  }, "Download"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Separator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "rename",
    onClick: handleItemClick
  }, "Rename"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "move-to",
    onClick: handleItemClick
  }, "Move to"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "duplicate",
    onClick: handleItemClick
  }, "Duplicate"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Separator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "Delete",
    onClick: handleItemClick
  }, "Delete")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    id: FOLDER_MENU
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "direct-link",
    onClick: handleItemClick
  }, "Direct Link"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "share",
    onClick: handleItemClick
  }, "Share"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "download",
    onClick: handleItemClick
  }, "Download"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Separator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "rename",
    onClick: handleItemClick
  }, "Rename"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "move-to",
    onClick: handleItemClick
  }, "Move to"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "duplicate",
    onClick: handleItemClick
  }, "Duplicate"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Separator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_6__.Item, {
    id: "Delete",
    onClick: handleItemClick
  }, "Delete")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__content"
  }, isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__loading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__loading__spinner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__loading__spinner--bounce1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__loading__spinner--bounce2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__loading__spinner--bounce3"
  }))) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__file-list"
  }, previousPath && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__file-list__item ud-c-file-browser__file-list__prev ud-c-file-browser__file-list__item--folder",
    onClick: () => {
      setPath(previousPath);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__file-list__item__info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "dashicons dashicons-arrow-left-alt2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Previous Folder"))), folders.length > 0 && folders.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('ud-c-file-browser__file-list__item', 'ud-c-file-browser__file-list__item--folder'),
      key: index,
      onClick: e => {
        if (item.is_dir) {
          setPath(item.path);
        }
      },
      onContextMenu: e => {
        showContexify(e, FOLDER_MENU, {
          type: 'folder',
          path: item.path
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__file-list__item__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "dashicons dashicons-open-folder"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.name)));
  })), files.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__file-list"
  }, files.map((item, index) => {
    console.log(item);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('ud-c-file-browser__file-list__item', 'ud-c-file-browser__file-list__item--file'),
      key: index,
      onClick: () => {
        filePreview(item);
        console.log(item);
      },
      onContextMenu: e => {
        showContexify(e, FILE_MENU, {
          type: 'file',
          path: item.path
        });
      }
    }, item.can_preview && item.thumbnail ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__file-list__item__thumb"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.thumbnail
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__file-list__item__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('dashicons', (0,_helper_common__WEBPACK_IMPORTED_MODULE_5__.getIcon)(item.ext))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__file-list__item__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: classnames__WEBPACK_IMPORTED_MODULE_4___default()('dashicons', (0,_helper_common__WEBPACK_IMPORTED_MODULE_5__.getIcon)(item.ext))
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.name)));
  }))) : ''));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browser);

/***/ }),

/***/ "./src/settings/components/Contexify.js":
/*!**********************************************!*\
  !*** ./src/settings/components/Contexify.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contexify: () => (/* binding */ Contexify)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_contexify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-contexify */ "./node_modules/react-contexify/dist/index.mjs");
/* harmony import */ var react_contexify_dist_ReactContexify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-contexify/dist/ReactContexify.css */ "./node_modules/react-contexify/dist/ReactContexify.min.css");

// React Contextify.


const MENU_ID = 'file-browser';
const Contexify = () => {
  const {
    show
  } = (0,react_contexify__WEBPACK_IMPORTED_MODULE_1__.useContextMenu)({
    id: MENU_ID
  });
  function handleItemClick({
    event,
    props,
    triggerEvent,
    data
  }) {
    console.log(event, props, triggerEvent, data);
  }
  function displayMenu(e) {
    // put whatever custom logic you need
    // you can even decide to not display the Menu
    show({
      event: e
    });
  }
  // {
  // 	/* just display the menu on right click */
  // }
  // <div onContextMenu={show}>Right click inside the box</div>;
  // {
  // 	/* run custom logic then display the menu */
  // }
  // <div onContextMenu={displayMenu}>Right click inside the box</div>;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    id: MENU_ID
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Item, {
    onClick: handleItemClick
  }, "Item 1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Item, {
    onClick: handleItemClick
  }, "Item 2"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Separator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Item, {
    disabled: true
  }, "Disabled"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Separator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Submenu, {
    label: "Submenu"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Item, {
    onClick: handleItemClick
  }, "Sub Item 1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_contexify__WEBPACK_IMPORTED_MODULE_1__.Item, {
    onClick: handleItemClick
  }, "Sub Item 2"))));
};

/***/ }),

/***/ "./src/settings/components/DropDownPopover.js":
/*!****************************************************!*\
  !*** ./src/settings/components/DropDownPopover.js ***!
  \****************************************************/
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

/***/ "./src/settings/components/Header.js":
/*!*******************************************!*\
  !*** ./src/settings/components/Header.js ***!
  \*******************************************/
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
/* harmony import */ var _DropDownPopover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDownPopover */ "./src/settings/components/DropDownPopover.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);








const Header = () => {
  const {
    activeAccount,
    accounts
  } = IDBAdmin;
  const {
    dispatch,
    select
  } = wp.data;
  const breadcrumbs = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('breadcrumbs'));
  const refresh = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('refresh'));
  const filterV = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('dropbox-browser').getData('filter'));
  const filter = filterV.by ? filterV.by : 'name';
  const sortDirection = filterV.direction ? filterV.direction : 'asc';
  console.log(filterV);
  const setFilter = filter => {
    dispatch('dropbox-browser').setData('isLoading', true);
    // update FilterV's by property.
    dispatch('dropbox-browser').setData('filter', {
      ...filterV,
      by: filter
    });
  };
  const setSortDirection = dir => {
    dispatch('dropbox-browser').setData('isLoading', true);
    dispatch('dropbox-browser').setData('filter', {
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
        dispatch('dropbox-browser').setData('refresh', true);
        dispatch('dropbox-browser').setData('isLoading', true);
      }
      // Reload the page.
      window.location.reload();
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "flex ud-c-file-browser__header__breadcrumb",
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
        dispatch('dropbox-browser').setData('current_path', item.path.replace(/\/$/, ''));
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
    className: "ud-c-file-browser__header__right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__header__right__search ud-c-file-browser__header__right__btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: IDBAdmin.assets + 'images/search.svg'
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__header__right__refresh ud-c-file-browser__header__right__btn",
    onClick: () => {
      dispatch('dropbox-browser').setData('refresh', !refresh);
      dispatch('dropbox-browser').setData('isLoading', true);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: IDBAdmin.assets + 'images/refresh.svg'
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownPopover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative",
    btnData: {
      className: 'ud-c-file-browser__header__right__filter ud-c-file-browser__header__right__btn relative',
      icon: IDBAdmin.assets + 'images/filter.svg',
      contentClass: 'min-w-[200px]'
    },
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__filter__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__filter__content__title"
    }, "Filter by"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__filter__content__options"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ud-c-file-browser__header__right__filter__content__options__item', {
        'ud-c-file-browser__header__right__filter__content__options__item--active': filter === 'name'
      }),
      onClick: () => setFilter('name')
    }, "Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ud-c-file-browser__header__right__filter__content__options__item', {
        'ud-c-file-browser__header__right__filter__content__options__item--active': filter === 'size'
      }),
      onClick: () => setFilter('size')
    }, "Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ud-c-file-browser__header__right__filter__content__options__item', {
        'ud-c-file-browser__header__right__filter__content__options__item--active': filter === 'modified'
      }),
      onClick: () => setFilter('modified')
    }, "Modified"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__filter__content__title"
    }, "Sort Direction"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__filter__content__options"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ud-c-file-browser__header__right__filter__content__options__item', {
        'ud-c-file-browser__header__right__filter__content__options__item--active': sortDirection === 'asc'
      }),
      onClick: () => setSortDirection('asc')
    }, "ASC"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ud-c-file-browser__header__right__filter__content__options__item', {
        'ud-c-file-browser__header__right__filter__content__options__item--active': sortDirection === 'desc'
      }),
      onClick: () => setSortDirection('desc')
    }, "DESC")))))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownPopover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative",
    btnData: {
      className: 'ud-c-file-browser__header__right__more ud-c-file-browser__header__right__btn relative',
      icon: IDBAdmin.assets + 'images/more.svg',
      contentClass: 'min-w-[200px]'
    },
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "More")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropDownPopover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative",
    btnData: {
      className: 'ud-c-file-browser__header__right__user ud-c-file-browser__header__right__btn relative',
      contentClass: 'min-w-[200px]'
    },
    btnContent: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, accounts ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__user__info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: aAccount.photo,
      alt: aAccount.name
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__user__info__more"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__user__info__more__name"
    }, aAccount.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__user__info__more__email"
    }, aAccount.email))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        window.open(IDBAdmin.authUrl, '_blank', 'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes');
      },
      className: "ud-c-btn ud-c-btn--primary"
    }, "Add Account")),
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__user__content"
    }, accounts && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Switch Account"), Object.entries(accounts).map(account => {
      account = account[1];
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ud-c-file-browser__header__right__user__info', account.id === aAccount.id ? 'ud-c-file-browser__header__right__user__info--active' : ''),
        onClick: () => {
          switchAccount(account.id);
          setActiveAccount(account);
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: account.photo,
        alt: account.name
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ud-c-file-browser__header__right__user__info__more"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ud-c-file-browser__header__right__user__info__more__name"
      }, account.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ud-c-file-browser__header__right__user__info__more__email"
      }, account.email))));
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ud-c-file-browser__header__right__user__content__add"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        window.open(IDBAdmin.authUrl, '_blank', 'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes');
      },
      className: "ud-c-btn ud-c-btn--primary"
    }, "Add Account"))))
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/settings/components/Sidebar.js":
/*!********************************************!*\
  !*** ./src/settings/components/Sidebar.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/common */ "./src/settings/helper/common.js");






const Sidebar = () => {
  const {
    activeAccount
  } = IDBAdmin;
  const [aItem, setItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('dropbox');
  const items = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('My Dropbox', 'integrate-dropbox'),
    img: IDBAdmin.assets + "images/dropbox.svg",
    slug: 'dropbox'
  }
  // {
  // 	name: __( 'Shared with me', 'integrate-dropbox' ),
  // 	img: IDBAdmin.assets + "images/dropbox.svg",
  // },
  ];

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__l"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__upload"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {},
    className: "ud-c-btn ud-c-btn--secondary"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: IDBAdmin.assets + "images/upload.svg"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Upload Files"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__items"
  }, items.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("ud-c-file-browser__sidebar__item", {
        "ud-c-file-browser__sidebar__item--active": item.slug === aItem
      }),
      onClick: () => setItem(item.slug)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.img
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.name));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__storage-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__storage-info__img"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: IDBAdmin.assets + "images/storage.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__storage-info__more"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__storage-info__more__progress"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__storage-info__more__progress__bar",
    style: {
      width: `${activeAccount?.storage?.percent}%`
    }
  })), activeAccount.storage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ud-c-file-browser__sidebar__storage-info__more__text"
  }, (0,_helper_common__WEBPACK_IMPORTED_MODULE_4__.formatBytes)(activeAccount?.storage?.used), " ", "of", " ", (0,_helper_common__WEBPACK_IMPORTED_MODULE_4__.formatBytes)(activeAccount?.storage?.allocated))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/settings/helper/common.js":
/*!***************************************!*\
  !*** ./src/settings/helper/common.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatBytes: () => (/* binding */ formatBytes),
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

/***/ }),

/***/ "./src/settings/store/browser-store.js":
/*!*********************************************!*\
  !*** ./src/settings/store/browser-store.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_STATE = {
  data: {
    filter: {
      by: 'name',
      direction: 'asc'
    },
    refresh: false,
    current_path: '',
    breadcrumbs: [],
    previous_path: '',
    isLoading: false
  }
};
const actions = {
  setData(item, value) {
    return {
      type: 'SET_DATA',
      item,
      value
    };
  }
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('dropbox-browser', {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: {
            ...state.data,
            [action.item]: action.value
          }
        };
    }
    return state;
  },
  actions,
  selectors: {
    getData(state, item) {
      const {
        data
      } = state;
      return data[item];
    }
  }
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

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

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js":
/*!*************************************************************************!*\
  !*** ./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var thumbnailsSettings = {
    thumbnail: true,
    animateThumb: true,
    currentPagerPosition: 'middle',
    alignThumbnails: 'middle',
    thumbWidth: 100,
    thumbHeight: '80px',
    thumbMargin: 5,
    appendThumbnailsTo: '.lg-components',
    toggleThumb: false,
    enableThumbDrag: true,
    enableThumbSwipe: true,
    thumbnailSwipeThreshold: 10,
    loadYouTubeThumbnail: true,
    youTubeThumbSize: 1,
    thumbnailPluginStrings: {
        toggleThumbnails: 'Toggle thumbnails',
    },
};

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var Thumbnail = /** @class */ (function () {
    function Thumbnail(instance, $LG) {
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = 0;
        this.translateX = 0;
        this.thumbClickable = false;
        // get lightGallery core plugin instance
        this.core = instance;
        this.$LG = $LG;
        return this;
    }
    Thumbnail.prototype.init = function () {
        // extend module default settings with lightGallery core settings
        this.settings = __assign(__assign({}, thumbnailsSettings), this.core.settings);
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth =
            this.core.galleryItems.length *
                (this.settings.thumbWidth + this.settings.thumbMargin);
        // Thumbnail animation value
        this.translateX = 0;
        this.setAnimateThumbStyles();
        if (!this.core.settings.allowMediaOverlap) {
            this.settings.toggleThumb = false;
        }
        if (this.settings.thumbnail) {
            this.build();
            if (this.settings.animateThumb) {
                if (this.settings.enableThumbDrag) {
                    this.enableThumbDrag();
                }
                if (this.settings.enableThumbSwipe) {
                    this.enableThumbSwipe();
                }
                this.thumbClickable = false;
            }
            else {
                this.thumbClickable = true;
            }
            this.toggleThumbBar();
            this.thumbKeyPress();
        }
    };
    Thumbnail.prototype.build = function () {
        var _this = this;
        this.setThumbMarkup();
        this.manageActiveClassOnSlideChange();
        this.$lgThumb.first().on('click.lg touchend.lg', function (e) {
            var $target = _this.$LG(e.target);
            if (!$target.hasAttribute('data-lg-item-id')) {
                return;
            }
            setTimeout(function () {
                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if (_this.thumbClickable && !_this.core.lgBusy) {
                    var index = parseInt($target.attr('data-lg-item-id'));
                    _this.core.slide(index, false, true, false);
                }
            }, 50);
        });
        this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
            var index = event.detail.index;
            _this.animateThumb(index);
        });
        this.core.LGel.on(lGEvents.beforeOpen + ".thumb", function () {
            _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
        });
        this.core.LGel.on(lGEvents.updateSlides + ".thumb", function () {
            _this.rebuildThumbnails();
        });
        this.core.LGel.on(lGEvents.containerResize + ".thumb", function () {
            if (!_this.core.lgOpened)
                return;
            setTimeout(function () {
                _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
            }, 50);
        });
    };
    Thumbnail.prototype.setThumbMarkup = function () {
        var thumbOuterClassNames = 'lg-thumb-outer ';
        if (this.settings.alignThumbnails) {
            thumbOuterClassNames += "lg-thumb-align-" + this.settings.alignThumbnails;
        }
        var html = "<div class=\"" + thumbOuterClassNames + "\">\n        <div class=\"lg-thumb lg-group\">\n        </div>\n        </div>";
        this.core.outer.addClass('lg-has-thumb');
        if (this.settings.appendThumbnailsTo === '.lg-components') {
            this.core.$lgComponents.append(html);
        }
        else {
            this.core.outer.append(html);
        }
        this.$thumbOuter = this.core.outer.find('.lg-thumb-outer').first();
        this.$lgThumb = this.core.outer.find('.lg-thumb').first();
        if (this.settings.animateThumb) {
            this.core.outer
                .find('.lg-thumb')
                .css('transition-duration', this.core.settings.speed + 'ms')
                .css('width', this.thumbTotalWidth + 'px')
                .css('position', 'relative');
        }
        this.setThumbItemHtml(this.core.galleryItems);
    };
    Thumbnail.prototype.enableThumbDrag = function () {
        var _this = this;
        var thumbDragUtils = {
            cords: {
                startX: 0,
                endX: 0,
            },
            isMoved: false,
            newTranslateX: 0,
            startTime: new Date(),
            endTime: new Date(),
            touchMoveTime: 0,
        };
        var isDragging = false;
        this.$thumbOuter.addClass('lg-grab');
        this.core.outer
            .find('.lg-thumb')
            .first()
            .on('mousedown.lg.thumb', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                thumbDragUtils.cords.startX = e.pageX;
                thumbDragUtils.startTime = new Date();
                _this.thumbClickable = false;
                isDragging = true;
                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.outer.get().scrollLeft += 1;
                _this.core.outer.get().scrollLeft -= 1;
                // *
                _this.$thumbOuter
                    .removeClass('lg-grab')
                    .addClass('lg-grabbing');
            }
        });
        this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function (e) {
            if (!_this.core.lgOpened)
                return;
            if (isDragging) {
                thumbDragUtils.cords.endX = e.pageX;
                thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
            }
        });
        this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function () {
            if (!_this.core.lgOpened)
                return;
            if (thumbDragUtils.isMoved) {
                thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
            }
            else {
                _this.thumbClickable = true;
            }
            if (isDragging) {
                isDragging = false;
                _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
            }
        });
    };
    Thumbnail.prototype.enableThumbSwipe = function () {
        var _this = this;
        var thumbDragUtils = {
            cords: {
                startX: 0,
                endX: 0,
            },
            isMoved: false,
            newTranslateX: 0,
            startTime: new Date(),
            endTime: new Date(),
            touchMoveTime: 0,
        };
        this.$lgThumb.on('touchstart.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                thumbDragUtils.cords.startX = e.targetTouches[0].pageX;
                _this.thumbClickable = false;
                thumbDragUtils.startTime = new Date();
            }
        });
        this.$lgThumb.on('touchmove.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                thumbDragUtils.cords.endX = e.targetTouches[0].pageX;
                thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
            }
        });
        this.$lgThumb.on('touchend.lg', function () {
            if (thumbDragUtils.isMoved) {
                thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
            }
            else {
                _this.thumbClickable = true;
            }
        });
    };
    // Rebuild thumbnails
    Thumbnail.prototype.rebuildThumbnails = function () {
        var _this = this;
        // Remove transitions
        this.$thumbOuter.addClass('lg-rebuilding-thumbnails');
        setTimeout(function () {
            _this.thumbTotalWidth =
                _this.core.galleryItems.length *
                    (_this.settings.thumbWidth + _this.settings.thumbMargin);
            _this.$lgThumb.css('width', _this.thumbTotalWidth + 'px');
            _this.$lgThumb.empty();
            _this.setThumbItemHtml(_this.core.galleryItems);
            _this.animateThumb(_this.core.index);
        }, 50);
        setTimeout(function () {
            _this.$thumbOuter.removeClass('lg-rebuilding-thumbnails');
        }, 200);
    };
    // @ts-check
    Thumbnail.prototype.setTranslate = function (value) {
        this.$lgThumb.css('transform', 'translate3d(-' + value + 'px, 0px, 0px)');
    };
    Thumbnail.prototype.getPossibleTransformX = function (left) {
        if (left > this.thumbTotalWidth - this.thumbOuterWidth) {
            left = this.thumbTotalWidth - this.thumbOuterWidth;
        }
        if (left < 0) {
            left = 0;
        }
        return left;
    };
    Thumbnail.prototype.animateThumb = function (index) {
        this.$lgThumb.css('transition-duration', this.core.settings.speed + 'ms');
        if (this.settings.animateThumb) {
            var position = 0;
            switch (this.settings.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position =
                        this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.settings.thumbWidth;
            }
            this.translateX =
                (this.settings.thumbWidth + this.settings.thumbMargin) * index -
                    1 -
                    position;
            if (this.translateX > this.thumbTotalWidth - this.thumbOuterWidth) {
                this.translateX = this.thumbTotalWidth - this.thumbOuterWidth;
            }
            if (this.translateX < 0) {
                this.translateX = 0;
            }
            this.setTranslate(this.translateX);
        }
    };
    Thumbnail.prototype.onThumbTouchMove = function (thumbDragUtils) {
        thumbDragUtils.newTranslateX = this.translateX;
        thumbDragUtils.isMoved = true;
        thumbDragUtils.touchMoveTime = new Date().valueOf();
        thumbDragUtils.newTranslateX -=
            thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
        thumbDragUtils.newTranslateX = this.getPossibleTransformX(thumbDragUtils.newTranslateX);
        // move current slide
        this.setTranslate(thumbDragUtils.newTranslateX);
        this.$thumbOuter.addClass('lg-dragging');
        return thumbDragUtils;
    };
    Thumbnail.prototype.onThumbTouchEnd = function (thumbDragUtils) {
        thumbDragUtils.isMoved = false;
        thumbDragUtils.endTime = new Date();
        this.$thumbOuter.removeClass('lg-dragging');
        var touchDuration = thumbDragUtils.endTime.valueOf() -
            thumbDragUtils.startTime.valueOf();
        var distanceXnew = thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
        var speedX = Math.abs(distanceXnew) / touchDuration;
        // Some magical numbers
        // Can be improved
        if (speedX > 0.15 &&
            thumbDragUtils.endTime.valueOf() - thumbDragUtils.touchMoveTime < 30) {
            speedX += 1;
            if (speedX > 2) {
                speedX += 1;
            }
            speedX =
                speedX +
                    speedX * (Math.abs(distanceXnew) / this.thumbOuterWidth);
            this.$lgThumb.css('transition-duration', Math.min(speedX - 1, 2) + 'settings');
            distanceXnew = distanceXnew * speedX;
            this.translateX = this.getPossibleTransformX(this.translateX - distanceXnew);
            this.setTranslate(this.translateX);
        }
        else {
            this.translateX = thumbDragUtils.newTranslateX;
        }
        if (Math.abs(thumbDragUtils.cords.endX - thumbDragUtils.cords.startX) <
            this.settings.thumbnailSwipeThreshold) {
            this.thumbClickable = true;
        }
        return thumbDragUtils;
    };
    Thumbnail.prototype.getThumbHtml = function (thumb, index, alt) {
        var slideVideoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
        var thumbImg;
        if (slideVideoInfo.youtube) {
            if (this.settings.loadYouTubeThumbnail) {
                thumbImg =
                    '//img.youtube.com/vi/' +
                        slideVideoInfo.youtube[1] +
                        '/' +
                        this.settings.youTubeThumbSize +
                        '.jpg';
            }
            else {
                thumbImg = thumb;
            }
        }
        else {
            thumbImg = thumb;
        }
        var altAttr = alt ? 'alt="' + alt + '"' : '';
        return "<div data-lg-item-id=\"" + index + "\" class=\"lg-thumb-item " + (index === this.core.index ? ' active' : '') + "\"\n        style=\"width:" + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + "px;\">\n            <img " + altAttr + " data-lg-item-id=\"" + index + "\" src=\"" + thumbImg + "\" />\n        </div>";
    };
    Thumbnail.prototype.getThumbItemHtml = function (items) {
        var thumbList = '';
        for (var i = 0; i < items.length; i++) {
            thumbList += this.getThumbHtml(items[i].thumb, i, items[i].alt);
        }
        return thumbList;
    };
    Thumbnail.prototype.setThumbItemHtml = function (items) {
        var thumbList = this.getThumbItemHtml(items);
        this.$lgThumb.html(thumbList);
    };
    Thumbnail.prototype.setAnimateThumbStyles = function () {
        if (this.settings.animateThumb) {
            this.core.outer.addClass('lg-animate-thumb');
        }
    };
    // Manage thumbnail active calss
    Thumbnail.prototype.manageActiveClassOnSlideChange = function () {
        var _this = this;
        // manage active class for thumbnail
        this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
            var $thumb = _this.core.outer.find('.lg-thumb-item');
            var index = event.detail.index;
            $thumb.removeClass('active');
            $thumb.eq(index).addClass('active');
        });
    };
    // Toggle thumbnail bar
    Thumbnail.prototype.toggleThumbBar = function () {
        var _this = this;
        if (this.settings.toggleThumb) {
            this.core.outer.addClass('lg-can-toggle');
            this.core.$toolbar.append('<button type="button" aria-label="' +
                this.settings.thumbnailPluginStrings['toggleThumbnails'] +
                '" class="lg-toggle-thumb lg-icon"></button>');
            this.core.outer
                .find('.lg-toggle-thumb')
                .first()
                .on('click.lg', function () {
                _this.core.outer.toggleClass('lg-components-open');
            });
        }
    };
    Thumbnail.prototype.thumbKeyPress = function () {
        var _this = this;
        this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function (e) {
            if (!_this.core.lgOpened || !_this.settings.toggleThumb)
                return;
            if (e.keyCode === 38) {
                e.preventDefault();
                _this.core.outer.addClass('lg-components-open');
            }
            else if (e.keyCode === 40) {
                e.preventDefault();
                _this.core.outer.removeClass('lg-components-open');
            }
        });
    };
    Thumbnail.prototype.destroy = function () {
        if (this.settings.thumbnail) {
            this.$LG(window).off(".lg.thumb.global" + this.core.lgId);
            this.core.LGel.off('.lg.thumb');
            this.core.LGel.off('.thumb');
            this.$thumbOuter.remove();
            this.core.outer.removeClass('lg-has-thumb');
        }
    };
    return Thumbnail;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);
//# sourceMappingURL=lg-thumbnail.es5.js.map


/***/ }),

/***/ "./node_modules/lightgallery/plugins/video/lg-video.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lightgallery/plugins/video/lg-video.es5.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var videoSettings = {
    autoplayFirstVideo: true,
    youTubePlayerParams: false,
    vimeoPlayerParams: false,
    wistiaPlayerParams: false,
    gotoNextSlideOnVideoEnd: true,
    autoplayVideoOnSlide: false,
    videojs: false,
    videojsTheme: '',
    videojsOptions: {},
};

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var param = function (obj) {
    return Object.keys(obj)
        .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    })
        .join('&');
};
var paramsToObject = function (url) {
    var paramas = url
        .slice(1)
        .split('&')
        .map(function (p) { return p.split('='); })
        .reduce(function (obj, pair) {
        var _a = pair.map(decodeURIComponent), key = _a[0], value = _a[1];
        obj[key] = value;
        return obj;
    }, {});
    return paramas;
};
var getYouTubeParams = function (videoInfo, youTubePlayerParamsSettings) {
    if (!videoInfo.youtube)
        return '';
    var slideUrlParams = videoInfo.youtube[2]
        ? paramsToObject(videoInfo.youtube[2])
        : '';
    // For youtube first params gets priority if duplicates found
    var defaultYouTubePlayerParams = {
        wmode: 'opaque',
        autoplay: 0,
        mute: 1,
        enablejsapi: 1,
    };
    var playerParamsSettings = youTubePlayerParamsSettings || {};
    var youTubePlayerParams = __assign(__assign(__assign({}, defaultYouTubePlayerParams), playerParamsSettings), slideUrlParams);
    var youTubeParams = "?" + param(youTubePlayerParams);
    return youTubeParams;
};
var isYouTubeNoCookie = function (url) {
    return url.includes('youtube-nocookie.com');
};
var getVimeoURLParams = function (defaultParams, videoInfo) {
    if (!videoInfo || !videoInfo.vimeo)
        return '';
    var urlParams = videoInfo.vimeo[2] || '';
    var defaultPlayerParams = defaultParams && Object.keys(defaultParams).length !== 0
        ? '&' + param(defaultParams)
        : '';
    // Support private video
    var urlWithHash = videoInfo.vimeo[0].split('/').pop() || '';
    var urlWithHashWithParams = urlWithHash.split('?')[0] || '';
    var hash = urlWithHashWithParams.split('#')[0];
    var isPrivate = videoInfo.vimeo[1] !== hash;
    if (isPrivate) {
        urlParams = urlParams.replace("/" + hash, '');
    }
    urlParams =
        urlParams[0] == '?' ? '&' + urlParams.slice(1) : urlParams || '';
    // For vimeo last params gets priority if duplicates found
    var vimeoPlayerParams = "?autoplay=0&muted=1" + (isPrivate ? "&h=" + hash : '') + defaultPlayerParams + urlParams;
    return vimeoPlayerParams;
};

/**
 * Video module for lightGallery
 * Supports HTML5, YouTube, Vimeo, wistia videos
 *
 *
 * @ref Wistia
 * https://wistia.com/support/integrations/wordpress(How to get url)
 * https://wistia.com/support/developers/embed-options#using-embed-options
 * https://wistia.com/support/developers/player-api
 * https://wistia.com/support/developers/construct-an-embed-code
 * http://jsfiddle.net/xvnm7xLm/
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * https://wistia.com/support/embed-and-share/sharing-videos
 * https://private-sharing.wistia.com/medias/mwhrulrucj
 *
 * @ref Youtube
 * https://developers.google.com/youtube/player_parameters#enablejsapi
 * https://developers.google.com/youtube/iframe_api_reference
 * https://developer.chrome.com/blog/autoplay/#iframe-delegation
 *
 * @ref Vimeo
 * https://stackoverflow.com/questions/10488943/easy-way-to-get-vimeo-id-from-a-vimeo-url
 * https://vimeo.zendesk.com/hc/en-us/articles/360000121668-Starting-playback-at-a-specific-timecode
 * https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters
 */
var Video = /** @class */ (function () {
    function Video(instance) {
        // get lightGallery core plugin instance
        this.core = instance;
        this.settings = __assign(__assign({}, videoSettings), this.core.settings);
        return this;
    }
    Video.prototype.init = function () {
        var _this = this;
        /**
         * Event triggered when video url found without poster
         * Append video HTML
         * Play if autoplayFirstVideo is true
         */
        this.core.LGel.on(lGEvents.hasVideo + ".video", this.onHasVideo.bind(this));
        this.core.LGel.on(lGEvents.posterClick + ".video", function () {
            var $el = _this.core.getSlideItem(_this.core.index);
            _this.loadVideoOnPosterClick($el);
        });
        this.core.LGel.on(lGEvents.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
        // @desc fired immediately before each slide transition.
        this.core.LGel.on(lGEvents.beforeSlide + ".video", this.onBeforeSlide.bind(this));
        // @desc fired immediately after each slide transition.
        this.core.LGel.on(lGEvents.afterSlide + ".video", this.onAfterSlide.bind(this));
    };
    /**
     * @desc Event triggered when a slide is completely loaded
     *
     * @param {Event} event - lightGalley custom event
     */
    Video.prototype.onSlideItemLoad = function (event) {
        var _this = this;
        var _a = event.detail, isFirstSlide = _a.isFirstSlide, index = _a.index;
        // Should check the active slide as well as user may have moved to different slide before the first slide is loaded
        if (this.settings.autoplayFirstVideo &&
            isFirstSlide &&
            index === this.core.index) {
            // Delay is just for the transition effect on video load
            setTimeout(function () {
                _this.loadAndPlayVideo(index);
            }, 200);
        }
        // Should not call on first slide. should check only if the slide is active
        if (!isFirstSlide &&
            this.settings.autoplayVideoOnSlide &&
            index === this.core.index) {
            this.loadAndPlayVideo(index);
        }
    };
    /**
     * @desc Event triggered when video url or poster found
     * Append video HTML is poster is not given
     * Play if autoplayFirstVideo is true
     *
     * @param {Event} event - Javascript Event object.
     */
    Video.prototype.onHasVideo = function (event) {
        var _a = event.detail, index = _a.index, src = _a.src, html5Video = _a.html5Video, hasPoster = _a.hasPoster;
        if (!hasPoster) {
            // All functions are called separately if poster exist in loadVideoOnPosterClick function
            this.appendVideos(this.core.getSlideItem(index), {
                src: src,
                addClass: 'lg-object',
                index: index,
                html5Video: html5Video,
            });
            // Automatically navigate to next slide once video reaches the end.
            this.gotoNextSlideOnVideoEnd(src, index);
        }
    };
    /**
     * @desc fired immediately before each slide transition.
     * Pause the previous video
     * Hide the download button if the slide contains YouTube, Vimeo, or Wistia videos.
     *
     * @param {Event} event - Javascript Event object.
     * @param {number} prevIndex - Previous index of the slide.
     * @param {number} index - Current index of the slide
     */
    Video.prototype.onBeforeSlide = function (event) {
        if (this.core.lGalleryOn) {
            var prevIndex = event.detail.prevIndex;
            this.pauseVideo(prevIndex);
        }
    };
    /**
     * @desc fired immediately after each slide transition.
     * Play video if autoplayVideoOnSlide option is enabled.
     *
     * @param {Event} event - Javascript Event object.
     * @param {number} prevIndex - Previous index of the slide.
     * @param {number} index - Current index of the slide
     * @todo should check on onSlideLoad as well if video is not loaded on after slide
     */
    Video.prototype.onAfterSlide = function (event) {
        var _this = this;
        var _a = event.detail, index = _a.index, prevIndex = _a.prevIndex;
        // Do not call on first slide
        var $slide = this.core.getSlideItem(index);
        if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
            if ($slide.hasClass('lg-complete')) {
                setTimeout(function () {
                    _this.loadAndPlayVideo(index);
                }, 100);
            }
        }
    };
    Video.prototype.loadAndPlayVideo = function (index) {
        var $slide = this.core.getSlideItem(index);
        var currentGalleryItem = this.core.galleryItems[index];
        if (currentGalleryItem.poster) {
            this.loadVideoOnPosterClick($slide, true);
        }
        else {
            this.playVideo(index);
        }
    };
    /**
     * Play HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
     * @param {number} index - Index of the slide
     */
    Video.prototype.playVideo = function (index) {
        this.controlVideo(index, 'play');
    };
    /**
     * Pause HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
     * @param {number} index - Index of the slide
     */
    Video.prototype.pauseVideo = function (index) {
        this.controlVideo(index, 'pause');
    };
    Video.prototype.getVideoHtml = function (src, addClass, index, html5Video) {
        var video = '';
        var videoInfo = this.core.galleryItems[index]
            .__slideVideoInfo || {};
        var currentGalleryItem = this.core.galleryItems[index];
        var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
        videoTitle = videoTitle ? 'title="' + videoTitle + '"' : '';
        var commonIframeProps = "allowtransparency=\"true\"\n            frameborder=\"0\"\n            scrolling=\"no\"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen";
        if (videoInfo.youtube) {
            var videoId = 'lg-youtube' + index;
            var youTubeParams = getYouTubeParams(videoInfo, this.settings.youTubePlayerParams);
            var isYouTubeNoCookieURL = isYouTubeNoCookie(src);
            var youtubeURL = isYouTubeNoCookieURL
                ? '//www.youtube-nocookie.com/'
                : '//www.youtube.com/';
            video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-youtube " + addClass + "\" " + videoTitle + " src=\"" + youtubeURL + "embed/" + (videoInfo.youtube[1] + youTubeParams) + "\" " + commonIframeProps + "></iframe>";
        }
        else if (videoInfo.vimeo) {
            var videoId = 'lg-vimeo' + index;
            var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
            video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-vimeo " + addClass + "\" " + videoTitle + " src=\"//player.vimeo.com/video/" + (videoInfo.vimeo[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
        }
        else if (videoInfo.wistia) {
            var wistiaId = 'lg-wistia' + index;
            var playerParams = param(this.settings.wistiaPlayerParams);
            playerParams = playerParams ? '?' + playerParams : '';
            video = "<iframe allow=\"autoplay\" id=\"" + wistiaId + "\" src=\"//fast.wistia.net/embed/iframe/" + (videoInfo.wistia[4] + playerParams) + "\" " + videoTitle + " class=\"wistia_embed lg-video-object lg-wistia " + addClass + "\" name=\"wistia_embed\" " + commonIframeProps + "></iframe>";
        }
        else if (videoInfo.html5) {
            var html5VideoMarkup = '';
            for (var i = 0; i < html5Video.source.length; i++) {
                html5VideoMarkup += "<source src=\"" + html5Video.source[i].src + "\" type=\"" + html5Video.source[i].type + "\">";
            }
            if (html5Video.tracks) {
                var _loop_1 = function (i) {
                    var trackAttributes = '';
                    var track = html5Video.tracks[i];
                    Object.keys(track || {}).forEach(function (key) {
                        trackAttributes += key + "=\"" + track[key] + "\" ";
                    });
                    html5VideoMarkup += "<track " + trackAttributes + ">";
                };
                for (var i = 0; i < html5Video.tracks.length; i++) {
                    _loop_1(i);
                }
            }
            var html5VideoAttrs_1 = '';
            var videoAttributes_1 = html5Video.attributes || {};
            Object.keys(videoAttributes_1 || {}).forEach(function (key) {
                html5VideoAttrs_1 += key + "=\"" + videoAttributes_1[key] + "\" ";
            });
            video = "<video class=\"lg-video-object lg-html5 " + (this.settings.videojs && this.settings.videojsTheme
                ? this.settings.videojsTheme + ' '
                : '') + " " + (this.settings.videojs ? ' video-js' : '') + "\" " + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
        }
        return video;
    };
    /**
     * @desc - Append videos to the slide
     *
     * @param {HTMLElement} el - slide element
     * @param {Object} videoParams - Video parameters, Contains src, class, index, htmlVideo
     */
    Video.prototype.appendVideos = function (el, videoParams) {
        var _a;
        var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
        el.find('.lg-video-cont').append(videoHtml);
        var $videoElement = el.find('.lg-video-object').first();
        if (videoParams.html5Video) {
            $videoElement.on('mousedown.lg.video', function (e) {
                e.stopPropagation();
            });
        }
        if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
            try {
                return videojs($videoElement.get(), this.settings.videojsOptions);
            }
            catch (e) {
                console.error('lightGallery:- Make sure you have included videojs');
            }
        }
    };
    Video.prototype.gotoNextSlideOnVideoEnd = function (src, index) {
        var _this = this;
        var $videoElement = this.core
            .getSlideItem(index)
            .find('.lg-video-object')
            .first();
        var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
        if (this.settings.gotoNextSlideOnVideoEnd) {
            if (videoInfo.html5) {
                $videoElement.on('ended', function () {
                    _this.core.goToNextSlide();
                });
            }
            else if (videoInfo.vimeo) {
                try {
                    // https://github.com/vimeo/player.js/#ended
                    new Vimeo.Player($videoElement.get()).on('ended', function () {
                        _this.core.goToNextSlide();
                    });
                }
                catch (e) {
                    console.error('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
                }
            }
            else if (videoInfo.wistia) {
                try {
                    window._wq = window._wq || [];
                    // @todo Event is gettign triggered multiple times
                    window._wq.push({
                        id: $videoElement.attr('id'),
                        onReady: function (video) {
                            video.bind('end', function () {
                                _this.core.goToNextSlide();
                            });
                        },
                    });
                }
                catch (e) {
                    console.error('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
                }
            }
        }
    };
    Video.prototype.controlVideo = function (index, action) {
        var $videoElement = this.core
            .getSlideItem(index)
            .find('.lg-video-object')
            .first();
        var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
        if (!$videoElement.get())
            return;
        if (videoInfo.youtube) {
            try {
                $videoElement.get().contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + action + "Video\",\"args\":\"\"}", '*');
            }
            catch (e) {
                console.error("lightGallery:- " + e);
            }
        }
        else if (videoInfo.vimeo) {
            try {
                new Vimeo.Player($videoElement.get())[action]();
            }
            catch (e) {
                console.error('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
            }
        }
        else if (videoInfo.html5) {
            if (this.settings.videojs) {
                try {
                    videojs($videoElement.get())[action]();
                }
                catch (e) {
                    console.error('lightGallery:- Make sure you have included videojs');
                }
            }
            else {
                $videoElement.get()[action]();
            }
        }
        else if (videoInfo.wistia) {
            try {
                window._wq = window._wq || [];
                // @todo Find a way to destroy wistia player instance
                window._wq.push({
                    id: $videoElement.attr('id'),
                    onReady: function (video) {
                        video[action]();
                    },
                });
            }
            catch (e) {
                console.error('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
            }
        }
    };
    Video.prototype.loadVideoOnPosterClick = function ($el, forcePlay) {
        var _this = this;
        // check slide has poster
        if (!$el.hasClass('lg-video-loaded')) {
            // check already video element present
            if (!$el.hasClass('lg-has-video')) {
                $el.addClass('lg-has-video');
                var _html = void 0;
                var _src = this.core.galleryItems[this.core.index].src;
                var video = this.core.galleryItems[this.core.index].video;
                if (video) {
                    _html =
                        typeof video === 'string' ? JSON.parse(video) : video;
                }
                var videoJsPlayer_1 = this.appendVideos($el, {
                    src: _src,
                    addClass: '',
                    index: this.core.index,
                    html5Video: _html,
                });
                this.gotoNextSlideOnVideoEnd(_src, this.core.index);
                var $tempImg = $el.find('.lg-object').first().get();
                // @todo make sure it is working
                $el.find('.lg-video-cont').first().append($tempImg);
                $el.addClass('lg-video-loading');
                videoJsPlayer_1 &&
                    videoJsPlayer_1.ready(function () {
                        videoJsPlayer_1.on('loadedmetadata', function () {
                            _this.onVideoLoadAfterPosterClick($el, _this.core.index);
                        });
                    });
                $el.find('.lg-video-object')
                    .first()
                    .on('load.lg error.lg loadedmetadata.lg', function () {
                    setTimeout(function () {
                        _this.onVideoLoadAfterPosterClick($el, _this.core.index);
                    }, 50);
                });
            }
            else {
                this.playVideo(this.core.index);
            }
        }
        else if (forcePlay) {
            this.playVideo(this.core.index);
        }
    };
    Video.prototype.onVideoLoadAfterPosterClick = function ($el, index) {
        $el.addClass('lg-video-loaded');
        this.playVideo(index);
    };
    Video.prototype.destroy = function () {
        this.core.LGel.off('.lg.video');
        this.core.LGel.off('.video');
    };
    return Video;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);
//# sourceMappingURL=lg-video.es5.js.map


/***/ }),

/***/ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js":
/*!***************************************************************!*\
  !*** ./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var zoomSettings = {
    scale: 1,
    zoom: true,
    infiniteZoom: true,
    actualSize: true,
    showZoomInOutIcons: false,
    actualSizeIcons: {
        zoomIn: 'lg-zoom-in',
        zoomOut: 'lg-zoom-out',
    },
    enableZoomAfter: 300,
    zoomPluginStrings: {
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
        viewActualSize: 'View actual size',
    },
};

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var ZOOM_TRANSITION_DURATION = 500;
var Zoom = /** @class */ (function () {
    function Zoom(instance, $LG) {
        // get lightGallery core plugin instance
        this.core = instance;
        this.$LG = $LG;
        this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
        return this;
    }
    // Append Zoom controls. Actual size, Zoom-in, Zoom-out
    Zoom.prototype.buildTemplates = function () {
        var zoomIcons = this.settings.showZoomInOutIcons
            ? "<button id=\"" + this.core.getIdName('lg-zoom-in') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-in lg-icon\"></button><button id=\"" + this.core.getIdName('lg-zoom-out') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-out lg-icon\"></button>"
            : '';
        if (this.settings.actualSize) {
            zoomIcons += "<button id=\"" + this.core.getIdName('lg-actual-size') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['viewActualSize'] + "\" class=\"" + this.settings.actualSizeIcons.zoomIn + " lg-icon\"></button>";
        }
        this.core.outer.addClass('lg-use-transition-for-zoom');
        this.core.$toolbar.first().append(zoomIcons);
    };
    /**
     * @desc Enable zoom option only once the image is completely loaded
     * If zoomFromOrigin is true, Zoom is enabled once the dummy image has been inserted
     *
     * Zoom styles are defined under lg-zoomable CSS class.
     */
    Zoom.prototype.enableZoom = function (event) {
        var _this = this;
        // delay will be 0 except first time
        var _speed = this.settings.enableZoomAfter + event.detail.delay;
        // set _speed value 0 if gallery opened from direct url and if it is first slide
        if (this.$LG('body').first().hasClass('lg-from-hash') &&
            event.detail.delay) {
            // will execute only once
            _speed = 0;
        }
        else {
            // Remove lg-from-hash to enable starting animation.
            this.$LG('body').first().removeClass('lg-from-hash');
        }
        this.zoomableTimeout = setTimeout(function () {
            if (!_this.isImageSlide(_this.core.index)) {
                return;
            }
            _this.core.getSlideItem(event.detail.index).addClass('lg-zoomable');
            if (event.detail.index === _this.core.index) {
                _this.setZoomEssentials();
            }
        }, _speed + 30);
    };
    Zoom.prototype.enableZoomOnSlideItemLoad = function () {
        // Add zoomable class
        this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
    };
    Zoom.prototype.getDragCords = function (e) {
        return {
            x: e.pageX,
            y: e.pageY,
        };
    };
    Zoom.prototype.getSwipeCords = function (e) {
        var x = e.touches[0].pageX;
        var y = e.touches[0].pageY;
        return {
            x: x,
            y: y,
        };
    };
    Zoom.prototype.getDragAllowedAxises = function (scale, scaleDiff) {
        var $image = this.core
            .getSlideItem(this.core.index)
            .find('.lg-image')
            .first()
            .get();
        var height = 0;
        var width = 0;
        var rect = $image.getBoundingClientRect();
        if (scale) {
            height = $image.offsetHeight * scale;
            width = $image.offsetWidth * scale;
        }
        else if (scaleDiff) {
            height = rect.height + scaleDiff * rect.height;
            width = rect.width + scaleDiff * rect.width;
        }
        else {
            height = rect.height;
            width = rect.width;
        }
        var allowY = height > this.containerRect.height;
        var allowX = width > this.containerRect.width;
        return {
            allowX: allowX,
            allowY: allowY,
        };
    };
    Zoom.prototype.setZoomEssentials = function () {
        this.containerRect = this.core.$content.get().getBoundingClientRect();
    };
    /**
     * @desc Image zoom
     * Translate the wrap and scale the image to get better user experience
     *
     * @param {String} scale - Zoom decrement/increment value
     */
    Zoom.prototype.zoomImage = function (scale, scaleDiff, reposition, resetToMax) {
        if (Math.abs(scaleDiff) <= 0)
            return;
        var offsetX = this.containerRect.width / 2 + this.containerRect.left;
        var offsetY = this.containerRect.height / 2 +
            this.containerRect.top +
            this.scrollTop;
        var originalX;
        var originalY;
        if (scale === 1) {
            this.positionChanged = false;
        }
        var dragAllowedAxises = this.getDragAllowedAxises(0, scaleDiff);
        var allowY = dragAllowedAxises.allowY, allowX = dragAllowedAxises.allowX;
        if (this.positionChanged) {
            originalX = this.left / (this.scale - scaleDiff);
            originalY = this.top / (this.scale - scaleDiff);
            this.pageX = offsetX - originalX;
            this.pageY = offsetY - originalY;
            this.positionChanged = false;
        }
        var possibleSwipeCords = this.getPossibleSwipeDragCords(scaleDiff);
        var x;
        var y;
        var _x = offsetX - this.pageX;
        var _y = offsetY - this.pageY;
        if (scale - scaleDiff > 1) {
            var scaleVal = (scale - scaleDiff) / Math.abs(scaleDiff);
            _x =
                (scaleDiff < 0 ? -_x : _x) +
                    this.left * (scaleVal + (scaleDiff < 0 ? -1 : 1));
            _y =
                (scaleDiff < 0 ? -_y : _y) +
                    this.top * (scaleVal + (scaleDiff < 0 ? -1 : 1));
            x = _x / scaleVal;
            y = _y / scaleVal;
        }
        else {
            var scaleVal = (scale - scaleDiff) * scaleDiff;
            x = _x * scaleVal;
            y = _y * scaleVal;
        }
        if (reposition) {
            if (allowX) {
                if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
                    x = possibleSwipeCords.minX;
                }
                else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
                    x = possibleSwipeCords.maxX;
                }
            }
            else {
                if (scale > 1) {
                    if (x < possibleSwipeCords.minX) {
                        x = possibleSwipeCords.minX;
                    }
                    else if (x > possibleSwipeCords.maxX) {
                        x = possibleSwipeCords.maxX;
                    }
                }
            }
            // @todo fix this
            if (allowY) {
                if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
                    y = possibleSwipeCords.minY;
                }
                else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
                    y = possibleSwipeCords.maxY;
                }
            }
            else {
                // If the translate value based on index of beyond the viewport, utilize the available space to prevent image being cut out
                if (scale > 1) {
                    //If image goes beyond viewport top, use the minim possible translate value
                    if (y < possibleSwipeCords.minY) {
                        y = possibleSwipeCords.minY;
                    }
                    else if (y > possibleSwipeCords.maxY) {
                        y = possibleSwipeCords.maxY;
                    }
                }
            }
        }
        this.setZoomStyles({
            x: x,
            y: y,
            scale: scale,
        });
        this.left = x;
        this.top = y;
        if (resetToMax) {
            this.setZoomImageSize();
        }
    };
    Zoom.prototype.resetImageTranslate = function (index) {
        if (!this.isImageSlide(index)) {
            return;
        }
        var $image = this.core.getSlideItem(index).find('.lg-image').first();
        this.imageReset = false;
        $image.removeClass('reset-transition reset-transition-y reset-transition-x');
        this.core.outer.removeClass('lg-actual-size');
        $image.css('width', 'auto').css('height', 'auto');
        setTimeout(function () {
            $image.removeClass('no-transition');
        }, 10);
    };
    Zoom.prototype.setZoomImageSize = function () {
        var _this = this;
        var $image = this.core
            .getSlideItem(this.core.index)
            .find('.lg-image')
            .first();
        setTimeout(function () {
            var actualSizeScale = _this.getCurrentImageActualSizeScale();
            if (_this.scale >= actualSizeScale) {
                $image.addClass('no-transition');
                _this.imageReset = true;
            }
        }, ZOOM_TRANSITION_DURATION);
        setTimeout(function () {
            var actualSizeScale = _this.getCurrentImageActualSizeScale();
            if (_this.scale >= actualSizeScale) {
                var dragAllowedAxises = _this.getDragAllowedAxises(_this.scale);
                $image
                    .css('width', $image.get().naturalWidth + 'px')
                    .css('height', $image.get().naturalHeight + 'px');
                _this.core.outer.addClass('lg-actual-size');
                if (dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
                    $image.addClass('reset-transition');
                }
                else if (dragAllowedAxises.allowX &&
                    !dragAllowedAxises.allowY) {
                    $image.addClass('reset-transition-x');
                }
                else if (!dragAllowedAxises.allowX &&
                    dragAllowedAxises.allowY) {
                    $image.addClass('reset-transition-y');
                }
            }
        }, ZOOM_TRANSITION_DURATION + 50);
    };
    /**
     * @desc apply scale3d to image and translate to image wrap
     * @param {style} X,Y and scale
     */
    Zoom.prototype.setZoomStyles = function (style) {
        var $imageWrap = this.core
            .getSlideItem(this.core.index)
            .find('.lg-img-wrap')
            .first();
        var $image = this.core
            .getSlideItem(this.core.index)
            .find('.lg-image')
            .first();
        var $dummyImage = this.core.outer
            .find('.lg-current .lg-dummy-img')
            .first();
        this.scale = style.scale;
        $image.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
        $dummyImage.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
        var transform = 'translate3d(' + style.x + 'px, ' + style.y + 'px, 0)';
        $imageWrap.css('transform', transform);
    };
    /**
     * @param index - Index of the current slide
     * @param event - event will be available only if the function is called on clicking/taping the imags
     */
    Zoom.prototype.setActualSize = function (index, event) {
        var _this = this;
        if (this.zoomInProgress) {
            return;
        }
        this.zoomInProgress = true;
        var currentItem = this.core.galleryItems[this.core.index];
        this.resetImageTranslate(index);
        setTimeout(function () {
            // Allow zoom only on image
            if (!currentItem.src ||
                _this.core.outer.hasClass('lg-first-slide-loading')) {
                return;
            }
            var scale = _this.getCurrentImageActualSizeScale();
            var prevScale = _this.scale;
            if (_this.core.outer.hasClass('lg-zoomed')) {
                _this.scale = 1;
            }
            else {
                _this.scale = _this.getScale(scale);
            }
            _this.setPageCords(event);
            _this.beginZoom(_this.scale);
            _this.zoomImage(_this.scale, _this.scale - prevScale, true, true);
        }, 50);
        setTimeout(function () {
            _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
        }, 60);
        setTimeout(function () {
            _this.zoomInProgress = false;
        }, ZOOM_TRANSITION_DURATION + 110);
    };
    Zoom.prototype.getNaturalWidth = function (index) {
        var $image = this.core.getSlideItem(index).find('.lg-image').first();
        var naturalWidth = this.core.galleryItems[index].width;
        return naturalWidth
            ? parseFloat(naturalWidth)
            : $image.get().naturalWidth;
    };
    Zoom.prototype.getActualSizeScale = function (naturalWidth, width) {
        var _scale;
        var scale;
        if (naturalWidth >= width) {
            _scale = naturalWidth / width;
            scale = _scale || 2;
        }
        else {
            scale = 1;
        }
        return scale;
    };
    Zoom.prototype.getCurrentImageActualSizeScale = function () {
        var $image = this.core
            .getSlideItem(this.core.index)
            .find('.lg-image')
            .first();
        var width = $image.get().offsetWidth;
        var naturalWidth = this.getNaturalWidth(this.core.index) || width;
        return this.getActualSizeScale(naturalWidth, width);
    };
    Zoom.prototype.getPageCords = function (event) {
        var cords = {};
        if (event) {
            cords.x = event.pageX || event.touches[0].pageX;
            cords.y = event.pageY || event.touches[0].pageY;
        }
        else {
            var containerRect = this.core.$content
                .get()
                .getBoundingClientRect();
            cords.x = containerRect.width / 2 + containerRect.left;
            cords.y =
                containerRect.height / 2 + this.scrollTop + containerRect.top;
        }
        return cords;
    };
    Zoom.prototype.setPageCords = function (event) {
        var pageCords = this.getPageCords(event);
        this.pageX = pageCords.x;
        this.pageY = pageCords.y;
    };
    Zoom.prototype.manageActualPixelClassNames = function () {
        var $actualSize = this.core.getElementById('lg-actual-size');
        $actualSize
            .removeClass(this.settings.actualSizeIcons.zoomIn)
            .addClass(this.settings.actualSizeIcons.zoomOut);
    };
    // If true, zoomed - in else zoomed out
    Zoom.prototype.beginZoom = function (scale) {
        this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
        if (scale > 1) {
            this.core.outer.addClass('lg-zoomed');
            this.manageActualPixelClassNames();
        }
        else {
            this.resetZoom();
        }
        return scale > 1;
    };
    Zoom.prototype.getScale = function (scale) {
        var actualSizeScale = this.getCurrentImageActualSizeScale();
        if (scale < 1) {
            scale = 1;
        }
        else if (scale > actualSizeScale) {
            scale = actualSizeScale;
        }
        return scale;
    };
    Zoom.prototype.init = function () {
        var _this = this;
        if (!this.settings.zoom) {
            return;
        }
        this.buildTemplates();
        this.enableZoomOnSlideItemLoad();
        var tapped = null;
        this.core.outer.on('dblclick.lg', function (event) {
            if (!_this.$LG(event.target).hasClass('lg-image')) {
                return;
            }
            _this.setActualSize(_this.core.index, event);
        });
        this.core.outer.on('touchstart.lg', function (event) {
            var $target = _this.$LG(event.target);
            if (event.touches.length === 1 && $target.hasClass('lg-image')) {
                if (!tapped) {
                    tapped = setTimeout(function () {
                        tapped = null;
                    }, 300);
                }
                else {
                    clearTimeout(tapped);
                    tapped = null;
                    event.preventDefault();
                    _this.setActualSize(_this.core.index, event);
                }
            }
        });
        this.core.LGel.on(lGEvents.containerResize + ".zoom " + lGEvents.rotateRight + ".zoom " + lGEvents.rotateLeft + ".zoom " + lGEvents.flipHorizontal + ".zoom " + lGEvents.flipVertical + ".zoom", function () {
            if (!_this.core.lgOpened ||
                !_this.isImageSlide(_this.core.index) ||
                _this.core.touchAction) {
                return;
            }
            var _LGel = _this.core
                .getSlideItem(_this.core.index)
                .find('.lg-img-wrap')
                .first();
            _this.top = 0;
            _this.left = 0;
            _this.setZoomEssentials();
            _this.setZoomSwipeStyles(_LGel, { x: 0, y: 0 });
            _this.positionChanged = true;
        });
        // Update zoom on resize and orientationchange
        this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function () {
            if (!_this.core.lgOpened)
                return;
            _this.scrollTop = _this.$LG(window).scrollTop();
        });
        this.core.getElementById('lg-zoom-out').on('click.lg', function () {
            // Allow zoom only on image
            if (!_this.isImageSlide(_this.core.index)) {
                return;
            }
            var timeout = 0;
            if (_this.imageReset) {
                _this.resetImageTranslate(_this.core.index);
                timeout = 50;
            }
            setTimeout(function () {
                var scale = _this.scale - _this.settings.scale;
                if (scale < 1) {
                    scale = 1;
                }
                _this.beginZoom(scale);
                _this.zoomImage(scale, -_this.settings.scale, true, !_this.settings.infiniteZoom);
            }, timeout);
        });
        this.core.getElementById('lg-zoom-in').on('click.lg', function () {
            _this.zoomIn();
        });
        this.core.getElementById('lg-actual-size').on('click.lg', function () {
            _this.setActualSize(_this.core.index);
        });
        this.core.LGel.on(lGEvents.beforeOpen + ".zoom", function () {
            _this.core.outer.find('.lg-item').removeClass('lg-zoomable');
        });
        this.core.LGel.on(lGEvents.afterOpen + ".zoom", function () {
            _this.scrollTop = _this.$LG(window).scrollTop();
            // Set the initial value center
            _this.pageX = _this.core.outer.width() / 2;
            _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
            _this.scale = 1;
        });
        // Reset zoom on slide change
        this.core.LGel.on(lGEvents.afterSlide + ".zoom", function (event) {
            var prevIndex = event.detail.prevIndex;
            _this.scale = 1;
            _this.positionChanged = false;
            _this.zoomInProgress = false;
            _this.resetZoom(prevIndex);
            _this.resetImageTranslate(prevIndex);
            if (_this.isImageSlide(_this.core.index)) {
                _this.setZoomEssentials();
            }
        });
        // Drag option after zoom
        this.zoomDrag();
        this.pinchZoom();
        this.zoomSwipe();
        // Store the zoomable timeout value just to clear it while closing
        this.zoomableTimeout = false;
        this.positionChanged = false;
        this.zoomInProgress = false;
    };
    Zoom.prototype.zoomIn = function () {
        // Allow zoom only on image
        if (!this.isImageSlide(this.core.index)) {
            return;
        }
        var scale = this.scale + this.settings.scale;
        if (!this.settings.infiniteZoom) {
            scale = this.getScale(scale);
        }
        this.beginZoom(scale);
        this.zoomImage(scale, Math.min(this.settings.scale, scale - this.scale), true, !this.settings.infiniteZoom);
    };
    // Reset zoom effect
    Zoom.prototype.resetZoom = function (index) {
        this.core.outer.removeClass('lg-zoomed lg-zoom-drag-transition');
        var $actualSize = this.core.getElementById('lg-actual-size');
        var $item = this.core.getSlideItem(index !== undefined ? index : this.core.index);
        $actualSize
            .removeClass(this.settings.actualSizeIcons.zoomOut)
            .addClass(this.settings.actualSizeIcons.zoomIn);
        $item.find('.lg-img-wrap').first().removeAttr('style');
        $item.find('.lg-image').first().removeAttr('style');
        this.scale = 1;
        this.left = 0;
        this.top = 0;
        // Reset pagx pagy values to center
        this.setPageCords();
    };
    Zoom.prototype.getTouchDistance = function (e) {
        return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) *
            (e.touches[0].pageX - e.touches[1].pageX) +
            (e.touches[0].pageY - e.touches[1].pageY) *
                (e.touches[0].pageY - e.touches[1].pageY));
    };
    Zoom.prototype.pinchZoom = function () {
        var _this = this;
        var startDist = 0;
        var pinchStarted = false;
        var initScale = 1;
        var prevScale = 0;
        var $item = this.core.getSlideItem(this.core.index);
        this.core.outer.on('touchstart.lg', function (e) {
            $item = _this.core.getSlideItem(_this.core.index);
            if (!_this.isImageSlide(_this.core.index)) {
                return;
            }
            if (e.touches.length === 2) {
                e.preventDefault();
                if (_this.core.outer.hasClass('lg-first-slide-loading')) {
                    return;
                }
                initScale = _this.scale || 1;
                _this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
                _this.setPageCords(e);
                _this.resetImageTranslate(_this.core.index);
                _this.core.touchAction = 'pinch';
                startDist = _this.getTouchDistance(e);
            }
        });
        this.core.$inner.on('touchmove.lg', function (e) {
            if (e.touches.length === 2 &&
                _this.core.touchAction === 'pinch' &&
                (_this.$LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target))) {
                e.preventDefault();
                var endDist = _this.getTouchDistance(e);
                var distance = startDist - endDist;
                if (!pinchStarted && Math.abs(distance) > 5) {
                    pinchStarted = true;
                }
                if (pinchStarted) {
                    prevScale = _this.scale;
                    var _scale = Math.max(1, initScale + -distance * 0.02);
                    _this.scale =
                        Math.round((_scale + Number.EPSILON) * 100) / 100;
                    var diff = _this.scale - prevScale;
                    _this.zoomImage(_this.scale, Math.round((diff + Number.EPSILON) * 100) / 100, false, false);
                }
            }
        });
        this.core.$inner.on('touchend.lg', function (e) {
            if (_this.core.touchAction === 'pinch' &&
                (_this.$LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target))) {
                pinchStarted = false;
                startDist = 0;
                if (_this.scale <= 1) {
                    _this.resetZoom();
                }
                else {
                    var actualSizeScale = _this.getCurrentImageActualSizeScale();
                    if (_this.scale >= actualSizeScale) {
                        var scaleDiff = actualSizeScale - _this.scale;
                        if (scaleDiff === 0) {
                            scaleDiff = 0.01;
                        }
                        _this.zoomImage(actualSizeScale, scaleDiff, false, true);
                    }
                    _this.manageActualPixelClassNames();
                    _this.core.outer.addClass('lg-zoomed');
                }
                _this.core.touchAction = undefined;
            }
        });
    };
    Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, touchDuration) {
        var distanceXnew = endCoords.x - startCoords.x;
        var distanceYnew = endCoords.y - startCoords.y;
        var speedX = Math.abs(distanceXnew) / touchDuration + 1;
        var speedY = Math.abs(distanceYnew) / touchDuration + 1;
        if (speedX > 2) {
            speedX += 1;
        }
        if (speedY > 2) {
            speedY += 1;
        }
        distanceXnew = distanceXnew * speedX;
        distanceYnew = distanceYnew * speedY;
        var _LGel = this.core
            .getSlideItem(this.core.index)
            .find('.lg-img-wrap')
            .first();
        var distance = {};
        distance.x = this.left + distanceXnew;
        distance.y = this.top + distanceYnew;
        var possibleSwipeCords = this.getPossibleSwipeDragCords();
        if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
            if (allowY) {
                if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
                    distance.y = possibleSwipeCords.minY;
                }
                else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
                    distance.y = possibleSwipeCords.maxY;
                }
            }
            if (allowX) {
                if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
                    distance.x = possibleSwipeCords.minX;
                }
                else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
                    distance.x = possibleSwipeCords.maxX;
                }
            }
            if (allowY) {
                this.top = distance.y;
            }
            else {
                distance.y = this.top;
            }
            if (allowX) {
                this.left = distance.x;
            }
            else {
                distance.x = this.left;
            }
            this.setZoomSwipeStyles(_LGel, distance);
            this.positionChanged = true;
        }
    };
    Zoom.prototype.getZoomSwipeCords = function (startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
        var distance = {};
        if (allowY) {
            distance.y = this.top + (endCoords.y - startCoords.y);
            if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
                var diffMinY = possibleSwipeCords.minY - distance.y;
                distance.y = possibleSwipeCords.minY - diffMinY / 6;
            }
            else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
                var diffMaxY = distance.y - possibleSwipeCords.maxY;
                distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
            }
        }
        else {
            distance.y = this.top;
        }
        if (allowX) {
            distance.x = this.left + (endCoords.x - startCoords.x);
            if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
                var diffMinX = possibleSwipeCords.minX - distance.x;
                distance.x = possibleSwipeCords.minX - diffMinX / 6;
            }
            else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
                var difMaxX = distance.x - possibleSwipeCords.maxX;
                distance.x = possibleSwipeCords.maxX + difMaxX / 6;
            }
        }
        else {
            distance.x = this.left;
        }
        return distance;
    };
    Zoom.prototype.isBeyondPossibleLeft = function (x, minX) {
        return x >= minX;
    };
    Zoom.prototype.isBeyondPossibleRight = function (x, maxX) {
        return x <= maxX;
    };
    Zoom.prototype.isBeyondPossibleTop = function (y, minY) {
        return y >= minY;
    };
    Zoom.prototype.isBeyondPossibleBottom = function (y, maxY) {
        return y <= maxY;
    };
    Zoom.prototype.isImageSlide = function (index) {
        var currentItem = this.core.galleryItems[index];
        return this.core.getSlideType(currentItem) === 'image';
    };
    Zoom.prototype.getPossibleSwipeDragCords = function (scale) {
        var $image = this.core
            .getSlideItem(this.core.index)
            .find('.lg-image')
            .first();
        var bottom = this.core.mediaContainerPosition.bottom;
        var imgRect = $image.get().getBoundingClientRect();
        var imageHeight = imgRect.height;
        var imageWidth = imgRect.width;
        if (scale) {
            imageHeight = imageHeight + scale * imageHeight;
            imageWidth = imageWidth + scale * imageWidth;
        }
        var minY = (imageHeight - this.containerRect.height) / 2;
        var maxY = (this.containerRect.height - imageHeight) / 2 + bottom;
        var minX = (imageWidth - this.containerRect.width) / 2;
        var maxX = (this.containerRect.width - imageWidth) / 2;
        var possibleSwipeCords = {
            minY: minY,
            maxY: maxY,
            minX: minX,
            maxX: maxX,
        };
        return possibleSwipeCords;
    };
    Zoom.prototype.setZoomSwipeStyles = function (LGel, distance) {
        LGel.css('transform', 'translate3d(' + distance.x + 'px, ' + distance.y + 'px, 0)');
    };
    Zoom.prototype.zoomSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;
        // Allow x direction drag
        var allowX = false;
        // Allow Y direction drag
        var allowY = false;
        var startTime = new Date();
        var endTime = new Date();
        var possibleSwipeCords;
        var _LGel;
        var $item = this.core.getSlideItem(this.core.index);
        this.core.$inner.on('touchstart.lg', function (e) {
            // Allow zoom only on image
            if (!_this.isImageSlide(_this.core.index)) {
                return;
            }
            $item = _this.core.getSlideItem(_this.core.index);
            if ((_this.$LG(e.target).hasClass('lg-item') ||
                $item.get().contains(e.target)) &&
                e.touches.length === 1 &&
                _this.core.outer.hasClass('lg-zoomed')) {
                e.preventDefault();
                startTime = new Date();
                _this.core.touchAction = 'zoomSwipe';
                _LGel = _this.core
                    .getSlideItem(_this.core.index)
                    .find('.lg-img-wrap')
                    .first();
                var dragAllowedAxises = _this.getDragAllowedAxises(0);
                allowY = dragAllowedAxises.allowY;
                allowX = dragAllowedAxises.allowX;
                if (allowX || allowY) {
                    startCoords = _this.getSwipeCords(e);
                }
                possibleSwipeCords = _this.getPossibleSwipeDragCords();
                // reset opacity and transition duration
                _this.core.outer.addClass('lg-zoom-dragging lg-zoom-drag-transition');
            }
        });
        this.core.$inner.on('touchmove.lg', function (e) {
            if (e.touches.length === 1 &&
                _this.core.touchAction === 'zoomSwipe' &&
                (_this.$LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target))) {
                e.preventDefault();
                _this.core.touchAction = 'zoomSwipe';
                endCoords = _this.getSwipeCords(e);
                var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
                if (Math.abs(endCoords.x - startCoords.x) > 15 ||
                    Math.abs(endCoords.y - startCoords.y) > 15) {
                    isMoved = true;
                    _this.setZoomSwipeStyles(_LGel, distance);
                }
            }
        });
        this.core.$inner.on('touchend.lg', function (e) {
            if (_this.core.touchAction === 'zoomSwipe' &&
                (_this.$LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target))) {
                e.preventDefault();
                _this.core.touchAction = undefined;
                _this.core.outer.removeClass('lg-zoom-dragging');
                if (!isMoved) {
                    return;
                }
                isMoved = false;
                endTime = new Date();
                var touchDuration = endTime.valueOf() - startTime.valueOf();
                _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
            }
        });
    };
    Zoom.prototype.zoomDrag = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDragging = false;
        var isMoved = false;
        // Allow x direction drag
        var allowX = false;
        // Allow Y direction drag
        var allowY = false;
        var startTime;
        var endTime;
        var possibleSwipeCords;
        var _LGel;
        this.core.outer.on('mousedown.lg.zoom', function (e) {
            // Allow zoom only on image
            if (!_this.isImageSlide(_this.core.index)) {
                return;
            }
            var $item = _this.core.getSlideItem(_this.core.index);
            if (_this.$LG(e.target).hasClass('lg-item') ||
                $item.get().contains(e.target)) {
                startTime = new Date();
                _LGel = _this.core
                    .getSlideItem(_this.core.index)
                    .find('.lg-img-wrap')
                    .first();
                var dragAllowedAxises = _this.getDragAllowedAxises(0);
                allowY = dragAllowedAxises.allowY;
                allowX = dragAllowedAxises.allowX;
                if (_this.core.outer.hasClass('lg-zoomed')) {
                    if (_this.$LG(e.target).hasClass('lg-object') &&
                        (allowX || allowY)) {
                        e.preventDefault();
                        startCoords = _this.getDragCords(e);
                        possibleSwipeCords = _this.getPossibleSwipeDragCords();
                        isDragging = true;
                        _this.core.outer
                            .removeClass('lg-grab')
                            .addClass('lg-grabbing lg-zoom-drag-transition lg-zoom-dragging');
                        // reset opacity and transition duration
                    }
                }
            }
        });
        this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (e) {
            if (isDragging) {
                isMoved = true;
                endCoords = _this.getDragCords(e);
                var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
                _this.setZoomSwipeStyles(_LGel, distance);
            }
        });
        this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (e) {
            if (isDragging) {
                endTime = new Date();
                isDragging = false;
                _this.core.outer.removeClass('lg-zoom-dragging');
                // Fix for chrome mouse move on click
                if (isMoved &&
                    (startCoords.x !== endCoords.x ||
                        startCoords.y !== endCoords.y)) {
                    endCoords = _this.getDragCords(e);
                    var touchDuration = endTime.valueOf() - startTime.valueOf();
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
                }
                isMoved = false;
            }
            _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
        });
    };
    Zoom.prototype.closeGallery = function () {
        this.resetZoom();
        this.zoomInProgress = false;
    };
    Zoom.prototype.destroy = function () {
        // Unbind all events added by lightGallery zoom plugin
        this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
        this.core.LGel.off('.lg.zoom');
        this.core.LGel.off('.zoom');
        clearTimeout(this.zoomableTimeout);
        this.zoomableTimeout = false;
    };
    return Zoom;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zoom);
//# sourceMappingURL=lg-zoom.es5.js.map


/***/ }),

/***/ "./node_modules/lightgallery/react/Lightgallery.es5.js":
/*!*************************************************************!*\
  !*** ./node_modules/lightgallery/react/Lightgallery.es5.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var lightGalleryCoreSettings = {
    mode: 'lg-slide',
    easing: 'ease',
    speed: 400,
    licenseKey: '0000-0000-000-0000',
    height: '100%',
    width: '100%',
    addClass: '',
    startClass: 'lg-start-zoom',
    backdropDuration: 300,
    container: '',
    startAnimationDuration: 400,
    zoomFromOrigin: true,
    hideBarsDelay: 0,
    showBarsAfter: 10000,
    slideDelay: 0,
    supportLegacyBrowser: true,
    allowMediaOverlap: false,
    videoMaxSize: '1280-720',
    loadYouTubePoster: true,
    defaultCaptionHeight: 0,
    ariaLabelledby: '',
    ariaDescribedby: '',
    resetScrollPosition: true,
    hideScrollbar: false,
    closable: true,
    swipeToClose: true,
    closeOnTap: true,
    showCloseIcon: true,
    showMaximizeIcon: false,
    loop: true,
    escKey: true,
    keyPress: true,
    trapFocus: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    appendSubHtmlTo: '.lg-sub-html',
    subHtmlSelectorRelative: false,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    selector: '',
    selectWithin: '',
    nextHtml: '',
    prevHtml: '',
    index: 0,
    iframeWidth: '100%',
    iframeHeight: '100%',
    iframeMaxWidth: '100%',
    iframeMaxHeight: '100%',
    download: true,
    counter: true,
    appendCounterTo: '.lg-toolbar',
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: '',
    isMobile: undefined,
    mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
    },
    plugins: [],
    strings: {
        closeGallery: 'Close gallery',
        toggleMaximize: 'Toggle maximize',
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        download: 'Download',
        playVideo: 'Play video',
        mediaLoadingFailed: 'Oops... Failed to load content...',
    },
};

function initLgPolyfills() {
    (function () {
        if (typeof window.CustomEvent === 'function')
            return false;
        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: null,
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    })();
    (function () {
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector;
        }
    })();
}
var lgQuery = /** @class */ (function () {
    function lgQuery(selector) {
        this.cssVenderPrefixes = [
            'TransitionDuration',
            'TransitionTimingFunction',
            'Transform',
            'Transition',
        ];
        this.selector = this._getSelector(selector);
        this.firstElement = this._getFirstEl();
        return this;
    }
    lgQuery.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    lgQuery.prototype._getSelector = function (selector, context) {
        if (context === void 0) { context = document; }
        if (typeof selector !== 'string') {
            return selector;
        }
        context = context || document;
        var fl = selector.substring(0, 1);
        if (fl === '#') {
            return context.querySelector(selector);
        }
        else {
            return context.querySelectorAll(selector);
        }
    };
    lgQuery.prototype._each = function (func) {
        if (!this.selector) {
            return this;
        }
        if (this.selector.length !== undefined) {
            [].forEach.call(this.selector, func);
        }
        else {
            func(this.selector, 0);
        }
        return this;
    };
    lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
        // prettier-ignore
        var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        });
        if (this.cssVenderPrefixes.indexOf(property) !== -1) {
            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        }
        else {
            el.style[property] = value;
        }
    };
    lgQuery.prototype._getFirstEl = function () {
        if (this.selector && this.selector.length !== undefined) {
            return this.selector[0];
        }
        else {
            return this.selector;
        }
    };
    lgQuery.prototype.isEventMatched = function (event, eventName) {
        var eventNamespace = eventName.split('.');
        return event
            .split('.')
            .filter(function (e) { return e; })
            .every(function (e) {
            return eventNamespace.indexOf(e) !== -1;
        });
    };
    lgQuery.prototype.attr = function (attr, value) {
        if (value === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.getAttribute(attr);
        }
        this._each(function (el) {
            el.setAttribute(attr, value);
        });
        return this;
    };
    lgQuery.prototype.find = function (selector) {
        return $LG(this._getSelector(selector, this.selector));
    };
    lgQuery.prototype.first = function () {
        if (this.selector && this.selector.length !== undefined) {
            return $LG(this.selector[0]);
        }
        else {
            return $LG(this.selector);
        }
    };
    lgQuery.prototype.eq = function (index) {
        return $LG(this.selector[index]);
    };
    lgQuery.prototype.parent = function () {
        return $LG(this.selector.parentElement);
    };
    lgQuery.prototype.get = function () {
        return this._getFirstEl();
    };
    lgQuery.prototype.removeAttr = function (attributes) {
        var attrs = attributes.split(' ');
        this._each(function (el) {
            attrs.forEach(function (attr) { return el.removeAttribute(attr); });
        });
        return this;
    };
    lgQuery.prototype.wrap = function (className) {
        if (!this.firstElement) {
            return this;
        }
        var wrapper = document.createElement('div');
        wrapper.className = className;
        this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
        this.firstElement.parentNode.removeChild(this.firstElement);
        wrapper.appendChild(this.firstElement);
        return this;
    };
    lgQuery.prototype.addClass = function (classNames) {
        if (classNames === void 0) { classNames = ''; }
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.add(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.removeClass = function (classNames) {
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.remove(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.hasClass = function (className) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.classList.contains(className);
    };
    lgQuery.prototype.hasAttribute = function (attribute) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.hasAttribute(attribute);
    };
    lgQuery.prototype.toggleClass = function (className) {
        if (!this.firstElement) {
            return this;
        }
        if (this.hasClass(className)) {
            this.removeClass(className);
        }
        else {
            this.addClass(className);
        }
        return this;
    };
    lgQuery.prototype.css = function (property, value) {
        var _this = this;
        this._each(function (el) {
            _this._setCssVendorPrefix(el, property, value);
        });
        return this;
    };
    // Need to pass separate namespaces for separate elements
    lgQuery.prototype.on = function (events, listener) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        events.split(' ').forEach(function (event) {
            if (!Array.isArray(lgQuery.eventListeners[event])) {
                lgQuery.eventListeners[event] = [];
            }
            lgQuery.eventListeners[event].push(listener);
            _this.selector.addEventListener(event.split('.')[0], listener);
        });
        return this;
    };
    // @todo - test this
    lgQuery.prototype.once = function (event, listener) {
        var _this = this;
        this.on(event, function () {
            _this.off(event);
            listener(event);
        });
        return this;
    };
    lgQuery.prototype.off = function (event) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
            if (_this.isEventMatched(event, eventName)) {
                lgQuery.eventListeners[eventName].forEach(function (listener) {
                    _this.selector.removeEventListener(eventName.split('.')[0], listener);
                });
                lgQuery.eventListeners[eventName] = [];
            }
        });
        return this;
    };
    lgQuery.prototype.trigger = function (event, detail) {
        if (!this.firstElement) {
            return this;
        }
        var customEvent = new CustomEvent(event.split('.')[0], {
            detail: detail || null,
        });
        this.firstElement.dispatchEvent(customEvent);
        return this;
    };
    // Does not support IE
    lgQuery.prototype.load = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) {
            _this.selector.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.html = function (html) {
        if (html === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.innerHTML;
        }
        this._each(function (el) {
            el.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.append = function (html) {
        this._each(function (el) {
            if (typeof html === 'string') {
                el.insertAdjacentHTML('beforeend', html);
            }
            else {
                el.appendChild(html);
            }
        });
        return this;
    };
    lgQuery.prototype.prepend = function (html) {
        this._each(function (el) {
            el.insertAdjacentHTML('afterbegin', html);
        });
        return this;
    };
    lgQuery.prototype.remove = function () {
        this._each(function (el) {
            el.parentNode.removeChild(el);
        });
        return this;
    };
    lgQuery.prototype.empty = function () {
        this._each(function (el) {
            el.innerHTML = '';
        });
        return this;
    };
    lgQuery.prototype.scrollTop = function (scrollTop) {
        if (scrollTop !== undefined) {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            return this;
        }
        else {
            return (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0);
        }
    };
    lgQuery.prototype.scrollLeft = function (scrollLeft) {
        if (scrollLeft !== undefined) {
            document.body.scrollLeft = scrollLeft;
            document.documentElement.scrollLeft = scrollLeft;
            return this;
        }
        else {
            return (window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0);
        }
    };
    lgQuery.prototype.offset = function () {
        if (!this.firstElement) {
            return {
                left: 0,
                top: 0,
            };
        }
        var rect = this.firstElement.getBoundingClientRect();
        var bodyMarginLeft = $LG('body').style().marginLeft;
        // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
        return {
            left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
            top: rect.top + this.scrollTop(),
        };
    };
    lgQuery.prototype.style = function () {
        if (!this.firstElement) {
            return {};
        }
        return (this.firstElement.currentStyle ||
            window.getComputedStyle(this.firstElement));
    };
    // Width without padding and border even if box-sizing is used.
    lgQuery.prototype.width = function () {
        var style = this.style();
        return (this.firstElement.clientWidth -
            parseFloat(style.paddingLeft) -
            parseFloat(style.paddingRight));
    };
    // Height without padding and border even if box-sizing is used.
    lgQuery.prototype.height = function () {
        var style = this.style();
        return (this.firstElement.clientHeight -
            parseFloat(style.paddingTop) -
            parseFloat(style.paddingBottom));
    };
    lgQuery.eventListeners = {};
    return lgQuery;
}());
function $LG(selector) {
    initLgPolyfills();
    return new lgQuery(selector);
}

var defaultDynamicOptions = [
    'src',
    'sources',
    'subHtml',
    'subHtmlUrl',
    'html',
    'video',
    'poster',
    'slideName',
    'responsive',
    'srcset',
    'sizes',
    'iframe',
    'downloadUrl',
    'download',
    'width',
    'facebookShareUrl',
    'tweetText',
    'iframeTitle',
    'twitterShareUrl',
    'pinterestShareUrl',
    'pinterestText',
    'fbHtml',
    'disqusIdentifier',
    'disqusUrl',
];
// Convert html data-attribute to camalcase
function convertToData(attr) {
    // FInd a way for lgsize
    if (attr === 'href') {
        return 'src';
    }
    attr = attr.replace('data-', '');
    attr = attr.charAt(0).toLowerCase() + attr.slice(1);
    attr = attr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return attr;
}
var utils = {
    /**
     * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
     */
    getSize: function (el, container, spacing, defaultLgSize) {
        if (spacing === void 0) { spacing = 0; }
        var LGel = $LG(el);
        var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
        if (!lgSize) {
            return;
        }
        var isResponsiveSizes = lgSize.split(',');
        // if at-least two viewport sizes are available
        if (isResponsiveSizes[1]) {
            var wWidth = window.innerWidth;
            for (var i = 0; i < isResponsiveSizes.length; i++) {
                var size_1 = isResponsiveSizes[i];
                var responsiveWidth = parseInt(size_1.split('-')[2], 10);
                if (responsiveWidth > wWidth) {
                    lgSize = size_1;
                    break;
                }
                // take last item as last option
                if (i === isResponsiveSizes.length - 1) {
                    lgSize = size_1;
                }
            }
        }
        var size = lgSize.split('-');
        var width = parseInt(size[0], 10);
        var height = parseInt(size[1], 10);
        var cWidth = container.width();
        var cHeight = container.height() - spacing;
        var maxWidth = Math.min(cWidth, width);
        var maxHeight = Math.min(cHeight, height);
        var ratio = Math.min(maxWidth / width, maxHeight / height);
        return { width: width * ratio, height: height * ratio };
    },
    /**
     * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
     * @param {jQuery Element}
     * @returns {String} Transform CSS string
     */
    getTransform: function (el, container, top, bottom, imageSize) {
        if (!imageSize) {
            return;
        }
        var LGel = $LG(el).find('img').first();
        if (!LGel.get()) {
            return;
        }
        var containerRect = container.get().getBoundingClientRect();
        var wWidth = containerRect.width;
        // using innerWidth to include mobile safari bottom bar
        var wHeight = container.height() - (top + bottom);
        var elWidth = LGel.width();
        var elHeight = LGel.height();
        var elStyle = LGel.style();
        var x = (wWidth - elWidth) / 2 -
            LGel.offset().left +
            (parseFloat(elStyle.paddingLeft) || 0) +
            (parseFloat(elStyle.borderLeft) || 0) +
            $LG(window).scrollLeft() +
            containerRect.left;
        var y = (wHeight - elHeight) / 2 -
            LGel.offset().top +
            (parseFloat(elStyle.paddingTop) || 0) +
            (parseFloat(elStyle.borderTop) || 0) +
            $LG(window).scrollTop() +
            top;
        var scX = elWidth / imageSize.width;
        var scY = elHeight / imageSize.height;
        var transform = 'translate3d(' +
            (x *= -1) +
            'px, ' +
            (y *= -1) +
            'px, 0) scale3d(' +
            scX +
            ', ' +
            scY +
            ', 1)';
        return transform;
    },
    getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
        var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
        return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
    },
    getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
        var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
        var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
        var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
        var sourceTag = '';
        if (sources) {
            var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
            sourceTag = sourceObj.map(function (source) {
                var attrs = '';
                Object.keys(source).forEach(function (key) {
                    // Do not remove the first space as it is required to separate the attributes
                    attrs += " " + key + "=\"" + source[key] + "\"";
                });
                return "<source " + attrs + "></source>";
            });
        }
        return "" + sourceTag + imgMarkup;
    },
    // Get src from responsive src
    getResponsiveSrc: function (srcItms) {
        var rsWidth = [];
        var rsSrc = [];
        var src = '';
        for (var i = 0; i < srcItms.length; i++) {
            var _src = srcItms[i].split(' ');
            // Manage empty space
            if (_src[0] === '') {
                _src.splice(0, 1);
            }
            rsSrc.push(_src[0]);
            rsWidth.push(_src[1]);
        }
        var wWidth = window.innerWidth;
        for (var j = 0; j < rsWidth.length; j++) {
            if (parseInt(rsWidth[j], 10) > wWidth) {
                src = rsSrc[j];
                break;
            }
        }
        return src;
    },
    isImageLoaded: function (img) {
        if (!img)
            return false;
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (img.naturalWidth === 0) {
            return false;
        }
        // No other way of checking: assume it’s ok.
        return true;
    },
    getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
        var videoClass = '';
        if (_isVideo && _isVideo.youtube) {
            videoClass = 'lg-has-youtube';
        }
        else if (_isVideo && _isVideo.vimeo) {
            videoClass = 'lg-has-vimeo';
        }
        else {
            videoClass = 'lg-has-html5';
        }
        return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
    },
    getFocusableElements: function (container) {
        var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        var visibleElements = [].filter.call(elements, function (element) {
            var style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden';
        });
        return visibleElements;
    },
    /**
     * @desc Create dynamic elements array from gallery items when dynamic option is false
     * It helps to avoid frequent DOM interaction
     * and avoid multiple checks for dynamic elments
     *
     * @returns {Array} dynamicEl
     */
    getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
        var dynamicElements = [];
        var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
        [].forEach.call(items, function (item) {
            var dynamicEl = {};
            for (var i = 0; i < item.attributes.length; i++) {
                var attr = item.attributes[i];
                if (attr.specified) {
                    var dynamicAttr = convertToData(attr.name);
                    var label = '';
                    if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                        label = dynamicAttr;
                    }
                    if (label) {
                        dynamicEl[label] = attr.value;
                    }
                }
            }
            var currentItem = $LG(item);
            var alt = currentItem.find('img').first().attr('alt');
            var title = currentItem.attr('title');
            var thumb = exThumbImage
                ? currentItem.attr(exThumbImage)
                : currentItem.find('img').first().attr('src');
            dynamicEl.thumb = thumb;
            if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
                dynamicEl.subHtml = title || alt || '';
            }
            dynamicEl.alt = alt || title || '';
            dynamicElements.push(dynamicEl);
        });
        return dynamicElements;
    },
    isMobile: function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    /**
     * @desc Check the given src is video
     * @param {String} src
     * @return {Object} video type
     * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     *
     * @todo - this information can be moved to dynamicEl to avoid frequent calls
     */
    isVideo: function (src, isHTML5VIdeo, index) {
        if (!src) {
            if (isHTML5VIdeo) {
                return {
                    html5: true,
                };
            }
            else {
                console.error('lightGallery :- data-src is not provided on slide item ' +
                    (index + 1) +
                    '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
                return;
            }
        }
        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
        var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
        var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (youtube) {
            return {
                youtube: youtube,
            };
        }
        else if (vimeo) {
            return {
                vimeo: vimeo,
            };
        }
        else if (wistia) {
            return {
                wistia: wistia,
            };
        }
    },
};

// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery
var lgId = 0;
var LightGallery = /** @class */ (function () {
    function LightGallery(element, options) {
        this.lgOpened = false;
        this.index = 0;
        // lightGallery modules
        this.plugins = [];
        // false when lightGallery load first slide content;
        this.lGalleryOn = false;
        // True when a slide animation is in progress
        this.lgBusy = false;
        this.currentItemsInDom = [];
        // Scroll top value before lightGallery is opened
        this.prevScrollTop = 0;
        this.bodyPaddingRight = 0;
        this.isDummyImageRemoved = false;
        this.dragOrSwipeEnabled = false;
        this.mediaContainerPosition = {
            top: 0,
            bottom: 0,
        };
        if (!element) {
            return this;
        }
        lgId++;
        this.lgId = lgId;
        this.el = element;
        this.LGel = $LG(element);
        this.generateSettings(options);
        this.buildModules();
        // When using dynamic mode, ensure dynamicEl is an array
        if (this.settings.dynamic &&
            this.settings.dynamicEl !== undefined &&
            !Array.isArray(this.settings.dynamicEl)) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }
        this.galleryItems = this.getItems();
        this.normalizeSettings();
        // Gallery items
        this.init();
        this.validateLicense();
        return this;
    }
    LightGallery.prototype.generateSettings = function (options) {
        // lightGallery settings
        this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
        if (this.settings.isMobile &&
            typeof this.settings.isMobile === 'function'
            ? this.settings.isMobile()
            : utils.isMobile()) {
            var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = __assign(__assign({}, this.settings), mobileSettings);
        }
    };
    LightGallery.prototype.normalizeSettings = function () {
        if (this.settings.slideEndAnimation) {
            this.settings.hideControlOnEnd = false;
        }
        if (!this.settings.closable) {
            this.settings.swipeToClose = false;
        }
        // And reset it on close to get the correct value next time
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        // At the moment, Zoom from image doesn't support dynamic options
        // @todo add zoomFromOrigin support for dynamic images
        if (this.settings.dynamic) {
            this.zoomFromOrigin = false;
        }
        if (!this.settings.container) {
            this.settings.container = document.body;
        }
        // settings.preload should not be grater than $item.length
        this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
    };
    LightGallery.prototype.init = function () {
        var _this = this;
        this.addSlideVideoInfo(this.galleryItems);
        this.buildStructure();
        this.LGel.trigger(lGEvents.init, {
            instance: this,
        });
        if (this.settings.keyPress) {
            this.keyPress();
        }
        setTimeout(function () {
            _this.enableDrag();
            _this.enableSwipe();
            _this.triggerPosterClick();
        }, 50);
        this.arrow();
        if (this.settings.mousewheel) {
            this.mousewheel();
        }
        if (!this.settings.dynamic) {
            this.openGalleryOnItemClick();
        }
    };
    LightGallery.prototype.openGalleryOnItemClick = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var element = this_1.items[index];
            var $element = $LG(element);
            // Using different namespace for click because click event should not unbind if selector is same object('this')
            // @todo manage all event listners - should have namespace that represent element
            var uuid = lgQuery.generateUUID();
            $element
                .attr('data-lg-id', uuid)
                .on("click.lgcustom-item-" + uuid, function (e) {
                e.preventDefault();
                var currentItemIndex = _this.settings.index || index;
                _this.openGallery(currentItemIndex, element);
            });
        };
        var this_1 = this;
        // Using for loop instead of using bubbling as the items can be any html element.
        for (var index = 0; index < this.items.length; index++) {
            _loop_1(index);
        }
    };
    /**
     * Module constructor
     * Modules are build incrementally.
     * Gallery should be opened only once all the modules are initialized.
     * use moduleBuildTimeout to make sure this
     */
    LightGallery.prototype.buildModules = function () {
        var _this = this;
        this.settings.plugins.forEach(function (plugin) {
            _this.plugins.push(new plugin(_this, $LG));
        });
    };
    LightGallery.prototype.validateLicense = function () {
        if (!this.settings.licenseKey) {
            console.error('Please provide a valid license key');
        }
        else if (this.settings.licenseKey === '0000-0000-000-0000') {
            console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
        }
    };
    LightGallery.prototype.getSlideItem = function (index) {
        return $LG(this.getSlideItemId(index));
    };
    LightGallery.prototype.getSlideItemId = function (index) {
        return "#lg-item-" + this.lgId + "-" + index;
    };
    LightGallery.prototype.getIdName = function (id) {
        return id + "-" + this.lgId;
    };
    LightGallery.prototype.getElementById = function (id) {
        return $LG("#" + this.getIdName(id));
    };
    LightGallery.prototype.manageSingleSlideClassName = function () {
        if (this.galleryItems.length < 2) {
            this.outer.addClass('lg-single-item');
        }
        else {
            this.outer.removeClass('lg-single-item');
        }
    };
    LightGallery.prototype.buildStructure = function () {
        var _this = this;
        var container = this.$container && this.$container.get();
        if (container) {
            return;
        }
        var controls = '';
        var subHtmlCont = '';
        // Create controls
        if (this.settings.controls) {
            controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            subHtmlCont =
                '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
        }
        var addClasses = '';
        if (this.settings.allowMediaOverlap) {
            // Do not remove space before last single quote
            addClasses += 'lg-media-overlap ';
        }
        var ariaLabelledby = this.settings.ariaLabelledby
            ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
            : '';
        var ariaDescribedby = this.settings.ariaDescribedby
            ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
            : '';
        var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
        var closeIcon = this.settings.closable && this.settings.showCloseIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>"
            : '';
        var maximizeIcon = this.settings.showMaximizeIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>"
            : '';
        var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer'
            ? subHtmlCont
            : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html'
            ? subHtmlCont
            : '') + "\n                </div>\n            </div>\n        </div>\n        ";
        $LG(this.settings.container).append(template);
        if (document.body !== this.settings.container) {
            $LG(this.settings.container).css('position', 'relative');
        }
        this.outer = this.getElementById('lg-outer');
        this.$lgComponents = this.getElementById('lg-components');
        this.$backdrop = this.getElementById('lg-backdrop');
        this.$container = this.getElementById('lg-container');
        this.$inner = this.getElementById('lg-inner');
        this.$content = this.getElementById('lg-content');
        this.$toolbar = this.getElementById('lg-toolbar');
        this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
        var outerClassNames = this.settings.mode + " ";
        this.manageSingleSlideClassName();
        if (this.settings.enableDrag) {
            outerClassNames += 'lg-grab ';
        }
        this.outer.addClass(outerClassNames);
        this.$inner.css('transition-timing-function', this.settings.easing);
        this.$inner.css('transition-duration', this.settings.speed + 'ms');
        if (this.settings.download) {
            this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
        }
        this.counter();
        $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
            _this.refreshOnResize();
        });
        this.hideBars();
        this.manageCloseGallery();
        this.toggleMaximize();
        this.initModules();
    };
    LightGallery.prototype.refreshOnResize = function () {
        if (this.lgOpened) {
            var currentGalleryItem = this.galleryItems[this.index];
            var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
            this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            if (__slideVideoInfo) {
                this.resizeVideoSlide(this.index, this.currentImageSize);
            }
            if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                    .find('.lg-current .lg-dummy-img')
                    .first()
                    .attr('style', imgStyle);
            }
            this.LGel.trigger(lGEvents.containerResize);
        }
    };
    LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
        var lgVideoStyle = this.getVideoContStyle(imageSize);
        var currentSlide = this.getSlideItem(index);
        currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
    };
    /**
     * Update slides dynamically.
     * Add, edit or delete slides dynamically when lightGallery is opened.
     * Modify the current gallery items and pass it via updateSlides method
     * @note
     * - Do not mutate existing lightGallery items directly.
     * - Always pass new list of gallery items
     * - You need to take care of thumbnails outside the gallery if any
     * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
     * @param items Gallery items
     * @param index After the update operation, which slide gallery should navigate to
     * @category lGPublicMethods
     * @example
     * const plugin = lightGallery();
     *
     * // Adding slides dynamically
     * let galleryItems = [
     * // Access existing lightGallery items
     * // galleryItems are automatically generated internally from the gallery HTML markup
     * // or directly from galleryItems when dynamic gallery is used
     *   ...plugin.galleryItems,
     *     ...[
     *       {
     *         src: 'img/img-1.png',
     *           thumb: 'img/thumb1.png',
     *         },
     *     ],
     *   ];
     *   plugin.updateSlides(
     *     galleryItems,
     *     plugin.index,
     *   );
     *
     *
     * // Remove slides dynamically
     * galleryItems = JSON.parse(
     *   JSON.stringify(updateSlideInstance.galleryItems),
     * );
     * galleryItems.shift();
     * updateSlideInstance.updateSlides(galleryItems, 1);
     * @see <a href="/demos/update-slides/">Demo</a>
     */
    LightGallery.prototype.updateSlides = function (items, index) {
        if (this.index > items.length - 1) {
            this.index = items.length - 1;
        }
        if (items.length === 1) {
            this.index = 0;
        }
        if (!items.length) {
            this.closeGallery();
            return;
        }
        var currentSrc = this.galleryItems[index].src;
        this.galleryItems = items;
        this.updateControls();
        this.$inner.empty();
        this.currentItemsInDom = [];
        var _index = 0;
        // Find the current index based on source value of the slide
        this.galleryItems.some(function (galleryItem, itemIndex) {
            if (galleryItem.src === currentSrc) {
                _index = itemIndex;
                return true;
            }
            return false;
        });
        this.currentItemsInDom = this.organizeSlideItems(_index, -1);
        this.loadContent(_index, true);
        this.getSlideItem(_index).addClass('lg-current');
        this.index = _index;
        this.updateCurrentCounter(_index);
        this.LGel.trigger(lGEvents.updateSlides);
    };
    // Get gallery items based on multiple conditions
    LightGallery.prototype.getItems = function () {
        // Gallery items
        this.items = [];
        if (!this.settings.dynamic) {
            if (this.settings.selector === 'this') {
                this.items.push(this.el);
            }
            else if (this.settings.selector) {
                if (typeof this.settings.selector === 'string') {
                    if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin
                            .find(this.settings.selector)
                            .get();
                    }
                    else {
                        this.items = this.el.querySelectorAll(this.settings.selector);
                    }
                }
                else {
                    this.items = this.settings.selector;
                }
            }
            else {
                this.items = this.el.children;
            }
            return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
        }
        else {
            return this.settings.dynamicEl || [];
        }
    };
    LightGallery.prototype.shouldHideScrollbar = function () {
        return (this.settings.hideScrollbar &&
            document.body === this.settings.container);
    };
    LightGallery.prototype.hideScrollbar = function () {
        if (!this.shouldHideScrollbar()) {
            return;
        }
        this.bodyPaddingRight = parseFloat($LG('body').style().paddingRight);
        var bodyRect = document.documentElement.getBoundingClientRect();
        var scrollbarWidth = window.innerWidth - bodyRect.width;
        $LG(document.body).css('padding-right', scrollbarWidth + this.bodyPaddingRight + 'px');
        $LG(document.body).addClass('lg-overlay-open');
    };
    LightGallery.prototype.resetScrollBar = function () {
        if (!this.shouldHideScrollbar()) {
            return;
        }
        $LG(document.body).css('padding-right', this.bodyPaddingRight + 'px');
        $LG(document.body).removeClass('lg-overlay-open');
    };
    /**
     * Open lightGallery.
     * Open gallery with specific slide by passing index of the slide as parameter.
     * @category lGPublicMethods
     * @param {Number} index  - index of the slide
     * @param {HTMLElement} element - Which image lightGallery should zoom from
     *
     * @example
     * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
     * const dynamicGallery = lightGallery($dynamicGallery, {
     *     dynamic: true,
     *     dynamicEl: [
     *         {
     *              src: 'img/1.jpg',
     *              thumb: 'img/thumb-1.jpg',
     *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
     *         },
     *         ...
     *     ],
     * });
     * $dynamicGallery.addEventListener('click', function () {
     *     // Starts with third item.(Optional).
     *     // This is useful if you want use dynamic mode with
     *     // custom thumbnails (thumbnails outside gallery),
     *     dynamicGallery.openGallery(2);
     * });
     *
     */
    LightGallery.prototype.openGallery = function (index, element) {
        var _this = this;
        if (index === void 0) { index = this.settings.index; }
        // prevent accidental double execution
        if (this.lgOpened)
            return;
        this.lgOpened = true;
        this.outer.removeClass('lg-hide-items');
        this.hideScrollbar();
        // Add display block, but still has opacity 0
        this.$container.addClass('lg-show');
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
        this.currentItemsInDom = itemsToBeInsertedToDom;
        var items = '';
        itemsToBeInsertedToDom.forEach(function (item) {
            items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
        });
        this.$inner.append(items);
        this.addHtml(index);
        var transform = '';
        this.mediaContainerPosition = this.getMediaContainerPosition();
        var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
        if (!this.settings.allowMediaOverlap) {
            this.setMediaContainerPosition(top, bottom);
        }
        var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
        if (this.zoomFromOrigin && element) {
            this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
        }
        if (!this.zoomFromOrigin || !transform) {
            this.outer.addClass(this.settings.startClass);
            this.getSlideItem(index).removeClass('lg-complete');
        }
        var timeout = this.settings.zoomFromOrigin
            ? 100
            : this.settings.backdropDuration;
        setTimeout(function () {
            _this.outer.addClass('lg-components-open');
        }, timeout);
        this.index = index;
        this.LGel.trigger(lGEvents.beforeOpen);
        // add class lg-current to remove initial transition
        this.getSlideItem(index).addClass('lg-current');
        this.lGalleryOn = false;
        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $LG(window).scrollTop();
        setTimeout(function () {
            // Need to check both zoomFromOrigin and transform values as we need to set set the
            // default opening animation if user missed to add the lg-size attribute
            if (_this.zoomFromOrigin && transform) {
                var currentSlide_1 = _this.getSlideItem(index);
                currentSlide_1.css('transform', transform);
                setTimeout(function () {
                    currentSlide_1
                        .addClass('lg-start-progress lg-start-end-progress')
                        .css('transition-duration', _this.settings.startAnimationDuration + 'ms');
                    _this.outer.addClass('lg-zoom-from-image');
                });
                setTimeout(function () {
                    currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
                }, 100);
            }
            setTimeout(function () {
                _this.$backdrop.addClass('in');
                _this.$container.addClass('lg-show-in');
            }, 10);
            setTimeout(function () {
                if (_this.settings.trapFocus &&
                    document.body === _this.settings.container) {
                    _this.trapFocus();
                }
            }, _this.settings.backdropDuration + 50);
            // lg-visible class resets gallery opacity to 1
            if (!_this.zoomFromOrigin || !transform) {
                setTimeout(function () {
                    _this.outer.addClass('lg-visible');
                }, _this.settings.backdropDuration);
            }
            // initiate slide function
            _this.slide(index, false, false, false);
            _this.LGel.trigger(lGEvents.afterOpen);
        });
        if (document.body === this.settings.container) {
            $LG('html').addClass('lg-on');
        }
    };
    /**
     * Note - Changing the position of the media on every slide transition creates a flickering effect.
     * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
     * if you have dynamic captions for each media,
     * you can provide an appropriate height for the captions via allowMediaOverlap option
     */
    LightGallery.prototype.getMediaContainerPosition = function () {
        if (this.settings.allowMediaOverlap) {
            return {
                top: 0,
                bottom: 0,
            };
        }
        var top = this.$toolbar.get().clientHeight || 0;
        var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
        var captionHeight = this.settings.defaultCaptionHeight ||
            (subHtml && subHtml.clientHeight) ||
            0;
        var thumbContainer = this.outer.find('.lg-thumb-outer').get();
        var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
        var bottom = thumbHeight + captionHeight;
        return {
            top: top,
            bottom: bottom,
        };
    };
    LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
    };
    LightGallery.prototype.hideBars = function () {
        var _this = this;
        // Hide controllers if mouse doesn't move for some period
        setTimeout(function () {
            _this.outer.removeClass('lg-hide-items');
            if (_this.settings.hideBarsDelay > 0) {
                _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
                    _this.outer.removeClass('lg-hide-items');
                    clearTimeout(_this.hideBarTimeout);
                    // Timeout will be cleared on each slide movement also
                    _this.hideBarTimeout = setTimeout(function () {
                        _this.outer.addClass('lg-hide-items');
                    }, _this.settings.hideBarsDelay);
                });
                _this.outer.trigger('mousemove.lg');
            }
        }, this.settings.showBarsAfter);
    };
    LightGallery.prototype.initPictureFill = function ($img) {
        if (this.settings.supportLegacyBrowser) {
            try {
                picturefill({
                    elements: [$img.get()],
                });
            }
            catch (e) {
                console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
            }
        }
    };
    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    LightGallery.prototype.counter = function () {
        if (this.settings.counter) {
            var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(counterHtml);
        }
    };
    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    LightGallery.prototype.addHtml = function (index) {
        var subHtml;
        var subHtmlUrl;
        if (this.galleryItems[index].subHtmlUrl) {
            subHtmlUrl = this.galleryItems[index].subHtmlUrl;
        }
        else {
            subHtml = this.galleryItems[index].subHtml;
        }
        if (!subHtmlUrl) {
            if (subHtml) {
                // get first letter of sub-html
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.settings.subHtmlSelectorRelative &&
                        !this.settings.dynamic) {
                        subHtml = $LG(this.items)
                            .eq(index)
                            .find(subHtml)
                            .first()
                            .html();
                    }
                    else {
                        subHtml = $LG(subHtml).first().html();
                    }
                }
            }
            else {
                subHtml = '';
            }
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            if (subHtmlUrl) {
                this.outer.find('.lg-sub-html').load(subHtmlUrl);
            }
            else {
                this.outer.find('.lg-sub-html').html(subHtml);
            }
        }
        else {
            var currentSlide = $LG(this.getSlideItemId(index));
            if (subHtmlUrl) {
                currentSlide.load(subHtmlUrl);
            }
            else {
                currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
            }
        }
        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass('lg-empty-html');
            }
            else {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass('lg-empty-html');
            }
        }
        this.LGel.trigger(lGEvents.afterAppendSubHtml, {
            index: index,
        });
    };
    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     * @todo preload not working for the first slide, Also, should work for the first and last slide as well
     */
    LightGallery.prototype.preload = function (index) {
        for (var i = 1; i <= this.settings.preload; i++) {
            if (i >= this.galleryItems.length - index) {
                break;
            }
            this.loadContent(index + i, false);
        }
        for (var j = 1; j <= this.settings.preload; j++) {
            if (index - j < 0) {
                break;
            }
            this.loadContent(index - j, false);
        }
    };
    LightGallery.prototype.getDummyImgStyles = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getVideoContStyle = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
        var $currentItem;
        if (!this.settings.dynamic) {
            $currentItem = $LG(this.items).eq(index);
        }
        if ($currentItem) {
            var _dummyImgSrc = void 0;
            if (!this.settings.exThumbImage) {
                _dummyImgSrc = $currentItem.find('img').first().attr('src');
            }
            else {
                _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
            }
            if (!_dummyImgSrc)
                return '';
            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
            var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
            $currentSlide.addClass('lg-first-slide');
            this.outer.addClass('lg-first-slide-loading');
            return dummyImgContent;
        }
        return '';
    };
    LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
        var currentGalleryItem = this.galleryItems[index];
        var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        // Use the thumbnail as dummy image which will be resized to actual image size and
        // displayed on top of actual image
        var imgContent = '';
        var altAttr = alt ? 'alt="' + alt + '"' : '';
        if (this.isFirstSlideWithZoomAnimation()) {
            imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
        }
        else {
            imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
        }
        var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
        $currentSlide.prepend(imgMarkup);
    };
    LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
        var mediaObject = $slide.find('.lg-object').first();
        if (utils.isImageLoaded(mediaObject.get()) ||
            isHTML5VideoWithoutPoster) {
            onLoad();
        }
        else {
            mediaObject.on('load.lg error.lg', function () {
                onLoad && onLoad();
            });
            mediaObject.on('error.lg', function () {
                onError && onError();
            });
        }
    };
    /**
     *
     * @param $el Current slide item
     * @param index
     * @param delay Delay is 0 except first time
     * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
     * @param isFirstSlide
     */
    LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
        var _this = this;
        this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
            _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
        }, function () {
            currentSlide.addClass('lg-complete lg-complete_');
            currentSlide.html('<span class="lg-error-msg">' +
                _this.settings.strings['mediaLoadingFailed'] +
                '</span>');
        });
    };
    LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        // Adding delay for video slides without poster for better performance and user experience
        // Videos should start playing once once the gallery is completely loaded
        var _speed = isFirstSlide &&
            this.getSlideType(currentGalleryItem) === 'video' &&
            !currentGalleryItem.poster
            ? speed
            : 0;
        setTimeout(function () {
            $currentSlide.addClass('lg-complete lg-complete_');
            _this.LGel.trigger(lGEvents.slideItemLoad, {
                index: index,
                delay: delay || 0,
                isFirstSlide: isFirstSlide,
            });
        }, _speed);
    };
    LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
        return !!(!this.lGalleryOn &&
            this.zoomFromOrigin &&
            this.currentImageSize);
    };
    // Add video slideInfo
    LightGallery.prototype.addSlideVideoInfo = function (items) {
        var _this = this;
        items.forEach(function (element, index) {
            element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
            if (element.__slideVideoInfo &&
                _this.settings.loadYouTubePoster &&
                !element.poster &&
                element.__slideVideoInfo.youtube) {
                element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
            }
        });
    };
    /**
     *  Load slide content into slide.
     *  This is used to load content into slides that is not visible too
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     */
    LightGallery.prototype.loadContent = function (index, rec) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        var $currentSlide = $LG(this.getSlideItemId(index));
        var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        var src = currentGalleryItem.src;
        var video = currentGalleryItem.video;
        var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
        if (currentGalleryItem.responsive) {
            var srcDyItms = currentGalleryItem.responsive.split(',');
            src = utils.getResponsiveSrc(srcDyItms) || src;
        }
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        var lgVideoStyle = '';
        var iframe = !!currentGalleryItem.iframe;
        var isFirstSlide = !this.lGalleryOn;
        // delay for adding complete class. it is 0 except first time.
        var delay = 0;
        if (isFirstSlide) {
            if (this.zoomFromOrigin && this.currentImageSize) {
                delay = this.settings.startAnimationDuration + 10;
            }
            else {
                delay = this.settings.backdropDuration + 10;
            }
        }
        if (!$currentSlide.hasClass('lg-loaded')) {
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                lgVideoStyle = this.getVideoContStyle(videoSize);
            }
            if (iframe) {
                var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                $currentSlide.prepend(markup);
            }
            else if (poster) {
                var dummyImg = '';
                var hasStartAnimation = isFirstSlide &&
                    this.zoomFromOrigin &&
                    this.currentImageSize;
                if (hasStartAnimation) {
                    dummyImg = this.getDummyImageContent($currentSlide, index, '');
                }
                var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
                $currentSlide.prepend(markup);
            }
            else if (videoInfo) {
                var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
                $currentSlide.prepend(markup);
            }
            else {
                this.setImgMarkup(src, $currentSlide, index);
                if (srcset || sources) {
                    var $img = $currentSlide.find('.lg-object');
                    this.initPictureFill($img);
                }
            }
            if (poster || videoInfo) {
                this.LGel.trigger(lGEvents.hasVideo, {
                    index: index,
                    src: src,
                    html5Video: _html5Video,
                    hasPoster: !!poster,
                });
            }
            this.LGel.trigger(lGEvents.afterAppendSlide, { index: index });
            if (this.lGalleryOn &&
                this.settings.appendSubHtmlTo === '.lg-item') {
                this.addHtml(index);
            }
        }
        // For first time add some delay for displaying the start animation.
        var _speed = 0;
        // Do not change the delay value because it is required for zoom plugin.
        // If gallery opened from direct url (hash) speed value should be 0
        if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
            _speed = delay;
        }
        // Only for first slide and zoomFromOrigin is enabled
        if (this.isFirstSlideWithZoomAnimation()) {
            setTimeout(function () {
                $currentSlide
                    .removeClass('lg-start-end-progress lg-start-progress')
                    .removeAttr('style');
            }, this.settings.startAnimationDuration + 100);
            if (!$currentSlide.hasClass('lg-loaded')) {
                setTimeout(function () {
                    if (_this.getSlideType(currentGalleryItem) === 'image') {
                        var alt = currentGalleryItem.alt;
                        var altAttr = alt ? 'alt="' + alt + '"' : '';
                        $currentSlide
                            .find('.lg-img-wrap')
                            .append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                        if (srcset || sources) {
                            var $img = $currentSlide.find('.lg-object');
                            _this.initPictureFill($img);
                        }
                    }
                    if (_this.getSlideType(currentGalleryItem) === 'image' ||
                        (_this.getSlideType(currentGalleryItem) === 'video' &&
                            poster)) {
                        _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                        // load remaining slides once the slide is completely loaded
                        _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        }, function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        });
                    }
                }, this.settings.startAnimationDuration + 100);
            }
        }
        // SLide content has been added to dom
        $currentSlide.addClass('lg-loaded');
        if (!this.isFirstSlideWithZoomAnimation() ||
            (this.getSlideType(currentGalleryItem) === 'video' && !poster)) {
            this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
        }
        // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
        if ((!this.zoomFromOrigin || !this.currentImageSize) &&
            $currentSlide.hasClass('lg-complete_') &&
            !this.lGalleryOn) {
            setTimeout(function () {
                $currentSlide.addClass('lg-complete');
            }, this.settings.backdropDuration);
        }
        // Content loaded
        // Need to set lGalleryOn before calling preload function
        this.lGalleryOn = true;
        if (rec === true) {
            if (!$currentSlide.hasClass('lg-complete_')) {
                $currentSlide
                    .find('.lg-object')
                    .first()
                    .on('load.lg error.lg', function () {
                    _this.preload(index);
                });
            }
            else {
                this.preload(index);
            }
        }
    };
    /**
     * @desc Remove dummy image content and load next slides
     * Called only for the first time if zoomFromOrigin animation is enabled
     * @param index
     * @param $currentSlide
     * @param speed
     */
    LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
        var _this = this;
        setTimeout(function () {
            $currentSlide.find('.lg-dummy-img').remove();
            $currentSlide.removeClass('lg-first-slide');
            _this.outer.removeClass('lg-first-slide-loading');
            _this.isDummyImageRemoved = true;
            _this.preload(index);
        }, speed + 300);
    };
    LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
        var _this = this;
        if (numberOfItems === void 0) { numberOfItems = 0; }
        var itemsToBeInsertedToDom = [];
        // Minimum 2 items should be there
        var possibleNumberOfItems = Math.max(numberOfItems, 3);
        possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
        var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
        if (this.galleryItems.length <= 3) {
            this.galleryItems.forEach(function (_element, index) {
                itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
            });
            return itemsToBeInsertedToDom;
        }
        if (index < (this.galleryItems.length - 1) / 2) {
            for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
            }
        }
        else {
            for (var idx = index; idx <= this.galleryItems.length - 1 &&
                idx < index + possibleNumberOfItems / 2; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
            }
        }
        if (this.settings.loop) {
            if (index === this.galleryItems.length - 1) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
            }
            else if (index === 0) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
            }
        }
        if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
        }
        return itemsToBeInsertedToDom;
    };
    LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
        var _this = this;
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
        itemsToBeInsertedToDom.forEach(function (item) {
            if (_this.currentItemsInDom.indexOf(item) === -1) {
                _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
            }
        });
        this.currentItemsInDom.forEach(function (item) {
            if (itemsToBeInsertedToDom.indexOf(item) === -1) {
                $LG("#" + item).remove();
            }
        });
        return itemsToBeInsertedToDom;
    };
    /**
     * Get previous index of the slide
     */
    LightGallery.prototype.getPreviousSlideIndex = function () {
        var prevIndex = 0;
        try {
            var currentItemId = this.outer
                .find('.lg-current')
                .first()
                .attr('id');
            prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
        }
        catch (error) {
            prevIndex = 0;
        }
        return prevIndex;
    };
    LightGallery.prototype.setDownloadValue = function (index) {
        if (this.settings.download) {
            var currentGalleryItem = this.galleryItems[index];
            var hideDownloadBtn = currentGalleryItem.downloadUrl === false ||
                currentGalleryItem.downloadUrl === 'false';
            if (hideDownloadBtn) {
                this.outer.addClass('lg-hide-download');
            }
            else {
                var $download = this.getElementById('lg-download');
                this.outer.removeClass('lg-hide-download');
                $download.attr('href', currentGalleryItem.downloadUrl ||
                    currentGalleryItem.src);
                if (currentGalleryItem.download) {
                    $download.attr('download', currentGalleryItem.download);
                }
            }
        }
    };
    LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
        var _this = this;
        if (this.lGalleryOn) {
            previousSlideItem.addClass('lg-slide-progress');
        }
        setTimeout(function () {
            // remove all transitions
            _this.outer.addClass('lg-no-trans');
            _this.outer
                .find('.lg-item')
                .removeClass('lg-prev-slide lg-next-slide');
            if (direction === 'prev') {
                //prevslide
                currentSlideItem.addClass('lg-prev-slide');
                previousSlideItem.addClass('lg-next-slide');
            }
            else {
                // next slide
                currentSlideItem.addClass('lg-next-slide');
                previousSlideItem.addClass('lg-prev-slide');
            }
            // give 50 ms for browser to add/remove class
            setTimeout(function () {
                _this.outer.find('.lg-item').removeClass('lg-current');
                currentSlideItem.addClass('lg-current');
                // reset all transitions
                _this.outer.removeClass('lg-no-trans');
            }, 50);
        }, this.lGalleryOn ? this.settings.slideDelay : 0);
    };
    /**
     * Goto a specific slide.
     * @param {Number} index - index of the slide
     * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
     * @param {Boolean} fromThumb - true if slide function called via thumbnail click
     * @param {String} direction - Direction of the slide(next/prev)
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // to go to 3rd slide
     *  plugin.slide(2);
     *
     */
    LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
        var _this = this;
        var prevIndex = this.getPreviousSlideIndex();
        this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
        // Prevent multiple call, Required for hsh plugin
        if (this.lGalleryOn && prevIndex === index) {
            return;
        }
        var numberOfGalleryItems = this.galleryItems.length;
        if (!this.lgBusy) {
            if (this.settings.counter) {
                this.updateCurrentCounter(index);
            }
            var currentSlideItem = this.getSlideItem(index);
            var previousSlideItem_1 = this.getSlideItem(prevIndex);
            var currentGalleryItem = this.galleryItems[index];
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
            this.setDownloadValue(index);
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                this.resizeVideoSlide(index, videoSize);
            }
            this.LGel.trigger(lGEvents.beforeSlide, {
                prevIndex: prevIndex,
                index: index,
                fromTouch: !!fromTouch,
                fromThumb: !!fromThumb,
            });
            this.lgBusy = true;
            clearTimeout(this.hideBarTimeout);
            this.arrowDisable(index);
            if (!direction) {
                if (index < prevIndex) {
                    direction = 'prev';
                }
                else if (index > prevIndex) {
                    direction = 'next';
                }
            }
            if (!fromTouch) {
                this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
            }
            else {
                this.outer
                    .find('.lg-item')
                    .removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev = void 0;
                var touchNext = void 0;
                if (numberOfGalleryItems > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;
                    if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                        // next slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                    else if (index === numberOfGalleryItems - 1 &&
                        prevIndex === 0) {
                        // prev slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                }
                else {
                    touchPrev = 0;
                    touchNext = 1;
                }
                if (direction === 'prev') {
                    this.getSlideItem(touchNext).addClass('lg-next-slide');
                }
                else {
                    this.getSlideItem(touchPrev).addClass('lg-prev-slide');
                }
                currentSlideItem.addClass('lg-current');
            }
            // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
            if (!this.lGalleryOn) {
                this.loadContent(index, true);
            }
            else {
                setTimeout(function () {
                    _this.loadContent(index, true);
                    // Add title if this.settings.appendSubHtmlTo === lg-sub-html
                    if (_this.settings.appendSubHtmlTo !== '.lg-item') {
                        _this.addHtml(index);
                    }
                }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
            }
            setTimeout(function () {
                _this.lgBusy = false;
                previousSlideItem_1.removeClass('lg-slide-progress');
                _this.LGel.trigger(lGEvents.afterSlide, {
                    prevIndex: prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb,
                });
            }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
        }
        this.index = index;
    };
    LightGallery.prototype.updateCurrentCounter = function (index) {
        this.getElementById('lg-counter-current').html(index + 1 + '');
    };
    LightGallery.prototype.updateCounterTotal = function () {
        this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
    };
    LightGallery.prototype.getSlideType = function (item) {
        if (item.__slideVideoInfo) {
            return 'video';
        }
        else if (item.iframe) {
            return 'iframe';
        }
        else {
            return 'image';
        }
    };
    LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
        var distanceX = endCoords.pageX - startCoords.pageX;
        var distanceY = endCoords.pageY - startCoords.pageY;
        var allowSwipe = false;
        if (this.swipeDirection) {
            allowSwipe = true;
        }
        else {
            if (Math.abs(distanceX) > 15) {
                this.swipeDirection = 'horizontal';
                allowSwipe = true;
            }
            else if (Math.abs(distanceY) > 15) {
                this.swipeDirection = 'vertical';
                allowSwipe = true;
            }
        }
        if (!allowSwipe) {
            return;
        }
        var $currentSlide = this.getSlideItem(this.index);
        if (this.swipeDirection === 'horizontal') {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            // reset opacity and transition duration
            this.outer.addClass('lg-dragging');
            // move current slide
            this.setTranslate($currentSlide, distanceX, 0);
            // move next and prev slide with current slide
            var width = $currentSlide.get().offsetWidth;
            var slideWidthAmount = (width * 15) / 100;
            var gutter = slideWidthAmount - Math.abs((distanceX * 10) / 100);
            this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
            this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
        }
        else if (this.swipeDirection === 'vertical') {
            if (this.settings.swipeToClose) {
                e === null || e === void 0 ? void 0 : e.preventDefault();
                this.$container.addClass('lg-dragging-vertical');
                var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                this.$backdrop.css('opacity', opacity);
                var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                if (Math.abs(distanceY) > 100) {
                    this.outer
                        .addClass('lg-hide-items')
                        .removeClass('lg-components-open');
                }
            }
        }
    };
    LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
        var _this = this;
        var distance;
        // keep slide animation for any mode while dragg/swipe
        if (this.settings.mode !== 'lg-slide') {
            this.outer.addClass('lg-slide');
        }
        // set transition duration
        setTimeout(function () {
            _this.$container.removeClass('lg-dragging-vertical');
            _this.outer
                .removeClass('lg-dragging lg-hide-items')
                .addClass('lg-components-open');
            var triggerClick = true;
            if (_this.swipeDirection === 'horizontal') {
                distance = endCoords.pageX - startCoords.pageX;
                var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                if (distance < 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToNextSlide(true);
                    triggerClick = false;
                }
                else if (distance > 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToPrevSlide(true);
                    triggerClick = false;
                }
            }
            else if (_this.swipeDirection === 'vertical') {
                distance = Math.abs(endCoords.pageY - startCoords.pageY);
                if (_this.settings.closable &&
                    _this.settings.swipeToClose &&
                    distance > 100) {
                    _this.closeGallery();
                    return;
                }
                else {
                    _this.$backdrop.css('opacity', 1);
                }
            }
            _this.outer.find('.lg-item').removeAttr('style');
            if (triggerClick &&
                Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                // Trigger click if distance is less than 5 pix
                var target = $LG(event.target);
                if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
            }
            _this.swipeDirection = undefined;
        });
        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_this.outer.hasClass('lg-dragging') &&
                _this.settings.mode !== 'lg-slide') {
                _this.outer.removeClass('lg-slide');
            }
        }, this.settings.speed + 100);
    };
    LightGallery.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;
        var isSwiping = false;
        if (this.settings.enableSwipe) {
            this.$inner.on('touchstart.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if (($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) &&
                    !_this.outer.hasClass('lg-zoomed') &&
                    !_this.lgBusy &&
                    e.touches.length === 1) {
                    isSwiping = true;
                    _this.touchAction = 'swipe';
                    _this.manageSwipeClass();
                    startCoords = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY,
                    };
                }
            });
            this.$inner.on('touchmove.lg', function (e) {
                if (isSwiping &&
                    _this.touchAction === 'swipe' &&
                    e.touches.length === 1) {
                    endCoords = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY,
                    };
                    _this.touchMove(startCoords, endCoords, e);
                    isMoved = true;
                }
            });
            this.$inner.on('touchend.lg', function (event) {
                if (_this.touchAction === 'swipe') {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords, startCoords, event);
                    }
                    else if (isSwiping) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) {
                            _this.LGel.trigger(lGEvents.posterClick);
                        }
                    }
                    _this.touchAction = undefined;
                    isSwiping = false;
                }
            });
        }
    };
    LightGallery.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;
        if (this.settings.enableDrag) {
            this.outer.on('mousedown.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if ($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) {
                    if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        if (!_this.lgBusy) {
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY,
                            };
                            isDraging = true;
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            _this.outer.get().scrollLeft += 1;
                            _this.outer.get().scrollLeft -= 1;
                            // *
                            _this.outer
                                .removeClass('lg-grab')
                                .addClass('lg-grabbing');
                            _this.LGel.trigger(lGEvents.dragStart);
                        }
                    }
                }
            });
            $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
                if (isDraging && _this.lgOpened) {
                    isMoved = true;
                    endCoords = {
                        pageX: e.pageX,
                        pageY: e.pageY,
                    };
                    _this.touchMove(startCoords, endCoords);
                    _this.LGel.trigger(lGEvents.dragMove);
                }
            });
            $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
                if (!_this.lgOpened) {
                    return;
                }
                var target = $LG(event.target);
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords, startCoords, event);
                    _this.LGel.trigger(lGEvents.dragEnd);
                }
                else if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });
        }
    };
    LightGallery.prototype.triggerPosterClick = function () {
        var _this = this;
        this.$inner.on('click.lg', function (event) {
            if (!_this.dragOrSwipeEnabled &&
                _this.isPosterElement($LG(event.target))) {
                _this.LGel.trigger(lGEvents.posterClick);
            }
        });
    };
    LightGallery.prototype.manageSwipeClass = function () {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.settings.loop && this.galleryItems.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.galleryItems.length - 1;
            }
            else if (this.index === this.galleryItems.length - 1) {
                _touchNext = 0;
            }
        }
        this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
        }
        this.getSlideItem(_touchNext).addClass('lg-next-slide');
    };
    /**
     * Go to next slide
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.goToNextSlide();
     * @see <a href="/demos/methods/">Demo</a>
     */
    LightGallery.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index + 1 < this.galleryItems.length) {
                this.index++;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                    index: this.index,
                });
                this.slide(this.index, !!fromTouch, false, 'next');
            }
            else {
                if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index,
                    });
                    this.slide(this.index, !!fromTouch, false, 'next');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-right-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };
    /**
     * Go to previous slides
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery({});
     *  plugin.goToPrevSlide();
     * @see <a href="/demos/methods/">Demo</a>
     *
     */
    LightGallery.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index > 0) {
                this.index--;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                    index: this.index,
                    fromTouch: fromTouch,
                });
                this.slide(this.index, !!fromTouch, false, 'prev');
            }
            else {
                if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch: fromTouch,
                    });
                    this.slide(this.index, !!fromTouch, false, 'prev');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-left-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };
    LightGallery.prototype.keyPress = function () {
        var _this = this;
        $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
            if (_this.lgOpened &&
                _this.settings.escKey === true &&
                e.keyCode === 27) {
                e.preventDefault();
                if (_this.settings.allowMediaOverlap &&
                    _this.outer.hasClass('lg-can-toggle') &&
                    _this.outer.hasClass('lg-components-open')) {
                    _this.outer.removeClass('lg-components-open');
                }
                else {
                    _this.closeGallery();
                }
            }
            if (_this.lgOpened && _this.galleryItems.length > 1) {
                if (e.keyCode === 37) {
                    e.preventDefault();
                    _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                    e.preventDefault();
                    _this.goToNextSlide();
                }
            }
        });
    };
    LightGallery.prototype.arrow = function () {
        var _this = this;
        this.getElementById('lg-prev').on('click.lg', function () {
            _this.goToPrevSlide();
        });
        this.getElementById('lg-next').on('click.lg', function () {
            _this.goToNextSlide();
        });
    };
    LightGallery.prototype.arrowDisable = function (index) {
        // Disable arrows if settings.hideControlOnEnd is true
        if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var $prev = this.getElementById('lg-prev');
            var $next = this.getElementById('lg-next');
            if (index + 1 === this.galleryItems.length) {
                $next.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $next.removeAttr('disabled').removeClass('disabled');
            }
            if (index === 0) {
                $prev.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $prev.removeAttr('disabled').removeClass('disabled');
            }
        }
    };
    LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        $el.css('transform', 'translate3d(' +
            xValue +
            'px, ' +
            yValue +
            'px, 0px) scale3d(' +
            scaleX +
            ', ' +
            scaleY +
            ', 1)');
    };
    LightGallery.prototype.mousewheel = function () {
        var _this = this;
        var lastCall = 0;
        this.outer.on('wheel.lg', function (e) {
            if (!e.deltaY || _this.galleryItems.length < 2) {
                return;
            }
            e.preventDefault();
            var now = new Date().getTime();
            if (now - lastCall < 1000) {
                return;
            }
            lastCall = now;
            if (e.deltaY > 0) {
                _this.goToNextSlide();
            }
            else if (e.deltaY < 0) {
                _this.goToPrevSlide();
            }
        });
    };
    LightGallery.prototype.isSlideElement = function (target) {
        return (target.hasClass('lg-outer') ||
            target.hasClass('lg-item') ||
            target.hasClass('lg-img-wrap'));
    };
    LightGallery.prototype.isPosterElement = function (target) {
        var playButton = this.getSlideItem(this.index)
            .find('.lg-video-play-button')
            .get();
        return (target.hasClass('lg-video-poster') ||
            target.hasClass('lg-video-play-button') ||
            (playButton && playButton.contains(target.get())));
    };
    /**
     * Maximize minimize inline gallery.
     * @category lGPublicMethods
     */
    LightGallery.prototype.toggleMaximize = function () {
        var _this = this;
        this.getElementById('lg-maximize').on('click.lg', function () {
            _this.$container.toggleClass('lg-inline');
            _this.refreshOnResize();
        });
    };
    LightGallery.prototype.invalidateItems = function () {
        for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            var $element = $LG(element);
            $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
        }
    };
    LightGallery.prototype.trapFocus = function () {
        var _this = this;
        this.$container.get().focus({
            preventScroll: true,
        });
        $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
            if (!_this.lgOpened) {
                return;
            }
            var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            if (!isTabPressed) {
                return;
            }
            var focusableEls = utils.getFocusableElements(_this.$container.get());
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            }
            else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    };
    LightGallery.prototype.manageCloseGallery = function () {
        var _this = this;
        if (!this.settings.closable)
            return;
        var mousedown = false;
        this.getElementById('lg-close').on('click.lg', function () {
            _this.closeGallery();
        });
        if (this.settings.closeOnTap) {
            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            this.outer.on('mousedown.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target)) {
                    mousedown = true;
                }
                else {
                    mousedown = false;
                }
            });
            this.outer.on('mousemove.lg', function () {
                mousedown = false;
            });
            this.outer.on('mouseup.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target) && mousedown) {
                    if (!_this.outer.hasClass('lg-dragging')) {
                        _this.closeGallery();
                    }
                }
            });
        }
    };
    /**
     * Close lightGallery if it is opened.
     *
     * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
     * @return returns the estimated time to close gallery completely including the close animation duration
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.closeGallery();
     *
     */
    LightGallery.prototype.closeGallery = function (force) {
        var _this = this;
        if (!this.lgOpened || (!this.settings.closable && !force)) {
            return 0;
        }
        this.LGel.trigger(lGEvents.beforeClose);
        if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
            $LG(window).scrollTop(this.prevScrollTop);
        }
        var currentItem = this.items[this.index];
        var transform;
        if (this.zoomFromOrigin && currentItem) {
            var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
            var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
            var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
            transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
        }
        if (this.zoomFromOrigin && transform) {
            this.outer.addClass('lg-closing lg-zoom-from-image');
            this.getSlideItem(this.index)
                .addClass('lg-start-end-progress')
                .css('transition-duration', this.settings.startAnimationDuration + 'ms')
                .css('transform', transform);
        }
        else {
            this.outer.addClass('lg-hide-items');
            // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
            // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
            this.outer.removeClass('lg-zoom-from-image');
        }
        // Unbind all events added by lightGallery
        // @todo
        //this.$el.off('.lg.tm');
        this.destroyModules();
        this.lGalleryOn = false;
        this.isDummyImageRemoved = false;
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        clearTimeout(this.hideBarTimeout);
        this.hideBarTimeout = false;
        $LG('html').removeClass('lg-on');
        this.outer.removeClass('lg-visible lg-components-open');
        // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
        this.$backdrop.removeClass('in').css('opacity', 0);
        var removeTimeout = this.zoomFromOrigin && transform
            ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration)
            : this.settings.backdropDuration;
        this.$container.removeClass('lg-show-in');
        // Once the closign animation is completed and gallery is invisible
        setTimeout(function () {
            if (_this.zoomFromOrigin && transform) {
                _this.outer.removeClass('lg-zoom-from-image');
            }
            _this.$container.removeClass('lg-show');
            // Reset scrollbar
            _this.resetScrollBar();
            // Need to remove inline opacity as it is used in the stylesheet as well
            _this.$backdrop
                .removeAttr('style')
                .css('transition-duration', _this.settings.backdropDuration + 'ms');
            _this.outer.removeClass("lg-closing " + _this.settings.startClass);
            _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
            _this.$inner.empty();
            if (_this.lgOpened) {
                _this.LGel.trigger(lGEvents.afterClose, {
                    instance: _this,
                });
            }
            if (_this.$container.get()) {
                _this.$container.get().blur();
            }
            _this.lgOpened = false;
        }, removeTimeout + 100);
        return removeTimeout + 100;
    };
    LightGallery.prototype.initModules = function () {
        this.plugins.forEach(function (module) {
            try {
                module.init();
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated");
            }
        });
    };
    LightGallery.prototype.destroyModules = function (destroy) {
        this.plugins.forEach(function (module) {
            try {
                if (destroy) {
                    module.destroy();
                }
                else {
                    module.closeGallery && module.closeGallery();
                }
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
            }
        });
    };
    /**
     * Refresh lightGallery with new set of children.
     *
     * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
     *
     * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
     * @see <a href="/demos/dynamic-mode/">Demo</a>
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // Delete or add children, then call
     *  plugin.refresh();
     *
     */
    LightGallery.prototype.refresh = function (galleryItems) {
        if (!this.settings.dynamic) {
            this.invalidateItems();
        }
        if (galleryItems) {
            this.galleryItems = galleryItems;
        }
        else {
            this.galleryItems = this.getItems();
        }
        this.updateControls();
        this.openGalleryOnItemClick();
        this.LGel.trigger(lGEvents.updateSlides);
    };
    LightGallery.prototype.updateControls = function () {
        this.addSlideVideoInfo(this.galleryItems);
        this.updateCounterTotal();
        this.manageSingleSlideClassName();
    };
    LightGallery.prototype.destroyGallery = function () {
        this.destroyModules(true);
        if (!this.settings.dynamic) {
            this.invalidateItems();
        }
        $LG(window).off(".lg.global" + this.lgId);
        this.LGel.off('.lg');
        this.$container.remove();
    };
    /**
     * Destroy lightGallery.
     * Destroy lightGallery and its plugin instances completely
     *
     * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
     * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
     * You can use refresh method most of the times.
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.destroy();
     *
     */
    LightGallery.prototype.destroy = function () {
        var closeTimeout = this.closeGallery(true);
        if (closeTimeout) {
            setTimeout(this.destroyGallery.bind(this), closeTimeout);
        }
        else {
            this.destroyGallery();
        }
        return closeTimeout;
    };
    return LightGallery;
}());

function lightGallery(el, options) {
    return new LightGallery(el, options);
}

var LgMethods = {
    onAfterAppendSlide: 'lgAfterAppendSlide',
    onInit: 'lgInit',
    onHasVideo: 'lgHasVideo',
    onContainerResize: 'lgContainerResize',
    onUpdateSlides: 'lgUpdateSlides',
    onAfterAppendSubHtml: 'lgAfterAppendSubHtml',
    onBeforeOpen: 'lgBeforeOpen',
    onAfterOpen: 'lgAfterOpen',
    onSlideItemLoad: 'lgSlideItemLoad',
    onBeforeSlide: 'lgBeforeSlide',
    onAfterSlide: 'lgAfterSlide',
    onPosterClick: 'lgPosterClick',
    onDragStart: 'lgDragStart',
    onDragMove: 'lgDragMove',
    onDragEnd: 'lgDragEnd',
    onBeforeNextSlide: 'lgBeforeNextSlide',
    onBeforePrevSlide: 'lgBeforePrevSlide',
    onBeforeClose: 'lgBeforeClose',
    onAfterClose: 'lgAfterClose',
    onRotateLeft: 'lgRotateLeft',
    onRotateRight: 'lgRotateRight',
    onFlipHorizontal: 'lgFlipHorizontal',
    onFlipVertical: 'lgFlipVertical',
};
var LG = function (_a) {
    var children = _a.children, elementClassNames = _a.elementClassNames, onAfterAppendSlide = _a.onAfterAppendSlide, onInit = _a.onInit, onHasVideo = _a.onHasVideo, onContainerResize = _a.onContainerResize, onAfterAppendSubHtml = _a.onAfterAppendSubHtml, onBeforeOpen = _a.onBeforeOpen, onAfterOpen = _a.onAfterOpen, onSlideItemLoad = _a.onSlideItemLoad, onBeforeSlide = _a.onBeforeSlide, onAfterSlide = _a.onAfterSlide, onPosterClick = _a.onPosterClick, onDragStart = _a.onDragStart, onDragMove = _a.onDragMove, onDragEnd = _a.onDragEnd, onBeforeNextSlide = _a.onBeforeNextSlide, onBeforePrevSlide = _a.onBeforePrevSlide, onBeforeClose = _a.onBeforeClose, onAfterClose = _a.onAfterClose, onRotateLeft = _a.onRotateLeft, onRotateRight = _a.onRotateRight, onFlipHorizontal = _a.onFlipHorizontal, onFlipVertical = _a.onFlipVertical, restProps = __rest(_a, ["children", "elementClassNames", "onAfterAppendSlide", "onInit", "onHasVideo", "onContainerResize", "onAfterAppendSubHtml", "onBeforeOpen", "onAfterOpen", "onSlideItemLoad", "onBeforeSlide", "onAfterSlide", "onPosterClick", "onDragStart", "onDragMove", "onDragEnd", "onBeforeNextSlide", "onBeforePrevSlide", "onBeforeClose", "onAfterClose", "onRotateLeft", "onRotateRight", "onFlipHorizontal", "onFlipVertical"]);
    var $lg = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var registerEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        if (onAfterAppendSlide && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onAfterAppendSlide, (function (event) {
                onAfterAppendSlide(event.detail);
            }));
        }
        if (onInit && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onInit, (function (event) {
                onInit(event.detail);
            }));
        }
        if (onHasVideo && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onHasVideo, (function (event) {
                onHasVideo(event.detail);
            }));
        }
        if (onContainerResize && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onContainerResize, (function (event) {
                onContainerResize(event.detail);
            }));
        }
        if (onAfterAppendSubHtml && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onAfterAppendSubHtml, (function (event) {
                onAfterAppendSubHtml(event.detail);
            }));
        }
        if (onBeforeOpen && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onBeforeOpen, (function (event) {
                onBeforeOpen(event.detail);
            }));
        }
        if (onAfterOpen && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onAfterOpen, (function (event) {
                onAfterOpen(event.detail);
            }));
        }
        if (onSlideItemLoad && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onSlideItemLoad, (function (event) {
                onSlideItemLoad(event.detail);
            }));
        }
        if (onBeforeSlide && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onBeforeSlide, (function (event) {
                onBeforeSlide(event.detail);
            }));
        }
        if (onAfterSlide && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onAfterSlide, (function (event) {
                onAfterSlide(event.detail);
            }));
        }
        if (onPosterClick && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onPosterClick, (function (event) {
                onPosterClick(event.detail);
            }));
        }
        if (onDragStart && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onDragStart, (function (event) {
                onDragStart(event.detail);
            }));
        }
        if (onDragMove && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onDragMove, (function (event) {
                onDragMove(event.detail);
            }));
        }
        if (onDragEnd && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onDragEnd, (function (event) {
                onDragEnd(event.detail);
            }));
        }
        if (onBeforeNextSlide && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onBeforeNextSlide, (function (event) {
                onBeforeNextSlide(event.detail);
            }));
        }
        if (onBeforePrevSlide && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onBeforePrevSlide, (function (event) {
                onBeforePrevSlide(event.detail);
            }));
        }
        if (onBeforeClose && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onBeforeClose, (function (event) {
                onBeforeClose(event.detail);
            }));
        }
        if (onAfterClose && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onAfterClose, (function (event) {
                onAfterClose(event.detail);
            }));
        }
        if (onRotateLeft && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onRotateLeft, (function (event) {
                onRotateLeft(event.detail);
            }));
        }
        if (onRotateRight && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onRotateRight, (function (event) {
                onRotateRight(event.detail);
            }));
        }
        if (onFlipHorizontal && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onFlipHorizontal, (function (event) {
                onFlipHorizontal(event.detail);
            }));
        }
        if (onFlipVertical && $lg && $lg.current) {
            $lg.current.addEventListener(LgMethods.onFlipVertical, (function (event) {
                onFlipVertical(event.detail);
            }));
        }
    }, [
        onAfterAppendSlide,
        onAfterAppendSubHtml,
        onAfterClose,
        onRotateLeft,
        onRotateRight,
        onFlipHorizontal,
        onFlipVertical,
        onAfterOpen,
        onAfterSlide,
        onBeforeClose,
        onBeforeNextSlide,
        onBeforeOpen,
        onBeforePrevSlide,
        onBeforeSlide,
        onContainerResize,
        onDragEnd,
        onDragMove,
        onDragStart,
        onHasVideo,
        onInit,
        onPosterClick,
        onSlideItemLoad,
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        registerEvents();
        var lightGallery$1 = lightGallery($lg.current, restProps);
        return function cleanup() {
            lightGallery$1.destroy();
        };
    }, [registerEvents, restProps]);
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { className: "lg-react-element " + (elementClassNames ? elementClassNames : ''), ref: $lg }, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LG);
//# sourceMappingURL=Lightgallery.es5.js.map


/***/ }),

/***/ "./node_modules/react-contexify/dist/ReactContexify.min.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-contexify/dist/ReactContexify.min.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/lightgallery/scss/lg-zoom.scss":
/*!*****************************************************!*\
  !*** ./node_modules/lightgallery/scss/lg-zoom.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/lightgallery/scss/lightgallery.scss":
/*!**********************************************************!*\
  !*** ./node_modules/lightgallery/scss/lightgallery.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/settings/scss/admin.scss":
/*!**************************************!*\
  !*** ./src/settings/scss/admin.scss ***!
  \**************************************/
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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

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


/***/ }),

/***/ "./node_modules/react-contexify/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/react-contexify/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ pt),
/* harmony export */   Menu: () => (/* binding */ it),
/* harmony export */   RightSlot: () => (/* binding */ ne),
/* harmony export */   Separator: () => (/* binding */ Et),
/* harmony export */   Submenu: () => (/* binding */ Kt),
/* harmony export */   contextMenu: () => (/* binding */ A),
/* harmony export */   useContextMenu: () => (/* binding */ Fe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");




var Y=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),F=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Y),$=t=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y.Provider,{...t});function le(){let t=new Map;return {on(e,r){return t.has(e)?t.get(e).add(r):t.set(e,new Set([r])),this},off(e,r){return t.has(e)&&t.get(e).delete(r),this},emit(e,r){return t.has(e)&&t.get(e).forEach(f=>{f(r);}),this}}}var R=le();var B=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map).current;var z=()=>{},U=["resize","contextmenu","click","scroll","blur"];var A={show({event:t,id:e,props:r,position:f}){t.preventDefault&&t.preventDefault(),R.emit(0).emit(e,{event:t.nativeEvent||t,props:r,position:f});},hideAll(){R.emit(0);}};function Fe(t){return {show(e){A.show({...t,...e});},hideAll(){A.hideAll();}}}function G(){let t=new Map,e,r,f,s,i=!1;function P(n){s=Array.from(n.values()),e=-1,f=!0;}function v(){s[e].node.focus();}let x=()=>e>=0&&s[e].isSubmenu,w=()=>Array.from(s[e].submenuRefTracker.values());function m(){return e===-1?(b(),!1):!0}function b(){e+1<s.length?e++:e+1===s.length&&(e=0),i&&a(),v();}function E(){e===-1||e===0?e=s.length-1:e-1<s.length&&e--,i&&a(),v();}function T(){if(m()&&x()){let n=w(),{node:c,setSubmenuPosition:h}=s[e];return t.set(c,{isRoot:f,focusedIndex:e,parentNode:r||c,items:s}),h(),c.classList.add("contexify_submenu-isOpen"),r=c,n.length>0?(e=0,s=n):i=!0,f=!1,v(),!0}return !1}function a(){if(m()&&!f){let n=t.get(r);r.classList.remove("contexify_submenu-isOpen"),s=n.items,r=n.parentNode,n.isRoot&&(f=!0,t.clear()),i||(e=n.focusedIndex,v());}}function y(n){function c(h){for(let o of h)o.isSubmenu&&o.submenuRefTracker&&c(Array.from(o.submenuRefTracker.values())),o.keyMatcher&&o.keyMatcher(n);}c(s);}return {init:P,moveDown:b,moveUp:E,openSubmenu:T,closeSubmenu:a,matchKeys:y}}function I(t){return typeof t=="function"}function V(t){return typeof t=="string"}function _(t,e){return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(t).filter(Boolean),r=>(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,e))}function J(t){let e={x:t.clientX,y:t.clientY},r=t.changedTouches;return r&&(e.x=r[0].clientX,e.y=r[0].clientY),(!e.x||e.x<0)&&(e.x=0),(!e.y||e.y<0)&&(e.y=0),e}function k(t,e){return I(t)?t(e):t}function be(t,e){return {...t,...I(e)?e(t):e}}var it=({id:t,theme:e,style:r,className:f,children:s,animation:i="fade",preventDefaultOnKeydown:P=!0,disableBoundariesCheck:v=!1,onVisibilityChange:x,...w})=>{let[m,b]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(be,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T=B(),[a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>G()),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(R.on(t,h).on(0,o),()=>{R.off(t,h).off(0,o);}),[t,i,v]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{m.visible?a.init(T):T.clear();},[m.visible,a,T]);function c(u,p){if(E.current&&!v){let{innerWidth:d,innerHeight:C}=window,{offsetWidth:K,offsetHeight:O}=E.current;u+K>d&&(u-=u+K-d),p+O>C&&(p-=p+O-C);}return {x:u,y:p}}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{m.visible&&b(c(m.x,m.y));},[m.visible]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function u(d){P&&d.preventDefault();}function p(d){switch(d.key){case"Enter":case" ":a.openSubmenu()||o();break;case"Escape":o();break;case"ArrowUp":u(d),a.moveUp();break;case"ArrowDown":u(d),a.moveDown();break;case"ArrowRight":u(d),a.openSubmenu();break;case"ArrowLeft":u(d),a.closeSubmenu();break;default:a.matchKeys(d);break}}if(m.visible){window.addEventListener("keydown",p);for(let d of U)window.addEventListener(d,o);}return ()=>{window.removeEventListener("keydown",p);for(let d of U)window.removeEventListener(d,o);}},[m.visible,a,P]);function h({event:u,props:p,position:d}){u.stopPropagation();let C=d||J(u),{x:K,y:O}=c(C.x,C.y);(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync)(()=>{b({visible:!0,willLeave:!1,x:K,y:O,triggerEvent:u,propsFromTrigger:p});}),clearTimeout(n.current),!y.current&&I(x)&&(x(!0),y.current=!0);}function o(u){u!=null&&(u.button===2||u.ctrlKey)&&u.type!=="contextmenu"||(i&&(V(i)||"exit"in i&&i.exit)?b(p=>({willLeave:p.visible})):b(p=>({visible:p.visible?!1:p.visible})),n.current=setTimeout(()=>{I(x)&&x(!1),y.current=!1;}));}function M(){m.willLeave&&m.visible&&(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync)(()=>b({visible:!1,willLeave:!1}));}function S(){return V(i)?(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({[`${"contexify_willEnter-"}${i}`]:g&&!D,[`${"contexify_willLeave-"}${i} ${"contexify_willLeave-"}'disabled'`]:g&&D}):i&&"enter"in i&&"exit"in i?(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({[`${"contexify_willEnter-"}${i.enter}`]:i.enter&&g&&!D,[`${"contexify_willLeave-"}${i.exit} ${"contexify_willLeave-"}'disabled'`]:i.exit&&g&&D}):null}let{visible:g,triggerEvent:l,propsFromTrigger:L,x:oe,y:ie,willLeave:D}=m,ae=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("contexify",f,{[`${"contexify_theme-"}${e}`]:e},S());return react__WEBPACK_IMPORTED_MODULE_0__.createElement($,{value:T},g&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...w,className:ae,onAnimationEnd:M,style:{...r,left:oe,top:ie,opacity:1},ref:E,role:"menu"},_(s,{propsFromTrigger:L,triggerEvent:l})))};var pt=({id:t,children:e,className:r,style:f,triggerEvent:s,data:i,propsFromTrigger:P,keyMatcher:v,onClick:x=z,disabled:w=!1,hidden:m=!1,closeOnClick:b=!0,handlerEvent:E="onClick",...T})=>{let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),y=F(),n={id:t,data:i,triggerEvent:s,props:P},c=k(w,n),h=k(m,n);function o(l){n.event=l,l.stopPropagation(),c||(b?M():x(n));}function M(){let l=a.current;l.focus(),l.addEventListener("animationend",()=>setTimeout(A.hideAll),{once:!0}),l.classList.add("contexify_item-feedback"),x(n);}function S(l){l&&!c&&(a.current=l,y.set(l,{node:l,isSubmenu:!1,keyMatcher:!c&&I(v)&&(L=>{v(L)&&(L.stopPropagation(),L.preventDefault(),n.event=L,M());})}));}function g(l){(l.key==="Enter"||l.key===" ")&&(l.stopPropagation(),n.event=l,M());}return h?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...T,[E]:o,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("contexify_item",r,{[`${"contexify_item-disabled"}`]:c}),style:f,onKeyDown:g,ref:S,tabIndex:-1,role:"menuitem","aria-disabled":c},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"contexify_itemContent"},e))};var Et=({triggerEvent:t,data:e,propsFromTrigger:r,hidden:f=!1})=>k(f,{data:e,triggerEvent:t,props:r})?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"contexify_separator"});var re=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline",{points:"9 18 15 12 9 6"}));var ne=({className:t,...e})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("contexify_rightSlot",t),...e});var Kt=({arrow:t,children:e,disabled:r=!1,hidden:f=!1,label:s,className:i,triggerEvent:P,propsFromTrigger:v,style:x,...w})=>{let m=F(),b=B(),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),T={triggerEvent:P,props:v},a=k(r,T),y=k(f,T);function n(){let o=E.current;if(o){let M=`${"contexify_submenu"}-bottom`,S=`${"contexify_submenu"}-right`;o.classList.remove(M,S);let g=o.getBoundingClientRect();g.right>window.innerWidth&&o.classList.add(S),g.bottom>window.innerHeight&&o.classList.add(M);}}function c(o){o&&!a&&m.set(o,{node:o,isSubmenu:!0,submenuRefTracker:b,setSubmenuPosition:n});}if(y)return null;let h=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("contexify_item",i,{[`${"contexify_item-disabled"}`]:a});return react__WEBPACK_IMPORTED_MODULE_0__.createElement($,{value:b},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...w,className:h,ref:c,tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":a,onMouseEnter:n,onTouchStart:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"contexify_itemContent",onClick:o=>o.stopPropagation()},s,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ne,null,t||react__WEBPACK_IMPORTED_MODULE_0__.createElement(re,null))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`${"contexify"} ${"contexify_submenu"}`,ref:E,style:x},_(e,{propsFromTrigger:v,triggerEvent:P}))))};


//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map

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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/settings/App.js");
/* harmony import */ var _store_browser_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/browser-store */ "./src/settings/store/browser-store.js");




(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('ud-id-app'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map