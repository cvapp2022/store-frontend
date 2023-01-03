import Carousel from 'react-bootstrap/Carousel';

export default function mainCarousel() {

    return (
        <Carousel className="rounded">
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://cdn.salla.sa/form-builder/JssYywpyNwiwWjHhymIUA9Rg2rrphU9hgaF0T784.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://cdn.salla.sa/form-builder/aL9jKMTDW5aclrntPdQGDS8RZ8HSbEsp7ehQnS3Y.png"
                    alt="Second slide"
                />

            </Carousel.Item>
        </Carousel>
    );

}