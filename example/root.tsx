import { component$ } from "@builder.io/qwik";
import { IconContextProvider } from "../src";
import App from "./App";
import "./global.css";

export default component$(() => {
  return (
    <IconContextProvider
      {...{
        color: "currentColor",
        size: "1em",
        mirrored: false,
        weight: "regular",
      }}
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body lang="en">
        <App />
      </body>
    </IconContextProvider>
  );
});
