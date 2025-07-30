import StandardSection from "@/components/sections/StandardSection";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
// import { submitContactForm } from "./actions";
import clsx from "clsx";

export default function ContactUsPage() {
  return (
    <main
      className={`
        flex flex-col items-center justify-start 
        pt-0 px-0
      `}
    >

      <StandardSection
        // contentClassName={`
        //   flex flex-col gap-[64px] 
        // `}
        contentClassName={clsx(
          "flex flex-col items-start gap-[64px] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:items-start lg:gap-x-[91px] lg:gap-y-[32px] lg:h-fit",
        )}
      >

        {/* HEADING */}
        <div className="flex flex-col">
          <p className="text-lg text-coolgray-500">
            Contact
          </p>

          <h1 className="font-calsans text-[36px] text-coolgray-900 leading-[120%] mt-3 md:text-[64px]">
            Ready to Build on Enterprise Infrastructure?
          </h1>

          <p className="font-medium text-coolgray-500 mt-8 md:text-lg">
            {"Whether you're launching a new blockchain network, scaling an existing application, or exploring investment opportunities, RHINO is here to help you succeed."}
          </p>
        </div>

        {/* FORM */}
        <div
          className={`
            bg-white shadow-xl w-full p-4 
            lg:row-span-3 lg:col-start-2 lg:row-start-1 
          `}
        >

          <ContactForm />

        </div>

        {/* GET IN TOUCH */}
        <div
          className="lg:row-span-2 lg:col-start-1 lg:row-start-2 lg:h-fit"
        >
          <p className="font-calsans text-xl text-coolgray-900">Get In Touch</p>

          <div className="grid grid-cols-[auto_1fr] grid-rows-5 gap-y-3 gap-x-6 mt-8">

            <p className="font-medium text-sm text-coolgray-500">General Inquiries:</p>
            <p className="font-medium text-sm text-coolgray-500">info@rhinostake.com</p>
            <p className="font-medium text-sm text-coolgray-500">Enterprise Sales:</p>
            <p className="font-medium text-sm text-coolgray-500">[sales-email]</p>
            <p className="font-medium text-sm text-coolgray-500">Tech Support:</p>
            <p className="font-medium text-sm text-coolgray-500">[support-email]</p>
            <p className="font-medium text-sm text-coolgray-500">Business Hours:</p>
            <p className="font-medium text-sm text-coolgray-500">Available 24/7 for enterprise clients</p>
            <p className="font-medium text-sm text-coolgray-500">Response and commitment:</p>
            <p className="font-medium text-sm text-coolgray-500">All inquiries receive a response within 24 hours</p>

          </div>
        </div>

      </StandardSection>

    </main>
  );
}