import { useRef, useState } from 'react';
import CourseVideo from '../../assets/courseVideo.mp4'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";
import { CourseOverview } from './CourseOverview';

export const CourseVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };
  const toggleMuted = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <div className="relative  bg-black  overflow-hidden shadow-lg">
        <video ref={videoRef} src={CourseVideo} className="w-full h-auto"
          controls={false} >
        </video>

        {/*Play Control*/}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
          <div className="flex items-center justify-between">
            <button onClick={togglePlay}
              className="text-white text-2xl p-2 rounded-full hover:bg-white/10">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/*Mute Control*/}
            <button
              onClick={toggleMuted}
              className="text-white text-2xl p-2 rounded-full hover:bg-white/10"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            {/*Screen Control*/}
            <button
              onClick={handleFullscreen}
              className="text-white text-2xl p-2 rounded-full hover:bg-white/10"
            >
              <FaExpand />
            </button>
          </div>
        </div>
      </div>

      <div>
        <CourseOverview />
      </div>
    </>
  )
}
