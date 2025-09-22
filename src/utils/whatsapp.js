export function buildWhatsApp(number, message = '') {
  const clean = String(number).replace(/\D/g, '');
  if (!clean) return null;
  const base = `https://wa.me/${clean}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
