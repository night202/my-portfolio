import React from "react";
import Image from "next/image";

const skillsData = [
  {
    title: "HTML",
    description: "Journey in blockchain development.",
    image: "/skills/python.jpg",
  },
  {
    title: "CSS",
    description: "Journey in blockchain development.",
    image: "/skills/python.jpg",
  },
  {
    title: "JavaScript",
    description: "Journey in blockchain development.",
    image: "/skills/python.jpg",
  },
  {
    title: "Python",
    description: "Journey in blockchain development.",
    image: "/skills/python.jpg",
  },
];

const SkillsCard = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{skill.title}</h3>
              <p className="text-gray-300 mt-2">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
