// src/config.js
export const WA = {
  DEFAULT: import.meta.env.VITE_WHATSAPP_NUMBER || '523312345678', // fallback en dev
  COLIMA: import.meta.env.VITE_WHATSAPP_COLIMA || null,
  TIJUANA: import.meta.env.VITE_WHATSAPP_TIJUANA || null,
};