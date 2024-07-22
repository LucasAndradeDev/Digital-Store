import Ellipse from "../../assets/Ellipse.svg";
import Laye from "../../assets/Laye.svg";
import "./Static-offer.css";
import Button from "../Button/Button"

function StaticOffer() {
  return (
    <div className="StaticOffer">
      <div className="StaticOffer-img">
        <img src={Laye} alt="Laye" className="Laye" />
        <img src={Ellipse} alt="Ellipse" className="Ellipse" />
      </div>

      <div className="StaticOffer-text">
        <p className="ofert">Oferta Especial</p>
        <h3>Lorem ipsum dolor sit.</h3>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
          blanditiis accusamus nobis numquam non earum quod corrupti. Pariatur,
          consequatur dolores. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum, velit illo. Eos pariatur similique,
          repudiandae incidunt nam quos, provident, quod necessitatibus ea
          reprehenderit porro soluta quis! Dicta accusantium eaque sit.
        </p>
        <div className="StaticOffer-Button">
        <Button/>
        </div>
        
      </div>
    </div>
  );
}

export default StaticOffer;
