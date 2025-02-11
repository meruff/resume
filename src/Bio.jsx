import Education from "./Education";
import Work from "./Work";

export default function Bio({ data }) {
  if (!data) return;

  return (
    <>
      <div className="mx-auto max-w-2xl space-y-16 p-5 md:col-span-8 md:p-10">
        <Work data={data.work} />
        <Education data={data.education} />
      </div>
    </>
  );
}
