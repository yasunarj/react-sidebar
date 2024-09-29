import titleImage from "../../images/photo3.jpg";

const Header = () => {
  return (
    <div className="flex h-full border-b-2 border-blue-100 p-2">
      <div className="w-1/2 flex flex-col justify-end p-4">
        <h2 className="text-blue-950 text-5xl font-bold mb-2">Nari's Code</h2>
        <p className="text-gray-800 text-lg">あなたの思い描く世界観を</p>
        <p className="text-gray-800 text-lg ml-24">形に変えて見ませんか？</p>
      </div>
      <div className="w-1/2 flex justify-end items-end">
        <img className="h-48 min-w-xl rounded-lg" src={titleImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
