import { Link } from "react-router-dom"
import { pagesLinkpath } from "../../../path/LinkPath"


type ButonProps = {
  styles: string,
}
export default function ApplyNowButton({ styles }: ButonProps) {
  return (
    <button >
      <Link to={pagesLinkpath.applyCourse} style={{ textDecoration: 'none', color: 'inherit' ,marginRight:'10px'}}>
        <div className={`bg-[#DA8A24] rounded-[10px] relative font-poppins transition duration-200 text-white  hover:bg-[#2E3A5F]  active:bg-[black] active:text-white ${styles}`}>
          Apply Now
        </div>
      </Link>

    </button>
    


  )
}