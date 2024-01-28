"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterModal from "./modals/register-modal";
import { useState } from "react";
import LoginModal from "./modals/login-modal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log({currentUser})
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    open ? setOpen(false) : setOpen(true);
  };
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

          {/* <Dialog open={open} onOpenChange={toggleModal}>
            <DialogTrigger asChild>
              <Button variant="outline">Register</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Registrera</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre
                  done.
                </DialogDescription>
              </DialogHeader>

              <RegisterModal toggleModal={toggleModal} />
            </DialogContent>
          </Dialog> */}

          {currentUser ? (
            <Button onClick={() => signOut()}>Logga ut</Button>
          ) : (
            <Dialog open={open} onOpenChange={toggleModal}>
              <DialogTrigger asChild>
                <Button variant="default">Login</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Registrera</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when youre
                    done.
                  </DialogDescription>
                </DialogHeader>

                <LoginModal toggleModal={toggleModal} />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
