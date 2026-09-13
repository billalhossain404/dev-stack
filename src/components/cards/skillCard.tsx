import type { Dispatch, SetStateAction } from "react";
import type { IskillCard } from "../type/Type";
import { IoIosStar } from "react-icons/io";
import CardIcon from "./Cardicon";
import Badge from "./Badges";
import { Bounce, toast } from "react-toastify";

interface TechnologyCardProps {
    card: IskillCard;
    selectedCards: IskillCard[];
    setSelectedCards: Dispatch<SetStateAction<IskillCard[]>>;
}

const TechnologyCard = ({
    card,
    selectedCards,
    setSelectedCards,
}: TechnologyCardProps) => {
    return (
        <div className="group min-h-[300px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-between mt-3 mb-3">
                {CardIcon[card.icon as keyof typeof CardIcon]}
                <Badge text={card.badge} />
            </div>

            <h1 className="mb-2 text-xl font-bold group-hover:text-blue-600">
                {" "}
                {card.name}{" "}
            </h1>
            <p className="min-h-[60px] text-sm leading-5 text-[#64748B]">
                {" "}
                {card.description}{" "}
            </p>

            <div className="mt-4 flex items-center justify-between border-t pt-3">
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs">
                    {card.category}{" "}
                </span>
                <span className="text-xs text-gray-500">{card.level} </span>
                <span className="flex items-center gap-1 text-xs">
                    <IoIosStar className="text-yellow-400" />
                    {card.rating}
                </span>
            </div>

            <button
                onClick={() => {
                    setSelectedCards([...selectedCards, card]);
                    toast.success("Skill Added Successfully!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }}
                disabled={selectedCards.find((selectedCard) => selectedCard.name === card.name) !== undefined}
                className="btn btn-neutral mt-4 w-full rounded-lg">

                {selectedCards.find((selectedCard) => selectedCard.name === card.name) ? "Added" : "Add to Stack"}
            </button>
        </div>
    );
};

export default TechnologyCard;
