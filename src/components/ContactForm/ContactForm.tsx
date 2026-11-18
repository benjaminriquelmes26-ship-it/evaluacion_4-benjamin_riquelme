import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormData, ContactFormErrors } from '../../types';
import './ContactForm.css';

const initialData: ContactFormData = { nombre: '', correo: '', mensaje: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.nombre.trim().length < 2) {
    errors.nombre = 'Ingresa tu nombre (mínimo 2 caracteres).';
  }
  if (!emailPattern.test(data.correo.trim())) {
    errors.correo = 'Ingresa un correo válido, por ejemplo nombre@correo.cl.';
  }
  if (data.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  }

  return errors;
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sentName, setSentName] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newErrors = validate(data);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSentName(data.nombre.trim());
      setData(initialData);
    } else {
      setSentName(null);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="nombre">
          Nombre
        </label>
        <input
          className={`contact-form__input${errors.nombre ? ' contact-form__input--invalid' : ''}`}
          type="text"
          id="nombre"
          name="nombre"
          autoComplete="name"
          value={data.nombre}
          onChange={handleChange}
          aria-invalid={Boolean(errors.nombre)}
          aria-describedby={errors.nombre ? 'error-nombre' : undefined}
        />
        {errors.nombre && (
          <p className="contact-form__error" id="error-nombre">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="correo">
          Correo
        </label>
        <input
          className={`contact-form__input${errors.correo ? ' contact-form__input--invalid' : ''}`}
          type="email"
          id="correo"
          name="correo"
          autoComplete="email"
          value={data.correo}
          onChange={handleChange}
          aria-invalid={Boolean(errors.correo)}
          aria-describedby={errors.correo ? 'error-correo' : undefined}
        />
        {errors.correo && (
          <p className="contact-form__error" id="error-correo">
            {errors.correo}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          className={`contact-form__input${errors.mensaje ? ' contact-form__input--invalid' : ''}`}
          id="mensaje"
          name="mensaje"
          rows={4}
          value={data.mensaje}
          onChange={handleChange}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
        />
        {errors.mensaje && (
          <p className="contact-form__error" id="error-mensaje">
            {errors.mensaje}
          </p>
        )}
      </div>

      <button className="contact-form__submit" type="submit">
        Enviar
      </button>

      <div role="status" aria-live="polite">
        {sentName && (
          <p className="contact-form__success">
            Gracias, {sentName}. Tu mensaje fue validado correctamente (el envío es una simulación,
            no hay servidor de correo).
          </p>
        )}
      </div>
    </form>
  );
}