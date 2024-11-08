import React from "react";
import { auth } from "@/auth";
import Header from "../components/Header";
import Slider from "@/components/ui/sliders/Slider";

const HomePage = async () => {
  const session = await auth();

  return (
    <>
      <Header session={session} />
      {/* <NavBarAdmin session={session} /> */}
      <div className="h-[650px]">
        <Slider />
      </div>
      <div className="flex flex-col lg:flex-row  transition-flex ">
        <div className="bg-black w-full h-[300px]   transition-flex "></div>
        <div className="bg-pink-600 w-full h-[300px] transition-all   transition-flex "></div>
      </div>
    </>
  );
};
export default HomePage;
