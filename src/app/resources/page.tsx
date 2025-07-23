import HeroSection from "@/components/sections/HeroSection"

export default function ResourcesPage() {
  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        py-6 px-0
        border-4 border-dashed border-cyan-500
      `}
    >

      <HeroSection
        caption="Resources"
        heading="Enterprise-Grade Blockchains APIs"
      />

    </main>
  )
}