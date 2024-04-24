export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="nav flex h-20 w-full items-center justify-center bg-black px-4 text-gray-300">
      © 2000-{currentYear} ACME NEWS™ All Rights Reserved.
    </div>
  );
}
