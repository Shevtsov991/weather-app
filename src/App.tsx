import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/components/Home";
import { MonthStatistics } from "./pages/monthStatistics/components/MonthStatistics";
import { Header } from "./shared/header/Header";
import { Popup } from "./shared/popUp/Popup";
function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/month-statisticss" Component={MonthStatistics} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
