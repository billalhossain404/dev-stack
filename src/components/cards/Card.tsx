import { use } from "react";
import type { IskillCard } from "../type/Type";
import { IoIosStar } from "react-icons/io";
import CardIcon from "./Cardicon";
import Badge from "./Badges";

interface cardPromise {
    cardFetch: Promise<IskillCard[]>
}

const Card = ({ cardFetch }: cardPromise) => {
    const cards = use(cardFetch);
    return (
        <>
        <div className="px-25 mb-10">
                <h1 className="font-bold text-5xl mb-5">Explore the <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Technologies
                    </span></h1>
                <p className="text-[#64748B] text-xl">Pick one technology per category to build your ideal stack.</p>
            </div>
        <div className="flex pr-25 mb-15">
            

                <div className="grid grid-cols-3 gap-12 w-full px-25">
                
                {cards.map((card) => (
                    <div key={card.name}
                        className="group min-h-[300px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex justify-between mt-3 mb-3">
                            {CardIcon[card.icon as keyof typeof CardIcon]}
                            <Badge text={card.badge} />
                        </div>
                        <h1 className="mb-2 text-xl font-bold group-hover:text-blue-600">
                            {card.name}
                        </h1>

                        <p className="min-h-[60px] text-sm leading-5 text-[#64748B]">
                            {card.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t pt-3">
                            <span className="rounded-md bg-gray-100 px-2 py-1 text-xs">
                                {card.category}
                            </span>

                            <span className="text-xs text-gray-500">
                                {card.level}
                            </span>

                            <span className="flex items-center gap-1 text-xs">
                                <IoIosStar className="text-yellow-400" />
                                {card.rating}
                            </span>
                        </div>

                        <button className="btn btn-neutral mt-4 w-full rounded-lg">
                            Add to Stack
                        </button>
                    </div>
                ))}
            </div>

            <div className="w-[30%]  border-2 border-amber-500">
                <h1>Your Stack</h1>
                <div>
                    <p>No technology selected yet</p>
                    <p className="border-2 border-dashed text-[#94a3b8b3] rounded-b-md"><span className="text-black">Your stack is empty.</span></p>
                </div>
                <p> { } Technology Selected</p>
            </div>

            </div>

            </>

    );
};

export default Card;