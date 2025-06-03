
type Props = {
    title: string
}

const SingleNav = (props: Props) => {
  return (
    <div className="font-bold font-stretch-100%">{props.title}</div>
  )
}

export default SingleNav