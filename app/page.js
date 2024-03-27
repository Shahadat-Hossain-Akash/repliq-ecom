import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Product from "@/components/Product";
import data from '../data/data'

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-between text-black gap-4">
      <Header/>
      <HomePage/> 
      <Product title="Lastest Products" data={data}/>
    </main>
  );
}
