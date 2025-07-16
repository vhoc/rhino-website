"use client"
import NavWrapper from "./NavWrapper"
import Image from "next/image"
import imgRhinoLogo from "@/../public/img/rhino_logo.svg"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"
import MenuButton from "../buttons/MenuButton"
import { type ITextLink } from "@/util/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"
import Button from "../buttons/Button"
import { useEffect, useState } from "react"

interface NavbarProps {
  links: ITextLink[];
  contact_us_link: ITextLink;
}

function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    const getScrollbarWidth = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.width = "100px";
      scrollDiv.style.height = "100px";
      scrollDiv.style.overflow = "scroll";
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      document.body.appendChild(scrollDiv);
      const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return width;
    };
    setScrollbarWidth(getScrollbarWidth());
  }, []);
  return scrollbarWidth;
}

export default function Navbar({
  links,
  contact_us_link,
}: NavbarProps) {
  const scrollbarWidth = useScrollbarWidth();
  return (
    <NavWrapper>
      <nav
        className={`
        bg-white
        w-full 
        p-6 md:px-14 md:py-6 
        xl:px-[94px] 
        max-w-[1280px]
        flex justify-between items-center gap-4 
        border-2 border-dashed border-black
        -
      `}
      >
        <Link href="/" className="border-2 border-dashed border-amber-500">
          <Image
            src={imgRhinoLogo as StaticImport}
            alt="Rhino"
            width={148}
            height={32}
            className={`
              w-[148px] h-[32px]
            `}
          />
        </Link>

        <div className="hidden lg:flex gap-2 border-2 border-dashed border-blue-500">
          {
            links && links.length >= 1 ?
              links.map((link, index) => (
                <Link
                  key={`nav-link-${index}-${link.href}`}
                  href={link.href}
                  target={link.target ?? "_self"}
                  className="text-coolgray-500 hover:text-coolgray-800 font-bold text-sm"
                >
                  {link.label}
                </Link>
              ))
              :
              null
          }
        </div>

        <div className="hidden lg:block border-2 border-dashed border-red-500">Contact Us</div>

        <Popover>
          <PopoverTrigger asChild>
            <button className="lg:hidden">
              <MenuButton links={links} contact_us_link={contact_us_link} />
            </button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="end"
            sideOffset={24}
            style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}
            className={`
              bg-none bg-transparent 
              py-0 p-6 
              md:px-14 md:py-6 
              xl:px-[94px] 
              shadow-none
              border-none 
            `}
          >
            <div
              className={`
                flex flex-col gap-x-1 gap-y-16 justify-between
                p-6 bg-coolgray-900 rounded-[5px] 
              `}
            >
              <ul
                className={`
                w-full
              `}
              >
                {
                  links && links.length >= 1 ?
                    links.map((link, index) => (
                      <li
                        key={`nav-item-${index}-${link.label}`}
                        className="p-2 hover:bg-coolgray-800 flex items-center"
                      >
                        <a href={link.href} target={link.target ?? "_self"} className="text-white font-medium w-full">{link.label}</a>
                      </li>
                    ))
                    :
                    null
                }
              </ul>

              <Button
                type="link"
                label={contact_us_link.label}
                href={contact_us_link.href}
              />
            </div>
          </PopoverContent>
        </Popover>
      </nav>
    </NavWrapper>
  )
}