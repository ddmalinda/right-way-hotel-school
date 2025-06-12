
import MoreDetailsButoon from '../buttons/MoreDetailsButoon'

type Props={
    image:string;
    name:string;
    description:string;
    duration:string;
    modules:string;
}

export default function SingleCourseDetailsCards({image,name,description,duration,modules}:Props) {
  return (
    <div>
         <div  className="flex flex-col items-center gap-3 p-3 mx-auto">
                        <img src={image} className="w-[220px] h-[220px]"/>
                        
                        {/* Title */ }
                        <div className="text-5xl text-center   font-plusjak  font-[700] my-1 text-cBlue ">
                            {name}
                        </div>
                        
                          {/* Discription */ }
                        <div className="w-3/4 mx-auto my-1 text-2xl text-center font-poppins text-cGray">
                            {description}
                        </div>
                        
                          {/* other details */ }
                        <div className="w-3/4 mx-auto my-1 text-2xl text-start font-poppins text-cGray">
                           <span className="font-semibold">Duration:</span> {duration}
                            <br />
                            <span className="font-semibold">Modules:</span> {modules}
                        </div>
                        <MoreDetailsButoon/>
                    </div>
    </div>
  )
}
