import ExperienceCard from "@/components/ExperienceCard";
import React from "react";

export default function ExperienceSection() {
  // Descriptive function name
  const experiences = [
    {
      title: "Experience 1",
      company: "Company 1",
      location: "City, State",
      startDate: "YYYY-MM-DD",
      endDate: "YYYY-MM-DD",
      description: "Experience description",
      skills: [
        "Skill 1",
        "Skill 2",
        "Skill 3",
        "Skill 4",
        "Skill 5",
        "Skill 6",
      ],
    },
    // ... more experiences (if applicable)
  ];

  return (
    <>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </>
  );
}
