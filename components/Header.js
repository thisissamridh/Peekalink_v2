import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="backdrop-blur-md grid justify-between grid-cols-[1fr_auto_auto] gap-2 md:gap-6 bg-white/70 sticky top-0 w-full shadow-sm px-2 md:px-10 m py-3 z-50">
        <Link href="/">
          <div className="text-2xl bg-clip-text bg-gradient-to-l to-indigo-500 from-purple-500 text-transparent  font-sans font-bold p-1">
            PeekaLink
          </div>
        </Link>
        <Link href="/api-info">
          <button className="bg-gradient-to-r to-indigo-500 from-purple-500 text-white px-3 font-bold rounded">
            Get API
          </button>
        </Link>
      </div>
    </>
  );
}
