type ButonProps={
 styles:string,
}
export default function ApplyNowButton({styles}:ButonProps) {
  return (
    <button>
      <div className={`bg-[#DA8A24] rounded-[10px] relative  transition duration-200 text-white  hover:bg-[#2E3A5F]  active:bg-[black] active:text-white ${styles}`}>
      Apply Now
      </div>
    </button>

    
  )
}