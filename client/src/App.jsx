import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { NavMenu } from "./components/NavMenu";
import OfferCard from "./components/OfferCard";
import SignUpSystem from "./Auth/SignUpSystem";
import BonusBanner from "./components/BonusBanner";
import Foooter from "./components/Foooter";
import { OneTop } from "./Content/OneTop";
import { TopicsRecommended } from "./components/TopicRecommend";
import CourseRecommend from "./Content/CourseRecommend";

function Home() {
  return (
    <>
      <NavMenu />
      <BonusBanner />
      <CourseRecommend />
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
      <TopicsRecommended />
      <Foooter />
    </div>
  );
}

export default App;
