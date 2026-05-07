'use client';

import { useState } from 'react';
import { resourcePage, site } from '@/lib/site-data';
import { cn } from '@/lib/utils';

type ResourceFormState = {
  name: string;
  company: string;
  email: string;
  interest: string;
  material: string;
  comment: string;
};

const initialState: ResourceFormState = {
  name: '',
  company: '',
  email: '',
  interest: '',
  material: '',
  comment: '',
};

function buildMailtoUrl(values: ResourceFormState) {
  const subject = `Solicitud de material técnico QTS - ${values.material}`;
  const body = [
    'Hola Quality Techno Services,',
    '',
    'Deseo solicitar información o material técnico con los siguientes datos:',
    '',
    `Nombre: ${values.name}`,
    `Empresa: ${values.company}`,
    `Correo: ${values.email}`,
    `Interés: ${values.interest}`,
    `Material solicitado: ${values.material}`,
    '',
    'Comentario:',
    values.comment || 'Sin comentario adicional.',
    '',
    'Gracias.',
  ].join('\n');

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ResourceForm() {
  const [values, setValues] = useState<ResourceFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ResourceFormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validate = () => {
    const nextErrors: Partial<Record<keyof ResourceFormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = 'Ingrese su nombre.';
    if (!values.company.trim()) nextErrors.company = 'Ingrese su empresa.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Ingrese un correo válido.';
    if (!values.interest.trim()) nextErrors.interest = 'Seleccione el tipo de interés.';
    if (!values.material.trim()) nextErrors.material = 'Indique el material solicitado.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('success');
    setMessage('Se abrirá su cliente de correo con la solicitud lista para enviar a QTS.');
    window.location.href = buildMailtoUrl(values);
    setValues(initialState);
    setErrors({});
  };

  const fieldClassName =
    'w-full rounded-2xl border border-white/14 bg-white/8 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[var(--qts-accent)] focus:ring-2 focus:ring-[rgba(244,122,32,0.18)]';

  return (
    <form onSubmit={handleSubmit} className="rounded-[30px] border border-white/12 bg-[rgba(17,28,49,0.88)] p-6 text-white shadow-[0_24px_80px_rgba(5,12,24,0.25)] backdrop-blur-xl sm:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre" error={errors.name}>
          <input className={fieldClassName} value={values.name} onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))} placeholder="Nombre y apellido" />
        </Field>
        <Field label="Empresa" error={errors.company}>
          <input className={fieldClassName} value={values.company} onChange={(e) => setValues((prev) => ({ ...prev, company: e.target.value }))} placeholder="Nombre de su empresa" />
        </Field>
        <Field label="Correo electrónico" error={errors.email}>
          <input type="email" className={fieldClassName} value={values.email} onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} placeholder="correo@empresa.com" />
        </Field>
        <Field label="Interés" error={errors.interest}>
          <select className={fieldClassName} value={values.interest} onChange={(e) => setValues((prev) => ({ ...prev, interest: e.target.value }))}>
            <option value="">Seleccione una opción</option>
            {resourcePage.requestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-4 grid gap-4">
        <Field label="Material solicitado" error={errors.material}>
          <input className={fieldClassName} value={values.material} onChange={(e) => setValues((prev) => ({ ...prev, material: e.target.value }))} placeholder="Ej. catálogo UPS, brochure, ficha técnica, información por aplicación" />
        </Field>
        <Field label="Comentario opcional" error={errors.comment}>
          <textarea className={cn(fieldClassName, 'min-h-30 resize-y')} value={values.comment} onChange={(e) => setValues((prev) => ({ ...prev, comment: e.target.value }))} placeholder="Comparta el contexto de su consulta o la aplicación que desea evaluar." />
        </Field>
      </div>
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-6 text-sm" aria-live="polite">
          {message ? <span className={cn(status === 'success' ? 'text-emerald-300' : 'text-red-300')}>{message}</span> : <span className="text-white/58">Al enviar, se abrirá su correo con la solicitud preparada para QTS.</span>}
        </div>
        <button type="submit" disabled={status === 'loading'} className="inline-flex items-center justify-center rounded-full bg-[var(--qts-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(244,122,32,0.24)] transition hover:bg-[var(--qts-accent-strong)] disabled:cursor-not-allowed disabled:opacity-70">
          Abrir correo
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-white">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs font-medium text-red-300">{error}</span> : null}
    </label>
  );
}
