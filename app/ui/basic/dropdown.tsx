'use client';

import { useState } from 'react';
import Checkbox from '@/app/ui/basic/checkbox';

export default function Dropdown({
  title,
  data,
  isMultiple = false,
}: {
  title: string;
  data: string[] | { [key: string]: string }[];
  isMultiple: boolean;
}) {
  const [multiple, setMultiple] = useState(false);

  return (
    <div>
      <label
        htmlFor={title}
        className="mb-2 flex text-xl font-medium text-gray-900 dark:text-white"
      >
        <span className="capitalize">{title}</span>
        {isMultiple && (
          <Checkbox
            name={title}
            label="multiple"
            callback={() => setMultiple((prevState) => !prevState)}
          />
        )}
      </label>
      <select
        multiple={multiple}
        id={title}
        name={title}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-400 focus:ring-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option
          value=""
          className="block h-[30px] cursor-pointer px-2 py-2 capitalize transition-all hover:bg-gray-200 hover:font-bold hover:text-gray-700  dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Select option
        </option>
        {Array.isArray(data)
          ? data.map((item) => (
              <option
                key={item}
                value={item}
                className="block h-[30px] cursor-pointer px-2 py-2 capitalize transition-all hover:bg-gray-200 hover:font-bold hover:text-gray-700  dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item}
              </option>
            ))
          : Object.keys(data).map((key) => (
              <option
                key={key}
                value={key}
                className="block h-[30px] cursor-pointer px-2 py-2 capitalize transition-all hover:bg-gray-200 hover:font-bold hover:text-gray-700  dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {data[key]}
              </option>
            ))}
      </select>
    </div>
  );
}
