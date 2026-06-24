import HomeHero from "@/components/home/HomeHero";
import DecadeTimeline from "@/components/home/DecadeTimeline";
import FeaturedStamps from "@/components/home/FeaturedStamps";
import DecadeOverview from "@/components/home/DecadeOverview";

export default function Home() {
  return (
    <>
      <HomeHero />
      <DecadeTimeline />
      <FeaturedStamps />
      <DecadeOverview />
    </>
  );
}
