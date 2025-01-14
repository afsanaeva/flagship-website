/* eslint-disable no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsSticky(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentScrollPos = window.scrollY;
    setIsSticky(currentScrollPos < 10 && null);
  }, []);

  return (
    <nav className="max-md:hidden">
      <div className="space-x-4">
        {/* On contact link, add hover effect like a line below the link fills on hover, reverse on hover leave, it can be done with after:: or after:: psuedo classes */}

        {/* <Link
          href="/get-demo"
          className={cn(
            buttonVariants({ variant: "none", size: "lg" }),
            "!px-4 relative after:content-[''] after:bg-primary after:absolute after:h-0.5 after:bottom-0 after:transition-all after:duration-500 after:inset-x-0 after:ease-in-out after:w-0 after:hover:w-full z-50"
          )}
        >
          Contact sales
        </Link>

        <Button variant="outline" size="lg" asChild>
          <Link href={"/login"}>Log in</Link>
        </Button> */}

        {pathname !== "/thank-you" &&
          pathname !== "/get-demo" &&
          pathname !== "/privacy-policy" && (
            <Button size="lg" asChild>
              <Link href={"/get-demo"}>Get a free demo</Link>
            </Button>
        )}
      </div>

      <Sheet>
        {/* <SheetTrigger className="flex lg:hidden" asChild> */}
        <SheetTrigger className="hidden" asChild>
          <div className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1 p-2.5">
            <div className="h-0.5 w-full bg-[#1C1B1F]" />
            <div className="h-0.5 w-full bg-[#1C1B1F]" />
          </div>
        </SheetTrigger>

        <SheetContent className="flex min-h-screen w-full max-w-full flex-col gap-y-12 overflow-y-auto px-6 pt-[100px] xs:gap-y-16">
          <div className="flex flex-col items-start justify-center gap-y-3">
            {/* <SheetClose key={title} asChild>
                <Link
                  href={href}
                  className={cn("text-[7vw] xs:text-[32px] font-light", {
                    "font-medium": pathname === href,
                    "text-foreground": pathname !== href,
                  })}
                >
                  {title}
                </Link>
              </SheetClose> */}
          </div>

          <SheetClose></SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Nav;
