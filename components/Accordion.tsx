"use client";
import { useState } from "react";

export default function Accordion() {
  const sections = [
    {
      id: 1,
      title: "Skills",
      description:
        " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/skills",
    },
    {
      id: 2,
      title: "Experiences",
      description:
        " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/experiences",
    },
  ];
  const [expanded, setExpanded] = useState<number>(0);
  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? 0 : index);
  };
  return (
    <div className="w-full mt-20">
      {sections.map((item) => (
        <div key={item.id} className="flex flex-col">
          <span
            className="flex flex-row items-center justify-between border-y border-gray-100/30 text-3xl"
            onClick={() => toggleAccordion(item.id)}
          >
            <h2 className="text-blue-400 py-2">{item.title}</h2>
            <p className="text-blue-400 text-lg">
              {expanded == item.id ? "-" : "+"}
            </p>
          </span>
          <p className="text-lg">{expanded == item.id && item.description}</p>
        </div>
      ))}
    </div>
  );
}
