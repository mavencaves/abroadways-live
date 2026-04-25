export const CONTACT_EMAIL = "info@abroadways.com.bd";
export const CONTACT_ADDRESS = "260 Sareng Tower, Malibag, Dhaka-1217, Bangladesh";
export const CONTACT_PHONES = ["01898801960", "01898801961", "01898801962"] as const;
export const PRIMARY_WHATSAPP_NUMBER = "8801898801960";
export const FACEBOOK_URL = "https://www.facebook.com/abroadways";
export const INSTAGRAM_URL = "https://instagram.com/abroadwaysbd";

export const CONTACT_PHONE_LABEL = CONTACT_PHONES.join(", ");
export const CONTACT_PHONE_HREFS = CONTACT_PHONES.map((phone) => `tel:+88${phone}`);
export const CONTACT_MAP_URL = `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`;
