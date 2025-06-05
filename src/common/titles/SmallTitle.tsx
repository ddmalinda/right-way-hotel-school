type Prop={
    title:string;
}
export default function SmallTitle({title}:Prop) {
  return (
    <div className="text-xl font-[500] my-1">
        {title}
    </div>
  )
}
