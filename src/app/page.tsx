import AIChat from "./components/AIChat";
import GradientBG from "./components/GradientBG";
import Wave from "./components/wave";
import Portfolio from "./components/portfolio";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2 py-8 relative overflow-hidden z-10">
      <GradientBG />
      <Portfolio />
      <header className="flex flex-col items-center mb-8 z-10 relative">
        <div className="flex flex-col items-center mt-8">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mb-4">
            <img src="/dp.jpg" alt="Rajat Mishra" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-neutral-100 mb-2 tracking-tight drop-shadow-lg">
          Rajat Mishra
          <Wave />
        </h1>
      </header>
      <section className="w-full max-w-lg flex flex-col items-center z-10 relative">
        <AIChat />
      </section>
    </main>
  );
}