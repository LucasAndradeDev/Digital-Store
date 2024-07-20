import elipse from '../../assets/Ellipse.svg';
import laye from '../../assets/Laye.svg';
import './Static-offer.css';

function StaticOffer() {
    return (
        <div className='StaticOffer'>
            <div className='StaticOffer-img'>
                <img src={laye} alt="Laye" className='Laye' />
            </div>

            <div className='StaticOffer-text'>
                <p>Oferta Especial</p>
                <h3>Lorem ipsum dolor sit.</h3>
                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis accusamus nobis numquam non earum quod corrupti. Pariatur, consequatur dolores.</p>
            </div>
        </div>
    )
}

export default StaticOffer;
