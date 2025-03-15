"use client";

import { Button } from "@/components/ui/button"; // Button component

export default function About() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-5rem)] bg-gray-50 overflow-hidden">
      <div className="flex items-center justify-center max-w-4xl w-full px-4">
        {/* Left Section: Avatar and About Me */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          {/* Avatar */}
          <a href="https://github.com/AH07pro1">
            <img
              src="https://github.com/AH07pro1.png" // Replace with your GitHub username
              alt="Avatar"
              className="w-32 h-32 rounded-full mb-6"
            />
          </a>
          

          {/* About Me Section */}
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 mb-6">
            I am a 14 years old developer with experience in full-stack development, design, and game development.
            I  build clean, efficient, and user-friendly applications. I enjoy learning new technologies and building meaningful projects.
          </p>
          {/* Button Section */}
          <div className="flex justify-center">
            <Button variant="default">
              <a href="projects">View My Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
