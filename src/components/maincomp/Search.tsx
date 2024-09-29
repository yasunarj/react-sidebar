import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@/components/ui/button";

import { useState } from "react";
const Search = () => {
  const [inputState, setInputState] = useState<string>("");
  return (
    <div className="flex items-center justify-between border-b-2 border-blue-100">
      <div className="flex items-center">
        <div className=" w-80 flex items-center border-2 border-gray-200 rounded p-2 m-4">
          <SearchIcon className="mr-2 text-gray-600" />
          <input
            type="text"
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
            }}
            placeholder={"知りたい言語を検索"}
            className="flex-grow outline-none"
          />
          {/* <button>検索する</button> */}
        </div>
        <div>
          <button className="px-2 py-2  rounded-sm bg-gray-700 text-white">検索</button>
        </div>
      </div>
      <div className="mr-4">
        <Button className="bg-gray-700 hover:bg-gray-900 text-white transition-colors duration-300">
          会員登録
        </Button>
      </div>
    </div>
  );
};

export default Search;
