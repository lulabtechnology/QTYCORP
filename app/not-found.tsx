import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';

export default function NotFound() {
  return (
    <section className="bg-[var(--qts-navy)] py-40 text-white">
      <Container>
        <div className="max-w-2xl rounded-[32px] border border-white/10 bg-white/6 p-10 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/56">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">La página solicitada no está disponible.</h1>
          <p className="mt-5 text-lg leading-8 text-white/74">
            Puede volver al inicio o ir directamente al formulario de contacto para continuar con la experiencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/">Volver al inicio</ButtonLink>
            <ButtonLink href="/contacto" variant="secondary">
              Ir a contacto
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
