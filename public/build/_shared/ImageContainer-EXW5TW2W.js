import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-TSBYFMHC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/images/personal.png
var personal_default = "/build/_assets/personal-4QSJGZLS.png";

// app/components/ImageContainer/ImageContainer.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ImageContainer/ImageContainer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ImageContainer/ImageContainer.jsx"
  );
  import.meta.hot.lastModified = "1707643836921.395";
}
var ImageContainer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "lazy absolute top-0 right-0 object-cover object-right-bottom max-w-screen-xl translate-x-1/2 md:translate-x-1/4 2xl:translate-x-0 bg-clip-padding xl:h-full", src: personal_default }, void 0, false, {
    fileName: "app/components/ImageContainer/ImageContainer.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = ImageContainer;
var ImageContainer_default = ImageContainer;
var _c;
$RefreshReg$(_c, "ImageContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ImageContainer_default as default
};
//# sourceMappingURL=/build/_shared/ImageContainer-EXW5TW2W.js.map
