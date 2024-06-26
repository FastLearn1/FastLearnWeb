export const Box = ({ imageSrc }) => {
    return (
        <div className="mt-7 l1 bg-white size-64 shadow-md shadow-blue-gray-300 table-column justify-center hover:w-72 h-64 cursor-pointer m-5">
            <div className="bg-blue-gray-300 h-32 m-4 border border-blue-gray-700 rounded-lg text-wrap">
                <img src={imageSrc} alt="Box Content" className="h-full w-full object-cover rounded-lg" />
            </div>
            <h6 className="m-4 text-xs text-blue-gray-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aut assumenda ipsam.
            </h6>
        </div>
    );
}
