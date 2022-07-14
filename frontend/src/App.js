import "./App.css";
import { Navbar } from "./component/global/navbar/Navbar";
import { AllRoutes } from "./routes/Routes";
// import loadImage from "./assets/loading.svg";
// import { useSelector } from "react-redux";

function App() {
  // const loading = useSelector((state) => state.loading.isLoading);
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* {loading === true ? (
        <div className="loadingAnimation">
          <img src={loadImage} alt="loading" />
          <h1>Loading...</h1>
        </div>
      ) : null} */}
    </div>
  );
}

export default App;
