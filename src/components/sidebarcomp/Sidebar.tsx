import SidebarIcon from "./SidebarIcon";
import SidebarList from "./SidebarList";
const Sidebar = () => {
  return (
    <>
      <div className="w-60 h-full bg-blue-950 text-white ">
        <SidebarIcon />
        <SidebarList />
      </div>
    </>
  );
};

export default Sidebar;
