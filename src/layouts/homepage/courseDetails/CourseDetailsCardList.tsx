import { Link } from "react-router-dom";
import SingleCourseDetailsCards from "../../../components/common/detailscard/SingleCourseDetailsCards";
type Props={
    courseDetails:DataArry[];
}

type DataArry={
     name:string;
        description: string;
        duration: string;
        modules: string;
        link: string;
        image:string;
}

export default function CourseDetailsCardList({courseDetails}:Props) {
    return (
        <div className="flex max-[900px]:flex-col lg:justify-between min-[900px]:flex-row ">
            
            {courseDetails.map((val, key) => {
                return (
                    <div key={key} className="transition duration-200 border-gray-400 shadow max-[900px]:m-5 min-lg:w-3/10 shadow-gray-700 border-1 rounded-2xl hover:scale-110">
                        
                          {/* Link to page */ }
                    <Link to={val.link} style={{ textDecoration: 'none', color: 'inherit'}}>
                   <SingleCourseDetailsCards image={val.image} name={val.name} description={val.description} duration={val.duration} modules={val.modules} />
                    </Link>
                    </div>
                    
                )
            })}


        </div>
    )
}
