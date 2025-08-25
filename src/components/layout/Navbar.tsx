import Logo from "@/assets/icon/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserMenu from "../user-menu";
import { Link, useLocation } from "react-router";
import { ModeToggle } from "../mode-toggle";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const location = useLocation();
  const { data } = useUserInfoQuery(undefined);
  const userEmail = data?.data?.email;

  return (
    <header className="border-b px-4 md:px-6 backdrop-blur-2xl sticky top-0 z-50 bg-background/80">
      <div className="flex h-16 justify-between items-center gap-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile / Tablet menu trigger */}
          <div className="flex items-center lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8"
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle Menu"
                >
                  <svg
                    className="pointer-events-none"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 6H20"
                      className="transition-all duration-300 group-aria-expanded:translate-y-2 group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="transition-all duration-300 group-aria-expanded:opacity-0"
                    />
                    <path
                      d="M4 18H20"
                      className="transition-all duration-300 group-aria-expanded:-translate-y-2 group-aria-expanded:-rotate-45"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="w-full max-w-xs md:max-w-sm bg-background shadow-lg rounded-xl p-4"
              >
                <NavigationMenu className="max-w-none w-full">
                  <NavigationMenuList className="flex flex-col items-start gap-2">
                    {navigationLinks.map((link, index) => {
                      const isActive = location.pathname === link.href;
                      return (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            asChild
                            active={isActive}
                            className="w-full px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent data-[active]:text-primary"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}
                    <div className="w-full border-t my-2" />
                    {/* Include UserMenu in mobile/tablet menu */}
                    {userEmail ? (
                      <UserMenu />
                    ) : (
                      <Button asChild size="sm" className="w-full">
                        <Link to="/login">Sign In</Link>
                      </Button>
                    )}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-primary hover:text-primary/90 flex items-center"
          >
            <Logo />
          </Link>

          {/* Desktop menu */}
          <NavigationMenu className="hidden lg:flex h-full">
            <NavigationMenuList className="flex h-full gap-4">
              {navigationLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <NavigationMenuItem key={index} className="h-full">
                    <NavigationMenuLink
                      asChild
                      active={isActive}
                      className="text-foreground hover:text-primary data-[active]:text-primary border-b-2 border-transparent hover:border-primary data-[active]:border-primary px-2 py-1 font-medium transition-colors"
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <div className="hidden lg:block">
            {userEmail ? (
              <UserMenu />
            ) : (
              <Button asChild size="sm">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
