"use client";

import { useEffect } from "react";

export default function MessengerRedirect() {
  useEffect(() => {
    // Check if the user agent indicates Facebook Messenger or Facebook App's In-App Browser
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMessenger = /Messenger|FB_IAB|FBAV/i.test(ua);

    if (isMessenger) {
      if (confirm("Open this page in an external browser for the best experience?")) {
        // Attempt to open the current URL in a new window/system browser
        window.open(window.location.href, "_blank");
      }
    }
  }, []);

  return null;
}
