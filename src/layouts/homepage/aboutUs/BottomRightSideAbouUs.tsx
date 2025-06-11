import { linkPath, videoLinks } from "../../../path/LinkPath";

export default function BottomRightSideAbouUs() {
  return (
    <div className="flex items-center justify-center h-full pt-10 lg:w-1/2">
      <iframe
        width="600"
        height="300"
        src={videoLinks.ytvideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  )
}10