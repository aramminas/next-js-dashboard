import { Metadata } from 'next';
import ContactForm from '@/app/ui/contacts/contact-form';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default function Contact() {
  return (
    <section className="container mx-auto mt-[35px] flex-1">
      <ContactForm />
    </section>
  );
}
