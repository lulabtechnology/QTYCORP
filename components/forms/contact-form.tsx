'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const initialState: ContactFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiryType: '',
  message: '',
};

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const inquiryOptions = useMemo(
    () => ['Consulta técnica', 'Solicitud de cotización', 'Información comercial', 'Soporte de producto', 'Proyecto / evaluación'],
    [],
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = 'Ingrese su nombre.';
    if (!values.company.trim()) nextErrors.company = 'Ingrese el nombre de su empresa.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Ingrese un correo válido.';
    if (!values.phone.trim()) nextErrors.phone = 'Ingrese su teléfono.';
    if (!values.inquiryType.trim()) nextErrors.inquiryType = 'Seleccione el tipo de consulta.';
    if (!values.message.trim() || values.message.trim().length < 20) nextErrors.message = 'Cuéntenos un poco más sobre su requerimiento.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('No fue posible enviar la consulta.');
      }

      setStatus('success');
      setMessage('Gracias. Su consulta fue enviada correctamente y QTS podrá darle seguimiento.');
      setValues(initialState);
      setErrors({});
    } catch {
      setStatus('error');
      setMessage('Ocurrió un problema al enviar la consulta. Revise su conexión o intente nuevamente.');
    }
  };

  const fieldClassName =
    'w-full rounded-2xl border border-[var(--qts-line)] bg-white px-4 py-3.5 text-sm text-[var(--qts-ink)] outline-none transition placeholder:text-[var(--qts-muted)] focus:border-[var(--qts-accent)] focus:ring-2 focus:ring-[rgba(244,122,32,0.16)]';

  return (
    <form onSubmit={handleSubmit} className={cn('rounded-[28px] border border-[var(--qts-line)] bg-white p-6 shadow-[0_20px_70px_rgba(9,17,31,0.08)] sm:p-8', compact && 'p-6')}>
      <div className={cn('grid gap-5 md:grid-cols-2')}>
        <Field label="Nombre" error={errors.name}>
          <input
            className={fieldClassName}
            value={values.name}
            onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Nombre y apellido"
          />
        </Field>
        <Field label="Empresa" error={errors.company}>
          <input
            className={fieldClassName}
            value={values.company}
            onChange={(e) => setValues((prev) => ({ ...prev, company: e.target.value }))}
            placeholder="Nombre de su empresa"
          />
        </Field>
        <Field label="Correo electrónico" error={errors.email}>
          <input
            type="email"
            className={fieldClassName}
            value={values.email}
            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="correo@empresa.com"
          />
        </Field>
        <Field label="Teléfono" error={errors.phone}>
          <input
            className={fieldClassName}
            value={values.phone}
            onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="+507 6000-0000"
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5">
        <Field label="Tipo de consulta" error={errors.inquiryType}>
          <select
            className={fieldClassName}
            value={values.inquiryType}
            onChange={(e) => setValues((prev) => ({ ...prev, inquiryType: e.target.value }))}
          >
            <option value="">Seleccione una opción</option>
            {inquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Mensaje" error={errors.message}>
          <textarea
            className={cn(fieldClassName, 'min-h-36 resize-y')}
            value={values.message}
            onChange={(e) => setValues((prev) => ({ ...prev, message: e.target.value }))}
            placeholder="Describa su aplicación, activo, proyecto o necesidad de soporte."
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-6 text-sm" aria-live="polite">
          {message ? (
            <span className={cn(status === 'success' ? 'text-emerald-700' : 'text-red-600')}>{message}</span>
          ) : (
            <span className="text-[var(--qts-muted)]">Atención consultiva y respuesta orientada al requerimiento técnico o comercial.</span>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-[var(--qts-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(244,122,32,0.24)] transition hover:bg-[var(--qts-accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--qts-ink)]">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
