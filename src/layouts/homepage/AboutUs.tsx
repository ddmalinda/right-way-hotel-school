
import SubMainTitle from '../../components/common/titles/SubMainTitle'
import BottomLeftSideAboutUs from './aboutUs/BottomLeftSideAboutUs'
import BottomRightSideAbouUs from './aboutUs/BottomRightSideAbouUs'
import SubTitle from '../../components/common/titles/SubTitle'
import RightSideAbouUs from './aboutUs/RightSideAbouUs'
import LeftSideAbouUs from './aboutUs/LeftSideAbouUs'

let textList = [
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
let misisionText = [
  { text: 'Industry-aligned curriculum' },
  { text: 'Experienced faculty from top hotels' },
  { text: 'State-of-the-art training facilities' },
  { text: 'Strong industry partnerships' },

]

export default function AboutUs() {
  return (
    <div className={'container py-15'}>
      <div className='flex justify-center mx-auto'>
        <SubTitle title='About Us' />
      </div>
      <div className='flex justify-center mx-auto'>
        <SubMainTitle title='Who are Right Way' />
      </div>
      <div className='lg:flex sm:grid'>
        <LeftSideAbouUs/>
        <RightSideAbouUs textList={textList}/>
      </div>
      <div className='lg:flex sm:grid '>
        <BottomLeftSideAboutUs misisionText={misisionText}/>
        <BottomRightSideAbouUs/>
      </div>
    </div>
  )
}
