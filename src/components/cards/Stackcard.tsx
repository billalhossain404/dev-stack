import type { Dispatch, SetStateAction } from "react";
import type { IskillCard } from "../type/Type";
import { AiOutlineDelete } from "react-icons/ai";
import CardIcon from "./Cardicon";
import { Bounce, toast } from "react-toastify";


interface StackcardProps {
    selectedCards: IskillCard[];
    setSelectedCards: Dispatch<SetStateAction<IskillCard[]>>;
}

const Stackcard = ({ selectedCards, setSelectedCards }: StackcardProps) => {
    return (
        <div className="w-[30%] border-dashed border-2 rounded-2xl p-4 border-gray-200">
            <h2 className="text-2xl font-bold mb-5 "> Your Stack</h2>

            {selectedCards.length === 0 ? (
                <div>
                    <p className="mb-3 text-[#94A3B8]">No technologies selected yet.</p>

                    <p className="px-18 border-2 border-dashed text-[#94a3b8b3] rounded-b-md p-4"><span className=" text-[#94A3B8]"> Your stack is empty.</span></p>
                </div>
            ) :

                (
                    <div>
                        {selectedCards.map((card) => (
                            <div
                                key={card.name} className="border p-3 rounded-md mb-3 flex justify-between items-center border-gray-200">
                                <div className="flex gap-2">

                                    <div className="mt-2">
                                        {CardIcon[card.icon as keyof typeof CardIcon]}
                                    </div>

                                    <div>
                                        <h2 className="font-bold">{card.name}</h2>

                                        <p className="text-sm text-[#64748B]"> {card.category} </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => { setSelectedCards(selectedCards.filter((selectedCard) => selectedCard.name !== card.name)); }}
                                    className="text-red-700 text-xl"
                                >
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

            {selectedCards.length > 0 && (
                <button onClick={() => {
                    setSelectedCards([]);
                    toast.warn('All Cards are Removed', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                }}
                    className="btn btn text-red-700 mt-4 w-full rounded-lg">Remove All</button>
            )}

            <p className="mt-5 font-semibold">{selectedCards.length} Technology Selected </p>

        </div>
    );
};

export default Stackcard;