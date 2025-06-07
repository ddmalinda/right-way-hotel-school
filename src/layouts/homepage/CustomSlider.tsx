import Carousel from 'react-bootstrap/Carousel';
import SingleSilder from '../../components/customSlider/SingleSilder';

const sliderImage = [
    { image: '/assets/sliderImage/s-1.jpeg' },
    { image: '/assets/sliderImage/s-2.jpg' },
    { image: '/assets/sliderImage/s-3.jpg' },
    { image: '/assets/sliderImage/s-4.jpg' },
    { image: '/assets/sliderImage/s-5.jpg' },
];

function CustomSlider() {
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