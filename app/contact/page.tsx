"use client";

import { Button } from "@/components/ui/button"; // Button component

export default function Contact() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-5rem)] bg-gray-50 overflow-hidden">
      <div className="flex items-center justify-center max-w-4xl w-full px-4 text-center">
        {/* Contact Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">Contact Me</h1>
          
          <p className="text-lg text-gray-600 mb-4">
            Feel free to reach out to me through any of the following platforms:
          </p>

          {/* Contact Information */}
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Email:</strong> <a href="mailto:adam.hilali@gmail.com" className="text-blue-500 hover:underline">adam.hilali@gmail.com</a>
            </li>
            <li>
              <strong>Discord:</strong> <span className="text-blue-500">untitled_01.</span>
            </li>
            <li>
              <strong>GitHub:</strong> <a href="https://github.com/AH07pro1" target="_blank" className="text-blue-500 hover:underline">github.com/AH07pro1</a>
            </li>
          </ul>

          {/* Button to go back or further action (optional) */}
          <div className="flex justify-center mt-8">
            <Button variant="default">
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
