import NewsLogo from '@/app/ui/basic/news-logo';
import LoadingText from '@/app/ui/basic/loading/loadingText';

export default function Cube() {
  return (
    <div className="mx-auto h-[calc(100vh-160px)] w-full [perspective:1000px] ">
      <div className="absolute left-[calc(50%-143px)] top-[30%] h-[250px] w-[250px] animate-[roll_5s_infinite] font-sans [transform-style:preserve-3d]">
        <div className="absolute box-border h-[250px] w-[250px] border-2 border-white bg-black px-0 py-[100px] text-center text-3xl text-white [transform:translateZ(125px)] [transition:all_1s]">
          <LoadingText />
        </div>
        <div className="absolute box-border h-[250px] w-[250px] border-2 border-white bg-black px-0 py-[100px] text-center text-3xl text-white [transition:all_1s] [transform:translateZ(-125px)]">
          Home
        </div>
        <div className="absolute right-[125px] box-border h-[250px] w-[250px] border-2 border-white bg-black px-0 py-[100px] text-center text-3xl text-white [transition:all_1s] [transform:rotateY(-90deg)]">
          Top Stories
        </div>
        <div className="absolute left-[125px] box-border h-[250px] w-[250px] border-2 border-white bg-black px-0 py-[100px] text-center text-3xl text-white [transition:all_1s] [transform:rotateY(90deg)]">
          All News
        </div>
        <div className="absolute bottom-[125px] box-border flex h-[250px] w-[250px] justify-center border-2 border-white bg-black px-0 py-[100px] text-center text-3xl text-white [transition:all_1s] [transform:rotateX(90deg)]">
          <NewsLogo />
        </div>
        <div className="absolute top-[125px] box-border h-[250px] w-[250px] border-2 border-white bg-black px-0 py-[100px] text-center text-3xl text-white [transition:all_1s] [transform:rotateX(-90deg)]">
          Sources
        </div>
      </div>
    </div>
  );
}
