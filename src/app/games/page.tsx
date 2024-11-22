import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GamePage from "../components/GamePage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-500 items-center p-2.5">
      <div className="bg-white m-1 p-4 rounded-xl ">
        <Navbar />
        <GamePage />
        <Footer />
      </div>
    </div>
  );
}
