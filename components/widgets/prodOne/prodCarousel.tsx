import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
export default function prodCarousel() {


    return (
        <Carousel className="rounded">
            <Carousel.Item >
                <Image src='http://127.0.0.1:8000/assets/temp/products/1.jpeg' className='w-100' alt='test' fluid ></Image>
            </Carousel.Item>
            <Carousel.Item >
                <Image src='http://127.0.0.1:8000/assets/temp/products/2.jpeg' className='w-100' alt='test2' fluid ></Image>
            </Carousel.Item>
        </Carousel>
    );
}