import SubMainTitle from "../../components/common/titles/SubMainTitle"
import InfiniteReviewCarousel from "./StudentStories/InfiniteReviewCarousel"

let studentStories=[
    {
         ratingValue:5,
    description:"The practical training at Right Way prepared me perfectly for my role as Assistant Manager at a 5-star hotel. The faculty's industry experience made all the difference.",
    image:'/assets/homepageImage/storiesPersonsImage/person-1.jpg',
    name:'Sarah Mitchell',
    position:"Hotel Manager",
    },
    {
         ratingValue:4,
    description:"The pastry course exceeded my expectations! I now run my own bakery thanks to the comprehensive training and ongoing support from Right Way.",
    image:'/assets/homepageImage/storiesPersonsImage/person-2.jpg',
    name:'Michael Chen',
    position:"Bakery Owner",
    },
    {
         ratingValue:5,
    description:"Right Way didn't just teach me cooking techniques - they taught me how to lead in a professional kitchen. I'm now head chef at a resort.",
    image:'/assets/homepageImage/storiesPersonsImage/person-3.jpg',
    name:'Emily Rodriguez',
    position:"Head Chef",
    },
    {
         ratingValue:4,
    description:"The international standards and NVQ certification opened doors globally for me. I'm working in Dubai now thanks to Right Way's reputation.",
    image:'/assets/homepageImage/storiesPersonsImage/person-1.jpg',
    name:'David Thompson',
    position:"International Chef",
    },
    {
         ratingValue:5,
    description:"The hands-on training and real industry experience made me confident from day one. The mentorship continues even after graduation.",
    image:'/assets/homepageImage/storiesPersonsImage/person-2.jpg',
    name:'Priya Sharma',
    position:"Sous Chef",
    },
    {
         ratingValue:4,
    description:"Best decision I ever made! The cake structuring course helped me start my own wedding cake business. The skills are world-class.",
    image:'/assets/homepageImage/storiesPersonsImage/person-3.jpg',
    name:'Amanda Foster',
    position:"Cake Artist",
    },
]
type Props = {}

export default function StudentStories({}: Props) {
  return (
    <div className="bg-[#F8F8F8] py-5">
                <div className="container my-15 ">
                    {/* <div >
                        <SubTitle title='Stuff' />
                    </div> */}
                    <div>
                        <SubMainTitle title='Student Life & Success Stories' />
                    </div>
                    <p className="flex justify-center mx-auto mt-3 space-y-5 text-xl text-center text-cGray lg:w-2/3 font-poppins">
                        Hear from our students and alumni about their transformative experiences
                    </p>                    <div className=" mt-15">    
                       <InfiniteReviewCarousel studentStories={studentStories}/>
                    </div>
                </div>
                </div>
  )
}