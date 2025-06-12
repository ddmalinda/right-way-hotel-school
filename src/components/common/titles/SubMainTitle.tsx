type Prop={
    title:string;
}
export default function SubMainTitle({title}:Prop) {
  return (
    <div className="flex justify-center mx-auto lg:text-5xl text-3xl font-plusjak  font-[700] my-1 text-cBlue">
        {title}
    </div>
  )
}