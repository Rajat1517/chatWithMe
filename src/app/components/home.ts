import AIChat from "./components/AIChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="flex flex-col items-center py-8">
        {/* Replace with your avatar */}
        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
        <h1 className="text-3xl font-bold mb-2">[Your Name]</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#me">Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#fun">Fun</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="me" className="max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Me</h2>
        <p>[About you placeholder]</p>
      </section>
      <section id="projects" className="max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <p>[Projects placeholder]</p>
      </section>
      <section id="skills" className="max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p>[Skills placeholder]</p>
      </section>
      <section id="fun" className="max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Fun</h2>
        <p>[Fun facts placeholder]</p>
      </section>
      <section id="contact" className="max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>[Contact placeholder]</p>
      </section>
      <AIChat />
    </main>
  );
}