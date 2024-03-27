import Header from "@/components/Header";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-between text-black ">
      <Header/>
      <HomePage/>
    </main>
  );
}
