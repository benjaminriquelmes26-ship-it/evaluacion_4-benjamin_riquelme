import { ContactForm } from '../components/ContactForm/ContactForm';
import './Pages.css';

export function ContactPage() {
  return (
    <section className="page">
      <h2 className="page__title">Contacto</h2>
      <ContactForm />
    </section>
  );
}