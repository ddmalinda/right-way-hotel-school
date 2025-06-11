type Prop={
    title:string;
}
export default function SubMainTitle({title}:Prop) {
  return (
    <div className="lg:text-5xl sm:text-3xl font-plusjak  font-[700] my-1 text-cBlue">
        {title}
    </div>
  )
}