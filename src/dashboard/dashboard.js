import Home from "./components/home";
import Sidebar from "./common/sidebar";

function Dashboard() {
  return (
    <div className="g-sidenav-show vh-100 bg-gray-100">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default Dashboard;
