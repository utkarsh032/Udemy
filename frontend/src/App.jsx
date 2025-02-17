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
import LastSearched from "./Content/LastSearched";
import { CoursePlaylist } from "./pages/CoursePlaylist/CoursePlaylist";
import { UdemyBusiness } from "./components/UdemyBusiness";
import { UdemyBusinessForm } from "./pages/CoursePlaylist/UdemyBusinessForm";
import { Instructor } from "./pages/Instructor/Instructor";
import { Create } from "./pages/Instructor/Create";
import CourseGetCourse from "./pages/Course/CourseGetCourse";
import RecentWatch from "./components/RecentWatch";
import { SignInForm } from "./Auth/SingInForm/SingInForm";
import { CartSection } from "./pages/cart/cartSection";

function Home() {
  return (
    <>
      <OfferCard />
      <NavMenu />
      <BonusBanner />
      <RecentWatch />
      <UdemyBusiness />
      <CourseRecommend />
      <OneTop />
      <LastSearched />
      <TopicsRecommended />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpSystem />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/course/learn" element={<CoursePlaylist />} />
          <Route path="/course/get-courses/:id" element={<CourseGetCourse />} />
          <Route path='/cart' element={<CartSection />} />
          <Route path='/instructor' element={<Instructor />} />
          <Route path='/instructor/course' element={<Create />} />
          <Route path="/udemy-business/form" element={<UdemyBusinessForm />} />
        </Routes>
      </main>
      <Foooter />
    </div>
  );
}

export default App;
