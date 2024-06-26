export const Pic = ({ imageSrc }) =>{
    return(
        <div className="bg-blue-gray-300 size-48 rounded-full ml-10 mt-5">
        <img src={imageSrc} alt="Profile" className="rounded-full h-full w-full object-cover" />
      </div>
        
    )
}

