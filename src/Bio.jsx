import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";

export default function Bio({ data }) {
  if (!data) return;

  return (
    <>
      <div className="mx-auto space-y-8 p-5 md:col-span-8 md:pl-16 lg:py-10">
        <Work data={data.work} />
        <Education data={data.education} />
        <Projects data={data.projects} />
      </div>
    </>
  );
}
