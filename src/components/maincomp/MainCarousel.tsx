import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import carouselImage1 from "../../images/photo10.png";
import carouselImage2 from "../../images/photo11.png";
import carouselImage3 from "../../images/photo12.png";
import carouselImage4 from "../../images/photo13.png";

const MainCarousel = () => {
  return (
    <div className="flex justify-center mt-4">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem>
            <img src={carouselImage1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={carouselImage2} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={carouselImage3} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={carouselImage4} alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
