import React, { useEffect } from "react";
import Head from "next/head";

const Link = () => {
  useEffect(() => {
    const loadWebFont = () => {
      WebFont.load({
        google: {
          families: [
            "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
            "Outfit:100,200,300,regular,500,600,700,800,900",
          ],
        },
      });
    };

    const setupTouchClass = () => {
      const n = document.documentElement;
      const t = " w-mod-";
      n.className += t + "js";
      ("ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)) &&
        (n.className += t + "touch");
    };
    loadWebFont();
    setupTouchClass();
  }, []);

  return (
    <>
      <link
        href="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/css/az-vancouver.webflow.df6466573.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
      <link
        href="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebedca00639535cf65728_Vancouver%20Fav.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebf739044333410cdfd63_Vancouver%20WebClip.png"
        rel="apple-touch-icon"
      />
      <link
        href="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebedca00639535cf65728_Vancouver%20Fav.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebf739044333410cdfd63_Vancouver%20WebClip.png"
        rel="apple-touch-icon"
      />
      <script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        type="text/javascript"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            WebFont.load({
              google: {
                families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Outfit:100,200,300,regular,500,600,700,800,900"]
              }
            });
          `,
        }}
      ></script>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62bc1260fe7b1f3d37a8ea01"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"
        type="text/javascript"
      ></script>
      {/* <script
        src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/js/webflow.88c0ebf46.js"
        type="text/javascript"
      ></script> */}
    </>
  );
};

export default Link;
