import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-sm z-50">
      <div className="p-2 flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/">
          <div className="text-lg font-semibold">Sara Öhman</div>
        </Link>
        <div className="flex items-center">
          <Link href="/">
            <Button variant="link">Portfolio</Button>
          </Link>
          <Link href="/journal">
            <Button variant="link">Journal</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
