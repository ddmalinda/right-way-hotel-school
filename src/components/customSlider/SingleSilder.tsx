import ApplyNowButton from '../common/buttons/ApplyNowButton';
import WatchVideoButton from '../common/buttons/WatchVideoButton';
import BigTitle from '../common/titles/BigTitle';
type Props = {
    image: string;
}
export default function SingleSilder({ image }: Props) {
    return (
            <div className="w-full lg:h-[800px] md:h-[700px] max-[600px]:h-[400px]"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            >
            <div className='container flex mx-auto'>
                <div className=' max-[600px]:ml-3 sm:mt-4 lg:w-1/2 lg:mt-20 '>
                
                   <BigTitle title='Master Cookery' color={"text-white"}/>
                   <BigTitle title='& Bakery in' color={"text-white"}/>
                   <BigTitle title='6 Months' color={"text-[#FFC371]"}/>
                   <div className='w-4/5 font-light text-white max-[600px]:text-xl lg:text-3xl font-poppins'>
                    <p>Unlock career opportunities with professional training & NVQ 4 certification</p>
                   </div>
                   <div className='flex  lg:gap-15 lg:justify-start max-[600px]:justify-between '>
                    <ApplyNowButton styles='lg:px-10 lg:py-6 max-[600px]:px-3 max-[600px]:py-2 max-[600px]:text-xl lg:text-4xl flex font-[700] '/>
                    <WatchVideoButton/>
                   </div>
                </div>
                <div  className='lg:w-1/2 sm:hidden'>

                </div>
            </div>
        </div>
    )
}
