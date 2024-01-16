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

     
    </>
  );
};

export default Link;
