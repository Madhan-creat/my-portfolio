import { Router } from "@reach/router";
import {  Suspense, lazy } from "react";
import PageLoader from "./components/pageLoader/pageLoader.js";
import React from "react";

function App() {
  const Landing = lazy(() => import("./pages/landingpage/landingpage"));
  const Intro = lazy(() => import("./pages/Intro"));
  const Aboutme = lazy(() => import("./pages/Aboutme"));
  const Skills = lazy(() => import("./pages/Skills"));
  const Progress = lazy(() => import("./pages/Progress"));
  const Project = lazy(() => import("./pages/Project"));
  const ContactMe = lazy(() => import("./pages/ContactMe"));
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <PageLoader />;
  } else {
    return (
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Router>
            <Landing path="/" />
            <Intro path="/Intro" />
            <Aboutme path="/aboutme" />
            <Skills path="/Intro/skills" />
            <Progress path="/Intro/progress" />
            <Project path="/Intro/Project" />
            <ContactMe path="/Intro/contactme" />
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default App;
