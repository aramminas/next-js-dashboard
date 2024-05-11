export default function Checkbox({
  label,
  name,
  callback,
}: {
  label: string;
  name: string;
  callback: () => {};
}) {
  return (
    <div className="me-4 ml-5 flex items-center">
      <input
        type="checkbox"
        onChange={callback}
        id={`${name}-checkbox`}
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-black focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
      />
      <label
        htmlFor={`${name}-checkbox`}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}
