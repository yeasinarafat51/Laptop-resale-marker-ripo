import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import shoe1 from '../../../assets/lal9.jpg'
import shoe2 from '../../../assets/lal7.jpg'
import shoe3 from '../../../assets/lal8.jpg'

// import cos1 from '../../assets/bag1.jfif'
// import bag2 from '../../assets/bag2.avif'
// import bag3 from '../../assets/bag3.avif'

const Coursel = () => {
    return (
        <Carousel  >
        <div >
            <img className=" " src={shoe3}  alt=""/>
          
           
        </div>
        <div>
            <img src={shoe2}  alt=""/>
           
        </div>
        <div>
            <img src={shoe1}  alt=""/>
            
        </div>
        {/* <div>
            <img src={cos1} />
           
        </div>
        <div>
            <img src={bag2} />
           
        </div>
        <div>
            <img src={bag3} />
            
        </div> */}
    </Carousel>
    );
};

export default Coursel;