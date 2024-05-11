'use client';

import clsx from 'clsx';
import { useFormState } from 'react-dom';
import { contact } from '@/app/lib/contact-actions';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { contacts } from '@/app/constants';
import ContactSubmitButton from '@/app/ui/contacts/contact-submit-button';

export default function ContactForm() {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };
  const [state, dispatch] = useFormState(contact, initialState);
  const { errors, data } = state;

  return (
    <div className="container mx-auto px-8 xl:px-5">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>
      <div className="my-10 grid md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact Stablo
          </h2>
          <p className="mt-5 max-w-sm">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>

          <div className="mt-5">
            {contacts?.address && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <MapPinIcon className="h-4 w-4" />
                <span>{contacts.address}</span>
              </div>
            )}

            {contacts?.email && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <EnvelopeIcon className="h-4 w-4" />
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </div>
            )}
            {contacts?.phone && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <PhoneIcon className="h-4 w-4" />
                <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form action={dispatch} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: 'none' }}
            />

            <div className="mb-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="false"
                className={clsx(
                  'w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:border-gray-400 focus:ring-transparent dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200',
                  {
                    'focus:border-grey-600 border-red-600 ring-red-100 dark:ring-0':
                      errors?.name,
                    'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white':
                      !errors?.name,
                  },
                )}
              />
              {errors?.name && (
                <div className="mt-1 text-red-600">
                  {errors.name.map((error) => (
                    <small key={`${error}`}>{error}</small>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={clsx(
                  'w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:border-gray-400 focus:ring-transparent dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200',
                  {
                    'focus:border-grey-600 border-red-600 ring-red-100 dark:ring-0':
                      errors?.email,
                    'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white':
                      !errors?.email,
                  },
                )}
              />
              {errors?.email && (
                <div className="mt-1 text-red-600">
                  {errors.email.map((error) => (
                    <small key={`${error}`}>{error}</small>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={clsx(
                  'h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:border-gray-400 focus:ring-transparent dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200',
                  {
                    'focus:border-grey-600 border-red-600 ring-red-100 dark:ring-0':
                      errors?.message,
                    'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white':
                      !errors?.message,
                  },
                )}
              />
              {errors?.message && (
                <div className="mt-1 text-red-600">
                  {errors.message.map((error) => (
                    <small key={`${error}`}>{error}</small>
                  ))}
                </div>
              )}
            </div>
            <ContactSubmitButton />
          </form>

          {data?.success && (
            <div className="mt-3 text-center text-sm text-green-500">
              Success. Message sent successfully
            </div>
          )}
          {data?.errors && (
            <div className="mt-3 text-center text-sm text-red-500">
              Something went wrong. Please try later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
