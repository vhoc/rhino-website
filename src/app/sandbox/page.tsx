import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup"

export default async function SandboxPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-12 px-0 py-16">
        <h1 className={`text-5xl font-extrabold tracking-tight text-black sm:text-[5rem] font-calsans`}>
          Sandbox Page
        </h1>
        <HoverCardsGroup />
      </div>
    </main>
  )
}