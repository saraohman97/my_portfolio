import Image from "next/image";

export default function HomePage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-full relative">
        <Image
          src="/bg.png"
          alt=""
          fill
          className="absolute bottom-0 z-0 opacity-10"
        />
        <div>Sara Öhman</div>
        <div className="text-2xl">Junior designer & frontend utvecklare</div>
      </div>
    </>
  );
}
