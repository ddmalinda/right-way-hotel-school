import { Link } from "react-router-dom"
import { linkPath } from "../../../path/LinkPath"

export default function WatchVideoButton() {
  return (
    <button >
      <Link to={linkPath.watchNowVideo} style={{ textDecoration: 'none', color: 'inherit' ,marginRight:'10px'}}>
      <div className="flex items-center justify-center lg:px-3 lg:py-2 text-2xl text-white transition duration-200 border-2 border-white shadow-2xl aline rounded-4 font-poppins font-[700] hover:bg-cBlue">
       <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M304.09-178.5v-609L783.22-483 304.09-178.5Zm77.3-304.5Zm0 163.37L639.33-483 381.39-646.37v326.74Z"/></svg>
       Watch Now 
      </div>
      </Link>

    </button>
    


  )
}