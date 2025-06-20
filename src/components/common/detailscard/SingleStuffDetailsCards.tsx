import React from 'react'

type Props = {

    image: string;
    name: string;
    description: string;
    position: string;


}

export default function SingleStuffDetailsCards({ image, name, description, position }: Props) {
    return (
        <div>
            <div className="transition duration-200 bg-white border-gray-400 shadow border-1 rounded-2xl hover:scale-110 shadow-gray-700">
                <div
                    className="relative w-full rounded-t-[15px]  aspect-square"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        className="absolute bottom-[-1px] left-0 right-0 h-1/2 sm:h-1/3 md:h-1/4 bg-gradient-to-t from-white to-transparent rounded-t-[15px]"
                    />
                </div>
                <div className='flex flex-col mb-5 text-center '>
                    {/* Title */}
                    <div className="text-4xl font-plusjak  font-[700] my-1 text-cBlue ">
                        {name}
                    </div>
                    {/* position */}
                    <div className="w-3/4 mx-auto my-1 text-3xl font-[600]  font-poppins text-cGray">
                        {position}
                    </div>
                    {/* Discription */}
                    <div className="w-3/4 mx-auto my-1 font-poppins text-cGray">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}