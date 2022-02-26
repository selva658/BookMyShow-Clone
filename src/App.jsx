import { Navbar } from "./navbar/navbar";
import { Route, Routes } from "react-router-dom"
import FullScreenDialog from "./payment/payment"
import SecondSection from "./payment/ordersummary"
import Seating from "./seating/seating"
import {HomePage} from "./homepage"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/summary" element={<SecondSection></SecondSection>}></Route>
        <Route path="/payment" element={<FullScreenDialog ></FullScreenDialog>}></Route>
        <Route path="/seating" element={<Seating></Seating>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
