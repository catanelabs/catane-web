/**
 * Google Analytics Event Tracking Helper
 * Provides standardized event functions for tracking user interactions in Google Analytics (gtag.js)
 */

/**
 * Low-level event dispatcher to window.gtag
 * @param {string} eventName - Standard or custom GA4 event name
 * @param {Object} parameters - Custom parameters object
 */
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
    });
  }
};

/**
 * Track Call-to-Action (CTA) button clicks
 * @param {string} buttonName - Label/text of the button clicked
 * @param {string} location - UI context (e.g., 'hero', 'navbar', 'services', 'final_cta')
 */
export const trackCTAClick = (buttonName, location = "page") => {
  trackEvent("cta_click", {
    button_name: buttonName,
    location: location,
  });
};

/**
 * Track Header & Footer navigation link clicks
 * @param {string} linkName - Name of the section or route clicked
 * @param {string} location - 'navbar' | 'footer'
 */
export const trackNavClick = (linkName, location = "navbar") => {
  trackEvent("navigation_click", {
    link_name: linkName,
    location: location,
  });
};

/**
 * Track when the project inquiry modal is opened
 * @param {string} source - Origin of the trigger (e.g., 'navbar', 'hero', 'services_01', 'final_cta')
 */
export const trackInquiryModalOpen = (source = "unknown") => {
  trackEvent("inquiry_modal_open", {
    source: source,
  });
};

/**
 * Track when the project inquiry modal is closed
 */
export const trackInquiryModalClose = () => {
  trackEvent("inquiry_modal_close");
};

/**
 * Track inquiry form submission attempts
 * @param {'whatsapp' | 'email'} method - Communication channel chosen
 * @param {boolean} hasMessage - Whether user provided custom message details
 */
export const trackInquirySubmit = (method, hasMessage = false) => {
  trackEvent("inquiry_submit", {
    method: method,
    has_message: hasMessage,
  });
};

/**
 * Track direct contact channel clicks (WhatsApp, Email, Phone)
 * @param {'whatsapp' | 'email' | 'phone'} channel - Contact channel type
 * @param {string} location - UI location where contact link was clicked
 */
export const trackContactChannelClick = (channel, location = "unknown") => {
  trackEvent("contact_channel_click", {
    channel: channel,
    location: location,
  });
};

/**
 * Track selection/expansion of service capability cards
 * @param {string} serviceTitle - Title of the service card
 * @param {string} serviceId - Service card index/identifier
 */
export const trackServiceSelect = (serviceTitle, serviceId) => {
  trackEvent("service_select", {
    service_title: serviceTitle,
    service_id: serviceId,
  });
};

/**
 * Track selection/interaction with development process steps
 * @param {string} stepTitle - Name of the process step (e.g. 'DISCOVER', 'PLAN')
 * @param {string} stepNum - Step number ('01', '02', etc.)
 */
export const trackProcessStepSelect = (stepTitle, stepNum) => {
  trackEvent("process_step_select", {
    step_title: stepTitle,
    step_number: stepNum,
  });
};

/**
 * Track portfolio concept card interactions
 * @param {string} projectTitle - Title of the project concept
 * @param {string} action - 'card_click' | 'preview_modal_open'
 */
export const trackConceptWorkView = (projectTitle, action = "card_click") => {
  trackEvent("concept_work_view", {
    project_title: projectTitle,
    action: action,
  });
};

/**
 * Track section scroll visibility
 * @param {string} sectionId - ID of section entered into viewport
 */
export const trackSectionView = (sectionId) => {
  trackEvent("section_view", {
    section_id: sectionId,
  });
};

/**
 * Track scroll depth milestones (25%, 50%, 75%, 90%)
 * @param {number} depthPercentage - Milestone scroll percentage
 */
export const trackScrollDepth = (depthPercentage) => {
  trackEvent("scroll_depth", {
    depth_percentage: depthPercentage,
  });
};