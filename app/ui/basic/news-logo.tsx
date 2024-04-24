import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function NewsLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-end leading-none text-white`}
    >
      <Image src="/logo.svg" width={40} height={40} alt="logo" />
      <p className="ml-2 text-[24px] md:text-[22px] lg:text-[32px]">
        Acme <span className="text-[16px] md:text-[20px]">News</span>
      </p>
    </div>
  );
}
