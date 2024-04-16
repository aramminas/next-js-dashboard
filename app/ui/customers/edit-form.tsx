'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button';
import { defaultImage } from '@/app/constants';
import { Customer } from '@/app/lib/definitions';
import { updateCustomer } from '@/app/lib/customers-actions';
import { AtSymbolIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function EditForm({ customer }: { customer: Customer }) {
  const initialState = { message: null, errors: {} };
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  const [state, dispatch] = useFormState(updateCustomerWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Avatar */}
        <div className="mb-4">
          <label htmlFor="avatar" className="mb-2 block text-sm font-medium">
            Customer Avatar
          </label>
          <div className="relative">
            <Image
              src={customer?.image_url}
              className="rounded"
              alt={`${customer.name}'s profile picture`}
              width={75}
              height={75}
            />
            <input
              type="hidden"
              name="default-avatar"
              defaultValue={customer?.image_url || defaultImage}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="avatar"
                type="file"
                name="avatar" // image_url
                className="text-surface file:text-surface focus:border-primary focus:shadow-inset peer relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-gray-200 bg-white bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid  file:border-inherit file:bg-transparent file:px-3 file:py-[0.32rem] focus:text-gray-700 focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
              />
            </div>
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.image_url &&
                state.errors.image_url.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Customer Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                aria-describedby="name-error"
                placeholder="Enter Name"
                defaultValue={customer?.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Customer Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                aria-describedby="email-error"
                placeholder="Enter email"
                defaultValue={customer?.email}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div id="main-error" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500" key={state.message}>
              {state.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Customer</Button>
      </div>
    </form>
  );
}
