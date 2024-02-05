import { config as netlifyConfig } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
const appConfig = {
  future: {
    v2_routeConvention: true,
  },
  plugins: [
    require.resolve('@remix-run/plugin-react'),
    require.resolve('@remix-run/plugin-react-refresh'),
    require.resolve('@remix-run/plugin-legacy-context'),
    require.resolve('@remix-run/plugin-css'),
  ],
  ...(process.env.NODE_ENV === "production" ? netlifyConfig : undefined),
  // This works out of the box with the Netlify adapter, but you can
  // add your own custom config here if you want to.
  //
  // See https://remix.run/file-conventions/remix-config
};

export default appConfig;
