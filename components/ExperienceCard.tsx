import React from "react";

interface ExperienceObjectProps {
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceObjectProps;
}) {
  const { company, location, startDate, endDate, description, skills } =
    experience;

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md bg-blue-300 h-fit w-full space-y-5">
      <h2 className="text-lg font-bold text-black">title</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:mx-10 md:space-y-0 space-y-2 bg-slate-200/50 p-2 rounded-lg text-slate-500">
        <p>
          {company} - {location}
        </p>

        <p>
          {startDate} - {endDate}
        </p>
      </div>

      <p className="text-gray-700">{description}</p>

      <div className="flex flex-wrap">
        {skills.map((item) => (
          <span
            key={item}
            className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-sm mr-2 mb-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
