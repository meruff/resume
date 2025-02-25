import React from "react";
import Card from "./components/ui/Card";
import MarkdownToAnchor from "./components/util/MarkdownToAnchor";

export default function Projects({ data }) {
  if (!data) return null;

  return (
    <>
      <div className="header-title py-2.5">
        <h3 className="text-xl font-medium text-left">Projects</h3>
      </div>
      <ul className="relative text-left space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-custom-light/20 before:content-[''] dark:before:bg-custom-dark/20">
        {data.map((project) => (
          <li
            key={project.name}
            className="relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:h-4 before:w-4 before:rounded-full before:border-2 before:border-custom-light before:bg-white before:content-[''] dark:before:border-custom-dark dark:before:bg-gray-900"
          >
            <Card image={project.image} alt={project.name} link={project.link}>
              <h5 className="font-bold text-custom-light dark:text-custom-dark">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h5>
              <p className="text-sm/relaxed text-gray-700 dark:text-gray-400">
                <MarkdownToAnchor markdown={project.description} />
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
