var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { handleRequest } from "@netlify/remix-adapter";

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-ZRDYSHBC.css";

// app/root.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
var meta = () => [{
  charset: "utf-8",
  title: "Kuhandran Portfolio",
  viewport: "width=device-width,initial-scale=1"
}], links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV("head", { children: [
      /* @__PURE__ */ jsxDEV(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { children: [
      /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/experince.tsx
var experince_exports = {};

// app/routes/projects.tsx
var projects_exports = {};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  headers: () => headers
});

// app/routes/header.jsx
var header_exports = {};
__export(header_exports, {
  default: () => Headers
});
import "react";

// app/components/HeaderBackground/HeaderBackground.jsx
import "react";

// app/images/personal.png
var personal_default = "/build/_assets/personal-4WCQVKHW.png";

// app/components/HeaderPage/HeaderPage.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var HeaderPage = () => /* @__PURE__ */ jsxDEV2("div", { className: "relative", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-[530px] lg:max-w-[750px]", children: [
  /* @__PURE__ */ jsxDEV2("h1", { className: "text-3xl font-bold  sm:text-4xl lg:text-5xl xl:text-6xl", children: "Kuhandran Samudrapandiyan" }, void 0, !1, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: "subtimax-w-[500px] mt-6 text-lg font-medium xl:max-w-lg md:text-xl 2xl:text-100 xl:leading-snug lg:text-2xltle", children: "Experienced in project management, React development, Scrum Master, banking, insurance, regulatory, fintech, JavaScript, Redux, Webpack." }, void 0, !1, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HeaderPage/HeaderPage.jsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/HeaderPage/HeaderPage.jsx",
  lineNumber: 7,
  columnNumber: 5
}, this), HeaderPage_default = HeaderPage;

// app/components/ImageContainer/ImageContainer.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var ImageContainer = () => /* @__PURE__ */ jsxDEV3("img", { className: "lazy absolute top-0 right-0 object-cover object-right-bottom max-w-screen-xl translate-x-1/2 md:translate-x-1/4 2xl:translate-x-0 bg-clip-padding xl:h-full", src: personal_default }, void 0, !1, {
  fileName: "app/components/ImageContainer/ImageContainer.jsx",
  lineNumber: 8,
  columnNumber: 9
}, this), ImageContainer_default = ImageContainer;

// app/components/HeaderBackground/HeaderBackground.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var HeaderBackground = () => /* @__PURE__ */ jsxDEV4("div", { className: "relative px-6 py-48 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100", children: [
  /* @__PURE__ */ jsxDEV4(HeaderPage_default, {}, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV4(ImageContainer_default, {}, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
  lineNumber: 11,
  columnNumber: 5
}, this), HeaderBackground_default = HeaderBackground;

// app/routes/header.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Headers() {
  return /* @__PURE__ */ jsxDEV5(HeaderBackground_default, {}, void 0, !1, {
    fileName: "app/routes/header.jsx",
    lineNumber: 7,
    columnNumber: 11
  }, this);
}

// app/routes/_index.tsx
import React3 from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function headers({
  loaderHeaders,
  parentHeaders
}) {
  return console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  ), {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60"
  };
}
function Index() {
  return /* @__PURE__ */ jsxDEV6(React3.Fragment, { children: /* @__PURE__ */ jsxDEV6(Headers, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV7("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ jsxDEV7("h1", { children: "Welcome  about to Remix" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 4,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("ul", { children: [
      /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer noopener",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 7,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 6,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer noopener",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 16,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("li", { children: /* @__PURE__ */ jsxDEV7(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/docs",
          rel: "noreferrer noopener",
          children: "Remix Docs"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 25,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AHH37GSA.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-YLW4AXUA.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-TSBYFMHC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5UKGDH75.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ODBMULC4.js", imports: ["/build/_shared/chunk-VNLBWO3K.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-P4WBK2WF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/experince": { id: "routes/experince", parentId: "root", path: "experince", index: void 0, caseSensitive: void 0, module: "/build/routes/experince-OXEKRUWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/header": { id: "routes/header", parentId: "root", path: "header", index: void 0, caseSensitive: void 0, module: "/build/routes/header-SLSK3HPI.js", imports: ["/build/_shared/chunk-VNLBWO3K.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-SCSWS2W4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "36941c0c", hmr: { runtime: "/build/_shared/chunk-TSBYFMHC.js", timestamp: 1707576301888 }, url: "/build/manifest-36941C0C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/experince": {
    id: "routes/experince",
    parentId: "root",
    path: "experince",
    index: void 0,
    caseSensitive: void 0,
    module: experince_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/header": {
    id: "routes/header",
    parentId: "root",
    path: "header",
    index: void 0,
    caseSensitive: void 0,
    module: header_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
