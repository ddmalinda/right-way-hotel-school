
type Props = {
    title: string
}

const SingleNav = (props: Props) => {
  return (
    <div className=" hover:text-[#DA8A24] font-[700] ">{props.title}</div>
  )
}

export default SingleNav