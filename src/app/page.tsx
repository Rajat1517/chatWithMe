import AIChat from "./components/AIChat";
import GradientBG from "./components/GradientBG";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2 py-8 relative overflow-hidden z-10">
      <GradientBG />
      {/* Header with avatar and name */}
      <header className="flex flex-col items-center mb-8 z-10 relative">
        {/* Replace with your avatar */}
        <div className="w-28 h-28 bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 rounded-full mb-4 border-4 border-blue-900 shadow-lg" />
        <h1 className="text-4xl font-extrabold text-neutral-100 mb-2 tracking-tight drop-shadow-lg">
          Rajat Mishra
        </h1>
      </header>
      <section className="w-full max-w-lg flex flex-col items-center z-10 relative">
        <AIChat />
      </section>
    </main>
  );
}