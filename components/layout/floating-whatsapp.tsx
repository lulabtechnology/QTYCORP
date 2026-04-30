const WHATSAPP_NUMBER = '50768987181';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola Quality Techno Services, deseo recibir asesoría técnica o comercial.',
);

export function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Quality Techno Services por WhatsApp"
      className="fixed bottom-5 right-5 z-[90] flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_42px_rgba(11,125,62,0.32)] ring-4 ring-white/85 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[rgba(37,211,102,0.35)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366]/25" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.7 12.7 0 0 0 3.34 15.86c0 2.24.58 4.43 1.7 6.36L3.2 28.8l6.75-1.77a12.66 12.66 0 0 0 6.06 1.54h.01A12.7 12.7 0 0 0 28.8 15.9 12.7 12.7 0 0 0 16.02 3.2Zm0 23.23h-.01c-1.9 0-3.76-.51-5.38-1.48l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.45 10.45 0 0 1-1.6-5.61 10.57 10.57 0 1 1 10.57 10.57Zm5.8-7.91c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.06 1.3 3.27.16.21 2.23 3.41 5.4 4.78.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="sr-only">WhatsApp +507 6898-7181</span>
    </a>
  );
}
