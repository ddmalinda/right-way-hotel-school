import ApplyNowButton from '../common/buttons/ApplyNowButton';
import WatchVideoButton from '../common/buttons/WatchVideoButton';
import BigTitle from '../common/titles/BigTitle';
type Props = {
    image: string;
}
export default function SingleSilder({ image }: Props) {
    return (
            <div className="w-full "
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            >
            <div className='container flex mx-auto'>
                <div className='max-[900px]:w-full max-sm:ml-3 min-[900px]:w-1/2 max-md:my-10 min-md:my-20'>
                
                   <BigTitle title='Master Cookery' color={"text-white"}/>
                   <BigTitle title='& Bakery in' color={"text-white"}/>
                   <BigTitle title='6 Months' color={"text-clightOrange"}/>
                   <div className='w-4/5 font-light text-white max-sm:text-xl min-sm:text-3xl font-poppins'>
                    <p>Unlock career opportunities with professional training & NVQ 4 certification</p>
                   </div>
                   <div className='flex flex-row lg:gap-15 min-lg:justify-start max-sm:justify-between min-sm:justify-between '>
                    <ApplyNowButton styles='lg:px-10 lg:py-6 max-sm:px-4 max-sm:py-4 max-sm:text-xl  text-4xl flex font-[700] min-sm:py-4 min-sm:px-5'/>
                    <WatchVideoButton/>
                   </div>
                </div>
                <div  className='min-[900px]:w-1/2 max-[900px]:hidden '>

                </div>
            </div>
        </div>
    )
}
