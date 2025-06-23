import SingleRatingStar from "./SingleRatingStar"

type Props = {
    value?: number;
}

export default function Rating({value=0}: Props) {
  return (
    <div className="flex gap-x-1">
      {[...Array(5)].map((_, i) => (
        <SingleRatingStar key={i} value={i < value} />
      ))}
    </div>
  )
}