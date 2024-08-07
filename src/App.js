import "./App.css";
import Activity from "./components/Activity";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import RecentOrders from "./components/RecentOrders";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <body className="container custom">
        <Header></Header>
        <main>
          <div className="Page">
            <SideBar></SideBar>
            <div className="CustomBody">
              <p className="Dashboard">DashBoard</p>
              <DashBoard></DashBoard>
              <Activity></Activity>
              <RecentOrders></RecentOrders>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
