type Text={
    text:string;
}
type Props={
    textList:Text[];
}

export default function RightSideAbouUs({textList}:Props) {
  return (
    <div className='mt-3 space-y-5 lg:w-1/2 font-poppins'>
          <p className='italic text-cGray'>Rightway Hotel School is recognized as the best hotel school in Sri Lanka, dedicated to shaping the future of hospitality professionals. We offer internationally accredited courses in cookery, pastry, and bakery, ensuring students gain practical skills and industry experience</p>
        <div>
          {textList.map((val,key)=>{
            return(
              <div key={key} className='flex gap-3 py-1 text-cGray sm:w-4/5 lg:w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#DA8A24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
              {val.text}
              </div>
            )
          })}
          
        </div>
          <p className='italic text-cGray'>Our specialized programs ensure you acquire the skills and confidence to thrive in the hospitality world. Join us and turn your passion into a profession!</p>
        </div>

  )
}
