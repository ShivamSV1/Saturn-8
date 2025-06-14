export const GA_TRACKING_ID = "G-VG8F111T8P";

// Log page views
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
