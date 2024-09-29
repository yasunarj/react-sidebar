import Sidebar from "./components/sidebarcomp/Sidebar";
import MainContent from "./components/maincomp/MainContent";

const App = () => {
  return (
    <div className="app-container flex h-screen overflow-hidden select-none">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 h-screen">
        <MainContent />
      </div>
    </div>
  );
};

export default App;
