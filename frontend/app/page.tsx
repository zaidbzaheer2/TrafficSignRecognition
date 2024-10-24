import Arrow from "@/components/Arrow";
import Loading from "@/components/Loading";
import Output from "@/components/Output";
import Upload from "@/components/Upload";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Traffic Sign Recognition'
}
export default function Home() {
  return (
    <div className="home w-full h-screen mt-5">
      <div className="flow h-full gap-y-10 flex flex-col lg:flex-row w-full items-center justify-around">
        <Upload/>
        <Arrow/>
        <Loading/>
        <Arrow/>
        <Output/>
      </div>
    </div>
  );
}
