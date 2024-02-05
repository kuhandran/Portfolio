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

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-UXXKKAFM.css";

// app/root.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
var meta = () => [{
  charset: "utf-8",
  title: "Kuhandran Portfolio",
  viewport: "width=device-width,initial-scale=1"
}], links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV("head", { children: [
      /* @__PURE__ */ jsxDEV(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { children: [
      /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
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

// app/components/waterSplash/WaterSplash.jsx
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var WaterSplash = () => {
  let group = useRef();
  return useEffect(() => {
    let scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3), renderer = new THREE.WebGLRenderer({ antialias: !0 });
    renderer.setSize(window.innerWidth, window.innerHeight), renderer.setClearColor(16777215), document.body.appendChild(renderer.domElement), (() => {
      let flowers = new THREE.Group();
      for (let i = 0; i < 20; i++) {
        let geometry = new THREE.TetrahedronGeometry(0.1), material = new THREE.MeshBasicMaterial({ color: 16119260 }), flower = new THREE.Mesh(geometry, material);
        flower.position.x = (Math.random() - 0.5) * 10, flower.position.y = Math.random() * 2, flower.position.z = (Math.random() - 0.5) * 10, flowers.add(flower);
      }
      scene.add(flowers);
      let animateFlowers = () => {
        flowers.children.forEach((flower) => {
          flower.rotation.x += 0.01, flower.rotation.y += 0.01, flower.position.y = Math.sin(flower.rotation.x) * 2;
        });
      }, animate = () => {
        requestAnimationFrame(animate), animateFlowers(), renderer.render(scene, camera);
      };
      animate();
    })(), camera.position.z = 5;
    let handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight);
    };
    return window.addEventListener("resize", handleResize), () => {
      document.body.removeChild(renderer.domElement), window.removeEventListener("resize", handleResize);
    };
  }, []), /* @__PURE__ */ jsxDEV2("div", { ref: group }, void 0, !1, {
    fileName: "app/components/waterSplash/WaterSplash.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}, WaterSplash_default = WaterSplash;

// app/components/HeaderPage/HeaderPage.jsx
import { Component } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var HeaderPage = class extends Component {
  render() {
    return /* @__PURE__ */ jsxDEV3("div", { className: "bg-transparent", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "text-3xl font-bold underline", children: "Kuhandran Samudrapandiyan" }, void 0, !1, {
        fileName: "app/components/HeaderPage/HeaderPage.jsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "subtitle", children: "Innovative Solution Engineer cum Project Manager" }, void 0, !1, {
        fileName: "app/components/HeaderPage/HeaderPage.jsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this);
  }
}, HeaderPage_default = HeaderPage;

// app/components/HeaderBackground/HeaderBackground.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var HeaderBackground = () => /* @__PURE__ */ jsxDEV4("div", { children: [
  /* @__PURE__ */ jsxDEV4(WaterSplash_default, {}, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 11,
    columnNumber: 10
  }, this),
  /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(HeaderPage_default, {}, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
  lineNumber: 10,
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
  return /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(Headers, {}, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-FAPNTWT2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-YLW4AXUA.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-TSBYFMHC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3GUY3HY6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WFGOT64R.js", imports: ["/build/_shared/chunk-TKLZG2P4.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-P4WBK2WF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/experince": { id: "routes/experince", parentId: "root", path: "experince", index: void 0, caseSensitive: void 0, module: "/build/routes/experince-OXEKRUWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/header": { id: "routes/header", parentId: "root", path: "header", index: void 0, caseSensitive: void 0, module: "/build/routes/header-AOFWRJ3S.js", imports: ["/build/_shared/chunk-TKLZG2P4.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-SCSWS2W4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ab355440", hmr: { runtime: "/build/_shared/chunk-TSBYFMHC.js", timestamp: 1707117975823 }, url: "/build/manifest-AB355440.js" };

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
