import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo.jfif"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2  border border-blue-500"
      style={{ background: "rgba(11,34,64,0.15)", backdropFilter: "blur(8px)" }}
    >
      {/* Logo */}
      <div className="text-white font-bold text-xl flex gap-3 items-center">
        <img src={logo} alt="" className="w-10 rounded-[50%]"/>
        Lots for sale
      </div>

      {/* Desktop Nav */}
      <div className="flex items-center gap-2">
        {/* CTA */}
        <a href="#form">
        
        </a>
      </div>
    </nav>
  );
}