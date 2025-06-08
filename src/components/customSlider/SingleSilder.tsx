import ApplyNowButton from '../common/buttons/ApplyNowButton';
import WatchVideoButton from '../common/buttons/WatchVideoButton';
import BigTitle from '../common/titles/BigTitle';
type Props = {
    image: string;
}
export default function SingleSilder({ image }: Props) {
    return (
            <div
                className="w-full h-[600px] "
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            >
            <div className='flex mx-auto '>
                <div className='w-1/2 mt-20 ml-30 space'>
                
                   <BigTitle title='Master Cookery' color={"text-white"}/>
                   <BigTitle title='& Bakery in' color={"text-white"}/>
                   <BigTitle title='6 Months' color={"text-[#FFC371]"}/>
                   <div className='w-4/5 text-3xl font-light text-white font-poppins'>
                    <p>Unlock career opportunities with professional training & NVQ 4 certification</p>
                   </div>
                   <div className='flex gap-15'>
                    <ApplyNowButton styles='px-5 py-3 text-2xl font-[700] '/>
                    <WatchVideoButton/>
                   </div>
                </div>
                <div  className='w-1/2'>

                </div>
            </div>
        </div>
    )
}
