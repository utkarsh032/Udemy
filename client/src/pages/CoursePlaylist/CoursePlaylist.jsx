import React from "react";
import { CoursePlaylistNav } from "./CoursePlaylistNav";
import { CoursePlaylistContent } from "./CoursePlaylistContent";
import { CourseVideoPlayer } from "./CourseVideoPlayer";

export const CoursePlaylist = () => {
  return (
    <div className="flex flex-col ">
      <CoursePlaylistNav />

      <div className="flex flex-grow">
        <div className="flex-grow bg-gray-100 pt-2">
          <CourseVideoPlayer />
        </div>

        <CoursePlaylistContent />
      </div>
    </div>
  );
};
