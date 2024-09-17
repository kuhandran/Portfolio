import type { MetaFunction, LinksFunction  } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./root.css";
import "~/tailwind.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import 'react-chatbot-kit/build/main.css';


export const meta: MetaFunction = () => [{
  charset: "utf-8",
  title: "Kuhandran Portfolio",
  viewport: "width=device-width,initial-scale=1",
  content:"width=device-width",
  initial:"scale=1",
  name:"viewport"
}];

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta/>
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
