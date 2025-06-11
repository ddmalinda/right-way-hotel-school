type Prop = {
    title: string;
    color: string;
}
export default function BigTitle({ title, color }: Prop) {
  return (
    <div className={`lg:text-7xl text-4xl font-poppins font-[700]  my-1 ${color}`}>
        {title}
    </div>
  )
}