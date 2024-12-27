import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { NavMenu } from "./components/NavMenu";
import OfferCard from "./components/OfferCard";
import SignUpSystem from "./Auth/SignUpSystem";
import BonusBanner from "./components/BonusBanner";
import Foooter from "./components/Foooter";
import { OneTop } from "./Content/OneTop";

function Home() {
  return (
    <>
      <NavMenu />
      <BonusBanner />
      <OneTop />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <OfferCard />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUpSystem />} />
        </Routes>
      </main>
      <Foooter />
    </div>
  );
}

export default App;
