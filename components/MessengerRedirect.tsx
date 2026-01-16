"use client";

import { useEffect } from "react";

export default function MessengerRedirect() {
  useEffect(() => {
    // Check if the user agent indicates Facebook Messenger or Facebook App's In-App Browser
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMessenger = /Messenger|FB_IAB|FBAV/i.test(ua);

    if (isMessenger) {
      window.location.href = "https://www.google.com";
    }
  }, []);

  return null;
}
