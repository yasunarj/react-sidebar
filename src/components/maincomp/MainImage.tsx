import mainImage from "../../images/photo5.png";
import mainImage2 from "../../images/photo6.png";
import mainImage3 from "../../images/photo7.png";
import mainImage4 from "../../images/photo8.png";
import mainImage5 from "../../images/photo9.png";

const MainImage = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-blue-100 pb-4">
      <div className="w-1/5 cursor-pointer" onClick={() => {window.location.pathname = "/react"}}>
        <img className="w-40 h-40" src={mainImage} alt="" />
      </div>
      <div className="w-1/5 cursor-pointer">
        <img className="w-40 h-38" src={mainImage2} alt="" />
      </div>
      <div className="w-1/5 cursor-pointer">
        <img className="w-44 h-38" src={mainImage3} alt="" />
      </div>
      <div className="w-1/5 cursor-pointer">
        <img className="w-28 h-34" src={mainImage4} alt="" />
      </div>
      <div className="w-1/5 cursor-pointer">
        <img className="w-28 h-25" src={mainImage5} alt="" />
      </div>
    </div>
  );
};

export default MainImage;
