import { Suspense, useState } from "react"
import Card from "./components/cards/Card"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Nav from "./components/Nav"
import type { IskillCard } from "./components/type/Type"


const skillCardFetch = async (): Promise<IskillCard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
}

function App() {
  const [cardFetch] = useState(() => skillCardFetch())
  const [selectedCards, setSelectedCards] = useState<IskillCard[]>([]);
  return (
    <>
      <Nav />
      <HeroSection />

      <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-bars loading-xl"></span> </div>}>
        <Card cardFetch={cardFetch} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
      </Suspense>
      
      <Footer />
    </>
  )
}

export default App
