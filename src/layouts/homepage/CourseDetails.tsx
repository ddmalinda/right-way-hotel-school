import SubMainTitle from "../../components/common/titles/SubMainTitle";
import SubTitle from "../../components/common/titles/SubTitle";
import { linkPath } from "../../path/LinkPath";
import CourseDetailsCardList from "./courseDetails/CourseDetailsCardList";

let courseDetails = [
    {
        name: "Professional Cookery",
        description: "Master essential culinary skills & techniques for a thriving career.",
        duration: "6 Months",
        modules: "6",
        link: linkPath.course1,
        image:'/assets/homepageImage/courseDetailsImages/icon-1.png',
    }, {
        name: "Pastry & Bakery",
        description: "Master essential culinary skills & techniques for a thriving career.",
        duration: "6 Months",
        modules: '6',
        link: linkPath.course2,
        image:'/assets/homepageImage/courseDetailsImages/icon-2.png',
    }, {
        name: "Cake Structuring",
        description: "Master essential culinary skills & techniques for a thriving career.",
        duration: "6 Months",
        modules: '6',
        link: linkPath.course3,
        image:'/assets/homepageImage/courseDetailsImages/icon-3.png',
    },
]
export default function CourseDetails() {
    return (
        <div className="bg-[#F8F8F8] py-5">
        <div className="container my-15 ">
            <div >
                <SubTitle title='Course Details' />
            </div>
            <div>
                <SubMainTitle title='Courses in Right Way' />
            </div>
            <p className="flex justify-center mx-auto mt-3 space-y-5 text-xl text-center text-cGray lg:w-2/3 font-poppins">
                Upon completion, students receive an NVQ 4 certificate, opening doors to rewarding careers in top hotels and bakeries.
            </p>
            <div className="mt-15 ">    
            < CourseDetailsCardList courseDetails={courseDetails} />
            </div>
        </div>
        </div>
    )
}
