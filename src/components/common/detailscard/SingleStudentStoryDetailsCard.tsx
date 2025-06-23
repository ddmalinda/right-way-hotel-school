import Rating from '../publicComponents/Rating'

type Props = {
    ratingValue:number;
    description:string;
    image:string;
    name:string;
    position:string;
}

export default function SingleStudentStoryDetailsCard({ratingValue,description,image,name,position}: Props) {
  return (
    <div className='flex flex-col h-full p-3 border border-gray-500 shadow w-3xs rounded-2xl gap-y-3'>
        
        <Rating value={ratingValue}/>
        <p className='font-poppins'>
            <span >"</span>
           {description} 
            <span>"</span>
        </p>
        <div className='flex'>
            <img className='w-10 h-10 rounded-full me-[20px]' src={image}/>
            <div>
                <div className='font-plusjakarta text-cBlue font-[700]'>    
                {name}
                </div>
                <div className='font-plusjakarta text-cGray '>    
                {position}
                </div>
            </div>
        </div>

    </div>
  )
}