export const Vid = ({ imageSrc }) => {
    return (
        <div className="mt-7 bg-white w-64 h-56 shadow-md shadow-blue-gray-300 table-column justify-center hover:w-72 cursor-pointer">
            <div className="bg-blue-gray-300 h-28 m-4 border border-blue-gray-700 rounded-lg">
                <img src={imageSrc} alt="Video Content" className="h-full w-full object-cover rounded-lg" />
            </div>
            <h6 className="m-4 text-xs text-blue-gray-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aut assumenda ipsam.
            </h6>
        </div>
    );
}
