import Card from "./components/ui/Card";

export default function Education({ data }) {
  if (!data) return null;

  return (
    <>
      <div className="header-title py-2.5">
        <h3 id="education" className="text-left text-xl font-medium">
          Where I Learned
        </h3>
      </div>
      <ul className="relative space-y-6 pl-6 text-left before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-custom-light/20 before:content-[''] dark:before:bg-custom-dark/20">
        {data.map((education) => (
          <li
            key={education.degree}
            className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-custom-light/50 before:bg-white before:content-[''] dark:before:border-custom-dark/75 dark:before:bg-gray-950"
          >
            <Card>
              <h4 className="mb-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-custom-light dark:text-custom-dark">
                <div className="flex gap-2">
                  <img
                    src={education.icon}
                    className="inline h-6 w-6 rounded"
                  />
                  <i className="text-base font-bold">{education.school}</i>
                </div>
                <span className="hidden md:inline-block">{"//"}</span>
                <div className="w-full md:w-auto">{education.years}</div>
              </h4>
              <h5 className="mb-2 font-bold">{education.degree}</h5>
              <p className="text-sm/relaxed text-gray-700 dark:text-gray-400">
                {education.college}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
