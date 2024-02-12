var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// css-side-effects-plugin-ns:app/components/HeaderBackground/HeaderBackground.css
var init_ = __esm({
  "css-side-effects-plugin-ns:app/components/HeaderBackground/HeaderBackground.css"() {
  }
});

// css-side-effects-plugin-ns:app/components/HeaderPage/HeaderPage.css
var init_2 = __esm({
  "css-side-effects-plugin-ns:app/components/HeaderPage/HeaderPage.css"() {
  }
});

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
var HeaderPage, HeaderPage_default, init_HeaderPage = __esm({
  "app/components/HeaderPage/HeaderPage.jsx"() {
    "use strict";
    init_2();
    HeaderPage = () => /* @__PURE__ */ jsxDEV2("div", { className: "relative", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-[530px] lg:max-w-[750px]", children: [
      /* @__PURE__ */ jsxDEV2("h1", { className: "text-3xl font-bold  sm:text-4xl lg:text-5xl xl:text-6xl", children: "Kuhandran Samudrapandiyan" }, void 0, !1, {
        fileName: "app/components/HeaderPage/HeaderPage.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { className: "subtimax-w-[500px] mt-6 text-lg font-medium xl:max-w-lg md:text-xl 2xl:text-100 xl:leading-snug lg:text-2xltle", children: "Experienced in project management, React development, Scrum Master, banking, insurance, regulatory, fintech, JavaScript, Redux, Webpack." }, void 0, !1, {
        fileName: "app/components/HeaderPage/HeaderPage.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { className: "flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-10", children: /* @__PURE__ */ jsxDEV2("button", { onClick: downloadPdf, className: "bg-amber-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow", children: "Download resume" }, void 0, !1, {
        fileName: "app/components/HeaderPage/HeaderPage.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/HeaderPage/HeaderPage.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/HeaderPage/HeaderPage.jsx",
      lineNumber: 35,
      columnNumber: 5
    }, this), HeaderPage_default = HeaderPage;
  }
});

// app/images/personal.png
var personal_default, init_personal = __esm({
  "app/images/personal.png"() {
    personal_default = "/build/_assets/personal-4QSJGZLS.png";
  }
});

// app/components/ImageContainer/ImageContainer.jsx
var ImageContainer_exports = {};
__export(ImageContainer_exports, {
  default: () => ImageContainer_default
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var ImageContainer, ImageContainer_default, init_ImageContainer = __esm({
  "app/components/ImageContainer/ImageContainer.jsx"() {
    "use strict";
    init_personal();
    ImageContainer = () => /* @__PURE__ */ jsxDEV3("img", { className: "lazy absolute top-0 right-0 object-cover object-right-bottom max-w-screen-xl translate-x-1/2 md:translate-x-1/4 2xl:translate-x-0 bg-clip-padding xl:h-full", src: personal_default }, void 0, !1, {
      fileName: "app/components/ImageContainer/ImageContainer.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this), ImageContainer_default = ImageContainer;
  }
});

// app/components/HeaderBackground/HeaderBackground.jsx
var HeaderBackground_exports = {};
__export(HeaderBackground_exports, {
  default: () => HeaderBackground_default
});
import { lazy } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var ImageContainer2, HeaderBackground, HeaderBackground_default, init_HeaderBackground = __esm({
  "app/components/HeaderBackground/HeaderBackground.jsx"() {
    "use strict";
    init_();
    init_HeaderPage();
    ImageContainer2 = lazy(() => Promise.resolve().then(() => (init_ImageContainer(), ImageContainer_exports))), HeaderBackground = () => /* @__PURE__ */ jsxDEV4("article", { className: "flex flex-col overflow-x-hidden", children: /* @__PURE__ */ jsxDEV4("div", { className: "relative px-6 pt-40 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100", children: [
      /* @__PURE__ */ jsxDEV4(HeaderPage_default, {}, void 0, !1, {
        fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV4(ImageContainer2, {}, void 0, !1, {
        fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
      lineNumber: 13,
      columnNumber: 8
    }, this) }, void 0, !1, {
      fileName: "app/components/HeaderBackground/HeaderBackground.jsx",
      lineNumber: 12,
      columnNumber: 5
    }, this), HeaderBackground_default = HeaderBackground;
  }
});

// css-side-effects-plugin-ns:app/components/HeaderNavigation/HeaderNavigation.css
var init_3 = __esm({
  "css-side-effects-plugin-ns:app/components/HeaderNavigation/HeaderNavigation.css"() {
  }
});

// app/components/HeaderNavigation/HeaderNavigation.jsx
var HeaderNavigation_exports = {};
__export(HeaderNavigation_exports, {
  default: () => HeaderNavigation_default
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var HeaderNavigation, HeaderNavigation_default, init_HeaderNavigation = __esm({
  "app/components/HeaderNavigation/HeaderNavigation.jsx"() {
    "use strict";
    init_3();
    HeaderNavigation = () => /* @__PURE__ */ jsxDEV5("nav", { className: "sticky top-0 z-50 w-full bg-amber-100 border-b border-amber-100", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-5", children: [
      /* @__PURE__ */ jsxDEV5("span", { children: "KS Portfolio" }, void 0, !1, {
        fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
        lineNumber: 9,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "hidden w-full md:block md:w-auto", children: /* @__PURE__ */ jsxDEV5("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0", children: [
        /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5("a", { className: "hidden font-semibold md:inline", children: "About us" }, void 0, !1, {
          fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
          lineNumber: 17,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
          lineNumber: 16,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5("a", { className: "hidden font-semibold md:inline", children: "Projects" }, void 0, !1, {
          fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
          lineNumber: 20,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
          lineNumber: 19,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5("a", { className: "hidden font-semibold md:inline", children: "Technical Specfications" }, void 0, !1, {
          fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
          lineNumber: 23,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/HeaderNavigation/HeaderNavigation.jsx",
          lineNumber: 22,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5("a", { className: "hidden font-semibold md:inline", children: "Contact us" }, void 0, !1, {
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
  }
});

// app/components/ContentContainer/ContentContainer.jsx
var ContentContainer_exports = {};
__export(ContentContainer_exports, {
  default: () => ContentContainer_default
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var ContentContainer, ContentContainer_default, init_ContentContainer = __esm({
  "app/components/ContentContainer/ContentContainer.jsx"() {
    "use strict";
    ContentContainer = () => /* @__PURE__ */ jsxDEV6("div", { className: "px-10 py-10 bg-amber-100 border-b border-amber-100", children: [
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
  }
});

// app/images/banking.png
var banking_default, init_banking = __esm({
  "app/images/banking.png"() {
    banking_default = "/build/_assets/banking-W5J4YEK3.png";
  }
});

// app/components/MilestoneContainer/MilestoneContainer.jsx
var MilestoneContainer_exports = {};
__export(MilestoneContainer_exports, {
  default: () => MilestoneContainer_default
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var MilestoneContainer, MilestoneContainer_default, init_MilestoneContainer = __esm({
  "app/components/MilestoneContainer/MilestoneContainer.jsx"() {
    "use strict";
    init_banking();
    MilestoneContainer = () => /* @__PURE__ */ jsxDEV7("div", { className: "p-10", children: /* @__PURE__ */ jsxDEV7("div", { className: "p-4", children: /* @__PURE__ */ jsxDEV7("a", { href: "#", className: "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-amber-500 dark:bg-amber-200 dark:hover:bg-amber-300", children: [
      /* @__PURE__ */ jsxDEV7("img", { className: "object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 lg:w- md:rounded-none md:rounded-s-lg", src: banking_default, alt: "" }, void 0, !1, {
        fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col justify-between p-4 leading-normal", children: [
        /* @__PURE__ */ jsxDEV7("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white", children: "Enhanced Online Retail Banking UI/UX Project with React" }, void 0, !1, {
          fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
          lineNumber: 12,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "mb-3 font-normal text-gray-700 dark:text-gray-400", children: "The project focused on enhancing the user interface and user experience of an online retail banking platform using React. Key responsibilities included upgrading libraries, providing solutions for architectural challenges, creating dynamic architecture, designing the Work Breakdown Structure (WBS), establishing timelines, supporting deployment, managing incident reports, guiding vendor development, and ensuring strict adherence to code quality standards." }, void 0, !1, {
          fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
          lineNumber: 13,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/MilestoneContainer/MilestoneContainer.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this), MilestoneContainer_default = MilestoneContainer;
  }
});

// app/components/FooterContainer/FooterContainer.jsx
var FooterContainer_exports = {};
__export(FooterContainer_exports, {
  default: () => FooterContainer_default
});
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var FooterContainer, FooterContainer_default, init_FooterContainer = __esm({
  "app/components/FooterContainer/FooterContainer.jsx"() {
    "use strict";
    FooterContainer = () => /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-col min-h-screen fixed bottom-0 left-0 sticky top-[100vh]", children: /* @__PURE__ */ jsxDEV8(
      "footer",
      {
        className: "flex flex-col items-center bg-neutral-900 text-center text-white sticky top-[100vh]",
        children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "container px-6 pt-6", children: /* @__PURE__ */ jsxDEV8("div", { className: "mb-6 flex justify-center", children: [
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#!",
                type: "button",
                className: "m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
                "data-te-ripple-init": !0,
                "data-te-ripple-color": "light"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FooterContainer/FooterContainer.jsx",
                lineNumber: 13,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#!",
                type: "button",
                className: "m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
                "data-te-ripple-init": !0,
                "data-te-ripple-color": "light"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FooterContainer/FooterContainer.jsx",
                lineNumber: 22,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#!",
                type: "button",
                className: "m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
                "data-te-ripple-init": !0,
                "data-te-ripple-color": "light"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FooterContainer/FooterContainer.jsx",
                lineNumber: 31,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#!",
                type: "button",
                className: "m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
                "data-te-ripple-init": !0,
                "data-te-ripple-color": "light"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FooterContainer/FooterContainer.jsx",
                lineNumber: 40,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#!",
                type: "button",
                className: "m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
                "data-te-ripple-init": !0,
                "data-te-ripple-color": "light"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FooterContainer/FooterContainer.jsx",
                lineNumber: 49,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#!",
                type: "button",
                className: "m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
                "data-te-ripple-init": !0,
                "data-te-ripple-color": "light"
              },
              void 0,
              !1,
              {
                fileName: "app/components/FooterContainer/FooterContainer.jsx",
                lineNumber: 58,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/FooterContainer/FooterContainer.jsx",
            lineNumber: 12,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/FooterContainer/FooterContainer.jsx",
            lineNumber: 11,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "w-full p-4 text-center", children: [
            "\xA9 2023 Copyright:",
            /* @__PURE__ */ jsxDEV8("a", { className: "text-whitehite", href: "https://tw-elements.com/", children: "KS Porfolio Powered by Tailwind & Remix" }, void 0, !1, {
              fileName: "app/components/FooterContainer/FooterContainer.jsx",
              lineNumber: 68,
              columnNumber: 74
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FooterContainer/FooterContainer.jsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/FooterContainer/FooterContainer.jsx",
        lineNumber: 9,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/FooterContainer/FooterContainer.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this), FooterContainer_default = FooterContainer;
  }
});

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
var cssBundleHref = "/build/css-bundle-YKAVMBED.css";

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
import React from "react";
import { lazy as lazy2 } from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var HeaderBackground2 = lazy2(() => Promise.resolve().then(() => (init_HeaderBackground(), HeaderBackground_exports))), HeaderNavigation2 = lazy2(() => Promise.resolve().then(() => (init_HeaderNavigation(), HeaderNavigation_exports))), ContentContainer2 = lazy2(() => Promise.resolve().then(() => (init_ContentContainer(), ContentContainer_exports))), MilestoneContainer2 = lazy2(() => Promise.resolve().then(() => (init_MilestoneContainer(), MilestoneContainer_exports))), FooterContainer2 = lazy2(() => Promise.resolve().then(() => (init_FooterContainer(), FooterContainer_exports)));
function Headers() {
  return /* @__PURE__ */ jsxDEV9(React.Fragment, { children: [
    /* @__PURE__ */ jsxDEV9(HeaderNavigation2, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(HeaderBackground2, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(ContentContainer2, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(MilestoneContainer2, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(FooterContainer2, {}, void 0, !1, {
      fileName: "app/routes/header.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/header.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
import React2 from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV10(React2.Fragment, { children: /* @__PURE__ */ jsxDEV10(Headers, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GVEUOY5R.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-M3SCSKV2.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-TSBYFMHC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TG42SU5U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZDP52XO6.js", imports: ["/build/_shared/chunk-BOHDSAFF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/header": { id: "routes/header", parentId: "root", path: "header", index: void 0, caseSensitive: void 0, module: "/build/routes/header-5GU77RIX.js", imports: ["/build/_shared/chunk-BOHDSAFF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-SCSWS2W4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "97e03889", hmr: { runtime: "/build/_shared/chunk-TSBYFMHC.js", timestamp: 1707707059163 }, url: "/build/manifest-97E03889.js" };

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
