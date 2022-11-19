import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";

import SideBar from "./SideBar";

const Home = () => {
  return (
    <section className="flex h-screen ">
      <SideBar />

      <div className="w-full overflow-y-scroll">
        <Navbar />
        <Body />
      </div>
    </section>
  );
};

export default Home;
