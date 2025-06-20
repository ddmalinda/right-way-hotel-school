type Prop = {
    title: string;
    color: string;
}
export default function BigTitle({ title, color }: Prop) {
  return (
    <div className={`lg:text-8xl md:text-7xl max-sm:text-5xl font-poppins font-[700] my-1 ${color}`}>
        {title}
    </div>
  )
}