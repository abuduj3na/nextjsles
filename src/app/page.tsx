import { Pacifico } from "next/font/google";
import Image from "next/image";

const Pacifiko = Pacifico({
  subsets:["cyrillic"],
  weight: ["400"],
});

export default function Home() {
  return (
   <div  className="p-8 mt-80 bg-red-950">
      <h1 className={`text-blue-300 ${Pacifiko.className}`}>Meric</h1>
    <h2 className={Pacifiko.className} >deneme</h2>
    
   </div>
  );
}
