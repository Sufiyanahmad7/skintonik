declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const reportCallConversion = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18176357402/FaweCInDtpQdEJrolNtD',
      value: 1.0,
      currency: 'INR',
    });
  }
};
