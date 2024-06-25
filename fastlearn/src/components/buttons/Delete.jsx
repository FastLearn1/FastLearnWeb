import { useState } from "react";

export const ButtonD = () => {
    const [isEditVisible, setIsEditVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleCloseClick = () => {
    setIsEditVisible(false);
  };
    return(

        <main>
            <div className="btn bg-indigo-700 h-10 w-80 text-white ml-15 inline-flex justify-center rounded-md text-center">
              <input type="checkbox" id="delete" className="cb" onChange={handleCheckboxChange} />
              <label htmlFor="delete" className="mt-2 text-center justify-center text-white btn">
                DELETE ACCOUNT
              </label>
            </div>
            {isEditVisible && (
            <div className="absolute inset-0 bg-black/70 hove">
                <div className="flex flex-col items-start absolute w-more-than-half h-1/4-screen top-44 left-48 bg-white nig">   
                      <h3 className="font-semibold mt-5 ml-5">DELETE ACCOUNT</h3>
                      <input type="text" className="t pl-4 mt-5" placeholder="Enter your password to delete your account"z/>
                      <p className="text-red-700 font-medium ml-10 mt-3">This action is irreversible</p>
                      <div className="flex gap-5 justify-center w-full mt-10">
                        <button className="bg-red-700 h-10 w-28 rounded-md font-medium text-white left-10 shadow-lg shadow-blue-gray-200">DELETE</button>
                        <button className="bg-green-500 font-medium text-white h-10 w-28 rounded-md shadow-lg shadow-blue-gray-200" onClick={handleCloseClick}> CANCEL</button>
                     </div>
                    
                </div>
            </div>)}

        </main>
    
    );
};