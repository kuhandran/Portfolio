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
import { jsxDEV } from "react/jsx-dev-runtime";
var meta = () => [{
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}];
function App() {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV("head", { children: [
      /* @__PURE__ */ jsxDEV(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { children: [
      /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
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
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV2("header", {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this);
}

// app/routes/header.jsx
var header_exports = {};
__export(header_exports, {
  default: () => header
});
import "react";

// app/components/waterSplash.jsx
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var waterSplash = () => {
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
  }, []), /* @__PURE__ */ jsxDEV3("div", { ref: group }, void 0, !1, {
    fileName: "app/components/waterSplash.jsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}, waterSplash_default = waterSplash;

// app/routes/header.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function header() {
  return /* @__PURE__ */ jsxDEV4(waterSplash_default, {}, void 0, !1, {
    fileName: "app/routes/header.jsx",
    lineNumber: 7,
    columnNumber: 11
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV5("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ jsxDEV5("h1", { children: "Welcome  about to Remix" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 4,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("ul", { children: [
      /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
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
      /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
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
      /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-FAPNTWT2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-YLW4AXUA.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-TSBYFMHC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Q3PZCZ7H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-E6IXI73B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-P4WBK2WF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/experince": { id: "routes/experince", parentId: "root", path: "experince", index: void 0, caseSensitive: void 0, module: "/build/routes/experince-OXEKRUWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/header": { id: "routes/header", parentId: "root", path: "header", index: void 0, caseSensitive: void 0, module: "/build/routes/header-GCLU44T7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-SCSWS2W4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ec74e579", hmr: { runtime: "/build/_shared/chunk-TSBYFMHC.js", timestamp: 1707057303773 }, url: "/build/manifest-EC74E579.js" };

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
