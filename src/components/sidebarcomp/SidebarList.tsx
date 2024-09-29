import { sidebarData } from "./sidebarData";

const SidebarList = () => {
  return (
    <>
      <ul className="w-full h-screen">
        {sidebarData.map((list, index) => {
          return (
            <li
              className={
                window.location.pathname === list.link
                  ? "flex justify-center h-14 items-center cursor-pointer bg-blue-900"
                  : "flex justify-center h-14 items-center cursor-pointer hover:bg-blue-900"
              }
              key={index}
              onClick={() => {
                window.location.pathname = list.link;
              }}
            >
              <div className="flex-30 text-center">{list.icon}</div>
              <div className="flex-70">{list.title}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SidebarList;
