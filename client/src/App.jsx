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
import { UdemyBusiness } from "./components/UdemyBusiness";
import { UdemyBusinessForm } from "./pages/CoursePlaylist/UdemyBusinessForm";

function Home() {
  return (
    <>
      <OfferCard />
      <Navbar />
      <NavMenu />
      <BonusBanner />
      <CourseRecommend />
      <UdemyBusiness />
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
          <Route path="/udemy-business/form" element={<UdemyBusinessForm />} />
        </Routes>
      </main>
      <Foooter />
    </div>
  );
}

export default App;
