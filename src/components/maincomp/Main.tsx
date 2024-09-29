const Main = () => {
  return (
    <>
      <h2 className="my-5 text-center text-3xl font-semibold text-blue-950">
        エンジニア転職率
        <span className="relative">
          <span className="absolute inset-x-0 bottom-0 bg-yellow-200 h-1/2"></span>
          <span className="relative text-red-600 text-5xl"> 98.2% </span>
        </span>
        の実績！
      </h2>
      <p className="text-gray-700 text-center text-lg font-semibold mt-4">
        卒業後の１年間は教材の利用、メンターへの質問が可能です。
      </p>
    </>
  );
};

export default Main;
