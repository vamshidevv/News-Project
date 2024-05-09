import "./App.css";
import Routes1 from "./Components/Routes/Routes1";
// import SideNavBar from "./Components/SideNavBar";
// import AdminSignIn from "./Components/AdminSignIn";
import NavBar from "./Components/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Ensure the styles are imported


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      {/* <AdminSignIn /> */}
      {/* <SideNavBar /> */}
      <Routes1 />
    </div>
  );
}

export default App;
