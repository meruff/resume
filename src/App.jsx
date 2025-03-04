import "./App.css";
import { useEffect, useState } from "react";
import Info from "./Info";
import Bio from "./Bio";
import MobileToolbar from "./components/ui/MobileToolbar";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      fetch("/resumeData.json")
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="min-h-dvh min-w-[320px] bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <Info data={data.info} />
            <Bio data={data.bio} />
          </div>
          <MobileToolbar />
        </div>
      </div>
    </>
  );
}

export default App;
