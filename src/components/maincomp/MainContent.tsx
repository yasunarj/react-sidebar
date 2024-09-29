import Header from "./TitleContent";
import Search from "./Search";
import MainTitle from "./MainTitle";
import MainImage from "./MainImage";
import Main from "./Main";
import MainCarousel from "./MainCarousel";

const MainContent = () => {
  return (
    <div>
      <Header />
      <Search />
      <MainTitle />
      <MainImage />
      <Main />
      <MainCarousel />
    </div>
  );
};

export default MainContent;
