import Image from "next/image";


interface CategoryScores {
  category: string;
  score: number;
  icon: string;
  bgColor?: string;
  color?: string;
}


export default function CategoryScore(props: CategoryScores) { 

  return (
    <div className={`flex ${props.bgColor ?? ''} rounded-md p-3 w-full justify-between`}>
      <div className="flex gap-2">
        <Image
          src={props.icon}
          alt={props.category}
          width={20}
          height={20}
        />
        <h3 className={`${props.color ?? ''} font-semibold`}>{props.category}</h3>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">{props.score}</span>
        <span className="text-zinc-500 font-semibold">/ 100</span>
      </div>
    </div>
  );
}
