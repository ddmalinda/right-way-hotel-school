type Prop={
    title:string;
}
export default function SubTitle({title}:Prop) {
  return (
    <div className="text-xl font-[500] my-1 text-[#7A7676]">
        {title}
    </div>
  )
}