import SingleStuffDetailsCards from "../../../components/common/detailscard/SingleStuffDetailsCards";

type Props = {
    stuffInformations: {
        image: string;
        name: string;
        description: string;
        position: string;
        link:string;
    }[]
}

export default function StuffList({ stuffInformations }: Props) {
    return (
        <div className="flex justify-around max-md:flex-col ">
            {stuffInformations.map((val, key) => {
                return (
                    <div key={key} className="max-[900px]:mx-7 max-[900px]:my-10  min-[900px]:w-7/25 ">
                        <SingleStuffDetailsCards name={val.name} image={val.image} position={val.position} description={val.description} />
                    </div>
                )

            })}
        </div>
    )
}