import { useEffect } from 'react';

const Analytics = ({ measurementId }) => {
  useEffect(() => {
    // Check if in production and if GA script is already loaded
    if (process.env.NODE_ENV === 'production' && !window.gtag) {
      // Create script elements for Google Analytics
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { 'anonymize_ip': true });
      `;
      
      // Add scripts to document
      document.head.appendChild(script1);
      document.head.appendChild(script2);
      
      return () => {
        // Cleanup if component unmounts
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, [measurementId]);

  return null; // Renders nothing
};

export default Analytics;
