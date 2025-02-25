import Card from "./components/ui/Card";

export default function Education({ data }) {
  if (!data) return null;

  return (
    <>
      <div className="header-title py-2.5">
        <h3 className="text-xl font-medium text-left">My Education</h3>
      </div>
      <ul className="relative text-left space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-custom-light/20 before:content-[''] dark:before:bg-custom-dark/20">
        {data.map((education) => (
          <li
            key={education.degree}
            className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-custom-light/50 before:bg-white before:content-[''] dark:before:border-custom-dark/75 dark:before:bg-gray-950"
          >
            <Card>
              <h4 className="text-sm font-semibold text-custom-light dark:text-custom-dark">
                {education.years}
              </h4>
              <h5 className="mb-2 font-bold">{education.degree}</h5>
              <p className="text-sm/relaxed text-gray-700 dark:text-gray-300">
                {education.school}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
