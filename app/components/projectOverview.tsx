import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Project from "../interface/projectInterface";

export default function ProjectOverview({
  title,
  image,
  description,
  date,
  link,
}: Project) {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      {/* Ensure the card takes up full available height and is flexible */}
      <Card className="w-full max-w-lg border-2 border-gray-300 shadow-md rounded-xl bg-white flex flex-col h-full">
        <CardHeader className="p-4">
          <CardTitle className="text-2xl font-bold text-gray-800">{title}</CardTitle>
          <p className="text-sm text-gray-500">{date.toDateString()}</p>
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </div>
          <p className="text-gray-600 mt-4 flex-grow">{description}</p>
          <Button asChild className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
