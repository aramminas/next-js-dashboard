import PingDot from '@/app/ui/basic/loading/ping-dot';

export default function LoadingText() {
  return (
    <div className="flex justify-center align-middle">
      <span className="text-sky-400">Loading</span>
      <span className="ml-1 flex h-[32px] items-end gap-1">
        <PingDot />
        <PingDot />
        <PingDot />
      </span>
    </div>
  );
}
