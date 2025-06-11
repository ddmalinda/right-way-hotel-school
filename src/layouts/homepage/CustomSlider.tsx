import Carousel from 'react-bootstrap/Carousel';
import SingleSilder from '../../components/customSlider/SingleSilder';
type ImageLink={
    image:string;
}
type Props={
    sliderImage:ImageLink[];
}

function CustomSlider({sliderImage}:Props) {
    return (
        <div>

            <Carousel fade indicators={false} nextIcon={false} prevIcon={false}>
                {sliderImage.map((val, key) => (

                    <Carousel.Item key={key}>
                        <SingleSilder image={val.image}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CustomSlider;