import ApplyNowButton from '../common/buttons/ApplyNowButton';
import WatchVideoButton from '../common/buttons/WatchVideoButton';
import BigTitle from '../common/titles/BigTitle';
type Props = {
    image: string;
}
export default function SingleSilder({ image }: Props) {
    return (
            <div className="w-full lg:h-[600px] md:h-[700px] sm:h-[350px]"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            >
            <div className='flex mx-auto '>
                <div className='space-y-3 gap-y-3 sm:ml-3 sm:mt-4 lg:w-1/2 lg:mt-20 lg:ml-30 space'>
                
                   <BigTitle title='Master Cookery' color={"text-white"}/>
                   <BigTitle title='& Bakery in' color={"text-white"}/>
                   <BigTitle title='6 Months' color={"text-[#FFC371]"}/>
                   <div className='w-4/5 font-light text-white sm:text-2xl lg:text-3xl font-poppins'>
                    <p>Unlock career opportunities with professional training & NVQ 4 certification</p>
                   </div>
                   <div className='flex mx-auto lg:gap-15 lg:justify-start sm:justify-around'>
                    <ApplyNowButton styles='lg:px-5 sm:px-3 py-3 sm:text-xl lg:text-2xl flex font-[700] '/>
                    <WatchVideoButton/>
                   </div>
                </div>
                <div  className='lg:w-1/2 sm:hidden'>

                </div>
            </div>
        </div>
    )
}
