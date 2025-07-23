import Button from "../ui/buttons/Button"

export default function PreFooter() {

  return (
    <section
      className={`
          px-6 py-20 bg-coolgray-900 w-full flex justify-center 
          sm:px-14 lg:px-[94px] xl:px-[94px] 
        `}
    >
      <div
        className={`
            rounded-lg w-full max-w-7xl 
            flex flex-col py-10 px-8 items-center justify-center gap-8 
            md:px-16 md:py-20 
            bg-[url('/img/pre-footer-bg.svg')] bg-center bg-no-repeat bg-cover 
          `}
      >
        <p
          className="
              font-calsans text-white text-[30px] leading-[120%] text-center 
              md:text-[56px] 
              lg:text-[40px] lg:max-w-[536px] 
            "
        >
          Ready to build on infrastructure you can trust?
        </p>

        <Button
          type="link"
          href="/contact-us"
          label="Contact Us"
          className="w-full md:w-fit"
        />
      </div>
    </section>
  )

}