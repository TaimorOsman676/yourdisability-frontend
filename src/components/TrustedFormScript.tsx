import { useEffect } from "react";

const TrustedFormScript = () => {
  useEffect(() => {
    const loadTrustedForm = () => {
      // Check if TrustedForm script is already loaded!
      if (
        !document.querySelector('script[src*="trustedform.com/trustedform.js"]')
      ) {
        console.log("______________________________________trustedform")
        const tf = document.createElement("script");
        tf.type = "text/javascript";
        tf.async = true;
        tf.src =
          (document.location.protocol === "https:" ? "https" : "http") +
          "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" +
          new Date().getTime() +
          Math.random();
        const s:any = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(tf, s);
      }
    };

    loadTrustedForm();
  }, []);

  return (
    <>
      <noscript>
        <img src="https://api.trustedform.com/ns.gif" alt="TrustedForm" />
      </noscript>
    </>
  );
};

export default TrustedFormScript;
