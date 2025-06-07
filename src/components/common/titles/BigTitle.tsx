type Prop = {
    title: string;
    color: string;
}
export default function BigTitle({ title, color }: Prop) {
  return (
    <div className={`text-7xl  font-poppins font-[700] my-1 text-[${color}]`}>
        {title}
    </div>
  )
}