import { lusitana } from '@/app/ui/styles/fonts';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[24px] md:text-[22px] lg:text-[32px]">Acme</p>
    </div>
  );
}
