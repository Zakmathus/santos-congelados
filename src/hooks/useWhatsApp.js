import { useCallback } from 'react';
import { buildWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { WA } from '../config';

export default function useWhatsApp() {
  const open = useCallback((number = WA.DEFAULT, message = '') => {
    openWhatsApp(number, message);
  }, []);

  const url = useCallback((number = WA.DEFAULT, message = '') => {
    return buildWhatsAppUrl(number, message);
  }, []);

  return { open, url };
}
