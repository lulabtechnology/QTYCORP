export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatWhatsapp(phone: string) {
  return phone.replace(/[^\d]/g, '');
}
