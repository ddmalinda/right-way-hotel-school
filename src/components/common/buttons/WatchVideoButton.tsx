import { useState } from "react";
import { linkPath } from "../../../path/LinkPath";

export default function WatchVideoButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
      >
        <div  className="flex items-center lg:px-3 lg:py-3 lg:text-4xl max-[600px]:text-xl max-[600px]:px-2 text-white transition duration-200 border-2 border-white shadow-2xl  rounded-4 font-poppins font-[700] hover:bg-cBlue" >
        <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[60px] md:h-[60px] max-[600px]:w-[40px] max-[600px]:h-[40px]" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M304.09-178.5v-609L783.22-483 304.09-178.5Zm77.3-304.5Zm0 163.37L639.33-483 381.39-646.37v326.74Z"/></svg>
        Watch Now 
          
        </div>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-all bg-black/70"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-3xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute z-10 text-3xl text-white top-2 right-2"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <iframe
              src={linkPath.ytvideo + "?autoplay=1&fs=1"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}