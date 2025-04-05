import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreOption from "../../components/ExploreOption/ExploreOption";

import ServiceDisplay from "../../components/ServiceDisplay/ServiceDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreOption category={category} setCategory={setCategory} />
      <ServiceDisplay category={category}/>
    </div>
  );
};

export default Home;
