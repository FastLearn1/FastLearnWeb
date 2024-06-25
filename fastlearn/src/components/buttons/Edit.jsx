import { useState } from "react";

export const ButtonE = () => {
    const [isEditVisible, setIsEditVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleCloseClick = () => {
    setIsEditVisible(false);
  };
    return(

        <main>
            <div className="btn bg-indigo-700 h-10 w-80 mr-4 inline-flex rounded-md text-center justify-center">
              <input type="checkbox" id="edit" className="cb btn" onChange={handleCheckboxChange}/>
              <label htmlFor="edit" className="mt-2 text-center justify-center text-white btn">EDIT INFORMATION</label>
              {isEditVisible && (
                <div className="absolute inset-0 bg-black/70 hove">
                  <div className="flex flex-col items-start absolute w-more-than-half h-3/4-screen top-16 left-48 bg-white nig">
                    <div className="p-7 w-full flex justify-between items-center">
                      <h3 className="font-semibold">EDIT INFORMATION</h3>
                    </div>
                    <input
                      type="text"
                      className="t pl-4 mb-4"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="t pl-4 mb-4"
                      placeholder="Last Name"
                    />
                    <input
                      type="text"
                      className="t pl-4 mb-4"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      className="t pl-4 mb-4"
                      placeholder="Password"
                    />
                    <input
                      type="text"
                      className="t pl-4 mb-4"
                      placeholder="Phone"
                    />
                    <input
                      type="text"
                      className="t pl-4 mb-4"
                      placeholder="Description"
                    />
                    <div className="flex gap-5 justify-center w-full">
                      <button className="bg-custom-gradient h-10 w-28 rounded-md font-medium text-white left-10 shadow-lg shadow-blue-gray-200">
                        SAVE
                      </button>
                      <button
                        className="bg-red-500 font-medium text-white h-10 w-28 rounded-md shadow-lg shadow-blue-gray-200"
                        onClick={handleCloseClick}
                      >
                        CANCEL
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
        </main>
    
    );
};