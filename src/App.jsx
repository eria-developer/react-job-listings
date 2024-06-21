import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero
        title="Become a better developer"
        subtitle="Find a real job that fits your skill set"
      />
      <HomeCards />
      <JobListings />

      <ViewAllJobs />
    </>
  );
};

export default App;
