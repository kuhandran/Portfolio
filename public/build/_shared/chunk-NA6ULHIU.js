import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-TSBYFMHC.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/header.jsx
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/header.jsx"
  );
  import.meta.hot.lastModified = "1707707058624.4421";
}
var HeaderBackground = (0, import_react2.lazy)(_c = () => import("/build/_shared/HeaderBackground-BT3MEQQV.js"));
_c2 = HeaderBackground;
var HeaderNavigation = (0, import_react2.lazy)(_c3 = () => import("/build/_shared/HeaderNavigation-CZ2W2F2G.js"));
_c4 = HeaderNavigation;
var ContentContainer = (0, import_react2.lazy)(_c5 = () => import("/build/_shared/ContentContainer-YO4OLNFU.js"));
_c6 = ContentContainer;
var MilestoneContainer = (0, import_react2.lazy)(_c7 = () => import("/build/_shared/MilestoneContainer-KX2YOI4O.js"));
_c8 = MilestoneContainer;
var FooterContainer = (0, import_react2.lazy)(_c9 = () => import("/build/_shared/FooterContainer-ESXWLQFQ.js"));
_c10 = FooterContainer;
function Headers() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderNavigation, {}, void 0, false, {
      fileName: "app/routes/header.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderBackground, {}, void 0, false, {
      fileName: "app/routes/header.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentContainer, {}, void 0, false, {
      fileName: "app/routes/header.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MilestoneContainer, {}, void 0, false, {
      fileName: "app/routes/header.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterContainer, {}, void 0, false, {
      fileName: "app/routes/header.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/header.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c11 = Headers;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
$RefreshReg$(_c, "HeaderBackground$lazy");
$RefreshReg$(_c2, "HeaderBackground");
$RefreshReg$(_c3, "HeaderNavigation$lazy");
$RefreshReg$(_c4, "HeaderNavigation");
$RefreshReg$(_c5, "ContentContainer$lazy");
$RefreshReg$(_c6, "ContentContainer");
$RefreshReg$(_c7, "MilestoneContainer$lazy");
$RefreshReg$(_c8, "MilestoneContainer");
$RefreshReg$(_c9, "FooterContainer$lazy");
$RefreshReg$(_c10, "FooterContainer");
$RefreshReg$(_c11, "Headers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Headers
};
//# sourceMappingURL=/build/_shared/chunk-NA6ULHIU.js.map
