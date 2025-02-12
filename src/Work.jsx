export default function Work({ data }) {
  if (!data) return null;

  const extractUrl = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex);
  };

  const renderTextWithUrl = (text) => {
    const urls = extractUrl(text);
    if (!urls) return text;

    return text.split(urls[0]).reduce((acc, part, index, array) => {
      if (index === array.length - 1) {
        return [...acc, part];
      }
      return [
        ...acc,
        part,
        <a key={index} href={urls[0]} target="_blank" rel="noopener noreferrer">
          {urls[0]}
        </a>,
      ];
    }, []);
  };

  return (
    <>
      <div className="header-title py-2.5">
        <h3 className="text-xl font-medium text-left">My Work Experience</h3>
      </div>
      <ul className="relative text-left space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-custom-light/20 before:content-[''] dark:before:bg-custom-dark/20">
        {data.toReversed().map((work) => (
          <li
            key={work.title}
            className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-custom-light/50 before:bg-white before:content-[''] dark:before:border-custom-dark/75 dark:before:bg-gray-950"
          >
            <h4 className="text-sm font-semibold text-custom-light dark:text-custom-dark">
              <i className="font-bold">{work.company}</i> {"//"} {work.years}
            </h4>
            <h5 className="mb-2 font-bold">{work.title}</h5>
            {work.description && (
              <p className="text-sm/relaxed text-gray-700 dark:text-gray-300">
                {work.description}
              </p>
            )}
            {work.listItems && (
              <div className="text-sm/relaxed text-gray-700 dark:text-gray-300">
                <ul className="mt-4 space-y-1 space-x-2 list-disc">
                  {work.listItems &&
                    work.listItems.map((listItem, index) => (
                      <li key={index} className="ml-2">
                        {renderTextWithUrl(listItem)}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {work.projects && (
              <div className="text-sm/relaxed text-gray-700 dark:text-gray-300">
                <h2 className="mt-4 text-[1rem] font-bold">Projects</h2>
                <ul className="mt-4 space-y-1 space-x-2 list-disc">
                  {work.projects.map((project, index) => (
                    <li key={index} className="ml-2">
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
