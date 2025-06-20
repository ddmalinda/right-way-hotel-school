import SubMainTitle from "../../components/common/titles/SubMainTitle"
import SubTitle from "../../components/common/titles/SubTitle"
import { linkPath } from "../../path/LinkPath"
import StuffList from "./stuff/StuffList"

let stuffInformations=[
    {
        name: "Walter White",
        position:"Director",
        description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
         link: linkPath.course1,
        image:'/assets/homepageImage/stuffImages/chefs-1.jpg',
    },{
        name: "Sarah Jhonson",
        position:"Lecture",
        description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
         link: linkPath.course1,
        image:'/assets/homepageImage/stuffImages/chefs-2.jpg',
    },{
        name: "William Anderson",
        position:"Coach",
        description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
         link: linkPath.course1,
        image:'/assets/homepageImage/stuffImages/chefs-3.jpg',
    },
    
   
]

export default function Stuff() {
  return (
     <div className="bg-[#F8F8F8] py-5">
            <div className="container my-15 ">
                <div >
                    <SubTitle title='Stuff' />
                </div>
                <div>
                    <SubMainTitle title='Our Proffesional Stuff' />
                </div>
                <p className="flex justify-center mx-auto mt-3 space-y-5 text-xl text-center text-cGray lg:w-2/3 font-poppins">
                    Upon completion, students receive an NVQ 4 certificate, opening doors to rewarding careers in top hotels and bakeries.
                </p>
                <div className="mt-15 ">    
                    <StuffList stuffInformations={stuffInformations}/>
                </div>
            </div>
            </div>
  )
}