import { Image,Button} from 'react-bootstrap';

function seller() {
    
    return (
        <div className='my-2 py-3 card row flex-column align-items-center'>
            <Image src='/provider.png' className='w-50' fluid roundedCircle alt='Blaxk'></Image>
            <div className="text-center my-1">
                Blaxk
            </div>
            <div className="d-flex flex-row justify-content-center my-1">
                <div className='text-muted mx-2'>rating: </div>  
                <Image src='/star.png' width={20}  fluid alt='Blaxk'></Image>
                <Image src='/star.png' width={20}  fluid alt='Blaxk'></Image>
                <Image src='/star.png' width={20}  fluid alt='Blaxk'></Image>
                <Image src='/star.png' width={20}  fluid alt='Blaxk'></Image>
                <Image src='/star.png' width={20}  fluid alt='Blaxk'></Image>
            </div>
            <div className="d-flex flex-row justify-content-center my-1">
                <div className='text-muted mx-2'>items sold: </div> 
                <div>16660000pcs</div>
            </div>
            <div className="d-flex flex-row justify-content-center my-1">
                <Button variant="outline-primary">Show more</Button>
            </div>
        </div>
    );

}

export default seller;