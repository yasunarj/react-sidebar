import Icon from "../../images/photo.png";

const SidebarIcon = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <img className="mb-2 w-20 h-20 object-cover rounded-full " src={Icon} alt="" />
      <p>yasunarj@gmail.con</p>
    </div>
  );
};

export default SidebarIcon;
