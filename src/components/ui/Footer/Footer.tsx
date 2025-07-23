import Image from "next/image"
import logo from "@/../public/img/rhino_white.svg"
import iconX from "@/../public/img/x-icon.svg"
import iconDiscord from "@/../public/img/discord-icon.svg"
import iconTelegram from "@/../public/img/telegram-icon.svg"
import iconGithub from "@/../public/img/github-icon.svg"
import Link from "next/link"
import Button from "@/components/ui/buttons/Button"

export default function Footer() {
  return (
    <footer
      className={`
        py-16 px-6
        sm:px-14 lg:px-[94px] xl:px-[94px] 
        md:py-16 lg:py-[120px] 
        w-full bg-coolgray-900 flex justify-center 
      `}
    >
      <div
        className={`
          max-w-7xl w-full 
          flex flex-col items-center gap-10 
          md:gap-y-[81px] 
        `}
      >

        <div
          className={`
            w-full 
            flex flex-col items-center gap-10 
            md:flex-row md:items-start 
          `}
        >

          {/* LOGO AND TEXT (AND TABLET > CONTACT US BUTTON) */}
          <div
            className={`
            flex flex-col gap-6 items-center 
            md:items-start md:flex-1/2
          `}
          >
            <Image
              src={logo}
              alt="Rhino"
            />
            <p
              className={`
              text-coolgray-50 max-md:text-center 
              max-w-[330px] 
            `}
            >
              An active, independent and secure blockchain validator. Earn rewards and help secure networks by staking your tokens with RHINO.
            </p>

            {/* CONTACT US BUTTON (TABLET & DESKTOP) */}
            <Button
              type="link"
              href="/contact-us"
              label="Contact Us"
              className={`
                hidden md:block xl:hidden 
                h-[45px] max-md:w-full cursor-pointer pt-2 
              `}
            />
          </div>

          {/* SEPARATOR */}
          <hr className="h-px bg-coolgray-700 w-full border-0 md:hidden" />

          {/* LINK LIST */}
          <div
            className={`
            flex flex-col w-full 
            sm:grid sm:grid-cols-2 
            md:flex-1/2 
          `}
          >
            <a
              href={"/about"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              About
            </a>

            <a
              href={"/networks"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              Networks
            </a>

            <a
              href={"/investment"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              Investment
            </a>

            <a
              href={"#"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              Our API Network
            </a>

            <a
              href={"#"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              FAQs
            </a>

            <a
              href={"#"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              Schedule a Call
            </a>

            <a
              href={"#"}
              className="text-white font-medium w-full py-3 px-4 hover:bg-coolgray-800"
            >
              Game of Nodes
            </a>

          </div>

          {/* CONTACT US BUTTON (XL DESKTOP) */}
          <Button
            type="link"
            href="/contact-us"
            label="Contact Us"
            className={`
                hidden xl:block min-w-fit
                h-[45px] max-md:w-full cursor-pointer pt-2 
              `}
          />

        </div>

        {/* SEPARATOR */}
        <hr className="h-px bg-coolgray-700 w-full border-0 md:hidden" />

        <div
          className={`
            flex flex-col items-center gap-10 
            md:flex-row md:items-start w-full 
            xl:flex-row-reverse
          `}
        >

          {/* SOCIAL LINKS */}
          <div
            className={`
            w-full flex justify-between gap-2 items-center 
            md:flex-1/2 md:max-h-[22px] h-[22px] 
            xl:flex-2/12
          `}
          >
            <Link href="#" target="_blank">
              <Image
                src={iconX}
                alt="X"
                className="md:h-[22px] xl:h-4"
                style={{
                  objectFit: 'contain'
                }}
              />
            </Link>

            <Link href="#" target="_blank">
              <Image
                src={iconDiscord}
                alt="Discord"
                className="md:h-[22px] xl:h-4"
                style={{
                  objectFit: 'contain'
                }}
              />
            </Link>

            <Link href="#" target="_blank">
              <Image
                src={iconTelegram}
                alt="Telegram"
                className="md:h-[22px] xl:h-4"
                style={{
                  objectFit: 'contain'
                }}
              />
            </Link>

            <Link href="#" target="_blank">
              <Image
                src={iconGithub}
                alt="Github"
                className="md:h-[22px] xl:h-4"
                style={{
                  objectFit: 'contain'
                }}
              />
            </Link>
          </div>

          {/* CONTACT US BUTTON (MOBILE) */}
          <Button
            type="link"
            href="/contact-us"
            label="Contact Us"
            className="h-[45px] w-full md:hidden"
          />

          {/* COPYRIGHT */}
          <p
            className={`
              text-sm text-coolgray-100 text-center 
              md:flex-1/2 
              xl:flex-10/12 xl:text-left 
            `}
          >
            © 2020 - 2025 Rhino Stake, LLC. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}