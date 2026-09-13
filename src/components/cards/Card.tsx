import { use, type Dispatch, type SetStateAction } from "react";
import type { IskillCard } from "../type/Type";
import Stackcard from "./Stackcard";
import TechnologyCard from "./Skillcard";

interface cardPromise {
    cardFetch: Promise<IskillCard[]>
    selectedCards: IskillCard[]
    setSelectedCards: Dispatch<SetStateAction<IskillCard[]>>
}

const Card = ({ cardFetch, selectedCards, setSelectedCards }: cardPromise) => {
    const cards = use(cardFetch);

    return (
        <>
            <div className="px-25 mb-10">
                <h1 className="font-bold text-5xl mb-5">
                    Explore the<span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
                </h1>

                <p className="text-[#64748B] text-xl">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="flex pr-25 mb-15">

                <div className="grid grid-cols-3 gap-12 w-full px-25">
                    {cards.map((card) => (
                        <TechnologyCard key={card.name} card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
                    ))}
                </div>

                <Stackcard selectedCards={selectedCards} setSelectedCards={setSelectedCards} />

            </div>
        </>
    );
};

export default Card;