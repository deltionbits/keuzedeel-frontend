import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="row-start-2 flex flex-col items-center justify-center gap-6">
        <h1>Main body</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>Footer</h1>
      </footer>
    </>
  );
}
