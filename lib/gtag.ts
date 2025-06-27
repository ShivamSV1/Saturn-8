export const GA_TRACKING_ID = "G-VG8F111T8P";

// Extend the global Window interface
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Log page views
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
