type FillItems = {
  fill: string;
  d: string;
};

type Props = {
  iconData?: string | FillItems[];
};

export default function SingleSvgImage({ iconData }: Props) {
  return (
    <>
      {iconData && Array.isArray(iconData) ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48">
          {iconData.map((val, key) => (
            <path key={key} fill={val.fill} d={val.d} />
          ))}
        </svg>
      ) : typeof iconData === "string" && iconData ? (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d={iconData}/></svg>

      ) : null}
    </>
  );
}