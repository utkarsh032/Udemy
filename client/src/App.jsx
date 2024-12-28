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
import { CoursePlaylist } from "./pages/CoursePlaylist/CoursePlaylist";

function Home() {
  return (
    <>
      <OfferCard />
      <Navbar />
      <NavMenu />
      <BonusBanner />
      <CourseRecommend />
      <OneTop />
      <TopicsRecommended />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUpSystem />} />
          <Route path="/course" element={<CoursePlaylist />} />
        </Routes>
      </main>
      <Foooter />
    </div>
  );
}

export default App;
