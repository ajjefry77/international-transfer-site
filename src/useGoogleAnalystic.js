// src/hooks/useGoogleAnalytics.js
import { useEffect } from 'react';

const useGoogleAnalytics = (trackingId) => {
  useEffect(() => {
    // جلوگیری از بارگذاری دوباره
    if (window.gtag) return;

    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(script2);
  }, [trackingId]);
};

export default useGoogleAnalytics;
