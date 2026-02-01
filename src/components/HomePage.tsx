import { useEffect, useState } from "react";
import features, { type Feature } from "./featureslist";
const HomePage = () => {
  const [currentFeature, setCurrentFeature] = useState<Feature>(features[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prevFeature) => {
        const nextIndex = prevFeature.index % features.length;
        return features[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 justify-center items-center flex flex-col gap-6">
      <h1
        className="text-center text-3xl font-bold p-4
            bg-gradient-to-r from-orange-400 via-orange-500 to-red-500
            bg-clip-text text-transparent
            drop-shadow-[0_0_6px_rgba(251,146,60,0.6)]"
      >
        React JS Features Implemented
      </h1>

      <div
        className="bg-zinc-300 border border-yellow-500 rounded-xl p-4 gap-1
            flex flex-col items-start"
      >
        <h2
          className="px-3 py-1 border border-red-400 inline-flex text-sm font-bold
            bg-yellow-600 text-white rounded-3xl"
        >
          {currentFeature.difficultyLevel}
        </h2>

        <h2 className="text-2xl text-yellow-800 font-semibold">
          Featured: {currentFeature.name}
        </h2>

        <h2 className="text-md text-gray-700">
          Challenge {currentFeature.index} of {features.length}
        </h2>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-red-300 bg-zinc-700 rounded-2xl text-white 
            hover:scale-105 hover:bg-yellow-600 hover:text-3xl
            hover:border-2
            transform transition-all duration-300 cursor-pointer 
            flex justify-center items-center"
          >
            <h2 className="text-xl">{feature.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
