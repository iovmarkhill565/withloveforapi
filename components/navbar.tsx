import { ModeToggle } from "@/components/theme-toggle";
import { HeartHandshakeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import logo from "@/public/logo.svg";

export const NAVLINKS = [
  {
    title: "🚀 Документация",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "v1.0.3",
    href: "#",
  },
];

// const algolia_props = {
//   appId: process.env.ALGOLIA_APP_ID!,
//   indexName: process.env.ALGOLIA_INDEX!,
//   apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
// };

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          {/* <AlgoliaSearch {...algolia_props} /> */}
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <Link
                href="https://t.me/apexhelper"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <HeartHandshakeIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image src={logo} alt="Logo" className="w-6 h-6 text-muted-foreground" priority />
      <h2 className="text-md font-bold font-code">APEX Docs</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-base text-[14.5px] dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
