import React from "react";
import { FaGithub, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  const socialmedia = [
    {
      id: 1,
      icon: FaMailBulk,
      link: "mailto:night_2000@live.com",
      displayText: "night_2000@live.com",
    },
    {
      id: 2,
      icon: FaGithub,
      link: "https://github.com",
      displayText: "github.com",
    },
  ];

  return (
    <footer className="bg-gray-800 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-300">About</h3>
          <p className="text-gray-400">
            Aenean facilisis quis ante sit amet rhoncus. Cras viverra, mi non
            vehicula ullamcorper.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row md:justify-end space-y-5 md:space-y-0 md:space-x-5 items-center">
          {socialmedia.map((item) => (
            <div
              key={item.id}
              className="flex flex-row space-x-4 items-center text-center"
            >
              <item.icon className="text-lg font-semibold text-gray-300 hover:text-red-500" />
              <a
                href={item.link}
                className="items-center justify-center space-x-2 text-gray-400 hover:underline"
              >
                <span>{item.displayText}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
