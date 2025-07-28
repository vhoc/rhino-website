import StandardSection from "@/components/sections/StandardSection";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import { submitContactForm } from "./actions";

export default function ContactUsPage() {
  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        pt-6 px-0
      `}
    >

      <StandardSection
        contentClassName={`
          flex flex-col gap-[64px]
        `}
      >

        {/* HEADING */}
        <div className="flex flex-col">
          <p className="text-lg text-coolgray-500">
            Contact
          </p>

          <h1 className="font-calsans text-[36px] text-coolgray-900 leading-[120%] mt-3">
            Ready to Build on Enterprise Infrastructure?
          </h1>

          <p className="font-medium text-coolgray-500 mt-8">
            Whether you're launching a new blockchain network, scaling an existing application, or exploring investment opportunities, RHINO is here to help you succeed.
          </p>
        </div>

        {/* FORM */}
        <div
          className={`
            bg-white shadow w-full p-4 
          `}
        >

          <ContactForm action={submitContactForm} />

        </div>

        {/* GET IN TOUCH */}

      </StandardSection>

    </main>
  );
}