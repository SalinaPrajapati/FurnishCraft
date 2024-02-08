"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FaBeer, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store";
import { setAuth, setJid } from "../store/slices/authSlice";

const components: { title: string; href: string }[] = [
  {
    title: "Product Pages",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
  },
];

const NavigationMenuDemo = () => {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuth]);
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
      dispatch(setJid(""));
      dispatch(setAuth(false));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-between py-5 px-8 fixed top-0 w-full bg-white z-40">
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu style={{ fontSize: "24px" }} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Home</SheetTitle>
              <SheetTitle>Shop</SheetTitle>
              <SheetTitle>Product</SheetTitle>
              <SheetTitle>Blog</SheetTitle>
              <SheetTitle>Latest News</SheetTitle>
            </SheetHeader>
            <div className="md:hidden">
              <span>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </span>
              <span>
                <Button
                  className="text-white bg-yellow-600 hover:bg-yellow-500 ml-1"
                  asChild
                >
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="">
        <h2 className="text-4xl md:text-5xl font-black md:font-extrabold text-yellow-600 hover:text-yellow-200">
          Furniture
        </h2>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] hidden lg:flex">
            <SelectValue placeholder="Shop By Category" />
          </SelectTrigger>
          <SelectContent className="text-2xl">
            <SelectItem value="table">Table</SelectItem>
            <SelectItem value="chair">Chair</SelectItem>
            <SelectItem value="sofaset">Sofa Set</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="hidden lg:flex">
        <NavigationMenu className="text-lg font-semibold">
          <NavigationMenuList className=" text-lg font-semibold">
            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                        href="/"
                      >
                        <FaBeer />
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Latest News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-5 pr-2">
        <div className="hidden md:flex">
          <span>
            <FaSearch style={{ fontSize: "24px" }} />
          </span>
          <span>
            <HiShoppingCart style={{ fontSize: "24px" }} />
          </span>
        </div>
        <div className="md:hidden flex items-center gap-2 pr-2">
          <span>
            <FaSearch style={{ fontSize: "18px" }} />
          </span>
          <span>
            <HiShoppingCart style={{ fontSize: "18px" }} />
          </span>
        </div>
        <div className="hidden md:flex">
          <span>
            {!isAuthenticated && (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </>
            )}
          </span>
          <span>
            {!isAuthenticated && (
              <>
                <Button
                  className="text-white bg-yellow-600 hover:bg-yellow-500 ml-1"
                  asChild
                >
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </>
            )}
          </span>
          <span className="mr-2">
            {isAuthenticated && (
              <>
                <Button variant="outline" asChild onClick={logout}>
                  <Link href="/login">Logout</Link>
                </Button>
              </>
            )}
          </span>
          <span>
            {isAuthenticated && (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default NavigationMenuDemo;
