import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

export default function AllNewsDescription() {
  return (
    <div className="my-4 flex w-full flex-col bg-white p-6 shadow">
      <p className="pb-5 text-xl font-semibold capitalize">About us</p>
      <p className="pb-2 text-gray-900">
        Not every media company has the internal resources to create a
        comprehensive content production plan and strategy. Other professionals
        are available to help you bring the news your need to your audience.
      </p>
      <p className="pb-2 text-gray-900">
        News content can be an excellent strategy for companies looking to
        expand the breadth of the stories they cover.
      </p>
      <p className="pb-2 text-gray-900">
        News information can happen in several ways, such as working with
        freelance journalists or partnering with a larger publisher in a niche
        you want to explore.
      </p>
      <Link
        href="/"
        className="mt-4 flex w-full items-center justify-center rounded bg-black px-2 py-3 text-sm font-bold uppercase text-white hover:bg-gray-900"
      >
        <GlobeAltIcon className="mr-1 w-5 md:w-6" /> Get to know us
      </Link>
    </div>
  );
}
