import CommoneWrapLayout from '../components/common/CommoneWrapLayout'
import AboutUs from '../layouts/homepage/AboutUs';


import CustomSlider from '../layouts/homepage/CustomSlider'

const sliderImage = [
    { image: '/assets/sliderImage/s-1.jpeg' },
    { image: '/assets/sliderImage/s-2.jpg' },
    { image: '/assets/sliderImage/s-3.jpg' },
    { image: '/assets/sliderImage/s-4.jpg' },
    { image: '/assets/sliderImage/s-5.jpg' },
];

export default function Homepage() {
  return (
    <div>
     <CommoneWrapLayout>
      <CustomSlider sliderImage={sliderImage}/>
      <AboutUs/>
       <hr/>
      course Details
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
