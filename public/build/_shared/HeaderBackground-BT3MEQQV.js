import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-TSBYFMHC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/HeaderBackground/HeaderBackground.jsx
var import_react = __toESM(require_react(), 1);

// app/components/HeaderPage/HeaderPage.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HeaderPage/HeaderPage.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HeaderPage/HeaderPage.jsx"
  );
}
var downloadPdf = () => {
  let pdfUrl = "";
  if (window.location.hostname == "localhost") {
    pdfUrl = "http://" + window.location.hostname + ":" + window.location.port + "/Resources/KuhandranResume2024.pdf";
  } else {
    pdfUrl = "http://" + window.location.hostname + "/Resources/KuhandranResume2024.pdf";
  }
  console.log(pdfUrl, "pdfUrl");
  window.open(pdfUrl);
};
var HeaderPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[530px] lg:max-w-[750px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold  sm:text-4xl lg:text-5xl xl:text-6xl", children: "Kuhandran Samudrapandiyan" }, void 0, false, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subtimax-w-[500px] mt-6 text-lg font-medium xl:max-w-lg md:text-xl 2xl:text-100 xl:leading-snug lg:text-2xltle", children: "Experienced in project management, React development, Scrum Master, banking, insurance, regulatory, fintech, JavaScript, Redux, Webpack." }, void 0, false, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: downloadPdf, className: "bg-amber-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow", children: "Download resume" }, void 0, false, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c = HeaderPage;
var HeaderPage_default = HeaderPage;
var _c;
$RefreshReg$(_c, "HeaderPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/HeaderBackground/HeaderBackground.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HeaderBackground/HeaderBackground.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HeaderBackground/HeaderBackground.jsx"
  );
}
var ImageContainer = (0, import_react.lazy)(_c2 = () => import("/build/_shared/ImageContainer-EXW5TW2W.js"));
_c22 = ImageContainer;
var HeaderBackground = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "flex flex-col overflow-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative px-6 pt-40 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderPage_default, {}, void 0, false, {
      fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageContainer, {}, void 0, false, {
      fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 28,
    columnNumber: 8
  }, this) }, void 0, false, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c3 = HeaderBackground;
var HeaderBackground_default = HeaderBackground;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "ImageContainer$lazy");
$RefreshReg$(_c22, "ImageContainer");
$RefreshReg$(_c3, "HeaderBackground");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  HeaderBackground_default as default
};
//# sourceMappingURL=/build/_shared/HeaderBackground-BT3MEQQV.js.map
