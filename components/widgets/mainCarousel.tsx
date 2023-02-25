import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function mainCarousel() {

    return (
        <Carousel className="rounded">
            <Carousel.Item interval={3000}>
                <Image src='http://127.0.0.1:8000/assets/temp/slides/1.jpg' className='w-100' alt='test' fluid ></Image>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Image src='http://127.0.0.1:8000/assets/temp/slides/2.jpg' className='w-100' alt='test2' fluid ></Image>
            </Carousel.Item>
        </Carousel>
    );

}