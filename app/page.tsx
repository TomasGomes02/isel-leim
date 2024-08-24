import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <link rel="icon" href="/icon.png" />
    <Navbar/>
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24 mt-4">
      <p> Página Inicial</p>
      
    </main>
    </>
  );
}
