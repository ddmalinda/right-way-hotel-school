
import SubMainTitle from '../../components/common/titles/SubMainTitle'
import BottomLeftSideAboutUs from './aboutUs/BottomLeftSideAboutUs'
import BottomRightSideAbouUs from './aboutUs/BottomRightSideAbouUs'
import SubTitle from '../../components/common/titles/SubTitle'
import RightSideAbouUs from './aboutUs/RightSideAbouUs'
import LeftSideAbouUs from './aboutUs/LeftSideAbouUs'

type TextList={
  text:string;
}

type MisisionText={
  text:string;
}
type Props={
  textList:TextList[];
  misisionText:MisisionText[];
}

export default function AboutUs({textList,misisionText}:Props) {
  return (
    <div className={'container py-15'}>
      <div>
        <SubTitle title='About Us' />
      </div>
      <div>
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
