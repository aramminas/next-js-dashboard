'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { links } from '@/app/constants';
import AcmeLogo from '@/app/ui/basic/acme-logo';

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  return (
    <div className="nav flex h-20 w-full items-center justify-between bg-black px-4 text-white">
      <div>
        <h1 className="font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            <AcmeLogo />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, href }) => (
          <li
            key={id}
            className={clsx(
              'nav-links link-underline cursor-pointer px-4 font-medium capitalize duration-200 hover:scale-105 hover:text-white',
              {
                'text-gray-500': pathname !== href,
                'text-white-500': pathname === href,
              },
            )}
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className="z-2 hidden cursor-pointer pr-4 md:flex">
        <Link
          href="/login"
          className="flex items-center gap-1 self-start rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 hover:text-gray-200 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-4 md:w-5" />
        </Link>
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, name, href }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize"
            >
              <Link onClick={() => setNav(!nav)} href={href}>
                {name}
              </Link>
            </li>
          ))}
          <li
            key="login"
            className="cursor-pointer px-4 py-6 text-4xl capitalize text-gray-300"
          >
            <Link className="flex" onClick={() => setNav(!nav)} href="/login">
              <span>Log in</span> <ArrowRightIcon className="w-6 md:w-5" />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
