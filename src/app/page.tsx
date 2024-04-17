import CategoryScore from "@/components/CategoryScore";
import data from "../data/data.json";

interface CategoryScores {
  category: string;
  score: number;
  icon: string;
}

export default function Home() {
  const [reaction, memory, verbal, visual] = data as CategoryScores[];
  return (
    <div className="flex lg:flex-row flex-col w-1/2 mx-auto my-52">
      <div className="flex flex-col justify-between items-center p-8 gap-4 bg-blue-700 rounded-3xl w-full">
        <h2 className="text-white text-2xl text-center">Your Result</h2>
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-800 to-blue-700 rounded-full w-40 h-40">
          <h3 className="text-white text-7xl text-center font-bold">76</h3>
          <p className="text-white text-center">of 100</p>
        </div>
        <h2 className="text-white text-2xl">Great</h2>
        <p className="text-white text-center mx-6">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className="flex flex-col bg-white drop-shadow-xl rounded-xl gap-4 p-8 w-full">
        <h2 className="text-2xl font-bold">Sumary</h2>
        <CategoryScore
          category={reaction.category}
          icon={reaction.icon}
          score={reaction.score}
          color="text-red-500"
          bgColor="bg-red-50"
        />
        <CategoryScore
          category={memory.category}
          icon={memory.icon}
          score={memory.score}
          color="text-yellow-500"
          bgColor="bg-yellow-50"
        />
        <CategoryScore
          category={verbal.category}
          icon={verbal.icon}
          score={verbal.score}
          color="text-green-500"
          bgColor="bg-green-50"
        />
        <CategoryScore
          category={visual.category}
          icon={visual.icon}
          score={visual.score}
          color="text-blue-800"
          bgColor="bg-blue-50"
        />
        <button className="bg-blue-950 text-white text-lg rounded-full p-3">
          Continue
        </button>
      </div>
    </div>
  );
}
