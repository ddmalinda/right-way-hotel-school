import CommoneWrapLayout from '../components/common/CommoneWrapLayout'
import AboutUs from '../layouts/homepage/AboutUs';
import CourseDetails from '../layouts/homepage/CourseDetails';


import CustomSlider from '../layouts/homepage/CustomSlider'

const sliderImage = [
    { image: '/assets/homepageImage/sliderImage/s-1.jpeg' },
    { image: '/assets/homepageImage/sliderImage/s-2.jpg' },
    { image: '/assets/homepageImage/sliderImage/s-3.jpg' },
    { image: '/assets/homepageImage/sliderImage/s-4.jpg' },
    { image: '/assets/homepageImage/sliderImage/s-5.jpg' },
];

let textListAboutUs = [
  {
    text:"Learn from expert chefs and hospitality professionals",
  },
   {
    text:"Earn an NVQ 4 certificate with 6 months of real-world training",
  },
   {
    text:"Open doors to rewarding careers in hotels and bakeries",
  },
]
let misisionTextAboutUs = [
  { text: 'Industry-aligned curriculum' },
  { text: 'Experienced faculty from top hotels' },
  { text: 'State-of-the-art training facilities' },
  { text: 'Strong industry partnerships' },

]

export default function Homepage() {
  return (
    <div>
     <CommoneWrapLayout>
      <CustomSlider sliderImage={sliderImage}/>
      <AboutUs textList={textListAboutUs} misisionText={misisionTextAboutUs}/>
      <CourseDetails/>
      <hr/>
      stuff
      <hr/>
      Student life &syccess Stories 
       <hr/>
      contact us

     </CommoneWrapLayout>
    </div>
  )
}
