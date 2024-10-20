import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { useGlobalState } from "../context/GlobalState";

interface NavbarUIProps {
  brand: string;
  menuItems: string[];
}

export default function NavbarUI({ brand, menuItems }: NavbarUIProps) {
  const { pageIndex, setPageIndex } = useGlobalState();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 sm:justify-center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl">{brand}</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl">{brand}</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${index}-${item}`} isActive={pageIndex === item}>
            <Link
              color="foreground"
              href="#"
              onPress={() => setPageIndex(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={pageIndex === item}
          >
            <Link
              className="w-full"
              href="#"
              size="lg"
              onPress={() => setPageIndex(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
