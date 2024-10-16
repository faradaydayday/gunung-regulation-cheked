import React from "react";
import NavbarApp from "../layout/NavbarApp";
import HeroSection from "../layout/HeroSection";
import Cooperation from "../layout/Cooperation";
import ButtonToTop from "../components/ButtonToTop";

import Card from "../layout/Card";

export default function HomePage() {
  return (
    <>
      <NavbarApp />
      <HeroSection />
      <Card />
      <Cooperation />
      <ButtonToTop />
    </>
  );
}
