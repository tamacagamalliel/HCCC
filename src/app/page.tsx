import {
  AccentMarquee,
  AdmissionsJourney,
  CampusCollage,
  DiscoverHccc,
  FinalCta,
  HeritageTimeline,
  HomeHero,
  LookingForSection,
  NewsEventsPreview,
  ProgramBrowser,
  ValuesEditorial,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AccentMarquee />
      <LookingForSection />
      <DiscoverHccc />
      <ValuesEditorial />
      <ProgramBrowser />
      <AdmissionsJourney />
      <CampusCollage />
      <HeritageTimeline />
      <NewsEventsPreview />
      <FinalCta />
    </>
  );
}
