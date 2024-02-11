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
var cssBundleHref = "/build/css-bundle-L6Q2LDOT.css";

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
import React2 from "react";

// app/components/HeaderBackground/HeaderBackground.jsx
import "react";

// app/images/personal.png
var personal_default = "/build/_assets/personal-4WCQVKHW.png";

// app/components/HeaderPage/HeaderPage.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function downloadPdf() {
  let pdfUrl = "http://" + window.location.hostname + ":" + window.location.port + "/Resources/KuhandranResume2024.pdf";
  fetch(pdfUrl).then((response) => {
    if (!response.ok)
      throw new Error("Network response was not ok");
    return response.blob();
  }).then((blob) => {
    let url = window.URL.createObjectURL(new Blob([blob])), link = document.createElement("a");
    link.href = url, link.setAttribute("download", "your_pdf_filename.pdf"), document.body.appendChild(link), link.click(), link.parentNode.removeChild(link);
  }).catch((error) => console.error("There was a problem with the fetch operation:", error));
}
var HeaderPage = () => /* @__PURE__ */ jsxDEV2("div", { className: "relative", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-[530px] lg:max-w-[750px]", children: [
  /* @__PURE__ */ jsxDEV2("h1", { className: "text-3xl font-bold  sm:text-4xl lg:text-5xl xl:text-6xl", children: "Kuhandran Samudrapandiyan" }, void 0, !1, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: "subtimax-w-[500px] mt-6 text-lg font-medium xl:max-w-lg md:text-xl 2xl:text-100 xl:leading-snug lg:text-2xltle", children: "Experienced in project management, React development, Scrum Master, banking, insurance, regulatory, fintech, JavaScript, Redux, Webpack." }, void 0, !1, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 39,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: "flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-10", children: /* @__PURE__ */ jsxDEV2("button", { onClick: downloadPdf, className: "bg-amber-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow", children: "Download resume" }, void 0, !1, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/HeaderPage/HeaderPage.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HeaderPage/HeaderPage.jsx",
  lineNumber: 37,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/HeaderPage/HeaderPage.jsx",
  lineNumber: 36,
  columnNumber: 5
}, this), HeaderPage_default = HeaderPage;

// app/components/ImageContainer/ImageContainer.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var ImageContainer = () => /* @__PURE__ */ jsxDEV3("img", { className: "lazy absolute top-0 right-0 object-cover object-right-bottom max-w-screen-xl translate-x-1/2 md:translate-x-1/4 2xl:translate-x-0 bg-clip-padding xl:h-full", src: personal_default }, void 0, !1, {
  fileName: "app/components/ImageContainer/ImageContainer.jsx",
  lineNumber: 7,
  columnNumber: 9
}, this), ImageContainer_default = ImageContainer;

// app/components/HeaderNavigation/HeaderNavigation.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var HeaderNavigation = () => /* @__PURE__ */ jsxDEV4("nav", { className: "sticky top-0 z-50 w-full bg-amber-100 border-b border-amber-100", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-5", children: [
  /* @__PURE__ */ jsxDEV4("span", { children: "KS Portfolio" }, void 0, !1, {
    fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
    lineNumber: 9,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ jsxDEV4("div", { className: "hidden w-full md:block md:w-auto", children: /* @__PURE__ */ jsxDEV4("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0", children: [
    /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { className: "hidden font-semibold md:inline", children: "About us" }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 17,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 16,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { className: "hidden font-semibold md:inline", children: "Projects" }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 20,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 19,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { className: "hidden font-semibold md:inline", children: "Technical Specfications" }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 23,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 22,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("a", { className: "hidden font-semibold md:inline", children: "Contact us" }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 26,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
      lineNumber: 25,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
    lineNumber: 15,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
    lineNumber: 14,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
  lineNumber: 8,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
  lineNumber: 7,
  columnNumber: 5
}, this), HeaderNavigation_default = HeaderNavigation;

// app/components/HeaderBackground/HeaderBackground.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var HeaderBackground = () => /* @__PURE__ */ jsxDEV5("article", { className: "flex flex-col overflow-x-hidden", children: /* @__PURE__ */ jsxDEV5("div", { className: "relative px-6 pt-60 pb-80 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100", children: [
  /* @__PURE__ */ jsxDEV5(HeaderPage_default, {}, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV5(ImageContainer_default, {}, void 0, !1, {
    fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
  lineNumber: 15,
  columnNumber: 8
}, this) }, void 0, !1, {
  fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
  lineNumber: 14,
  columnNumber: 5
}, this), HeaderBackground_default = HeaderBackground;

// app/components/ContentContainer/ContentContainer.jsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var ContentContainer = () => /* @__PURE__ */ jsxDEV6("div", { className: "px-10 py-10 bg-amber-100 border-b border-amber-100", children: [
  /* @__PURE__ */ jsxDEV6("h2", { className: "mb-6 text-3xl font-extrabold text-center leading-none tracking-tight text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-black", children: "Empowering Businesses Through Expertise and Leadership (Project Manager)" }, void 0, !1, {
    fileName: "app/components/ContentContainer/ContentContainer.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV6("p", { className: "mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400", children: "Welcome to my professional portfolio. With a proven track record spanning over six years, I specialize in project management and React frontend development, supported by a Scrum Master certification. My journey began in the dynamic realms of banking and insurance, where I cultivated a deep understanding of regulatory frameworks and fintech advancements across the Asian region. This foundation has been instrumental in navigating complex landscapes and delivering innovative solutions tailored to diverse industry needs." }, void 0, !1, {
    fileName: "app/components/ContentContainer/ContentContainer.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV6("h2", { className: "mb-6 text-3xl font-extrabold text-center leading-none tracking-tight text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-black", children: "Technical Proficiency and Collaborative Leadership (Team Lead and Developer)" }, void 0, !1, {
    fileName: "app/components/ContentContainer/ContentContainer.jsx",
    lineNumber: 8,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV6("p", { className: "mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400", children: "Proficient in JavaScript, React.js, Redux, and Webpack, I am dedicated to crafting robust and scalable solutions that drive business success. My approach is rooted in collaborative leadership, fostering cohesive teams and efficient project execution. I am driven by a passion for leveraging technology to empower businesses and deliver exceptional results. Let's embark on a journey of innovation together and unlock the full potential of your projects." }, void 0, !1, {
    fileName: "app/components/ContentContainer/ContentContainer.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ContentContainer/ContentContainer.jsx",
  lineNumber: 5,
  columnNumber: 9
}, this), ContentContainer_default = ContentContainer;

// app/components/MilestoneContainer/MilestoneContainer.jsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var MilestoneContainer = () => /* @__PURE__ */ jsxDEV7("div", { className: "block py-28 px-80 bg-white", children: /* @__PURE__ */ jsxDEV7("ol", { className: "relative border-s border-gray-200 dark:border-gray-700", children: [
  /* @__PURE__ */ jsxDEV7("li", { className: "mb-10 ms-6", children: [
    /* @__PURE__ */ jsxDEV7("span", { className: "absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8  dark:ring-gray-900 dark:bg-blue-900" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("h3", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900 ", children: [
      "Flowbite Application UI v2.0.0 ",
      /* @__PURE__ */ jsxDEV7("span", { className: "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3", children: "Latest" }, void 0, !1, {
        fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
        lineNumber: 10,
        columnNumber: 128
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 10,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("time", { className: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: "Released on January 13th, 2022" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 11,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages." }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 12,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ jsxDEV7("li", { className: "mb-10 ms-6", children: [
    /* @__PURE__ */ jsxDEV7("span", { className: "absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 dark:ring-gray-900 dark:bg-blue-900" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 15,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("h3", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900", children: [
      "Flowbite Application UI v2.0.0 ",
      /* @__PURE__ */ jsxDEV7("span", { className: "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3", children: "Latest" }, void 0, !1, {
        fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
        lineNumber: 17,
        columnNumber: 127
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("time", { className: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", children: "Released on January 13th, 2022" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 18,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400", children: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages." }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 19,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
    lineNumber: 14,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ jsxDEV7("li", { className: "mb-10 ms-6", children: [
    /* @__PURE__ */ jsxDEV7("span", { className: "absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 dark:ring-gray-900 dark:bg-blue-900" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 22,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("h3", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 24,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("time", { className: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 25,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400" }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 26,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
    lineNumber: 21,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
  lineNumber: 5,
  columnNumber: 9
}, this), MilestoneContainer_default = MilestoneContainer;

// app/routes/header.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Headers() {
  return /* @__PURE__ */ jsxDEV8(React2.Fragment, { children: [
    /* @__PURE__ */ jsxDEV8(HeaderNavigation_default, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(HeaderBackground_default, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(ContentContainer_default, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(MilestoneContainer_default, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/header.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
import React3 from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV9(React3.Fragment, { children: /* @__PURE__ */ jsxDEV9(Headers, {}, void 0, !1, {
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
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV10("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ jsxDEV10("h1", { children: "Welcome  about to Remix" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 4,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("ul", { children: [
      /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(
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
      /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(
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
      /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-AHH37GSA.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-YLW4AXUA.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-TSBYFMHC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PTKIAXYM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UZDT6NNW.js", imports: ["/build/_shared/chunk-T4WCJRIM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-P4WBK2WF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/experince": { id: "routes/experince", parentId: "root", path: "experince", index: void 0, caseSensitive: void 0, module: "/build/routes/experince-OXEKRUWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/header": { id: "routes/header", parentId: "root", path: "header", index: void 0, caseSensitive: void 0, module: "/build/routes/header-4ZOETHTA.js", imports: ["/build/_shared/chunk-T4WCJRIM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-SCSWS2W4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "9f90087b", hmr: { runtime: "/build/_shared/chunk-TSBYFMHC.js", timestamp: 1707631466862 }, url: "/build/manifest-9F90087B.js" };

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
