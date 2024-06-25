import { useState } from "react";
import { ButtonU } from "./Upload";
import { CirclePlus } from "lucide-react";

export const ButtonAdd = () => {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isNextVisible, setIsNextVisible] = useState(false);

    const handleCheckboxChange = () => {
        setIsEditVisible(!isEditVisible);
        setIsNextVisible(false); // Reset the next section visibility when editing starts
    };

    const handleCloseClick = () => {
        setIsEditVisible(false);
        setIsNextVisible(false);
    };

    const handleNextClick = () => {
        setIsNextVisible(true);
    };

    return (
        <main>
            <div className="btn3 bg-indigo-700 size-16 text-white inline-flex justify-center rounded-full text-center">
                <input type="checkbox" id="EDITAR" className="cb" onChange={handleCheckboxChange} />
                <label htmlFor="EDITAR" className="mt-2 text-center text-sm justify-center text-white bt3">
                    <CirclePlus className="size-12 hover:cursor-pointer"></CirclePlus>
                </label>
            </div>

            {isEditVisible && (
                <div className="absolute inset-0 bg-black/70 hove">
                    <div className="grid grid-rows-7 items-start absolute w-more-than-half h-3/4-screen top-16 left-36 bg-white nig">
                        <div className="flex w-full justify-start">
                            <h3 className="font-semibold mt-5 ml-5">NEW ASSIGNMENT</h3>
                            <h3 className="font-semibold mt-7 ml-36">TITLE</h3>
                        </div>
                        <div className="flex w-full row-span-2">
                            <div>
                                <h3 className="font-semibold ml-5">THUMBNAIL</h3>
                                <div className="m mr-3 ml-5 mt-2"></div>
                            </div>
                            <div className="flex flex-col w-4/6 mr-2">
                                <input type="text" id="assignmentTitle" className="t2 w-full pl-2" placeholder="Enter the Title for the Assignment" />
                                <h3 className="font-semibold mt-5">DESCRIPTION</h3>
                                <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam quia eaque assumenda facere. Numquam quidem enim quisquam rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendi...</div>
                            </div>
                        </div>
                        <div className="ml-5 mt-14">
                            <ButtonU />
                        </div>
                        <div className="flex gap-40 ml-10 mt-5">
                            <h3 className="font-semibold mt-5">FILES</h3>
                            <h3 className="font-semibold mt-5">LINKS</h3>
                            <h3 className="font-semibold mt-5 ml-20">FILTERS</h3>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="bg-blue-gray-100 w-28 h-28 ml-5 rounded-3xl"></div>
                                <h6 className="text-xs ml-6 mt-2">Lorem ipsum d...</h6>
                            </div>
                            <div className="bg-blue-gray-100 w-10 h-10 rounded-full mt-6 ml-5"></div>
                            <input type="text" id="contentLink" className="t2 w-60 pl-2 ml-14" placeholder="enter the link to add the content" />
                            <input type="text" id="filterTags" className="t2 w-60 pl-2 ml-10" placeholder="enter the filter tags #example" />
                        </div>
                        <div className="mt-5 mr-5">
                            <div className="flex gap-5 justify-end w-full">
                                <button className="bg-indigo-700 h-10 w-28 rounded-md font-medium text-white shadow-lg shadow-blue-gray-200" onClick={handleNextClick}>NEXT</button>
                                <button className="bg-red-500 font-medium text-white h-10 w-28 rounded-md shadow-lg shadow-blue-gray-200" onClick={handleCloseClick}>CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isNextVisible && (
                <div className="absolute inset-0 flex justify-center items-center bg-black/70">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-center">New Section</h3>
                        <p>This is the content of the new section displayed when NEXT is clicked.</p>
                        <div className="flex gap-5 justify-center mt-5">
                            <button className="bg-indigo-700 h-10 w-28 rounded-md font-medium text-white shadow-lg shadow-blue-gray-200" onClick={handleCloseClick}>CLOSE</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};
