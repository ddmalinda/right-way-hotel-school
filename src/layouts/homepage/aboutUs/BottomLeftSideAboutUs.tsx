
type Props={
  misisionText:TypeText[]
}

type TypeText={
  text:string;
}
export default function BottomLeftSideAboutUs({misisionText}:Props) {
  return (
    <div className="space-y-3 lg:w-1/2 ">
      <div className="lg:text-3xl text-xl font-plusjak  font-[700] my-1 text-cBlue">
        Our Mission
      </div>
      <p className="space-y-5 lg:w-4/5 font-poppins text-cGray">
        To provide comprehensive hospitality education that combines theoretical knowledge with practical skills, preparing students for successful careers in the global hospitality industry.
      </p>
      {misisionText.map((val, key) => {
        return (
          <div key={key} className="flex gap-1 mx-auto text-cGray">
            <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DA8A24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            {val.text}
          </div>
        )
      })}

    </div>
  )
}
